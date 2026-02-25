# DE 9 LIVSFASERS ENERGI — PWA

## PROJECT OVERVIEW

Progressive Web App (PWA) companion til den danske bog "De 9 Livsfasers Energi" af Isabelle Evita Soendergaard.

**Technology:** Pure HTML5, CSS3, JavaScript — NO build process, NO frameworks
**Deployment:** GitHub Pages (static files) — https://nklasfff.github.io/de-9-livsfaser/
**Repository:** nklasfff/de-9-livsfaser
**Language:** Danish (da-DK)
**Target Users:** Danish women aged 28-63 (men tilgaengelig for alle kvinder)

**Core Purpose:**
Dynamisk companion til bogen — hjaelper brugere med at forstaa hvor de er i ALLE fem cyklusser samtidigt (livsfase, aarstid, maaned, ugedag, organur) og hvordan deres fase interagerer med andre (mor, datter, partner).

---

## FILE STRUCTURE (ACTUAL)

```
de-9-livsfaser/
├── index.html              # Main app shell (header, drawer nav, screen-content)
├── manifest.json           # PWA manifest (theme: #6c82a9, bg: #FDFCFB)
├── sw.js                   # Service worker (currently v57)
├── css/
│   ├── tokens.css          # Design tokens, font-face, CSS variables
│   ├── base.css            # Layout, header, drawer, animations
│   ├── components.css      # Reusable components (.card, .featured, .feeling-box etc.)
│   ├── sections.css        # Section-specific component styles
│   ├── screens.css         # Screen-specific styles
│   └── arc-nav.css         # Arc nav styles (DEAD CODE — not rendered)
├── js/
│   ├── storage.js          # LocalStorage wrapper (Storage object)
│   ├── calculations.js     # Cycle calculations (Calculations object)
│   ├── data.js             # Content data (LIVSFASE_DETAIL, MENSTRUAL_WEEK_DATA etc.)
│   ├── arc-nav.js          # Arc nav component (DEAD CODE — never initialized)
│   ├── router.js           # Hash-based SPA router (Router object, 44 screens)
│   └── app.js              # All init functions + UI logic (~2184 lines)
├── fonts/                  # Self-hosted WOFF2 fonts (Playfair Display + DM Sans)
├── assets/
│   ├── icons/              # App icons (192x192, 512x512)
│   └── images/             # 72 content images (PNG, SVG, JPG)
├── screens/                # 44 HTML screen templates
│   ├── onboarding.html, onboarding-result.html
│   ├── forside.html
│   ├── cyklusser.html, relationer.html, praksis.html, rejse.html, vinduer.html
│   ├── cir-dit-liv.html ... cir-organur.html (6 cirkel-detaljer)
│   ├── cyk-cic.html ... cyk-kontrol.html + livsfase-detail.html (6 cyklusser)
│   ├── rel-lige-nu.html ... rel-epigenetik.html (5 relationer)
│   ├── pra-yin-yoga.html ... pra-inspiration.html (8 praksis)
│   ├── rej-udvikling.html ... rej-baggrund.html (6 rejse)
│   ├── vin-tidslinje.html, vin-oejeblikke.html (2 vinduer)
│   └── soeg.html, indstillinger.html, om-isabelle.html (3 utility)
└── outputs/                # Documentation
```

**Script load order (in index.html):**
1. storage.js
2. calculations.js
3. data.js
4. data-expanded.js — 12 ekstra content-blokke (~420 snippets i Isabelles stemme)
5. arc-nav.js (loaded but never activated — dead code)
6. router.js
7. app.js

**Content i data-expanded.js:**
MORGEN_AFTEN_TEKST (30), ELEMENT_FASE_DAGLIG (45), TEMA_DYBDE (30),
TIDSREJSE_PAR (25), OVERGANGSALDER_SPECIFIK (~40), RELATION_DYBDE (20),
UDVIDET_HJAELP (75), SJAELDNE_VINDUER (15), CYKLUS_SKIFT_TEKST (20),
AARSTID_ELEMENT_TEKST (25), ORGANUR_VINDUER (12), EKSTRA_REFLEKSIONER_NY (45)

