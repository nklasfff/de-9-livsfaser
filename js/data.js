/* ============================================================
   DATA — All content data for De 9 Livsfaser
   Ported from livsfaser-app/js/app.js
   ============================================================ */

// ---- De Ni Livsfaser: Detaljedata per fase ----

const LIVSFASE_DETAIL = {
  1: {
    introText: 'Den sp\u00e6de begyndelse. Barnet lever i ren sansning, uden filtre, uden gr\u00e6nser. Alt er flydende som vand \u2014 tillid, ber\u00f8ring, lyd. Her l\u00e6gges grundstenen for alt det, der kommer.',
    organPar: 'Nyrer og Bl\u00e6re', smag: 'Salt', aarstid: 'Vinter',
    folelser: { balance: 'Tillid, tryghed, ro', ubalance: 'Frygt, utryghed, tilbagetr\u00e6kning' },
    vediskKobling: 'Brahmacharya \u2014 den tidlige l\u00e6ringsperiode',
    livstemaer: ['Grundl\u00e6ggende tillid', 'Sanselig udforskning', 'Tilknytning'],
    psykOpgaver: ['Opbygge basal tillid', 'Kropslig sikkerhed', 'Emotionel tilknytning'],
    kropTekst: 'Kroppen i denne fase er ren v\u00e6kst og modtagelighed. Nyrerne \u2014 livskraftens rod i kinesisk medicin \u2014 etablerer sig. Knoglerne dannes, t\u00e6nderne bryder frem. Alt er bl\u00f8dt og formbart. Barnets krop er som vand: den tilpasser sig, optager, flyder.',
    sindTekst: 'Sindet er \u00e5bent som en stille s\u00f8. Barnet lever i nuet uden fortid eller fremtid. Fantasien er virkelig, dr\u00f8mmene er levende. Emotionelt handler alt om sikkerhed \u2014 at blive set, holdt, tr\u00f8stet. Her grundl\u00e6gges evnen til at m\u00e6rke sig selv.',
    oevelse: { title: 'Butterfly (Yin Yoga)', desc: '\u00c5bner hofterne og stimulerer nyremeridianen. Velegnet til at finde indre ro.' },
    kost: { title: 'Sort sesam og valn\u00f8dder', desc: 'N\u00e6rer nyreessensen og styrker livskraften. Varme supper med tang og b\u00f8nner.' },
    healingLyd: { title: 'Nyrelyd: Chuiii', desc: 'En lang, bl\u00f8d ud\u00e5nding med lyden "chuiii" \u2014 frig\u00f8r frygt og n\u00e6rer vandets energi.' },
    refleksioner: ['Hvad f\u00f8ler du dig tryg ved i dit liv lige nu?', 'Hvorn\u00e5r m\u00e6rkede du sidst en dyb ro i kroppen?', 'Hvad ville det betyde at give slip p\u00e5 en frygt?']
  },
  2: {
    introText: 'Verden \u00e5bner sig. Barnet udforsker med hele kroppen, hele sindet. Vandets flow har nu f\u00e5et retning \u2014 nysgerrigheden driver fremad, og leg er det vigtigste arbejde der findes.',
    organPar: 'Nyrer og Bl\u00e6re', smag: 'Salt', aarstid: 'Vinter',
    folelser: { balance: 'Nysgerrighed, mod, gl\u00e6de', ubalance: 'Frygt, usikkerhed, uro' },
    vediskKobling: 'Brahmacharya \u2014 den legende l\u00e6ringsperiode',
    livstemaer: ['Udforskning', 'Fantasi og leg', 'Social forst\u00e5else'],
    psykOpgaver: ['Udvikle selvst\u00e6ndighed', 'L\u00e6re at navigere i verden', 'Opbygge mod'],
    kropTekst: 'Kroppen vokser hurtigt nu. Muskler og koordination udvikles gennem leg og bev\u00e6gelse. Nyrernes energi driver stadig \u2014 vitaliteten er enorm. Immunforsvaret modnes. Kroppen l\u00e6rer gr\u00e6nser gennem fald, skrammer og genrejsning.',
    sindTekst: 'Sindet er en eksplosion af fantasi. Barnet begynder at forst\u00e5 forskellen mellem sig selv og andre. Leg er ikke tidsfordriv \u2014 det er den vigtigste m\u00e5de at forst\u00e5 verden p\u00e5. Emotionelt vokser evnen til empati, men ogs\u00e5 frustrationen over begr\u00e6nsninger.',
    oevelse: { title: 'Caterpillar (Yin Yoga)', desc: 'Dyb foroverb\u00f8jning der beroer nervesystemet og n\u00e6rer nyrerne.' },
    kost: { title: 'Varme supper med tang', desc: 'Tang er rig p\u00e5 mineraler der st\u00f8tter nyrernes udvikling. Sorte b\u00f8nner og ris.' },
    healingLyd: { title: 'Nyrelyd: Chuiii', desc: 'Samme vandlyd som fase 1 \u2014 styrker den grundl\u00e6ggende livskraft.' },
    refleksioner: ['Hvad g\u00f8r dig nysgerrig i dit liv lige nu?', 'Hvor i dit liv kunne du tillade dig at lege mere?', 'Hvad ville du udforske, hvis du ikke var bange?']
  },
  3: {
    introText: 'Forvandlingens tid. Tr\u00e6ets energi skyder op med en kraft der ikke kan stoppes. Kroppen \u00e6ndrer sig, identiteten s\u00f8ger form \u2014 alt det gamle d\u00f8r langsomt, mens noget nyt bryder igennem.',
    organPar: 'Lever og Galdebl\u00e6re', smag: 'Sur', aarstid: 'For\u00e5r',
    folelser: { balance: 'Kreativitet, handlekraft, mod', ubalance: 'Vrede, frustration, rastl\u00f8shed' },
    vediskKobling: 'Brahmacharya \u2014 den transformative overgang',
    livstemaer: ['Pubertet og forvandling', 'Identitetss\u00f8gen', 'L\u00f8srivelse'],
    psykOpgaver: ['Forme egen identitet', 'Navigere kroppens forandring', 'Etablere indre kompas'],
    kropTekst: 'Puberteten er tr\u00e6ets fulde kraft. Hormoner eksploderer, kroppen \u00e6ndrer form. Menstruationen begynder \u2014 den f\u00f8rste kontakt med den cykliske kvindekrop. Leveren arbejder intenst for at processere alle de nye hormoner. Energien er enorm men ofte kaotisk.',
    sindTekst: 'Sindet s\u00f8ger desperat efter svar p\u00e5 sp\u00f8rgsm\u00e5let: hvem er jeg? F\u00f8lelserne er intense og skiftende. Vrede er en naturlig del \u2014 den er tr\u00e6ets kraft der s\u00f8ger retning. Den unge kvinde begynder at se verden med egne \u00f8jne, og det kan v\u00e6re b\u00e5de befriende og skr\u00e6mmende.',
    oevelse: { title: 'Dragefly (Yin Yoga)', desc: '\u00c5bner inderl\u00e5r og stimulerer levermeridianen. Frig\u00f8r stagneret energi.' },
    kost: { title: 'Gr\u00f8nne bladgr\u00f8ntsager', desc: 'Lever elsker gr\u00f8nt. Spirende korn, artiskokker, citronsaft om morgenen.' },
    healingLyd: { title: 'Leverlyd: Shhhhh', desc: 'En lang "shhh"-ud\u00e5nding med let \u00e5ben mund \u2014 frig\u00f8r vrede og giver plads til kreativitet.' },
    refleksioner: ['Hvilke dele af dig selv opdagede du i teenage\u00e5rene?', 'Hvad \u00f8nsker du stadig at forvandle i dit liv?', 'Hvor m\u00e6rker du tr\u00e6ets drivkraft \u2014 behovet for at vokse \u2014 lige nu?']
  },
  4: {
    introText: 'Blomstringens tid. Den unge kvinde tr\u00e6der frem med sin egen kraft og sine egne dr\u00f8mme. Uddannelse, de f\u00f8rste store valg, k\u00e6rlighed. Energien er ekspansiv \u2014 alt synes muligt.',
    organPar: 'Lever og Galdebl\u00e6re', smag: 'Sur', aarstid: 'For\u00e5r',
    folelser: { balance: 'Selvtillid, passion, retning', ubalance: 'Ut\u00e5lmodighed, perfektionisme, overambitiøsitet' },
    vediskKobling: 'Grihastha \u2014 den unge voksnes indtr\u00e6den',
    livstemaer: ['Blomstring', 'Karriere og dr\u00f8mme', 'Partnerskab'],
    psykOpgaver: ['Realisere potentiale', 'Navigere voksenlivets valg', 'Opbygge fundamenter'],
    kropTekst: 'Kroppen er i sin fulde kraft. Fertiliteten er h\u00f8j, musklerne st\u00e6rke, restitutionen hurtig. Leveren arbejder stabilt. Det er en tid hvor kroppen sj\u00e6ldent klager \u2014 den b\u00e6rer, bygger, blomstrer. Men det er ogs\u00e5 her, de m\u00f8nstre grundl\u00e6gges som viser sig senere.',
    sindTekst: 'Sindet er fokuseret og ambiti\u00f8st. Der er mod til at tage chancer, starte uddannelser, flytte, forelske sig. Identiteten tager form \u2014 ikke l\u00e6ngere s\u00f8gende men handlende. Skyggesiden er stress og f\u00f8lelsen af aldrig at v\u00e6re nok. Tr\u00e6ets energi kan blive til pres.',
    oevelse: { title: 'Twisted Roots (Yin Yoga)', desc: 'Drejning der stimulerer lever og galdebl\u00e6re. Skaber flow og l\u00f8sner stagnation.' },
    kost: { title: 'Spirende korn og artiskokker', desc: 'For\u00e5rets mad der matcher tr\u00e6ets energi. Fermenterede gr\u00f8ntsager, eddike, citronsaft.' },
    healingLyd: { title: 'Leverlyd: Shhhhh', desc: 'Samme befriende lyd som fase 3 \u2014 slip frustration og find retning.' },
    refleksioner: ['Hvilke dr\u00f8mme fra din ungdom lever stadig i dig?', 'Hvor blomstrer du i dit liv lige nu?', 'Hvad ville du g\u00f8re anderledes, hvis du vidste det var godt nok?']
  },
  5: {
    introText: 'Ildens fase. Ansvar for karriere, m\u00e5ske b\u00f8rn, m\u00e5ske parforhold. Energien er intens og handlingsorienteret \u2014 kvinden br\u00e6nder for det hun tror p\u00e5, men flammen kr\u00e6ver br\u00e6ndstof.',
    organPar: 'Hjerte og Tyndtarm', smag: 'Bitter', aarstid: 'Sommer',
    folelser: { balance: 'Gl\u00e6de, forbindelse, passion', ubalance: 'Rastl\u00f8shed, angst, udbr\u00e6ndthed' },
    vediskKobling: 'Grihastha \u2014 husholderfasen',
    livstemaer: ['Ansvar og moderskab', 'Karrierens intensitet', 'Parforholdets pr\u00f8velser'],
    psykOpgaver: ['Balancere ild og hvile', 'Navigere andres behov', 'Bevare kontakt med sig selv'],
    kropTekst: 'Hjertet og kredsl\u00f8bet er i centrum. Mange kvinder f\u00f8der i denne fase \u2014 kroppen gennemg\u00e5r en af sine mest transformerende oplevelser. Energien er h\u00f8j men kan br\u00e6nde ud. Hjertet arbejder h\u00e5rdt, b\u00e5de fysisk og emotionelt. S\u00f8vnmangel og stress kan t\u00e6re.',
    sindTekst: 'Sindet jonglerer mange bolde. Karriere, b\u00f8rn, parforhold, identitet \u2014 alt kr\u00e6ver opm\u00e6rksomhed. Gl\u00e6den er stor men ogs\u00e5 s\u00e5rbar. Ildens f\u00e6lde er at br\u00e6nde for alt og glemme sig selv. Mange kvinder opdager her, at de har mistet kontakten til deres egne behov.',
    oevelse: { title: 'Melting Heart (Yin Yoga)', desc: '\u00c5bner bryst og hjertemeridian. En position der minder om at give slip og modtage.' },
    kost: { title: 'Bitter salat og gr\u00f8n te', desc: 'Bitter smag k\u00f8ler hjertet. Vandmelon, hibiscuste, r\u00f8de b\u00e6r der n\u00e6rer blodet.' },
    healingLyd: { title: 'Hjertelyd: Haaaa', desc: 'En \u00e5ben, varm "haaaa"-ud\u00e5nding \u2014 \u00e5bner hjertet og frig\u00f8r rastl\u00f8shed.' },
    refleksioner: ['Hvilke m\u00f8nstre gentager du fra din mor?', 'Hvad ville du g\u00f8re anderledes, hvis du kun havde ansvar for dig selv?', 'Hvorn\u00e5r br\u00e6ndte du sidst for noget uden at br\u00e6nde ud?']
  },
  6: {
    introText: 'Modningens tid. Kvinden finder dybde og substans. Det der ikke l\u00e6ngere tjener hende, begynder at falde v\u00e6k. Erfaring bliver til visdom, og r\u00f8dder vokser dybere end nogensinde.',
    organPar: 'Milt og Mave', smag: 'S\u00f8d', aarstid: 'Sensommer',
    folelser: { balance: 'Omsorg, stabilitet, medf\u00f8lelse', ubalance: 'Bekymring, overt\u00e6nkning, kontrol' },
    vediskKobling: 'Vanaprastha \u2014 den reflektive overgang',
    livstemaer: ['Modning', 'Selvindsigt', 'At finde sin plads'],
    psykOpgaver: ['Acceptere det levede', 'Slippe det overfl\u00f8dige', 'Finde indre fundament'],
    kropTekst: 'Kroppens stofskifte begynder at \u00e6ndre sig. Ford\u00f8jelsen bliver vigtigere \u2014 milten og maven kr\u00e6ver mere opm\u00e6rksomhed. Hormonniveauer begynder langsomt at skifte. Kroppen taler tydeligere nu: den bel\u00f8nner god n\u00e6ring og hvile, og den protesterer mod det der ikke passer.',
    sindTekst: 'Sindet begynder den store sortering. Hvad er \u00e6gte, hvad er overtaget? Mange kvinder oplever en identitetskrise \u2014 ikke destruktiv men transformativ. Bekymring er jordens skygge, men dens gave er \u00e6gte omsorg. Der er en stille styrke i at vide hvad man vil.',
    oevelse: { title: 'Childs Pose (Yin Yoga)', desc: 'Barnets stilling n\u00e6rer milten og giver dyb tryghed. En position for tilbagevenden til det enkle.' },
    kost: { title: 'Rodfrugter og varme gryder', desc: 'Jord elsker s\u00f8dt fra naturen: s\u00f8de kartofler, gr\u00e6skar, hirse. Varm, n\u00e6rende mad.' },
    healingLyd: { title: 'Miltlyd: Huuuuu', desc: 'En dyb "huuuu" fra maven \u2014 forankrer bekymring og n\u00e6rer jordens stabilitet.' },
    refleksioner: ['Hvad har du l\u00e6rt om dig selv de sidste ti \u00e5r?', 'Hvad er du klar til at slippe?', 'Hvor finder du dit fundament, n\u00e5r alt andet vakler?']
  },
  7: {
    introText: 'H\u00f8stens tid. Alt det levede b\u00e6rer nu frugt. Kvinden ved hvad hun vil og hvad hun ikke vil. En stille styrke vokser \u2014 ikke af ambition, men af erfaring og accept.',
    organPar: 'Milt og Mave', smag: 'S\u00f8d', aarstid: 'Sensommer',
    folelser: { balance: 'Vished, taknemmelighed, ro', ubalance: 'Tab, tomhed, bekymring for fremtiden' },
    vediskKobling: 'Vanaprastha \u2014 den modne tilbagetr\u00e6kning',
    livstemaer: ['Overgangsalder', 'H\u00f8st af livserfaring', 'Ny frihed'],
    psykOpgaver: ['Omfavne forandring', 'Transformere tab til visdom', 'Genfinde sig selv'],
    kropTekst: 'Overgangsalderen er jordens store omv\u00e6ltning. Hormonerne \u00e6ndrer sig markant \u2014 hedeture, s\u00f8vnforstyrrelser, hum\u00f8rsvingninger. Kroppen beder om at blive lyttet til. Milten og maven er n\u00f8gler til stabilitet. Den kvinde der n\u00e6rer sin jord-energi, navigerer overgangen med mere ro.',
    sindTekst: 'Sindet oplever en frihed der kan v\u00e6re b\u00e5de skr\u00e6mmende og befriende. Roller falder \u2014 mor, karrierekvinde, partner \u2014 og sp\u00f8rgsm\u00e5let melder sig: hvem er jeg, n\u00e5r rollerne er v\u00e6k? Det er et vendepunkt. De kvinder der t\u00f8r se indad, finder en visdom de ikke vidste de havde.',
    oevelse: { title: 'Reclining Twist (Yin Yoga)', desc: 'Liggende drejning der masserer indre organer og st\u00f8tter ford\u00f8jelsen.' },
    kost: { title: 'Varm hirse og gr\u00e6skar', desc: 'Miltn\u00e6rende kost. Undg\u00e5 r\u00e5, kold mad. Ingef\u00e6r, kanel, kardemomme.' },
    healingLyd: { title: 'Miltlyd: Huuuuu', desc: 'Samme jordlyd som fase 6 \u2014 rodf\u00e6ster og giver tryghed i overgangen.' },
    refleksioner: ['Hvad er du mest taknemlig for i dit liv?', 'Hvad er du klar til at slippe \u2014 og hvad holder du fast i af vane?', 'Hvis du ikke skulle leve op til nogens forventninger, hvad ville du s\u00e5 g\u00f8re?']
  },
  8: {
    introText: 'Frig\u00f8relsens tid. Det essentielle viser sig med klar tydelighed. Kvinden frig\u00f8r sig fra det overfl\u00f8dige \u2014 roller, forventninger, ting \u2014 og en ny lethed opst\u00e5r.',
    organPar: 'Lunger og Tyktarm', smag: 'Skarp', aarstid: 'Efter\u00e5r',
    folelser: { balance: 'Klarhed, lethed, accept', ubalance: 'Sorg, tomhed, isolation' },
    vediskKobling: 'Sannyasa \u2014 den frie fase',
    livstemaer: ['Frig\u00f8relse', 'Essens', 'Ny begyndelse'],
    psykOpgaver: ['Give slip med k\u00e6rlighed', 'Finde det essentielle', 'Definere frihed'],
    kropTekst: 'Lungerne og tyktarmen er i fokus. \u00c5ndedr\u00e6ttet bliver en n\u00f8gle \u2014 dyb vejrtr\u00e6kning n\u00e6rer kroppen og sindet. Kroppen beder om renhed: ren luft, enkel mad, gode vaner. Immunforsvaret kr\u00e6ver opm\u00e6rksomhed. Det er en tid for at rydde ud \u2014 fysisk og energetisk.',
    sindTekst: 'Sindet finder klarhed. Det overfl\u00f8dige falder som blade fra et tr\u00e6 \u2014 ikke med smerte, men med lethed. Sorg kan melde sig, men den er metallets gave: evnen til at slippe det der var, og se det der er. Mange kvinder oplever en ny skarphed og \u00e6rlighed.',
    oevelse: { title: 'Open Wings (Yin Yoga)', desc: '\u00c5bner brystkassen og lungemeridianerne. En position for at give slip og modtage luft.' },
    kost: { title: 'Hvide f\u00f8devarer og ingef\u00e6r', desc: 'Lunger elsker hvidt: p\u00e6rer, radiser, ris. Skarp smag der \u00e5bner luftvejene.' },
    healingLyd: { title: 'Lungelyd: Sssss', desc: 'En lang, kontrolleret "sssss" \u2014 frig\u00f8r sorg og \u00e5bner brystet.' },
    refleksioner: ['Hvad kan du give slip p\u00e5 med k\u00e6rlighed?', 'Hvad er det essentielle i dit liv lige nu?', 'Hvorn\u00e5r f\u00f8ler du dig mest fri?']
  },
  9: {
    introText: 'Visdommens tid. Vandets tilbagevenden. Cirklen sluttes \u2014 den vise kvinde b\u00e6rer alle fasers erfaring i sig. Hun flyder igen, men nu med en dybde der kun kommer af at have levet fuldt.',
    organPar: 'Nyrer og Bl\u00e6re', smag: 'Salt', aarstid: 'Vinter',
    folelser: { balance: 'Visdom, accept, dyb ro', ubalance: 'Frygt for afslutning, isolation, stivhed' },
    vediskKobling: 'Sannyasa \u2014 den vise kvinde',
    livstemaer: ['Visdom og integration', 'Arv og videregivelse', 'Tilbagevenden til essensen'],
    psykOpgaver: ['Integrere alle faser', 'Videregive erfaring', 'Finde fred med helheden'],
    kropTekst: 'Nyrerne lukker cirklen. Livskraften er roligere men dybere. Knoglerne kr\u00e6ver omsorg, leddene beder om bl\u00f8d bev\u00e6gelse. Vand-energien er nu visdomsvand \u2014 ikke barnets \u00e5bne s\u00f8, men en dyb br\u00f8nd af erfaring. Kroppen bel\u00f8nner mildhed, varme og regelm\u00e6ssighed.',
    sindTekst: 'Sindet er som en stille flod. Den vise kvinde har v\u00e6ret ild, jord og metal \u2014 og nu vender hun tilbage til vandet med alt det, hun har l\u00e6rt. Der er en frihed i at have gennemlevet det meste. Intuition og indsigt smelter sammen. Hun ser m\u00f8nstre, hun forst\u00e5r cyklusser.',
    oevelse: { title: 'Sleeping Swan (Yin Yoga)', desc: 'Dyb hofte\u00e5bner der stimulerer nyrerne. En stilling for integration og ro.' },
    kost: { title: 'Varme supper med tang og sort sesam', desc: 'Tilbage til vandets mad. Valn\u00f8dder, b\u00f8nner, varm mad der n\u00e6rer essensen.' },
    healingLyd: { title: 'Nyrelyd: Chuiii', desc: 'Cirklen sluttes med den samme lyd som begyndte \u2014 men nu med hele livets resonans.' },
    refleksioner: ['Hvad er den vigtigste ting du har l\u00e6rt om dig selv?', 'Hvad vil du videregive til de kvinder der kommer efter dig?', 'Hvis du kunne sige \u00e9n ting til din yngre jeg, hvad ville det v\u00e6re?']
  }
};

