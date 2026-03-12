/* ============================================================
   DATA-PORTRAIT.JS — Portr\u00e6ttekster i Isabelles stemme
   Indhold der binder portr\u00e6ttets dimensioner sammen:
   klima \u00d7 element, understr\u00f8m, \u00f8velsesvejledning, refleksioner.
   ============================================================ */

/* ---- KLIMA \u00d7 ELEMENT (25 tekster) ----
   Bro-s\u00e6tninger der farver indholdet med klimatilstanden.
   Bruges af buildBridge() til at forbinde sektioner. */

window.KLIMA_ELEMENT_TEKST = {
  fuld_resonans: {
    'VAND': 'Alle dine lag hviler i vandets stilhed i dag. Det er sj\u00e6ldent \u2014 m\u00e6rk det, uden at g\u00f8re noget ved det.',
    'TR\u00c6': 'Alle dine lag peger fremad med tr\u00e6ets kraft. Der er en retning i dig, der n\u00e6sten ikke kan stoppes.',
    'ILD':  'Alle dine lag br\u00e6nder med ildens varme. Din forbindelse til andre er usandsynlig st\u00e6rk lige nu.',
    'JORD': 'Alle dine lag samler sig i jordens tryghed. Du er fundament i dag \u2014 b\u00e5de for dig selv og dem omkring dig.',
    'METAL': 'Alle dine lag vibrerer med metallets klarhed. Du kan se tydeligt \u2014 hvad der skal beholdes, og hvad der skal slippes.'
  },
  naerende_flow: {
    'VAND': 'I dit n\u00e6rende flow kan vandets stilhed folde sig ud. Str\u00f8mmen b\u00e6rer dig \u2014 du beh\u00f8ver ikke presse.',
    'TR\u00c6': 'I dit n\u00e6rende flow f\u00e5r tr\u00e6ets v\u00e6kst st\u00f8tte nedefra. Det du planl\u00e6gger nu har jord under f\u00f8dderne.',
    'ILD':  'I dit n\u00e6rende flow f\u00e5r ildens gl\u00e6de n\u00e6ring. Der er varme nok til at dele \u2014 uden at br\u00e6nde op.',
    'JORD': 'I dit n\u00e6rende flow er jordens omsorg dybt funderet. Du kan n\u00e6re andre, fordi noget n\u00e6rer dig.',
    'METAL': 'I dit n\u00e6rende flow kan metallets klarhed hvile. Strømmen b\u00e6rer dig \u2014 du beh\u00f8ver ikke sk\u00e6re igennem.'
  },
  indre_storm: {
    'VAND': 'Dine lag tr\u00e6kker i flere retninger lige nu. Vandets stilhed er der stadig \u2014 men den skal findes dybere.',
    'TR\u00c6': 'Dine lag tr\u00e6kker i flere retninger. Tr\u00e6ets vilje m\u00f8der modstand \u2014 det er ikke en fejl, det er groprocessen.',
    'ILD':  'Dine lag tr\u00e6kker i flere retninger. Ildens intensitet m\u00f8der noget, der k\u00f8ler \u2014 brug sp\u00e6ndingen kreativt.',
    'JORD': 'Dine lag tr\u00e6kker i flere retninger. Jordens stabilitet udfordres \u2014 m\u00e5ske er det tid til at flytte fundamentet.',
    'METAL': 'Dine lag tr\u00e6kker i flere retninger. Metallets klarhed m\u00f8der uklarhed \u2014 lad skelneevnen v\u00e6re din guide.'
  },
  kreativ_spaending: {
    'VAND': 'N\u00e6ring og modstand lever side om side i dig. Vandets dybde kender begge dele \u2014 lyt til det, der bobler op.',
    'TR\u00c6': 'N\u00e6ring og modstand lever side om side. Tr\u00e6ets kraft vokser faktisk st\u00e6rkere, n\u00e5r der er modvind.',
    'ILD':  'N\u00e6ring og modstand lever side om side. Ildens varme kan smeltes og formes i det sp\u00e6ndingsfelt.',
    'JORD': 'N\u00e6ring og modstand lever side om side. Jordens visdom er at holde begge dele \u2014 uden at v\u00e6lge.',
    'METAL': 'N\u00e6ring og modstand lever side om side. Metallets gave er at se klart, selv n\u00e5r str\u00f8mmene krydser.'
  },
  stille_balance: {
    'VAND': 'Intet dominerer i dag. Vandets stilhed er en del af en st\u00f8rre ro, hvor alt f\u00e5r lov at v\u00e6re.',
    'TR\u00c6': 'Intet dominerer i dag. Tr\u00e6ets retning er blid \u2014 ikke presset, bare til stede som en mulighed.',
    'ILD':  'Intet dominerer i dag. Ildens varme ulmer stille \u2014 den er der, n\u00e5r du har brug for den.',
    'JORD': 'Intet dominerer i dag. Jordens tryghed er en baggrund, som alt det andet hviler p\u00e5.',
    'METAL': 'Intet dominerer i dag. Metallets klarhed er der som et stille lys \u2014 ikke sk\u00e6rende, bare til stede.'
  }
};

