# DESIGNSYSTEM — De 9 Livsfasers Energi (de-9-livsfaser)

*Komplet designsystem for appen.*
*Opdateret: 22. februar 2026*

---

## 1. TYPOGRAFI

### Skrifttyper (self-hosted WOFF2)

| Skrifttype | Vaegt | Brug |
|------------|-------|------|
| **Playfair Display** Regular (400) | Normal serif | Overskrifter, poetiske titler |
| **Playfair Display** Medium (500) | Medium serif | Fremhaevede titler |
| **Playfair Display** Italic (400) | Kursiv serif | Isabelles stemme, subtitles, poetisk tekst |
| **Playfair Display** Medium Italic (500) | Medium kursiv | Staerkt fremhaevet poetisk tekst |
| **DM Sans** Light (300) | Tynd sans | Tal, data, labels |
| **DM Sans** Regular (400) | Normal sans | Broedtekst, beskrivelser |
| **DM Sans** Medium (500) | Medium sans | Aktive chips, vigtige labels |

### CSS Variables
```css
--font-serif: 'Playfair Display', Georgia, 'Times New Roman', serif;
--font-sans: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Typografi-skala

| Element | Font | Stoerrelse | Vaegt | Ekstra |
|---------|------|-----------|-------|--------|
| Section header titel (sh-title) | Serif | 22-26px | 400 | — |
| Section header subtitle (sh-sub) | Serif italic | 15-16px | 400 | italic |
| Section eyebrow (sh-eyebrow) | Sans | 11px | 400 | uppercase, letter-spacing: 2.5px |
| Featured label | Sans | 11px | 400 | uppercase, letter-spacing: 2px |
| Featured tekst | Serif | 16-17px | 400 | — |
| Card titel | Sans | 15-16px | 500 | — |
| Card beskrivelse | Sans | 14px | 400 | color: --text-mid |
| Card label | Sans | 11px | 300 | uppercase, letter-spacing: 1.5px |
| Feeling-box label | Sans | 11px | 400 | uppercase, letter-spacing: 2px |
| Feeling-box tekst | Serif italic | 16px | 400 | italic, line-height: 1.7 |
| Insight label | Sans | 11px | 300 | uppercase, letter-spacing: 2px |
| Insight tekst | Sans | 14px | 400 | line-height: 1.6 |
| Stat nummer | Serif | 22px | 400 | — |
| Stat label | Sans | 12px | 300 | — |
| Body text | Sans | 15px | 400 | line-height: 1.6 |

---

## 2. FARVER

### Primaire farver (tokens.css)

```css
/* Baggrund */
--bg: #FDFCFB;                    /* Varm off-white */

/* Tekst-hierarki */
--text-dark: #2a2520;             /* Moerkeste tekst */
--text-body: #3a3530;             /* Broedtekst */
--text-mid: #555;                 /* Sekundaer tekst */
--text-light: #888;               /* Tertiair tekst */
--text-muted: #777;               /* Daempet */
--text-faint: #888;               /* Svag */
--text-ghost: #999;               /* Naesten usynlig */
--text-pale: #aaa;                /* Blegeste tekst */

/* App-accenter */
--blaa: #6c82a9;                  /* Primaer blaa */
--blaa-light: #889ec3;            /* Lys blaa */
--blaa-pale: #9cabc3;             /* Bleg blaa */
--neutral: #5A74A5;               /* Neutral blaa */
--lilla: #6B5F7B;                 /* Primaer lilla */
--lilla-light: #8B7D9B;           /* Lys lilla */
--lilla-pale: #a89bb3;            /* Bleg lilla */
```

### Sektionstoner (5 familier)

| Sektion | Hex | RGB base | CSS variable |
|---------|-----|----------|-------------|
| **Cyklusser** | #6c82a9 | 108, 130, 169 | --tone-cyklusser |
| **Relationer** | #7b7a9e | 123, 122, 158 | --tone-relationer |
| **Praksis** | #7a908b | 122, 144, 139 | --tone-praksis |
| **Rejse** | #8a96a9 | 138, 150, 169 | --tone-rejse |
| **Vinduer** | #6B5F7B | 107, 95, 123 | --tone-vinduer |

### RGBA Opacitetsskala

Brug sektionens RGB-base med disse opaciteter:

```
0.02   Subtil baggrundstint (section closer)
0.03   Baggrund i kort (card)
0.04   Baggrund i brikker (chip inactive)
0.06   Bleg border
0.08   Tydeligere border, filter-chip border
0.10   SVG circle fill, badge baggrund
0.12   Aktiv chip baggrund
0.14   SVG circle stroke (subtle)
0.18   SVG fill (fremhaavet)
0.20   Markeret border
0.25   Streg i figurer
0.30   SVG stroke (tydelig)
0.40   Pile-ikoner, sekundaire elementer
```

### Funktionelle farver
```css
--error: #C85A54;
--shadow-card: 0 2px 10px rgba(0,0,0,0.04);
--shadow-card-sm: 0 2px 8px rgba(0,0,0,0.03);
--border-subtle: rgba(0,0,0,0.06);
```

---

## 3. LAYOUT

### Spacing
```css
--pad-screen: 24px;          /* Padding paa skaerme */
--header-height: 60px;       /* Header hoejde */
--radius: 14px;              /* Standard border-radius */
--radius-sm: 12px;           /* Lille border-radius */
--radius-pill: 20px;         /* Pill/chip border-radius */
```

### Grid-principper
- Kort og komponenter: fuld bredde med padding
- Max-width: Aldrig sat eksplicit — skaermen er maks ~600px viewport
- Gap mellem kort: 10-12px
- Gap mellem sektioner: 24-32px

---

## 4. KOMPONENT-KATALOG

### 4.1 Section Header
```html
<div class="section-header">
  <div class="sh-eyebrow">EYEBROW TEKST</div>
  <h1 class="sh-title">Titel i Serif</h1>
  <p class="sh-sub">Undertitel i Isabelles stemme. Poetisk, personlig, 25-40 ord.</p>
