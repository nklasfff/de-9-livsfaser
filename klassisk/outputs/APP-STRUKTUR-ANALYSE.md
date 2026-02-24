# APP-STRUKTUR-ANALYSE — De 9 Livsfasers Energi (de-9-livsfaser)

*Analyse af appens arkitektur, "motor", og designprincipper.*
*Opdateret: 22. februar 2026*

---

## 1. APPENS "MOTOR" — KOMBINATIONSGENERATOREN

### Kerneprincippet
Appen beregner brugerens position i **5 samtidige cyklusser** og bruger deres **kombination** til at generere personaliseret indhold.

```
5 cyklusser × relationer × tid = tusindvis af unikke indsigter
```

### De 5 cyklusser (beregnet i calculations.js)

| Cyklus | Laengde | Elementer | Vaegt |
|--------|---------|-----------|-------|
| Livsfase | 7 aar (kvinder) / 8 aar (maend) | 9 faser → 5 elementer | 3.0 |
| Aarstid | ~3 maaneder | 5 aarstider → 5 elementer | 2.0 |
| Kalendermåned | 1 maaned | 12 maaneder → 5 elementer | 1.5 |
| Ugedag | 1 dag | 7 dage → 5 elementer | 1.0 |
| Organur | 2 timer | 12 organer → 5 elementer | 0.5 |

### Weighted Dominant Element
`getWeightedDominant()` beregner det dominerende element med vaegt:
- Livsfasen (7 aar) vejer 6x saa meget som organur (2 timer)
- Resultatet driver ALT personaliseret indhold i appen

### TCM Interaktioner (5-elements-dynamik)
```
Naering (sheng): VAND → TRAE → ILD → JORD → METAL → VAND
Kontrol (ke):    VAND → ILD, TRAE → JORD, ILD → METAL, JORD → VAND, METAL → TRAE
```
Bruges i: cyk-cic (10 par-analyser), vinduer (relations-sammenligning), rel-jeres-energi, cyk-kontrol

### Inner Climate (analyzeClimate)
5 kategorier baseret paa element-interaktioner:
1. **Fuld resonans** — dominant element score >= 5 ELLER count >= 3
2. **Naerende flow** — 2+ naerende par
3. **Stille balance** — default (hverken staerkt naerende eller udfordrende)
4. **Kreativ spaending** — 1 udfordrende + 1+ naerende
5. **Indre storm** — 2+ udfordrende par

---

## 2. 80/20-REGLEN

### 80% af brugerne kommer fra smerte
- Overgangsalder, livskrise, identitetstab
- De soeger forklaring paa hvad der sker
- Appen maa ALDRIG vaere klinisk — altid varm og anerkendende

### 20% soeger positiv udvikling
- Nysgerrige paa cyklusser og selvforstaelse
- De soeger dybde og nuancer
- Appen maa ALDRIG vaere overfladisk

### Konsekvens for design
- Feeling-box er altid det foerste emotionelle element (validering)
- Featured kort giver konkret handling (hvad kan du goere)
- Aldrig "du boer" — altid "maaske", "kan", "noget i dig"
- Empty states viser altid fuldt indhold (eksempel-data)

---

## 3. APPENS 6 SEKTIONER

### Forside (Niveau 0)
**Formaal:** Overblik over "lige nu" — alle 5 cyklusser + hurtig handling
**Motor-brug:** allCycles() + getWeightedDominant() → klima, praksis-kort, check-in

### Mine Cyklusser
**Formaal:** Forstaa dine cyklusser i dybden
**Motor-brug:** Element-analyse, 10 par-interaktioner, fase-detaljer, TCM-pentagon
**Screens:** cyklusser, cyk-cic, cyk-ni-faser, livsfase-detail, cyk-fire-uger, cyk-overgange, cyk-kontrol

### Mine Relationer
**Formaal:** Forstaa hvordan din fase moeder andres
**Motor-brug:** calculateMalePhase() (8-aars cyklus), TCM-interaktion mellem elementer
**Screens:** relationer, rel-lige-nu, rel-to-rytmer, rel-tre-gen, rel-jeres-energi, rel-epigenetik

### Min Praksis
**Formaal:** Konkret hjaelp baseret paa dit element
**Motor-brug:** Dominant element → yoga, kost, healinglyd, aandedraet, foelelser
**Screens:** praksis, pra-yin-yoga, pra-eft, pra-foelelser, pra-mindfulness, pra-refleksion, pra-kost, pra-healing, pra-inspiration

### Min Rejse
**Formaal:** Personlig tracking og udvikling over tid
**Motor-brug:** Check-in data, journal, fase-progression
**Screens:** rejse, rej-udvikling, rej-journal, rej-favoritter, rej-opdagelser, rej-alle-faser, rej-baggrund

### Mine Vinduer
**Formaal:** Tidsrejse — se cyklusser paa en hvilken som helst dato
**Motor-brug:** cyclesAtDate() for enhver person paa enhver dato + TCM-interaktion
**Screens:** vinduer, vin-tidslinje, vin-oejeblikke

