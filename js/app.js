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
  const mStryg = (typeof MERIDIAN_STRYGNINGER !== 'undefined' && MERIDIAN_STRYGNINGER[element]) ? MERIDIAN_STRYGNINGER[element][0] : null;
  const yoga = (typeof INSIGHT_YOGA !== 'undefined' && INSIGHT_YOGA[element]) ? INSIGHT_YOGA[element][0] : null;
  const food = (typeof INSIGHT_FOOD !== 'undefined' && INSIGHT_FOOD[element]) ? INSIGHT_FOOD[element][0] : null;
  const focus = (typeof INSIGHT_FOCUS !== 'undefined' && INSIGHT_FOCUS[element]) ? INSIGHT_FOCUS[element][0] : null;

  let recsHTML = '';
  if (yoga) {
    recsHTML += `<div class="ci-rec" onclick="Router.navigate('din-praksis')" style="margin-bottom:8px">
      <div class="ci-rec-label">Yin Yoga \u00b7 ${elLabel}</div>
      <div class="ci-rec-title">${yoga.pose.split('(')[0].trim()}</div>
      <div class="ci-rec-desc">${yoga.desc}</div>
    </div>`;
  }
  if (mStryg) {
    recsHTML += `<div class="ci-rec" onclick="Router.navigate('din-praksis')" style="margin-bottom:8px">
      <div class="ci-rec-label">Meridianstrygning \u00b7 ${elLabel}</div>
      <div class="ci-rec-title">${mStryg.meridian}</div>
      <div class="ci-rec-desc">${mStryg.desc}</div>
    </div>`;
  }
  if (food) {
    recsHTML += `<div class="ci-rec" onclick="Router.navigate('din-praksis')" style="margin-bottom:8px">
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

/* ---- Forside (Home) — Daily Reading ---- */

const ELEMENT_KVALITETER = {
  'VAND': 'stilhed \u00b7 dybde \u00b7 intuition',
  'TR\u00c6': 'v\u00e6kst \u00b7 retning \u00b7 vilje',
  'ILD': 'gl\u00e6de \u00b7 forbindelse \u00b7 intensitet',
  'JORD': 'n\u00e6ring \u00b7 omsorg \u00b7 fundament',
  'METAL': 'klarhed \u00b7 essens \u00b7 frigivelse'
};

function buildDailyReading(cycles, dominant) {
  const elLabel = (el) => Calculations.ELEMENT_LABELS[el] || el;
  const domEl = dominant.element;
  const phase = cycles.lifePhase;

  // Count how many cycles share dominant element
  const matching = cycles.elements.filter(e => e === domEl).length;

  // Build concrete cycle references
  const cykNavne = [];
  if (phase.element === domEl) cykNavne.push('din livsfase');
  if (cycles.season.element === domEl) cykNavne.push('\u00e5rstiden');
  if (cycles.monthCycle.element === domEl) cykNavne.push('m\u00e5neden');
  if (cycles.weekday.element === domEl) cykNavne.push('ugedagen');
  if (cycles.organ.element === domEl) cykNavne.push('dit organur');

  const cykStr = cykNavne.length > 0 ? cykNavne.join(', ') : 'dine cyklusser';

  // Pick reading template
  const templates = typeof DYNAMISK_TEKST !== 'undefined' ? DYNAMISK_TEKST[domEl] : null;
  if (!templates) return ELEMENT_INTRO[domEl] || '';

  let template;
  if (matching >= 3) {
    template = templates.dominant;
  } else if (matching >= 2) {
    template = templates.strong;
  } else {
    template = templates.present;
  }

  // Build concrete detail
  const konkretParts = [];
  if (phase.element === domEl) konkretParts.push(`Fase ${phase.phase} er ${elLabel(domEl)}`);
  if (cycles.season.element === domEl) konkretParts.push(`${cycles.season.season} er ${elLabel(domEl)}`);
  const konkret = konkretParts.length > 0 ? konkretParts.join(', og ') + '.' : '';

  return template.replace('{cyklusser}', cykStr).replace('{konkret}', konkret);
}

function initForside() {
  const data = getUserCycles();
  if (!data) return;
  const { cycles, dominant } = data;
  const now = new Date();
  const elLabel = (el) => Calculations.ELEMENT_LABELS[el] || el;
  const domEl = dominant.element;

  // Date header
  setText('forside-date', `I dag \u00b7 ${formatDanishDate(now)}`);

  // Element hero — tegn + navn + kvaliteter
  const tegnEl = document.getElementById('forside-tegn');
  if (tegnEl) tegnEl.textContent = Calculations.ELEMENT_TEGN[domEl] || '';
  setText('forside-element-navn', elLabel(domEl));
  setText('forside-kvaliteter', ELEMENT_KVALITETER[domEl] || '');

  // Daily reading text
  const readingText = buildDailyReading(cycles, dominant);
  setText('forside-reading', readingText);

  // 5 cyklusser mini-oversigt
  const phase = cycles.lifePhase;
  const monthName = MONTHS_DA[now.getMonth()];
  const cykContainer = document.getElementById('forside-cyklusser');
  if (cykContainer) {
    const rows = [
      { label: 'Livsfase', value: `Fase ${phase.phase} \u00b7 ${elLabel(phase.element)}`, route: 'cir-dit-liv' },
      { label: '\u00c5rstid', value: `${cycles.season.season} \u00b7 ${elLabel(cycles.season.element)}`, route: 'cir-dit-liv' },
      { label: 'M\u00e5ned', value: `${monthName.charAt(0).toUpperCase() + monthName.slice(1)} \u00b7 ${elLabel(cycles.monthCycle.element)}`, route: 'cir-dit-liv' },
      { label: 'Ugedag', value: `${cycles.weekday.day} \u00b7 ${elLabel(cycles.weekday.element)}`, route: 'cir-dit-liv' },
      { label: 'Organur', value: `${cycles.organ.hours} \u00b7 ${cycles.organ.organ}`, route: 'cir-dit-liv' }
    ];
    cykContainer.innerHTML = rows.map(r =>
      `<div class="forside-cyk-row" onclick="Router.navigate('${r.route}')">` +
        `<span class="forside-cyk-label">${r.label}</span>` +
        `<span class="forside-cyk-value">${r.value}</span>` +
      `</div>`
    ).join('');
  }

  // Praksis cards — based on dominant element, rotated daily
  const ri = Calculations.dayRotation(3);
  const yoga = typeof INSIGHT_YOGA !== 'undefined' && INSIGHT_YOGA[domEl] ? INSIGHT_YOGA[domEl][ri % INSIGHT_YOGA[domEl].length] : null;
  const mStryg = typeof MERIDIAN_STRYGNINGER !== 'undefined' && MERIDIAN_STRYGNINGER[domEl] ? MERIDIAN_STRYGNINGER[domEl][ri % MERIDIAN_STRYGNINGER[domEl].length] : null;
  const food = typeof INSIGHT_FOOD !== 'undefined' && INSIGHT_FOOD[domEl] ? INSIGHT_FOOD[domEl][ri % INSIGHT_FOOD[domEl].length] : null;

  const MINDFULNESS_KORT = {
    'VAND': { name: 'B\u00f8lgernes rytme', desc: 'Ind\u00e5nd 4s, hold 4s, ud\u00e5nd 6s. M\u00e6rk dybden.' },
    'TR\u00c6': { name: 'Krop i bev\u00e6gelse', desc: 'St\u00e5, str\u00e6k mod loftet, m\u00e6rk r\u00f8dderne.' },
    'ILD': { name: 'Hjertets n\u00e6rv\u00e6r', desc: 'H\u00e5nd p\u00e5 hjertet, m\u00e6rk slagene, m\u00e6rk varmen.' },
    'JORD': { name: 'Forankring', desc: 'F\u00f8dder mod jorden, m\u00e6rk tyngden, m\u00e6rk b\u00e6ringen.' },
    'METAL': { name: 'Slip med ud\u00e5ndingen', desc: 'Lang ud\u00e5nding, skuldrene falder, giv slip.' }
  };
  const mind = MINDFULNESS_KORT[domEl] || null;

  const praksisCards = document.querySelectorAll('.praksis-card');
  if (praksisCards.length >= 4) {
    if (yoga) {
      praksisCards[0].querySelector('.pk-label').textContent = `Yin Yoga \u00b7 ${elLabel(domEl)}`;
      praksisCards[0].querySelector('.pk-name').textContent = yoga.pose.split('(')[0].trim();
      praksisCards[0].querySelector('.pk-desc').textContent = yoga.desc;
    }
    if (mStryg) {
      praksisCards[1].querySelector('.pk-label').textContent = `Meridianstrygning \u00b7 ${elLabel(domEl)}`;
      praksisCards[1].querySelector('.pk-name').textContent = mStryg.meridian;
      praksisCards[1].querySelector('.pk-desc').textContent = mStryg.desc;
    }
    if (mind) {
      praksisCards[2].querySelector('.pk-label').textContent = `Mindfulness \u00b7 ${elLabel(domEl)}`;
      praksisCards[2].querySelector('.pk-name').textContent = mind.name;
      praksisCards[2].querySelector('.pk-desc').textContent = mind.desc;
    }
    if (food) {
      praksisCards[3].querySelector('.pk-label').textContent = `N\u00e6ring \u00b7 ${elLabel(domEl)}`;
      praksisCards[3].querySelector('.pk-name').textContent = food.item;
      praksisCards[3].querySelector('.pk-desc').textContent = food.desc;
    }
  }

  // Relation card
  renderForsideRelation(cycles, dominant);

  // Reset check-in state
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

  // Check-in patterns
  renderCheckinPatterns();
}

/* ============================================================
   FORSIDE — Live relation card
   ============================================================ */

function renderForsideRelation(userCycles, userDominant) {
  const container = document.getElementById('forside-relation');
  if (!container) return;

  const relations = Storage.getRelations();
  const useExample = !relations || relations.length === 0;

  // Prefer partner, then first relation — fallback to example
  const rel = useExample
    ? { name: 'Partner', birthdate: '1983-04-15', gender: 'male', type: 'partner' }
    : (relations.find(r => r.type === 'partner') || relations[0]);
  if (!rel || !rel.birthdate) {
    container.innerHTML = '';
    return;
  }

  const now = new Date();
  const isMale = rel.gender === 'male';
  const theirCycles = cyclesAtDate(rel.birthdate, now, isMale);
  const userEl = userCycles.lifePhase.element;
  const theirEl = theirCycles.lifePhase.element;
  const userElLabel = Calculations.ELEMENT_LABELS[userEl];
  const theirElLabel = Calculations.ELEMENT_LABELS[theirEl];

  // TCM interaction
  const nourishing = { 'VAND': 'TRÆ', 'TRÆ': 'ILD', 'ILD': 'JORD', 'JORD': 'METAL', 'METAL': 'VAND' };

  let interType, interLabel, interText;

  if (userEl === theirEl) {
    interType = 'resonans';
    interLabel = 'Dyb resonans';
    interText = `I deler ${userElLabel}-elementet lige nu. Når begge er i det samme felt, forstår I hinanden uden ord — og mærker hinandens energi stærkere end normalt.`;
  } else if (nourishing[userEl] === theirEl) {
    interType = 'naerer';
    interLabel = 'Du nærer';
    interText = `Dit ${userElLabel} nærer ${rel.name}s ${theirElLabel}. Din energi bærer den andens videre — måske uden du tænker over det.`;
  } else if (nourishing[theirEl] === userEl) {
    interType = 'naeres';
    interLabel = 'Du næres';
    interText = `${rel.name}s ${theirElLabel} nærer dit ${userElLabel}. Der er noget i den andens rytme der giver dig ro lige nu.`;
  } else {
    interType = 'moeder';
    interLabel = 'Møde mellem elementer';
    interText = `Dit ${userElLabel} og ${rel.name}s ${theirElLabel} er to forskellige kræfter. Det kan udfordre — men det kan også åbne noget nyt mellem jer.`;
  }

  const exampleNote = useExample
    ? '<div style="font-size:11px;color:#aaa;margin-top:6px;font-style:italic">Eksempel — tilføj dine relationer i Mine Relationer</div>'
    : '';

  container.innerHTML = `
    <div class="forside-card" style="margin-top:16px;cursor:pointer" onclick="navigateToRelation('${rel.name}')">
      <div class="card-label">Dig og ${rel.name} \u00b7 ${interLabel}</div>
      <div class="card-text" style="font-family:Georgia,serif;font-size:15px;font-style:italic;color:#6c7a8a;line-height:1.55">${interText}</div>
      <a class="card-link">Se jeres dynamik \u2192</a>
      ${exampleNote}
    </div>`;
}

/* ============================================================
   FORSIDE — Tidsrejse quick-chips
   ============================================================ */

function renderForsideChips() {
  const container = document.getElementById('forside-tidsrejse-chips');
  if (!container) return;

  const user = Storage.getUser();
  if (!user || !user.birthdate) { container.innerHTML = ''; return; }

  const now = new Date();
  const bd = new Date(user.birthdate);
  const age = ageAtDate(user.birthdate, now);
  const currentPhase = Calculations.calculateLifePhase(age);
  const pad2 = n => String(n).padStart(2, '0');
  const toDateStr = d => d.getFullYear() + '-' + pad2(d.getMonth()+1) + '-' + pad2(d.getDate());

  const chips = [];

  // Chip 1: "Dit faseskift" — date of next 7-year boundary
  if (currentPhase && currentPhase.endAge && currentPhase.endAge > age) {
    const nextAge = currentPhase.endAge;
    const shiftDate = new Date(bd.getFullYear() + nextAge, bd.getMonth(), bd.getDate());
    const yearsLeft = nextAge - age;
    chips.push({
      label: `Dit faseskift · om ${yearsLeft} år`,
      date: toDateStr(shiftDate)
    });
  }

  // Chip 2: "For 7 år siden" — one full phase back
  const pastDate = new Date(bd.getFullYear() + (age - 7), bd.getMonth(), bd.getDate());
  if (age >= 7) {
    chips.push({
      label: `Da du var ${age - 7}`,
      date: toDateStr(pastDate)
    });
  }

  // Chip 3: "Om 5 år"
  const futureDate = new Date(now.getFullYear() + 5, now.getMonth(), now.getDate());
  chips.push({
    label: 'Om 5 år',
    date: toDateStr(futureDate)
  });

  // Chip 4: "Næste årstid" — next solstice/equinox
  const seasonDates = [
    { m: 2, d: 20, name: 'Forår' },
    { m: 5, d: 21, name: 'Sommer' },
    { m: 8, d: 23, name: 'Efterår' },
    { m: 11, d: 21, name: 'Vinter' }
  ];
  for (const s of seasonDates) {
    const sDate = new Date(now.getFullYear(), s.m, s.d);
    if (sDate > now) {
      chips.push({ label: s.name, date: toDateStr(sDate) });
      break;
    }
  }
  // If none found (late December), pick spring next year
  if (chips.length < 4) {
    const s = seasonDates[0];
    chips.push({ label: s.name, date: new Date(now.getFullYear()+1, s.m, s.d).getFullYear() + '-03-20' });
  }

  container.innerHTML = chips.map(c =>
    `<div style="padding:8px 14px;background:rgba(108,130,169,0.06);border:1px solid rgba(108,130,169,0.12);border-radius:20px;font-family:'DM Sans',sans-serif;font-size:13px;color:#6c82a9;cursor:pointer;white-space:nowrap" onclick="navigateToVinduerWithDate('${c.date}')">${c.label}</div>`
  ).join('');
}

function navigateToVinduerWithDate(dateStr) {
  window._vinduerPresetDate = dateStr;
  Router.navigate('vinduer');
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

  // Meridianstrygning
  const mStryg = typeof MERIDIAN_STRYGNINGER !== 'undefined' && MERIDIAN_STRYGNINGER[domEl] ? MERIDIAN_STRYGNINGER[domEl][0] : null;
  if (mStryg) {
    setText('cyk-healing-title', `${mStryg.meridian} \u2014 ${elLabel}s meridianstrygning`);
    setText('cyk-healing-desc', mStryg.desc);
  }
}

/* ---- Relationer (Section 2) ---- */
function initRelationer() {
  const data = getUserCycles();
  if (!data) return;
  const { cycles, dominant } = data;
  const userEl = dominant.element;
  const elLabel = Calculations.ELEMENT_LABELS[userEl];

  const relations = Storage.getRelations();
  const now = new Date();
  const nourishing = { 'VAND': 'TRÆ', 'TRÆ': 'ILD', 'ILD': 'JORD', 'JORD': 'METAL', 'METAL': 'VAND' };

  // Use real relations or example data
  const useExample = !relations || relations.length === 0;
  const rels = useExample
    ? [{ name: 'Partner', birthdate: '1983-04-15', gender: 'male', type: 'partner' },
       { name: 'Mor', birthdate: '1958-03-22', gender: 'female', type: 'mor' }]
    : relations;

  // Calculate cycles for all relations
  const relData = rels.map(r => {
    const isMale = r.gender === 'male';
    const rc = cyclesAtDate(r.birthdate, now, isMale);
    const theirEl = rc.lifePhase.element;
    const theirElLabel = Calculations.ELEMENT_LABELS[theirEl];

    let interType, interLabel;
    if (userEl === theirEl) { interType = 'resonans'; interLabel = 'Dyb resonans'; }
    else if (nourishing[userEl] === theirEl) { interType = 'naerer'; interLabel = 'Du nærer'; }
    else if (nourishing[theirEl] === userEl) { interType = 'naeres'; interLabel = 'Du næres'; }
    else { interType = 'moeder'; interLabel = 'Møde'; }

    return { ...r, cycles: rc, el: theirEl, elLabel: theirElLabel, interType, interLabel };
  });

  // ── PROFIL-ROW ──
  const profilRow = document.getElementById('rel-profil-row');
  if (profilRow) {
    let html = `<div class="profil-item"><div class="profil-circle" style="background:rgba(123,122,158,0.18);color:#7b7a9e">D</div><div class="profil-name">Dig</div><div class="profil-meta">Fase ${cycles.lifePhase.phase} · ${elLabel}</div></div>`;
    relData.forEach(r => {
      const initial = r.name.charAt(0).toUpperCase();
      html += `<div class="profil-item"><div class="profil-circle" style="background:rgba(123,122,158,0.12);color:#7b7a9e">${initial}</div><div class="profil-name">${r.name}</div><div class="profil-meta">${r.elLabel} · ${r.interLabel}</div></div>`;
    });
    html += `<div class="profil-item" onclick="Router.navigate('indstillinger')"><div class="profil-circle" style="background:rgba(123,122,158,0.05);border:1.5px dashed rgba(123,122,158,0.25);color:#88839e">+</div><div class="profil-name" style="color:#88839e">Tilf\u00f8j</div></div>`;
    profilRow.innerHTML = html;
  }

  // ── LIVE PULSE (per-relation cards) ──
  const pulseEl = document.getElementById('rel-live-pulse');
  if (pulseEl) {
    let html = '';

    // Climate/insight
    const resonansCount = relData.filter(r => r.interType === 'resonans').length;
    const naererCount = relData.filter(r => r.interType === 'naerer' || r.interType === 'naeres').length;
    let climateLabel, climateText;
    if (resonansCount >= 2) {
      climateLabel = 'Dyb resonans';
      climateText = 'Flere af dine relationer deler element med dig. Det giver en sjælden samklang — brug den.';
    } else if (naererCount >= 2) {
      climateLabel = 'Nærende felt';
      climateText = 'Dine relationer nærer hinanden lige nu. Energien flyder — giv den plads.';
    } else if (relData.some(r => r.interType === 'moeder')) {
      climateLabel = 'Kreativ spænding';
      climateText = 'Forskellige elementer mødes i dit felt. Det kan udfordre — men det åbner også for noget nyt.';
    } else {
      climateLabel = 'Stille felt';
      climateText = 'Jeres energier mødes i et roligt felt. Der er plads til at mærke efter.';
    }

    html += `<div class="insight-box" style="background:rgba(123,122,158,0.05);border:1px solid rgba(123,122,158,0.10)">`;
    html += `<div class="insight-label" style="color:#88839e">Jeres energi lige nu · ${climateLabel}</div>`;
    html += `<div class="insight-text" style="color:#7b7a9e">${climateText}</div>`;
    html += `</div>`;

    // Per-relation pulse cards
    relData.forEach(r => {
      let interText;
      if (r.interType === 'resonans') interText = `Begge i ${r.elLabel}. I forstår hinanden uden ord.`;
      else if (r.interType === 'naerer') interText = `Dit ${elLabel} nærer ${r.name}s ${r.elLabel}. Din energi bærer videre.`;
      else if (r.interType === 'naeres') interText = `${r.name}s ${r.elLabel} nærer dit ${elLabel}. Du modtager.`;
      else interText = `${elLabel} møder ${r.elLabel} — forskellige kræfter der kan berige hinanden.`;

      html += `<div class="card" style="margin-bottom:8px;cursor:pointer" onclick="navigateToRelation('${r.name}')"><div class="card-row"><div>`;
      html += `<div class="card-label">${r.name} · ${r.interLabel}</div>`;
      html += `<div class="card-title">Fase ${r.cycles.lifePhase.phase}: ${r.cycles.lifePhase.name} · ${r.elLabel}</div>`;
      html += `<div class="card-desc" style="font-style:italic">${interText}</div>`;
      html += `</div><div class="card-arrow">→</div></div></div>`;
    });

    if (useExample) {
      html += `<div style="font-family:sans-serif;font-size:12px;color:#aaa;text-align:center;margin-top:8px;font-style:italic">Eksempel-data \u2014 <span style="color:#7b7a9e;cursor:pointer;text-decoration:underline" onclick="Router.navigate('indstillinger')">tilf\u00f8j dine relationer</span></div>`;
    }

    pulseEl.innerHTML = html;
  }

  // ── NÆSTE SKIFT ──
  const timeShiftEl = document.getElementById('rel-time-shift');
  if (timeShiftEl && relData.length > 0) {
    const primary = relData[0];
    const theirAge = primary.cycles.age;
    const isMale = primary.gender === 'male';
    const phaseLen = isMale ? 8 : 7;
    const theirPhase = primary.cycles.lifePhase;
    const yearsToShift = theirPhase.endAge ? (theirPhase.endAge - theirAge) : null;

    let html = '';
    if (yearsToShift !== null && yearsToShift > 0) {
      const nextPhase = isMale
        ? Calculations.calculateMalePhase(theirPhase.endAge)
        : Calculations.calculateLifePhase(theirPhase.endAge);
      const nextEl = nextPhase ? Calculations.ELEMENT_LABELS[nextPhase.element] : '';
      html += `<div class="time-shift-item" style="background:rgba(123,122,158,0.04);border-color:rgba(123,122,158,0.08)">`;
      html += `<div class="time-shift-when" style="color:#88839e">${primary.name}s næste faseskift</div>`;
      html += `<div class="time-shift-what" style="color:#7b7a9e">Om ${Math.round(yearsToShift)} år · ${primary.elLabel} → ${nextEl}</div>`;
      html += `</div>`;
    }
    timeShiftEl.innerHTML = html;
  }

  // ── SAMTALE-ÅBNER ──
  const samtaleBox = document.getElementById('rel-samtale-box');
  if (samtaleBox) {
    const samtale = typeof TO_RYTMER_SAMTALE !== 'undefined' ? TO_RYTMER_SAMTALE[userEl] : null;
    const primaryName = relData.length > 0 ? relData[0].name : 'dem';
    if (samtale) {
      samtaleBox.innerHTML = `
        <div class="quick-action" style="background:linear-gradient(135deg,rgba(123,122,158,0.06),rgba(123,122,158,0.02));border-color:rgba(123,122,158,0.10)">
          <div class="quick-action-label" style="color:#88839e">Brug den her sætning i dag</div>
          <div class="quick-action-title" style="color:#7b7a9e">«\u2009${samtale.spoerg}\u2009»</div>
          <div class="quick-action-desc" style="color:#777">${elLabel}-energi har brug for at blive set i sin helhed. Spørgsmålet åbner rummet.</div>
        </div>`;
    }
  }

  // ── FÆLLES HANDLING ──
  const faellesBox = document.getElementById('rel-faelles-box');
  if (faellesBox) {
    const recs = typeof RELATION_RECOMMENDATIONS !== 'undefined' ? RELATION_RECOMMENDATIONS[userEl] : null;
    if (recs && recs.sammen) {
      faellesBox.innerHTML = `
        <div class="quick-action" style="background:linear-gradient(135deg,rgba(123,122,158,0.06),rgba(184,166,192,0.03));border-color:rgba(123,122,158,0.10)">
          <div class="quick-action-label" style="color:#88839e">Noget I kan gøre sammen</div>
          <div class="quick-action-desc" style="color:#777">${recs.sammen}</div>
        </div>`;
    }
  }

  // ── JERES MØDE FIGUR ──
  const moedeWrap = document.getElementById('rel-jeres-moede-wrap');
  if (moedeWrap && relData.length > 0) {
    const primary = relData[0];
    const caption = primary.interType === 'resonans'
      ? `Begge i ${elLabel}. Dyb resonans — jeres energier forstærker hinanden.`
      : `${elLabel} og ${primary.elLabel}. To kræfter der mødes og danner noget nyt.`;
    moedeWrap.innerHTML = `
      <div class="wave-timeline" style="background:rgba(123,122,158,0.03);border-color:rgba(123,122,158,0.07)">
        <div class="wave-label" style="color:#88839e">Jeres møde</div>
        <div class="fig">
          <img src="assets/images/rel-jeres-moede.png" alt="Jeres møde" style="max-width:400px">
        </div>
        <div class="wave-caption" style="color:#8a85a0">${caption}</div>
      </div>`;
  }
}

/* ---- Din Praksis (konsolideret) ---- */
function initDinPraksis() {
  const data = getUserCycles();
  if (!data) return;
  const { cycles, dominant } = data;
  const phase = cycles.lifePhase;
  const domEl = dominant.element;
  const elLabel = Calculations.ELEMENT_LABELS[domEl];
  const phaseNum = phase.phase;

  // HERO
  setText('prak-deep-fase-label', `Fase ${phaseNum} \u00b7 ${phase.name} \u00b7 ${elLabel}`);

  // Element-specific intro text
  const introMap = {
    'VAND': 'Vand-elementet kalder p\u00e5 stilhed og dybde. Din krop beder om langsom bevægelse, varme og n\u00e6rende f\u00f8de der styrker nyreessensen.',
    'TR\u00c6': 'Tr\u00e6-elementet s\u00f8ger bevægelse og retning. Din krop beder om flow, udstrækning og f\u00f8de der støtter leverens frie energi.',
    'ILD': 'Ild-elementet \u00f8nsker forbindelse og gl\u00e6de. Din krop beder om hjerteåbnende bevægelser, varme og let, n\u00e6rende f\u00f8de.',
    'JORD': 'Jord-elementet kalder p\u00e5 stabilitet og omsorg. Din krop beder om rodfæstende bevægelser, tryghed og varm, mættende f\u00f8de.',
    'METAL': 'Metal-elementet søger klarhed og lethed. Din krop beder om åbne brystbevægelser, dyb ud\u00e5nding og ren, enkel f\u00f8de.'
  };
  setText('prak-deep-intro', introMap[domEl] || '');

  // YIN YOGA — from YIN_YOGA_FULL
  const yogaContainer = document.getElementById('prak-deep-yoga');
  if (yogaContainer && typeof YIN_YOGA_FULL !== 'undefined' && YIN_YOGA_FULL[domEl]) {
    yogaContainer.innerHTML = YIN_YOGA_FULL[domEl].map(y => `
      <div class="dybde-tema-card" onclick="toggleDybdeTema(this)">
        <div class="dybde-tema-header">
          <div class="dybde-tema-title">${y.pose}</div>
          <div class="dybde-tema-arrow">\u2193</div>
        </div>
        <div class="dybde-tema-body">
          <p style="margin:0 0 8px">${y.desc}</p>
          <p style="margin:0;font-size:13px;color:#7a908b">${y.tid} \u00b7 ${y.meridian}</p>
        </div>
      </div>
    `).join('');
  }

  // MERIDIANSTRYGNING — from MERIDIAN_STRYGNINGER
  const meridianContainer = document.getElementById('prak-deep-meridian');
  if (meridianContainer && typeof MERIDIAN_STRYGNINGER !== 'undefined' && MERIDIAN_STRYGNINGER[domEl]) {
    meridianContainer.innerHTML = MERIDIAN_STRYGNINGER[domEl].map(m => `
      <div class="dybde-tema-card" onclick="toggleDybdeTema(this)">
        <div class="dybde-tema-header">
          <div class="dybde-tema-title">${m.meridian}</div>
          <div class="dybde-tema-arrow">\u2193</div>
        </div>
        <div class="dybde-tema-body">
          <p style="margin:0 0 6px;font-size:13px;color:#7a908b">${m.organ} \u00b7 Retning: ${m.retning}</p>
          <p style="margin:0 0 10px">${m.desc}</p>
          ${m.vejledning ? '<p style="margin:0;font-size:14px;color:var(--text-body);line-height:1.55;font-style:italic">' + m.vejledning + '</p>' : ''}
        </div>
      </div>
    `).join('');
  }

  // \u00c5NDEDR\u00c6TTET — element-specific meditation text
  const breathMap = {
    'VAND': 'Vand \u00e5nder langsomt. Forestil dig b\u00f8lgernes rytme \u2014 ind\u00e5nding som tidevand der stiger, ud\u00e5nding som vand der trækker sig tilbage. Lad pusten synke helt ned i underlivet.',
    'TR\u00c6': 'Tr\u00e6 \u00e5nder frit. Forestil dig en stamme der vokser opad med ind\u00e5ndingen og spreder sine grene med ud\u00e5ndingen. Lad pusten bevæge sig opad gennem kroppen.',
    'ILD': 'Ild \u00e5nder varmt. M\u00e6rk varmen i brystet med ind\u00e5ndingen. Ud\u00e5nd som en blid flamme der lyser op. Lad hjertet \u00e5bne sig med hver ud\u00e5nding.',
    'JORD': 'Jord \u00e5nder stabilt. Forestil dig at du \u00e5nder ned i maven, ned i jorden. Ud\u00e5ndingen er som r\u00f8dder der breder sig. Lad pusten forankre dig.',
    'METAL': 'Metal \u00e5nder klart. Ind\u00e5nd som et blankt spejl der opfanger lyset. Ud\u00e5nd langsomt og fuldst\u00e6ndigt \u2014 slip alt det overfl\u00f8dige. Lad ud\u00e5ndingen v\u00e6re længst.'
  };
  setText('prak-deep-breath-text', breathMap[domEl] || '');

  // Init breathing animation
  if (typeof initBreathBoxes === 'function') {
    initBreathBoxes();
  }

  // DIN CENTRALE F\u00d8LELSE — TCM element-to-emotion mapping
  const feelMap = {
    'VAND': { feeling: 'Frygt \u2014 og visdom', text: 'Vandets f\u00f8lelse er frygt. N\u00e5r vandet er i balance, bliver frygten til visdom \u2014 en dyb, intuitiv fornemmelse af hvad der er rigtigt. N\u00e5r vandet er i ubalance, kan frygten l\u00e5se kroppen fast.', eft: 'Selvom jeg m\u00e6rker denne frygt i min krop, accepterer jeg mig selv fuldst\u00e6ndigt og dybt.' },
    'TR\u00c6': { feeling: 'Vrede \u2014 og beslutsomhed', text: 'Tr\u00e6ets f\u00f8lelse er vrede. N\u00e5r tr\u00e6et er i balance, bliver vreden til beslutsomhed og handlekraft. N\u00e5r tr\u00e6et er i ubalance, kan vreden blive destruktiv eller blive til frustration der v\u00e6lter indad.', eft: 'Selvom jeg m\u00e6rker denne vrede og frustration, accepterer jeg mig selv fuldst\u00e6ndigt og dybt.' },
    'ILD': { feeling: 'Gl\u00e6de \u2014 og overv\u00e6ldelse', text: 'Ildens f\u00f8lelse er gl\u00e6de. N\u00e5r ilden er i balance, str\u00e5ler gl\u00e6den naturligt ud og skaber forbindelse. N\u00e5r ilden er i ubalance, kan gl\u00e6den tippe over i mani, rastl\u00f8shed eller en tomhed n\u00e5r flammen br\u00e6nder ud.', eft: 'Selvom jeg f\u00f8ler mig overv\u00e6ldet og min ild flakker, accepterer jeg mig selv fuldst\u00e6ndigt og dybt.' },
    'JORD': { feeling: 'Bekymring \u2014 og omsorg', text: 'Jordens f\u00f8lelse er bekymring. N\u00e5r jorden er i balance, bliver bekymringen til \u00e6gte omsorg \u2014 en moderlig varme der n\u00e6rer uden at kv\u00e6le. N\u00e5r jorden er i ubalance, graver tankerne sig fast i cirkler.', eft: 'Selvom mine tanker k\u00f8rer i ring og jeg bekymrer mig, accepterer jeg mig selv fuldst\u00e6ndigt og dybt.' },
    'METAL': { feeling: 'Sorg \u2014 og klarhed', text: 'Metallets f\u00f8lelse er sorg. N\u00e5r metallet er i balance, bliver sorgen til en klar fornemmelse af hvad der virkelig betyder noget. N\u00e5r metallet er i ubalance, kan sorgen blive til isolation eller en manglende evne til at slippe.', eft: 'Selvom jeg b\u00e6rer p\u00e5 denne sorg og dette tab, accepterer jeg mig selv fuldst\u00e6ndigt og dybt.' }
  };
  const feel = feelMap[domEl];
  if (feel) {
    setText('prak-deep-feeling-title', feel.feeling);
    setHTML('prak-deep-feeling-text', formatExpandable(feel.text, 30));
    setText('prak-deep-eft-text', '\u201c' + feel.eft + '\u201d');
  }

  // N\u00c6RING — from INSIGHT_FOOD
  const foodContainer = document.getElementById('prak-deep-food');
  if (foodContainer && typeof INSIGHT_FOOD !== 'undefined' && INSIGHT_FOOD[domEl]) {
    foodContainer.innerHTML = INSIGHT_FOOD[domEl].map(f => `
      <div style="padding:12px 0;border-bottom:1px solid rgba(122,144,139,0.08)">
        <div style="font-family:var(--font-serif);font-size:16px;color:var(--text-dark);margin-bottom:4px">${f.item}</div>
        <div style="font-family:var(--font-sans);font-size:14px;color:var(--text-body);font-weight:300;line-height:1.5">${f.desc}</div>
      </div>
    `).join('');
  }

  // REFLEKSION — from REFLEKSION_DATA (phase-specific, with save)
  const reflContainer = document.getElementById('prak-deep-refleksion');
  const questions = typeof REFLEKSION_DATA !== 'undefined' ? REFLEKSION_DATA[phaseNum] : null;
  if (reflContainer && questions) {
    reflContainer.innerHTML = questions.map((q, i) => `
      <div class="card prak-deep-refl-card" style="cursor:pointer"><div class="card-row"><div>
        <div class="card-label" style="color:#7a908b">Sp\u00f8rgsm\u00e5l ${i + 1}</div>
        <div class="card-title">${q}</div>
        <div class="card-desc">Tryk for at skrive</div>
      </div><div class="card-arrow" style="color:rgba(122,144,139,0.4)">\u2192</div></div></div>
    `).join('');

    // Bind click handlers for reflection write
    reflContainer.querySelectorAll('.prak-deep-refl-card').forEach((card, i) => {
      if (card._bound) return;
      card._bound = true;
      card.addEventListener('click', () => toggleRefleksionWrite(card, i));
    });
  }

  // FASENS R\u00c5D — from LIVSFASE_DETAIL
  const detail = typeof LIVSFASE_DETAIL !== 'undefined' ? LIVSFASE_DETAIL[phaseNum] : null;
  if (detail && detail.fasensRaad) {
    renderDybdeRaad(document.getElementById('prak-deep-raad'), detail.fasensRaad);
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
      if (detail.meridianStrygning) {
        html += `<div style="margin:6px 0;padding:10px 12px;background:rgba(107,95,123,0.04);border-radius:10px">`;
        html += `<div style="font-size:12px;color:#a89bb3;margin-bottom:2px">Meridianstrygning</div>`;
        html += `<div style="font-size:14px;color:#6B5F7B;font-weight:500">${detail.meridianStrygning.title}</div>`;
        html += `<div style="font-size:13px;color:#8B7D9B;margin-top:2px">${detail.meridianStrygning.desc}</div>`;
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

      // Link to relationer if user has relations but none selected
      const anyRelSelected = Array.from(activePills).some((p, i) => i > 0 && p.classList.contains('active'));
      if (relations.length > 0 && !anyRelSelected) {
        html += `<div style="text-align:center;margin-top:16px">`;
        html += `<div style="padding:10px 16px;background:rgba(123,122,158,0.05);border:1px solid rgba(123,122,158,0.10);border-radius:12px;display:inline-block;cursor:pointer;font-family:Georgia,serif;font-size:13px;font-style:italic;color:#7b7a9e" onclick="document.querySelectorAll('#vin-person-pills .person-pill')[1].click()">Se med ${relations[0].name} →</div>`;
        html += `</div>`;
      }

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

  // Auto-fill if navigated from forside chips
  if (window._vinduerPresetDate && dateInput && btn) {
    dateInput.value = window._vinduerPresetDate;
    window._vinduerPresetDate = null;
    setTimeout(() => btn.click(), 150);
  }
}

/* ============================================================
   NIVEAU 2 — Cirkel-detaljer (0B-0G) fra forside
   ============================================================ */

/* ---- Expandable text helpers for dybde-screens ---- */

function formatExpandable(text, wordLimit) {
  if (!text) return '';
  // Split into paragraphs, then words
  const paragraphs = text.split('\n\n').filter(p => p.trim());
  const allWords = text.split(/\s+/);
  if (allWords.length <= wordLimit) {
    // Short enough — show all, split into paragraphs
    return paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
  }
  // Find split point: show first N words, hide rest
  let wordCount = 0;
  let visibleParagraphs = [];
  let hiddenParagraphs = [];
  let splitDone = false;
  for (let i = 0; i < paragraphs.length; i++) {
    const pWords = paragraphs[i].trim().split(/\s+/);
    if (!splitDone && wordCount + pWords.length > wordLimit && visibleParagraphs.length > 0) {
      splitDone = true;
    }
    if (splitDone) {
      hiddenParagraphs.push(paragraphs[i].trim());
    } else {
      visibleParagraphs.push(paragraphs[i].trim());
      wordCount += pWords.length;
    }
  }
  if (hiddenParagraphs.length === 0) {
    return visibleParagraphs.map(p => `<p>${p}</p>`).join('');
  }
  return visibleParagraphs.map(p => `<p>${p}</p>`).join('') +
    `<div class="dybde-expand-more">${hiddenParagraphs.map(p => `<p>${p}</p>`).join('')}</div>` +
    `<a class="dybde-expand-btn" onclick="toggleDybdeExpand(this)">L\u00e6s mere \u2193</a>`;
}

function toggleDybdeExpand(btn) {
  const expandMore = btn.previousElementSibling;
  if (!expandMore) return;
  const isOpen = expandMore.classList.contains('active');
  expandMore.classList.toggle('active');
  btn.textContent = isOpen ? 'L\u00e6s mere \u2193' : 'L\u00e6s mindre \u2191';
}

function renderDybdeUbalance(container, ubalanceTegn) {
  if (!container || !ubalanceTegn) return;
  let html = '';
  if (ubalanceTegn.fysiske && ubalanceTegn.fysiske.length) {
    html += '<div class="dybde-ubalance-group">';
    html += '<div class="dybde-ubalance-label">Fysiske tegn</div>';
    html += '<ul class="dybde-ubalance-list">';
    ubalanceTegn.fysiske.forEach(t => { html += `<li>${t}</li>`; });
    html += '</ul></div>';
  }
  if (ubalanceTegn.mentale && ubalanceTegn.mentale.length) {
    html += '<div class="dybde-ubalance-group">';
    html += '<div class="dybde-ubalance-label">Mentale tegn</div>';
    html += '<ul class="dybde-ubalance-list">';
    ubalanceTegn.mentale.forEach(t => { html += `<li>${t}</li>`; });
    html += '</ul></div>';
  }
  if (ubalanceTegn.aarsag) {
    html += '<div class="dybde-expand-more">';
    html += '<div class="dybde-ubalance-group" style="margin-top:12px">';
    html += '<div class="dybde-ubalance-label">\u00c5rsager</div>';
    const aarsagParagraphs = ubalanceTegn.aarsag.split('\n\n').filter(p => p.trim());
    aarsagParagraphs.forEach(p => { html += `<p class="dybde-body-p">${p.trim()}</p>`; });
    html += '</div></div>';
    html += '<a class="dybde-expand-btn" onclick="toggleDybdeExpand(this)">Vis \u00e5rsager \u2193</a>';
  }
  container.innerHTML = html;
}

function renderDybdeTemaer(container, temaer) {
  if (!container || !temaer || !temaer.length) return;
  container.innerHTML = temaer.map((tema, i) =>
    `<div class="dybde-tema-card" onclick="toggleDybdeTema(this)">` +
      `<div class="dybde-tema-header">` +
        `<span class="dybde-tema-title">${tema.title}</span>` +
        `<span class="dybde-tema-arrow">\u2193</span>` +
      `</div>` +
      `<div class="dybde-tema-body">${tema.tekst.split('\n\n').filter(p => p.trim()).map(p => `<p>${p.trim()}</p>`).join('')}</div>` +
    `</div>`
  ).join('');
}

function toggleDybdeTema(card) {
  const isOpen = card.classList.contains('active');
  card.classList.toggle('active');
  const arrow = card.querySelector('.dybde-tema-arrow');
  if (arrow) arrow.textContent = isOpen ? '\u2193' : '\u2191';
}

function renderDybdeOevelser(container, oevelser) {
  if (!container || !oevelser || !oevelser.length) return;
  const typeLabels = {
    'krop': 'Krop', 'aandedraet': '\u00c5ndedr\u00e6t', 'meridian': 'Meridian',
    'yinyoga': 'Yin Yoga', 'sind': 'Sind', 'par': 'Par'
  };
  container.innerHTML = oevelser.map(ov =>
    `<div class="dybde-oevelse-card">` +
      `<div class="dybde-oevelse-type">${typeLabels[ov.type] || ov.type}</div>` +
      `<div class="dybde-oevelse-title">${ov.title}</div>` +
      `<div class="dybde-oevelse-desc">${ov.desc}</div>` +
    `</div>`
  ).join('');
}

function renderDybdeRaad(container, raad) {
  if (!container || !raad || !raad.length) return;
  // Show first 3, expand for more
  const visible = raad.slice(0, 3);
  const hidden = raad.slice(3);
  let html = visible.map(r => `<div class="dybde-raad-item">${r}</div>`).join('');
  if (hidden.length) {
    html += `<div class="dybde-expand-more">${hidden.map(r => `<div class="dybde-raad-item">${r}</div>`).join('')}</div>`;
    html += `<a class="dybde-expand-btn" onclick="toggleDybdeExpand(this)">Vis flere r\u00e5d \u2193</a>`;
  }
  container.innerHTML = html;
}

/* ---- Dit Dybe Billede (cir-dit-liv) ---- */

function initCirDitLiv() {
  const data = getUserCycles();
  if (!data) return;
  const { cycles, dominant } = data;
  const phase = cycles.lifePhase;
  const phaseNum = phase.phase;
  const detail = LIVSFASE_DETAIL[phaseNum];
  if (!detail) return;
  const elLabel = Calculations.ELEMENT_LABELS[phase.element] || phase.element;

  // 1. Hero
  setText('dybde-fase-label', `Fase ${phaseNum} \u00b7 ${elLabel}`);
  setText('dybde-intro', detail.introText);

  // 2. Denne fase i dig
  const denneFaseEl = document.getElementById('dybde-denne-fase');
  if (denneFaseEl) denneFaseEl.innerHTML = formatExpandable(detail.denneFaseIDig, 80);

  // 3. Central f\u00f8lelse
  setText('dybde-foelelse-title', detail.centralFoelelse.title);
  const foelelseEl = document.getElementById('dybde-foelelse-tekst');
  if (foelelseEl) foelelseEl.innerHTML = formatExpandable(detail.centralFoelelse.tekst, 80);

  // 4. Krop & Sind
  const kropEl = document.getElementById('dybde-krop');
  if (kropEl) kropEl.innerHTML = formatExpandable(detail.kropTekst, 60);
  const sindEl = document.getElementById('dybde-sind');
  if (sindEl) sindEl.innerHTML = formatExpandable(detail.sindTekst, 60);

  // 5. Balance / Ubalance
  const balanceEl = document.getElementById('dybde-balance');
  if (balanceEl) balanceEl.innerHTML = formatExpandable(detail.balanceTekst, 80);
  renderDybdeUbalance(document.getElementById('dybde-ubalance'), detail.ubalanceTegn);

  // 6. Temaer
  renderDybdeTemaer(document.getElementById('dybde-temaer'), detail.temaerNarrativer);

  // 7. \u00d8velser
  renderDybdeOevelser(document.getElementById('dybde-oevelser'), detail.oevelser);

  // 8. Refleksion (dagligt roteret)
  if (detail.ekstraRefleksioner && detail.ekstraRefleksioner.length) {
    const ri = Calculations.dayRotation(detail.ekstraRefleksioner.length);
    setText('dybde-refleksion', detail.ekstraRefleksioner[ri]);
  } else if (detail.refleksioner && detail.refleksioner.length) {
    const ri = Calculations.dayRotation(detail.refleksioner.length);
    setText('dybde-refleksion', detail.refleksioner[ri]);
  }

  // 9. Fasens r\u00e5d
  renderDybdeRaad(document.getElementById('dybde-raad'), detail.fasensRaad);

  // 10. Element essay
  const essayEl = document.getElementById('dybde-element-essay');
  if (essayEl) essayEl.innerHTML = formatExpandable(detail.elementEssay, 80);

  // 11. Relationer i fasen
  const relEl = document.getElementById('dybde-relationer');
  if (relEl && detail.relationerIFasen) {
    relEl.innerHTML = formatExpandable(detail.relationerIFasen, 80);
  }

  // 12. Overgang
  const overgangEl = document.getElementById('dybde-overgang');
  if (overgangEl && detail.overgangTekst) {
    overgangEl.innerHTML = formatExpandable(detail.overgangTekst, 80);
  }
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
        <div class="praksis-card" onclick="Router.navigate('din-praksis')"><div><div class="pk-label">\u00d8velse \u00b7 ${elLabel}</div><div class="pk-name">${detail.oevelse.title}</div><div class="pk-desc">${detail.oevelse.desc}</div></div><div class="pk-arrow">\u2192</div></div>
        <div class="praksis-card" onclick="Router.navigate('din-praksis')"><div><div class="pk-label">N\u00e6ring \u00b7 ${elLabel}</div><div class="pk-name">${detail.kost.title}</div><div class="pk-desc">${detail.kost.desc}</div></div><div class="pk-arrow">\u2192</div></div>
        <div class="praksis-card" onclick="Router.navigate('din-praksis')"><div><div class="pk-label">Meridianstrygning \u00b7 ${elLabel}</div><div class="pk-name">${detail.meridianStrygning.title}</div><div class="pk-desc">${detail.meridianStrygning.desc}</div></div><div class="pk-arrow">\u2192</div></div>
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

  // Meridianstrygning
  const mStryg = typeof MERIDIAN_STRYGNINGER !== 'undefined' && MERIDIAN_STRYGNINGER[domEl] ? MERIDIAN_STRYGNINGER[domEl][0] : null;
  if (mStryg) {
    setText('kost-healing-label', `${elLabel}s meridianstrygning \u00b7 ${mStryg.meridian}`);
    setText('kost-healing-desc', mStryg.desc);
  }
}

/* ---- Meridianstrygninger (pra-healing) ---- */
function initPraHealing() {
  const data = getUserCycles();
  if (!data) return;
  const domEl = data.dominant.element;
  const elLabel = Calculations.ELEMENT_LABELS[domEl];
  const mStryg = typeof MERIDIAN_STRYGNINGER !== 'undefined' && MERIDIAN_STRYGNINGER[domEl] ? MERIDIAN_STRYGNINGER[domEl][0] : null;

  if (mStryg) {
    setText('healing-featured-label', `Din strygning \u00b7 ${elLabel}`);
    setText('healing-featured-text', `${mStryg.meridian} \u2014 ${mStryg.desc}`);
  }

  // Render all meridianstrygninger
  const allContainer = document.getElementById('healing-all-cards');
  if (allContainer && typeof MERIDIAN_STRYGNINGER !== 'undefined') {
    const elOrder = ['VAND', 'TR\u00c6', 'ILD', 'JORD', 'METAL'];
    let html = '';
    elOrder.forEach(el => {
      const arr = MERIDIAN_STRYGNINGER[el];
      if (!arr) return;
      const label = Calculations.ELEMENT_LABELS[el];
      arr.forEach(s => {
        const isActive = el === domEl ? ' style="border-left:3px solid rgba(122,144,139,0.4)"' : '';
        html += `<div class="card"${isActive}><div class="card-row"><div>
          <div class="card-label">${label} \u00b7 ${s.organ}</div>
          <div class="card-title">${s.meridian}</div>
          <div class="card-desc">${s.vejledning}</div>
        </div></div></div>`;
      });
    });
    allContainer.innerHTML = html;
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
   DIN RELATION — Deep relation reading (Fase 3)
   ============================================================ */

const RelDeepState = {
  selectedPerson: null,
  targetDate: null,
  people: []
};

function navigateToRelation(personName) {
  window._selectedRelPerson = personName;
  Router.navigate('din-relation');
}

function initDinRelation() {
  const data = getUserCycles();
  if (!data) return;
  const { cycles, dominant } = data;
  const phase = cycles.lifePhase;
  const phaseNum = phase.phase;
  const detail = LIVSFASE_DETAIL[phaseNum];
  const elLabel = Calculations.ELEMENT_LABELS[phase.element] || phase.element;

  // === 1. PRÆSENTATION ===
  setText('rel-deep-title', 'Fase ' + phaseNum + ' \u00b7 ' + elLabel);
  const introTexts = [
    'Ingen relation eksisterer i et vakuum. Hver forbindelse b\u00e6rer begge menneskers rytme \u2014 og n\u00e5r rytmerne m\u00f8des, opst\u00e5r noget nyt.',
    'De mennesker du har t\u00e6ttest p\u00e5 dig, m\u00e6rker din fase lige s\u00e5 tydeligt som du m\u00e6rker deres. Her kan du udforske hvad der sker i m\u00f8det.',
    'Relationer forandrer sig med faserne. Det der f\u00f8ltes let for et \u00e5r siden, kan f\u00f8les tungt nu \u2014 eller omvendt. Begge dele er naturlige.'
  ];
  const introIdx = Calculations.dayRotation(introTexts.length);
  setText('rel-deep-intro', introTexts[introIdx]);

  // === 2. PERSONLIGGØRELSE: Relationer i din fase ===
  const relIFasenEl = document.getElementById('rel-deep-relationer-i-fasen');
  if (relIFasenEl && detail && detail.relationerIFasen) {
    relIFasenEl.innerHTML = formatExpandable(detail.relationerIFasen, 60);
  }

  // === 3. EMOTIONEL BRO: Feeling box ===
  const feelingTexts = {
    VAND: 'M\u00e5ske m\u00e6rker du en s\u00e5rbarhed i dine relationer lige nu \u2014 en f\u00f8lsomhed der g\u00f8r det sv\u00e6rt at s\u00e6tte gr\u00e6nser, men som ogs\u00e5 \u00e5bner for dyb forbindelse.',
    'TR\u00c6': 'Der er m\u00e5ske en utolmodighed i dig \u2014 en tr\u00e6ng til at ting skal vokse og bev\u00e6ge sig. Dine relationer m\u00e6rker den energi, og nogle trives med den mens andre bremser.',
    ILD: 'Du br\u00e6nder m\u00e5ske for noget lige nu \u2014 og de mennesker omkring dig m\u00e6rker varmen. Nogen tr\u00e6kkes mod den, andre tr\u00e6kker sig. Begge reaktioner fort\u00e6ller dig noget.',
    JORD: 'Der er en omsorg i dig der r\u00e6kker ud mod alle. M\u00e5ske giver du mere end du modtager lige nu \u2014 og dine relationer afspejler den ubalance.',
    METAL: 'M\u00e5ske m\u00e6rker du et behov for at tr\u00e6kke dig lidt tilbage \u2014 ikke v\u00e6k fra dine relationer, men ind i din egen klarhed. Det er en styrke, ikke en afvisning.'
  };
  const feelingText = feelingTexts[phase.element] || feelingTexts.VAND;
  setText('rel-deep-feeling-text', feelingText);

  // === 4. PERSON-VÆLGER ===
  const relations = Storage.getRelations();
  const useExample = !relations || relations.length === 0;
  const rels = useExample
    ? [
        { name: 'Partner', birthdate: '1983-04-15', gender: 'male', type: 'partner' },
        { name: 'Mor', birthdate: '1958-03-22', gender: 'female', type: 'mor' }
      ]
    : relations;

  RelDeepState.people = rels;
  RelDeepState.targetDate = null;

  // Check if a specific person was pre-selected
  let defaultIndex = 0;
  if (window._selectedRelPerson) {
    const idx = rels.findIndex(r => r.name === window._selectedRelPerson);
    if (idx >= 0) defaultIndex = idx;
    window._selectedRelPerson = null;
  }
  RelDeepState.selectedPerson = rels[defaultIndex] || null;

  // Render person pills
  const pillsEl = document.getElementById('rel-deep-pills');
  if (pillsEl) {
    pillsEl.innerHTML = rels.map((r, i) =>
      `<span class="rel-deep-pill${i === defaultIndex ? ' active' : ''}" onclick="selectRelDeepPerson(${i}, this)">${r.name}</span>`
    ).join('');
  }

  // Render smart date chips
  const now = new Date();
  const pad2 = n => String(n).padStart(2, '0');
  const toStr = d => d.getFullYear() + '-' + pad2(d.getMonth()+1) + '-' + pad2(d.getDate());
  const chipContainer = document.getElementById('rel-deep-smart-chips');
  if (chipContainer) {
    const fiveAgo = new Date(now.getFullYear() - 5, now.getMonth(), now.getDate());
    const fiveAhead = new Date(now.getFullYear() + 5, now.getMonth(), now.getDate());
    const tenAhead = new Date(now.getFullYear() + 10, now.getMonth(), now.getDate());
    chipContainer.innerHTML = [
      { label: 'For 5 \u00e5r siden', date: toStr(fiveAgo) },
      { label: 'Om 5 \u00e5r', date: toStr(fiveAhead) },
      { label: 'Om 10 \u00e5r', date: toStr(tenAhead) }
    ].map(c =>
      `<span class="rel-deep-chip" onclick="setRelDeepDate('${c.date}', this)">${c.label}</span>`
    ).join('');
  }

  // Set date input
  const dateInput = document.getElementById('rel-deep-date');
  if (dateInput) dateInput.value = '';

  // === 5. UDFORSK VIDERE cross-links ===
  const exploreEl = document.getElementById('rel-deep-explore');
  if (exploreEl) {
    exploreEl.innerHTML = `
      <div class="quick-action" onclick="Router.navigate('rel-tre-gen')">
        <div class="quick-action-title">Tre generationer</div>
        <div class="quick-action-desc">Se hvordan faserne flyder gennem generationerne</div>
        <div class="quick-action-arrow" style="color:rgba(123,122,158,0.4)">&#8594;</div>
      </div>
      <div class="quick-action" onclick="Router.navigate('rel-epigenetik')">
        <div class="quick-action-title">Epigenetik</div>
        <div class="quick-action-desc">Hvad du b\u00e6rer med dig fra dine forf\u00e6dre</div>
        <div class="quick-action-arrow" style="color:rgba(123,122,158,0.4)">&#8594;</div>
      </div>
      <div class="quick-action" onclick="Router.navigate('cir-dit-liv')">
        <div class="quick-action-title">Dit dybe billede</div>
        <div class="quick-action-desc">Udforsk din egen fase i dybden</div>
        <div class="quick-action-arrow" style="color:rgba(123,122,158,0.4)">&#8594;</div>
      </div>
    `;
  }

  buildRelationReading();
}

function selectRelDeepPerson(index, el) {
  RelDeepState.selectedPerson = RelDeepState.people[index] || null;
  document.querySelectorAll('.rel-deep-pill').forEach(p => p.classList.remove('active'));
  if (el) el.classList.add('active');
  buildRelationReading();
}

function setRelDeepDate(dateStr, chipEl) {
  RelDeepState.targetDate = dateStr ? new Date(dateStr) : null;
  document.querySelectorAll('.rel-deep-chip').forEach(c => c.classList.remove('active'));
  if (chipEl) chipEl.classList.add('active');
  const dateInput = document.getElementById('rel-deep-date');
  if (dateInput && !dateStr) dateInput.value = '';
  buildRelationReading();
}

function onRelDeepDateChange(val) {
  if (!val) return;
  RelDeepState.targetDate = new Date(val);
  document.querySelectorAll('.rel-deep-chip').forEach(c => c.classList.remove('active'));
  buildRelationReading();
}

function buildRelationReading() {
  const user = Storage.getUser();
  if (!user || !user.birthdate) return;
  const rel = RelDeepState.selectedPerson;
  if (!rel || !rel.birthdate) return;

  const targetDate = RelDeepState.targetDate || new Date();
  const isMale = rel.gender === 'male';

  // Calculate cycles for both at target date
  const userCycles = Calculations.allCycles(user.birthdate, targetDate);
  const userDom = Calculations.getWeightedDominant(userCycles);
  const theirCycles = cyclesAtDate(rel.birthdate, targetDate, isMale);

  const userPhase = userCycles.lifePhase;
  const theirPhase = theirCycles.lifePhase;
  const userDetail = LIVSFASE_DETAIL[userPhase.phase];
  const theirDetail = LIVSFASE_DETAIL[theirPhase.phase];
  const userEl = userPhase.element;
  const theirEl = theirPhase.element;
  const userElLabel = Calculations.ELEMENT_LABELS[userEl];
  const theirElLabel = Calculations.ELEMENT_LABELS[theirEl];

  // Eyebrow
  setText('rel-deep-other-eyebrow', rel.name);

  // ---- USER PHASE ----
  setText('rel-deep-user-phase', `Fase ${userPhase.phase} \u00b7 ${userElLabel}`);
  const userIntroEl = document.getElementById('rel-deep-user-intro');
  if (userIntroEl && userDetail) {
    userIntroEl.innerHTML = formatExpandable(userDetail.introText, 40);
  }

  // ---- OTHER PHASE ----
  setText('rel-deep-other-phase', `Fase ${theirPhase.phase} \u00b7 ${theirElLabel}`);
  const otherIntroEl = document.getElementById('rel-deep-other-intro');
  if (otherIntroEl && theirDetail) {
    otherIntroEl.innerHTML = formatExpandable(theirDetail.introText, 40);
  }

  // ---- MEETING / TCM INTERACTION ----
  const nourishing = { 'VAND': 'TR\u00c6', 'TR\u00c6': 'ILD', 'ILD': 'JORD', 'JORD': 'METAL', 'METAL': 'VAND' };
  let meetLabel, meetText;

  if (userEl === theirEl) {
    meetLabel = 'Dyb resonans';
    meetText = `I deler ${userElLabel}-elementet. N\u00e5r begge er i det samme felt, forst\u00e5r I hinanden uden ord \u2014 og m\u00e6rker hinandens energi st\u00e6rkere end normalt.`;
  } else if (nourishing[userEl] === theirEl) {
    meetLabel = `${userElLabel} n\u00e6rer ${theirElLabel}`;
    meetText = `Dit ${userElLabel} n\u00e6rer ${rel.name}s ${theirElLabel}. Din energi b\u00e6rer den andens videre \u2014 m\u00e5ske uden du t\u00e6nker over det.`;
  } else if (nourishing[theirEl] === userEl) {
    meetLabel = `${theirElLabel} n\u00e6rer ${userElLabel}`;
    meetText = `${rel.name}s ${theirElLabel} n\u00e6rer dit ${userElLabel}. Der er noget i den andens rytme der giver dig ro.`;
  } else {
    meetLabel = 'Kreativ sp\u00e6nding';
    const key = userEl + '_' + theirEl;
    const interaction = typeof ELEMENT_INTERACTIONS !== 'undefined' ? ELEMENT_INTERACTIONS[key] : null;
    meetText = interaction
      ? interaction.text.replace('{navn}', rel.name).replace('{pron}', isMale ? 'hans' : 'hendes')
      : `${userElLabel} og ${theirElLabel} udfordrer hinanden. Det er kreativ friktion der kan skabe noget nyt.`;
  }

  setText('rel-deep-meeting-type', meetLabel);
  setText('rel-deep-meeting-text', meetText);

  // Climate
  const allElements = [userEl, theirEl, userCycles.season.element, theirCycles.season.element];
  const climate = analyzeClimate(allElements, userDom);
  setText('rel-deep-climate-label', climate.label);
  setText('rel-deep-climate-text', climate.text);

  // ---- FEELINGS ----
  const feelingsEl = document.getElementById('rel-deep-feelings');
  if (feelingsEl) {
    let html = '';
    if (userDetail && userDetail.centralFoelelse) {
      html += `<div class="dybde-krop-sind-card" style="border-color:rgba(123,122,158,0.10);margin-bottom:12px">`;
      html += `<div class="dybde-krop-sind-label">Dig \u00b7 ${userDetail.centralFoelelse.title}</div>`;
      html += `<div class="dybde-body">${formatExpandable(userDetail.centralFoelelse.tekst, 50)}</div></div>`;
    }
    if (theirDetail && theirDetail.centralFoelelse) {
      html += `<div class="dybde-krop-sind-card" style="border-color:rgba(123,122,158,0.10)">`;
      html += `<div class="dybde-krop-sind-label">${rel.name} \u00b7 ${theirDetail.centralFoelelse.title}</div>`;
      html += `<div class="dybde-body">${formatExpandable(theirDetail.centralFoelelse.tekst, 50)}</div></div>`;
    }
    feelingsEl.innerHTML = html;
  }

  // ---- DENNE FASE I JER ----
  const denneFaseEl = document.getElementById('rel-deep-denne-fase');
  if (denneFaseEl) {
    let html = '';
    if (userDetail && userDetail.denneFaseIDig) {
      html += `<div class="dybde-krop-sind-card" style="border-color:rgba(123,122,158,0.10);margin-bottom:12px">`;
      html += `<div class="dybde-krop-sind-label">Dig i Fase ${userPhase.phase}</div>`;
      html += `<div class="dybde-body">${formatExpandable(userDetail.denneFaseIDig, 50)}</div></div>`;
    }
    if (theirDetail && theirDetail.denneFaseIDig) {
      html += `<div class="dybde-krop-sind-card" style="border-color:rgba(123,122,158,0.10)">`;
      html += `<div class="dybde-krop-sind-label">${rel.name} i Fase ${theirPhase.phase}</div>`;
      html += `<div class="dybde-body">${formatExpandable(theirDetail.denneFaseIDig, 50)}</div></div>`;
    }
    denneFaseEl.innerHTML = html;
  }

  // ---- KROP & SIND ----
  const kropSindEl = document.getElementById('rel-deep-krop-sind');
  if (kropSindEl) {
    let html = '';
    if (userDetail) {
      html += `<div class="dybde-krop-sind-card" style="border-color:rgba(123,122,158,0.10);margin-bottom:12px">`;
      html += `<div class="dybde-krop-sind-label">Din krop &amp; sind</div>`;
      html += `<div class="dybde-body">${formatExpandable((userDetail.kropTekst || '') + '\n\n' + (userDetail.sindTekst || ''), 50)}</div></div>`;
    }
    if (theirDetail) {
      html += `<div class="dybde-krop-sind-card" style="border-color:rgba(123,122,158,0.10)">`;
      html += `<div class="dybde-krop-sind-label">${rel.name}s krop &amp; sind</div>`;
      html += `<div class="dybde-body">${formatExpandable((theirDetail.kropTekst || '') + '\n\n' + (theirDetail.sindTekst || ''), 50)}</div></div>`;
    }
    kropSindEl.innerHTML = html;
  }

  // ---- TEMAER ----
  const temaerEl = document.getElementById('rel-deep-temaer');
  if (temaerEl) {
    const allTemaer = [];
    if (userDetail && userDetail.temaerNarrativer) {
      userDetail.temaerNarrativer.forEach(t => allTemaer.push({ title: 'Dig: ' + t.title, tekst: t.tekst }));
    }
    if (theirDetail && theirDetail.temaerNarrativer) {
      theirDetail.temaerNarrativer.forEach(t => allTemaer.push({ title: rel.name + ': ' + t.title, tekst: t.tekst }));
    }
    renderDybdeTemaer(temaerEl, allTemaer);
  }

  // ---- \u00d8VELSER ----
  const oevelserEl = document.getElementById('rel-deep-oevelser');
  if (oevelserEl) {
    const allOev = [];
    if (userDetail && userDetail.oevelser) {
      userDetail.oevelser.forEach(ov => {
        if (ov.type === 'par') allOev.unshift(ov);
        else allOev.push({ type: ov.type, title: 'Dig: ' + ov.title, desc: ov.desc });
      });
    }
    if (theirDetail && theirDetail.oevelser) {
      theirDetail.oevelser.forEach(ov => {
        if (ov.type === 'par') allOev.unshift(ov);
        else allOev.push({ type: ov.type, title: rel.name + ': ' + ov.title, desc: ov.desc });
      });
    }
    renderDybdeOevelser(oevelserEl, allOev.slice(0, 6));
  }

  // ---- SAMTALE\u00c5BNER ----
  const samtale = typeof TO_RYTMER_SAMTALE !== 'undefined' ? TO_RYTMER_SAMTALE[userEl] : null;
  if (samtale) {
    setText('rel-deep-samtale-text', '\u00ab\u2009' + samtale.spoerg + '\u2009\u00bb');
  }

  // ---- REFLEKSION ----
  const allRefl = [];
  if (userDetail && userDetail.ekstraRefleksioner) allRefl.push(...userDetail.ekstraRefleksioner);
  if (theirDetail && theirDetail.ekstraRefleksioner) allRefl.push(...theirDetail.ekstraRefleksioner);
  if (allRefl.length > 0) {
    const ri = Calculations.dayRotation(allRefl.length);
    setText('rel-deep-refleksion', allRefl[ri]);
  }

  // ---- OVERGANGE ----
  const overgangEl = document.getElementById('rel-deep-overgange');
  if (overgangEl) {
    let html = '';
    if (userDetail && userDetail.overgangTekst) {
      html += `<div class="dybde-krop-sind-card" style="border-color:rgba(123,122,158,0.10);margin-bottom:12px">`;
      html += `<div class="dybde-krop-sind-label">Din overgang</div>`;
      html += `<div class="dybde-body">${formatExpandable(userDetail.overgangTekst, 50)}</div></div>`;
    }
    if (theirDetail && theirDetail.overgangTekst) {
      html += `<div class="dybde-krop-sind-card" style="border-color:rgba(123,122,158,0.10)">`;
      html += `<div class="dybde-krop-sind-label">${rel.name}s overgang</div>`;
      html += `<div class="dybde-body">${formatExpandable(theirDetail.overgangTekst, 50)}</div></div>`;
    }
    overgangEl.innerHTML = html;
  }

  // Scroll to top
  window.scrollTo({ top: 0 });
}

/* ============================================================
   NIVEAU 2 — Relationer undersider
   ============================================================ */

function initRelLigeNu() {
  const data = getUserCycles();
  if (!data) return;
  const { cycles, dominant } = data;
  const userEl = dominant.element;
  const elLabel = Calculations.ELEMENT_LABELS[userEl];
  const now = new Date();
  const nourishing = { 'VAND': 'TRÆ', 'TRÆ': 'ILD', 'ILD': 'JORD', 'JORD': 'METAL', 'METAL': 'VAND' };
  const controlling = { 'VAND': 'ILD', 'TRÆ': 'JORD', 'ILD': 'METAL', 'JORD': 'VAND', 'METAL': 'TRÆ' };

  const relations = Storage.getRelations();
  const useExample = !relations || relations.length === 0;
  const rels = useExample
    ? [{ name: 'Partner', birthdate: '1983-04-15', gender: 'male', type: 'partner' },
       { name: 'Mor', birthdate: '1958-03-22', gender: 'female', type: 'mor' }]
    : relations;

  const relData = rels.map(r => {
    const isMale = r.gender === 'male';
    const rc = cyclesAtDate(r.birthdate, now, isMale);
    const theirEl = rc.lifePhase.element;
    const theirElLabel = Calculations.ELEMENT_LABELS[theirEl];

    let interType, interTitle, interDesc;
    if (userEl === theirEl) {
      interType = 'resonans';
      interTitle = `${theirElLabel} spejler ${elLabel}`;
      interDesc = `I deler den samme grundenergi. Det er som en stille genkendelse — I forstår hinanden uden at forklare.`;
    } else if (nourishing[userEl] === theirEl) {
      interType = 'naerer';
      interTitle = `${elLabel} nærer ${theirElLabel}`;
      interDesc = `Din energi bærer ${r.name}s videre. Du giver — måske mere end du selv mærker.`;
    } else if (nourishing[theirEl] === userEl) {
      interType = 'naeres';
      interTitle = `${theirElLabel} nærer ${elLabel}`;
      interDesc = `${r.name}s energi nærer din. Der er noget i den andens rytme der giver dig ro.`;
    } else if (controlling[userEl] === theirEl || controlling[theirEl] === userEl) {
      interType = 'udfordrer';
      interTitle = `${elLabel} og ${theirElLabel} udfordrer`;
      interDesc = `Det er en kreativ spænding — to kræfter der forhandler. Det kan føles tungt, men det kan også skabe vækst.`;
    } else {
      interType = 'moeder';
      interTitle = `${elLabel} møder ${theirElLabel}`;
      interDesc = `To forskellige energier der kan berige hinanden når der er plads.`;
    }

    return { ...r, cycles: rc, el: theirEl, elLabel: theirElLabel, interType, interTitle, interDesc };
  });

  // ── KLIMA + FEATURED ──
  const climateEl = document.getElementById('rel-now-climate');
  if (climateEl) {
    const primary = relData[0];
    let html = `<div class="featured feat-relationer">`;
    html += `<div class="featured-label">Dig og ${primary.name} · ${primary.interType === 'resonans' ? 'Dyb resonans' : primary.interType === 'naerer' ? 'Du nærer' : primary.interType === 'naeres' ? 'Du næres' : 'Møde'}</div>`;
    html += `<div class="featured-text">${elLabel} møder ${primary.elLabel}. ${primary.interDesc}</div>`;
    html += `</div>`;
    climateEl.innerHTML = html;
  }

  // ── PERSON-KORT ──
  const personList = document.getElementById('rel-person-list');
  if (personList) {
    let html = '';
    relData.forEach(r => {
      html += `<div class="card" style="margin-bottom:8px"><div class="card-row"><div>`;
      html += `<div class="card-label">${r.name} · ${r.type || ''} · ${r.elLabel}</div>`;
      html += `<div class="card-title">${r.interTitle}</div>`;
      html += `<div class="card-desc">${r.interDesc}</div>`;

      // Expandable layers
      html += `<div id="rel-layers-${r.name.replace(/\s/g,'')}" style="display:none;margin-top:10px;padding-top:10px;border-top:1px solid rgba(123,122,158,0.08)">`;

      // Livsfase vs livsfase
      html += `<div style="font-size:12px;color:#88839e;margin-bottom:4px">Livsfase</div>`;
      html += `<div style="font-size:13px;color:#6B5F7B;margin-bottom:8px">Du: Fase ${cycles.lifePhase.phase} (${elLabel}) · ${r.name}: Fase ${r.cycles.lifePhase.phase} (${r.elLabel})</div>`;

      // Årstid + ugedag (shared)
      const userSeason = Calculations.ELEMENT_LABELS[cycles.season.element];
      const userWeekday = Calculations.ELEMENT_LABELS[cycles.weekday.element];
      html += `<div style="font-size:12px;color:#88839e;margin-bottom:4px">Fælles cyklusser</div>`;
      html += `<div style="font-size:13px;color:#6B5F7B;margin-bottom:8px">I deler årstid (${userSeason}) og ugedag (${userWeekday}) — det er det fælles fundament.</div>`;

      html += `</div>`;

      html += `<div style="margin-top:8px;font-size:12px;color:#7b7a9e;cursor:pointer" onclick="var el=document.getElementById('rel-layers-${r.name.replace(/\s/g,'')}');if(el.style.display==='none'){el.style.display='block';this.textContent='Skjul lag ↑'}else{el.style.display='none';this.textContent='Se alle lag ↓'}">Se alle lag ↓</div>`;

      html += `</div><div class="card-arrow">→</div></div></div>`;
    });

    if (useExample) {
      html += `<div style="font-family:sans-serif;font-size:12px;color:#aaa;text-align:center;margin-top:8px;font-style:italic">Eksempel-data — tilføj dine egne relationer i onboarding</div>`;
    }

    personList.innerHTML = html;
  }

  // ── INSIGHT + TIME-SHIFT ──
  const insightEl = document.getElementById('rel-now-insight');
  if (insightEl) {
    let html = '';

    // Dynamic insight text
    const elNames = relData.map(r => `${r.name} i ${r.elLabel}`).join(', ');
    html += `<div class="insight-box" style="background:rgba(123,122,158,0.05);border:1px solid rgba(123,122,158,0.10)">`;
    html += `<div class="insight-label" style="color:#88839e">Jeres element-dynamik</div>`;
    html += `<div class="insight-text" style="color:#7b7a9e">${elLabel} dominerer i dig. ${elNames}. Hver relation aktiverer en forskellig del af dit element — og det skifter med tiden.</div>`;
    html += `</div>`;

    // Time shifts for first relation
    if (relData.length > 0) {
      const primary = relData[0];
      const isMale = primary.gender === 'male';
      const theirPhase = primary.cycles.lifePhase;
      const yearsToShift = theirPhase.endAge ? (theirPhase.endAge - primary.cycles.age) : null;

      html += `<div class="time-shift">`;
      if (yearsToShift !== null && yearsToShift > 0) {
        const nextPhase = isMale
          ? Calculations.calculateMalePhase(theirPhase.endAge)
          : Calculations.calculateLifePhase(theirPhase.endAge);
        const nextEl = nextPhase ? Calculations.ELEMENT_LABELS[nextPhase.element] : '';
        html += `<div class="time-shift-item" style="background:rgba(123,122,158,0.04);border-color:rgba(123,122,158,0.08)">`;
        html += `<div class="time-shift-when" style="color:#88839e">${primary.name}s næste faseskift</div>`;
        html += `<div class="time-shift-what" style="color:#7b7a9e">Om ${Math.round(yearsToShift)} år · ${primary.elLabel} → ${nextEl}</div>`;
        html += `</div>`;
      }

      // Link to tidsrejse
      html += `<div class="time-shift-item" style="background:rgba(123,122,158,0.04);border-color:rgba(123,122,158,0.08);cursor:pointer" onclick="navigateToVinduerWithDate('${new Date(now.getFullYear()+5, now.getMonth(), now.getDate()).toISOString().split('T')[0]}')">`;
      html += `<div class="time-shift-when" style="color:#88839e">Se det på en anden dato</div>`;
      html += `<div class="time-shift-what" style="color:#7b7a9e">Åbn tidsrejsen →</div>`;
      html += `</div>`;
      html += `</div>`;
    }

    insightEl.innerHTML = html;
  }
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

/* ── Jeres Konstellation — multi-person gruppe-dynamik ── */

const KONST_CLIMATE_TEXTS = {
  'fuld_resonans': {
    label: 'Fuld resonans',
    text: 'Jeres felt vibrerer i samklang. Når så mange elementer mødes i resonans, opstår der en sjælden stilhed — som om I alle forstår uden at sige noget. Det er kraft, men også sårbarhed.'
  },
  'naerende_flow': {
    label: 'Nærende flow',
    text: 'Der strømmer energi mellem jer — den ene nærer den anden, som ringe i vandet. Det er et felt der bærer. Pas på at den der giver mest, også selv får næring.'
  },
  'kreativ_spaending': {
    label: 'Kreativ spænding',
    text: 'Jeres konstellation bærer spænding — elementer der udfordrer hinanden. Det kan føles tungt, men det er også dér forandring sker. Spændingen er ikke et problem. Den er materialet.'
  },
  'dynamisk_felt': {
    label: 'Dynamisk felt',
    text: 'Jeres konstellation er mangfoldig — der er både næring, spejling og udfordring. Det er et levende felt med mange lag. Ingen enkelt dynamik dominerer.'
  },
  'stille_balance': {
    label: 'Stille balance',
    text: 'Jeres elementer mødes uden de store konflikter. Det er et roligt felt — måske for roligt til tider. Balancen er smuk, men vækst kræver også lidt friktion.'
  }
};

const KONST_GROUP_TEXTS = {
  'VAND': 'Gruppen bærer dybde og intuition. I mærker hinanden uden ord — men risikerer at drukne i det uskrevne.',
  'TRÆ': 'Gruppen peger opad — vækst, nyt, forandring. Der er energi, men også risiko for at vokse i hver sin retning.',
  'ILD': 'Gruppen brænder. Der er passion og nærvær, men også risiko for udbrændthed. Hvem holder ilden, og hvem brænder sig?',
  'JORD': 'Gruppen er rodfæstet. I søger tryghed og næring hos hinanden. Men Jord kan også blive tung, hvis ingen bevæger sig.',
  'METAL': 'Gruppen har klarhed og retning. I ser essensen. Men Metal kan føles koldt, hvis der ikke er plads til det bløde.'
};

const KONST_PAIR_POETISK = {
  'resonans': [
    'spejler hinanden i stilhed',
    'deler den samme grundtone',
    'genkender noget dybt i den anden'
  ],
  'naerer': [
    'giver næring til den andens vækst',
    'bærer den andens rytme videre',
    'styrker det den anden bygger på'
  ],
  'naeres': [
    'modtager næring og ro',
    'vokser i den andens nærhed',
    'finder styrke i det der gives'
  ],
  'udfordrer': [
    'skaber kreativ friktion',
    'stiller krav til den anden',
    'tvinger hinanden til at vokse'
  ],
  'moeder': [
    'bringer noget uventet ind',
    'udvider hinandens felt',
    'tilfører det den anden ikke selv bærer'
  ]
};

function initRelKonstellation() {
  const data = getUserCycles();
  if (!data) return;
  const { cycles, dominant } = data;
  const userEl = dominant.element;
  const userElLabel = Calculations.ELEMENT_LABELS[userEl];
  const now = new Date();
  const nourishing = { 'VAND': 'TRÆ', 'TRÆ': 'ILD', 'ILD': 'JORD', 'JORD': 'METAL', 'METAL': 'VAND' };
  const controlling = { 'VAND': 'ILD', 'TRÆ': 'JORD', 'ILD': 'METAL', 'JORD': 'VAND', 'METAL': 'TRÆ' };

  const relations = Storage.getRelations();
  const useExample = !relations || relations.length === 0;
  const rels = useExample
    ? [{ name: 'Partner', birthdate: '1983-04-15', gender: 'male', type: 'partner' },
       { name: 'Mor', birthdate: '1958-03-22', gender: 'female', type: 'mor' },
       { name: 'Datter', birthdate: '1994-07-10', gender: 'female', type: 'barn' }]
    : relations;

  // Track selected state (Dig always selected, first 2 others selected by default)
  const selected = [true]; // index 0 = Dig
  rels.forEach((_, i) => selected.push(i < 2));

  // ── PERSON PILLS ──
  const pillsEl = document.getElementById('konst-pills');
  if (pillsEl) {
    let html = `<div style="background:rgba(123,122,158,0.14);border-radius:20px;padding:8px 16px;font-family:sans-serif;font-size:13px;color:#7b7a9e;font-weight:500;opacity:1;border-bottom:2px solid rgba(123,122,158,0.4)">Dig</div>`;
    rels.forEach((r, i) => {
      const active = selected[i + 1];
      html += `<div class="konst-pill" data-idx="${i + 1}" style="background:rgba(184,166,192,${active ? '0.12' : '0.05'});border-radius:20px;padding:8px 16px;font-family:sans-serif;font-size:13px;color:#9b8da8;font-weight:${active ? '500' : '300'};cursor:pointer;opacity:${active ? '1' : '0.5'};border-bottom:${active ? '2px solid rgba(184,166,192,0.4)' : '2px solid transparent'};transition:all 0.2s">${r.name}</div>`;
    });
    pillsEl.innerHTML = html;

    // Bind pill clicks
    pillsEl.querySelectorAll('.konst-pill').forEach(pill => {
      pill.addEventListener('click', function() {
        const idx = parseInt(this.getAttribute('data-idx'));
        selected[idx] = !selected[idx];
        this.style.opacity = selected[idx] ? '1' : '0.5';
        this.style.fontWeight = selected[idx] ? '500' : '300';
        this.style.background = selected[idx] ? 'rgba(184,166,192,0.12)' : 'rgba(184,166,192,0.05)';
        this.style.borderBottom = selected[idx] ? '2px solid rgba(184,166,192,0.4)' : '2px solid transparent';
      });
    });
  }

  // ── SE KONSTELLATION KNAP ──
  const btn = document.getElementById('konst-btn');
  const resultEl = document.getElementById('konst-result');
  if (btn && !btn._bound) {
    btn._bound = true;
    btn.addEventListener('click', () => {
      // Gather selected people
      const people = [{ name: 'Dig', el: userEl, elLabel: userElLabel, cycles: cycles, isSelf: true }];
      rels.forEach((r, i) => {
        if (!selected[i + 1]) return;
        const isMale = r.gender === 'male';
        const rc = cyclesAtDate(r.birthdate, now, isMale);
        const theirEl = rc.lifePhase.element;
        people.push({
          name: r.name,
          el: theirEl,
          elLabel: Calculations.ELEMENT_LABELS[theirEl],
          cycles: rc,
          isSelf: false,
          type: r.type || '',
          gender: r.gender
        });
      });

      if (people.length < 3) {
        showActionToast('Vælg mindst 2 personer udover dig selv');
        return;
      }

      // ── ANALYZE ALL PAIRWISE INTERACTIONS ──
      const pairs = [];
      for (let a = 0; a < people.length; a++) {
        for (let b = a + 1; b < people.length; b++) {
          const elA = people[a].el;
          const elB = people[b].el;
          let interType;
          if (elA === elB) interType = 'resonans';
          else if (nourishing[elA] === elB) interType = 'naerer';
          else if (nourishing[elB] === elA) interType = 'naeres';
          else if (controlling[elA] === elB || controlling[elB] === elA) interType = 'udfordrer';
          else interType = 'moeder';

          const poetTexts = KONST_PAIR_POETISK[interType];
          const poetisk = poetTexts[Math.floor(Math.random() * poetTexts.length)];

          pairs.push({
            a: people[a], b: people[b],
            type: interType,
            poetisk: poetisk
          });
        }
      }

      // ── ELEMENT DISTRIBUTION ──
      const elCount = { 'VAND': 0, 'TRÆ': 0, 'ILD': 0, 'JORD': 0, 'METAL': 0 };
      people.forEach(p => elCount[p.el]++);
      const dominant = Object.entries(elCount).sort((a, b) => b[1] - a[1]);
      const dominantEl = dominant[0][0];
      const dominantLabel = Calculations.ELEMENT_LABELS[dominantEl];
      const missing = dominant.filter(([el, c]) => c === 0).map(([el]) => Calculations.ELEMENT_LABELS[el]);

      // ── GROUP CLIMATE ──
      const resonansCount = pairs.filter(p => p.type === 'resonans').length;
      const naerCount = pairs.filter(p => p.type === 'naerer' || p.type === 'naeres').length;
      const udfordrCount = pairs.filter(p => p.type === 'udfordrer').length;
      const totalPairs = pairs.length;

      let climateKey;
      if (resonansCount >= totalPairs * 0.5) climateKey = 'fuld_resonans';
      else if (naerCount >= totalPairs * 0.5) climateKey = 'naerende_flow';
      else if (udfordrCount >= totalPairs * 0.5) climateKey = 'kreativ_spaending';
      else if (udfordrCount === 0 && resonansCount === 0) climateKey = 'stille_balance';
      else climateKey = 'dynamisk_felt';

      const climate = KONST_CLIMATE_TEXTS[climateKey];

      // ── BUILD RESULT HTML ──
      let html = '';

      // 1. GROUP CLIMATE
      html += `<div class="featured feat-relationer" style="margin-bottom:16px">`;
      html += `<div class="featured-label">${climate.label} · ${people.length} personer</div>`;
      html += `<div class="featured-text">${climate.text}</div>`;
      html += `</div>`;

      // 2. ELEMENT DISTRIBUTION
      html += `<div class="insight-box" style="background:rgba(123,122,158,0.05);border:1px solid rgba(123,122,158,0.10);margin-bottom:16px">`;
      html += `<div class="insight-label" style="color:#88839e">Jeres element-fordeling</div>`;

      // Bar visualization
      const allElements = ['VAND', 'TRÆ', 'ILD', 'JORD', 'METAL'];
      allElements.forEach(el => {
        const count = elCount[el];
        const pct = Math.round((count / people.length) * 100);
        const label = Calculations.ELEMENT_LABELS[el];
        const names = people.filter(p => p.el === el).map(p => p.name).join(', ');
        html += `<div style="margin-bottom:8px">`;
        html += `<div style="display:flex;justify-content:space-between;font-family:sans-serif;font-size:12px;color:#7b7a9e;margin-bottom:3px"><span>${label}${count > 0 ? ' · ' + names : ''}</span><span>${count}</span></div>`;
        html += `<div style="height:6px;background:rgba(123,122,158,0.08);border-radius:3px;overflow:hidden"><div style="height:100%;width:${pct}%;background:rgba(123,122,158,${count > 0 ? '0.35' : '0.05'});border-radius:3px;transition:width 0.5s"></div></div>`;
        html += `</div>`;
      });

      // Dominant + missing text
      html += `<div style="font-family:Georgia,serif;font-size:14px;color:#7b7a9e;font-style:italic;margin-top:12px;line-height:1.6">`;
      html += KONST_GROUP_TEXTS[dominantEl];
      if (missing.length > 0) {
        html += ` <span style="color:#88839e">${missing.join(' og ')} mangler i jeres felt — det er det I søger udenfor.</span>`;
      }
      html += `</div>`;
      html += `</div>`;

      // 3. PAIRWISE INTERACTIONS
      html += `<div class="group-label" style="color:#7b7a9e">Hvem m&oslash;der hvem</div>`;
      pairs.forEach(pair => {
        const typeLabels = {
          'resonans': 'Resonans',
          'naerer': 'N\u00e6rer',
          'naeres': 'N\u00e6res af',
          'udfordrer': 'Udfordrer',
          'moeder': 'M\u00f8der'
        };
        const typeColors = {
          'resonans': 'rgba(123,122,158,0.12)',
          'naerer': 'rgba(91,140,90,0.10)',
          'naeres': 'rgba(74,144,164,0.10)',
          'udfordrer': 'rgba(200,90,84,0.08)',
          'moeder': 'rgba(184,166,192,0.08)'
        };

        html += `<div style="background:${typeColors[pair.type]};border:1px solid rgba(123,122,158,0.08);border-radius:14px;padding:14px 16px;margin-bottom:8px">`;
        html += `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">`;
        html += `<div style="font-family:sans-serif;font-size:13px;color:#7b7a9e;font-weight:500">${pair.a.name} <span style="color:#aaa">&amp;</span> ${pair.b.name}</div>`;
        html += `<div style="font-family:sans-serif;font-size:11px;color:#88839e;background:rgba(123,122,158,0.08);border-radius:10px;padding:2px 8px">${typeLabels[pair.type]}</div>`;
        html += `</div>`;
        html += `<div style="font-family:sans-serif;font-size:12px;color:#88839e;margin-bottom:4px">${pair.a.elLabel} ${pair.type === 'resonans' ? '=' : pair.type === 'naerer' ? '\u2192' : pair.type === 'naeres' ? '\u2190' : '\u2194'} ${pair.b.elLabel}</div>`;
        html += `<div style="font-family:Georgia,serif;font-size:13px;color:#7b7a9e;font-style:italic;line-height:1.5">${pair.a.name} og ${pair.b.name} ${pair.poetisk}.</div>`;
        html += `</div>`;
      });

      // 4. WHAT IT MEANS FOR THIS GROUP
      html += `<div style="margin-top:16px"></div>`;
      html += `<div class="quick-action" style="background:linear-gradient(135deg,rgba(123,122,158,0.06),rgba(123,122,158,0.02));border-color:rgba(123,122,158,0.10)">`;
      html += `<div class="quick-action-label" style="color:#88839e">Hvad det betyder</div>`;

      const personNames = people.map(p => p.name).join(', ').replace(/, ([^,]*)$/, ' og $1');
      html += `<div class="quick-action-title" style="color:#7b7a9e">Når ${personNames} er sammen</div>`;

      // Dynamic concrete text
      let concreteText = '';
      if (resonansCount > 0) {
        const resPairs = pairs.filter(p => p.type === 'resonans');
        concreteText += `${resPairs.map(p => p.a.name + ' og ' + p.b.name).join(', ')} deler element — det giver genkendelse og ro. `;
      }
      if (udfordrCount > 0) {
        const udPairs = pairs.filter(p => p.type === 'udfordrer');
        concreteText += `${udPairs.map(p => p.a.name + ' og ' + p.b.name).join(', ')} udfordrer hinanden — det er der væksten ligger. `;
      }
      if (naerCount > 0) {
        const naerPairs = pairs.filter(p => p.type === 'naerer' || p.type === 'naeres');
        concreteText += `${naerPairs.map(p => p.a.name + ' og ' + p.b.name).join(', ')} nærer hinanden — energien flyder naturligt.`;
      }
      if (!concreteText) {
        concreteText = 'Jeres elementer mødes uden stærke TCM-forbindelser. Det giver frihed, men kræver bevidst forbindelse.';
      }

      html += `<div class="quick-action-desc" style="color:#777">${concreteText}</div>`;
      html += `</div>`;

      // 5. SPØRG DIG SELV
      html += `<div class="quick-action" style="background:linear-gradient(135deg,rgba(123,122,158,0.06),rgba(123,122,158,0.02));border-color:rgba(123,122,158,0.10);margin-top:12px">`;
      html += `<div class="quick-action-label" style="color:#88839e">Sp\u00f8rg dig selv</div>`;
      html += `<div class="quick-action-title" style="color:#7b7a9e">Hvad sker der i rummet, n\u00e5r I alle er samlet?</div>`;
      html += `<div class="quick-action-desc" style="color:#777">M\u00e6rk efter: hvem taler mest? Hvem tr\u00e6kker sig? Hvem holder feltet? Det er ikke tilf\u00e6ldigt — det er elementerne der forhandler.</div>`;
      html += `</div>`;

      if (useExample) {
        html += `<div style="font-family:sans-serif;font-size:12px;color:#aaa;text-align:center;margin-top:12px;font-style:italic">Eksempel-data — tilf\u00f8j dine egne relationer i onboarding</div>`;
      }

      // Show result
      if (resultEl) {
        resultEl.innerHTML = html;
        resultEl.style.display = 'block';
        resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Update figure caption
      const caption = document.getElementById('konst-figur-caption');
      if (caption) {
        caption.textContent = `${people.length} personer · ${dominantLabel} dominerer · ${climate.label}`;
      }

      // Render constellation SVG figure
      renderKonstellationFigur(people, pairs);
    });
  }

  // Auto-click if 3+ people are pre-selected (for immediate result)
  const preSelected = selected.filter(s => s).length;
  if (preSelected >= 3 && btn) {
    setTimeout(() => btn.click(), 200);
  }
}

