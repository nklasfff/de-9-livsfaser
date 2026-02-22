/* ============================================================
   APP — Main application init for De 9 Livsfaser
   ============================================================ */

/* ---- Danish locale helpers ---- */
const MONTHS_DA = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'];
const WEEKDAYS_DA = ['s\u00f8ndag','mandag','tirsdag','onsdag','torsdag','fredag','l\u00f8rdag'];

function formatDanishDate(d) {
  const date = d || new Date();
  return `${WEEKDAYS_DA[date.getDay()]} ${date.getDate()}. ${MONTHS_DA[date.getMonth()]}`;
}

/* ---- Shared helpers ---- */
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

/* ---- Get user cycles (reused across screens) ---- */
function getUserCycles() {
  const user = Storage.getUser();
  if (!user || !user.birthdate) return null;
  const cycles = Calculations.allCycles(user.birthdate, new Date());
  const dominant = Calculations.getWeightedDominant(cycles);
  return { user, cycles, dominant };
}

/* ============================================================
   CHECK-IN & JOURNAL — Sprint 2
   ============================================================ */

const TrackingState = {
  checkinMood: null,
  trackingPeriod: '7d',
  journalFilter: 'recent'
};

const MOOD_LABELS = {
  'vand': 'Stille', 'trae': 'Voksende', 'ild': 'Intens',
  'jord': 'Rodfæstet', 'metal': 'Klar'
};

/* ---- selectMood: Global — called from HTML onclick on ci-btn ---- */
function selectMood(id, el) {
  TrackingState.checkinMood = id;

  // Visual: remove active from siblings, add to this one
  const parent = el.closest('.ci-btns');
  if (parent) {
    parent.querySelectorAll('.ci-btn').forEach(b => b.classList.remove('ci-btn--active'));
  }
  el.classList.add('ci-btn--active');

  // On forside (no save button), save immediately as quick check-in
  const saveBtn = document.getElementById('udvikling-save-btn');
  if (!saveBtn) {
    const data = getUserCycles();
    const entry = {
      date: Storage.getLocalDateStr(),
      mood: id,
      note: '',
      cycles: data ? {
        lifePhase: data.cycles.lifePhase.element,
        season: data.cycles.season.element,
        weekday: data.cycles.weekday.element,
        organ: data.cycles.organ.element,
        dominant: data.dominant.element
      } : null
    };
    Storage.saveCheckin(entry);

    const statusEl = document.getElementById('forside-checkin-status');
    if (statusEl) statusEl.textContent = 'Check-in gemt ✓';
    showActionToast('Check-in gemt ✓');

    // Disable further clicks (one per day from forside)
    if (parent) {
      parent.querySelectorAll('.ci-btn').forEach(b => {
        b.style.pointerEvents = 'none';
        b.style.opacity = '0.6';
      });
      el.style.opacity = '1';
    }
  }
}

/* ---- saveCheckin: Global — called from rej-udvikling save button ---- */
function saveCheckin() {
  const mood = TrackingState.checkinMood;
  if (!mood) {
    showActionToast('Vælg en energi først');
    return;
  }

  const noteEl = document.getElementById('udvikling-note');
  const note = noteEl ? noteEl.value.trim() : '';

  const data = getUserCycles();
  const entry = {
    date: Storage.getLocalDateStr(),
    mood: mood,
    note: note,
    cycles: data ? {
      lifePhase: data.cycles.lifePhase.element,
      season: data.cycles.season.element,
      weekday: data.cycles.weekday.element,
      organ: data.cycles.organ.element,
      dominant: data.dominant.element
    } : null
  };

  Storage.saveCheckin(entry);
  TrackingState.checkinMood = null;
  if (noteEl) noteEl.value = '';

  // Reset mood buttons
  document.querySelectorAll('#udvikling-checkin .ci-btn').forEach(b => b.classList.remove('ci-btn--active'));

  showActionToast('Check-in gemt ✓');

  // Re-render
  initRejUdvikling();
}

/* ---- saveJournal: Global — called from rej-journal save button ---- */
function saveJournal() {
  const noteEl = document.getElementById('journal-note');
  const note = noteEl ? noteEl.value.trim() : '';
  if (!note) {
    showActionToast('Skriv noget først');
    return;
  }

  const data = getUserCycles();
  const entry = {
    date: Storage.getLocalDateStr(),
    text: note,
    phase: data ? data.cycles.lifePhase.phase : null,
    season: data ? data.cycles.season.season : null,
    element: data ? data.dominant.element : null
  };

  // Save
  const journal = JSON.parse(localStorage.getItem('livsfaser_journal') || '[]');
  journal.unshift(entry);
  localStorage.setItem('livsfaser_journal', JSON.stringify(journal));

  if (noteEl) noteEl.value = '';
  showActionToast('Refleksion gemt ✓');

  // Re-render entries
  renderJournalEntries();
}

/* ---- setTrackingPeriod: Filter chips for rej-udvikling ---- */
function setTrackingPeriod(period, el) {
  TrackingState.trackingPeriod = period;

  // Update chip styling
  const parent = el.parentElement;
  if (parent) {
    parent.querySelectorAll('div').forEach(chip => {
      chip.style.background = 'rgba(138,150,169,0.04)';
      chip.style.fontWeight = '400';
      chip.style.border = '1px solid rgba(138,150,169,0.08)';
    });
    el.style.background = 'rgba(138,150,169,0.12)';
    el.style.fontWeight = '500';
    el.style.border = 'none';
  }

  // Re-render stats and timeline
  renderCheckinStats();
  renderCheckinTimeline();
}

/* ---- setJournalFilter: Filter chips for rej-journal ---- */
function setJournalFilter(filter, el) {
  TrackingState.journalFilter = filter;

  // Update chip styling
  const parent = el.parentElement;
  if (parent) {
    parent.querySelectorAll('div').forEach(chip => {
      chip.style.background = 'rgba(138,150,169,0.04)';
      chip.style.fontWeight = '400';
      chip.style.border = '1px solid rgba(138,150,169,0.08)';
    });
    el.style.background = 'rgba(138,150,169,0.12)';
    el.style.fontWeight = '500';
    el.style.border = 'none';
  }

  renderJournalEntries();
}

/* ---- Helper: Get checkins for period ---- */
function getCheckinsForPeriod(period) {
  const all = Storage.getCheckins();
  if (period === 'all') return all;

  const now = new Date();
  const days = period === '7d' ? 7 : period === '30d' ? 30 : 90;
  const cutoff = new Date(now.getFullYear(), now.getMonth(), now.getDate() - days);

  return all.filter(c => {
    const d = new Date(c.date);
    return d >= cutoff;
  });
}

/* ---- Render check-in stats (rej-udvikling) ---- */
function renderCheckinStats() {
  const statsEl = document.getElementById('udvikling-stats');
  if (!statsEl) return;

  const checkins = getCheckinsForPeriod(TrackingState.trackingPeriod);
  const journal = JSON.parse(localStorage.getItem('livsfaser_journal') || '[]');

  if (checkins.length === 0) return; // Keep mockup data

  // Count unique elements
  const elements = new Set();
  checkins.forEach(c => { if (c.mood) elements.add(c.mood); });

  // Calculate streak
  let streak = 0;
  const today = Storage.getLocalDateStr();
  const dateSet = new Set(checkins.map(c => c.date));
  let checkDate = new Date();
  while (true) {
    const ds = Storage.getLocalDateStr(checkDate);
    if (dateSet.has(ds)) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }

  statsEl.innerHTML = `
    <div class="stat-box"><div class="stat-number">${checkins.length}</div><div class="stat-label-text">Check-ins</div></div>
    <div class="stat-box"><div class="stat-number">${journal.length}</div><div class="stat-label-text">Refleksioner</div></div>
    <div class="stat-box"><div class="stat-number">${elements.size}<span style="font-size:12px;font-style:normal;opacity:0.8">/5</span></div><div class="stat-label-text">Elementer</div></div>
    <div class="stat-box"><div class="stat-number">${streak}</div><div class="stat-label-text">Dages streak</div></div>
  `;
}