// ---- De Fire Uger: Menstrual cycle data ----

const MENSTRUAL_WEEK_DATA = {
  1: { name: 'Uge 1 \u2014 Menstruation', element: 'VAND', dagRange: 'Dag 1\u20137', kvalitet: 'Indadvendt energi',
    bodyText: 'Kroppen renser og fornyer sig. Livmoderen frigiver det gamle slimhinde. Energien er lav, og kroppen beder om hvile. Nyrerne og bl\u00e6ren er aktive \u2014 vand-elementet dominerer.',
    feelingsText: 'F\u00f8lelserne tr\u00e6kker indad. Det er en naturlig tid for refleksion og stilhed. Intuition er st\u00e6rk, men socialt overskud kan v\u00e6re lavt. Lyt til behovet for at tr\u00e6kke dig tilbage.',
    recommendations: ['Hvile og varme', 'Yin yoga med hofte\u00e5bnere', 'Varme supper og te', 'Journalskrivning og refleksion'] },
  2: { name: 'Uge 2 \u2014 Opbygning', element: 'TR\u00c6', dagRange: 'Dag 8\u201314', kvalitet: 'Stigende energi',
    bodyText: 'Follikelfasen begynder. En ny \u00e6g modnes, \u00f8strogen stiger. Energien vokser gradvist \u2014 kroppen f\u00f8ler sig st\u00e6rkere dag for dag. Leveren arbejder aktivt med at processere hormoner.',
    feelingsText: 'Optimisme og kreativitet vokser. Det er en god tid for nye projekter, planl\u00e6gning og social aktivitet. Selvtilliden stiger, og der er mod til at tage initiativer.',
    recommendations: ['Dynamisk bev\u00e6gelse', 'Kreative projekter', 'Gr\u00f8nne gr\u00f8ntsager og spirende mad', 'Nye initiativer og planl\u00e6gning'] },
  3: { name: 'Uge 3 \u2014 \u00c6gl\u00f8sning', element: 'ILD', dagRange: 'Dag 15\u201321', kvalitet: 'Udadvendt energi',
    bodyText: '\u00c6gl\u00f8sning sker, og \u00f8strogen er p\u00e5 sit h\u00f8jeste. Kroppen str\u00e5ler \u2014 huden lyser, energien er p\u00e5 toppen. Hjertet og kredsl\u00f8bet er i flow. Det er kroppens sommer.',
    feelingsText: 'F\u00f8lelserne er varme og \u00e5bne. Social energi er h\u00f8j, kommunikation flyder. Det er en tid for forbindelse, intimitet og gl\u00e6de. Pas p\u00e5 rastl\u00f8shed og overaktivitet.',
    recommendations: ['Intens bev\u00e6gelse og social aktivitet', 'R\u00e5 salater og frisk frugt', 'Forbindelse og samtaler', 'Kreativt udtryk'] },
  4: { name: 'Uge 4 \u2014 Luteal', element: 'JORD', dagRange: 'Dag 22\u201328', kvalitet: 'Faldende energi',
    bodyText: 'Progesteron dominerer. Kroppen forbereder sig p\u00e5 menstruation. Ford\u00f8jelsen kan v\u00e6re f\u00f8lsom, kroppen beder om n\u00e6ring og regelm\u00e6ssighed. Milten og maven er aktive.',
    feelingsText: 'F\u00f8lelserne kan svinge \u2014 bekymring, irritation eller s\u00e5rbarhed. Det er kroppens m\u00e5de at sige: s\u00e6nk tempoet. Det er en tid for at runde af, rydde op og forberede sig.',
    recommendations: ['Rolige aktiviteter og tidlig sengetid', 'Varm, n\u00e6rende mad', 'Undg\u00e5 store beslutninger', 'Selvomsorgsritualer'] }
};