---

## NAVIGATION SYSTEM (NY ARKITEKTUR — vedtaget 25. feb 2026)

### TRE-LAGS ARKITEKTUR
```
LAG 1: 4 primaere skaerme med bottom tab navigation
  Lige Nu | Relationer | Tidsrejse | Vinduer
  → Lette, luftige oversigter. Mockup: mockup-4-skaerme.html

LAG 2: Fordybelse (udfolder sig PAA de primaere skaerme)
  → Naar brugeren vaelger at dykke dybere
  → Motoren genererer indhold fra LIVSFASE_DETAIL + data-expanded.js
  → IKKE separate skaerme — folder ud paa den primaere skaerm

LAG 3: 5 sekundaere skaerme (separate destinationer)
  De Ni Faser | Min Praksis | Min Rejse | Tre Generationer | Baggrund
  → Tilgaengelige fra drawer-menu og "dyk dybere"-links
```

### Primary: Bottom Tab Navigation (4 tabs)
```
[ Lige Nu ] [ Relationer ] [ Tidsrejse ] [ Vinduer ]
```

### Secondary: Hamburger Drawer Menu
```
Drawer sections:
├── Lige Nu                    → forside (tab 1)
├── Relationer                 → relationer (tab 2)
├── Tidsrejse                  → tidsrejse (tab 3)
├── Vinduer                    → vinduer (tab 4)
├── ──────────
├── De Ni Faser                → cyk-ni-faser → livsfase-detail
├── Min Praksis                → din-praksis
├── Min Rejse                  → min-rejse
├── Tre Generationer           → rel-tre-gen
├── Baggrund                   → baggrund
├── ──────────
├── Indstillinger              → indstillinger
└── Om Isabelle                → om-isabelle
```

### Header
```html
<header class="app-header">
  <button id="menu-btn" onclick="toggleDrawer()">☰</button>      <!-- Hamburger — visible on forside -->
  <button id="back-btn" onclick="Router.goBack()">← Tilbage</button>  <!-- Back — visible on niveau 1+ -->
  <div class="app-header-title">De 9 Livsfaser</div>
  <button id="search-btn" onclick="Router.navigate('soeg')">🔍</button>
</header>
```

### Screen Levels (ny)
- **Primaer (tabs):** forside, relationer, tidsrejse, vinduer (4 bottom tabs)
- **Sekundaer:** De Ni Faser, Min Praksis, Min Rejse, Tre Generationer, Baggrund
- **Utility:** soeg, indstillinger, om-isabelle
- **Onboarding:** onboarding, onboarding-result

### Navigation Pattern
```javascript
// Navigate to a screen
Router.navigate('screen-name');

// Navigate with options
Router.navigate('screen-name', { direction: 'back' });  // back animation
Router.navigate('screen-name', { direction: 'fade' });   // fade animation
Router.navigate('screen-name', { direction: 'forward' }); // forward animation

// Go back (uses parent chain from router.js)
Router.goBack();

// Navigate to livsfase detail (special pattern)
window._selectedPhase = 5;
Router.navigate('livsfase-detail');
```

### Dead Code Warning
`js/arc-nav.js` and `css/arc-nav.css` are loaded but **never activated**. The DOM elements (`<div id="arc-nav">`, `<svg id="arc-svg">`) do not exist in index.html. `ArcNav.init()` is never called. Router._updateArcNav() calls ArcNav.setActive/toggle which silently fail because the DOM target is missing.

---

## DESIGN SYSTEM

### Fonts (self-hosted WOFF2)
```css
--font-serif: 'Playfair Display', Georgia, 'Times New Roman', serif;
--font-sans: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

Playfair Display: Regular, Medium, Italic, Medium Italic
DM Sans: Light (300), Regular (400), Medium (500)

### Colors (from tokens.css)
```css
/* Background */
--bg: #FDFCFB;

/* Text hierarchy */
--text-dark: #2a2520;
--text-body: #3a3530;
--text-mid: #555;
--text-light: #888;

