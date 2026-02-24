# KAPITEL-LOG — De 9 Livsfasers Energi (de-9-livsfaser)

*Komplet inventar over alle 44 screens i appen.*
*Opdateret: 22. februar 2026*

---

## OVERSIGT

| Niveau | Antal | Beskrivelse |
|--------|-------|-------------|
| -1 | 2 | Onboarding (foerste besog) |
| 0 | 1 | Forside (home) |
| 1 | 5 | Sektionsoversigter |
| 2 — Cirkel | 6 | Cirkel-detaljer fra forsiden |
| 2 — Cyklusser | 6 | Cyklusser undersider |
| 2 — Relationer | 5 | Relationer undersider |
| 2 — Praksis | 8 | Praksis undersider |
| 2 — Rejse | 6 | Rejse undersider |
| 2 — Vinduer | 2 | Vinduer undersider |
| 2 — Utility | 3 | Soeg, Indstillinger, Om Isabelle |
| **Total** | **44** | |

---

## NIVEAU -1: ONBOARDING

### 1. onboarding.html
**Route:** `onboarding` | **Init:** `initOnboarding()`
**Formaal:** Foerstegangsbesog — indtast foedselsdato
**Indhold:**
- Velkomsttekst
- Foedselsdato input (`#birth-input`)
- "Find din livsfase" knap (`#birth-btn`)
- Gemmer brugerdata via `Storage.saveUser()`
- Navigerer til onboarding-result

### 2. onboarding-result.html
**Route:** `onboarding-result` | **Init:** `initOnboardingResult()`
**Formaal:** Viser resultat efter foedselsdato — din cyklus-profil
**Indhold:**
- Kanji-tegn for dominant element (`#result-kanji`)
- Indre klima label + tekst (`#result-climate`, `#result-main-text`)
- Element-specifik undertekst (`#result-sub-text`)
- Profil-fold med 5 cyklus-raekker (`#result-profil-rows`)
- Foelelses-tekst (`#result-feelings-label`, `#result-feelings-text`)
- "Fortsaet" knap (`#continue-btn`) → forside

---

## NIVEAU 0: FORSIDE

### 3. forside.html
**Route:** `forside` | **Init:** `initForside()`
**Formaal:** Hovedskaerm — viser alle 5 cyklusser + navigation
**Indhold:**
- Dato-header (`#forside-date`)
- Koncentriske cirkler SVG (5 klikbare ellipser → cir-* screens)
- Klima-kort med dynamisk tekst (`#forside-climate-text`, `#forside-climate-sub`)
- Check-in sektion (5 mood-knapper: vand/trae/ild/jord/metal) + status (`#forside-checkin-status`)
- 3 praksis-kort (.praksis-card): Yin Yoga, Healinglyd, Naering (dynamisk baseret paa dominant element)
- Vinduer-kort → vinduer
- 4 hovednavigationskort → cyklusser, relationer, praksis, rejse

---

## NIVEAU 1: SEKTIONSOVERSIGTER

### 4. cyklusser.html
**Route:** `cyklusser` | **Parent:** forside | **Tone:** cyklusser | **Init:** `initCyklusser()`
**Indhold:**
- Element-analyse bars (`#cyk-element-analysis`) — 5 horisontale bars
- Analyse-tekst (`#cyk-ea-text`)
- Feeling-box (`#cyk-feeling-text`)
- Featured card (`#cyk-featured-text`)
- Healinglyd quick-action (`#cyk-healing-title`, `#cyk-healing-desc`)
- Navigationskort → cyk-cic, cyk-ni-faser, cyk-fire-uger, cyk-overgange, cyk-kontrol

### 5. relationer.html
**Route:** `relationer` | **Parent:** forside | **Tone:** relationer | **Init:** `initRelationer()`
**Indhold:**
- Bruger-profil (`#rel-profil-dig`)
- Samtale-aabner (`#rel-samtale-title`, `#rel-samtale-desc`)
- Navigationskort → rel-lige-nu, rel-to-rytmer, rel-tre-gen, rel-jeres-energi, rel-epigenetik