/* ---- Render check-in timeline (rej-udvikling) ---- */
function renderCheckinTimeline() {
  const el = document.getElementById('udvikling-timeline');
  if (!el) return;

  const checkins = getCheckinsForPeriod(TrackingState.trackingPeriod);
  if (checkins.length === 0) {
    el.innerHTML = '';
    return;
  }

  // Sort newest first
  const sorted = [...checkins].sort((a, b) => b.date.localeCompare(a.date));

  el.innerHTML = `
    <div class="group-label" style="color:#8a96a9">Dine check-ins</div>
    ${sorted.slice(0, 20).map(c => {
      const label = MOOD_LABELS[c.mood] || c.mood;
      const dateObj = new Date(c.date + 'T12:00:00');
      const dateStr = `${dateObj.getDate()}. ${MONTHS_DA[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
      const elLabel = c.cycles && c.cycles.dominant ? Calculations.ELEMENT_LABELS[c.cycles.dominant] || '' : '';
      return `<div style="background:rgba(138,150,169,0.03);border:1px solid rgba(138,150,169,0.07);border-radius:14px;padding:14px;margin:0 0 8px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:${c.note ? '6px' : '0'}">
          <div>
            <span style="font-family:sans-serif;font-size:12px;color:#8892a1;letter-spacing:1px;text-transform:uppercase">${dateStr}</span>
          </div>
          <div style="display:flex;gap:6px">
            <span style="padding:3px 10px;border-radius:12px;font-family:sans-serif;font-size:12px;color:#8892a1;background:rgba(138,150,169,0.06)">${label}</span>
            ${elLabel ? `<span style="padding:3px 10px;border-radius:12px;font-family:sans-serif;font-size:12px;color:#8892a1;background:rgba(138,150,169,0.06)">${elLabel}</span>` : ''}
          </div>
        </div>
        ${c.note ? `<div style="font-family:Georgia,serif;font-size:14px;color:#6e7d91;font-style:italic;line-height:1.5">${c.note}</div>` : ''}
      </div>`;
    }).join('')}
  `;
}

/* ---- setFavFilter: Filter tabs for rej-favoritter ---- */
function setFavFilter(tab, el) {
  // Update chip styling
  const parent = el.parentElement;
  if (parent) {
    parent.querySelectorAll('div').forEach(chip => {
      chip.style.background = 'rgba(138,150,169,0.04)';
      chip.style.fontWeight = '400';
      chip.style.border = '1px solid rgba(138,150,169,0.08)';
    });
    el.style.background = 'rgba(138,150,169,0.12)';
    el.style.fontWeight = '500';
    el.style.border = 'none';
  }

  // Show/hide sections
  document.querySelectorAll('[data-fav-tab]').forEach(section => {
    section.style.display = section.dataset.favTab === tab ? '' : 'none';
  });
}

/* ---- setOpdFilter: Filter tabs for rej-opdagelser ---- */
function setOpdFilter(cat, el) {
  // Update chip styling
  const parent = el.parentElement;
  if (parent) {
    parent.querySelectorAll('div').forEach(chip => {
      chip.style.background = 'rgba(138,150,169,0.04)';
      chip.style.fontWeight = '400';
      chip.style.border = '1px solid rgba(138,150,169,0.08)';
    });
    el.style.background = 'rgba(138,150,169,0.12)';
    el.style.fontWeight = '500';
    el.style.border = 'none';
  }

  // Show/hide cards
  document.querySelectorAll('[data-opd-cat]').forEach(card => {
    card.style.display = (cat === 'alle' || card.dataset.opdCat === cat) ? '' : 'none';
  });
}

/* ---- Render journal entries (rej-journal) ---- */
function renderJournalEntries() {
  const el = document.getElementById('journal-entries');
  if (!el) return;

  const all = JSON.parse(localStorage.getItem('livsfaser_journal') || '[]');

  if (all.length === 0) return; // Keep mockup example entries

  // Filter
  let filtered = all;
  const now = new Date();
  if (TrackingState.journalFilter === 'recent') {
    filtered = all.slice(0, 5);
  } else if (TrackingState.journalFilter === 'month') {
    const monthStart = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-01`;
    filtered = all.filter(j => j.date >= monthStart);
  }

  el.innerHTML = filtered.map(j => {
    const dateObj = new Date(j.date + 'T12:00:00');
    const dateStr = `${dateObj.getDate()}. ${MONTHS_DA[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
    const elLabel = j.element ? (Calculations.ELEMENT_LABELS[j.element] || j.element) : '';
    const phase = j.phase ? `Fase ${j.phase}` : '';
    const season = j.season || '';

    const tags = [phase, season, elLabel].filter(Boolean);

    return `<div style="background:rgba(138,150,169,0.03);border:1px solid rgba(138,150,169,0.07);border-radius:14px;padding:16px;margin:0 0 10px">
      <div style="font-family:sans-serif;font-size:12px;color:#8892a1;letter-spacing:1.5px;font-weight:400;text-transform:uppercase;margin-bottom:6px">${dateStr}</div>
      <div style="font-family:sans-serif;font-size:15px;color:#6e7d91;line-height:1.6;margin-bottom:10px">${j.text}</div>
      ${tags.length > 0 ? `<div style="display:flex;gap:6px;flex-wrap:wrap">
        ${tags.map(t => `<span style="padding:3px 10px;border-radius:12px;font-family:sans-serif;font-size:12px;color:#8892a1;background:rgba(138,150,169,0.06)">${t}</span>`).join('')}
      </div>` : ''}
    </div>`;
  }).join('');
}

/* ---- Analyze inner climate ---- */
function analyzeClimate(elements, dominant) {
  const counts = {};
  elements.forEach(e => { counts[e] = (counts[e] || 0) + 1; });
  if (!dominant) dominant = Calculations.getDominant(elements);
  const nourishing = { 'VAND': 'TR\u00c6', 'TR\u00c6': 'ILD', 'ILD': 'JORD', 'JORD': 'METAL', 'METAL': 'VAND' };

  // Count nourishing pairs
  let nourishCount = 0;
  let challengeCount = 0;
  const elList = Object.keys(counts);
  for (let i = 0; i < elList.length; i++) {
    for (let j = i + 1; j < elList.length; j++) {
      if (nourishing[elList[i]] === elList[j] || nourishing[elList[j]] === elList[i]) nourishCount++;
      // controlling: VAND->ILD, TR\u00c6->JORD, ILD->METAL, JORD->VAND, METAL->TR\u00c6
      const ctrl = { 'VAND': 'ILD', 'TR\u00c6': 'JORD', 'ILD': 'METAL', 'JORD': 'VAND', 'METAL': 'TR\u00c6' };
      if (ctrl[elList[i]] === elList[j] || ctrl[elList[j]] === elList[i]) challengeCount++;
    }
  }

  if ((dominant.score || 0) >= 5 || dominant.count >= 3) return INNER_CLIMATE.fuld_resonans;
  if (nourishCount >= 2) return INNER_CLIMATE.naerende_flow;
  if (challengeCount >= 2) return INNER_CLIMATE.indre_storm;
  if (challengeCount === 1 && nourishCount >= 1) return INNER_CLIMATE.kreativ_spaending;
  return INNER_CLIMATE.stille_balance;
}

/* ============================================================
   ACTION BAR — Del / Gem / Kopiér
   ============================================================ */

function actionShare() {
  const url = window.location.href;
  const title = 'De 9 Livsfasers Energi';
  if (navigator.share) {
    navigator.share({ title, url }).catch(() => {});
  } else {
    actionCopyLink();
  }
}

function actionCopyLink() {
  const url = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => showActionToast('Link kopieret'));
  }
}

function actionToggleSave() {
  const screen = Router.currentScreen;
  if (!screen) return;
  const saved = JSON.parse(localStorage.getItem('saved_screens') || '[]');
  const idx = saved.indexOf(screen);
  if (idx >= 0) {
    saved.splice(idx, 1);
    showActionToast('Fjernet fra gemte');
  } else {
    saved.push(screen);
    showActionToast('Gemt');
  }
  localStorage.setItem('saved_screens', JSON.stringify(saved));
  updateSaveBtn();
}

function updateSaveBtn() {
  const btn = document.getElementById('action-save-btn');
  if (!btn) return;
  const saved = JSON.parse(localStorage.getItem('saved_screens') || '[]');
  const isSaved = saved.includes(Router.currentScreen);
  btn.querySelector('.save-label').textContent = isSaved ? 'Gemt' : 'Gem';
}

function showActionToast(msg) {
  let toast = document.getElementById('action-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'action-toast';
    toast.className = 'action-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

function getActionBarHTML() {
  return `<div class="action-bar">
    <button class="action-btn" onclick="actionShare()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
      Del
    </button>
    <button class="action-btn" onclick="actionCopyLink()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
      Kopi\u00e9r
    </button>
    <button class="action-btn" id="action-save-btn" onclick="actionToggleSave()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
      <span class="save-label">Gem</span>
    </button>
  </div>`;
}

/* ============================================================
   DRAWER — Hamburger menu
   ============================================================ */

function toggleDrawer() {
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawer-overlay');
  if (!drawer) return;
  const isOpen = drawer.classList.contains('open');
  drawer.classList.toggle('open', !isOpen);
  if (overlay) overlay.classList.toggle('open', !isOpen);
}

function toggleSection(header) {
  const section = header.closest('.drawer-section');
  if (!section) return;
  // Close others
  document.querySelectorAll('.drawer-section.open').forEach(s => {
    if (s !== section) s.classList.remove('open');
  });
  section.classList.toggle('open');
}

/* ============================================================
   DOMContentLoaded — App boot
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => {
      console.warn('SW registration failed:', err);
    });
  }

  // Initialize router (determines first screen)
  Router.init();
});

/* ============================================================
   SCREEN INIT FUNCTIONS
   Called by the router after loading each screen's HTML
   ============================================================ */

/* ---- Onboarding ---- */
function initOnboarding() {
  const form = document.getElementById('onboarding-form');
  if (!form) return;

  const input = document.getElementById('birth-input');
  const btn = document.getElementById('birth-btn');

  if (btn) {
    btn.addEventListener('click', () => {
      const val = input ? input.value : '';
      if (!val) return;

      const date = new Date(val);
      if (isNaN(date.getTime())) {
        alert('Indtast venligst en gyldig dato');
        return;
      }

      Storage.saveUser({
        birthdate: val,
        createdAt: Storage.getLocalDateStr()
      });

      Router.navigate('onboarding-result', { direction: 'forward' });
    });
  }
}

/* ---- Onboarding Result ---- */
function initOnboardingResult() {
  const data = getUserCycles();
  if (!data) { Router.navigate('onboarding'); return; }
  const { cycles, dominant } = data;
  const elLabel = Calculations.ELEMENT_LABELS[dominant.element];
  const elTegn = Calculations.ELEMENT_TEGN[dominant.element];
  const phase = cycles.lifePhase;

  // Kanji
  setText('result-kanji', elTegn);

  // Climate
  const climate = analyzeClimate(cycles.elements, dominant);
  setText('result-climate', climate.label);
  setText('result-main-text', climate.text);

  // Sub-text based on dominant element
  const subTexts = {
    'VAND': 'Du m\u00e6rker det m\u00e5ske som en dyb ro, eller som en stille kraft der b\u00e6rer dig.',
    'TR\u00c6': 'Du m\u00e6rker det m\u00e5ske som en trang til at handle, skabe og bev\u00e6ge dig fremad.',
    'ILD': 'Du m\u00e6rker det m\u00e5ske som en varme i brystet, en gl\u00e6de der s\u00f8ger forbindelse.',
    'JORD': 'Du m\u00e6rker det m\u00e5ske som en trang til at n\u00e6re, samle og skabe tryghed.',
    'METAL': 'Du m\u00e6rker det m\u00e5ske som klarhed \u2014 en evne til at se hvad der virkelig t\u00e6ller.'
  };
  setText('result-sub-text', subTexts[dominant.element] || '');

  // Profile rows
  const rows = [
    { label: 'Livsfase', value: `Fase ${phase.phase} \u2013 ${phase.name} (${elLabel})` },
    { label: '\u00c5rstid', value: `${cycles.season.season} \u2013 ${Calculations.ELEMENT_LABELS[cycles.season.element]}` },
    { label: 'M\u00e5ned', value: `${MONTHS_DA[new Date().getMonth()]} \u2013 ${Calculations.ELEMENT_LABELS[cycles.monthCycle.element]}` },
    { label: 'Ugedag', value: `${cycles.weekday.day} \u2013 ${Calculations.ELEMENT_LABELS[cycles.weekday.element]}` },
    { label: 'Organur', value: `${cycles.organ.hours} \u2013 ${cycles.organ.organ} (${Calculations.ELEMENT_LABELS[cycles.organ.element]})` }
  ];
  const profilEl = document.getElementById('result-profil-rows');
  if (profilEl) {
    profilEl.innerHTML = rows.map(r =>
      `<div class="pr"><span class="pk">${r.label}</span><span class="pv">${r.value}</span></div>`
    ).join('');
  }

  // Feelings
  const phaseDetail = typeof LIVSFASE_DETAIL !== 'undefined' ? LIVSFASE_DETAIL[phase.phase] : null;
  if (phaseDetail) {
    setText('result-feelings-label', `${elLabel}-elementets f\u00f8lelser`);
    setText('result-feelings-text', `I balance: ${phaseDetail.folelser.balance}. I ubalance: ${phaseDetail.folelser.ubalance}.`);
  }

  // Profil fold toggle
  const profilFold = document.querySelector('.profil-fold .ph');
  if (profilFold) {
    profilFold.addEventListener('click', () => {
      const parent = profilFold.closest('.profil-fold');
      parent.classList.toggle('open');
    });
  }

  // Continue button
  const continueBtn = document.getElementById('continue-btn');
  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      Storage.setOnboarded();
      Router.navigate('forside', { direction: 'forward' });
    });
  }
}

/* ---- Forside (Home) ---- */
function initForside() {
  const data = getUserCycles();
  if (!data) return;
  const { cycles, dominant } = data;
  const now = new Date();

  // Date header
  setText('forside-date', `I dag \u00b7 ${formatDanishDate(now)}`);

  // Concentric circles text
  const phase = cycles.lifePhase;
  const elLabel = (el) => Calculations.ELEMENT_LABELS[el] || el;

  const circLivsfase = document.getElementById('circle-livsfase');
  if (circLivsfase) circLivsfase.textContent = `Fase ${phase.phase} \u2013 ${elLabel(phase.element)}`;

  const circAarstid = document.getElementById('circle-aarstid');
  if (circAarstid) circAarstid.textContent = `${cycles.season.season} \u2013 ${elLabel(cycles.season.element)}`;

  const circMaaned = document.getElementById('circle-maaned');
  if (circMaaned) {
    const monthName = MONTHS_DA[now.getMonth()];
    circMaaned.textContent = `${monthName.charAt(0).toUpperCase() + monthName.slice(1)} \u2013 ${elLabel(cycles.monthCycle.element)}`;
  }

  const circUgedag = document.getElementById('circle-ugedag');
  if (circUgedag) circUgedag.textContent = `${cycles.weekday.day} \u2013 ${elLabel(cycles.weekday.element)}`;

  const circOrganur = document.getElementById('circle-organur');
  if (circOrganur) circOrganur.textContent = `${cycles.organ.hours} \u2013 ${cycles.organ.organ}`;

  // Climate card
  const climate = analyzeClimate(cycles.elements, dominant);
  setText('forside-climate-text', climate.text);
  setText('forside-climate-sub', `${climate.label} \u2014 din energi samler sig i ${elLabel(dominant.element)}`);

  // Check-in status — show if already done today
  const today = Storage.getLocalDateStr();
  const todayCheckin = Storage.getCheckins().find(c => c.date === today);
  const checkinStatus = document.getElementById('forside-checkin-status');
  if (todayCheckin && checkinStatus) {
    checkinStatus.textContent = `I dag: ${MOOD_LABELS[todayCheckin.mood] || todayCheckin.mood} ✓`;
    // Disable further mood selection
    const ciBtns = document.querySelectorAll('.checkin-card .ci-btn');
    const moodOrder = ['vand', 'trae', 'ild', 'jord', 'metal'];
    ciBtns.forEach((btn, i) => {
      btn.style.pointerEvents = 'none';
      btn.style.opacity = '0.6';
      if (moodOrder[i] === todayCheckin.mood) {
        btn.classList.add('ci-btn--active');
        btn.style.opacity = '1';
      }
    });
  }

  // Praksis cards — based on dominant element, rotated daily
  const domEl = dominant.element;
  const ri = Calculations.dayRotation(3);
  const yoga = typeof INSIGHT_YOGA !== 'undefined' && INSIGHT_YOGA[domEl] ? INSIGHT_YOGA[domEl][ri % INSIGHT_YOGA[domEl].length] : null;
  const healing = typeof HEALING_SOUNDS !== 'undefined' ? HEALING_SOUNDS[domEl] : null;
  const food = typeof INSIGHT_FOOD !== 'undefined' && INSIGHT_FOOD[domEl] ? INSIGHT_FOOD[domEl][ri % INSIGHT_FOOD[domEl].length] : null;

  const praksisCards = document.querySelectorAll('.praksis-card');
  if (praksisCards.length >= 3) {
    if (yoga) {
      praksisCards[0].querySelector('.pk-label').textContent = `Yin Yoga \u00b7 ${elLabel(domEl)}`;
      praksisCards[0].querySelector('.pk-name').textContent = yoga.pose.split('(')[0].trim();
      praksisCards[0].querySelector('.pk-desc').textContent = yoga.desc;
    }
    if (healing) {
      praksisCards[1].querySelector('.pk-label').textContent = `Healinglyd \u00b7 ${elLabel(domEl)}`;
      praksisCards[1].querySelector('.pk-name').textContent = healing.lyd;
      praksisCards[1].querySelector('.pk-desc').textContent = healing.desc;
    }
    if (food) {
      praksisCards[2].querySelector('.pk-label').textContent = `N\u00e6ring \u00b7 ${elLabel(domEl)}`;
      praksisCards[2].querySelector('.pk-name').textContent = food.item;
      praksisCards[2].querySelector('.pk-desc').textContent = food.desc;
    }
  }
}

/* ---- Cyklusser (Section 1) ---- */
function initCyklusser() {
  const data = getUserCycles();
  if (!data) return;
  const { cycles, dominant } = data;
  const domEl = dominant.element;
  const elLabel = Calculations.ELEMENT_LABELS[domEl];

  // Element analysis bars
  const analysis = document.getElementById('cyk-element-analysis');
  if (analysis) {
    const bars = analysis.querySelectorAll('.ea-bar');
    const total = cycles.elements.length;
    const counts = dominant.counts;
    const order = ['VAND', 'TR\u00c6', 'ILD', 'JORD', 'METAL'];
    bars.forEach((bar, i) => {
      if (i < order.length) {
        const el = order[i];
        const c = counts[el] || 0;
        const pct = Math.round((c / total) * 100);
        const fill = bar.querySelector('.ea-fill');
        if (fill) fill.style.width = pct + '%';
        const label = bar.querySelector('.ea-label');
        if (label) label.textContent = Calculations.ELEMENT_LABELS[el];
        const val = bar.querySelector('.ea-val');
        if (val) val.textContent = c > 0 ? `${c}/${total}` : '';
      }
    });
  }

  // Texts
  setText('cyk-ea-text', `${elLabel} dominerer. Din energi samler sig i dybden \u2014 dine stærkeste cyklusser peger mod ${elLabel}.`);

  // Feeling text
  const feelTexts = {
    'VAND': 'N\u00e5r Vand dominerer, kan det f\u00f8les som dyb stilhed \u2014 men ogs\u00e5 som en uro der ikke har ord endnu. M\u00e5ske tr\u00e6kker du dig lidt ind i dig selv. Begge dele er \u00e6gte.',
    'TR\u00c6': 'N\u00e5r Tr\u00e6 dominerer, m\u00e6rker du en kraft der vil frem. Noget i dig s\u00f8ger retning og v\u00e6kst. Frustration kan v\u00e6re et tegn p\u00e5 at du er klar til forandring.',
    'ILD': 'N\u00e5r Ild dominerer, er du varm og n\u00e6rv\u00e6rende. Alt f\u00f8les intenst \u2014 gl\u00e6de, l\u00e6ngsel, forbindelse. Pas p\u00e5 ikke at bruge al energien p\u00e5 \u00e9n gang.',
    'JORD': 'N\u00e5r Jord dominerer, s\u00f8ger du fundament. Du m\u00e6rker m\u00e5ske en trang til orden, omsorg og n\u00e6rvr. Bekymring er jordens skygge \u2014 giv den plads uden at lade den styre.',
    'METAL': 'N\u00e5r Metal dominerer, ser du tingene klart. Det overfl\u00f8dige falder v\u00e6k. Det kan f\u00f8les ensomt, men det er ogs\u00e5 en befrielse at se hvad der virkelig t\u00e6ller.'
  };
  setText('cyk-feeling-text', feelTexts[domEl] || '');

  // Featured text
  setText('cyk-featured-text', `Dine stærkeste cyklusser peger mod ${elLabel}. Din energi samler sig i én retning.`);

  // Healing sound
  const healing = typeof HEALING_SOUNDS !== 'undefined' ? HEALING_SOUNDS[domEl] : null;
  if (healing) {
    setText('cyk-healing-title', `${healing.lyd} \u2014 ${elLabel}s healinglyd`);
    setText('cyk-healing-desc', healing.desc);
  }
}

/* ---- Relationer (Section 2) ---- */
function initRelationer() {
  const data = getUserCycles();
  if (!data) return;
  const { cycles, dominant } = data;
  const elLabel = Calculations.ELEMENT_LABELS[dominant.element];

  // User profile
  setText('rel-profil-dig', `Fase ${cycles.lifePhase.phase} \u00b7 ${elLabel}`);

  // Samtale-\u00e5bnere fra data
  const samtale = typeof TO_RYTMER_SAMTALE !== 'undefined' ? TO_RYTMER_SAMTALE[dominant.element] : null;
  if (samtale) {
    setText('rel-samtale-title', `\u00ab\u2009${samtale.spoerg}\u2009\u00bb`);
    setText('rel-samtale-desc', `${elLabel}-energi har brug for at blive set i sin helhed. Sp\u00f8rgsm\u00e5let \u00e5bner rummet.`);
  }
}

/* ---- Praksis (Section 3) ---- */
function initPraksis() {
  const data = getUserCycles();
  if (!data) return;
  const { cycles, dominant } = data;
  const domEl = dominant.element;
  const elLabel = Calculations.ELEMENT_LABELS[domEl];

  // Insight text
  setText('pra-insight-text', `${elLabel} dominerer lige nu. Din krop beder om ${
    domEl === 'VAND' ? 'stilhed, dybde og n\u00e6ring nedefra' :
    domEl === 'TR\u00c6' ? 'bev\u00e6gelse, v\u00e6kst og frisk luft' :
    domEl === 'ILD' ? 'forbindelse, gl\u00e6de og varme' :
    domEl === 'JORD' ? 'n\u00e6ring, tryghed og regularitet' :
    'klarhed, renhed og dyb vejrtr\u00e6kning'
  }.`);

  // Feeling text
  const praFeelTexts = {
    'VAND': 'N\u00e5r Vand dominerer, m\u00e6rker du det m\u00e5ske som tr\u00e6thed der ikke forsvinder med s\u00f8vn. Kroppen beder ikke om mere. Den beder om dybere.',
    'TR\u00c6': 'N\u00e5r Tr\u00e6 dominerer, m\u00e6rker du det som en rastl\u00f8shed i kroppen. Musklerne vil bruges, leddene vil bev\u00e6ge sig. F\u00f8lg impulsen.',
    'ILD': 'N\u00e5r Ild dominerer, str\u00e5ler du udad. Hjertet banker st\u00e6rkere, h\u00e6nderne er varme. Men husk: ogs\u00e5 ild har brug for br\u00e6ndstof.',
    'JORD': 'N\u00e5r Jord dominerer, m\u00e6rker du det i maven. Ford\u00f8jelsen taler, kroppen beder om varm, n\u00e6rende mad og rytme.',
    'METAL': 'N\u00e5r Metal dominerer, m\u00e6rker du det i \u00e5ndedr\u00e6ttet. Lungerne beder om luft, kroppen om renhed. Giv dig selv rum.'
  };
  setText('pra-feeling-text', praFeelTexts[domEl] || '');

  // Featured label & text
  setText('pra-featured-label', `I dag \u00b7 ${elLabel}`);
  setText('pra-featured-text', `${elLabel} beder om ${
    domEl === 'VAND' ? 'stilhed og dybde. Lyt indad. N\u00e6r det der allerede er der.' :
    domEl === 'TR\u00c6' ? 'handling og retning. Tag det f\u00f8rste skridt mod det der kalder.' :
    domEl === 'ILD' ? 'forbindelse og varme. R\u00e6k ud til nogen du holder af.' :
    domEl === 'JORD' ? 'n\u00e6ring og omsorg. Start med dig selv.' :
    'klarhed og slip. Giv slip p\u00e5 \u00e9n ting der tynger.'
  }`);

  // Quick action — yoga (rotated daily)
  const praRi = Calculations.dayRotation(3);
  const yoga = typeof INSIGHT_YOGA !== 'undefined' && INSIGHT_YOGA[domEl] ? INSIGHT_YOGA[domEl][praRi % INSIGHT_YOGA[domEl].length] : null;
  if (yoga) {
    setText('pra-quick-title', `${yoga.pose.split('(')[0].trim()} \u00b7 Yin Yoga`);
    setText('pra-quick-desc', yoga.desc);
  }

  // Breath text
  const breathTexts = {
    'VAND': 'Vandets \u00e5ndedr\u00e6t. Langsomt og dybt \u2014 som b\u00f8lger der tr\u00e6kker sig tilbage.',
    'TR\u00c6': 'Tr\u00e6ets \u00e5ndedr\u00e6t. Ind med retning, ud med frihed. Som vinden i grenene.',
    'ILD': 'Ildens \u00e5ndedr\u00e6t. Kort, kraftfuldt ind \u2014 lang, varm ud\u00e5nding. Som en flamme der puster.',
    'JORD': 'Jordens \u00e5ndedr\u00e6t. Dybt i maven. Roligt og regelm\u00e6ssigt som jordbanken selv.',
    'METAL': 'Metallets \u00e5ndedr\u00e6t. Fokuseret ind gennem n\u00e6sen, lang kontrolleret ud\u00e5nding. Som en klokkes klang.'
  };
  setText('pra-breath-text', breathTexts[domEl] || '');
}

/* ---- Rejse (Section 4) ---- */
function initRejse() {
  const data = getUserCycles();
  if (!data) return;
  const { cycles, dominant } = data;
  const phase = cycles.lifePhase;
  const elLabel = Calculations.ELEMENT_LABELS[phase.element];
  const phaseDetail = typeof LIVSFASE_DETAIL !== 'undefined' ? LIVSFASE_DETAIL[phase.phase] : null;

  // Milestone
  const age = cycles.age;
  const yearInPhase = age - phase.startAge;
  const phaseLength = phase.endAge - phase.startAge;
  const pct = Math.min(Math.round((yearInPhase / phaseLength) * 100), 100);

  setText('rej-milestone-phase', `Fase ${phase.phase} \u00b7 ${phase.name}`);
  setText('rej-milestone-years', `Du er i \u00e5r ${yearInPhase} af denne fase`);

  const fill = document.getElementById('rej-milestone-fill');
  const marker = document.getElementById('rej-milestone-marker');
  if (fill) fill.style.width = pct + '%';
  if (marker) marker.style.left = pct + '%';

  if (phaseDetail) {
    setText('rej-milestone-text', phaseDetail.introText.split('.').slice(0, 2).join('.') + '.');
  }
}

/* ---- Vinduer (Section 5) ---- */
function initVinduer() {
  // Vinduer is mostly static content with date picker interaction
  // Will be made more dynamic in Sprint 11
}

/* ============================================================
   NIVEAU 2 — Cirkel-detaljer (0B-0G) fra forside
   ============================================================ */

function initCirDitLiv() {
  // Static content from preview — no dynamic init needed
}

function initCirLivsfase() {
  // Static content from preview — no dynamic init needed
}

function initCirAarstid() {
  // Static content from preview — no dynamic init needed
}

function initCirMaaned() {
  // Static content from preview — no dynamic init needed
}

function initCirUgedag() {
  // Static content from preview — no dynamic init needed
}

function initCirOrganur() {
  // Static content from preview — no dynamic init needed
}

/* ============================================================
   NIVEAU 2 — Cyklusser undersider
   ============================================================ */

/* ---- Cyklusser i Cyklusser (cyk-cic) ---- */
function initCykCic() {
  const data = getUserCycles();
  if (!data) return;
  const { cycles, dominant } = data;
  const elLabel = Calculations.ELEMENT_LABELS[dominant.element];
  const nourishing = { 'VAND': 'TRÆ', 'TRÆ': 'ILD', 'ILD': 'JORD', 'JORD': 'METAL', 'METAL': 'VAND' };
  const controlling = { 'VAND': 'ILD', 'TRÆ': 'JORD', 'ILD': 'METAL', 'JORD': 'VAND', 'METAL': 'TRÆ' };

  // Analyze all 10 pairs
  const cycleNames = ['Livsfase', 'Årstid', 'Måned', 'Ugedag', 'Organur'];
  const els = cycles.elements;
  const pairs = [];
  for (let i = 0; i < els.length; i++) {
    for (let j = i + 1; j < els.length; j++) {
      let type = 'spejler';
      if (els[i] === els[j]) type = 'resonans';
      else if (nourishing[els[i]] === els[j] || nourishing[els[j]] === els[i]) type = 'naerer';
      else if (controlling[els[i]] === els[j] || controlling[els[j]] === els[i]) type = 'udfordrer';
      pairs.push({ a: cycleNames[i], b: cycleNames[j], elA: els[i], elB: els[j], type });
    }
  }

  // Update climate text
  const climate = analyzeClimate(cycles.elements, dominant);
  setText('cic-climate-label', climate.label);
  setText('cic-climate-text', climate.text);

  // Update pair list
  const pairList = document.getElementById('cic-pair-list');
  if (pairList) {
    pairList.innerHTML = pairs.map(p => {
      const typeLabels = { resonans: 'Resonans', naerer: 'Nærende', udfordrer: 'Udfordrende', spejler: 'Spejlende' };
      const elA = Calculations.ELEMENT_LABELS[p.elA];
      const elB = Calculations.ELEMENT_LABELS[p.elB];
      return `<div class="card"><div class="card-row"><div>
        <div class="card-label">${p.a} · ${elA} — ${p.b} · ${elB}</div>
        <div class="card-title">${typeLabels[p.type]}</div>
        <div class="card-desc">${getCyclePairDesc(p.type, p.elA, p.elB)}</div>
      </div></div></div>`;
    }).join('');
  }

  // Summary
  const resonansCount = pairs.filter(p => p.type === 'resonans').length;
  const naerendeCount = pairs.filter(p => p.type === 'naerer').length;
  setText('cic-summary', `${resonansCount} par i resonans, ${naerendeCount} nærende par. ${elLabel} samler dit energifelt.`);
}

function getCyclePairDesc(type, elA, elB) {
  const a = Calculations.ELEMENT_LABELS[elA];
  const b = Calculations.ELEMENT_LABELS[elB];
  if (type === 'resonans') return `${a} møder ${a}. Når to cyklusser deler element, forstærkes energien. Du mærker det som klarhed.`;
  if (type === 'naerer') return `${a} nærer ${b}. En blød overgang hvor det ene element bærer det andet videre.`;
  if (type === 'udfordrer') return `${a} og ${b} udfordrer hinanden. Det skaber spænding — men også mulighed for vækst.`;
  return `${a} og ${b} spejler hinanden stille. Ingen konflikt, ingen forstærkning — bare sameksistens.`;
}

/* ---- De Ni Livsfaser (cyk-ni-faser) ---- */
function initCykNiFaser() {
  const data = getUserCycles();
  if (!data) return;
  const phase = data.cycles.lifePhase;

  // Highlight current phase card
  const cards = document.querySelectorAll('.fase-card');
  cards.forEach(card => {
    const faseNum = parseInt(card.dataset.fase);
    if (faseNum === phase.phase) {
      card.classList.add('active');
    }
  });

  // Update header
  setText('ni-faser-current', `Du er i Fase ${phase.phase} · ${phase.name}`);
}

/* ---- De Fire Uger (cyk-fire-uger) ---- */
function initCykFireUger() {
  const data = getUserCycles();
  if (!data) return;
  const { cycles } = data;

  // Check if user tracks menstruation
  const user = data.user;
  const tracksMenstruation = user.menstrualStart ? true : false;

  if (tracksMenstruation && typeof MENSTRUAL_WEEK_DATA !== 'undefined') {
    const menstrualDay = Calculations.calculateMenstrualDay(user.menstrualStart, new Date());
    const weekNum = menstrualDay ? menstrualDay.week : 1;
    setText('fire-uger-title', 'Din månedscyklus');
    setText('fire-uger-current', `Dag ${menstrualDay ? menstrualDay.day : '?'} · Uge ${weekNum}`);
    const weekData = MENSTRUAL_WEEK_DATA[weekNum];
    if (weekData) {
      setText('fire-uger-desc', weekData.bodyText);
    }
  } else if (typeof MOON_CYCLE_DATA !== 'undefined') {
    setText('fire-uger-title', 'Månens fire faser');
    setText('fire-uger-current', 'Følg månens rytme');
  }
}

/* ---- Kroppens Store Overgange (cyk-overgange) ---- */
function initCykOvergange() {
  const data = getUserCycles();
  if (!data) return;
  const age = data.cycles.age;
  const phase = data.cycles.lifePhase;

  // Highlight relevant transition based on age
  setText('overgange-current', `Du er ${age} år · Fase ${phase.phase} · ${phase.name}`);
}

/* ---- Kontrolcyklussen (cyk-kontrol) ---- */
function initCykKontrol() {
  const data = getUserCycles();
  if (!data) return;
  const domEl = data.dominant.element;
  const elLabel = Calculations.ELEMENT_LABELS[domEl];

  // Update dominant element display
  setText('kontrol-dominant', `Dit element: ${elLabel}`);

  // Get KONTROL_TEKST for dominant element
  const kontrol = typeof KONTROL_TEKST !== 'undefined' ? KONTROL_TEKST[domEl] : null;
  if (kontrol) {
    setText('kontrol-naerer', kontrol.naerer);
    setText('kontrol-kontrollerer', kontrol.kontrollerer);
    setText('kontrol-naeret-af', kontrol.naeret_af);
    setText('kontrol-kontrolleret-af', kontrol.kontrolleret_af);
  }
}

/* ============================================================
   NIVEAU 2 — Praksis undersider
   ============================================================ */

/* ---- Yin Yoga (pra-yin-yoga) ---- */
function initPraYinYoga() {
  const data = getUserCycles();
  if (!data) return;
  const domEl = data.dominant.element;
  const elLabel = Calculations.ELEMENT_LABELS[domEl];

  // Update featured section
  const yoga = typeof YIN_YOGA_FULL !== 'undefined' ? YIN_YOGA_FULL[domEl] : null;
  if (yoga && yoga.length > 0) {
    setText('yoga-featured-label', `Anbefalet i dag · ${elLabel}`);
    setText('yoga-featured-text', `${yoga[0].pose} ${yoga[0].desc}`);
  }

  // Update element label
  setText('yoga-element-label', `Dit element · ${elLabel}`);
}

/* ---- EFT Tapping (pra-eft) ---- */
function initPraEft() {
  const data = getUserCycles();
  if (!data) return;
  const domEl = data.dominant.element;
  const elLabel = Calculations.ELEMENT_LABELS[domEl];

  setText('eft-featured-label', `Anbefalet i dag · ${elLabel}`);
}

/* ---- Følelsernes Hjul (pra-foelelser) ---- */
function initPraFoelelser() {
  const data = getUserCycles();
  if (!data) return;
  const domEl = data.dominant.element;
  const elLabel = Calculations.ELEMENT_LABELS[domEl];

  const feelMap = {
    'VAND': { feeling: 'Frygt', desc: 'den stille respekt for det ukendte' },
    'TRÆ': { feeling: 'Vrede', desc: 'den bundne kraft der søger retning' },
    'ILD': { feeling: 'Glæde', desc: 'den åbne flamme der søger forbindelse' },
    'JORD': { feeling: 'Bekymring', desc: 'den tunge omsorg der søger fundament' },
    'METAL': { feeling: 'Sorg', desc: 'det nødvendige tab der gør plads' }
  };
  const feel = feelMap[domEl] || feelMap['VAND'];

  setText('foelelser-featured-label', `Aktivt felt · ${elLabel} · ${feel.feeling}`);
  setText('foelelser-featured-desc', feel.desc);
}

/* ---- Mindfulness (pra-mindfulness) ---- */
function initPraMindfulness() {
  const data = getUserCycles();
  if (!data) return;
  const domEl = data.dominant.element;
  const elLabel = Calculations.ELEMENT_LABELS[domEl];

  const mindMap = {
    'VAND': 'Vand finder stilhed i dybden. Lyt til det der er under tankerne.',
    'TRÆ': 'Træ finder nærvær i bevægelse. Mærk kroppen strække sig mod lyset.',
    'ILD': 'Ild finder nærvær i forbindelse. Mærk hjertet og dem du elsker.',
    'JORD': 'Jord finder nærvær i forankring. Mærk fødderne mod jorden.',
    'METAL': 'Metal finder nærvær i frigivelse. Slip med udåndingen.'
  };

  setText('mindfulness-featured-label', `Din vej ind · ${elLabel}`);
  setText('mindfulness-featured-text', mindMap[domEl] || '');
}

/* ---- Refleksion (pra-refleksion) ---- */
function initPraRefleksion() {
  const data = getUserCycles();
  if (!data) return;
  const phase = data.cycles.lifePhase;
  const elLabel = Calculations.ELEMENT_LABELS[phase.element];

  setText('refleksion-featured-label', `Fase ${phase.phase} · ${phase.name} · ${elLabel}`);

  // Load phase-specific questions from data
  const questions = typeof REFLEKSION_DATA !== 'undefined' ? REFLEKSION_DATA[phase.phase] : null;
  const qList = document.getElementById('refleksion-questions');
  if (questions && qList) {
    qList.innerHTML = questions.map((q, i) => `
      <div class="card"><div class="card-row"><div>
        <div class="card-label">Spørgsmål ${i + 1}</div>
        <div class="card-title">${q}</div>
        <div class="card-desc">Tag dette spørgsmål med dig. Skriv i 10 minutter uden at stoppe.</div>
      </div><div class="card-arrow" style="color:rgba(122,144,139,0.4)">→</div></div></div>
    `).join('');
  }
}

/* ---- Kost & Urter (pra-kost) ---- */
function initPraKost() {
  const data = getUserCycles();
  if (!data) return;
  const domEl = data.dominant.element;
  const elLabel = Calculations.ELEMENT_LABELS[domEl];

  setText('kost-featured-label', `Næring i dag · ${elLabel}`);

  // Update food cards from INSIGHT_FOOD
  const foods = typeof INSIGHT_FOOD !== 'undefined' ? INSIGHT_FOOD[domEl] : null;
  const foodList = document.getElementById('kost-food-list');
  if (foods && foodList) {
    foodList.innerHTML = foods.map(f => `
      <div class="card"><div class="card-row"><div>
        <div class="card-label">${f.item}</div>
        <div class="card-title">${f.item}</div>
        <div class="card-desc">${f.desc}</div>
      </div><div class="card-arrow" style="color:rgba(122,144,139,0.4)">→</div></div></div>
    `).join('');
  }

  // Healing sound
  const healing = typeof HEALING_SOUNDS !== 'undefined' ? HEALING_SOUNDS[domEl] : null;
  if (healing) {
    setText('kost-healing-label', `${elLabel}s healinglyd · ${healing.lyd}`);
    setText('kost-healing-desc', healing.desc);
  }
}

/* ---- Healinglyde (pra-healing) ---- */
function initPraHealing() {
  const data = getUserCycles();
  if (!data) return;
  const domEl = data.dominant.element;
  const elLabel = Calculations.ELEMENT_LABELS[domEl];
  const healing = typeof HEALING_SOUNDS !== 'undefined' ? HEALING_SOUNDS[domEl] : null;

  if (healing) {
    setText('healing-featured-label', `Din lyd · ${elLabel}`);
    setText('healing-featured-text', `${healing.lyd} — ${healing.desc}`);
  }
}

/* ---- Hvad Har Hjulpet Andre (pra-inspiration) ---- */
function initPraInspiration() {
  const data = getUserCycles();
  if (!data) return;
  const phase = data.cycles.lifePhase;

  setText('inspiration-featured-label', `Mest brugt i Fase ${phase.phase}`);
}

/* ============================================================
   NIVEAU 2 — Vinduer undersider
   ============================================================ */

/* ---- Mit Livs Tidslinje (vin-tidslinje) ---- */
function initVinTidslinje() {
  const data = getUserCycles();
  if (!data) return;
  const age = data.cycles.age;
  const phase = data.cycles.lifePhase;

  setText('tidslinje-current', `Du er ${age} år · Fase ${phase.phase} · ${phase.name}`);

  // Highlight current phase in timeline
  const phases = document.querySelectorAll('.timeline-phase');
  phases.forEach(p => {
    const faseNum = parseInt(p.dataset.fase);
    if (faseNum === phase.phase) {
      p.classList.add('active');
    }
  });
}

/* ---- Vigtige Øjeblikke (vin-oejeblikke) ---- */
function initVinOejeblikke() {
  const data = getUserCycles();
  if (!data) return;
  const phase = data.cycles.lifePhase;

  setText('oejeblikke-phase', `Fase ${phase.phase} · ${phase.name}`);
}

/* ============================================================
   NIVEAU 2 — Relationer undersider
   ============================================================ */

function initRelLigeNu() {
  const data = getUserCycles();
  if (!data) return;
  const elLabel = Calculations.ELEMENT_LABELS[data.dominant.element];
  setText('rel-featured-label', `Dig · ${elLabel}`);
  setText('rel-featured-text', `${elLabel} dominerer dine cyklusser. Se hvordan det møder dine relationers elementer.`);
}

function initRelToRytmer() {
  const data = getUserCycles();
  if (!data) return;
  const phase = data.cycles.lifePhase;
  setText('rytmer-featured-label', `Din fase · ${phase.phase} · ${phase.name}`);
}

function initRelTreGen() {
  const data = getUserCycles();
  if (!data) return;
  const phase = data.cycles.lifePhase;
  const elLabel = Calculations.ELEMENT_LABELS[phase.element];
  setText('tregen-featured-label', `Du · Fase ${phase.phase} · ${elLabel}`);
}

function initRelJeresEnergi() {
  const dateInput = document.getElementById('energi-date');
  const btn = document.getElementById('energi-btn');
  const resultEl = document.getElementById('energi-result');

  if (btn && dateInput) {
    btn.addEventListener('click', () => {
      const val = dateInput.value;
      if (!val) return;
      const targetDate = new Date(val);
      const user = Storage.getUser();
      if (!user || !user.birthdate) return;

      const cycles = Calculations.allCycles(user.birthdate, targetDate);
      const dominant = Calculations.getWeightedDominant(cycles);
      const elLabel = Calculations.ELEMENT_LABELS[dominant.element];

      if (resultEl) {
        resultEl.innerHTML = `
          <div class="card" style="margin-top:16px">
            <div class="card-label">${formatDanishDate(targetDate)}</div>
            <div class="card-title">Din energi · ${elLabel}</div>
            <div class="card-desc">
              Din energi samler sig i ${elLabel}.
              Livsfase: ${Calculations.ELEMENT_LABELS[cycles.lifePhase.element]} ·
              Årstid: ${cycles.season.season} · Ugedag: ${cycles.weekday.day}
            </div>
          </div>
        `;
        resultEl.style.display = 'block';
      }
    });
  }
}

function initRelEpigenetik() {
  const data = getUserCycles();
  if (!data) return;
  const elLabel = Calculations.ELEMENT_LABELS[data.dominant.element];
  setText('epigenetik-featured-label', `Dit element · ${elLabel}`);
}

/* ============================================================
   NIVEAU 2 — Rejse undersider
   ============================================================ */

function initRejUdvikling() {
  const data = getUserCycles();
  if (!data) return;
  const phase = data.cycles.lifePhase;
  const elLabel = Calculations.ELEMENT_LABELS[data.dominant.element];
  setText('udvikling-featured-label', `Din udvikling · ${elLabel}`);

  // Check if already checked in today
  const today = Storage.getLocalDateStr();
  const checkins = Storage.getCheckins();
  const todayCheckin = checkins.find(c => c.date === today);
  const statusEl = document.getElementById('udvikling-checkin-status');

  if (todayCheckin) {
    if (statusEl) statusEl.textContent = `Du har allerede tjekket ind i dag (${MOOD_LABELS[todayCheckin.mood] || todayCheckin.mood})`;

    // Pre-highlight the mood button
    const btns = document.querySelectorAll('#udvikling-checkin .ci-btn');
    const moodOrder = ['vand', 'trae', 'ild', 'jord', 'metal'];
    btns.forEach((btn, i) => {
      if (moodOrder[i] === todayCheckin.mood) btn.classList.add('ci-btn--active');
    });
  }

  // Update stats with real data
  renderCheckinStats();

  // Update featured text with real data
  if (checkins.length > 0) {
    const streak = calculateStreak(checkins);
    const elCounts = {};
    checkins.forEach(c => { if (c.mood) elCounts[c.mood] = (elCounts[c.mood] || 0) + 1; });
    const topMood = Object.entries(elCounts).sort((a, b) => b[1] - a[1])[0];
    const topLabel = topMood ? (MOOD_LABELS[topMood[0]] || topMood[0]) : '';
    const featEl = document.querySelector('.featured.feat-rejse .featured-text');
    if (featEl && checkins.length >= 3) {
      featEl.textContent = `${checkins.length} check-ins. ${streak > 1 ? streak + ' dages streak. ' : ''}Dit dominerende humør er ${topLabel} — og et mønster begynder at vise sig.`;
    }
  }

  // Render timeline
  renderCheckinTimeline();
}

function calculateStreak(checkins) {
  let streak = 0;
  let checkDate = new Date();
  const dateSet = new Set(checkins.map(c => c.date));
  while (true) {
    const ds = Storage.getLocalDateStr(checkDate);
    if (dateSet.has(ds)) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

function initRejJournal() {
  const data = getUserCycles();
  if (!data) return;
  setText('journal-featured-label', `Din journal · Fase ${data.cycles.lifePhase.phase}`);

  // Render saved journal entries (only if there are any — otherwise keep mockup examples)
  renderJournalEntries();

  // Update featured text with real count
  const journal = JSON.parse(localStorage.getItem('livsfaser_journal') || '[]');
  if (journal.length > 0) {
    const featEl = document.querySelector('.featured.feat-rejse .featured-text');
    if (featEl) {
      const phase = data.cycles.lifePhase;
      featEl.textContent = `${journal.length} refleksion${journal.length !== 1 ? 'er' : ''}. Dine ord samler sig — og over tid træder mønstre frem du ikke kunne se indefra.`;
    }
  }
}

function initRejFavoritter() {
  // Load saved favorites from localStorage
  const favs = Storage.getFavorites ? Storage.getFavorites() : {};
  const list = document.getElementById('favoritter-list');
  if (list) {
    const screens = favs.screens || [];
    if (screens.length === 0) {
      list.innerHTML = '<div class="card"><div class="card-row"><div><div class="card-desc">Du har endnu ingen favoritter. Gem sider du vil vende tilbage til.</div></div></div></div>';
    } else {
      list.innerHTML = screens.map(s => `
        <div class="card" onclick="Router.navigate('${s}')"><div class="card-row"><div>
          <div class="card-title">${s}</div>
        </div><div class="card-arrow" style="color:rgba(138,150,169,0.4)">→</div></div></div>
      `).join('');
    }
  }
}

function initRejOpdagelser() {
  const data = getUserCycles();
  if (!data) return;
  setText('opdagelser-featured-label', `Fase ${data.cycles.lifePhase.phase} · opdagelser`);
}

function initRejAlleFaser() {
  const data = getUserCycles();
  if (!data) return;
  const phase = data.cycles.lifePhase;
  setText('alle-faser-current', `Du er i Fase ${phase.phase} · ${phase.name}`);

  // Highlight current phase
  const cards = document.querySelectorAll('.fase-card');
  cards.forEach(card => {
    const faseNum = parseInt(card.dataset.fase);
    if (faseNum === phase.phase) card.classList.add('active');
  });
}

function initRejBaggrund() {
  // Mostly static content
}

/* ============================================================
   NIVEAU 2 — Utility
   ============================================================ */

function initSoeg() {
  const input = document.getElementById('soeg-input');
  if (input) {
    input.addEventListener('input', () => {
      const q = input.value.toLowerCase().trim();
      const results = document.getElementById('soeg-results');
      const list = document.getElementById('soeg-results-list');
      if (!q || q.length < 2) {
        if (results) results.style.display = 'none';
        return;
      }
      // Simple search across screen names
      const matches = Object.keys(Router.screens).filter(name => {
        return name.includes(q) || (Router.screens[name].tone && Router.screens[name].tone.includes(q));
      });
      if (results && list) {
        results.style.display = 'block';
        list.innerHTML = matches.length > 0
          ? matches.map(m => `<div class="card" onclick="Router.navigate('${m}')"><div class="card-row"><div><div class="card-title">${m}</div></div><div class="card-arrow">→</div></div></div>`).join('')
          : '<div class="card"><div class="card-row"><div><div class="card-desc">Ingen resultater</div></div></div></div>';
      }
    });
  }
}

/* ---- Indstillinger helpers ---- */
const IND_DEFAULTS = {
  menstruation: false, moon: true, cycleLength: 28,
  morning: true, evening: true, cycleShift: false, season: true, weekly: false,
  morningTime: '07:30', eveningTime: '21:00',
  anon: true, collective: true, share: true,
  dark: false, system: true
};

// Toggle ID → settings key mapping
const IND_TOGGLE_MAP = {
  'ind-toggle-menstruation': 'menstruation', 'ind-toggle-moon': 'moon',
  'ind-toggle-morning': 'morning', 'ind-toggle-evening': 'evening',
  'ind-toggle-cycle-shift': 'cycleShift', 'ind-toggle-season': 'season',
  'ind-toggle-weekly': 'weekly', 'ind-toggle-anon': 'anon',
  'ind-toggle-collective': 'collective', 'ind-toggle-share': 'share',
  'ind-toggle-dark': 'dark', 'ind-toggle-system': 'system'
};

function getIndSettings() {
  const saved = localStorage.getItem('indstillinger');
  if (saved) {
    const parsed = JSON.parse(saved);
    Object.keys(IND_DEFAULTS).forEach(k => { if (parsed[k] === undefined) parsed[k] = IND_DEFAULTS[k]; });
    return parsed;
  }
  return JSON.parse(JSON.stringify(IND_DEFAULTS));
}

function saveIndSettings(s) {
  localStorage.setItem('indstillinger', JSON.stringify(s));
}

// Global — called from onclick in HTML
function toggleIndSetting(el) {
  const id = el.id;
  const key = IND_TOGGLE_MAP[id];
  if (!key) return;

  const s = getIndSettings();
  s[key] = !s[key];
  saveIndSettings(s);

  // Update user.tracksMenstruation when menstruation toggle changes
  if (key === 'menstruation') {
    const u = Storage.getUser() || {};
    u.tracksMenstruation = s.menstruation;
    Storage.saveUser(u);
  }

  // Toggle CSS class
  el.classList.toggle('ind-toggle--on', s[key]);
}

function initIndstillinger() {
  const user = Storage.getUser();
  const settings = getIndSettings();

  // --- Profil ---
  if (user && user.birthdate) {
    const bd = new Date(user.birthdate);
    const formatted = `${bd.getDate()}. ${MONTHS_DA[bd.getMonth()]} ${bd.getFullYear()}`;
    setText('ind-birthdate', formatted);
    const input = document.getElementById('ind-birth-input');
    if (input) input.value = user.birthdate;

    // Phase info
    const cycles = Calculations.allCycles(user.birthdate, new Date());
    const phase = cycles.lifePhase;
    const elLabel = Calculations.ELEMENT_LABELS[phase.element];
    setText('ind-phase-info', `Du er ${Math.floor((new Date() - bd) / 31557600000)} år · Fase ${phase.phase}: ${phase.name} · ${elLabel}`);
  }

  // Name
  const nameInput = document.getElementById('ind-name-input');
  if (nameInput) {
    if (user && user.name) nameInput.value = user.name;
    if (!nameInput._bound) {
      nameInput._bound = true;
      nameInput.addEventListener('change', () => {
        const u = Storage.getUser() || {};
        u.name = nameInput.value.trim();
        Storage.saveUser(u);
      });
    }
  }

  // Save new birthdate
  const saveBtn = document.getElementById('ind-birth-save');
  if (saveBtn && !saveBtn._bound) {
    saveBtn._bound = true;
    saveBtn.addEventListener('click', () => {
      const input = document.getElementById('ind-birth-input');
      if (!input || !input.value) return;
      const u = Storage.getUser() || {};
      u.birthdate = input.value;
      Storage.saveUser(u);
      initIndstillinger(); // Re-render with new data
    });
  }

  // --- Restore toggle states from settings ---
  Object.entries(IND_TOGGLE_MAP).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('ind-toggle--on', !!settings[key]);
  });

  // --- Cycle length ---
  const cycleInput = document.getElementById('ind-cycle-length');
  if (cycleInput) {
    cycleInput.value = settings.cycleLength || 28;
    if (!cycleInput._bound) {
      cycleInput._bound = true;
      cycleInput.addEventListener('change', () => {
        const s = getIndSettings();
        s.cycleLength = parseInt(cycleInput.value) || 28;
        saveIndSettings(s);
      });
    }
  }

  // --- Notification times ---
  const morningTime = document.getElementById('ind-morning-time');
  if (morningTime) {
    morningTime.value = settings.morningTime || '07:30';
    if (!morningTime._bound) {
      morningTime._bound = true;
      morningTime.addEventListener('change', () => {
        const s = getIndSettings();
        s.morningTime = morningTime.value;
        saveIndSettings(s);
      });
    }
  }
  const eveningTime = document.getElementById('ind-evening-time');
  if (eveningTime) {
    eveningTime.value = settings.eveningTime || '21:00';
    if (!eveningTime._bound) {
      eveningTime._bound = true;
      eveningTime.addEventListener('change', () => {
        const s = getIndSettings();
        s.eveningTime = eveningTime.value;
        saveIndSettings(s);
      });
    }
  }

  // --- Relations count ---
  const relations = Storage.getRelations ? Storage.getRelations() : [];
  setText('ind-relations-count', `Du har ${relations.length} relation${relations.length !== 1 ? 'er' : ''} tilføjet.`);

  // --- Export ---
  const exportBtn = document.getElementById('ind-export');
  if (exportBtn && !exportBtn._bound) {
    exportBtn._bound = true;
    exportBtn.addEventListener('click', () => {
      const data = {
        user: Storage.getUser(),
        relations: Storage.getRelations ? Storage.getRelations() : [],
        indstillinger: getIndSettings(),
        checkins: JSON.parse(localStorage.getItem('checkins') || '[]'),
        journal: JSON.parse(localStorage.getItem('livsfaser_journal') || '[]'),
        reflections: JSON.parse(localStorage.getItem('livsfaser_reflections') || '[]'),
        favorites: JSON.parse(localStorage.getItem('favorites') || '{}')
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `livsfaser-backup-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  // --- Import ---
  const importBtn = document.getElementById('ind-import');
  if (importBtn && !importBtn._bound) {
    importBtn._bound = true;
    importBtn.addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json';
      input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          try {
            const data = JSON.parse(ev.target.result);
            if (data.user) Storage.saveUser(data.user);
            if (data.relations && Storage.saveRelations) Storage.saveRelations(data.relations);
            if (data.indstillinger) saveIndSettings(data.indstillinger);
            if (data.checkins) localStorage.setItem('checkins', JSON.stringify(data.checkins));
            if (data.journal) localStorage.setItem('livsfaser_journal', JSON.stringify(data.journal));
            if (data.reflections) localStorage.setItem('livsfaser_reflections', JSON.stringify(data.reflections));
            if (data.favorites) localStorage.setItem('favorites', JSON.stringify(data.favorites));
            alert('Data importeret!');
            initIndstillinger(); // Re-render
          } catch (err) {
            alert('Fejl: Filen kunne ikke læses.');
          }
        };
        reader.readAsText(file);
      };
      input.click();
    });
  }

  // --- Show onboarding ---
  const onboardingBtn = document.getElementById('ind-show-onboarding');
  if (onboardingBtn && !onboardingBtn._bound) {
    onboardingBtn._bound = true;
    onboardingBtn.addEventListener('click', () => {
      Router.navigate('onboarding');
    });
  }

  // --- Reset data ---
  const resetBtn = document.getElementById('ind-reset');
  if (resetBtn && !resetBtn._bound) {
    resetBtn._bound = true;
    resetBtn.addEventListener('click', () => {
      if (confirm('Er du sikker? Alle data slettes.')) {
        Storage.clearAll();
        localStorage.removeItem('indstillinger');
        localStorage.removeItem('checkins');
        localStorage.removeItem('livsfaser_journal');
        localStorage.removeItem('livsfaser_reflections');
        localStorage.removeItem('favorites');
        Router.navigate('onboarding', { direction: 'replace' });
      }
    });
  }
}

function initOmIsabelle() {
  // Mostly static content
}