/* ---- UNDERSTR\u00d8M (20 tekster) ----
   Kort karakteristik af dominant + sekund\u00e6r element.
   N\u00f8gle: 'DOMINANT_SEKUND\u00c6R' */

window.UNDERSTROEM_TEKST = {
  // VAND dominant
  'VAND_TR\u00c6':  'stilhed med en spire af retning \u2014 noget i dig vil op, men fra et dybt sted',
  'VAND_ILD':  'stilhed med en glød nedenunder \u2014 din dybde rummer en varme, der kalder p\u00e5 forbindelse',
  'VAND_JORD': 'stilhed med et fundament \u2014 din dybde er tryg, rodf\u00e6stet, b\u00e6rende',
  'VAND_METAL':'stilhed med en sk\u00e6rpe \u2014 du lytter dybt, men ser ogs\u00e5 skarpt',

  // TR\u00c6 dominant
  'TR\u00c6_VAND':  'v\u00e6kst fra et stille sted \u2014 din kraft henter n\u00e6ring fra dybden',
  'TR\u00c6_ILD':   'v\u00e6kst med ild i retningen \u2014 du presser fremad med b\u00e5de vilje og varme',
  'TR\u00c6_JORD':  'v\u00e6kst med r\u00f8dder \u2014 din fremadrettede kraft er forankret i noget trygt',
  'TR\u00c6_METAL': 'v\u00e6kst med klarhed \u2014 du ved pr\u00e6cis hvad der skal sk\u00e6res v\u00e6k for at vokse',

  // ILD dominant
  'ILD_VAND':  'varme med en stille str\u00f8m under \u2014 din intensitet har dybde, ikke bare overflade',
  'ILD_TR\u00c6':   'varme med retning \u2014 din gl\u00e6de har et m\u00e5l, og den vil derhen',
  'ILD_JORD':  'varme med fundament \u2014 din forbindelseskraft er tryg, ikke flygtig',
  'ILD_METAL': 'varme med sk\u00e6rpe \u2014 din intensitet er fokuseret, n\u00e6sten kirurgisk pr\u00e6cis',

  // JORD dominant
  'JORD_VAND': 'tryghed med en stille dybde \u2014 dit fundament rummer mere, end overfladen viser',
  'JORD_TR\u00c6':  'tryghed med en v\u00e6kstkraft \u2014 du n\u00e6rer, men du n\u00e6rer ogs\u00e5 noget nyt i dig selv',
  'JORD_ILD':  'tryghed med en indre varme \u2014 din omsorg er livlig, ikke kun stabil',
  'JORD_METAL':'tryghed med klarhed \u2014 du holder fast, men du ved ogs\u00e5 hvad der skal gives slip p\u00e5',

  // METAL dominant
  'METAL_VAND':'klarhed der hviler i dybde \u2014 du ser skarpt, men lytter endnu dybere',
  'METAL_TR\u00c6': 'klarhed med en v\u00e6kstkraft \u2014 du skelner skarpt, og det du beholder f\u00e5r retning',
  'METAL_ILD': 'klarhed der br\u00e6nder med retning \u2014 du ved pr\u00e6cis hvad der skal slippes',
  'METAL_JORD':'klarhed med fundament \u2014 din skelneevne er rodf\u00e6stet, ikke k\u00f8lig'
};