### 6. praksis.html
**Route:** `praksis` | **Parent:** forside | **Tone:** praksis | **Init:** `initPraksis()`
**Indhold:**
- Insight-tekst (`#pra-insight-text`)
- Feeling-box (`#pra-feeling-text`)
- Featured card (`#pra-featured-label`, `#pra-featured-text`)
- Quick-action yoga (`#pra-quick-title`, `#pra-quick-desc`)
- Breath-box med aandedraetsanimation (`#pra-breath-text`)
- Navigationskort → pra-yin-yoga, pra-eft, pra-foelelser, pra-mindfulness, pra-refleksion, pra-kost, pra-healing, pra-inspiration

### 7. rejse.html
**Route:** `rejse` | **Parent:** forside | **Tone:** rejse | **Init:** `initRejse()`
**Indhold:**
- Milestone-box med fase-progress (`#rej-milestone-phase`, `#rej-milestone-years`, `#rej-milestone-fill`, `#rej-milestone-marker`, `#rej-milestone-text`)
- Navigationskort → rej-udvikling, rej-journal, rej-favoritter, rej-opdagelser, rej-alle-faser, rej-baggrund

### 8. vinduer.html
**Route:** `vinduer` | **Parent:** forside | **Tone:** vinduer | **Init:** `initVinduer()`
**Indhold:**
- Dato-chips (4 stk: "Da vi moedtes", "Hendes 14-aarsdag", "Om 5 aar", "Naeste jul")
- Person-pills ("Dig", "Clara", "Thomas")
- Dato-input (`#vinduer-date`)
- "Se cyklusser" knap (`#vinduer-btn`)
- Resultat-omraade (`#vinduer-result`) — viser beregnet cyklus-data
- Navigationskort → vin-tidslinje, vin-oejeblikke

---

## NIVEAU 2: CIRKEL-DETALJER (fra forsiden)

### 9-14. cir-dit-liv / cir-livsfase / cir-aarstid / cir-maaned / cir-ugedag / cir-organur
**Routes:** `cir-dit-liv` ... `cir-organur` | **Parent:** forside | **Init:** Stubs (statisk indhold)
**Formaal:** Detaljesider for hver ring i de koncentriske cirkler paa forsiden
**Indhold:** Statisk HTML fra preview — ingen dynamisk initialisering

---

## NIVEAU 2: CYKLUSSER UNDERSIDER

### 15. cyk-cic.html
**Route:** `cyk-cic` | **Parent:** cyklusser | **Tone:** cyklusser | **Init:** `initCykCic()`
**Formaal:** Cyklusser i Cyklusser — analyse af alle 10 cyklus-par
**Indhold:**
- Klima-label + tekst (`#cic-climate-label`, `#cic-climate-text`)
- Par-liste (`#cic-pair-list`) — 10 dynamisk genererede kort
- Opsummering (`#cic-summary`)

### 16. cyk-ni-faser.html
**Route:** `cyk-ni-faser` | **Parent:** cyklusser | **Tone:** cyklusser | **Init:** `initCykNiFaser()`
**Formaal:** Oversigt over alle 9 livsfaser
**Indhold:**
- Nuvaerende fase-indikator (`#ni-faser-current`)
- 9 fase-kort (.fase-card med data-fase) — aktiv markering paa nuvaerende
- Klik → `navigateToFaseDetail(phaseNum)`

### 17. livsfase-detail.html
**Route:** `livsfase-detail` | **Parent:** cyk-ni-faser | **Tone:** cyklusser | **Init:** `initLivsfaseDetail()`
**Formaal:** Detaljeret visning af en enkelt livsfase
**Indhold:**
- Header: eyebrow, titel, undertitel, intro (`#fasedetail-eyebrow`, `#fasedetail-title`, `#fasedetail-sub`, `#fasedetail-intro`)
- Foelelses-boks (`#fasedetail-feeling-label`, `#fasedetail-feeling-text`)
- Featured kort (`#fasedetail-featured-label`, `#fasedetail-featured-text`, `#fasedetail-featured-sub`)
- Krop & Sind sektioner (`#fasedetail-krop-label/text`, `#fasedetail-sind-label/text`)
- 3 praksis-kort (`#fasedetail-praksis`): OEvelse, Naering, Healinglyd
- Refleksioner (`#fasedetail-refleksioner`)
- Psykologiske opgaver (`#fasedetail-insight-label/text`)
- Quick action (`#fasedetail-quick-title/desc`)
- Prev/Next navigation (`#fasedetail-nav`)
- "Du er her" markering paa brugerens aktuelle fase