// ---- Månecyklus (for kvinder uden menstruation) ----

const MOON_CYCLE_DATA = {
  1: { name: 'Nym\u00e5ne', element: 'VAND', kvalitet: 'Indadvendt energi',
    text: 'Nym\u00e5nen er vandets tid \u2014 stille, m\u00f8rk, reflekterende. En tid for nye intentioner, indre lytning og hvile. Energien er p\u00e5 sit laveste, og det er en gave.' },
  2: { name: 'Tiltagende m\u00e5ne', element: 'TR\u00c6', kvalitet: 'Stigende energi',
    text: 'M\u00e5nen vokser, og med den din energi. Tr\u00e6ets fase \u2014 v\u00e6kst, planl\u00e6gning, handling. En god tid for at s\u00e6tte ting i gang og f\u00f8lge dine intentioner.' },
  3: { name: 'Fuldm\u00e5ne', element: 'ILD', kvalitet: 'Udadvendt energi',
    text: 'Alt er i fuld blomst. Ildens kulminationspunkt \u2014 f\u00f8lelser, dr\u00f8mme og energi er p\u00e5 sit h\u00f8jeste. En tid for forbindelse, fejring og kulminationer.' },
  4: { name: 'Aftagende m\u00e5ne', element: 'JORD', kvalitet: 'Faldende energi',
    text: 'M\u00e5nen mindskes, og vi samler ind. Jordens fase \u2014 sortering, eftertanke, taknemmelighed. Slip det der ikke tjener dig, og forbered en ny cyklus.' }
};