</div>
```

### 4.2 Feeling Box
Emotionel, poetisk tekst i serif italic. Altid tonet med sektionsfarve.
```html
<div class="feeling-box">
  <div class="fb-label">LABEL · ELEMENT</div>
  <div class="fb-text">Poetisk tekst i serif italic...</div>
</div>
```

### 4.3 Featured Card
Fremhaavet indholdsblok. Bruges til "dagens anbefaling" eller "dit element".
```html
<div class="featured feat-SEKTION">
  <div class="featured-label">LABEL</div>
  <div class="featured-text">Hovedtekst...</div>
  <div class="featured-sub">Undertekst</div>
</div>
```
Klasse-varianter: `feat-cyklusser`, `feat-relationer`, `feat-praksis`, `feat-rejse`, `feat-vinduer`

### 4.4 Standard Card
Navigerbart kort med pil. Broedtekst i Isabelles stemme (25-40 ord).
```html
<div class="card" onclick="Router.navigate('target')">
  <div class="card-row">
    <div>
      <div class="card-label">LABEL</div>
      <div class="card-title">Titel</div>
      <div class="card-desc">Beskrivelse...</div>
    </div>
    <div class="card-arrow">→</div>
  </div>
</div>
```

### 4.5 Quick Action
Kompakt handlingskort.
```html
<div class="quick-action" onclick="Router.navigate('target')">
  <div class="quick-action-title">Titel</div>
  <div class="quick-action-desc">Kort beskrivelse</div>
  <div class="quick-action-arrow">→</div>
</div>
```

### 4.6 Insight Box
Faktuel information eller indsigt.
```html
<div class="insight-box">
  <div class="insight-label">LABEL</div>
  <div class="insight-text">Tekst med indsigt...</div>
</div>
```

### 4.7 Profil Fold
Foldbar profil-sektion.
```html
<div class="profil-fold">
  <div class="ph">Din profil ▸</div>
  <div class="profil-body">
    <div class="pr"><span class="pk">Label</span><span class="pv">Vaerdi</span></div>
  </div>
</div>
```

### 4.8 Element Analysis
5 horisontale bars der viser element-fordeling.
```html
<div class="element-analysis">
  <div class="ea-bar">
    <div class="ea-label">Vand</div>
    <div class="ea-track"><div class="ea-fill" style="width:40%"></div></div>
    <div class="ea-val">2/5</div>
  </div>
</div>
```

### 4.9 Stat Row
4 stat-bokse i raekke.
```html
<div class="stat-row">
  <div class="stat-box">
    <div class="stat-number">12</div>
    <div class="stat-label-text">Check-ins</div>
  </div>
</div>
```

### 4.10 Breath Box
Aandedraetsanimation med cirkel.
```html
<div class="breath-box">
  <div class="breath-circle"><div class="breath-inner">Indaand</div></div>
  <div class="breath-text">Beskrivelse...</div>
</div>
```
JS: `startBreathing(boxEl)` — 4s indaand, 4s hold, 6s udaand. `initBreathBoxes()` tilfojer start-knap automatisk.

### 4.11 Praksis Card
Kort med titel, beskrivelse og pil til praksis-sider.
```html
<div class="praksis-card" onclick="Router.navigate('pra-yin-yoga')">
  <div>
    <div class="pk-label">LABEL · ELEMENT</div>
    <div class="pk-name">Titel</div>
    <div class="pk-desc">Beskrivelse</div>
  </div>
  <div class="pk-arrow">→</div>