function renderKonstellationFigur(people, pairs) {
  const container = document.getElementById('konst-figur');
  if (!container) return;

  const W = 300, H = 280;
  const cx = W / 2, cy = H / 2 - 10;
  const R = people.length <= 3 ? 70 : 80;
  const nodeR = 28;

  // Position people in a circle
  const positions = people.map((p, i) => {
    const angle = (-Math.PI / 2) + (2 * Math.PI * i / people.length);
    return {
      x: cx + R * Math.cos(angle),
      y: cy + R * Math.sin(angle)
    };
  });

  let svg = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;max-width:300px;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg">`;

  // Draw connection lines
  pairs.forEach(pair => {
    const idxA = people.indexOf(pair.a);
    const idxB = people.indexOf(pair.b);
    const posA = positions[idxA];
    const posB = positions[idxB];

    const lineColors = {
      'resonans': 'rgba(123,122,158,0.35)',
      'naerer': 'rgba(91,140,90,0.30)',
      'naeres': 'rgba(74,144,164,0.30)',
      'udfordrer': 'rgba(200,90,84,0.25)',
      'moeder': 'rgba(184,166,192,0.20)'
    };
    const dashArray = pair.type === 'udfordrer' ? '4,3' : pair.type === 'moeder' ? '2,4' : 'none';

    svg += `<line x1="${posA.x}" y1="${posA.y}" x2="${posB.x}" y2="${posB.y}" stroke="${lineColors[pair.type]}" stroke-width="${pair.type === 'resonans' ? 2.5 : 1.5}" ${dashArray !== 'none' ? 'stroke-dasharray="' + dashArray + '"' : ''}/>`;
  });

  // Draw person nodes
  people.forEach((p, i) => {
    const pos = positions[i];
    const fillOpacity = p.isSelf ? 0.15 : 0.10;
    const strokeOpacity = p.isSelf ? 0.40 : 0.25;

    svg += `<circle cx="${pos.x}" cy="${pos.y}" r="${nodeR}" fill="rgba(123,122,158,${fillOpacity})" stroke="rgba(123,122,158,${strokeOpacity})" stroke-width="1.5"/>`;
    svg += `<text x="${pos.x}" y="${pos.y - 5}" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#7b7a9e" font-weight="${p.isSelf ? '600' : '400'}">${p.name}</text>`;
    svg += `<text x="${pos.x}" y="${pos.y + 9}" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#88839e">${p.elLabel}</text>`;
  });

  svg += `</svg>`;
  container.innerHTML = svg;
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