// ---- Refleksion: Fasespecifikke spørgsmål ----

const REFLEKSION_DATA = {
  1: ['Hvad f\u00f8ler du dig tryg ved i dit liv lige nu?', 'Hvor i kroppen m\u00e6rker du stilhed \u2014 og hvor m\u00e6rker du uro?', 'Hvis du kunne give slip p\u00e5 \u00e9n frygt, hvad ville det v\u00e6re?'],
  2: ['Hvad g\u00f8r dig nysgerrig i dit liv lige nu?', 'Hvor kunne du tillade dig at lege mere?', 'Hvad ville du udforske, hvis ingen s\u00e5 p\u00e5?'],
  3: ['Hvad forvandler sig i dit liv lige nu?', 'Hvilken del af dig selv er ved at bryde igennem?', 'Hvad er du vred over \u2014 og hvad gemmer sig bag vreden?'],
  4: ['Hvilke dr\u00f8mme lever stadig i dig?', 'Hvor blomstrer du allerede \u2014 uden at bem\u00e6rke det?', 'Hvad ville du g\u00f8re, hvis du vidste det var godt nok?'],
  5: ['Hvilke m\u00f8nstre gentager du fra din mor?', 'Hvad ville du g\u00f8re anderledes, hvis du kun havde ansvar for dig selv?', 'Hvorn\u00e5r br\u00e6ndte du sidst for noget uden at br\u00e6nde ud?'],
  6: ['Hvad har du l\u00e6rt om dig selv de sidste ti \u00e5r?', 'Hvad er du klar til at slippe?', 'Hvor finder du dit fundament, n\u00e5r alt andet vakler?'],
  7: ['Hvad er du mest taknemlig for?', 'Hvad holder du fast i af vane \u2014 og hvad holder du fast i af k\u00e6rlighed?', 'Hvem er du, n\u00e5r rollerne er v\u00e6k?'],
  8: ['Hvad kan du give slip p\u00e5 med k\u00e6rlighed?', 'Hvad er det essentielle i dit liv lige nu?', 'Hvorn\u00e5r f\u00f8ler du dig mest fri?'],
  9: ['Hvad er den vigtigste ting du har l\u00e6rt om dig selv?', 'Hvad vil du videregive?', 'Hvis du kunne sige \u00e9n ting til din yngre jeg, hvad ville det v\u00e6re?']
};

// ---- Kontrolcyklus: TCM element tekster ----

const KONTROL_TEKST = {
  'VAND': { naerer: 'Dit Vand n\u00e6rer Tr\u00e6 \u2014 din dybde og intuition giver v\u00e6kst og retning til ny energi.', kontrollerer: 'Vand kontrollerer Ild \u2014 din ro kan d\u00e6mpe overaktivitet og bringe balance til flammerne.', naeret_af: 'Metal n\u00e6rer dit Vand \u2014 klarhed og evnen til at slippe beriger din dybde.', kontrolleret_af: 'Jord kontrollerer dit Vand \u2014 omsorgens fundament giver dit flow retning og gr\u00e6nser.' },
  'TR\u00c6': { naerer: 'Dit Tr\u00e6 n\u00e6rer Ild \u2014 din v\u00e6kst og kreativitet t\u00e6nder gl\u00e6de og forbindelse.', kontrollerer: 'Tr\u00e6 kontrollerer Jord \u2014 din fremadrettede energi bryder igennem stagnation.', naeret_af: 'Vand n\u00e6rer dit Tr\u00e6 \u2014 dybde og intuition giver din v\u00e6kst rod og retning.', kontrolleret_af: 'Metal kontrollerer dit Tr\u00e6 \u2014 klarhed besk\u00e6rer overfl\u00f8dige grene og giver form.' },
  'ILD': { naerer: 'Din Ild n\u00e6rer Jord \u2014 din varme og passion skaber fundament og omsorg.', kontrollerer: 'Ild kontrollerer Metal \u2014 din varme smelter stivhed og \u00e5bner for flow.', naeret_af: 'Tr\u00e6 n\u00e6rer din Ild \u2014 v\u00e6kst og retning giver dine flammer br\u00e6ndstof.', kontrolleret_af: 'Vand kontrollerer din Ild \u2014 dybde og ro forhindrer udbr\u00e6ndthed.' },
  'JORD': { naerer: 'Din Jord n\u00e6rer Metal \u2014 din stabilitet og omsorg skaber grundlag for klarhed.', kontrollerer: 'Jord kontrollerer Vand \u2014 dit fundament giver det flydende retning og form.', naeret_af: 'Ild n\u00e6rer din Jord \u2014 passion og varme g\u00f8r dit fundament levende.', kontrolleret_af: 'Tr\u00e6 kontrollerer din Jord \u2014 v\u00e6kst og forandring forhindrer stagnation.' },
  'METAL': { naerer: 'Dit Metal n\u00e6rer Vand \u2014 din klarhed og evne til at slippe beriger dybden.', kontrollerer: 'Metal kontrollerer Tr\u00e6 \u2014 din pr\u00e6cision giver ukontrolleret v\u00e6kst form.', naeret_af: 'Jord n\u00e6rer dit Metal \u2014 stabilitet og omsorg giver din klarhed varme.', kontrolleret_af: 'Ild kontrollerer dit Metal \u2014 varme og forbindelse forhindrer isolation.' }
};

// ---- Forløb: Sæsonbaserede eksterne links ----

const FORLOB_DATA = {
  'Vinter': { title: 'Vinterforl\u00f8bet', subtitle: 'F\u00f8lg \u00e5rets energi sammen med andre kvinder. Yin yoga, vejrtr\u00e6kning, refleksion \u2014 og et f\u00e6llesskab tilpasset vinterens stille energi.', url: 'https://isabelleeita.dk' },
  'For\u00e5r': { title: 'For\u00e5rsforl\u00f8bet', subtitle: 'Ny energi bryder frem. \u00d8velser, kost og f\u00e6llesskab der matcher for\u00e5rets Tr\u00e6-energi og nye begyndelser.', url: 'https://isabelleeita.dk' },
  'Sommer': { title: 'Sommerforl\u00f8bet', subtitle: 'Ildens \u00e5rstid. Bev\u00e6gelse, forbindelse og gl\u00e6de \u2014 et forl\u00f8b der fejrer sommerens fulde energi.', url: 'https://isabelleeita.dk' },
  'Sensommer': { title: 'Sensommerforl\u00f8bet', subtitle: 'Jordens tid. N\u00e6ring, omsorg og ford\u00f8jelse af sommerens oplevelser \u2014 sammen med andre kvinder.', url: 'https://isabelleeita.dk' },
  'Efter\u00e5r': { title: 'Efter\u00e5rsforl\u00f8bet', subtitle: 'Metallets \u00e5rstid. Slip det overfl\u00f8dige og find det essentielle \u2014 guidet af Isabelle.', url: 'https://isabelleeita.dk' }
};

