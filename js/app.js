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
  'jord': 'Rodfæstet', 'metal': 'Klar',
  'tung': 'Tung', 'rastloes': 'Rastløs', 'saarbar': 'Sårbar',
  'varm': 'Varm', 'urolig': 'Urolig'
};

const MOOD_ELEMENT_MAP = {
  'vand': 'VAND', 'trae': 'TRÆ', 'ild': 'ILD', 'jord': 'JORD', 'metal': 'METAL',
  'tung': 'VAND', 'rastloes': 'TRÆ', 'saarbar': 'METAL', 'varm': 'ILD', 'urolig': 'JORD'
};

/* ---- Mood empathy texts (Isabelle's voice) ---- */
const MOOD_EMPATI = {
  vand: 'Stilheden er din styrke lige nu. Vandet i dig s\u00f8ger indad \u2014 giv det plads.',
  trae: 'Du vokser. M\u00e5ske kan du m\u00e6rke det som en uro, men det er livskraft der udfolder sig.',
  ild: 'Din ild br\u00e6nder. Den energi du m\u00e6rker er pr\u00e6cis d\u00e9r, hvor din kraft samler sig.',
  jord: 'Du st\u00e5r solidt. N\u00e5r jorden b\u00e6rer dig, kan du b\u00e6re andre.',
  metal: 'Klarheden er en gave. Metal skærer igennem og viser dig det væsentlige.',
  tung: 'Tyngden du mærker er ikke svaghed — den er kroppen der beder dig synke ned. Vandet i dig har brug for hvile.',
  rastloes: 'Rastløsheden er leveren der rykker i dig. Træet vil bevæge sig — giv det retning, eller giv det luft.',
  saarbar: 'Sårbarhed er den mest modige tilstand. Lungerne åbner sig når du tør mærke alt det usagte.',
  varm: 'Varmen i dig vil ud. Hjertet banker hurtigere, ilden samler sig — brug den, eller lad den varme dig indefra.',
  urolig: 'Uro er jordens signal om at du bærer for meget. Milten beder dig sætte noget ned.'
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

    showActionToast('Check-in gemt \u2713');

    // Show "Forslag til støtte" link (user chooses to expand)
    const supportLink = document.getElementById('ci-support-link');
    if (supportLink) {
      supportLink.style.display = '';
      supportLink.style.animation = 'ciFadeIn 0.4s ease';
    }

    // Collapse support panel if it was open from a previous mood
    const supportPanel = document.getElementById('ci-support-panel');
    if (supportPanel) {
      supportPanel.style.display = 'none';
      supportPanel.innerHTML = '';
    }

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

/* ---- toggleCheckinSupport: Fold out empathy + 4 recommendations ---- */
function toggleCheckinSupport() {
  const panel = document.getElementById('ci-support-panel');
  if (!panel) return;

  // Toggle: if already visible, collapse
  if (panel.style.display !== 'none' && panel.innerHTML !== '') {
    panel.style.display = 'none';
    panel.innerHTML = '';
    return;
  }

  const moodId = TrackingState.checkinMood;
  if (!moodId) return;

  const element = MOOD_ELEMENT_MAP[moodId] || 'VAND';
  const elLabel = Calculations.ELEMENT_LABELS[element] || element;
  const empati = MOOD_EMPATI[moodId] || '';

  // Get recommendations
  const healing = (typeof HEALING_SOUNDS !== 'undefined') ? HEALING_SOUNDS[element] : null;
  const yoga = (typeof INSIGHT_YOGA !== 'undefined' && INSIGHT_YOGA[element]) ? INSIGHT_YOGA[element][0] : null;
  const food = (typeof INSIGHT_FOOD !== 'undefined' && INSIGHT_FOOD[element]) ? INSIGHT_FOOD[element][0] : null;
  const focus = (typeof INSIGHT_FOCUS !== 'undefined' && INSIGHT_FOCUS[element]) ? INSIGHT_FOCUS[element][0] : null;

  let recsHTML = '';
  if (yoga) {
    recsHTML += `<div class="ci-rec" onclick="Router.navigate('pra-yin-yoga')" style="margin-bottom:8px">
      <div class="ci-rec-label">Yin Yoga · ${elLabel}</div>
      <div class="ci-rec-title">${yoga.pose.split('(')[0].trim()}</div>
      <div class="ci-rec-desc">${yoga.desc}</div>
    </div>`;
  }
  if (healing) {
    recsHTML += `<div class="ci-rec" onclick="Router.navigate('pra-healing')" style="margin-bottom:8px">
      <div class="ci-rec-label">Healinglyd · ${elLabel}</div>
      <div class="ci-rec-title">${healing.lyd}</div>
      <div class="ci-rec-desc">${healing.desc}</div>
    </div>`;
  }
  if (food) {
    recsHTML += `<div class="ci-rec" onclick="Router.navigate('pra-kost')" style="margin-bottom:8px">
      <div class="ci-rec-label">Næring · ${elLabel}</div>
      <div class="ci-rec-title">${food.item}</div>
      <div class="ci-rec-desc">${food.desc}</div>
    </div>`;
  }
  if (focus) {
    const focusParts = focus.split(' – ');
    recsHTML += `<div class="ci-rec">
      <div class="ci-rec-label">Fokus · ${elLabel}</div>
      <div class="ci-rec-title">${focusParts[0]}</div>
      <div class="ci-rec-desc">${focusParts[1] || focus}</div>
    </div>`;
  }

  panel.innerHTML = `<div class="ci-empati">${empati}</div>${recsHTML}`;
  panel.style.display = '';
  panel.style.animation = 'ciFadeIn 0.4s ease';
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
    navigator.serviceWorker.register('./sw.js').then(reg => {
      // Force check for updates every page load
      reg.update();
    }).catch(err => {
      console.warn('SW registration failed:', err);
    });
    // Auto-reload when new SW takes control (skipWaiting + claim)
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
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

  // Reset check-in state on every forside load
  TrackingState.checkinMood = null;
  const allCiBtns = document.querySelectorAll('.checkin-card .ci-btn');
  allCiBtns.forEach(b => {
    b.classList.remove('ci-btn--active');
    b.style.pointerEvents = '';
    b.style.opacity = '';
  });
  const supportLink = document.getElementById('ci-support-link');
  if (supportLink) supportLink.style.display = '';
  const supportPanel = document.getElementById('ci-support-panel');
  if (supportPanel) { supportPanel.style.display = 'none'; supportPanel.innerHTML = ''; }

  // Mærk efter — render patterns
  renderCheckinPatterns();

  // Elementer section
  renderElementIntro();

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

/* ============================================================
   MÆRK EFTER — Check-in patterns
   ============================================================ */

function renderCheckinPatterns() {
  const patternsEl = document.getElementById('checkin-patterns');
  if (!patternsEl) return;

  const checkins = Storage.getCheckins ? Storage.getCheckins() : [];
  if (checkins.length >= 3) {
    patternsEl.innerHTML = `
      <div class="ci-patterns-card" onclick="Router.navigate('rej-udvikling')">
        <div class="ci-patterns-text">Du har tjekket ind ${checkins.length} gange. Se dine m\u00f8nstre \u2192</div>
      </div>
    `;
    patternsEl.style.display = '';
  } else {
    patternsEl.style.display = 'none';
  }
}

/* ============================================================
   FORSIDE — Fem Elementer pentagon + intro
   ============================================================ */

const ELEMENT_INTRO = {
  'VAND': 'Vand er det dybeste element — det der bærer alt andet. Lige nu kalder det på stilhed, hvile og tillid til det, der ikke kan ses endnu.',
  'TRÆ': 'Træ er vækst og retning. Det presser opad og udad, med kraft og vilje. Lige nu mærker du måske en trang til at skabe, bevæge dig, handle.',
  'ILD': 'Ild er glæde, intensitet og forbindelse. Den brænder i dig som nærvær og lidenskab. Lige nu er din evne til at møde andre på sit stærkeste.',
  'JORD': 'Jord er forankring og omsorg. Den bærer, nærer og holder fast. Lige nu har du en særlig evne til at skabe tryghed — for dig selv og andre.',
  'METAL': 'Metal er klarhed og essentiel styrke. Det skærer igennem og viser det væsentlige. Lige nu har du adgang til en dyb klarhed om hvad der virkelig betyder noget.'
};

function renderElementIntro() {
  const container = document.getElementById('forside-element-tekst');
  if (!container) return;

  const data = getUserCycles();
  const domElement = data ? data.dominant.element : 'VAND';
  const elLabel = Calculations.ELEMENT_LABELS[domElement] || domElement;
  const introText = ELEMENT_INTRO[domElement] || '';

  container.innerHTML = `
    <div class="card-label">DIT ELEMENT LIGE NU</div>
    <div class="card-text">${introText}</div>
    <a class="card-link">Udforsk elementerne →</a>
  `;
  container.onclick = () => Router.navigate('cyk-kontrol');
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


  // ---- WAVE 2 RENDERING ----

  // Element Essay (Wave 2)
  const elEssayEl = document.getElementById('fasedetail-element-essay');
  if (elEssayEl && detail.elementEssay) {
    elEssayEl.innerHTML = `
      <div class="feeling-box" style="margin-top:16px">
        <div class="feeling-label" style="color:#9cabc3">Om ${elLabel}-elementet</div>
        <div class="feeling-text">${detail.elementEssay.replace(/\n\n/g, '</div><div class="feeling-text" style="margin-top:8px">')}</div>
      </div>`;
  }

  // Balance / Ubalance (Wave 2)
  const balanceEl = document.getElementById('fasedetail-balance');
  if (balanceEl && detail.balanceTekst) {
    let balanceHTML = `
      <div class="group-label" style="color:#6c82a9;margin-top:20px">Balance & ubalance</div>
      <div class="card" style="margin-bottom:8px"><div class="card-row"><div>
        <div class="card-label">N\u00e5r ${elLabel.toLowerCase()} er i balance</div>
        <div class="card-desc">${detail.balanceTekst}</div>
      </div></div></div>`;
    if (detail.ubalanceTegn) {
      const ut = detail.ubalanceTegn;
      balanceHTML += `
      <div class="card" style="margin-bottom:8px"><div class="card-row"><div>
        <div class="card-label">Fysiske tegn p\u00e5 ubalance</div>
        <div class="card-desc"><ul style="margin:4px 0;padding-left:18px">${ut.fysiske.map(f => '<li style="margin-bottom:4px">' + f + '</li>').join('')}</ul></div>
      </div></div></div>
      <div class="card" style="margin-bottom:8px"><div class="card-row"><div>
        <div class="card-label">Mentale og f\u00f8lelsesm\u00e6ssige tegn</div>
        <div class="card-desc"><ul style="margin:4px 0;padding-left:18px">${ut.mentale.map(m => '<li style="margin-bottom:4px">' + m + '</li>').join('')}</ul></div>
      </div></div></div>
      <div class="card"><div class="card-row"><div>
        <div class="card-label">Hvad der skaber ubalance</div>
        <div class="card-desc">${ut.aarsag.replace(/\n\n/g, '<br><br>')}</div>
      </div></div></div>`;
    }
    balanceEl.innerHTML = balanceHTML;
  }

  // Central F\u00f8lelse (Wave 2)
  const centralEl = document.getElementById('fasedetail-central-foelelse');
  if (centralEl && detail.centralFoelelse) {
    const cf = detail.centralFoelelse;
    centralEl.innerHTML = `
      <div class="feeling-box" style="margin-top:16px;background:rgba(108,130,169,0.04);border:1px solid rgba(108,130,169,0.08);border-radius:16px;padding:20px">
        <div class="feeling-label" style="color:#6c82a9;font-weight:600">${cf.title}</div>
        <div class="feeling-text" style="margin-top:8px">${cf.tekst.replace(/\n\n/g, '</div><div class="feeling-text" style="margin-top:8px">')}</div>
      </div>`;
  }

  // Denne fase i dig (Wave 2)
  const denneFaseEl = document.getElementById('fasedetail-denne-fase');
  if (denneFaseEl && detail.denneFaseIDig) {
    denneFaseEl.innerHTML = `
      <div class="feeling-box" style="margin-top:16px">
        <div class="feeling-label" style="color:#9cabc3">Denne fase i dig</div>
        <div class="feeling-text">${detail.denneFaseIDig.replace(/\n\n/g, '</div><div class="feeling-text" style="margin-top:8px">')}</div>
      </div>`;
  }

  // Temaer narrativer (Wave 2)
  const temaerEl = document.getElementById('fasedetail-temaer');
  if (temaerEl && detail.temaerNarrativer && detail.temaerNarrativer.length > 0) {
    temaerEl.innerHTML = `
      <div class="group-label" style="color:#6c82a9;margin-top:20px">Temaer i denne fase</div>
      ${detail.temaerNarrativer.map(t => `
        <div class="card" style="margin-bottom:10px"><div class="card-row"><div>
          <div class="card-label">${t.title}</div>
          <div class="card-desc" style="margin-top:4px">${t.tekst.replace(/\n\n/g, '<br><br>')}</div>
        </div></div></div>
      `).join('')}`;
  }

  // \u00c5rets Rytme (Wave 2)
  const aaretsEl = document.getElementById('fasedetail-aarets-rytme');
  if (aaretsEl && detail.aaretsRytme) {
    aaretsEl.innerHTML = `
      <div class="group-label" style="color:#6c82a9;margin-top:20px">\u00c5rets rytme i denne fase</div>
      <div class="card"><div class="card-row"><div>
        <div class="card-desc">${detail.aaretsRytme.replace(/\n\n/g, '<br><br>')}</div>
      </div></div></div>`;
  }

  // ---- END WAVE 2 ----

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

  // Init breathing boxes on this page too
  initBreathBoxes();
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
/* ---- Age at a specific date (not today) ---- */
function ageAtDate(birthdate, targetDate) {
  const birth = new Date(birthdate);
  const target = new Date(targetDate);
  let age = target.getFullYear() - birth.getFullYear();
  const m = target.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && target.getDate() < birth.getDate())) age--;
  return Math.max(0, age);
}

/* ---- Cycles for a person at a specific date ---- */
function cyclesAtDate(birthdate, targetDate, isMale) {
  const date = new Date(targetDate);
  const age = ageAtDate(birthdate, date);
  const lifePhase = isMale
    ? Calculations.calculateMalePhase(age)
    : Calculations.calculateLifePhase(age);
  const season = Calculations.calculateSeason(date);
  const weekday = Calculations.calculateWeekday(date);
  return { age, lifePhase, season, weekday, date };
}

/* ---- Vinduer landing (solo-first date explorer + optional relations) ---- */
function initVinduer() {
  const user = Storage.getUser();
  if (!user || !user.birthdate) return;
  const relations = Storage.getRelations();

  const nourishing = { 'VAND': 'TRÆ', 'TRÆ': 'ILD', 'ILD': 'JORD', 'JORD': 'METAL', 'METAL': 'VAND' };

  // Personal date presets based on user's birthdate
  const now = new Date();
  const bd = new Date(user.birthdate);
  const pad2 = n => String(n).padStart(2, '0');
  const toDateStr = d => d.getFullYear() + '-' + pad2(d.getMonth()+1) + '-' + pad2(d.getDate());

  const chipDates = {
    0: toDateStr(new Date(bd.getFullYear() + 14, bd.getMonth(), bd.getDate())),  // Da du var 14
    1: toDateStr(new Date(bd.getFullYear() + 21, bd.getMonth(), bd.getDate())),  // Da du var 21
    2: toDateStr(new Date(now.getFullYear() + 5, now.getMonth(), now.getDate())),  // Om 5 år
    3: now.getFullYear() + '-12-24'  // Næste jul
  };

  const dateInput = document.getElementById('vinduer-date');
  const btn = document.getElementById('vinduer-btn');
  const resultEl = document.getElementById('vinduer-result');

  // Render person pills dynamically (only if user has relations)
  const pillsContainer = document.getElementById('vin-person-pills');
  if (pillsContainer) {
    if (relations.length > 0) {
      let pillsHtml = '<div class="person-pill active"><span class="person-pill-dot"></span>Dig</div>';
      relations.forEach(r => {
        pillsHtml += `<div class="person-pill"><span class="person-pill-dot"></span>${r.name}</div>`;
      });
      pillsContainer.innerHTML = pillsHtml;
    } else {
      pillsContainer.innerHTML = '<div style="font-size:13px;color:#8B7D9B">Ingen relationer tilf&oslash;jet. <span style="color:#6c82a9;cursor:pointer;text-decoration:underline" onclick="Router.navigate(\'relationer\')">Tilf&oslash;j &rarr;</span></div>';
    }
  }

  // Render time-shift section dynamically (about YOUR next changes)
  const timeShiftEl = document.getElementById('vin-time-shift');
  if (timeShiftEl) {
    const userAge = Calculations.calculateAge(user.birthdate);
    const currentPhase = Calculations.calculateLifePhase(userAge);
    const nextPhaseAge = currentPhase ? currentPhase.endAge : null;
    const yearsToNext = nextPhaseAge ? (nextPhaseAge - userAge) : null;

    let shiftHtml = '<div class="time-shift-item" style="background:rgba(107,95,123,0.04);border-color:rgba(107,95,123,0.08)">';
    shiftHtml += '<div class="time-shift-when" style="color:#a89bb3">Din næste faseskift</div>';
    if (yearsToNext !== null && yearsToNext > 0) {
      const nextPhase = Calculations.calculateLifePhase(nextPhaseAge);
      const nextEl = nextPhase ? Calculations.ELEMENT_LABELS[nextPhase.element] : '';
      const nextName = nextPhase ? nextPhase.name : '';
      shiftHtml += `<div class="time-shift-what" style="color:#6B5F7B">Om ${Math.round(yearsToNext)} år · Fase ${nextPhase ? nextPhase.phase : ''}: ${nextName} (${nextEl})</div>`;
    } else {
      shiftHtml += '<div class="time-shift-what" style="color:#6B5F7B">Du er i din niende og sidste fase</div>';
    }
    shiftHtml += '</div>';

    // Next season shift
    const season = Calculations.calculateSeason(now);
    const seasonDates = [
      { m: 2, d: 20, name: 'Forår', el: 'TRÆ' },
      { m: 5, d: 21, name: 'Sommer', el: 'ILD' },
      { m: 7, d: 23, name: 'Sensommer', el: 'JORD' },
      { m: 8, d: 23, name: 'Efterår', el: 'METAL' },
      { m: 11, d: 21, name: 'Vinter', el: 'VAND' }
    ];
    let nextSeason = null;
    for (const s of seasonDates) {
      const sDate = new Date(now.getFullYear(), s.m, s.d);
      if (sDate > now) { nextSeason = { ...s, date: sDate }; break; }
    }
    if (!nextSeason) {
      const s = seasonDates[0];
      nextSeason = { ...s, date: new Date(now.getFullYear() + 1, s.m, s.d) };
    }
    const daysToSeason = Math.ceil((nextSeason.date - now) / (1000*60*60*24));
    shiftHtml += `<div class="time-shift-item" style="background:rgba(107,95,123,0.04);border-color:rgba(107,95,123,0.08)">`;
    shiftHtml += `<div class="time-shift-when" style="color:#a89bb3">Næste årstidsskift</div>`;
    shiftHtml += `<div class="time-shift-what" style="color:#6B5F7B">Om ${daysToSeason} dage · ${nextSeason.name} (${Calculations.ELEMENT_LABELS[nextSeason.el]})</div>`;
    shiftHtml += '</div>';

    timeShiftEl.innerHTML = shiftHtml;
  }

  // Date chips → set date input

  const chips = document.querySelectorAll('.date-chip');

  chips.forEach((chip, i) => {
    if (chip._bound) return;
    chip._bound = true;
    chip.addEventListener('click', function() {

      chips.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      if (dateInput && chipDates[i]) {
        dateInput.value = chipDates[i];
      }
    });
  });

  // Person pills toggle (delegated since pills are dynamic)
  if (pillsContainer && !pillsContainer._bound) {
    pillsContainer._bound = true;
    pillsContainer.addEventListener('click', function(e) {
      const pill = e.target.closest('.person-pill');
      if (!pill) return;
      // First pill ("Dig") stays active
      const allPills = pillsContainer.querySelectorAll('.person-pill');
      const idx = Array.from(allPills).indexOf(pill);
      if (idx === 0) return;
      pill.classList.toggle('active');
    });
  }

  // Button → calculate and show rich result

  if (btn && dateInput && !btn._bound) {
    btn._bound = true;

    btn.addEventListener('click', () => {

      const val = dateInput.value;
      if (!val) { showActionToast('Vælg en dato først'); return; }

      const targetDate = new Date(val);
      const userCycles = cyclesAtDate(user.birthdate, targetDate, false);
      const monthCycle = Calculations.calculateCalendarMonth(targetDate);
      const elLabel = Calculations.ELEMENT_LABELS[userCycles.lifePhase.element];
      const phase = userCycles.lifePhase;
      const detail = LIVSFASE_DETAIL[phase.phase];

      const today = new Date();
      const isToday = val === toDateStr(today);
      const isPast = targetDate < today && !isToday;

      // Element climate (4 cycles: livsfase, årstid, ugedag, måned)
      const cycleEls = [phase.element, userCycles.season.element, userCycles.weekday.element, monthCycle.element];
      const elCount = {};
      cycleEls.forEach(e => { elCount[e] = (elCount[e] || 0) + 1; });
      const sortedEls = Object.entries(elCount).sort((a, b) => b[1] - a[1]);
      const dominant = sortedEls[0][0];
      const dominantLabel = Calculations.ELEMENT_LABELS[dominant];
      const varEr = isPast ? 'var' : 'er';

      let html = '';

      // ── HEADER ──
      html += `<div style="font-family:sans-serif;font-size:11px;color:#a89bb3;letter-spacing:2px;text-transform:uppercase;margin-bottom:4px">${formatDanishDate(targetDate)} ${targetDate.getFullYear()}</div>`;
      html += `<div style="font-family:Georgia,serif;font-size:22px;font-weight:600;color:#6B5F7B;margin:4px 0 2px">Du ${varEr} ${userCycles.age} år</div>`;

      // ── FASE-KORT ──
      html += `<div style="margin:14px 0;padding:14px 16px;background:rgba(107,95,123,0.06);border-radius:14px;border:1px solid rgba(107,95,123,0.10)">`;
      html += `<div style="font-family:sans-serif;font-size:11px;color:#a89bb3;letter-spacing:1px;text-transform:uppercase">Fase ${phase.phase} · ${elLabel}</div>`;
      html += `<div style="font-family:Georgia,serif;font-size:19px;font-weight:600;color:#6B5F7B;margin:4px 0">${phase.name}</div>`;
      html += `<div style="font-size:13px;color:#8B7D9B">${detail.organPar} · ${detail.aarstid}</div>`;
      html += `<div style="font-family:Georgia,serif;font-size:14px;color:#6B5F7B;margin-top:10px;line-height:1.6;font-style:italic">${detail.introText}</div>`;
      html += `</div>`;

      // ── ELEMENT-KLIMA ──
      html += `<div style="margin:16px 0 12px">`;
      html += `<div style="font-family:sans-serif;font-size:11px;color:#a89bb3;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">${isPast ? 'Dit element-klima dengang' : 'Dit element-klima'}</div>`;
      ['VAND','TRÆ','ILD','JORD','METAL'].forEach(el => {
        const cnt = elCount[el] || 0;
        if (cnt === 0) return;
        const pct = (cnt / 4) * 100;
        html += `<div style="display:flex;align-items:center;margin:4px 0;font-size:13px">`;
        html += `<div style="width:42px;color:#8B7D9B">${Calculations.ELEMENT_LABELS[el]}</div>`;
        html += `<div style="flex:1;height:6px;background:rgba(107,95,123,0.08);border-radius:3px;margin:0 8px"><div style="height:100%;width:${pct}%;background:rgba(107,95,123,0.35);border-radius:3px"></div></div>`;
        html += `<div style="width:16px;text-align:right;color:#a89bb3">${cnt}</div>`;
        html += `</div>`;
      });
      if (sortedEls[0][1] >= 3) {
        html += `<div style="font-family:Georgia,serif;font-size:13px;color:#8B7D9B;margin-top:8px;font-style:italic">${dominantLabel} ${isPast ? 'dominerede' : 'dominerer'}. ${sortedEls[0][1]} af fire cyklusser ${isPast ? 'pegede' : 'peger'} mod ${dominantLabel}.</div>`;
      } else if (sortedEls[0][1] === 2 && sortedEls.length > 1 && sortedEls[1][1] === 2) {
        const el2 = Calculations.ELEMENT_LABELS[sortedEls[1][0]];
        html += `<div style="font-family:Georgia,serif;font-size:13px;color:#8B7D9B;margin-top:8px;font-style:italic">${dominantLabel} og ${el2} ${isPast ? 'delte' : 'deler'} styrken — to kræfter i balance.</div>`;
      }
      html += `</div>`;

      // ── FØLELSER ──
      if (detail.folelser) {
        html += `<div style="margin:14px 0;padding:12px 14px;background:rgba(107,95,123,0.04);border-radius:12px">`;
        html += `<div style="font-family:sans-serif;font-size:11px;color:#a89bb3;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">${isPast ? 'Hvad du måske mærkede' : 'Hvad du måske mærker'}</div>`;
        html += `<div style="font-size:13px;color:#6B5F7B;line-height:1.5"><span style="color:#a89bb3">I balance:</span> ${detail.folelser.balance}</div>`;
        html += `<div style="font-size:13px;color:#6B5F7B;line-height:1.5;margin-top:3px"><span style="color:#a89bb3">I ubalance:</span> ${detail.folelser.ubalance}</div>`;
        html += `</div>`;
      }

      // ── KROPPEN ──
      html += `<div style="margin:14px 0">`;
      html += `<div style="font-family:sans-serif;font-size:11px;color:#a89bb3;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Kroppen</div>`;
      html += `<div style="font-family:Georgia,serif;font-size:14px;color:#6B5F7B;line-height:1.6">${detail.kropTekst}</div>`;
      html += `</div>`;

      // ── SINDET ──
      html += `<div style="margin:14px 0">`;
      html += `<div style="font-family:sans-serif;font-size:11px;color:#a89bb3;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Sindet</div>`;
      html += `<div style="font-family:Georgia,serif;font-size:14px;color:#6B5F7B;line-height:1.6">${detail.sindTekst}</div>`;
      html += `</div>`;

      // ── ÅRSTID + UGEDAG ──
      html += `<div style="margin:14px 0;padding:10px 14px;background:rgba(107,95,123,0.03);border-radius:10px;border:1px solid rgba(107,95,123,0.06)">`;
      html += `<div style="font-size:13px;color:#8B7D9B">${userCycles.season.season} · ${Calculations.ELEMENT_LABELS[userCycles.season.element]}-energi · ${userCycles.weekday.day}</div>`;
      html += `</div>`;

      // ── ANBEFALINGER ──
      html += `<div style="margin:16px 0">`;
      html += `<div style="font-family:sans-serif;font-size:11px;color:#a89bb3;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">${isPast ? 'Hvad der kunne have hjulpet' : 'Hvad du kan gøre'}</div>`;
      if (detail.oevelse) {
        html += `<div style="margin:6px 0;padding:10px 12px;background:rgba(107,95,123,0.04);border-radius:10px">`;
        html += `<div style="font-size:12px;color:#a89bb3;margin-bottom:2px">Øvelse</div>`;
        html += `<div style="font-size:14px;color:#6B5F7B;font-weight:500">${detail.oevelse.title}</div>`;
        html += `<div style="font-size:13px;color:#8B7D9B;margin-top:2px">${detail.oevelse.desc}</div>`;
        html += `</div>`;
      }
      if (detail.kost) {
        html += `<div style="margin:6px 0;padding:10px 12px;background:rgba(107,95,123,0.04);border-radius:10px">`;
        html += `<div style="font-size:12px;color:#a89bb3;margin-bottom:2px">Næring</div>`;
        html += `<div style="font-size:14px;color:#6B5F7B;font-weight:500">${detail.kost.title}</div>`;
        html += `<div style="font-size:13px;color:#8B7D9B;margin-top:2px">${detail.kost.desc}</div>`;
        html += `</div>`;
      }
      if (detail.healingLyd) {
        html += `<div style="margin:6px 0;padding:10px 12px;background:rgba(107,95,123,0.04);border-radius:10px">`;
        html += `<div style="font-size:12px;color:#a89bb3;margin-bottom:2px">Healinglyd</div>`;
        html += `<div style="font-size:14px;color:#6B5F7B;font-weight:500">${detail.healingLyd.title}</div>`;
        html += `<div style="font-size:13px;color:#8B7D9B;margin-top:2px">${detail.healingLyd.desc}</div>`;
        html += `</div>`;
      }
      html += `</div>`;

      // ── REFLEKSION ──
      if (detail.refleksioner && detail.refleksioner.length > 0) {
        const rIdx = Math.floor(Math.random() * detail.refleksioner.length);
        html += `<div style="margin:16px 0;padding:14px 16px;background:rgba(107,95,123,0.05);border-radius:14px;border-left:3px solid rgba(107,95,123,0.20)">`;
        html += `<div style="font-family:sans-serif;font-size:11px;color:#a89bb3;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Refleksion</div>`;
        html += `<div style="font-family:Georgia,serif;font-size:15px;color:#6B5F7B;line-height:1.5;font-style:italic">${detail.refleksioner[rIdx]}</div>`;
        html += `</div>`;
      }

      // ── DENGANG VS NU ──
      if (!isToday) {
        const nowCycles = cyclesAtDate(user.birthdate, today, false);
        const nowEl = Calculations.ELEMENT_LABELS[nowCycles.lifePhase.element];

        html += `<div style="margin:16px 0;padding:14px 16px;background:rgba(107,95,123,0.06);border-radius:14px;border:1px solid rgba(107,95,123,0.10)">`;
        html += `<div style="font-family:sans-serif;font-size:11px;color:#a89bb3;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">${isPast ? 'Dengang og nu' : 'Nu og da'}</div>`;
        html += `<div style="display:flex;gap:12px">`;
        html += `<div style="flex:1;padding:10px;background:rgba(107,95,123,0.04);border-radius:10px">`;
        html += `<div style="font-size:11px;color:#a89bb3;margin-bottom:4px">${isPast ? 'Dengang' : 'Da'}</div>`;
        html += `<div style="font-size:14px;color:#6B5F7B;font-weight:500">Fase ${phase.phase}: ${phase.name}</div>`;
        html += `<div style="font-size:13px;color:#8B7D9B">${elLabel} · ${userCycles.age} år</div>`;
        html += `</div>`;
        html += `<div style="flex:1;padding:10px;background:rgba(107,95,123,0.04);border-radius:10px">`;
        html += `<div style="font-size:11px;color:#a89bb3;margin-bottom:4px">Nu</div>`;
        html += `<div style="font-size:14px;color:#6B5F7B;font-weight:500">Fase ${nowCycles.lifePhase.phase}: ${nowCycles.lifePhase.name}</div>`;
        html += `<div style="font-size:13px;color:#8B7D9B">${nowEl} · ${nowCycles.age} år</div>`;
        html += `</div>`;
        html += `</div>`;

        if (phase.element !== nowCycles.lifePhase.element) {
          html += `<div style="font-family:Georgia,serif;font-size:13px;color:#8B7D9B;margin-top:8px;font-style:italic">Fra ${elLabel} til ${nowEl} — din energi har skiftet karakter. Det du ${isPast ? 'mærkede dengang' : 'vil mærke da'} og det du mærker nu hører til forskellige verdener.</div>`;
        } else {
          html += `<div style="font-family:Georgia,serif;font-size:13px;color:#8B7D9B;margin-top:8px;font-style:italic">Samme element ${isPast ? 'dengang' : 'da'} og nu — ${elLabel} følger dig. Måske kender du den energi bedre end du tror.</div>`;
        }
        html += `</div>`;
      }

      // ── RELATIONER ──
      const activePills = pillsContainer ? pillsContainer.querySelectorAll('.person-pill') : [];
      activePills.forEach((pill, i) => {
        if (i === 0 || !pill.classList.contains('active')) return;
        const pillText = pill.textContent.trim();
        const rel = relations.find(r => r.name === pillText);
        if (!rel || !rel.birthdate) return;
        const isMale = rel.gender === 'male';
        const rc = cyclesAtDate(rel.birthdate, targetDate, isMale);
        const relEl = Calculations.ELEMENT_LABELS[rc.lifePhase.element];

        const uEl = phase.element;
        const rEl = rc.lifePhase.element;
        let interaction = '';
        if (uEl === rEl) interaction = `Begge i ${Calculations.ELEMENT_LABELS[uEl]} — dyb resonans. I ${isPast ? 'delte' : 'deler'} den samme grundenergi.`;
        else if (nourishing[uEl] === rEl) interaction = `Dit ${Calculations.ELEMENT_LABELS[uEl]} ${isPast ? 'nærede' : 'nærer'} ${rel.name}s ${Calculations.ELEMENT_LABELS[rEl]}. Du ${isPast ? 'gav' : 'giver'} naturligt energi videre.`;
        else if (nourishing[rEl] === uEl) interaction = `${rel.name}s ${Calculations.ELEMENT_LABELS[rEl]} ${isPast ? 'nærede' : 'nærer'} dit ${Calculations.ELEMENT_LABELS[uEl]}. Du ${isPast ? 'modtog' : 'modtager'} energi.`;
        else interaction = `${Calculations.ELEMENT_LABELS[uEl]} ${isPast ? 'mødte' : 'møder'} ${Calculations.ELEMENT_LABELS[rEl]} — forskellige energier der kan udfordre og berige.`;

        html += `<div style="margin:16px 0;padding:14px 16px;background:rgba(107,95,123,0.05);border-radius:14px;border:1px solid rgba(107,95,123,0.08)">`;
        html += `<div style="font-family:sans-serif;font-size:11px;color:#a89bb3;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">${rel.name}</div>`;
        html += `<div style="font-size:14px;color:#6B5F7B;font-weight:500">${rc.age} år · Fase ${rc.lifePhase.phase}: ${rc.lifePhase.name}</div>`;
        html += `<div style="font-size:13px;color:#8B7D9B;margin-top:2px">${relEl}</div>`;
        html += `<div style="font-family:Georgia,serif;font-size:13px;color:#8B7D9B;margin-top:8px;font-style:italic">${interaction}</div>`;
        html += `</div>`;
      });

      // Show result and hide hint
      if (resultEl) {
        resultEl.style.cssText = 'display:block;margin-top:12px;padding:16px;background:rgba(255,255,255,0.6);border:1px solid rgba(107,95,123,0.12);border-radius:16px';
        resultEl.innerHTML = html;
        resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      const hint = resultEl ? resultEl.parentElement.querySelector('.date-preview-hint') : null;
      if (hint) hint.style.display = 'none';
    });
  }
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

/* ---- Navigate to Livsfase Detail ---- */
function navigateToFaseDetail(phaseNum) {
  window._selectedPhase = parseInt(phaseNum) || 9;
  Router.navigate('livsfase-detail');
}

/* ---- Livsfase Detail ---- */
function initLivsfaseDetail() {
  const phaseNum = window._selectedPhase || 9;
  const phaseData = Calculations.PHASE_DATA[phaseNum];
  const detail = typeof LIVSFASE_DETAIL !== 'undefined' ? LIVSFASE_DETAIL[phaseNum] : null;
  if (!phaseData || !detail) return;

  const elLabel = Calculations.ELEMENT_LABELS[phaseData.element];
  const elTegn = Calculations.ELEMENT_TEGN[phaseData.element];

  // Header
  setText('fasedetail-eyebrow', `Fase ${phaseNum} af 9`);
  setHTML('fasedetail-title', `${phaseData.name}`);
  setText('fasedetail-sub', `${phaseData.startAge}\u2013${phaseData.endAge} \u00e5r \u00b7 ${elLabel} ${elTegn}`);
  setText('fasedetail-intro', detail.introText);

  // Feelings
  setText('fasedetail-feeling-label', `${elLabel}-elementets f\u00f8lelser`);
  setText('fasedetail-feeling-text', `I balance: ${detail.folelser.balance}. I ubalance: ${detail.folelser.ubalance}.`);

  // Featured
  setText('fasedetail-featured-label', `${elLabel} \u00b7 ${detail.organPar}`);
  setText('fasedetail-featured-text', `Smag: ${detail.smag}. \u00c5rstid: ${detail.aarstid}. ${detail.vediskKobling}.`);
  setText('fasedetail-featured-sub', `Livstemaer: ${detail.livstemaer.join(', ')}`);

  // Krop & Sind
  setText('fasedetail-krop-label', `Kroppen i Fase ${phaseNum} \u00b7 ${elLabel}`);
  setText('fasedetail-krop-text', detail.kropTekst);
  setText('fasedetail-sind-label', `Sindet i Fase ${phaseNum} \u00b7 ${elLabel}`);
  setText('fasedetail-sind-text', detail.sindTekst);

  // Element Info (Wave 1)
  const elInfoEl = document.getElementById('fasedetail-element-info');
  if (elInfoEl && detail.elementInfo) {
    const ei = detail.elementInfo;
    elInfoEl.innerHTML = `
      <div class="card" style="margin-top:12px">
        <div class="card-row"><div>
          <div class="card-label">${elLabel}-elementet</div>
          <div class="card-desc" style="margin-top:8px">
            <div style="display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:14px;line-height:1.6">
              <span style="color:#9cabc3">Energi</span><span>${ei.energi}</span>
              <span style="color:#9cabc3">Sanseorgan</span><span>${ei.sanseorgan}</span>
              <span style="color:#9cabc3">Kropsv\u00e6v</span><span>${ei.kropsvaev}</span>
              <span style="color:#9cabc3">Farve</span><span>${ei.farve}</span>
            </div>
          </div>
        </div></div>
      </div>`;
  }

  // Fasens R\u00e5d (Wave 1)
  const raadEl = document.getElementById('fasedetail-raad');
  if (raadEl && detail.fasensRaad && detail.fasensRaad.length > 0) {
    raadEl.innerHTML = `
      <div class="group-label" style="color:#6c82a9">Fasens r\u00e5d</div>
      ${detail.fasensRaad.map(r => `
        <div class="card" style="margin-bottom:8px"><div class="card-row"><div>
          <div class="card-desc">${r}</div>
        </div></div></div>
      `).join('')}
      <div class="dots">\u00b7 \u00b7 \u00b7</div>`;
  }

  // Praksis cards — render 5 exercises if available, fallback to old 3
  const praksisEl = document.getElementById('fasedetail-praksis');
  if (praksisEl) {
    if (detail.oevelser && detail.oevelser.length > 0) {
      const typeLabels = { krop: 'Krop', aandedraet: '\u00c5ndedr\u00e6t', meridian: 'Meridian', yinyoga: 'Yin Yoga', sind: 'Sind' };
      praksisEl.innerHTML = detail.oevelser.map(oe => `
        <div class="praksis-card"><div>
          <div class="pk-label">${typeLabels[oe.type] || oe.type} \u00b7 ${elLabel}</div>
          <div class="pk-name">${oe.title}</div>
          <div class="pk-desc">${oe.desc}</div>
        </div></div>
      `).join('');
    } else {
      praksisEl.innerHTML = `
        <div class="praksis-card" onclick="Router.navigate('pra-yin-yoga')"><div><div class="pk-label">\u00d8velse \u00b7 ${elLabel}</div><div class="pk-name">${detail.oevelse.title}</div><div class="pk-desc">${detail.oevelse.desc}</div></div><div class="pk-arrow">\u2192</div></div>
        <div class="praksis-card" onclick="Router.navigate('pra-kost')"><div><div class="pk-label">N\u00e6ring \u00b7 ${elLabel}</div><div class="pk-name">${detail.kost.title}</div><div class="pk-desc">${detail.kost.desc}</div></div><div class="pk-arrow">\u2192</div></div>
        <div class="praksis-card" onclick="Router.navigate('pra-healing')"><div><div class="pk-label">Healinglyd \u00b7 ${elLabel}</div><div class="pk-name">${detail.healingLyd.title}</div><div class="pk-desc">${detail.healingLyd.desc}</div></div><div class="pk-arrow">\u2192</div></div>
      `;
    }
  }

  // Kost detaljer (Wave 1)
  const kostDetEl = document.getElementById('fasedetail-kost-detaljer');
  if (kostDetEl && detail.kostDetaljer) {
    const kd = detail.kostDetaljer;
    kostDetEl.innerHTML = `
      <div class="group-label" style="color:#6c82a9;margin-top:20px">Kost & n\u00e6ring</div>
      <div class="card" style="margin-bottom:8px"><div class="card-row"><div>
        <div class="card-label">F\u00f8devarer der st\u00f8tter</div>
        <div class="card-desc">${kd.fodevarer}</div>
      </div></div></div>
      <div class="card" style="margin-bottom:8px"><div class="card-row"><div>
        <div class="card-label">Urter & krydderier</div>
        <div class="card-desc">${kd.urter}</div>
      </div></div></div>
      <div class="card"><div class="card-row"><div>
        <div class="card-label">Undg\u00e5 eller reducer</div>
        <div class="card-desc">${kd.undgaa}</div>
      </div></div></div>`;
  }

  // Refleksioner — combine original + ekstra
  const reflEl = document.getElementById('fasedetail-refleksioner');
  if (reflEl) {
    const allRefl = (detail.refleksioner || []).concat(detail.ekstraRefleksioner || []);
    reflEl.innerHTML = allRefl.map((q, i) => `
      <div class="card" style="margin-bottom:8px"><div class="card-row"><div>
        <div class="card-label">Sp\u00f8rgsm\u00e5l ${i + 1}</div>
        <div class="card-title">${q}</div>
      </div></div></div>
    `).join('');
  }

  // Relationer i fasen (Wave 1)
  const relEl = document.getElementById('fasedetail-relationer');
  if (relEl && detail.relationerIFasen) {
    relEl.innerHTML = `
      <div class="group-label" style="color:#6c82a9">Relationer i denne fase</div>
      <div class="card"><div class="card-row"><div>
        <div class="card-desc">${detail.relationerIFasen}</div>
      </div></div></div>`;
  }

  // Uden b\u00f8rn (Wave 1, phases 5-9)
  const udenBornEl = document.getElementById('fasedetail-uden-born');
  if (udenBornEl && detail.udenBorn) {
    udenBornEl.innerHTML = `
      <div class="card" style="margin-top:12px"><div class="card-row"><div>
        <div class="card-label">Et liv uden b\u00f8rn i denne fase</div>
        <div class="card-desc">${detail.udenBorn}</div>
      </div></div></div>`;
  }

  // Insight — Psykologiske opgaver
  setText('fasedetail-insight-label', `Psykologiske opgaver i Fase ${phaseNum}`);
  setText('fasedetail-insight-text', detail.psykOpgaver.join('. ') + '.');

  // Overgang (Wave 1)
  const overgangEl = document.getElementById('fasedetail-overgang');
  if (overgangEl && detail.overgangTekst) {
    const nextPhase = phaseNum < 9 ? phaseNum + 1 : null;
    const overgangLabel = nextPhase ? `Overgangen til Fase ${nextPhase}` : 'Cirklen forts\u00e6tter';
    overgangEl.innerHTML = `
      <div class="feeling-box" style="margin-top:20px">
        <div class="feeling-label" style="color:#9cabc3">${overgangLabel}</div>
        <div class="feeling-text">${detail.overgangTekst}</div>
      </div>`;
  }

  // Quick action — use yin yoga exercise if available
  const yinyogaOev = detail.oevelser ? detail.oevelser.find(o => o.type === 'yinyoga') : null;
  if (yinyogaOev) {
    setText('fasedetail-quick-title', `${yinyogaOev.title} \u00b7 Yin Yoga`);
    setText('fasedetail-quick-desc', yinyogaOev.desc);
  } else {
    setText('fasedetail-quick-title', `${detail.oevelse.title} \u00b7 Yin Yoga`);
    setText('fasedetail-quick-desc', detail.oevelse.desc);
  }

  // Prev/Next navigation
  const navEl = document.getElementById('fasedetail-nav');
  if (navEl) {
    const prev = phaseNum > 1 ? phaseNum - 1 : null;
    const next = phaseNum < 9 ? phaseNum + 1 : null;
    const prevData = prev ? Calculations.PHASE_DATA[prev] : null;
    const nextData = next ? Calculations.PHASE_DATA[next] : null;

    navEl.innerHTML = `
      ${prevData ? `<div class="card" style="flex:1;cursor:pointer" onclick="navigateToFaseDetail(${prev})"><div class="card-row"><div>
        <div class="card-label">\u2190 Fase ${prev}</div>
        <div class="card-title">${prevData.name}</div>
      </div></div></div>` : '<div style="flex:1"></div>'}
      ${nextData ? `<div class="card" style="flex:1;cursor:pointer" onclick="navigateToFaseDetail(${next})"><div class="card-row"><div>
        <div class="card-label">Fase ${next} \u2192</div>
        <div class="card-title">${nextData.name}</div>
      </div></div></div>` : '<div style="flex:1"></div>'}
    `;
  }

  // Check if this is user's current phase
  const data = getUserCycles();
  if (data && data.cycles.lifePhase.phase === phaseNum) {
    const eyebrow = document.getElementById('fasedetail-eyebrow');
    if (eyebrow) eyebrow.textContent += ' \u00b7 Du er her';
  }
}

/* ---- Share text helper (for samtale\u00e5bnere, forbindelseskort) ---- */
function copyCardText(el) {
  const card = el.closest('.quick-action') || el.closest('.card');
  if (!card) return;
  const title = card.querySelector('.quick-action-title, .card-title');
  const text = title ? title.textContent : '';
  if (navigator.clipboard && text) {
    navigator.clipboard.writeText(text).then(() => showActionToast('Kopieret'));
  }
}

/* ---- Share via Web Share API ---- */
function shareRelation(name) {
  const title = `De 9 Livsfasers Energi \u2014 ${name || 'Relationer'}`;
  const text = document.querySelector('.featured-text') ? document.querySelector('.featured-text').textContent : '';
  if (navigator.share) {
    navigator.share({ title, text, url: window.location.href }).catch(() => {});
  } else {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text + '\n' + window.location.href).then(() => showActionToast('Kopieret'));
    }
  }
}

/* ---- Show moment cycles (vin-oejeblikke) ---- */
function showMomentCycles(dateStr) {
  const user = Storage.getUser();
  if (!user || !user.birthdate || !dateStr) return;
  const targetDate = new Date(dateStr);
  const cycles = Calculations.allCycles(user.birthdate, targetDate);
  const dominant = Calculations.getWeightedDominant(cycles);
  const elLabel = Calculations.ELEMENT_LABELS[dominant.element];
  const phase = cycles.lifePhase;

  const detail = `Fase ${phase.phase}: ${phase.name} (${Calculations.ELEMENT_LABELS[phase.element]}). ` +
    `\u00c5rstid: ${cycles.season.season}. Ugedag: ${cycles.weekday.day}. ` +
    `Dominant element: ${elLabel}.`;

  showActionToast(`${elLabel} dominerede`);

  // Could navigate to vinduer for full analysis
  Router.navigate('vinduer');
}

/* ---- Share a moment (vin-oejeblikke) ---- */
function shareMoment(title, text) {
  const shareText = `${title}: ${text}`;
  if (navigator.share) {
    navigator.share({ title: 'De 9 Livsfasers Energi', text: shareText, url: window.location.href }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(shareText).then(() => showActionToast('Kopieret'));
  }
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

/* ============================================================
   BREATHING ANIMATION (used on praksis + pra-mindfulness)
   ============================================================ */

let _breathInterval = null;
let _breathPhase = 'idle'; // idle, inhale, hold, exhale

function startBreathing(boxEl) {
  if (_breathInterval) { stopBreathing(boxEl); return; }

  const circle = boxEl.querySelector('.breath-circle');
  const inner = boxEl.querySelector('.breath-inner');
  const btn = boxEl.querySelector('.breath-start-btn');
  if (!circle || !inner) return;

  circle.classList.add('animating');
  if (btn) btn.textContent = 'Stop';

  function runCycle() {
    // Inhale 4s
    _breathPhase = 'inhale';
    circle.className = 'breath-circle animating inhale';
    inner.textContent = 'Indånd';

    setTimeout(() => {
      if (!_breathInterval) return;
      // Hold 4s
      _breathPhase = 'hold';
      circle.className = 'breath-circle animating hold';
      inner.textContent = 'Hold';

      setTimeout(() => {
        if (!_breathInterval) return;
        // Exhale 6s
        _breathPhase = 'exhale';
        circle.className = 'breath-circle animating exhale';
        inner.textContent = 'Udånd';
      }, 4000);
    }, 4000);
  }

  runCycle();
  _breathInterval = setInterval(runCycle, 14000); // 4+4+6 = 14s full cycle
}

function stopBreathing(boxEl) {
  if (_breathInterval) {
    clearInterval(_breathInterval);
    _breathInterval = null;
  }
  _breathPhase = 'idle';
  const circle = boxEl.querySelector('.breath-circle');
  const inner = boxEl.querySelector('.breath-inner');
  const btn = boxEl.querySelector('.breath-start-btn');
  if (circle) circle.className = 'breath-circle';
  if (inner) inner.textContent = 'Indånd';
  if (btn) btn.textContent = 'Begynd';
}

function initBreathBoxes() {
  document.querySelectorAll('.breath-box').forEach(box => {
    if (box._bound) return;
    box._bound = true;

    // Add start button if not present
    if (!box.querySelector('.breath-start-btn')) {
      const btn = document.createElement('div');
      btn.className = 'breath-start-btn';
      btn.textContent = 'Begynd';
      box.appendChild(btn);
    }

    const btn = box.querySelector('.breath-start-btn');
    if (btn) {
      btn.addEventListener('click', () => startBreathing(box));
    }

    // Also make the circle itself clickable
    const circle = box.querySelector('.breath-circle');
    if (circle) {
      circle.style.cursor = 'pointer';
      circle.addEventListener('click', () => startBreathing(box));
    }
  });
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

  // Init breathing boxes
  initBreathBoxes();
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
      <div class="card" onclick="toggleRefleksionWrite(this, ${i})" style="cursor:pointer"><div class="card-row"><div>
        <div class="card-label">Spørgsmål ${i + 1}</div>
        <div class="card-title">${q}</div>
        <div class="card-desc">Tryk for at skrive. 10 minutter uden at stoppe.</div>
      </div><div class="card-arrow" style="color:rgba(122,144,139,0.4)">→</div></div></div>
    `).join('');
  }

  // Also make the static question cards on the page clickable
  addRefleksionClickHandlers();
}

function toggleRefleksionWrite(cardEl, questionIndex) {
  // Check if textarea is already open
  if (cardEl.querySelector('.refl-textarea')) {
    // Focus existing textarea
    cardEl.querySelector('.refl-textarea').focus();
    return;
  }

  // Get the question text
  const title = cardEl.querySelector('.card-title');
  const question = title ? title.textContent : '';

  // Load existing refleksion for this question
  const reflections = Storage.getReflections ? Storage.getReflections() : [];
  const existing = reflections.find(r => r.question === question);

  // Create textarea + save button
  const writeDiv = document.createElement('div');
  writeDiv.style.padding = '8px 16px 16px';
  writeDiv.innerHTML = `
    <textarea class="refl-textarea" placeholder="Skriv her...">${existing ? existing.text : ''}</textarea>
    <div class="refl-save-btn" onclick="event.stopPropagation(); saveRefleksionNote(this, '${question.replace(/'/g, "\\'")}')">Gem refleksion</div>
  `;
  cardEl.appendChild(writeDiv);

  // Remove arrow to indicate "open" state
  const arrow = cardEl.querySelector('.card-arrow');
  if (arrow) arrow.textContent = '↓';

  // Focus textarea
  setTimeout(() => writeDiv.querySelector('.refl-textarea').focus(), 100);
}

function saveRefleksionNote(btnEl, question) {
  const textarea = btnEl.parentElement.querySelector('.refl-textarea');
  if (!textarea || !textarea.value.trim()) return;

  const entry = {
    date: Storage.getLocalDateStr ? Storage.getLocalDateStr() : new Date().toISOString().split('T')[0],
    question: question,
    text: textarea.value.trim()
  };

  // Save to reflections array
  const reflections = Storage.getReflections ? Storage.getReflections() : [];
  // Remove existing for same question
  const filtered = reflections.filter(r => r.question !== question);
  filtered.push(entry);
  if (Storage.saveReflections) {
    Storage.saveReflections(filtered);
  } else {
    localStorage.setItem('livsfaser_reflections', JSON.stringify(filtered));
  }

  showActionToast('Refleksion gemt');
}

function addRefleksionClickHandlers() {
  // Make all question cards on pra-refleksion page expandable
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, i) => {
    const title = card.querySelector('.card-title');
    if (!title || card._reflBound) return;
    const isQuestion = card.querySelector('.card-label') &&
      card.querySelector('.card-label').textContent.includes('Spørgsmål');
    if (isQuestion) {
      card._reflBound = true;
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => toggleRefleksionWrite(card, i));
    }
  });
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
  const user = Storage.getUser();
  if (!user || !user.birthdate) return;
  const relations = Storage.getRelations();

  // TCM interaction type
  const nourishing = { 'VAND': 'TRÆ', 'TRÆ': 'ILD', 'ILD': 'JORD', 'JORD': 'METAL', 'METAL': 'VAND' };

  function getInteractionText(elA, elB) {
    const a = Calculations.ELEMENT_LABELS[elA];
    const b = Calculations.ELEMENT_LABELS[elB];
    if (elA === elB) return `Begge i ${a}. Dyb resonans — I forstår hinanden uden ord.`;
    if (nourishing[elA] === elB) return `${a} nærer ${b}. Din energi bærer den andens videre.`;
    if (nourishing[elB] === elA) return `${b} nærer ${a}. Den andens energi nærer dig.`;
    return `${a} og ${b} mødes. Forskellige energier — men de kan berige hinanden.`;
  }

  // Date chips — preset dates
  const chipDates = {
    0: '2008-09-08',  // Clara 14 år
    1: '2009-06-23',  // I mødtes
    2: new Date().toISOString().split('T')[0],  // I dag
    3: (new Date().getFullYear() + 5) + '-' + String(new Date().getMonth()+1).padStart(2,'0') + '-' + String(new Date().getDate()).padStart(2,'0')  // Om 5 år
  };

  const chipEls = document.querySelectorAll('#energi-chips > div');
  chipEls.forEach((chip, i) => {
    if (chip._bound) return;
    chip._bound = true;
    chip.style.cursor = 'pointer';
    chip.addEventListener('click', function() {
      chipEls.forEach(c => { c.style.opacity = '0.5'; c.style.fontWeight = '300'; });
      this.style.opacity = '1';
      this.style.fontWeight = '500';
      if (dateInput && chipDates[i]) {
        dateInput.value = chipDates[i];
      }
    });
  });

  // Person pills — toggle active
  const pillEls = document.querySelectorAll('#energi-pills > div');
  const pillState = [true, false, false]; // Dig is always selected
  pillEls.forEach((pill, i) => {
    if (pill._bound) return;
    pill._bound = true;
    pill.style.cursor = 'pointer';
    if (i > 0) {
      pill.addEventListener('click', function() {
        pillState[i] = !pillState[i];
        this.style.opacity = pillState[i] ? '1' : '0.4';
        this.style.borderBottom = pillState[i] ? '2px solid rgba(123,122,158,0.4)' : 'none';
      });
    }
  });

  // "Se jeres energi" button
  if (btn && dateInput && !btn._bound) {
    btn._bound = true;
    btn.addEventListener('click', () => {
      const val = dateInput.value;
      if (!val) {
        showActionToast('Vælg en dato først');
        return;
      }
      const targetDate = new Date(val);
      const userCycles = cyclesAtDate(user.birthdate, targetDate, false);
      const elLabel = Calculations.ELEMENT_LABELS[userCycles.lifePhase.element];

      let html = `
        <div class="insight-label" style="color:#88839e">${formatDanishDate(targetDate)}</div>
        <div style="margin:10px 0">
          <strong style="color:#7b7a9e;font-weight:500">Dig:</strong>
          ${userCycles.age} år · Fase ${userCycles.lifePhase.phase} · ${elLabel}<br>
        </div>`;

      // Find selected relations and show their data
      const selectedRelations = [];
      if (pillState[1]) { // Martin (partner)
        const partner = relations.find(r => r.type === 'partner') || { name: 'Martin', birthdate: '1983-04-15', gender: 'male' };
        selectedRelations.push(partner);
      }
      if (pillState[2]) { // Inge (mor)
        const mor = relations.find(r => r.type === 'mor') || { name: 'Inge', birthdate: '1941-03-22', gender: 'female' };
        selectedRelations.push(mor);
      }

      selectedRelations.forEach(rel => {
        if (!rel.birthdate) return;
        const isMale = rel.gender === 'male';
        const rc = cyclesAtDate(rel.birthdate, targetDate, isMale);
        const relElLabel = Calculations.ELEMENT_LABELS[rc.lifePhase.element];
        const interaction = getInteractionText(userCycles.lifePhase.element, rc.lifePhase.element);
        html += `
          <div style="margin:10px 0">
            <strong style="color:#9b8da8;font-weight:500">${rel.name}:</strong>
            ${rc.age} år · Fase ${rc.lifePhase.phase} · ${relElLabel}<br>
            <span style="color:#8a85a0;font-style:italic;font-size:14px">${interaction}</span>
          </div>`;
      });

      if (selectedRelations.length === 0) {
        html += `<div style="color:#8a85a0;font-style:italic;margin-top:8px">Vælg en person ovenfor for at se jeres energier sammen.</div>`;
      }

      if (resultEl) {
        resultEl.innerHTML = html;
        resultEl.style.display = 'block';
        resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