### 18. cyk-fire-uger.html
**Route:** `cyk-fire-uger` | **Parent:** cyklusser | **Tone:** cyklusser | **Init:** `initCykFireUger()`
**Formaal:** De fire uger i maanedscyklussen
**Indhold:**
- Titel, nuvaerende uge/dag (`#fire-uger-title`, `#fire-uger-current`)
- Beskrivelse (`#fire-uger-desc`)
- Viser menstruationscyklus ELLER maanecyklus baseret paa brugerindstillinger

### 19. cyk-overgange.html
**Route:** `cyk-overgange` | **Parent:** cyklusser | **Tone:** cyklusser | **Init:** `initCykOvergange()`
**Formaal:** Kroppens store overgange
**Indhold:**
- Nuvaerende fase-indikator (`#overgange-current`)
- Statisk indhold om livets overgange

### 20. cyk-kontrol.html
**Route:** `cyk-kontrol` | **Parent:** cyklusser | **Tone:** cyklusser | **Init:** `initCykKontrol()`
**Formaal:** TCM Kontrolcyklussen (5 elementer)
**Indhold:**
- Dominant element (`#kontrol-dominant`)
- 4 relationstyper (`#kontrol-naerer`, `#kontrol-kontrollerer`, `#kontrol-naeret-af`, `#kontrol-kontrolleret-af`)
- Data fra KONTROL_TEKST

---

## NIVEAU 2: RELATIONER UNDERSIDER

### 21. rel-lige-nu.html
**Route:** `rel-lige-nu` | **Parent:** relationer | **Tone:** relationer | **Init:** `initRelLigeNu()`
**Formaal:** Relationer lige nu — overblik over aktive relationer
**Indhold:**
- Featured kort (`#rel-featured-label`, `#rel-featured-text`)

### 22. rel-to-rytmer.html
**Route:** `rel-to-rytmer` | **Parent:** relationer | **Tone:** relationer | **Init:** `initRelToRytmer()`
**Formaal:** To Rytmer — hendes 7-aars vs hans 8-aars cyklus
**Indhold:**
- Featured kort (`#rytmer-featured-label`)

### 23. rel-tre-gen.html
**Route:** `rel-tre-gen` | **Parent:** relationer | **Tone:** relationer | **Init:** `initRelTreGen()`
**Formaal:** Tre Generationer — mor/dig/barn
**Indhold:**
- Featured kort (`#tregen-featured-label`)

### 24. rel-jeres-energi.html
**Route:** `rel-jeres-energi` | **Parent:** relationer | **Tone:** relationer | **Init:** `initRelJeresEnergi()`
**Formaal:** Jeres Energi — dato-baseret sammenligning
**Indhold:**
- Dato-chips (`#energi-chips`): Clara 14 aar, I moedtes, I dag, Om 5 aar
- Person-pills (`#energi-pills`): Dig, Martin, Inge
- Dato-input (`#energi-date`)
- "Se jeres energi" knap (`#energi-btn`)
- Resultat-omraade (`#energi-result`) — viser begge personers faser + TCM-interaktion

### 25. rel-epigenetik.html
**Route:** `rel-epigenetik` | **Parent:** relationer | **Tone:** relationer | **Init:** `initRelEpigenetik()`
**Formaal:** Epigenetik & Arv
**Indhold:**
- Featured kort (`#epigenetik-featured-label`)

---

## NIVEAU 2: PRAKSIS UNDERSIDER

### 26. pra-yin-yoga.html
**Route:** `pra-yin-yoga` | **Parent:** praksis | **Tone:** praksis | **Init:** `initPraYinYoga()`
**Indhold:**
- Featured kort (`#yoga-featured-label`, `#yoga-featured-text`)
- Element-label (`#yoga-element-label`)
- Pose-kort (fra YIN_YOGA_FULL data)

### 27. pra-eft.html
**Route:** `pra-eft` | **Parent:** praksis | **Tone:** praksis | **Init:** `initPraEft()`
**Indhold:**
- Featured kort (`#eft-featured-label`)
- EFT tapping-punkter

### 28. pra-foelelser.html
**Route:** `pra-foelelser` | **Parent:** praksis | **Tone:** praksis | **Init:** `initPraFoelelser()`
**Indhold:**
- Featured kort (`#foelelser-featured-label`, `#foelelser-featured-desc`)
- Folelelseshjul baseret paa TCM (5 elementer x foelelser)