// ---- Healing Sounds (per element) ----

const HEALING_SOUNDS = {
  'VAND': { lyd: 'Chuiii', organ: 'Nyrer', desc: 'Lad lyden vibrere dybt i l\u00e6nden. Chuiii beroer nyrerne og n\u00e6rer din grundl\u00e6ggende livsenergi.' },
  'TR\u00c6': { lyd: 'Shhhhh', organ: 'Lever', desc: 'En blid ud\u00e5nding som letter leveren. Shhhhh hj\u00e6lper med at frig\u00f8re ophobede frustrationer.' },
  'ILD': { lyd: 'Haaaa', organ: 'Hjerte', desc: '\u00c5bn munden og lad Haaaa str\u00f8mme ud. Lyden k\u00f8ler hjertet og giver indre ro.' },
  'JORD': { lyd: 'Huuuuu', organ: 'Milt', desc: 'Huuuuu masserer milten indefra. Lyden forankrer dig og styrker din evne til at ford\u00f8je \u2014 b\u00e5de mad og oplevelser.' },
  'METAL': { lyd: 'Sssss', organ: 'Lunger', desc: 'Sssss renser lungerne med en hvislende ud\u00e5nding. Giv slip p\u00e5 det der ikke l\u00e6ngere tjener dig.' }
};

// ---- Yin Yoga: Fuld data (5 elementer × 3 stillinger) ----

const YIN_YOGA_FULL = {
  'VAND': [
    { pose: 'Butterfly (Baddha Konasana)', desc: '\u00c5bner hofterne og stimulerer nyremeridianen. Sid med fods\u00e5ler mod hinanden, fold fremover.', tid: '3\u20135 min', meridian: 'Nyre \u00b7 Bl\u00e6re' },
    { pose: 'Liggende Butterfly (Supta Baddha Konasana)', desc: 'Samme position men liggende p\u00e5 ryggen. \u00c5bner bryst og hofte. Dyb afslapning.', tid: '5\u201310 min', meridian: 'Nyre \u00b7 Hjerte' },
    { pose: 'Caterpillar (Paschimottanasana)', desc: 'Foroverb\u00f8jning med strakte ben. Beroer nervesystemet og n\u00e6rer nyrerne.', tid: '3\u20135 min', meridian: 'Bl\u00e6re \u00b7 Nyre' }
  ],
  'TR\u00c6': [
    { pose: 'Dragonfly (Straddle)', desc: 'Bredt spreddede ben med foroverb\u00f8jning. \u00c5bner inderl\u00e5r og lever/galdebl\u00e6re.', tid: '3\u20135 min', meridian: 'Lever \u00b7 Galdebl\u00e6re' },
    { pose: 'Sleeping Swan (Pigeon)', desc: 'Dyb hofte\u00e5bner med \u00e9t ben b\u00f8jet foran. Frig\u00f8r stagneret energi i hoften.', tid: '3\u20135 min pr side', meridian: 'Galdebl\u00e6re \u00b7 Lever' },
    { pose: 'Firben (Lizard)', desc: 'Dybt lungeudstr\u00e6k. Intens hofte\u00e5bner der stimulerer levermeridianen.', tid: '3\u20135 min pr side', meridian: 'Lever \u00b7 Milt' }
  ],
  'ILD': [
    { pose: 'Melting Heart (Anahatasana)', desc: '\u00c5bner bryst og hjertemeridian. Armene strakt frem, brystet synker mod gulvet.', tid: '3\u20135 min', meridian: 'Hjerte \u00b7 Tyndtarm' },
    { pose: '\u00d8rnens Vinger (Eagle Arms)', desc: 'Armene krydset i \u00f8rneposition. \u00c5bner skuldrene og rummet mellem skulderbladene.', tid: '2\u20133 min pr side', meridian: 'Hjerte \u00b7 Perikardium' },
    { pose: 'Sphinx (Salamba Bhujangasana)', desc: 'Mild rygb\u00f8jning p\u00e5 underarmene. \u00c5bner brystet og stimulerer hjertet.', tid: '3\u20135 min', meridian: 'Hjerte \u00b7 Mave' }
  ],
  'JORD': [
    { pose: 'Barnet (Balasana)', desc: 'Hvileposition med panden mod gulvet. N\u00e6rer milten og giver dyb tryghed.', tid: '3\u20135 min', meridian: 'Milt \u00b7 Mave' },
    { pose: 'Square (Firkantet Pigeon)', desc: 'Begge skinneben parallelle i firkant foran kroppen. Dyb hofte\u00e5bner.', tid: '3\u20135 min pr side', meridian: 'Milt \u00b7 Galdebl\u00e6re' },
    { pose: 'Liggende Drejning (Supine Twist)', desc: 'Liggende p\u00e5 ryggen med kn\u00e6ene til siden. Masserer indre organer.', tid: '3\u20135 min pr side', meridian: 'Mave \u00b7 Milt' }
  ],
  'METAL': [
    { pose: '\u00c5ben Vinge (Open Wing)', desc: 'Liggende p\u00e5 maven med \u00e9n arm strakt ud. \u00c5bner brystkassen og lungerne.', tid: '3\u20135 min pr side', meridian: 'Lunger \u00b7 Tyktarm' },
    { pose: 'Bananform (Banana Pose)', desc: 'Liggende p\u00e5 ryggen i en bue. Str\u00e6kker hele siden og \u00e5bner lungemeridianerne.', tid: '3\u20135 min pr side', meridian: 'Lunger \u00b7 Galdebl\u00e6re' },
    { pose: 'Fisk (Matsyasana)', desc: 'Rygb\u00f8jning med \u00e5bent bryst. Stimulerer lungerne og frig\u00f8r sorg.', tid: '2\u20134 min', meridian: 'Lunger \u00b7 Hjerte' }
  ]
};

// ---- Insight: Yoga poses (kort version) ----

const INSIGHT_YOGA = {
  'VAND': [
    { pose: 'Butterfly (Baddha Konasana)', desc: '\u00c5bner hofterne og stimulerer nyremeridianen. Sid 3\u20135 min og lad kroppen synke.' },
    { pose: 'Sleeping Swan', desc: 'Dyb hofte\u00e5bner der arbejder med nyrer og bl\u00e6re. Hold 3 min per side.' },
    { pose: 'Caterpillar (Paschimottanasana)', desc: 'Fold fremad og lad tyngdekraften g\u00f8re arbejdet. Stimulerer bl\u00e6remeridianen langs ryggen.' }
  ],
  'TR\u00c6': [
    { pose: 'Dragonfly (Upavistha Konasana)', desc: '\u00c5bner inderl\u00e5rene og stimulerer levermeridianen. Sid bredt og fold stille frem.' },
    { pose: 'Twisted Roots', desc: 'Lig p\u00e5 ryggen med ben i kryds, lad kn\u00e6ene falde til \u00e9n side. Vrider leveren blidt.' },
    { pose: 'Shoelace (Gomukhasana)', desc: 'Dyb hofte\u00e5bner der rammer galdebl\u00e6remeridianen langs ydersiden af benet.' }
  ],
  'ILD': [
    { pose: 'Melting Heart (Anahatasana)', desc: 'Kn\u00e6l og lad brystkassen synke mod gulvet. \u00c5bner hjerteomr\u00e5det dybt.' },
    { pose: 'Sphinx', desc: 'Blid rygb\u00f8jning der \u00e5bner hjertet og stimulerer hjerte- og tyndtarmsmeridianen.' },
    { pose: 'Open Wings', desc: 'Lig p\u00e5 maven med \u00e9n arm ud til siden. Dyb \u00e5bning af bryst og skuldre.' }
  ],
  'JORD': [
    { pose: 'Child\u2019s Pose (Balasana)', desc: 'Den ultimative yin-stilling for jord. Giver tryghed, ro og stimulerer mave-miltmeridianen.' },
    { pose: 'Sphinx med bolster', desc: 'L\u00e6g en bolster under maven og hvil. Stimulerer maven og milten blidt.' },
    { pose: 'Reclining Twist', desc: 'Lig p\u00e5 ryggen, tr\u00e6k et kn\u00e6 over. Masserer mave og milt og giver dyb afslapning.' }
  ],
  'METAL': [
    { pose: 'Seal Pose', desc: 'Dybere udgave af Sphinx. \u00c5bner brystet og stimulerer lungerne. Hold 3\u20135 min.' },
    { pose: 'Banana Pose', desc: 'Lig p\u00e5 ryggen og kurv kroppen som en banan. \u00c5bner siden af kroppen og lungemeridianen.' },
    { pose: 'Savasana med fokus p\u00e5 \u00e5ndedr\u00e6t', desc: 'Dyb hvile med bevidst ind- og ud\u00e5nding. Lungernes ultimative n\u00e6ring.' }
  ]
};