/* ---- KLIMA \u2192 \u00d8VELSESTYPE (5 tekster) ----
   Hvilken type \u00f8velse passer til brugerens klima. */

window.KLIMA_OEVELSE = {
  fuld_resonans: {
    type: 'meditativ, fordybende',
    raad: 'Alt i dig peger samme vej. V\u00e6lg \u00f8velser der fordyber det \u2014 langsom yin, stille meditation, dyb vejrtr\u00e6kning.'
  },
  naerende_flow: {
    type: 'bl\u00f8d, langsom, f\u00f8lgende',
    raad: 'Dit flow b\u00e6rer dig. V\u00e6lg \u00f8velser der f\u00f8lger str\u00f8mmen \u2014 bl\u00f8de bevægelser, meridianstrygninger, rolig yoga.'
  },
  indre_storm: {
    type: 'forankrende, rodf\u00e6stende',
    raad: 'Dine lag tr\u00e6kker i flere retninger. V\u00e6lg \u00f8velser der forankrer \u2014 st\u00e5ende positioner, jordingsmeditation, EFT.'
  },
  kreativ_spaending: {
    type: 'dynamisk, udtrykkende',
    raad: 'Sp\u00e6ndingsfeltet rummer energi. V\u00e6lg \u00f8velser der kanaliserer den \u2014 aktiv yoga, kreativ bevægelse, fri dans.'
  },
  stille_balance: {
    type: 'hvad der kalder',
    raad: 'Alt er stille til stede. Lyt efter hvad din krop beder om i dag \u2014 der er ingen st\u00e6rk retning, kun en \u00e5bning.'
  }
};

/* ---- KLIMA \u00d7 ELEMENT \u2192 REFLEKSION (25 tekster) ----
   Klimafarvede refleksionssp\u00f8rgsm\u00e5l. */