/* App accent */
--blaa: #6c82a9;
--blaa-light: #889ec3;
--lilla: #6B5F7B;
--lilla-light: #8B7D9B;

/* Section tones (5 families) */
--tone-cyklusser: #6c82a9;     /* RGB base: 108,130,169 */
--tone-relationer: #7b7a9e;    /* RGB base: 123,122,158 */
--tone-praksis: #7a908b;       /* RGB base: 122,144,139 */
--tone-rejse: #8a96a9;         /* RGB base: 138,150,169 */
--tone-vinduer: #6B5F7B;       /* RGB base: 107,95,123 */

/* Functional */
--error: #C85A54;
--shadow-card: 0 2px 10px rgba(0,0,0,0.04);
--radius: 14px;
```

### RGBA Opacity Scale (for section-toned components)
```
0.02-0.04  Background fills (subtle tinting)
0.06-0.08  Borders
0.10-0.12  Active chips, badges
0.15-0.18  SVG fills, hover states
0.25-0.30  SVG strokes
0.40       Arrow icons, secondary elements
```

---

## ROUTER — Complete Screen Registry (44 screens)

| Route | File | Niveau | Parent | Tone | Init Function |
|-------|------|--------|--------|------|---------------|
| onboarding | screens/onboarding.html | -1 | — | — | initOnboarding |
| onboarding-result | screens/onboarding-result.html | -1 | — | — | initOnboardingResult |
| forside | screens/forside.html | 0 | — | — | initForside |
| cyklusser | screens/cyklusser.html | 1 | forside | cyklusser | initCyklusser |
| relationer | screens/relationer.html | 1 | forside | relationer | initRelationer |
| praksis | screens/praksis.html | 1 | forside | praksis | initPraksis |
| rejse | screens/rejse.html | 1 | forside | rejse | initRejse |
| vinduer | screens/vinduer.html | 1 | forside | vinduer | initVinduer |
| cir-dit-liv | screens/cir-dit-liv.html | 2 | forside | — | initCirDitLiv |
| cir-livsfase | screens/cir-livsfase.html | 2 | forside | — | initCirLivsfase |
| cir-aarstid | screens/cir-aarstid.html | 2 | forside | — | initCirAarstid |
| cir-maaned | screens/cir-maaned.html | 2 | forside | — | initCirMaaned |
| cir-ugedag | screens/cir-ugedag.html | 2 | forside | — | initCirUgedag |
| cir-organur | screens/cir-organur.html | 2 | forside | — | initCirOrganur |
| cyk-cic | screens/cyk-cic.html | 2 | cyklusser | cyklusser | initCykCic |
| cyk-ni-faser | screens/cyk-ni-faser.html | 2 | cyklusser | cyklusser | initCykNiFaser |
| cyk-fire-uger | screens/cyk-fire-uger.html | 2 | cyklusser | cyklusser | initCykFireUger |
| cyk-overgange | screens/cyk-overgange.html | 2 | cyklusser | cyklusser | initCykOvergange |
| cyk-kontrol | screens/cyk-kontrol.html | 2 | cyklusser | cyklusser | initCykKontrol |
| livsfase-detail | screens/livsfase-detail.html | 2 | cyk-ni-faser | cyklusser | initLivsfaseDetail |
| rel-lige-nu | screens/rel-lige-nu.html | 2 | relationer | relationer | initRelLigeNu |
| rel-to-rytmer | screens/rel-to-rytmer.html | 2 | relationer | relationer | initRelToRytmer |
| rel-tre-gen | screens/rel-tre-gen.html | 2 | relationer | relationer | initRelTreGen |
| rel-jeres-energi | screens/rel-jeres-energi.html | 2 | relationer | relationer | initRelJeresEnergi |
| rel-epigenetik | screens/rel-epigenetik.html | 2 | relationer | relationer | initRelEpigenetik |
| pra-yin-yoga | screens/pra-yin-yoga.html | 2 | praksis | praksis | initPraYinYoga |
| pra-eft | screens/pra-eft.html | 2 | praksis | praksis | initPraEft |
| pra-foelelser | screens/pra-foelelser.html | 2 | praksis | praksis | initPraFoelelser |
| pra-mindfulness | screens/pra-mindfulness.html | 2 | praksis | praksis | initPraMindfulness |
| pra-refleksion | screens/pra-refleksion.html | 2 | praksis | praksis | initPraRefleksion |
| pra-kost | screens/pra-kost.html | 2 | praksis | praksis | initPraKost |
| pra-healing | screens/pra-healing.html | 2 | praksis | praksis | initPraHealing |
| pra-inspiration | screens/pra-inspiration.html | 2 | praksis | praksis | initPraInspiration |
| rej-udvikling | screens/rej-udvikling.html | 2 | rejse | rejse | initRejUdvikling |
| rej-journal | screens/rej-journal.html | 2 | rejse | rejse | initRejJournal |
| rej-favoritter | screens/rej-favoritter.html | 2 | rejse | rejse | initRejFavoritter |
| rej-opdagelser | screens/rej-opdagelser.html | 2 | rejse | rejse | initRejOpdagelser |
| rej-alle-faser | screens/rej-alle-faser.html | 2 | rejse | rejse | initRejAlleFaser |
| rej-baggrund | screens/rej-baggrund.html | 2 | rejse | rejse | initRejBaggrund |
| vin-tidslinje | screens/vin-tidslinje.html | 2 | vinduer | vinduer | initVinTidslinje |
| vin-oejeblikke | screens/vin-oejeblikke.html | 2 | vinduer | vinduer | initVinOejeblikke |
| soeg | screens/soeg.html | 2 | forside | — | initSoeg |
| indstillinger | screens/indstillinger.html | 2 | forside | — | initIndstillinger |
| om-isabelle | screens/om-isabelle.html | 2 | forside | — | initOmIsabelle |

---

## CORE ARCHITECTURE

### Screen Loading Pattern
1. User clicks link → `Router.navigate('screen-name')`
2. Router fetches `screens/screen-name.html` (cached after first load)
3. HTML injected into `<main id="screen-content">`
4. Screen transition animation applied
5. Header updated (back/menu/search visibility)
6. Action bar injected on niveau 2 screens (Del/Kopier/Gem)
7. Init function called: `window[screen.init]()`

### Init Function Pattern (app.js)
Every screen has a corresponding init function that:
1. Gets user cycle data via `getUserCycles()`
2. Sets dynamic text via `setText(id, text)` and `setHTML(id, html)`
3. Binds event listeners (with `_bound` flag to prevent duplicates)
4. Renders dynamic content based on current cycles/dominant element

### Data Flow
```
Storage.getUser() → { birthdate, name, ... }
    ↓