// ---- Insight: Kost & Urter per element ----

const INSIGHT_FOOD = {
  'VAND': [
    { item: 'Sort sesam & valn\u00f8dder', desc: 'N\u00e6rer nyreessensen og styrker livskraften.' },
    { item: 'Misosuppe', desc: 'Varm, salt og dybt n\u00e6rende for nyrerne.' },
    { item: 'Ingef\u00e6rte med honning', desc: 'Varmer nyreomr\u00e5det og st\u00f8tter ford\u00f8jelsen.' },
    { item: 'Tang og s\u00f8gr\u00e6s', desc: 'Salt smag n\u00e6rer vandelelementet direkte.' }
  ],
  'TR\u00c6': [
    { item: 'Gr\u00f8nne bladgr\u00f8ntsager', desc: 'Spinat, gr\u00f8nk\u00e5l, rucola \u2013 st\u00f8tter leverens rensning.' },
    { item: 'Citron i varmt vand', desc: 'Den sure smag stimulerer leveren og galdebl\u00e6ren.' },
    { item: 'M\u00e6lkeb\u00f8ttete', desc: 'Klassisk leverurt der renser og styrker.' },
    { item: 'Spirer og kimchi', desc: 'Fermenteret mad st\u00f8tter leverens arbejde og ford\u00f8jelsen.' }
  ],
  'ILD': [
    { item: 'R\u00f8de b\u00e6r (hindb\u00e6r, jordb\u00e6r)', desc: 'N\u00e6rer hjertet og blodet. Den bitre smag st\u00f8tter ilden.' },
    { item: 'Kakao (ren)', desc: 'Hjertemedicin i naturlig form. \u00c5bner og varmer.' },
    { item: 'Hibiscuste', desc: 'K\u00f8lende og hjertestyrkende. Perfekt n\u00e5r ilden er intens.' },
    { item: 'Granat\u00e6ble', desc: 'Forbundet med hjertet i mange traditioner. Antioxidantrig.' }
  ],
  'JORD': [
    { item: 'S\u00f8de rodfrugter (s\u00f8de kartofler, guler\u00f8dder)', desc: 'Den s\u00f8de smag n\u00e6rer milten og maven.' },
    { item: 'Havregr\u00f8d', desc: 'Varm, bl\u00f8d, n\u00e6rende \u2013 perfekt jordmad.' },
    { item: 'Kamillte', desc: 'Beroligende for maven og nervesystemet.' },
    { item: 'Supper og gryderetter', desc: 'Langsomt kogt mad n\u00e6rer jordelementet dybt.' }
  ],
  'METAL': [
    { item: 'P\u00e6rer', desc: 'Den klassiske lungefrugt i kinesisk medicin. Fugter og n\u00e6rer.' },
    { item: 'Ris (hvid eller jasmin)', desc: 'Den sk\u00e6rende, hvide energi st\u00f8tter metalelementet.' },
    { item: 'Timian- og salvite', desc: 'Urter der st\u00f8tter lungerne og \u00e5ndedr\u00e6tsystemet.' },
    { item: 'Hvid r\u00e6ddike (daikon)', desc: 'Renser lungerne og tyktarmen. Skarp smag st\u00f8tter metal.' }
  ]
};

// ---- Insight: Fokusområder per element ----

const INSIGHT_FOCUS = {
  'VAND': ['Hvile og regeneration \u2013 priorit\u00e9r s\u00f8vn og stille tid', 'Lyt til din intuition \u2013 den taler tydeligt i dag', 'V\u00e6r t\u00e5lmodig med dig selv \u2013 ikke alt beh\u00f8ver svar nu'],
  'TR\u00c6': ['Handling og retning \u2013 tag det f\u00f8rste skridt', 'Kreativitet \u2013 giv dine id\u00e9er form', 'Bev\u00e6gelse \u2013 din krop har brug for at udtrykke tr\u00e6ets energi'],
  'ILD': ['Forbindelse \u2013 r\u00e6k ud til nogen du holder af', 'Gl\u00e6de \u2013 g\u00f8r noget der t\u00e6nder dig op indeni', 'Kommunikation \u2013 sig det du mener, med varme'],
  'JORD': ['N\u00e6ring \u2013 start med at n\u00e6re dig selv f\u00f8rst', 'Stabilitet \u2013 skab orden i \u00e9t lille omr\u00e5de', 'Omsorg \u2013 din omsorgsevne er din superkraft i dag'],
  'METAL': ['Klarhed \u2013 se p\u00e5 dit liv med \u00e6rlige \u00f8jne', 'Slip \u2013 giv slip p\u00e5 \u00e9n ting der tynger', 'Essens \u2013 hvad er det absolut vigtigste lige nu?']
};

// ---- Element Interactions (25 par-kombinationer) ----

const ELEMENT_INTERACTIONS = {
  'VAND_TR\u00c6':   { type: 'n\u00e6rer',     text: 'Vand n\u00e6rer Tr\u00e6. Din dybde giver plads til {pron} v\u00e6kst.' },
  'TR\u00c6_ILD':    { type: 'n\u00e6rer',     text: 'Tr\u00e6 f\u00f8der Ild. {navn}s energi t\u00e6ndes af din retning.' },
  'ILD_JORD':   { type: 'n\u00e6rer',     text: 'Ild varmer Jord. Din passion modnes i {pron} stabilitet.' },
  'JORD_METAL': { type: 'n\u00e6rer',     text: 'Jord skaber Metal. Din omsorg b\u00e6rer {pron} klarhed.' },
  'METAL_VAND': { type: 'n\u00e6rer',     text: 'Metal beriger Vand. {pron} visdom frig\u00f8r din intuition.' },
  'TR\u00c6_VAND':   { type: 'modtager',  text: 'Tr\u00e6 modtager fra Vand. {pron} dybde n\u00e6rer din v\u00e6kst.' },
  'ILD_TR\u00c6':    { type: 'modtager',  text: 'Ild modtager fra Tr\u00e6. Din varme vokser i {pron} retning.' },
  'JORD_ILD':   { type: 'modtager',  text: 'Jord modtager fra Ild. {pron} passion n\u00e6rer din stabilitet.' },
  'METAL_JORD': { type: 'modtager',  text: 'Metal modtager fra Jord. Din klarhed b\u00e6res af {pron} omsorg.' },
  'VAND_METAL': { type: 'modtager',  text: 'Vand modtager fra Metal. {pron} skarphed frig\u00f8r din intuition.' },
  'VAND_ILD':   { type: 'udfordrer', text: 'Vand m\u00f8der Ild. Din ro kan d\u00e6mpe {pron} flamme \u2014 men ogs\u00e5 beskytte den.' },
  'TR\u00c6_JORD':   { type: 'udfordrer', text: 'Tr\u00e6 m\u00f8der Jord. Din v\u00e6kst kan ryste {pron} fundament \u2014 men ogs\u00e5 berige det.' },
  'ILD_METAL':  { type: 'udfordrer', text: 'Ild m\u00f8der Metal. Din varme kan smelte {pron} struktur \u2014 men ogs\u00e5 forl\u00f8se den.' },
  'JORD_VAND':  { type: 'udfordrer', text: 'Jord m\u00f8der Vand. Din omsorg kan blokere {pron} flow \u2014 men ogs\u00e5 give det retning.' },
  'METAL_TR\u00c6':  { type: 'udfordrer', text: 'Metal m\u00f8der Tr\u00e6. Din klarhed kan besk\u00e6re {pron} v\u00e6kst \u2014 men ogs\u00e5 forme den.' },
  'ILD_VAND':   { type: 'udfordres', text: 'Ild m\u00f8der Vand. {pron} dybde udfordrer din flamme \u2014 men kan ogs\u00e5 beskytte den.' },
  'JORD_TR\u00c6':   { type: 'udfordres', text: 'Jord m\u00f8der Tr\u00e6. {pron} v\u00e6kst udfordrer dit fundament \u2014 men beriger det.' },
  'METAL_ILD':  { type: 'udfordres', text: 'Metal m\u00f8der Ild. {pron} varme udfordrer din struktur \u2014 men forl\u00f8ser den.' },
  'VAND_JORD':  { type: 'udfordres', text: 'Vand m\u00f8der Jord. {pron} omsorg udfordrer dit flow \u2014 men giver det retning.' },
  'TR\u00c6_METAL':  { type: 'udfordres', text: 'Tr\u00e6 m\u00f8der Metal. {pron} klarhed udfordrer din v\u00e6kst \u2014 men former den.' },
  'VAND_VAND':  { type: 'spejler',   text: 'Vand m\u00f8der Vand. I deler den samme dybde \u2014 en stille forst\u00e5else uden ord.' },
  'TR\u00c6_TR\u00c6':   { type: 'spejler',   text: 'Tr\u00e6 m\u00f8der Tr\u00e6. I vokser side om side \u2014 to kr\u00e6fter med samme retning.' },
  'ILD_ILD':    { type: 'spejler',   text: 'Ild m\u00f8der Ild. Dobbelt flamme \u2014 dobbelt varme, men pas p\u00e5 udbr\u00e6ndthed.' },
  'JORD_JORD':  { type: 'spejler',   text: 'Jord m\u00f8der Jord. Dobbelt fundament \u2014 dyb tryghed, men husk bev\u00e6gelse.' },
  'METAL_METAL':{ type: 'spejler',   text: 'Metal m\u00f8der Metal. Dobbelt klarhed \u2014 essentielt, men husk varmen.' }
};