window.KLIMA_REFLEKSION = {
  fuld_resonans: {
    'VAND': 'N\u00e5r alt i dig hviler i stilhed \u2014 hvad h\u00f8rer du da, som du ellers overser?',
    'TR\u00c6': 'N\u00e5r alle dine lag peger fremad \u2014 hvad er det, du virkelig vil hen mod?',
    'ILD':  'N\u00e5r hele dig br\u00e6nder med forbindelse \u2014 hvem er det, du allerhelst vil n\u00e5?',
    'JORD': 'N\u00e5r alt i dig samler sig i tryghed \u2014 hvad er det fundament, du st\u00e5r p\u00e5?',
    'METAL': 'N\u00e5r alt i dig vibrerer med klarhed \u2014 hvad ser du nu, som du ikke s\u00e5 f\u00f8r?'
  },
  naerende_flow: {
    'VAND': 'Str\u00f8mmen b\u00e6rer din stilhed. Hvad er det for en ro, der vokser i dig lige nu?',
    'TR\u00c6': 'Str\u00f8mmen st\u00f8tter din v\u00e6kst. Hvad f\u00e5r n\u00e6ring fra det, du g\u00f8r nu?',
    'ILD':  'Str\u00f8mmen n\u00e6rer din varme. Hvad er det for en forbindelse, du gerne vil give plads?',
    'JORD': 'Str\u00f8mmen styrker dit fundament. Hvad er det, du n\u00e6rer, som ogs\u00e5 n\u00e6rer dig tilbage?',
    'METAL': 'Str\u00f8mmen b\u00e6rer din klarhed. Hvad er det, du kan slippe nu, uden at det g\u00f8r ondt?'
  },
  indre_storm: {
    'VAND': 'Dine lag tr\u00e6kker i flere retninger. Hvor i din krop m\u00e6rker du vandets stille modstand?',
    'TR\u00c6': 'Dine lag tr\u00e6kker i flere retninger. Hvad er det i dig, der insisterer p\u00e5 at vokse trods modvinden?',
    'ILD':  'Dine lag tr\u00e6kker i flere retninger. Hvorn\u00e5r br\u00e6nder du for noget, selvom verden k\u00f8ler?',
    'JORD': 'Dine lag tr\u00e6kker i flere retninger. Hvad holder dig forankret, n\u00e5r fundamentet ryster?',
    'METAL': 'Dine lag tr\u00e6kker i flere retninger. Hvad kan du skelne klart, selv midt i bevægelsen?'
  },
  kreativ_spaending: {
    'VAND': 'N\u00e6ring og modstand m\u00f8des i din stilhed. Hvad er det for en sp\u00e6nding, du m\u00e6rker lige under overfladen?',
    'TR\u00c6': 'N\u00e6ring og modstand m\u00f8des i din v\u00e6kst. Hvad ville du turde, hvis modstanden var en invitation?',
    'ILD':  'N\u00e6ring og modstand m\u00f8des i din varme. Hvad sker der, n\u00e5r du lader sp\u00e6ndingen v\u00e6re der?',
    'JORD': 'N\u00e6ring og modstand m\u00f8des i din tryghed. Hvad er det, der b\u00e5de holder fast og vil forny?',
    'METAL': 'N\u00e6ring og modstand m\u00f8des i din klarhed. Hvad ser du tydeligere, netop fordi der er friktion?'
  },
  stille_balance: {
    'VAND': 'Alt er stille til stede. Hvis du lytter dybt ind i vandets ro \u2014 hvad er det f\u00f8rste, du h\u00f8rer?',
    'TR\u00c6': 'Alt er stille til stede. M\u00e5ske er der en retning, der endnu ikke har f\u00e5et ord?',
    'ILD':  'Alt er stille til stede. Hvad er det for en varme, der ulmer, uden at du n\u00f8dvendigvis kan forklare den?',
    'JORD': 'Alt er stille til stede. Hvad b\u00e6rer dig i dag, helt uden at du m\u00e6rker det?',
    'METAL': 'Alt er stille til stede. Hvad er det, du allerede ved, men endnu ikke har sat ord p\u00e5?'
  }
};

/* ---- NAVIGATIONS-BRO-TEKSTER (15 tekster) ----
   Korte s\u00e6tninger der binder sk\u00e6rme sammen.
   Bruges n\u00e5r bruger navigerer fra \u00e9t sted til et andet.
   N\u00f8gle: topic (sektion brugeren kom fra). */

