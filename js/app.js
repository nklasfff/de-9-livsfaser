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
  const dominant = Calculations.getDominant(cycles.elements);
  return { user, cycles, dominant };
}

/* ---- Analyze inner climate ---- */
function analyzeClimate(elements) {
  const counts = {};
  elements.forEach(e => { counts[e] = (counts[e] || 0) + 1; });
  const dominant = Calculations.getDominant(elements);
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

  if (dominant.count >= 3) return INNER_CLIMATE.fuld_resonans;
  if (nourishCount >= 2) return INNER_CLIMATE.naerende_flow;
  if (challengeCount >= 2) return INNER_CLIMATE.indre_storm;
  if (challengeCount === 1 && nourishCount >= 1) return INNER_CLIMATE.kreativ_spaending;
  return INNER_CLIMATE.stille_balance;
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

  // Initialize arc navigation
  if (typeof ArcNav !== 'undefined') {
    ArcNav.init();
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
  const climate = analyzeClimate(cycles.elements);
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
  const climate = analyzeClimate(cycles.elements);
  setText('forside-climate-text', climate.text);
  setText('forside-climate-sub', `${climate.label} \u2014 ${dominant.count} af 5 cyklusser peger mod ${elLabel(dominant.element)}`);

  // Praksis cards — based on dominant element
  const domEl = dominant.element;
  const yoga = typeof INSIGHT_YOGA !== 'undefined' && INSIGHT_YOGA[domEl] ? INSIGHT_YOGA[domEl][0] : null;
  const healing = typeof HEALING_SOUNDS !== 'undefined' ? HEALING_SOUNDS[domEl] : null;
  const food = typeof INSIGHT_FOOD !== 'undefined' && INSIGHT_FOOD[domEl] ? INSIGHT_FOOD[domEl][0] : null;

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
  setText('cyk-ea-text', `${elLabel} dominerer. Din energi samler sig i dybden \u2014 ${dominant.count} af ${cycles.elements.length} cyklusser peger mod ${elLabel}.`);

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
  setText('cyk-featured-text', `${dominant.count} af dine fem cyklusser peger mod ${elLabel}. Din energi samler sig i \u00e9n retning.`);

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

  // Quick action — yoga
  const yoga = typeof INSIGHT_YOGA !== 'undefined' && INSIGHT_YOGA[domEl] ? INSIGHT_YOGA[domEl][0] : null;
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
   NIVEAU 2 STUBS — will be implemented in Sprint 11-12
   ============================================================ */

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