Calculations.allCycles(birthdate, new Date())
    ↓
{ lifePhase, season, weekday, organ, monthCycle, elements, age }
    ↓
Calculations.getWeightedDominant(cycles)
    ↓
{ element: 'VAND'|'TRAE'|'ILD'|'JORD'|'METAL', count, counts, score, scores }
    ↓
Init function uses dominant element to personalize all content
```

### Weighted Dominance (getWeightedDominant)
```
Livsfase:  weight 3   (7 years — strongest signal)
Aarstid:   weight 2   (~3 months)
Maaned:    weight 1.5 (1 month)
Ugedag:    weight 1   (1 day)
Organur:   weight 0.5 (2 hours — weakest)
```

---

## LOCAL STORAGE KEYS

| Key | Type | Content |
|-----|------|---------|
| `livsfaser_user` | Object | { birthdate, name, createdAt, tracksMenstruation, menstrualStart } |
| `livsfaser_relations` | Array | [{ name, birthdate, gender, type }] |
| `livsfaser_favorites` | Object | { screens: [] } |
| `livsfaser_checkins` | Array | [{ date, mood, note, cycles }] |
| `livsfaser_reflections` | Array | [{ date, question, text }] |
| `livsfaser_settings` | Object | Settings from indstillinger |
| `livsfaser_onboarded` | String | 'true' when onboarding complete |
| `indstillinger` | Object | Toggle states, cycle length, times |
| `saved_screens` | Array | Screen names saved via action bar |
| `livsfaser_journal` | Array | [{ date, text, phase, season, element }] |

---

## KEY FEATURES

### Check-in System
- 5 mood buttons (vand/trae/ild/jord/metal) on forside and rej-udvikling
- Quick check-in from forside (one-tap, auto-saves)
- Full check-in from rej-udvikling (mood + note + save button)
- Stats: total check-ins, streak, elements touched, reflections count
- Timeline: chronological list of check-ins with mood, date, note
- Period filter chips: 7d/30d/90d/Alle

### Journal System
- Textarea + save button on rej-journal
- Filter chips: Seneste/Denne maaned/Alle
- Entries stored with phase, season, element metadata

### Refleksion System
- Phase-specific questions from REFLEKSION_DATA (9 phases x 3 questions)
- Expandable card → textarea → save
- Stored in livsfaser_reflections

### Vinduer (Time Travel)
- Date input + preset chips + person pills
- cyclesAtDate() calculates any person's cycles at any date
- TCM interaction analysis between user and relation elements

### Breathing Animation
- 4s inhale → 4s hold → 6s exhale cycle (14s total)
- CSS animation on .breath-circle
- Used on praksis and pra-mindfulness screens

### Indstillinger (Settings)
- Name and birthdate editing
- 12 toggles (menstruation, moon, notifications, privacy, etc.)
- Cycle length input
- Notification times
- Export/import JSON backup
- Show onboarding / Reset all data

---

## ISABELLE'S VOICE — CRITICAL

All text must sound like Isabelle wrote it — personal, poetic, tentative:

- Use "maaske", "kan", "noget i dig"
- NEVER "det er vigtigt at", "husk at", "man skal"
- 15-30 word sentences with natural flow
- Natural Danish discourse particles: "nemlig", "jo", "faktisk"
- Serif italic for poetic subtitles (Isabelles stemme)

---

## INCLUSIVITY — CRITICAL

This app is for ALL women — with or without children, in relationships or single.
Relations are OPTIONAL. The app functions fully without adding any relations.
Main focus is on USER HERSELF first.

---

## GOTCHAS

1. **arc-nav.js is DEAD CODE** — loaded but never initialized, no DOM elements exist
2. **Router.navigate()** is the ONLY way to navigate — NOT `App.loadScreen()`
3. **window._selectedPhase** stores which phase to show in livsfase-detail
4. **_bound flag pattern** — always check `if (el._bound) return` before adding event listeners
5. **Service worker cache** needs version bump on every deploy (currently v57 in sw.js line 1)
6. **Dates** — use `Storage.getLocalDateStr()` for local dates, NEVER `toISOString().split('T')[0]`
7. **getText/setHTML helpers** — use `setText(id, text)` and `setHTML(id, html)` for DOM updates
8. **getUserCycles()** returns null if no user/birthdate — always check for null
9. **analyzeClimate()** uses INNER_CLIMATE from data.js — categorizes element interactions
10. **Action bar** is auto-injected on niveau 2 screens by Router.navigate() — don't add manually

---

## DEPLOYMENT

```bash
# Local development
python3 -m http.server 8000
open http://localhost:8000

# Deploy (GitHub Pages — just push)
git add <specific-files>
git commit -m "description"
git push origin main

# GitHub CLI auth (if needed)
/tmp/gh_install/gh_2.65.0_macOS_arm64/bin/gh auth setup-git
```

**Always bump sw.js cache version before pushing!**

---

## REFERENCES

- **Mockup (4 primaere skaerme):** /mockup-4-skaerme.html — REFERENCEN for design
- **Ekspertanalyse:** /outputs/RESEARCH-MOTOR-OPTIMIZATION.md — content-motor, retention, anbefalinger
- **Skaerm-plan (detaljer):** Se memory/screen-plan.md
- Design System: /outputs/DESIGNSYSTEM.md
- Figure Catalog: /outputs/FIGUR-KATALOG.md
- Screen Inventory: /outputs/KAPITEL-LOG.md
- Architecture Analysis: /outputs/APP-STRUKTUR-ANALYSE.md