// ---- Cyklusser i Cyklusser: Cyklus-par tekster ----

const CYCLE_PAIR_TEXTS = {
  naerer: {
    'VAND_TR\u00c6': 'Dit indre vand n\u00e6rer v\u00e6ksten stille. Der er en str\u00f8m under overfladen der g\u00f8r det muligt for noget nyt at spire.',
    'TR\u00c6_ILD': 'V\u00e6ksten t\u00e6nder en flamme. Din fremadrettede kraft g\u00f8r det muligt at forbinde dig med gl\u00e6de og varme.',
    'ILD_JORD': 'Ildens varme modner jorden i dig. Din passion skaber substans, og det flygtige bliver til noget der kan b\u00e6re.',
    'JORD_METAL': 'Fra dit fundament kan du se klart. Jordens omsorg giver dig modet til at slippe det der ikke l\u00e6ngere tjener dig.',
    'METAL_VAND': 'N\u00e5r klarheden siver ned i dybden, finder du ro. Det du har sluppet g\u00f8r plads til stille visdom.'
  },
  udfordrer: {
    'VAND_ILD': 'Dybden m\u00f8der flammen. En del af dig s\u00f8ger stilhed mens en anden vil str\u00e5le. Begge har ret.',
    'TR\u00c6_JORD': 'V\u00e6ksten rusker i dit fundament. Noget nyt vil frem, men noget andet vil holde fast. Lyt til begge.',
    'ILD_METAL': 'Din varme udfordrer din klarhed. Passionen vil mere end strukturen kan rumme \u2014 men m\u00e5ske er det netop det der skal til.',
    'JORD_VAND': 'Din omsorg vil holde fast, men str\u00f8mmen vil videre. Sp\u00e6ndingen mellem tryghed og flow er din l\u00e6ring i dag.',
    'METAL_TR\u00c6': 'Klarheden besk\u00e6rer det nye. Du kan se hvad der er vigtigt \u2014 men m\u00e5ske ogs\u00e5 hvad der m\u00e5 gives slip p\u00e5 for at vokse.'
  },
  spejler: {
    'VAND': 'Dobbelt dybde. Intuitionen er st\u00e6rk, dr\u00f8mme og fornemmelser flyder frit. Giv dig selv lov til at v\u00e6re i det uden retning.',
    'TR\u00c6': 'Dobbelt v\u00e6kst. En kraftig fremadrettet energi \u2014 grib den, men find ogs\u00e5 \u00f8jeblikke af stilhed.',
    'ILD': 'Dobbelt flamme. Du str\u00e5ler og varmer alt omkring dig. M\u00e6rk hvorn\u00e5r det er nok \u2014 ogs\u00e5 ild har brug for br\u00e6ndstof.',
    'JORD': 'Dobbelt fundament. Dyb tryghed og n\u00e6ring. M\u00e6rk f\u00f8dderne. Men husk at ogs\u00e5 jord har brug for vand og lys.',
    'METAL': 'Dobbelt klarhed. Alt det uesssentielle falder v\u00e6k. Det kan f\u00f8les ensomt, men det er ogs\u00e5 en gave at se s\u00e5 klart.'
  }
};

// ---- Indre Klima: 5 klimakategorier ----

const INNER_CLIMATE = {
  fuld_resonans: {
    label: 'Fuld resonans',
    text: 'Tre eller flere af dine cyklusser deler samme element. Det er som en dyb akkord der klinger \u2014 alt i dig peger i samme retning.'
  },
  naerende_flow: {
    label: 'N\u00e6rende flow',
    text: 'Dine cyklusser n\u00e6rer hinanden i en naturlig str\u00f8m. Energien flyder let mellem dine lag. En god dag at f\u00f8lge impulsen.'
  },
  stille_balance: {
    label: 'Stille balance',
    text: 'Dine cyklusser holder hinanden i en rolig ligev\u00e6gt. Ingen kraft dominerer. Brug det til at m\u00e6rke efter hvad der virkelig kalder.'
  },
  kreativ_spaending: {
    label: 'Kreativ sp\u00e6nding',
    text: 'Der er sp\u00e6nding mellem dine cyklusser. Det er ikke konflikt \u2014 det er kreativ friktion. Noget i dig tr\u00e6kker i forskellige retninger, og netop det kan skabe noget nyt.'
  },
  indre_storm: {
    label: 'Indre storm',
    text: 'Flere af dine cyklusser udfordrer hinanden i dag. Det kan f\u00f8les uroligt indeni. M\u00e6rk det uden at d\u00f8mme det \u2014 stormen b\u00e6rer altid en gave med sig.'
  }
};

// ---- Dynamisk Tekst: Templates per element ----

const DYNAMISK_TEKST = {
  'VAND': {
    dominant: 'Vandet kalder dybt i dig lige nu. Det er måske derfor du mærker en trang til at trække dig. Det er ikke svaghed \u2014 det er {cyklusser} der taler med én stemme.',
    strong: 'Vandet er tydeligt i dig lige nu. {konkret} M\u00e6rk det \u2014 det er din intuition der har noget at sige.',
    present: 'Vandet flyder stille med dig i dag. {konkret} En invitation til at lytte indad.'
  },
  'TR\u00c6': {
    dominant: 'Tr\u00e6ets kraft fylder i dig lige nu. {cyklusser} peger alle mod v\u00e6kst. F\u00f8lg den retning \u2014 noget vil frem.',
    strong: 'Der er v\u00e6kstenergi i dig i dag. {konkret} Din krop og dine cyklusser vil fremad.',
    present: 'Tr\u00e6et spirer stille i baggrunden. {konkret} Selv en lille impuls mod noget nyt er v\u00e6rd at f\u00f8lge.'
  },
  'ILD': {
    dominant: 'Ilden br\u00e6nder! {cyklusser} peger mod forbindelse og varme. Din udstr\u00e5ling er st\u00e6rk \u2014 brug den.',
    strong: 'Ildens varme er tydelig i dag. {konkret} En god dag for vigtige samtaler og kreativt arbejde.',
    present: 'En stille varme ulmer i dig. {konkret} Nok til at minde dig om at gl\u00e6de er tilg\u00e6ngelig.'
  },
  'JORD': {
    dominant: 'Jorden b\u00e6rer dig dybt i dag. {cyklusser} samler sig om n\u00e6ring og fundament. Brug det til at skabe orden.',
    strong: 'Jordens stabilitet er tydelig. {konkret} Din omsorg r\u00e6kker langt i dag \u2014 start med dig selv.',
    present: 'Jorden er med dig som et stille fundament. {konkret} Du st\u00e5r mere solidt end du tror.'
  },
  'METAL': {
    dominant: 'Metallets klarhed gennemsyrer dig. {cyklusser} peger mod essens. Du ser tingene som de er \u2014 skarpt og rent.',
    strong: 'Klarheden er tilg\u00e6ngelig i dag. {konkret} En god dag for at give slip p\u00e5 det overfl\u00f8dige.',
    present: 'Metallet minder dig stille om det essentielle. {konkret} Hvad er det egentlig der betyder noget?'
  }
};

// ---- Relation Recommendations (per element) ----

