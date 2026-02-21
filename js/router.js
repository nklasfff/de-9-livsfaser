/* ============================================================
   ROUTER — SPA hash-based routing for De 9 Livsfaser
   ============================================================ */

const Router = {
  currentScreen: null,
  screenCache: {},
  history: [],

  /* ---- Screen registry ---- */
  screens: {
    // Onboarding
    'onboarding':        { file: 'screens/onboarding.html',        niveau: -1, parent: null,          tone: null,          init: 'initOnboarding' },
    'onboarding-result': { file: 'screens/onboarding-result.html', niveau: -1, parent: null,          tone: null,          init: 'initOnboardingResult' },

    // Niveau 0 — Forside
    'forside':           { file: 'screens/forside.html',           niveau: 0,  parent: null,          tone: null,          init: 'initForside' },

    // Niveau 1 — Section overviews
    'cyklusser':         { file: 'screens/cyklusser.html',         niveau: 1,  parent: 'forside',     tone: 'cyklusser',   init: 'initCyklusser' },
    'relationer':        { file: 'screens/relationer.html',        niveau: 1,  parent: 'forside',     tone: 'relationer',  init: 'initRelationer' },
    'praksis':           { file: 'screens/praksis.html',           niveau: 1,  parent: 'forside',     tone: 'praksis',     init: 'initPraksis' },
    'rejse':             { file: 'screens/rejse.html',             niveau: 1,  parent: 'forside',     tone: 'rejse',       init: 'initRejse' },
    'vinduer':           { file: 'screens/vinduer.html',           niveau: 1,  parent: 'forside',     tone: 'vinduer',     init: 'initVinduer' },

    // Niveau 2 — Cyklusser undersider
    'cyk-cic':           { file: 'screens/cyk-cic.html',           niveau: 2,  parent: 'cyklusser',   tone: 'cyklusser',   init: 'initCykCic' },
    'cyk-ni-faser':      { file: 'screens/cyk-ni-faser.html',      niveau: 2,  parent: 'cyklusser',   tone: 'cyklusser',   init: 'initCykNiFaser' },
    'cyk-fire-uger':     { file: 'screens/cyk-fire-uger.html',     niveau: 2,  parent: 'cyklusser',   tone: 'cyklusser',   init: 'initCykFireUger' },
    'cyk-overgange':     { file: 'screens/cyk-overgange.html',     niveau: 2,  parent: 'cyklusser',   tone: 'cyklusser',   init: 'initCykOvergange' },
    'cyk-kontrol':       { file: 'screens/cyk-kontrol.html',       niveau: 2,  parent: 'cyklusser',   tone: 'cyklusser',   init: 'initCykKontrol' },

    // Niveau 2 — Relationer undersider
    'rel-lige-nu':       { file: 'screens/rel-lige-nu.html',       niveau: 2,  parent: 'relationer',  tone: 'relationer',  init: 'initRelLigeNu' },
    'rel-to-rytmer':     { file: 'screens/rel-to-rytmer.html',     niveau: 2,  parent: 'relationer',  tone: 'relationer',  init: 'initRelToRytmer' },
    'rel-tre-gen':       { file: 'screens/rel-tre-gen.html',       niveau: 2,  parent: 'relationer',  tone: 'relationer',  init: 'initRelTreGen' },
    'rel-jeres-energi':  { file: 'screens/rel-jeres-energi.html',  niveau: 2,  parent: 'relationer',  tone: 'relationer',  init: 'initRelJeresEnergi' },
    'rel-epigenetik':    { file: 'screens/rel-epigenetik.html',    niveau: 2,  parent: 'relationer',  tone: 'relationer',  init: 'initRelEpigenetik' },

    // Niveau 2 — Praksis undersider
    'pra-yin-yoga':      { file: 'screens/pra-yin-yoga.html',      niveau: 2,  parent: 'praksis',     tone: 'praksis',     init: 'initPraYinYoga' },
    'pra-eft':           { file: 'screens/pra-eft.html',           niveau: 2,  parent: 'praksis',     tone: 'praksis',     init: 'initPraEft' },
    'pra-foelelser':     { file: 'screens/pra-foelelser.html',     niveau: 2,  parent: 'praksis',     tone: 'praksis',     init: 'initPraFoelelser' },
    'pra-mindfulness':   { file: 'screens/pra-mindfulness.html',   niveau: 2,  parent: 'praksis',     tone: 'praksis',     init: 'initPraMindfulness' },
    'pra-refleksion':    { file: 'screens/pra-refleksion.html',    niveau: 2,  parent: 'praksis',     tone: 'praksis',     init: 'initPraRefleksion' },
    'pra-kost':          { file: 'screens/pra-kost.html',          niveau: 2,  parent: 'praksis',     tone: 'praksis',     init: 'initPraKost' },
    'pra-healing':       { file: 'screens/pra-healing.html',       niveau: 2,  parent: 'praksis',     tone: 'praksis',     init: 'initPraHealing' },
    'pra-inspiration':   { file: 'screens/pra-inspiration.html',   niveau: 2,  parent: 'praksis',     tone: 'praksis',     init: 'initPraInspiration' },

    // Niveau 2 — Rejse undersider
    'rej-udvikling':     { file: 'screens/rej-udvikling.html',     niveau: 2,  parent: 'rejse',       tone: 'rejse',       init: 'initRejUdvikling' },
    'rej-journal':       { file: 'screens/rej-journal.html',       niveau: 2,  parent: 'rejse',       tone: 'rejse',       init: 'initRejJournal' },
    'rej-favoritter':    { file: 'screens/rej-favoritter.html',    niveau: 2,  parent: 'rejse',       tone: 'rejse',       init: 'initRejFavoritter' },
    'rej-opdagelser':    { file: 'screens/rej-opdagelser.html',    niveau: 2,  parent: 'rejse',       tone: 'rejse',       init: 'initRejOpdagelser' },
    'rej-alle-faser':    { file: 'screens/rej-alle-faser.html',    niveau: 2,  parent: 'rejse',       tone: 'rejse',       init: 'initRejAlleFaser' },
    'rej-baggrund':      { file: 'screens/rej-baggrund.html',      niveau: 2,  parent: 'rejse',       tone: 'rejse',       init: 'initRejBaggrund' },

    // Niveau 2 — Vinduer undersider
    'vin-tidsrejse':     { file: 'screens/vin-tidsrejse.html',     niveau: 2,  parent: 'vinduer',     tone: 'vinduer',     init: 'initVinTidsrejse' },
    'vin-tidslinje':     { file: 'screens/vin-tidslinje.html',     niveau: 2,  parent: 'vinduer',     tone: 'vinduer',     init: 'initVinTidslinje' },
    'vin-oejeblikke':    { file: 'screens/vin-oejeblikke.html',    niveau: 2,  parent: 'vinduer',     tone: 'vinduer',     init: 'initVinOejeblikke' },

    // Utility
    'soeg':              { file: 'screens/soeg.html',              niveau: 2,  parent: 'forside',     tone: null,          init: 'initSoeg' },
    'indstillinger':     { file: 'screens/indstillinger.html',     niveau: 2,  parent: 'forside',     tone: null,          init: 'initIndstillinger' },
    'om-isabelle':       { file: 'screens/om-isabelle.html',       niveau: 2,  parent: 'forside',     tone: null,          init: 'initOmIsabelle' },
  },

  /* ---- Arc nav mapping ---- */
  arcMap: {
    'forside': 0,
    'vinduer': 1,
    'cyklusser': 2,
    'relationer': 3,
    'praksis': 4,
    'rejse': 5,
  },

  /* ---- Navigate to a screen ---- */
  async navigate(name, opts = {}) {
    const screen = this.screens[name];
    if (!screen) { console.warn('Unknown screen:', name); return; }

    const direction = opts.direction || this._inferDirection(name);
    const container = document.getElementById('screen-content');

    // Fetch screen HTML
    let html;
    if (this.screenCache[name]) {
      html = this.screenCache[name];
    } else {
      try {
        const resp = await fetch(screen.file);
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        html = await resp.text();
        this.screenCache[name] = html;
      } catch (e) {
        console.error('Failed to load screen:', name, e);
        container.innerHTML = '<div style="text-align:center;padding:60px 24px;color:#aaa">Siden kunne ikke indlæses</div>';
        return;
      }
    }

    // Inject + animate
    container.innerHTML = html;
    container.className = '';
    void container.offsetWidth; // force reflow
    container.classList.add(
      direction === 'back' ? 'screen-enter-back' :
      direction === 'fade' ? 'screen-fade' :
      'screen-enter'
    );

    // Scroll to top
    window.scrollTo(0, 0);

    // Update state
    if (this.currentScreen && direction !== 'replace') {
      this.history.push(this.currentScreen);
    }
    this.currentScreen = name;

    // Update hash
    if (window.location.hash !== '#' + name) {
      window.history.replaceState(null, '', '#' + name);
    }

    // Update header
    this._updateHeader(name, screen);

    // Update arc nav
    this._updateArcNav(name, screen);

    // Call init function
    if (screen.init && typeof window[screen.init] === 'function') {
      window[screen.init]();
    }
  },

  /* ---- Go back ---- */
  goBack() {
    const screen = this.screens[this.currentScreen];
    if (!screen) return;

    // If we have a parent, go there
    if (screen.parent) {
      this.history = this.history.filter(s => s !== screen.parent);
      this.navigate(screen.parent, { direction: 'back' });
    } else if (this.history.length > 0) {
      const prev = this.history.pop();
      this.navigate(prev, { direction: 'back' });
    }
  },

  /* ---- Infer direction ---- */
  _inferDirection(name) {
    const target = this.screens[name];
    const current = this.currentScreen ? this.screens[this.currentScreen] : null;

    // No current → replace (initial load)
    if (!current) return 'replace';

    // Arc nav tap → fade
    if (this.arcMap[name] !== undefined && current.niveau <= 1) return 'fade';

    // Going deeper → forward
    if (target.niveau > current.niveau) return 'forward';

    // Going up → back
    if (target.niveau < current.niveau) return 'back';

    // Same level → fade
    return 'fade';
  },

  /* ---- Update header ---- */
  _updateHeader(name, screen) {
    const backBtn = document.getElementById('back-btn');
    const searchBtn = document.getElementById('search-btn');

    // Back button: visible when not on forside or onboarding
    if (backBtn) {
      const showBack = screen.niveau > 0;
      backBtn.classList.toggle('visible', showBack);
    }

    // Search button: visible when not on onboarding
    if (searchBtn) {
      const showSearch = screen.niveau >= 0;
      searchBtn.classList.toggle('visible', showSearch);
    }
  },

  /* ---- Update arc nav active state ---- */
  _updateArcNav(name, screen) {
    // Find which section this screen belongs to
    let section = name;
    if (screen.niveau === 2 && screen.parent) {
      section = screen.parent;
    }

    const arcIndex = this.arcMap[section];
    if (typeof window.ArcNav !== 'undefined' && typeof window.ArcNav.setActive === 'function') {
      window.ArcNav.setActive(arcIndex !== undefined ? arcIndex : -1);
    }

    // Show/hide arc nav: hidden during onboarding
    if (typeof window.ArcNav !== 'undefined' && typeof window.ArcNav.toggle === 'function') {
      window.ArcNav.toggle(screen.niveau >= 0);
    }
  },

  /* ---- Init: handle hash on load ---- */
  init() {
    // Listen for hash changes
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      if (hash && this.screens[hash] && hash !== this.currentScreen) {
        this.navigate(hash);
      }
    });

    // Determine initial screen
    const hash = window.location.hash.slice(1);
    if (hash && this.screens[hash]) {
      this.navigate(hash, { direction: 'replace' });
    } else if (Storage.isOnboarded()) {
      this.navigate('forside', { direction: 'replace' });
    } else {
      this.navigate('onboarding', { direction: 'replace' });
    }
  }
};

window.Router = Router;