### 29. pra-mindfulness.html
**Route:** `pra-mindfulness` | **Parent:** praksis | **Tone:** praksis | **Init:** `initPraMindfulness()`
**Indhold:**
- Featured kort (`#mindfulness-featured-label`, `#mindfulness-featured-text`)
- Breath-box med aandedraetsanimation (4s ind, 4s hold, 6s ud)

### 30. pra-refleksion.html
**Route:** `pra-refleksion` | **Parent:** praksis | **Tone:** praksis | **Init:** `initPraRefleksion()`
**Indhold:**
- Featured kort (`#refleksion-featured-label`)
- Fase-specifikke spoergsmaal (`#refleksion-questions`) — fra REFLEKSION_DATA
- Expanderbare kort med textarea + gem-knap
- Gemmer til livsfaser_reflections

### 31. pra-kost.html
**Route:** `pra-kost` | **Parent:** praksis | **Tone:** praksis | **Init:** `initPraKost()`
**Indhold:**
- Featured kort (`#kost-featured-label`)
- Mad-kort (`#kost-food-list`) — fra INSIGHT_FOOD
- Healinglyd (`#kost-healing-label`, `#kost-healing-desc`)

### 32. pra-healing.html
**Route:** `pra-healing` | **Parent:** praksis | **Tone:** praksis | **Init:** `initPraHealing()`
**Indhold:**
- Featured kort (`#healing-featured-label`, `#healing-featured-text`)
- Healinglyde for alle 5 elementer

### 33. pra-inspiration.html
**Route:** `pra-inspiration` | **Parent:** praksis | **Tone:** praksis | **Init:** `initPraInspiration()`
**Indhold:**
- Featured kort (`#inspiration-featured-label`)
- Hvad har hjulpet andre (social proof)

---

## NIVEAU 2: REJSE UNDERSIDER

### 34. rej-udvikling.html
**Route:** `rej-udvikling` | **Parent:** rejse | **Tone:** rejse | **Init:** `initRejUdvikling()`
**Formaal:** Min Udvikling — tracking og check-in
**Indhold:**
- Featured kort (`#udvikling-featured-label`)
- Period-filter chips (7d/30d/90d/Alle)
- Stat-bokse (`#udvikling-stats`): Check-ins, Refleksioner, Elementer, Streak
- Check-in sektion (`#udvikling-checkin`): 5 mood-knapper + note-textarea + gem-knap
- Check-in status (`#udvikling-checkin-status`)
- Tidslinje (`#udvikling-timeline`): Kronologisk liste af check-ins

### 35. rej-journal.html
**Route:** `rej-journal` | **Parent:** rejse | **Tone:** rejse | **Init:** `initRejJournal()`
**Formaal:** Min Journal — refleksionsskrivning
**Indhold:**
- Featured kort (`#journal-featured-label`)
- Filter-chips (Seneste/Denne maaned/Alle)
- Textarea + "Gem refleksion" knap
- Journal-entries (`#journal-entries`)

### 36. rej-favoritter.html
**Route:** `rej-favoritter` | **Parent:** rejse | **Tone:** rejse | **Init:** `initRejFavoritter()`
**Formaal:** Mine Favoritter
**Indhold:**
- Filter-tabs (OEvelser/Kost/Temaer/Faser)
- Favorit-liste (`#favoritter-list`) — gemte screens

### 37. rej-opdagelser.html
**Route:** `rej-opdagelser` | **Parent:** rejse | **Tone:** rejse | **Init:** `initRejOpdagelser()`
**Formaal:** Mine Opdagelser
**Indhold:**
- Featured kort (`#opdagelser-featured-label`)
- Filter-tabs (Alle/Cyklusser/Relationer/Vinduer)
- Opdagelses-kort med data-opd-cat attribut

### 38. rej-alle-faser.html
**Route:** `rej-alle-faser` | **Parent:** rejse | **Tone:** rejse | **Init:** `initRejAlleFaser()`
**Formaal:** Alle 9 faser (kompakt liste)
**Indhold:**
- Nuvaerende fase (`#alle-faser-current`)
- 9 fase-kort (.fase-card) → navigateToFaseDetail()