const RELATION_RECOMMENDATIONS = {
  'VAND': {
    forDig: 'Vand-energien inviterer til stilhed og lytning. Giv dig selv lov til at tr\u00e6kke dig lidt tilbage \u2014 det er ikke afvisning, det er opladning.',
    forAnden: '{navn}s krop kalder p\u00e5 stilhed og ro lige nu. Giv {pron} plads til at tr\u00e6kke sig \u2014 det er ikke afvisning, men opladning. Vand-energien har brug for hvile.',
    sammen: 'M\u00e5ske kan I m\u00f8des i ro. En g\u00e5tur ved vandet, en stille aften. Vand har ikke brug for ord, men for tilstedev\u00e6relse.'
  },
  'TR\u00c6': {
    forDig: 'Tr\u00e6-energien giver dig drivkraft og retning. Pas p\u00e5 ikke at lade ut\u00e5lmodighed styre. Din v\u00e6kst beh\u00f8ver ikke andres tempo.',
    forAnden: '{navn} er i Tr\u00e6-energi \u2014 alt i {pron_obj} vil vokse og bev\u00e6ge sig fremad. Det er ikke ut\u00e5lmodighed, det er biologi. M\u00f8d {pron_obj} med bev\u00e6gelse, ikke modstand.',
    sammen: 'I kan dele visioner og planer. Tr\u00e6 trives med bev\u00e6gelse \u2014 g\u00f8r noget aktivt sammen, m\u00e5ske en udflugt eller et nyt projekt.'
  },
  'ILD': {
    forDig: 'Ild-energien g\u00f8r dig varm og n\u00e6rv\u00e6rende. Nyd forbindelsen, men husk at gl\u00e6den ikke afh\u00e6nger af andres bekr\u00e6ftelse.',
    forAnden: '{navn} br\u00e6nder med Ild-energi lige nu \u2014 {pron} er varm, n\u00e6rv\u00e6rende og s\u00f8ger forbindelse. M\u00f8d {pron_obj} der. Det kr\u00e6ver ikke store ord, bare tilstedev\u00e6relse.',
    sammen: 'Det er tid til fest, latter og n\u00e6rv\u00e6r. Ild elsker samv\u00e6r \u2014 invit\u00e9r til noget spontant, lad hjertet lede.'
  },
  'JORD': {
    forDig: 'Jord-energien n\u00e6rer din omsorg. Du m\u00e6rker m\u00e5ske en trang til at tage vare p\u00e5 andre. Husk ogs\u00e5 at n\u00e6re dig selv.',
    forAnden: '{navn} er i Jord-energi \u2014 {pron} har brug for tryghed og stabilitet. M\u00f8d {pron_obj} med omsorg, og lad {pron_obj} n\u00e6re dig tilbage. Jord giver mest, n\u00e5r den selv f\u00e5r ro.',
    sammen: 'I kan m\u00f8des over mad, samtale og tryghed. Jord finder hvile i det kendte \u2014 lav noget hjemme sammen.'
  },
  'METAL': {
    forDig: 'Metal-energien sk\u00e6rper din skelneevne. Du ser klarere hvad der tjener dig. Slip det overfl\u00f8dige med k\u00e6rlighed, ikke dom.',
    forAnden: '{navn} er i Metal-energi \u2014 {pron} ser klarere og sorterer i det overfl\u00f8dige. Det kan f\u00f8les som afstand, men det er klarhed. Giv {pron_obj} rum til det.',
    sammen: 'I kan m\u00f8des i \u00e6rlighed og klarhed. Metal t\u00e5ler sandhed \u2014 m\u00e5ske er det tid til en oprigtig samtale om det der betyder noget.'
  }
};

// ---- Share Templates (per relationstype) ----

const SHARE_TEMPLATES = {
  'partner': { tone: 'direkte, k\u00e6rlig', intro: 'Jeg har kigget p\u00e5 noget sp\u00e6ndende om vores livscyklusser.' },
  'datter': { tone: 'varm, anerkendende', intro: 'Der er noget, jeg gerne vil dele med dig om livets faser.' },
  's\u00f8n': { tone: 'varm, respektfuld', intro: 'Jeg faldt over noget om livsfaser, som jeg t\u00e6nkte, du m\u00e5ske ville finde interessant.' },
  'mor': { tone: 'respektfuld, reflekterende', intro: 'Mor, jeg har opdaget noget om vores livsfaser, som s\u00e6tter vores relation i et nyt lys.' },
  'veninde': { tone: '\u00e5ben, nysgerrig', intro: 'Jeg fandt noget om livsfaser, som fik mig til at t\u00e6nke p\u00e5 os.' },
  'anden': { tone: 'neutral, im\u00f8dekommende', intro: 'Jeg vil gerne dele noget med dig om livsfaser og vores energier.' }
};

// ---- To Rytmer: Samtaleåbnere ----

const TO_RYTMER_SAMTALE = {
  VAND: {
    spoerg: 'Hvad fylder mest for dig lige nu \u2014 og er der noget der presser, som du ikke har sagt h\u00f8jt?',
    sig: 'Jeg har v\u00e6ret der, hvor du er nu. Ikke pr\u00e6cis det samme sted, men i den slags sp\u00f8rgsm\u00e5l. Vil du h\u00f8re, hvad der hjalp mig?',
    sammen: 'Hvor er vi forskellige lige nu \u2014 og hvad kan vi l\u00e6re af det, i stedet for at k\u00e6mpe mod det?'
  },
  'TR\u00c6': {
    spoerg: 'Hvad dr\u00f8mmer du om at bygge lige nu \u2014 og f\u00f8ler du, at der er plads til det?',
    sig: 'Jeg kan m\u00e6rke, at du har brug for at bev\u00e6ge dig. Lad os finde ud af, hvordan vi giver plads til det sammen.',
    sammen: 'Hvad ville vi skabe, hvis vi turde dr\u00f8mme h\u00f8jt sammen \u2014 uden at v\u00e6re praktiske?'
  },
  ILD: {
    spoerg: 'Hvorn\u00e5r f\u00f8lte du dig sidst virkelig levende \u2014 og hvad holdt dig v\u00e5gen?',
    sig: 'Din energi smitter. Jeg kan m\u00e6rke den, ogs\u00e5 n\u00e5r du ikke siger noget. Hvad kan vi t\u00e6nde sammen?',
    sammen: 'Hvad ville vi g\u00f8re, hvis vi havde al den energi i verden \u2014 bare for en weekend?'
  },
  JORD: {
    spoerg: 'Hvad f\u00e5r dig til at f\u00f8le dig tryg lige nu \u2014 og er der noget du savner?',
    sig: 'Jeg ved godt, at du holder mange ting sammen. Lad mig holde noget af det for dig en stund.',
    sammen: 'Hvad ville det betyde for os, hvis vi holdt pause fra det hele \u2014 bare \u00e9n dag?'
  },
  METAL: {
    spoerg: 'Hvad har du sagt farvel til for nylig \u2014 og savner du det, eller er det en befrielse?',
    sig: 'Jeg kan se, at du sorterer. Det er modigt. Og det er okay, at det g\u00f8r lidt ondt.',
    sammen: 'Hvad er vi blevet enige om at beholde, som m\u00e5ske ikke l\u00e6ngere tjener os?'
  }
};

// ---- Tre Generationer: Forbindelsestekster ----

const TRE_GEN_FORBINDELSE_TEKST = {
  'default_arv': 'Der er en forbindelse mellem jer, som g\u00e5r dybere end ord. M\u00e6rk efter \u2014 hvad har du arvet, og hvad har du valgt selv?',
  'default_frihed': 'De to har en forbindelse, du ikke altid kan se. Lad dem m\u00f8des i deres eget tempo.',
  'default_fornyelse': 'Noget nyt vokser mellem jer. Det er hverken dit eller hendes \u2014 det er jeres.'
};

// ---- Cyklus Labels ----

const CYCLE_LABELS = {
  livsfase: 'Livsfase',
  aarstid: '\u00c5rstid',
  maaned: 'M\u00e5nedscyklus',
  ugedag: 'Ugedag',
  organur: 'Organur'
};

// ---- Export all data to window ----

window.LIVSFASE_DETAIL = LIVSFASE_DETAIL;
window.MENSTRUAL_WEEK_DATA = MENSTRUAL_WEEK_DATA;
window.MOON_CYCLE_DATA = MOON_CYCLE_DATA;
window.REFLEKSION_DATA = REFLEKSION_DATA;
window.KONTROL_TEKST = KONTROL_TEKST;
window.FORLOB_DATA = FORLOB_DATA;
window.HEALING_SOUNDS = HEALING_SOUNDS;
window.YIN_YOGA_FULL = YIN_YOGA_FULL;
window.INSIGHT_YOGA = INSIGHT_YOGA;
window.INSIGHT_FOOD = INSIGHT_FOOD;
window.INSIGHT_FOCUS = INSIGHT_FOCUS;
window.ELEMENT_INTERACTIONS = ELEMENT_INTERACTIONS;
window.CYCLE_PAIR_TEXTS = CYCLE_PAIR_TEXTS;
window.INNER_CLIMATE = INNER_CLIMATE;
window.DYNAMISK_TEKST = DYNAMISK_TEKST;
window.RELATION_RECOMMENDATIONS = RELATION_RECOMMENDATIONS;
window.SHARE_TEMPLATES = SHARE_TEMPLATES;
window.TO_RYTMER_SAMTALE = TO_RYTMER_SAMTALE;
window.TRE_GEN_FORBINDELSE_TEKST = TRE_GEN_FORBINDELSE_TEKST;
window.CYCLE_LABELS = CYCLE_LABELS;
