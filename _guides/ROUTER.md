# Router — Complete Screen Registry (44 screens)

## Navigation Pattern
```javascript
Router.navigate('screen-name');
Router.navigate('screen-name', { direction: 'back' });
Router.navigate('screen-name', { direction: 'fade' });
Router.navigate('screen-name', { direction: 'forward' });
Router.goBack(); // uses parent chain from router.js

// Livsfase detail (special pattern)
window._selectedPhase = 5;
Router.navigate('livsfase-detail');
```

## Screen Registry

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
| din-relation | screens/din-relation.html | 1 | forside | relationer | initDinRelation |
| rel-dybere | screens/rel-dybere.html | 2 | din-relation | relationer | initRelDybere |
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

## Screen Levels
- **Primaer (tabs):** forside, din-relation, tidsrejse, vinduer
- **Sekundaer (drawer):** cyk-ni-faser, min-praksis, min-rejse, rel-tre-gen, rej-baggrund
- **Dybe skaerme:** cir-dit-liv, rel-dybere, tids-dybere, vin-dybere, faser-dybere, din-praksis, rej-dybere, baggrund-dybere
- **Utility:** soeg, indstillinger, om-isabelle
- **Onboarding:** onboarding, onboarding-result

## Drawer Menu
```
Lige Nu → forside | Relationer → din-relation | Tidsrejse → tidsrejse | Vinduer → vinduer
────
De Ni Faser → cyk-ni-faser | Min Praksis → min-praksis | Min Rejse → min-rejse
Tre Generationer → rel-tre-gen | Baggrund → rej-baggrund
────
Indstillinger → indstillinger | Om Isabelle → om-isabelle
```