### 39. rej-baggrund.html
**Route:** `rej-baggrund` | **Parent:** rejse | **Tone:** rejse | **Init:** `initRejBaggrund()`
**Formaal:** Baggrundsviden — TCM, epigenetik, 5 elementer
**Indhold:** Primært statisk indhold

---

## NIVEAU 2: VINDUER UNDERSIDER

### 40. vin-tidslinje.html
**Route:** `vin-tidslinje` | **Parent:** vinduer | **Tone:** vinduer | **Init:** `initVinTidslinje()`
**Formaal:** Mit Livs Tidslinje — 9 faser i visuel bue
**Indhold:**
- Nuvaerende fase (`#tidslinje-current`)
- Tidslinje-faser (.timeline-phase med data-fase) — aktiv markering

### 41. vin-oejeblikke.html
**Route:** `vin-oejeblikke` | **Parent:** vinduer | **Tone:** vinduer | **Init:** `initVinOejeblikke()`
**Formaal:** Vigtige OEjeblikke
**Indhold:**
- Fase-info (`#oejeblikke-phase`)
- OEjeblikke-kort med dato-attributter → showMomentCycles()

---

## NIVEAU 2: UTILITY

### 42. soeg.html
**Route:** `soeg` | **Parent:** forside | **Init:** `initSoeg()`
**Formaal:** Soeg paa tvaers af appen
**Indhold:**
- Soege-input (`#soeg-input`)
- Resultat-liste (`#soeg-results`, `#soeg-results-list`)
- Soeger i screen-navne og tone-kategorier

### 43. indstillinger.html
**Route:** `indstillinger` | **Parent:** forside | **Init:** `initIndstillinger()`
**Formaal:** Alle app-indstillinger
**Indhold:**
- Profil: Navn (`#ind-name-input`), foedselsdato (`#ind-birth-input`, `#ind-birthdate`), fase-info (`#ind-phase-info`)
- 12 toggles (menstruation, moon, morning, evening, cycle-shift, season, weekly, anon, collective, share, dark, system)
- Cykluslaengde (`#ind-cycle-length`)
- Notifikationstider (`#ind-morning-time`, `#ind-evening-time`)
- Relationer-taeller (`#ind-relations-count`)
- Export (`#ind-export`) / Import (`#ind-import`)
- Vis onboarding (`#ind-show-onboarding`)
- Nulstil data (`#ind-reset`)

### 44. om-isabelle.html
**Route:** `om-isabelle` | **Parent:** forside | **Init:** `initOmIsabelle()`
**Formaal:** Om forfatteren Isabelle Evita Soendergaard
**Indhold:** Primært statisk indhold

---

## BILLEDER I BRUG

| Billede | Brugt paa |
|---------|-----------|
| 9-cirkler.png | forside |
| lotus-adskiller.png | Alle screens (section-closer) |
| krydsfelt-final.png | forside, onboarding |
| relationer_blad_liberation_HQ.png | relationer |
| din-krop.jpg | cir-dit-liv |
| min-rejse-ikigai.png | rejse |
| vinduer-tid-lilla.png | vinduer |
| relationer-forside.png | relationer |
| cyklusser_i_cyklusser_v4.svg | cyk-cic |
| de_ni_livsfaser.png | cyk-ni-faser |
| de-fire-uger.png | cyk-fire-uger |
| kontrolcyklus.png | cyk-kontrol |
| to-rytmer-foto.png | rel-to-rytmer |
| epigenetik-tidslinje.svg | rel-epigenetik |
| eft_front.png | pra-eft |
| foelelsernes-kort.png | pra-foelelser |
| refleksioner_figur.svg | pra-refleksion |
| yinyang_highres.png | pra-yin-yoga |
| favoritter_blad_HQ.png | rej-favoritter |
| opdagelser_cirkler_HQ.png | rej-opdagelser |
| isabelle-portrait.png | om-isabelle |
| min-journal-bog.jpeg | rej-journal |
| min-udvikling-graf.png | rej-udvikling |
| nyre_qi_generel.png | cir-organur |
| IMG_1475.png | pra-mindfulness |

---

*Brug dette dokument som reference naar du arbejder med specifikke screens.*
*Se ogsaa: DESIGNSYSTEM.md for komponent-katalog, CLAUDE.md for arkitektur-overblik.*