window.NAV_BRO = {
  handling: {
    prefix: 'Ud fra dit {climate} og din {element}-energi',
    tekst: 'Her er \u00f8velser der m\u00f8der dig, hvor du er lige nu.'
  },
  refleksion: {
    prefix: 'Din refleksion lever i sp\u00e6ndingsfeltet mellem {element} og {secondary}',
    tekst: 'Lad sp\u00f8rgsm\u00e5let v\u00e6re \u00e5bent \u2014 der er ingen rigtige svar.'
  },
  aarstid: {
    prefix: 'Din {livsAarstidRelation} mellem livsfase og \u00e5rstid',
    tekst: 'Former den energi, du m\u00e6rker i disse m\u00e5neder.'
  },
  organur: {
    prefix: 'Dit organur lige nu \u2014 i kontekst af dit {climate}',
    tekst: 'Kroppen f\u00f8lger sin egen rytme, parallelt med dine cyklusser.'
  },
  tema: {
    prefix: 'Dette tema set gennem din {element}-energi',
    tekst: 'Med {secondary} som understr\u00f8m f\u00e5r det en bestemt farve.'
  },
  relation: {
    prefix: 'Jeres samspil lige nu \u2014 i dit {climate}',
    tekst: 'S\u00e5dan m\u00f8des jeres elementer i dette \u00f8jeblik.'
  },
  tidsrejse: {
    prefix: 'En rejse fra dit nuv\u00e6rende {element}-billede',
    tekst: 'Til et \u00f8jeblik, hvor dine cyklusser stod anderledes.'
  },
  vinduer: {
    prefix: 'Med dit {climate} som baggrund',
    tekst: 'Er her de vinduer, hvor dine cyklusser m\u00f8des.'
  },
  daglig: {
    prefix: 'Din daglige l\u00e6sning \u2014 {element} med {secondary} som understr\u00f8m',
    tekst: 'Disse ord er valgt til pr\u00e6cis din kombination i dag.'
  },
  checkin: {
    prefix: 'Du m\u00e6rkede {mood}',
    tekst: 'Her er hvad dit portr\u00e6t foresl\u00e5r lige nu.'
  },
  kost: {
    prefix: 'N\u00e6ring til din {element}-krop i {climate}',
    tekst: 'Mad der st\u00f8tter den energi, du har brug for.'
  },
  foelelser: {
    prefix: 'F\u00f8lelserne i dit {element} \u2014 farvet af {climate}',
    tekst: 'Hvad der sker i dig, n\u00e5r elementerne interagerer.'
  },
  praksis_generel: {
    prefix: 'Din praksis lige nu \u2014 i dit {climate}',
    tekst: 'Metoderne her kan tilpasses dit \u00f8jebliks portr\u00e6t.'
  },
  rejse_generel: {
    prefix: 'Din rejse set fra dit {element}-billede',
    tekst: 'Alle de skridt, der bragte dig hertil.'
  },
  faser_generel: {
    prefix: 'De ni faser \u2014 du st\u00e5r i fase {phase}',
    tekst: 'Med {element} som grundtone og {secondary} som understr\u00f8m.'
  }
};

/* ---- LIVSFASE \u00d7 \u00c5RSTID — udvidede tekster (5 relationstyper) ----
   Erstatter de korte 1-s\u00e6tnings templates i app.js med
   dybere 2-3 s\u00e6tningers fortolkninger. */

window.LIVS_AARSTID_DYBERE = {
  resonans: 'Din \u00e5rstid og din livsfase deler det samme element. Det er som at st\u00e5 i en str\u00f8m, der forst\u00e6rker sig selv \u2014 du m\u00e6rker det tydeligere, dybere, mere gennemtr\u00e6ngende. Brug det til at lytte ind, ikke til at g\u00f8re mere.',
  naeres: 'Din \u00e5rstid n\u00e6rer din livsfases element stille og direkte. Det er som at f\u00e5 medvind \u2014 ikke dramatisk, men b\u00e6rende. Du beh\u00f8ver ikke k\u00e6mpe for det, du er i gang med.',
  naerer: 'Din livsfases energi giver videre til \u00e5rstidens bevægelse. Du er den, der n\u00e6rer str\u00f8mmen omkring dig \u2014 det kan f\u00f8les som at give, men det er ogs\u00e5 en styrke.',
  kontrolleres: 'Din \u00e5rstid tr\u00e6kker i en anden retning end din livsfase. Der er en sp\u00e6nding \u2014 ikke farlig, men m\u00e6rkbar. M\u00e5ske f\u00f8ler du dig trukket mellem to impulser. Det er balancen, der arbejder.',
  kontrollerer: 'Din livsfases energi holder \u00e5rstidens bevægelse i skak. Du har en naturlig styrke til at navigere den str\u00f8m, der er omkring dig. Brug den styrke med bl\u00f8dhed \u2014 kontrol er ogs\u00e5 omsorg.'
};
