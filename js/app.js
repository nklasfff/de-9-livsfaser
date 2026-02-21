/* ============================================================
   APP — Main application init for De 9 Livsfaser
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => {
      console.warn('SW registration failed:', err);
    });
  }

  // Initialize arc navigation
  if (typeof ArcNav !== 'undefined') {
    ArcNav.init();
  }

  // Initialize router (determines first screen)
  Router.init();
});

/* ---- Screen init functions ---- */
/* These are called by the router after loading each screen's HTML */

function initOnboarding() {
  const form = document.getElementById('onboarding-form');
  if (!form) return;

  const input = document.getElementById('birth-input');
  const btn = document.getElementById('birth-btn');

  if (btn) {
    btn.addEventListener('click', () => {
      const val = input ? input.value : '';
      if (!val) return;

      // Parse and save birthdate
      const date = new Date(val);
      if (isNaN(date.getTime())) {
        // Try Danish format parsing
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

function initOnboardingResult() {
  const user = Storage.getUser();
  if (!user) { Router.navigate('onboarding'); return; }

  // Calculate cycles for display
  if (typeof Calculations !== 'undefined') {
    const cycles = Calculations.allCycles(user.birthdate, new Date());
    // Populate result screen with cycle data
    const el = document.getElementById('result-data');
    if (el && cycles) {
      // Dynamic content injection handled by screen-specific code
    }
  }

  const continueBtn = document.getElementById('continue-btn');
  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      Storage.setOnboarded();
      Router.navigate('forside', { direction: 'forward' });
    });
  }
}

function initForside() {
  // Home screen — populate with dynamic data if available
}

function initCyklusser() {}
function initRelationer() {}
function initPraksis() {}
function initRejse() {}
function initVinduer() {}

// Niveau 2 stubs — will be implemented in later sprints

// Cyklusser undersider
function initCykCic() {}
function initCykNiFaser() {}
function initCykFireUger() {}
function initCykOvergange() {}
function initCykKontrol() {}

// Relationer undersider
function initRelLigeNu() {}
function initRelToRytmer() {}
function initRelTreGen() {}
function initRelJeresEnergi() {}
function initRelEpigenetik() {}

// Praksis undersider
function initPraYinYoga() {}
function initPraEft() {}
function initPraFoelelser() {}
function initPraMindfulness() {}
function initPraRefleksion() {}
function initPraKost() {}
function initPraHealing() {}
function initPraInspiration() {}

// Rejse undersider
function initRejUdvikling() {}
function initRejJournal() {}
function initRejFavoritter() {}
function initRejOpdagelser() {}
function initRejAlleFaser() {}
function initRejBaggrund() {}

// Vinduer undersider
function initVinTidsrejse() {}
function initVinTidslinje() {}
function initVinOejeblikke() {}

// Utility
function initSoeg() {}
function initIndstillinger() {}
function initOmIsabelle() {}