</div>
```

### 4.12 Check-in Buttons
5 mood-knapper (et per element).
```html
<div class="ci-btns">
  <div class="ci-btn" onclick="selectMood('vand', this)">Stille</div>
  <div class="ci-btn" onclick="selectMood('trae', this)">Voksende</div>
  <div class="ci-btn" onclick="selectMood('ild', this)">Intens</div>
  <div class="ci-btn" onclick="selectMood('jord', this)">Rodfaestet</div>
  <div class="ci-btn" onclick="selectMood('metal', this)">Klar</div>
</div>
```
Aktiv tilstand: `.ci-btn--active`

### 4.13 Filter Chips
```html
<div class="filter-chips">
  <div onclick="setTrackingPeriod('7d', this)" class="chip active">7 dage</div>
  <div onclick="setTrackingPeriod('30d', this)" class="chip">30 dage</div>
</div>
```

### 4.14 Dato Chips
```html
<div class="date-chip">Da vi moedtes</div>
<div class="date-chip">Om 5 aar</div>
```

### 4.15 Person Pills
```html
<div class="person-pill active">Dig</div>
<div class="person-pill">Clara</div>
```

### 4.16 Action Bar (auto-injected)
Tilfojes automatisk af Router paa niveau 2 screens. Skal IKKE tilfojes manuelt.
```html
<div class="action-bar">
  <button class="action-btn" onclick="actionShare()">Del</button>
  <button class="action-btn" onclick="actionCopyLink()">Kopier</button>
  <button class="action-btn" onclick="actionToggleSave()">Gem</button>
</div>
```

### 4.17 Toast Notification
```javascript
showActionToast('Besked her');  // Vises i 2 sekunder
```

### 4.18 Section Closer (lotus)
Afslutter hver screen. Standard paa alle screens.
```html
<div class="section-closer">
  <img src="assets/images/lotus-adskiller.png" alt="" class="lotus-closer">
</div>
```

### 4.19 Figur Container
```html
<div class="fig">
  <img src="assets/images/billede.png" alt="Beskrivelse" style="max-width:300px">
</div>
```
Max-width: 300px (portraet), 400px (landskab), 220px (smalt/hoejt)

### 4.20 Dots Separator
```html
<div class="dots">· · ·</div>
```

### 4.21 Milestone Box
Viser fremgang i nuvaerende fase.
```html
<div class="milestone-box">
  <div class="ms-phase">Fase 7 · Hoest</div>
  <div class="ms-years">Du er i aar 3 af denne fase</div>
  <div class="ms-bar"><div class="ms-fill" style="width:43%"></div><div class="ms-marker" style="left:43%"></div></div>
  <div class="ms-text">Beskrivelse...</div>
</div>
```

### 4.22 Fase Card
Klikbart kort for en livsfase (brugt i cyk-ni-faser og rej-alle-faser).
```html
<div class="fase-card" data-fase="5" onclick="navigateToFaseDetail(5)">
  <div class="fase-num">5</div>
  <div class="fase-name">Ansvar</div>
  <div class="fase-age">28-35 aar</div>
  <div class="fase-element">Ild</div>
</div>
```
Aktiv tilstand: `.fase-card.active`

---

## 5. SEKTIONSANATOMI

Hver screen foelger denne struktur (top → bund):

```
1. Section Header (sh-eyebrow + sh-title + sh-sub)
2. Figur/billede (.fig)
3. Feeling Box (emotionel tekst)
4. Featured Card (fremhaavet anbefaling)
5. Quick Action (kompakt handling)
6. Standard Cards (navigation)
7. Insight Box (ekstra indsigt)
8. Dots separator (mellem sektioner)
9. [Action Bar — auto-injected paa niveau 2]
10. Section Closer (lotus)
```

Ikke alle elementer er til stede paa alle skaerme, men raekkefoelgen er altid den samme.

---

## 6. DESIGNREGLER

1. **Altid monokrom inden for sektionen** — brug sektionens tone-farve i variationer
2. **Aldrig mere end 3 farvetoner** i en figur
3. **Serif for poetisk/emotionelt** — Playfair Display, italic for Isabelles stemme
4. **Sans for funktionelt** — DM Sans for labels, data, navigation
5. **Labels: 11px, sans, uppercase, letter-spacing 1.5-2.5px**
6. **Border-radius: 14px** paa alle containere
7. **Ingen haarde skygger** — kun `0 2px 10px rgba(0,0,0,0.04)`
8. **mix-blend-mode: multiply** paa PNG-billeder (skjuler hvid baggrund)
9. **filter: saturate(0.6-0.7)** paa billeder for at matche afdaempet palette
10. **Maksimalt 5-7 tekstfelter** i en figur — hold det luftigt

---

*Se ogsaa: FIGUR-KATALOG.md for figur-specifikke regler, KAPITEL-LOG.md for screen-inventar.*