---

## 4. TEKNISK ARKITEKTUR

### SPA-pattern (Single Page Application)
```
index.html (shell: header + drawer + screen-content)
    ↓
Router.navigate('screen-name')
    ↓
fetch('screens/screen-name.html') → inject → animate → init()
```

### Filer og ansvar

| Fil | Linjer | Ansvar |
|-----|--------|--------|
| router.js | ~258 | SPA routing, 44 screen registry, navigation, header update |
| app.js | ~2184 | Alle init-funktioner, check-in, journal, action bar, drawer, settings |
| calculations.js | ~243 | Cycle beregninger, weighted dominance, phase data |
| data.js | ~250+ | Indholdsdata (faser, uger, maane, refleksion, kontrol, yoga, mad, lyd) |
| storage.js | ~111 | localStorage wrapper (user, relations, favorites, checkins, reflections) |
| arc-nav.js | ~270 | DEAD CODE — loaded but never activated |

### Init-funktion moenster
Alle screens foelger dette moenster:
```javascript
function initScreenName() {
  // 1. Hent brugerdata
  const data = getUserCycles();
  if (!data) return;

  // 2. Udpak data
  const { cycles, dominant } = data;
  const elLabel = Calculations.ELEMENT_LABELS[dominant.element];

  // 3. Saet dynamisk tekst
  setText('id', 'tekst');

  // 4. Bind events (med _bound check)
  const btn = document.getElementById('xxx');
  if (btn && !btn._bound) {
    btn._bound = true;
    btn.addEventListener('click', () => { ... });
  }
}
```

### State management
- Ingen global state manager — bruger funktions-scope + DOM + localStorage
- `TrackingState` objekt for check-in og journal filter state
- `window._selectedPhase` for livsfase-detail navigation
- Alle persistent data i localStorage via Storage objekt

---

## 5. KOMPONENT-SKABELONER

### Skabelon A: Sektionsoversigt (Niveau 1)
```
Section Header (titel + poetisk subtitle)
↓
Figur/billede
↓
Feeling Box (emotionel tekst om dominant element)
↓
Featured Card (dagens anbefaling)
↓
Quick Action (en konkret handling)
↓
Navigationskort (til undersider)
↓
Dots separator
↓
Section Closer (lotus)
```

### Skabelon B: Underside (Niveau 2)
```
Section Header (specifik titel + subtitle)
↓
Figur/billede
↓
Featured Card ELLER Feeling Box
↓
Dynamisk indhold (kort, lister, interaktive elementer)
↓
Insight Box (ekstra viden)
↓
Cross-links (relaterede sider)
↓
[Action Bar — auto-injected]
↓
Section Closer (lotus)
```

---

## 6. PERSONALISERINGENS DYBDE

### Niveau 1: Element-baseret (brugt overalt)
- Dominant element → farve, tekst, anbefalinger
- Eks: "Naar Vand dominerer, maerker du det som dyb stilhed..."

### Niveau 2: Fase-baseret (cyk-ni-faser, livsfase-detail)
- Brugerens livsfase → detaljeret indhold fra LIVSFASE_DETAIL
- Eks: Fase 7 → overgangsalder-specifikt indhold

### Niveau 3: Tids-baseret (vinduer, rej-udvikling)
- Dato → beregn cyklusser for en vilkaarlig dato
- Eks: "Da du moedte din partner i 1997, var du i Fase 4 (Blomstring)"

### Niveau 4: Relations-baseret (rel-*, vinduer)
- To personers elementer → TCM-interaktion
- Eks: "Hendes Vand naerer hans Trae — din dybde giver hans vaekst rod"

### Niveau 5: Kumulativ (rej-udvikling, rej-journal)
- Check-in data over tid → moenstre
- Eks: "12 check-ins. Dit dominerende humoer er Stille — et moenster begynder at vise sig"

---

## 7. DAGLIG VARIATION

### dayRotation()
```javascript
Calculations.dayRotation(arrayLength)
```
Bruger dagens nummer i aaret modulo array-laengde til at rotere anbefalinger.
Sikrer at forsiden viser nye praksis-forslag hver dag.

### Dynamisk indhold paa forside
- 3 praksis-kort (yoga, healinglyd, naering) roterer dagligt
- Klima-tekst opdateres med hvert organur-skift (hver 2. time)
- Check-in status nulstilles ved midnat

---

## 8. DEAD CODE

### arc-nav.js + arc-nav.css
- Definerer ArcNav objekt med 6 navigation-items
- Renders en buet SVG bottom-navigation
- **ALDRIG AKTIVERET**: Ingen `<div id="arc-nav">` eller `<svg id="arc-svg">` i index.html
- ArcNav.init() kaldes aldrig
- Router._updateArcNav() kalder ArcNav.setActive/toggle som silently failer
- Kan fjernes sikkert — ingen funktionalitet afhaenger af det

---

*Se ogsaa: CLAUDE.md for komplet teknisk reference, DESIGNSYSTEM.md for visuelt system.*
