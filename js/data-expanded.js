/* ============================================================
   DATA-EXPANDED — Udvidet indhold til De 9 Livsfasers Energi
   Alle tekster i Isabelles stemme.
   ============================================================ */

// ---- BLOK 1: MORGEN_AFTEN_TEKST ----
// Forsiden viser forskellig tekst morgen vs. aften, per element.

const MORGEN_AFTEN_TEKST = {
  'VAND': {
    morgen: [
      'Morgenen h\u00f8rer til stilheden. Dit vand-element inviterer dig til at starte langsomt \u2014 lad verden vente lidt endnu.',
      'Nyrernes energi samler sig i de tidlige timer. M\u00e5ske en kop varmt vand, f\u00f8r du giver dig til dagens krav.',
      'Vand str\u00f8mmer nedad. Lad din morgen starte i f\u00f8dderne \u2014 m\u00e6rk gulvet, m\u00e6rk tyngden, m\u00e6rk at du er her.',
      'Din krop husker noget fra natten. Vand-elementet samler visdom i s\u00f8vnen \u2014 lyt efter den f\u00f8rste stille tanke, f\u00f8r dagens st\u00f8j tager over.',
      'Der er en r\u00f8 i dig i morges som h\u00f8rer til. Nyrerne har arbejdet i m\u00f8rket. Lad morgenen v\u00e6re blid \u2014 du beh\u00f8ver ikke v\u00e6re klar endnu.',
      'Noget i dig s\u00f8ger dybde allerede nu. M\u00e5ske er det nyrerne der minder dig om at denne dag ogs\u00e5 har en stille side. Find den.',
      'Morgenens f\u00f8rste \u00e5ndedrag er vandets. Dybt, langsomt, ned i maven. Start der \u2014 resten af dagen kan vente p\u00e5 den ro.',
      'Dit vand-element kender forskel p\u00e5 hastighed og retning. I morgen beh\u00f8ver du ikke l\u00f8be \u2014 bare vide hvorn\u00e5r du er klar.',
      'Bl\u00e6rens meridian l\u00f8ber langs ryggen. Str\u00e6k dig bl\u00f8dt bagud og m\u00e6rk morgenens f\u00f8rste bev\u00e6gelse finde vej ned gennem kroppen.',
      'Der er dage hvor stilheden er svaret. Dit vand-element ved det allerede. M\u00e5ske er dette s\u00e5dan en morgen.',
      'Nyrerne b\u00e6rer din essens. Giv dem en god morgen \u2014 varme f\u00f8dder, langsom start, ingen pludselige krav. Du fortjener den bl\u00f8dhed.',
      'Vandet i dig er t\u00e5lmodigt. Det venter p\u00e5 at du lytter. Morgenen er det bedste tidspunkt \u2014 f\u00f8r du glemmer at m\u00e6rke efter.',
      'M\u00e5ske v\u00e5gnede du med en dr\u00f8m eller en fornemmelse. Vand-elementet taler tydeligst i overgangen mellem s\u00f8vn og v\u00e5gen. Hvad sagde det?',
      'Den f\u00f8rste time s\u00e6tter tonen for hele dagen. Lad dit vand-element v\u00e6lge: langsomhed, varme, stilhed. Det er ikke dovenskab \u2014 det er klogt.',
      'Kroppen er klogere end planen. Dit vand-element m\u00e6rker hvad dagen kr\u00e6ver, f\u00f8r hovedet n\u00e5r at t\u00e6nke det. F\u00f8lg den f\u00f8rste fornemmelse.'
    ],
    aften: [
      'Aftenen er vandets naturlige tid. Lad tankerne synke som sten i en stille s\u00f8. De finder selv deres plads.',
      'Nyrerne hviler sig bedst mellem 17 og 19. Giv dig selv lov til at tr\u00e6kke dig \u2014 det er ikke dovenskab, det er biologi.',
      'M\u00f8rket h\u00f8rer til vand-elementet. Sluk lyset lidt tidligere i aften. Lad kroppen m\u00e6rke at dagen er ved at v\u00e6re omme.',
      'Natten n\u00e6rmer sig, og dit element finder hjem. Vandet s\u00f8ger altid det laveste punkt \u2014 lad dig selv synke ned i aftenen.',
      'Der er en form for tryghed i at lade dagen g\u00e5. Nyrerne samler essens i hvilen. Giv dem det de beder om: stilhed og varme.',
      'Aftenmaden beh\u00f8ver ikke v\u00e6re kompliceret. Noget varmt, noget salt, noget der minder kroppen om at den er holdt. Det er nok.',
      'M\u00e5ske m\u00e6rker du en uro i kroppen nu. Det er nyrernes m\u00e5de at sige: dagen var for meget. Tr\u00e6k dig tilbage uden d\u00e5rlig samvittighed.',
      'Vand-elementet renser i m\u00f8rket. Lad aftenen v\u00e6re den tid hvor du slipper det, der ikke l\u00e6ngere er dit at b\u00e6re.',
      'Et varmt fodbad kan \u00e6ndre hele aftenen. Nyrernes meridian begynder under foden \u2014 varmen stiger op og bringer ro til hele systemet.',
      'Du har givet nok i dag. Dit vand-element beder ikke om mere. Det beder om lov til at v\u00e6re stille, v\u00e6re dyb, v\u00e6re i fred.',
      'Stilheden mellem tankerne er ogs\u00e5 en form for visdom. Lad den v\u00e6re der i aften. Nyrerne lytter bedst n\u00e5r du holder op med at tale.',
      'Der er en s\u00f8 i dig der venter p\u00e5 at falde til ro. Lad de sidste timers b\u00f8lger l\u00e6gge sig. I morgen ser du klarere.',
      'Frygten kommer m\u00e5ske om aftenen. Det er nyrernes sprog. Den beh\u00f8ver ikke l\u00f8ses \u2014 bare m\u00e6rkes, holdes, b\u00e6res med bl\u00f8dhed.',
      'Lad sengetiden v\u00e6re en overgivelse, ikke en pligt. Dit vand-element hviler dybest n\u00e5r du giver dig selv lov til at forsvinde ind i m\u00f8rket.',
      'Kroppen har sin egen aftenbøn. Den hedder ud\u00e5nding. Lang, langsom, ned i b\u00e6kkenet. Nyrerne takker dig for den ro.'
    ]
  },
  'TR\u00c6': {
    morgen: [
      'Morgenen er tr\u00e6ets tid til at r\u00e6kke ud. Noget i dig vil fremad i dag \u2014 giv det plads, ogs\u00e5 f\u00f8r du har en plan.',
      'Leveren har arbejdet hele natten. Dit tr\u00e6-element v\u00e5gner med retning og appetit p\u00e5 dagen. F\u00f8lg den f\u00f8rste impuls.',
      'For\u00e5ret bor i din morgen lige nu. Str\u00e6k dig, \u00e5bn vinduet, lad den friske luft minde kroppen om at v\u00e6kst begynder med \u00e5ndedr\u00e6t.',
      'Galdebl\u00e6ren har truffet sine valg i nattens stilhed. M\u00e6rk efter \u2014 m\u00e5ske ved du allerede hvad der er vigtigt i dag.',
      'Tr\u00e6-energien presser opad som saft i en stamme. Giv den et udl\u00f8b \u2014 en morgengåtur, et str\u00e6k, en beslutning der har ventet.',
      'Der er en gr\u00f8n kraft i dig i morges. Leveren har samlet den. Brug den f\u00f8r middagen \u2014 det er der den er st\u00e6rkest.',
      'Din krop vil bev\u00e6ge sig. Tr\u00e6-elementet stagnerer af stilstand \u2014 selv fem minutters str\u00e6k \u00e5bner for dagens energi.',
      'Noget i dig ved allerede retningen. Leveren er din indre kompas. F\u00f8lg den \u2014 ogs\u00e5 n\u00e5r hovedet endnu ikke har en plan.',
      'Morgenens lys er tr\u00e6ets signal. \u00d8jnene \u00e5bner sig, kroppen str\u00e6kker sig \u2014 det er v\u00e6kstens f\u00f8rste bev\u00e6gelse. Lad den komme.',
      'Lever-meridianen l\u00f8ber langs kroppens sider. Str\u00e6k armene over hovedet og l\u00e6n til siden \u2014 det er tr\u00e6ets morgenritual.',
      'M\u00e5ske m\u00e6rker du en utålmodighed allerede nu. Det er leverens energi der siger: lad os komme i gang. Kanalis\u00e9r den med omhu.',
      'Der er forskel p\u00e5 at handle og at reagere. Dit tr\u00e6-element kan b\u00e5de. V\u00e6lg i morgen den handling der kommer fra klarhed, ikke fra uro.',
      'Naturen v\u00e5gner f\u00f8r vi g\u00f8r. Dit tr\u00e6-element m\u00e6rker det \u2014 det stille skift fra m\u00f8rke til lys. Der er en retning i det. F\u00f8lg den.',
      'Din frustration fra ig\u00e5r er m\u00e5ske v\u00e6k i morges. Leveren har arbejdet med den i natten. Se hvad der er tilbage \u2014 m\u00e5ske bare klarhed.',
      'Tr\u00e6et gror ikke af at t\u00e6nke p\u00e5 at gro. Det gror af lys, vand og retning. Giv dig selv det i morgen \u2014 resten sker af sig selv.'
    ],
    aften: [
      'Tr\u00e6et hviler ogs\u00e5. Leveren regenererer sig mellem kl. 1 og 3 \u2014 din aften er forberedelsen. Lad frustrationerne fra dagen falde som blade.',
      'Din tr\u00e6-energi har givet alt i dag. Nu m\u00e5 du lade grenene synke. En stille g\u00e5tur eller et par sider i en bog kan v\u00e6re nok.',
      'Galdebl\u00e6ren sorterer mellem 23 og 01. Giv den ro til at arbejde \u2014 l\u00e6g beslutningerne fra dig, de venter til i morgen.',
      'Din lever har b\u00e5ret dagens frustationer. Lad dem falde nu \u2014 som blade fra et tr\u00e6 i vinden. De beh\u00f8ver ikke samles op.',
      'Aftenen er ikke tr\u00e6ets naturlige tid. Det kan f\u00f8les som uro, en rastl\u00f8shed der ikke finder hvile. Pr\u00f8v at g\u00e5 \u2014 bare ti minutter.',
      'Galdebl\u00e6ren forbereder sig p\u00e5 nattens arbejde. Hj\u00e6lp den ved at l\u00e6gge de store valg v\u00e6k. I morgen ser tingene klarere ud.',
      'Der er en vis visdom i at lade v\u00e6ksten hvile. Tr\u00e6et mister bladene for at overleve vinteren. Hvad kan du give slip p\u00e5 i aften?',
      'Leveren elsker sur smag. En kop varm citronvand f\u00f8r sengetid st\u00f8tter nattens rensning og forbereder morgendagens retning.',
      'Din k\u00e6be holder m\u00e5ske fast. M\u00e6rk det. \u00c5bn munden bl\u00f8dt, lad underk\u00e6ben falde. Tr\u00e6-elementets sp\u00e6nding bor der \u2014 slip den f\u00f8r du sover.',
      'Tr\u00e6-energien s\u00f8ger retning, ogs\u00e5 om aftenen. Men retning kr\u00e6ver hvile. Lad natten v\u00e6re den jord dit tr\u00e6 sl\u00e5r rod i.',
      'Aftenen er besk\u00e6ring. Hvad gav mening i dag, og hvad var overfl\u00f8digt? Dit tr\u00e6-element har brug for den sortering f\u00f8r det sover.',
      'M\u00e5ske var der noget du ikke n\u00e5ede. Det er leverens frustration. L\u00e6g den i morgen-bunken \u2014 den har mere energi end aften-bunken.',
      'Nakken sp\u00e6nder, skuldrene kryber op. Det er stagneret tr\u00e6-energi. Ryst armene l\u00f8s, lad hovedet rulle. Fem sekunder kan v\u00e6re nok.',
      'Galdebl\u00e6ren tr\u00e6ffer de bedste beslutninger efter en god nats s\u00f8vn. Giv den den gave \u2014 g\u00e5 i seng f\u00f8r midnat, hvis du kan.',
      'Dit tr\u00e6-element har b\u00e5ret dig fremad hele dagen. Nu m\u00e5 det hvile. R\u00f8dderne arbejder i m\u00f8rket \u2014 stol p\u00e5 at v\u00e6ksten forts\u00e6tter.'
    ]
  },
  'ILD': {
    morgen: [
      'Ilden v\u00e5gner med gl\u00e6de. Dit hjerte \u00e5bner sig mod dagen \u2014 hvem skal du m\u00f8de, hvad skal du m\u00e6rke? Lad varmen brede sig.',
      'Morgenens lys n\u00e6rer dit ild-element. Hjertet arbejder bedst n\u00e5r du begynder dagen med noget der forbinder dig \u2014 en samtale, en ber\u00f8ring, et smil.',
      'Din ild br\u00e6nder klarest om morgenen. Brug de f\u00f8rste timer p\u00e5 det der virkelig betyder noget \u2014 forbindelse og n\u00e6rv\u00e6r f\u00f8r pligt.',
      'Hjertet er allerede v\u00e5gent. Det m\u00e6rkede lyset f\u00f8r du \u00e5bnede \u00f8jnene. Giv det noget smukt at v\u00e5gne til \u2014 musik, duft, et ansigt du elsker.',
      'Der er en varme i dig i morges der s\u00f8ger udad. Dit ild-element vil forbinde. F\u00f8lg den impuls \u2014 skriv til en veninde, ring til nogen, sig godmorgen h\u00f8jt.',
      'Shen \u2014 din bevidsthed \u2014 vender hjem med morgenens lys. M\u00e6rk at du er til stede. M\u00e6rk at du er her. Det er ildens gave: at v\u00e6re fuldt v\u00e5gen.',
      'Dit hjerte banker for nogen i dag. M\u00e5ske ved du allerede hvem. Ild-elementet kender forskellen p\u00e5 pligt og passion \u2014 v\u00e6lg passionen f\u00f8rst.',
      'Morgenens f\u00f8rste smil er gratis og virker som medicin. Dit ild-element ved det instinktivt \u2014 forbindelse heler, ogs\u00e5 den helt enkle.',
      'Tyndtarmens tid er mellem 13 og 15, men forberedelsen sker nu. \u00c6d noget der varmer \u2014 din ild har brug for br\u00e6ndstof, ikke bare koffein.',
      'Der er gl\u00e6de gemt i morgenens rutine, hvis du kigger efter. En kop te, solens vinkel, fuglesang. Dit ild-element m\u00e6rker sk\u00f8nheden f\u00f8r hovedet analyserer den.',
      'Dit hjerte har sovet roligt. Nu v\u00e5gner det med appetit p\u00e5 dagen. F\u00f8lg den appetit \u2014 den ved hvad du har brug for.',
      'Forbindelse er ikke noget du g\u00f8r. Det er noget du er. Dit ild-element minder dig om det hver morgen \u2014 n\u00e5r du m\u00e6rker verden v\u00e5gne.',
      'Ilden br\u00e6nder bedst med det rette br\u00e6ndstof. Giv dit hjerte noget n\u00e6rende i morgen \u2014 ikke nyheder og notifikationer, men n\u00e6rv\u00e6r og ro.',
      'Der er en varme i dine h\u00e6nder i morges. M\u00e6rk den. Det er hjerteenergien der str\u00f8mmer. Brug de h\u00e6nder til noget k\u00e6rligt i dag.',
      'Morgenens lys og dit ild-element taler samme sprog. Lad lyset komme ind \u2014 \u00e5bn gardinet, \u00e5bn \u00f8jnene, \u00e5bn hjertet. Dagen er din.'
    ],
    aften: [
      'Aftenen beder ilden om at d\u00e6mpe sig. Hjertet har brug for at falde til ro. M\u00e5ske en kop urtete, m\u00e5ske bare stilhed.',
      'Pericardium beskytter hjertet om aftenen. Lad sk\u00e6rmene sl\u00e6nge og giv dig selv lov til at v\u00e6re uden at pr\u00e6stere.',
      'Ilden k\u00f8ler naturligt ned med m\u00f8rket. F\u00f8lg den bev\u00e6gelse \u2014 t\u00e6nd et stearinlys i stedet for loftslampen. Lad hjertet hvile.',
      'Dit hjerte har v\u00e6ret \u00e5bent hele dagen. Nu m\u00e5 det lukke bl\u00f8dt i. Pericardiums tid er mellem 19 og 21 \u2014 lad den beskytte dig.',
      'Ilden s\u00f8ger gl\u00f8derne om aftenen. Ikke den h\u00f8je flamme, men den stille varme. Et t\u00e6ppe, en samtale, en n\u00e6rv\u00e6rende stilhed.',
      'M\u00e5ske f\u00f8ler du en uro i brystet nu. Det er hjerteild der endnu ikke har fundet ro. En h\u00e5nd p\u00e5 brystet, tre dybe \u00e5ndedrag \u2014 det hjælper.',
      'Den Tredobbelte Varmer arbejder mellem 21 og 23. Den regulerer din indre temperatur. Hj\u00e6lp den \u2014 ingen sk\u00e6rme, ingen stærke indtryk, bare ro.',
      'Aftenen er for de samtaler der g\u00e5r langsomt. Dit ild-element tr\u00e6nger til dybde, ikke hastighed. \u00c9n ærlig sætning er mere v\u00e6rd end hundrede hurtige.',
      'Hjertet b\u00e6rer dagens forbindelser med sig ind i aftenen. Nogle var n\u00e6rende, andre var for meget. Lad de tunge glide af \u2014 behold de varme.',
      'Stearinlysets flamme er dit ild-elements aftenbøn. T\u00e6nd \u00e9t og sid med det. Flammen danser som dine tanker \u2014 og finder til sidst ro.',
      'Gl\u00e6den er m\u00e5ske stille i aften. Det er ogs\u00e5 ild \u2014 bare den rolige slags. Den der varmer uden at br\u00e6nde. Lad den v\u00e6re nok.',
      'Dit hjerte husker alle det m\u00f8dte i dag. Giv det tid til at sortere. Hvem varmede dig? Hvem t\u00e6rede? Ilden ved det allerede.',
      'Forbindelsen med dig selv er ogs\u00e5 en forbindelse. Dit ild-element glemmer det sommetider. I aften handler det ikke om andre. Det handler om dig.',
      'Bitter smag k\u00f8ler hjerteild. En kop kamillte eller gr\u00f8n te er din aftenritual. Lad den k\u00f8le de dele af dig der stadig br\u00e6nder.',
      'Natten er ikke ildens tid, og det er okay. Lad hjertet give stafetten til nyrerne. Slip varmen, find dybden. Du m\u00e5 hvile nu.'
    ]
  },
  'JORD': {
    morgen: [
      'Mavens tid er mellem 7 og 9. Dit jord-element beder om en rolig morgen med varm mad \u2014 gr\u00f8d, te, noget der n\u00e6rer fra bunden.',
      'Jorden v\u00e5gner langsomt. Giv dig selv en stabil start \u2014 de samme ritualer, den samme rytme. Din krop elsker forudsigelighed.',
      'Miltens energi samler sig om morgenen. M\u00e6rk dine f\u00f8dder p\u00e5 gulvet og dit \u00e5ndedr\u00e6t i maven. Du er her. Det er nok.',
      'Morgenmaden er dit jord-elements vigtigste ritual. Noget varmt, noget n\u00e6rende, noget der siger til kroppen: du er holdt. Start der.',
      'Milten transformer bedst om formiddagen. Giv den noget at arbejde med \u2014 ikke sukker og kaffe, men \u00e6gte n\u00e6ring. Gr\u00f8d med kanel er guld.',
      'Dit jord-element v\u00e5gner med sp\u00f8rgsm\u00e5let: hvad har nogen brug for i dag? Men lad det f\u00f8rste svar v\u00e6re: hvad har JEG brug for?',
      'Der er en styrke i den rolige morgen. Mens andre haster, forankrer du. Dit jord-element ved at stabilitet er en superkraft.',
      'Morgenens ritualer er som r\u00f8dder. De holder dig fast n\u00e5r dagen rykker. Lad de f\u00f8rste tredive minutter v\u00e6re hellige \u2014 kun for dig.',
      'Maven er klar til at modtage. Dit jord-element beder om omsorg nu \u2014 ikke ydeevne, ikke plan, bare n\u00e6ring. F\u00f8d dig selv f\u00f8rst.',
      'Bekymringerne kan m\u00e6lde sig allerede i morges. M\u00e6rk dem, men lad v\u00e6re med at f\u00f8lge dem. Milten grublerer \u2014 det er dens vane, ikke din virkelighed.',
      'Der er tryghed i det kendte. Lad din morgenrutine v\u00e6re det anker der holder dig, ogs\u00e5 p\u00e5 dage hvor alt andet f\u00f8les usikkert.',
      'Dit jord-element kender forskel p\u00e5 sult og tomhed. M\u00e6rk efter: er det maven der kalder, eller er det noget andet? B\u00e5de fortjener svar.',
      'Morgenens varme te er en samtale med milten. Den siger: jeg er her, jeg n\u00e6rer dig, alt er som det skal v\u00e6re. Drik langsomt.',
      'Jordkvaliteten i dig s\u00f8ger fundament. I morgen handler det om at stå godt \u2014 f\u00f8dderne p\u00e5 gulvet, maden i maven, r\u00f8dderne i jorden.',
      'Du er fundamentet. For dig selv, for dem du elsker. Men ogs\u00e5 fundamenter har brug for vedligeholdelse. Start med at n\u00e6re dig selv i morgen.'
    ],
    aften: [
      'Jord-elementet s\u00f8ger hjem om aftenen. Lad bekymringerne ligge \u2014 de er der stadig i morgen, men lige nu m\u00e5 du hvile.',
      'Milten n\u00e6res af varme og ro. En let aftensmad, en blid samtale, en f\u00f8lelse af at h\u00f8re til. Det er din medicin i aften.',
      'Grubleriet kommer ofte med m\u00f8rket. L\u00e6g en h\u00e5nd p\u00e5 maven og m\u00e6rk varmen. Tankerne er bare tanker \u2014 de beh\u00f8ver ikke l\u00f8ses nu.',
      'Din milt har b\u00e5ret dagens bekymringer. Lad dem ligge nu \u2014 som sten du l\u00e6gger fra dig ved d\u00f8ren. De venter trofast til i morgen.',
      'Aftenmaden er jord-elementets afsked med dagen. Lad den v\u00e6re enkel og varm. Ikke r\u00e5 salat, ikke kolde rester \u2014 noget der varmer indefra.',
      'Jord-elementet s\u00f8ger tryghed om aftenen. Hvad f\u00e5r dig til at f\u00f8le dig hjemme? Lad det v\u00e6re dit aftenritual.',
      'Bekymringen er miltens m\u00e5de at sige: jeg har ikke nok information. Men om aftenen beh\u00f8ver du ikke vide. Du beh\u00f8ver bare v\u00e6re.',
      'En varm kop te med honning er miltens aftenbøn. S\u00f8d smag i sin naturlige form \u2014 den beroer systemet og inviterer s\u00f8vnen.',
      'Dit jord-element har n\u00e6ret alle i dag. Hvem n\u00e6rer dig i aften? Hvis svaret er ingen, s\u00e5 start med dig selv. Du fortjener den omsorg.',
      'Milten hviler bedst i faste rytmer. G\u00e5 i seng p\u00e5 samme tid, i den samme seng, med de samme ritualer. Det er ikke kedeligt \u2014 det er helende.',
      'Tankerne k\u00f8rer m\u00e5ske i ring. Det er miltens spiral. Afbryd den med kroppen: f\u00f8dderne p\u00e5 gulvet, h\u00e6nderne p\u00e5 maven, \u00e5ndedr\u00e6ttet i ro.',
      'Du har givet nok i dag. Dit jord-element glemmer sommetider at t\u00e6lle hvad det giver v\u00e6k. I aften handler det om at fylde op.',
      'Aftenen er hjemkomst. Dit jord-element kender den f\u00f8lelse \u2014 at l\u00e6gge n\u00f8glen, t\u00e6nde lyset, v\u00e6re der hvor tingene er kendte og trygge.',
      'Ford\u00f8jelsen s\u00e6nker sig om aftenen. Spis tidligt og let, s\u00e5 milten ikke skal arbejde mens du sover. Den har ogs\u00e5 brug for hvile.',
      'Jord-elementets smukkeste kvalitet er tryghed. Giv den til dig selv i aften. Du beh\u00f8ver ikke l\u00f8se noget, bare v\u00e6re der du er.'
    ]
  },
  'METAL': {
    morgen: [
      'Lungerne fylder sig i de tidlige timer. Dit metal-element inviterer til en dyb ind\u00e5nding \u2014 frisk luft, klart sind, en ren begyndelse.',
      'Metal-energien er sk\u00e6rpet om morgenen. Brug den klarhed til at m\u00e6rke efter: hvad er det vigtigste i dag? Lad resten v\u00e6re.',
      'Tyktarmens tid er mellem 5 og 7. Kroppen renser sig selv. Drik varmt vand, \u00e5bn vinduet, og lad morgenens luft minde dig om essens.',
      'Der er en renhed i morgenluften som dit metal-element genkender. \u00c5nd den ind \u2014 dybt, langsomt, bevidst. Det er din f\u00f8rste handling.',
      'Dit metal-element v\u00e5gner med sk\u00e6rpet blik. Brug de f\u00f8rste minutter p\u00e5 at se hvad der er v\u00e6sentligt. Resten er st\u00f8j.',
      'Lungerne samler morgenens Qi. En dyb ind\u00e5nding gennem n\u00e6sen, en lang ud\u00e5nding gennem munden. Tre gange. Din dag begynder rent.',
      'Morgenens klarhed er en gave fra dit metal-element. Verden er tydelig nu \u2014 f\u00f8r middagens kompromiser. Hvad ser du?',
      'Tyktarmen renser, lungerne fylder. Morgenens to metal-organer arbejder i harmoni. St\u00f8t dem med varmt vand og frisk luft.',
      'Der er noget smukt ved en ren begyndelse. Dit metal-element m\u00e6rker det \u2014 det \u00f8jeblik hvor alt endnu er muligt og intet er sp\u00e6ndt.',
      'Din perfektionisme kan v\u00e6re en byrde. Men om morgenen er den en styrke: den sk\u00e6rer igennem st\u00f8jen og finder essensen. Brug den klogt.',
      'Metal-elementet elsker struktur. Lad din morgen have en orden der bringer ro \u2014 ikke som kontrol, men som omsorg for dig selv.',
      'Huden v\u00e5gner med dig. Dit metal-element m\u00e6rker senget\u00f8jet, luften, vandets temperatur. Lad sanserne v\u00e6re din morgens f\u00f8rste forf\u00f8rer.',
      'Klarheden er st\u00e6rkest f\u00f8r f\u00f8lelserne tager over. Dit metal-element kan se livet som det er lige nu \u2014 brug den indsigt, f\u00f8r dagen farver den.',
      'Der er en stille kraft i at vide hvad man ikke beh\u00f8ver. Dit metal-element sorterer allerede. Lad det g\u00f8re sit arbejde \u2014 stol p\u00e5 den sans.',
      'Lungernes f\u00f8rste dybe \u00e5ndedrag s\u00e6tter tonen. Lad den v\u00e6re langsom og fuld. Hele dagen hviler p\u00e5 det fundament. Du er klar.'
    ],
    aften: [
      'Aftenen er metals tid til at give slip. Hvad kan du l\u00e6gge fra dig i aften? Ikke alt beh\u00f8ver f\u00f8lge med ind i natten.',
      'Lungerne holder p\u00e5 det v\u00e6sentlige og slipper det overfl\u00f8dige. Lad ud\u00e5ndingen v\u00e6re l\u00e6ngere end ind\u00e5ndingen. Det er kroppens m\u00e5de at l\u00f8sne.',
      'Metal-elementets sorg kan m\u00e6lde sig i de stille timer. Lad den v\u00e6re der uden at jage den v\u00e6k \u2014 den b\u00e6rer ogs\u00e5 en klarhed.',
      'Dit metal-element renser ogs\u00e5 om aftenen. Hvad bar du med dig i dag, som du kan l\u00e6gge fra dig nu? Lad ud\u00e5ndingen tage det.',
      'Lungerne tr\u00e6kker sig sammen i kulden og m\u00f8rket. Hold dem varme \u2014 en kop te, et t\u00e6ppe om skuldrene, en dyb og bevidst ind\u00e5nding.',
      'Sorgen er m\u00e5ske t\u00e6ttere p\u00e5 i aften. Det er naturligt for dit metal-element. Den beh\u00f8ver ikke forklares \u2014 bare v\u00e6re der.',
      'Aftenen er metals tid til revision. Ikke d\u00f8mmende, men klar: hvad var \u00e6gte i dag? Hvad var overfl\u00f8digt? Den sortering er en gave.',
      'Huden er metals sanseorgan. Giv den noget bl\u00f8dt i aften \u2014 en creme, en varm klud, en ber\u00f8ring. Den har brug for fugtighed og n\u00e6rhed.',
      'Dit metal-element kan holde fast for l\u00e6nge. Aftenen er en \u00f8velse i at slippe. Ikke fordi du m\u00e5, men fordi det er befriende.',
      'Lungernes kapacitet falder om aftenen. Kompens\u00e9r med dybde \u2014 f\u00e6rre \u00e5ndedrag, men dybere. M\u00e6rk brystkassen udvide sig i stilheden.',
      'M\u00e5ske f\u00f8ler du dig alene i aften. Metal-elementets klarhed kan isolere. Men ensomheden b\u00e6rer ogs\u00e5 en stilhed der er v\u00e6rd at lytte til.',
      'Perfektionismen hviler aldrig, men du m\u00e5 gerne. Dit metal-element beh\u00f8ver ikke l\u00f8se alt i dag. Noget kan vente. Noget skal vente.',
      'En lang ud\u00e5nding er metals aftenbøn. Fire t\u00e6l ind, syv t\u00e6l hold, otte t\u00e6l ud. Gentag tre gange. Lad natten overtage.',
      'Aftenen reducerer. Den skr\u00e6ller laget v\u00e6k \u2014 og det der st\u00e5r tilbage er det v\u00e6sentlige. Dit metal-element kender den \u00f8velse. Stol p\u00e5 den.',
      'Du beh\u00f8ver ikke v\u00e6re stærk i aften. Metal-elementets h\u00e5rdhed er en maske \u2014 under den er der en s\u00e5rbarhed der har brug for luft. Giv den plads.'
    ]
  }
};

// ---- BLOK 2: ELEMENT_FASE_DAGLIG ----
// Daglig l\u00e6sning der kombinerer brugerens element + livsfase.

const ELEMENT_FASE_DAGLIG = {
  'VAND': {
    1: 'Du er i Fase 1s vand, og dit dominerende element er ogs\u00e5 vand. Dobbelt dybde. Din krop husker stadig den allerf\u00f8rste stilhed \u2014 den tid hvor alt bare var sansning og n\u00e6rhed. Lyt til den i dag.',
    2: 'Vand og Fase 2s begyndende v\u00e6kst. Noget nyt vil gerne spire i dig, men det har brug for dybde f\u00f8rst. Lad nysgerrigheden komme fra stilheden.',
    3: 'Vand-elementet i opv\u00e5gningens fase. Der er en stille str\u00f8m under den st\u00f8jende overflade. M\u00e5ske er din styrke ikke at r\u00e5be h\u00f8jest, men at lytte dybest. Stol p\u00e5 det du m\u00e6rker, ogs\u00e5 n\u00e5r ordene mangler.',
    4: 'Vand i blomstringens tid. Hvor andre br\u00e6nder fremad, str\u00f8mmer du dybt. Din intuition er sk\u00e6rpet i disse \u00e5r \u2014 brug den som kompas n\u00e5r valg presser sig p\u00e5. Du beh\u00f8ver ikke vide alt, bare m\u00e6rke retningen.',
    5: 'Vand-elementet i ildens fase. Du m\u00e6rker m\u00e5ske en sp\u00e6nding mellem behovet for stilhed og livets krav om handling. B\u00e5de kan v\u00e6re sandt. Find de sm\u00e5 lommer af ro midt i intensiteten \u2014 de er din redning.',
    6: 'Vand og jordens modning. Noget dybt i dig s\u00f8ger fundament. Nyrernes visdom hviler i dig som grundvand \u2014 stille, men altid til stede. M\u00e6rk den ro der kommer af at vide, at du allerede har det du har brug for.',
    7: 'Vand i forvandlingens fase. Du kender allerede d\u00f8den og genf\u00f8dslen \u2014 dit element har altid vidst at alt er cyklisk. Lad denne overgang v\u00e6re som tidevand: naturlig, uundg\u00e5elig, og i sidste ende befriende.',
    8: 'Vand-elementet i essensens tid. Du n\u00e6rmer dig dit elements kerne. Stilheden, visdommen og den dybe hvile er ikke l\u00e6ngere noget du s\u00f8ger \u2014 det er noget du er. Lad den erkendelse synke ind.',
    9: 'Dobbelt vand i livets fuldendelse. Alt vender hjem. Din dybde, din intuition, din evne til at rumme stilhed \u2014 det er gaver, der kun vokser med tiden. Du er kilden og havet p\u00e5 \u00e9n gang.'
  },
  'TR\u00c6': {
    1: 'Tr\u00e6-energi i vandets fase. Noget i dig vil allerede vokse, selv i den tidligste begyndelse. Der er en fremadrettet kraft i dig der s\u00f8ger lyset \u2014 lad den spire langsomt, uden at forcere.',
    2: 'Tr\u00e6 og Fase 2s udforskning. Dit element er i sit es \u2014 nysgerrig, s\u00f8gende, altid med retning. Verden \u00e5bner sig for dig lige nu. F\u00f8lg det der tr\u00e6kker, ogs\u00e5 n\u00e5r du ikke kan forklare hvorfor.',
    3: 'Dobbelt tr\u00e6-energi i opv\u00e5gningens fase. Kraften i dig er enorm. Brug den med omhu \u2014 din vrede er v\u00e6kst der s\u00f8ger retning, og din frustration er et tegn p\u00e5 at du vil mere end rammerne tillader.',
    4: 'Tr\u00e6 i blomstringens tid. Du st\u00e5r midt i din fulde kraft \u2014 retning, ambition, handlekraft. Leveren driver dig fremad med en energi der kan flytte bjerge. Husk ogs\u00e5 r\u00f8dderne. De har brug for vand.',
    5: 'Tr\u00e6-element i ildens fase. Din handlekraft m\u00f8der livets varme. Du kan let g\u00f8re for meget, for hurtigt. S\u00e6nk tempoet en anelse \u2014 tr\u00e6et gror bedst n\u00e5r det ogs\u00e5 hviler om vinteren.',
    6: 'Tr\u00e6 og jordens modning. Din drift fremad m\u00f8der en invitation til at sl\u00e5 rod. M\u00e5ske handler det ikke om at n\u00e5 mere, men om at st\u00e5 fastere. Fleksibilitet er tr\u00e6ets styrke \u2014 brug den nu.',
    7: 'Tr\u00e6-energi i forvandlingens fase. Nogle grene m\u00e5 sk\u00e6res v\u00e6k for at nye kan gro. Det f\u00f8les m\u00e5ske som tab, men det er besk\u00e6ring. Dit tr\u00e6 bliver st\u00e6rkere af det.',
    8: 'Tr\u00e6 i essensens tid. Den v\u00e6kst du har givet plads til hele livet, b\u00e6rer nu frugt. M\u00e5ske ikke den slags du forventede \u2014 men se efter. Der er visdom i det du har skabt.',
    9: 'Tr\u00e6-element i fuldendelsens fase. Tr\u00e6et har v\u00e6ret fr\u00f8, spire, stamme og krone. Nu er det ogs\u00e5 r\u00f8dder \u2014 dybt forankret, stille og st\u00e6rkt. Din livskraft er ikke forsvundet. Den har fundet et roligere udtryk.'
  },
  'ILD': {
    1: 'Ild-element i vandets fase. En lille flamme brænder allerede i dig \u2014 varme, forbindelse, gl\u00e6de. Selv i det stille og tidlige er din ild til stede. Lad den varme dig indefra uden at br\u00e6nde.',
    2: 'Ild og Fase 2s udforskning. Din varme g\u00f8r dig til en naturlig forbinder. Du m\u00e6rker andres f\u00f8lelser tydeligt \u2014 det er en gave der kr\u00e6ver beskyttelse. Husk at din ild ogs\u00e5 har brug for br\u00e6ndstof.',
    3: 'Ild i opv\u00e5gningens fase. Passionen br\u00e6nder i dig med fuld styrke. Du vil m\u00e6rke alt, dele alt, forbinde med alle. Det er smukt og udmattende. Lad hjertet hvile ind imellem.',
    4: 'Dobbelt ild-energi. Blomstering og forbindelse smelter sammen. Dit hjerte er \u00e5bent som en sommermark \u2014 varmt, generøst, modtageligt. Men pas p\u00e5 at ilden ikke br\u00e6nder hurtigere end du kan n\u00e6re den.',
    5: 'Ild-element i sin egen fase. Alt i dig synger den samme tone \u2014 forbindelse, gl\u00e6de, varme. Brug den kraft til det der virkelig betyder noget. Og husk: selv solen g\u00e5r ned for at lade op.',
    6: 'Ild i jordens modning. Din varme m\u00f8der et behov for fundament. M\u00e5ske handler det om at lade ilden br\u00e6nde langsommere og dybere \u2014 ikke som et bl\u00e5lys, men som gløder der holder hele natten.',
    7: 'Ild-energi i forvandlingens fase. Flammen \u00e6ndrer karakter. Den br\u00e6nder m\u00e5ske ikke s\u00e5 h\u00f8jt l\u00e6ngere, men varmen er dybere. Din forbindelsesevne er modnere nu \u2014 og mere v\u00e6rdifuld end nogensinde.',
    8: 'Ild i essensens tid. Hjertet har b\u00e5ret s\u00e5 meget \u2014 gl\u00e6de og sorg, forbindelse og tab. Nu kender det forskellen p\u00e5 det v\u00e6sentlige og det overfl\u00f8dige. Den viden er ren guld.',
    9: 'Ild-element i fuldendelsens fase. Din varme er blevet til en indre ild der ikke beh\u00f8ver ydre br\u00e6ndstof. Den n\u00e6rer sig selv. Du er forbindelsen \u2014 mellem generationer, mellem mennesker, mellem det der var og det der kommer.'
  },
  'JORD': {
    1: 'Jord-element i vandets fase. Du s\u00f8ger allerede tryghed og fundament \u2014 det er jordens natur. I de tidlige \u00e5r handler det om at finde det faste under f\u00f8dderne. M\u00e6rk at jorden b\u00e6rer dig, ogs\u00e5 n\u00e5r alt f\u00f8les flydende.',
    2: 'Jord og Fase 2s udforskning. Din omsorg for andre viser sig allerede. Du er den der samler gruppen, der deler sin madpakke, der husker. Husk ogs\u00e5 at give til dig selv.',
    3: 'Jord-energi i opv\u00e5gningens fase. Mens andre stormer fremad, s\u00f8ger du stabilitet. Det er ikke langsomhed \u2014 det er visdom. Din evne til at skabe tryghed er en styrke, ogs\u00e5 i kaos.',
    4: 'Jord i blomstringens tid. Du bygger fundament \u2014 hjem, karriere, relationer. Alt i dig vil skabe noget b\u00e6redygtigt. Milten n\u00e6rer langsomt og st\u00f8t. Stol p\u00e5 den rytme, ogs\u00e5 n\u00e5r verden presses.',
    5: 'Jord-element i ildens fase. Din stabilitet er uvurderlig midt i intensiteten. Du er den der holder sammen p\u00e5 tingene n\u00e5r andre flammer op. Men hvem holder sammen p\u00e5 dig? Det sp\u00f8rgsm\u00e5l fortjener et svar.',
    6: 'Dobbelt jord-energi. Modning og fundament smelter sammen. Du er i dit elements hjemsted \u2014 rodf\u00e6stet, n\u00e6rende, stabil. M\u00e6rk den styrke. Og m\u00e6rk ogs\u00e5 bekymringens skygge \u2014 den har brug for lys.',
    7: 'Jord i forvandlingens fase. Fundamentet ryster m\u00e5ske, og det kan v\u00e6re skr\u00e6mmende for dig der elsker stabilitet. Men jorden er stadig under dig. Den er bare ved at finde en ny form.',
    8: 'Jord-element i essensens tid. \u00c5revis af omsorg og n\u00e6ring har skabt noget dybt i dig. Din evne til at holde rum for andre er modnere nu. M\u00e6rk ogs\u00e5 den n\u00e6ring du kan give dig selv.',
    9: 'Jord i fuldendelsens fase. Du er blevet til selve fundamentet \u2014 ikke bare for dig selv, men for dem der kommer efter. Din omsorg, din stabilitet og din varme er en arv der b\u00e6rer videre.'
  },
  'METAL': {
    1: 'Metal-element i vandets fase. Klarhed og dybde m\u00f8des i dig. Allerede fra begyndelsen ser du essensen i tingene \u2014 det v\u00e6sentlige, det rene, det der virkelig t\u00e6ller. Lad den evne v\u00e6re en gave, ikke en byrde.',
    2: 'Metal og Fase 2s udforskning. Du m\u00e6rker m\u00e5ske en sp\u00e6nding mellem lysten til at udforske og behovet for orden. Begge er sande. Lad nysgerrigheden f\u00f8re, men tag din klarhed med p\u00e5 rejsen.',
    3: 'Metal-energi i opv\u00e5gningens fase. Mens andre br\u00e6nder med tr\u00e6ets vrede, s\u00f8ger du mening og struktur. Din evne til at se hvad der er v\u00e6sentligt er en styrke \u2014 ogs\u00e5 n\u00e5r den f\u00f8les som ensomhed.',
    4: 'Metal i blomstringens tid. Du sorterer naturligt \u2014 mennesker, muligheder, retninger. Lungerne skelner det rene fra det urene. Stol p\u00e5 den sans. Ikke alt der glimter er v\u00e6rd at f\u00f8lge.',
    5: 'Metal-element i ildens fase. Din klarhed er en modv\u00e6gt til intensiteten. Mens andre l\u00f8ber hurtigere, standser du og sp\u00f8rger: er det her v\u00e6sentligt? Den evne er sjælden og v\u00e6rdifuld.',
    6: 'Metal og jordens modning. Klarhed m\u00f8der fundament. Du finder essensen i det levede liv \u2014 hvad der var \u00e6gte, hvad der kan sl\u00e6nges. Det er metals naturlige bev\u00e6gelse, og den er smuk.',
    7: 'Dobbelt metal-energi. Forvandling og essens smelter sammen. Du er i dit elements hjemsted \u2014 klar, ren, til tider sk\u00e6rende. Sorgen er m\u00e5ske n\u00e6rmere overfladen nu. Lad den v\u00e6re. Den renser.',
    8: 'Metal i essensens tid. Alt det overfl\u00f8dige er ved at falde v\u00e6k. Tilbage st\u00e5r det du virkelig er \u2014 det der ikke kan tages fra dig. Der er en frihed i den reduktion, ogs\u00e5 n\u00e5r den g\u00f8r ondt.',
    9: 'Metal-element i fuldendelsens fase. Du ser klart nu. Livets essens ligger \u00e5ben for dig som en stille eftermiddag i november \u2014 k\u00f8lig luft, klart lys, kun det n\u00f8dvendige. Det er nok. Det er smukt.'
  }
};

// ---- BLOK 3: TEMA_DYBDE ----
// Dybe, substansielle tekster om livstemaer set gennem hvert elements linse.

const TEMA_DYBDE = {
  overgangsalder: {
    'VAND': 'Overgangsalderen i vand-elementet handler om nyrernes essens \u2014 den Jing der har b\u00e5ret dig hele livet. I kinesisk medicin betragtes menopausen som en naturlig aftagen af Kidney Yin, og det kan m\u00e6rkes som natursved, t\u00f8rhed i huden og en indre uro der ikke har noget klart objekt.\n\nDet er vigtigt at forst\u00e5 at dette ikke er et forfald. Nyrernes essens \u00e6ndrer blot udtryk. Den energi der f\u00f8r gik til menstruation og potentiel fertilitet, frigives nu til noget andet \u2014 visdom, kreativitet, en dybere forbindelse med dig selv. Mange kvinder beskriver det som en langsom indadvendthed, en l\u00e6ngsel efter stilhed der kan f\u00f8les forvirrende i en verden der kr\u00e6ver handling.\n\nKroppen taler vandets sprog: den beder om hvile, om varme, om at blive b\u00e5ret. Du m\u00e6rker det m\u00e5ske som tr\u00e6thed i l\u00e6nden, som kolde f\u00f8dder om aftenen, som en s\u00f8vn der ikke helt reparerer. Nyrerne har brug for st\u00f8tte nu \u2014 varme f\u00f8devarer, blide \u00f8velser og frem for alt en accept af at tempoet m\u00e5 s\u00e6nkes.\n\nM\u00e5ske kan du m\u00e6rke en ny form for intuition i denne tid. Vand-elementets gave er dyb viden \u2014 den slags der ikke kommer fra b\u00f8ger men fra \u00e5rtiers erfaring med at lytte indad. Hvad ved din krop, som dit hoved endnu ikke har h\u00f8rt?',
    'TR\u00c6': 'Overgangsalderen i tr\u00e6-elementet handler om Lever Qi-stagnation \u2014 den frie energi der pludselig sidder fast. Du m\u00e6rker det m\u00e5ske som irritabilitet uden \u00e5rsag, hovedpine der kommer i b\u00f8lger, eller hum\u00f8rsvingninger der minder om puberteten.\n\nLeveren styrer det frie flow af Qi, og n\u00e5r hormonniveauerne svinger, p\u00e5virker det leverens evne til at holde energien i bev\u00e6gelse. Resultatet kan v\u00e6re en frustration der f\u00f8les uforholdsmæssig stor \u2014 som en for\u00e5rsstorm der ikke kan finde udl\u00f8b.\n\nKroppen fortæller dig noget vigtigt: den har brug for bev\u00e6gelse. Ikke h\u00e5rd tr\u00e6ning n\u00f8dvendigvis, men flow. G\u00e5ture, dans, yoga der \u00e5bner siderne af kroppen. Tr\u00e6-elementet stagnerer af stilstand, og det g\u00e6lder dobbelt i overgangsalderen. Sur smag st\u00f8tter leveren \u2014 citronsaft i varmt vand om morgenen, fermenterede gr\u00f8ntsager, friske urter.\n\nMen der er ogs\u00e5 en dybere invitation her. Tr\u00e6-elementets overgangsalder kan v\u00e6re en tid hvor du endelig giver dig selv lov til at v\u00e6re vred p\u00e5 de rigtige ting. Den vrede der m\u00e5ske har ligget undertrykt i \u00e5rtier \u2014 over kompromiser, over andres behov der altid kom f\u00f8rst \u2014 den banker p\u00e5 nu. Og m\u00e5ske er det p\u00e5 tide at \u00e5bne d\u00f8ren. Hvad har du ventet med at sige?',
    'ILD': 'Overgangsalderen i ild-elementet handler om hjerteild der stiger ukontrolleret. N\u00e5r Yin aftager, mister kroppen sin evne til at k\u00f8le ilden, og resultatet er hedeture, hjertebanken, s\u00f8vnl\u00f8shed og en indre uro der kan f\u00f8les som angst.\n\nHjertet er i kinesisk medicin s\u00e6det for Shen \u2014 vores bevidsthed og evne til at v\u00e6re til stede. N\u00e5r ilden forstyrres, kan Shen blive urolig, og det viser sig som tankemylder, en f\u00f8lelse af at v\u00e6re afkoblet fra sig selv eller en s\u00e5rbarhed der overrasker.\n\nKroppen beder om k\u00f8ling og ro. Bitter smag \u2014 gr\u00f8n te, l\u00f8vetand, m\u00f8rke bladgr\u00f8ntsager \u2014 k\u00f8ler hjerteild. Vandmelon, p\u00e6re og agurk bringer fugtighed til et system der t\u00f8rster. Undg\u00e5 alkohol, st\u00e6rke krydderier og koffein sent p\u00e5 dagen. De fodrer ilden p\u00e5 et tidspunkt hvor den har brug for at falde til ro.\n\nMen der er ogs\u00e5 noget dybt smukt i denne overgang. Ilden renser. Den br\u00e6nder det overfl\u00f8dige v\u00e6k og efterlader det \u00e6gte. Mange kvinder oplever at deres forbindelser bliver dybere, mere \u00e6rlige, mere n\u00e6rv\u00e6rende i denne tid. Hjertet lukker af for det uv\u00e6sentlige og \u00e5bner sig for det der virkelig varmer. Hvad br\u00e6nder du stadig for \u2014 og hvad kan du lade slukke?',
    'JORD': 'Overgangsalderen i jord-elementet handler om Milt Qi-mangel \u2014 den grundl\u00e6ggende n\u00e6ringskraft der svigter. Du m\u00e6rker det som tr\u00e6thed der ikke forsvinder med s\u00f8vn, som v\u00e6gt\u00e6ndringer kroppen slet ikke har bedt om, og som en ford\u00f8jelse der pludselig er mere f\u00f8lsom.\n\nMilten er ansvarlig for at omdanne det vi spiser til energi, og n\u00e5r den sv\u00e6kkes, hober fugt sig op. I overgangsalderen kan det vise sig som h\u00e6vede led, v\u00e6skeophobning, en tung fornemmelse i kroppen og en mental t\u00e5ge der g\u00f8r det sv\u00e6rt at t\u00e6nke klart.\n\nKroppen beder om varme og rytme. Kogt, varm mad i regelm\u00e6ssige m\u00e5ltider. Undg\u00e5 r\u00e5 kold mad, mælkeprodukter i store m\u00e6ngder og for meget sukker \u2014 alt det skaber fugt i et system der allerede k\u00e6mper. S\u00f8d smag i sin naturlige form \u2014 s\u00f8de kartofler, gr\u00e6skar, dadler \u2014 n\u00e6rer milten.\n\nDen f\u00f8lelsesm\u00e6ssige side er bekymring. Jord-elementets skygge er overtænkning, og i overgangsalderen kan grubleriet intensiveres. Tankerne k\u00f8rer i ring: er jeg nok? Gj\u00f8r jeg nok? Det er vigtigt at vide at dette er miltens ubalance \u2014 ikke sandheden om dit liv. Hvad ville der ske, hvis du lagde bekymringerne fra dig bare for en time?',
    'METAL': 'Overgangsalderen i metal-elementet handler om Lunge Qi der falder \u2014 den livgivende \u00e5nde der bliver kortere, den hud der bliver t\u00f8rrere, den f\u00f8lelsesm\u00e6ssige s\u00e5rbarhed der overrasker.\n\nLungerne styrer huden, og mange kvinder m\u00e6rker forandringen her f\u00f8rst: t\u00f8rhed, rynker, en f\u00f8lsomhed der er ny. Tyktarmen, lungernes partner, kan ogs\u00e5 v\u00e6re p\u00e5virket \u2014 forst\u00f8ppelse, oppustethed, en ford\u00f8jelse der f\u00f8les langsom.\n\nMetal-elementets f\u00f8lelse er sorg, og i overgangsalderen kan den sorg tage mange former. Sorgen over ungdommens tab, over den krop man kendte, over de muligheder der ikke l\u00e6ngere er \u00e5bne. Det er en naturlig del af overgangen, og den fortjener at blive m\u00f8dt med respekt.\n\nKroppen beder om fugtighed og n\u00e6ring. P\u00e6rer, honning, mandler og sesamfr\u00f8 fugte lungerne. Varme supper og simreretter n\u00e6rer uden at belaste. Dyb vejrtr\u00e6kning er m\u00e5ske den vigtigste \u00f8velse af alle \u2014 den n\u00e6rer lungerne direkte og bringer ro til nervesystemet.\n\nMen metals gave i denne overgang er klarhed. N\u00e5r det overfl\u00f8dige falder v\u00e6k, st\u00e5r essensen tilbage. Hvad er virkelig vigtigt for dig nu? Hvad kan du give slip p\u00e5 \u2014 ikke fordi du m\u00e5, men fordi det ikke l\u00e6ngere er dit at b\u00e6re?'
  },

  graviditet_og_fertilitet: {
    'VAND': 'Fertilitet i vand-elementet handler om Jing \u2014 den livsessens vi arver fra vores forældre og som er selve grundlaget for at skabe nyt liv. I kinesisk medicin er Kidney Yang roden for fertilitet, den varme der t\u00e6nder livets gnist.\n\nHvis du \u00f8nsker at blive gravid, er nyrerne det f\u00f8rste sted at kigge. Kolde f\u00f8dder, tr\u00e6thed i l\u00e6nden, hyppig vandladning og en generel f\u00f8lelse af kulde kan v\u00e6re tegn p\u00e5 at Kidney Yang har brug for st\u00f8tte. Varme f\u00f8devarer, valn\u00f8dder, sorte sesamfr\u00f8 og knoglesuppe n\u00e6rer essensen. Undg\u00e5 overanstrengelse \u2014 Jing genopbygges i hvilen.\n\nMen fertilitet er ikke kun et sp\u00f8rgsm\u00e5l om b\u00f8rn. Kreativitet, nye projekter, nye begyndelser \u2014 alt det kr\u00e6ver ogs\u00e5 Jing. Vand-elementet l\u00e6rer os at al skabelse begynder i dybden, i stilheden, i det usete. Som et fr\u00f8 i m\u00f8rk jord.\n\nHvis vejen til graviditet er sv\u00e6r, beder din krop m\u00e5ske om mere hvile, mere varme, mere t\u00e5lmodighed. Det er ikke et svigt \u2014 det er kroppen der fortæller dig hvad den har brug for. Hvad sker der, n\u00e5r du stopper med at presse og begynder at lytte?',
    'TR\u00c6': 'Fertilitet i tr\u00e6-elementet handler om fri bev\u00e6gelse af Qi til livmoderen. Leveren sikrer at blodet str\u00f8mmer frit, og n\u00e5r Lever Qi stagnerer, kan det p\u00e5virke menstruationens regularitet og dermed fertiliteten.\n\nEn uregelmæssig cyklus, PMS med irritabilitet, smerter der sp\u00e6nder p\u00e5 tv\u00e6rs af underlivet \u2014 det er ofte tegn p\u00e5 at leveren har brug for st\u00f8tte. Bev\u00e6gelse er n\u00f8glen: g\u00e5ture, yoga, dans. Alt der f\u00e5r kroppen til at flyde. Sur smag st\u00f8tter leveren \u2014 citrus, fermenterede gr\u00f8ntsager, \u00e6blecidereddike.\n\nStress er leverens st\u00f8rste fjende, og det g\u00e6lder i dobbelt grad n\u00e5r man fors\u00f8ger at blive gravid. Presset for at det skal lykkes kan i sig selv skabe den stagnation der g\u00f8r det sv\u00e6rere. Det er en grumsom ironi, men ogs\u00e5 en invitation til at \u00f8ve sig i at give slip.\n\nHvis b\u00f8rn ikke er en del af din vej, handler tr\u00e6-elementets fertilitet om at lade din kreativitet vokse frit. Hvad vil du skabe? Hvad er det projekt, den idé, den dr\u00f8m der banker p\u00e5? Leveren vil fremad \u2014 lad den finde sin retning.',
    'ILD': 'Fertilitet i ild-elementet handler om hjertet og livmoderen, forbundet gennem Bao Mai \u2014 den kanal der i kinesisk medicin knytter hjertets emotionelle liv til reproduktionen. Gl\u00e6de og k\u00e6rlighed er bogstaveligt talt n\u00e6rende kr\u00e6fter for fertiliteten.\n\nN\u00e5r hjertet er \u00e5bent og glad, str\u00f8mmer blodet frit til livmoderen. N\u00e5r hjertet er lukket af stress, sorg eller angst, p\u00e5virkes ogs\u00e5 den forbindelse. Det er ikke magi \u2014 det er fysiologi set gennem kinesisk medicinsk optik.\n\nHvis du fors\u00f8ger at blive gravid, n\u00e6r dit hjerte. G\u00f8r ting der g\u00f8r dig glad \u2014 ikke som distration, men som medicin. Latter, n\u00e6rhed, kreativt udtryk, forbindelse med mennesker du elsker. Det lyder enkelt, men i en tid med fertilitetsbehandlinger og skemaer kan gl\u00e6den let drukne i bekymring.\n\nFor dig der ikke s\u00f8ger b\u00f8rn, er ild-elementets fertilitet evnen til at forbinde. At skabe varme i verden, at antænde noget i andre, at bringe gl\u00e6de til et rum. Det er ogs\u00e5 skabelse. Hvad ville der ske, hvis du lod hjertet bestemme mere?',
    'JORD': 'Fertilitet i jord-elementet handler om miltens evne til at producere blod \u2014 det blod der n\u00e6rer livmoderens slimhinde og skaber grundlaget for implantation. Milten er fundamentet, og uden fundament kan intet gro.\n\nEn svag milt viser sig som tr\u00e6thed, d\u00e5rlig appetit, l\u00f8s afføring og en generel f\u00f8lelse af tomhed. I fertilitetssammenh\u00e6ng kan det betyde en for tynd livmoderslimhinde, kort lutealfase eller vedvarende bl\u00f8dning. Milten n\u00e6res af varm, kogt mad i regelm\u00e6ssige m\u00e5ltider. Supper, gryderetter, s\u00f8de kartofler og ris.\n\nBekymring t\u00e6rer p\u00e5 milten, og ved fertilitetsudfordringer kan bekymringen blive altopslugende. Hver cyklus, hvert test-resultat, hver m\u00e5ned der g\u00e5r. Den spiral er m\u00e6nsk, og den er forst\u00e5elig. Men milten har brug for at du ogs\u00e5 n\u00e6rer den med ro og tillid.\n\nHvis b\u00f8rn ikke er din vej, er jordens fertilitet evnen til at n\u00e6re. Mennesker, projekter, f\u00e6llesskaber \u2014 alt det har brug for den omsorg der er jordens gave. Hvad n\u00e6rer du lige nu, og hvad n\u00e6rer dig?',
    'METAL': 'Fertilitet i metal-elementet handler om evnen til at slippe \u2014 at give slip p\u00e5 kontrol og lade livet komme. Lungerne styrer Qi-bev\u00e6gelsen nedad, og den bev\u00e6gelse er vigtig for at energien kan n\u00e5 livmoderen.\n\nMetal-elementets tendens til perfektionisme og kontrol kan v\u00e6re en udfordring i fertilitetssammenh\u00e6ng. N\u00e5r alt skal optimeres \u2014 den rigtige kost, den rigtige timing, den rigtige position \u2014 forsvinder den overgivelse der er en del af skabelsen. Livet kan ikke kontrolleres frem. Det kan inviteres.\n\nKroppen beder om dybe ind\u00e5ndinger og lange ud\u00e5ndinger. Om at slippe sp\u00e6ndingerne i skuldrene. Om at lade v\u00e6re med at holde fast. Det g\u00e6lder b\u00e5de bogstaveligt og billedligt.\n\nSorgen over tab \u2014 mislykkede fors\u00f8g, tidlige graviditetstab, sk\u00e5nsom eller ufrivillig barnl\u00f8shed \u2014 er metals naturlige omr\u00e5de. Den sorg fortjener plads. Den fortjener at blive set og holdt. Og den fortjener at passere, i sit eget tempo.\n\nHvis b\u00f8rn ikke er din vej, er metals fertilitet evnen til at finde essens. At sk\u00e6re ind til kernen af hvad dit liv virkelig handler om. Hvad er dit aftr\u00fck i verden?'
  },

  stress_og_udbraendthed: {
    'VAND': 'Stress i vand-elementet handler om Kidney Qi-udt\u00f8mning \u2014 binyretr\u00e6thed i vestlig terminologi. N\u00e5r nyrerne er udt\u00f8mte, l\u00f8ber du p\u00e5 reserve, og kroppen reagerer med frygt som en kronisk baggrundslyd.\n\nDu m\u00e6rker det m\u00e5ske som en tr\u00e6thed der ikke forsvinder med hvile. Som en kulde i kroppen der ikke har med vejret at g\u00f8re. Som en angst der dukker op uden varsel, is\u00e6r om aftenen eller om natten. Nyrerne er udt\u00f8mte, og kroppen r\u00e5ber p\u00e5 det eneste den kender: stop.\n\nDen vigtigste medicin er hvile. Ikke ferie, men \u00e6gte hvile \u2014 den slags hvor du ikke skal noget. Tidlig sengetid, varme f\u00f8dder, stille omgivelser. Sort sesam, valn\u00f8dder og knoglesuppe genopbygger essensen langsomt. Undg\u00e5 koffein \u2014 det l\u00e5ner energi fra nyrerne og efterlader dem endnu mere tomme.\n\nFrygt er ikke svaghed. Det er vand-elementets alarm \u2014 en meddelelse om at reserverne er ved at l\u00f8be t\u00f8r. Hvad ville der ske, hvis du lyttede til den i stedet for at k\u00e6mpe imod? M\u00e5ske er kroppen klogere end planen.',
    'TR\u00c6': 'Stress i tr\u00e6-elementet handler om Lever Qi-stagnation \u2014 energi der sidder fast og ikke kan bev\u00e6ge sig frit. Du m\u00e6rker det som hovedpine, sp\u00e6ndinger i nakke og skuldre, en k\u00e6be der bider sammen og en frustration der ikke finder udl\u00f8b.\n\nLeveren vil bevæge sig, og n\u00e5r den ikke kan \u2014 n\u00e5r livet f\u00f8les begr\u00e6nset, n\u00e5r friheden mangler, n\u00e5r der ikke er plads til det du virkelig vil \u2014 s\u00e5 stagnerer energien. Resultatet er en indre sp\u00e6nding der kan eksplodere som vrede eller implodere som depression.\n\nBev\u00e6gelse er den mest direkte medicin. L\u00f8b, dans, ryst kroppen l\u00f8s. Alt der f\u00e5r energien til at str\u00f8mme. Sur smag hj\u00e6lper leveren: citronsaft, \u00e6blecidereddike, kimchi. Undg\u00e5 alkohol \u2014 den f\u00f8les befriende men belaster leveren direkte.\n\nSp\u00f8rg dig selv \u2014 \u00e6rligt: hvad g\u00f8r dig vred? Ofte er svaret ikke det du tror. Under overfladen er der m\u00e5ske en l\u00e6ngsel efter frihed, retning, rum til at vokse. Vreden er ikke problemet. Den er en budbringer.',
    'ILD': 'Stress i ild-elementet handler om hjerte-overbelastning \u2014 for mange forbindelser, for mange f\u00f8lelser, for lidt grounding. Du m\u00e6rker det som angst, hjertebanken, s\u00f8vnl\u00f8shed og en f\u00f8lelse af at v\u00e6re overstimuleret uden at kunne lukke ned.\n\nHjertet er \u00e5bent af natur, og for et ild-domineret menneske er gr\u00e6nser en evig udfordring. Du m\u00e6rker andres smerter som dine egne, du siger ja til for meget, du giver af dig selv indtil der ikke er mere. Pericardium, hjertebeskytteren, er overbelastet.\n\nK\u00f8ling er n\u00f8dvendigt. Bitter smag k\u00f8ler hjerteild: gr\u00f8n te, l\u00f8vetand, rucola. K\u00f8lende f\u00f8devarer som agurk, vandmelon og p\u00e6re hj\u00e6lper. Undg\u00e5 stimulanser \u2014 koffein, alkohol, sk\u00e6rme sent. Lad aftenen v\u00e6re k\u00f8lig og stille.\n\nHvordan ville det f\u00f8les at beskytte dit hjerte lidt mere? Ikke at lukke det, men at v\u00e6lge hvem og hvad du \u00e5bner det for. Hvert nej er en k\u00e6rlig handling mod dig selv.',
    'JORD': 'Stress i jord-elementet handler om Milt-overbelastning fra bekymring. Du m\u00e6rker det som grublecirkler der aldrig finder svar, en ford\u00f8jelse der g\u00e5r i st\u00e5, oppustethed og en tung tr\u00e6thed midt p\u00e5 dagen.\n\nMilten n\u00e6res af tryghed og rutine, og n\u00e5r grundlaget ryster \u2014 \u00e6ndringer p\u00e5 arbejdet, i familien, i livets retning \u2014 reagerer den ved at k\u00f8re i ring. Tankerne gentager sig: hvad nu hvis? Burde jeg? Hvad g\u00e5r galt? Det er miltens alarm, og den er utr\u00e6ttelig.\n\nVarme, kogt mad i regelm\u00e6ssige m\u00e5ltider er den mest basale medicin. Undg\u00e5 at springe m\u00e5ltider over. Undg\u00e5 kold, r\u00e5 mad der belaster ford\u00f8jelsen. S\u00f8d smag i naturlig form \u2014 gr\u00e6skar, dadler, ris \u2014 beroer milten.\n\nBekymring er ikke virkelighed. Det er miltens fors\u00f8g p\u00e5 at forberede sig p\u00e5 det v\u00e6rste. Men det v\u00e6rste sker sj\u00e6ldent, og i mellemtiden br\u00e6nder bekymringen din energi. Hvad ville der ske, hvis du bare var her, i dette \u00f8jeblik, uden at fors\u00f8ge at l\u00f8se morgendagen?',
    'METAL': 'Stress i metal-elementet handler om lungernes tilbagetr\u00e6kning og perfektionisme som drivkraft. Du m\u00e6rker det som en forsnævring \u2014 vejrtr\u00e6kningen bliver kortere, verden bliver mindre, standarden bliver h\u00f8jere og h\u00f8jere uden at noget nogensinde er godt nok.\n\nLungerne styrer Qi-optagelsen fra luften, og n\u00e5r de tr\u00e6kker sig sammen, f\u00e5r hele kroppen mindre livskraft. Du m\u00e6rker det m\u00e5ske som en t\u00f8r hoste, sp\u00e6ndinger i brystet, t\u00f8r hud eller en fornemmelse af at v\u00e6re afsk\u00e5ret fra verden.\n\nDyb vejrtr\u00e6kning er den mest direkte medicin. Fire tæl ind, syv t\u00e6l hold, otte t\u00e6l ud. Det lyder simpelt, og det er det ogs\u00e5. Men det virker. Fugtende f\u00f8devarer st\u00f8tter lungerne: p\u00e6rer, honning, mandler. Frisk luft er ikke en luksusl\u00f8sning men en n\u00f8dvendighed.\n\nSorg kan gemme sig som perfektionisme. N\u00e5r intet er godt nok, er det m\u00e5ske fordi noget v\u00e6sentligt mangler \u2014 noget du har mistet eller aldrig f\u00e5et. Hvad er det, din krop savner, som dit hoved har travlt med at kompensere for?'
  },

  sorg_og_tab: {
    'VAND': 'Sorg i vand-elementet er den dybeste form for smerte \u2014 den ordl\u00f8se, den kropslige, den der s\u00e6tter sig i knoglerne. Nyrerne b\u00e6rer gammel smerte som sediment p\u00e5 bunden af en s\u00f8. Den ligger stille det meste af tiden, men den er der.\n\nVand-elementets sorg handler ofte om det fundamentale: tab af tryghed, tab af tilh\u00f8rsforhold, tab af den base man troede var fast. Det kan v\u00e6re d\u00f8dsfald, men det kan ogs\u00e5 v\u00e6re skilsmisse, flytning, tab af sundhed \u2014 alt der ber\u00f8rer det mest basale i os.\n\nKroppen reagerer med kulde, tr\u00e6thed og en trang til at tr\u00e6kke sig v\u00e6k fra verden. Det er ikke depression n\u00f8dvendigvis \u2014 det er vand-elementets naturlige respons. At tr\u00e6kke sig ind, at g\u00e5 i dvale, at lade tiden arbejde.\n\nLad dig selv g\u00e5 ned i dybden. Sorgen har brug for plads, ikke l\u00f8sninger. Varme f\u00f8devarer, varme bade, varme h\u00e6nder p\u00e5 l\u00e6nden. Og tid. Vand-elementet ved at alt er cyklisk \u2014 ogs\u00e5 smerten.\n\nHvilken sorg b\u00e6rer du, som du aldrig rigtig har sat ord p\u00e5? Den beh\u00f8ver ikke ord. Den beh\u00f8ver bare at blive set.',
    'TR\u00c6': 'Sorg i tr\u00e6-elementet viser sig som stagnation \u2014 v\u00e6ksten stopper, leveren lukker ned, alt sidder fast. Du m\u00e6rker det m\u00e5ske som en forstenithed, en ude-af-stand-til at bev\u00e6ge sig fremad, en verden der f\u00f8les gr\u00e5 og uden retning.\n\nLeveren har brug for flow, og sorg er det modsatte af flow. N\u00e5r tabet rammer, kan energien bogstaveligt talt fryse. Den frustration og vrede der normalt driver tr\u00e6-elementet fremad, vender sig indad og bliver til en stille fortvivlelse.\n\nBev\u00e6gelse er vejen ud, selv n\u00e5r kroppen siger nej. Ikke h\u00e5rdt, ikke forceret \u2014 men bare at g\u00e5. En g\u00e5tur i naturen, f\u00f8dderne mod jorden, \u00f8jnene mod horisonten. Tr\u00e6-elementets \u00f8jne har brug for at se langt, is\u00e6r n\u00e5r alt f\u00f8les snævert.\n\nVrede er tilladt i sorgen. Det kan f\u00f8les forkert at v\u00e6re vred p\u00e5 den der er g\u00e5et, p\u00e5 livet der tog noget fra dig, p\u00e5 verden der bare forts\u00e6tter. Men vreden er \u00e6gte, og den har brug for et sted at g\u00e5 hen. Hvad har tabet l\u00e6rt dig om det du virkelig v\u00e6rds\u00e6tter?',
    'ILD': 'Sorg i ild-elementet er ensomhed \u2014 hjertet mister sin forbindelse. Den varme der normalt str\u00f8mmer udad, tr\u00e6kker sig tilbage, og verden f\u00f8les kold og fjern.\n\nHjertet er s\u00e6det for Shen, vores bevidsthed og forbindelsesevne. N\u00e5r hjertet sørger, kan Shen blive urolig eller forsvinde \u2014 du f\u00f8ler dig m\u00e5ske fjern fra dig selv, afkoblet fra gl\u00e6den, ude af stand til at m\u00e6rke det der normalt varmer.\n\nForbindelse er medicin, men den er ogs\u00e5 det der g\u00f8r mest ondt. At v\u00e6re sammen med andre n\u00e5r man sørger kr\u00e6ver mod, fordi hjertet er bl\u00f8dt og s\u00e5rbart. Men isolation er ild-elementets f\u00e6lde \u2014 alene k\u00f8ler flammen til aske.\n\nLad dig selv v\u00e6re varm, ogs\u00e5 i sorgen. Et stearinlys, en kop te, en veninde der bare sidder der. Det beh\u00f8ver ikke v\u00e6re stort. Hjertet heler i n\u00e6rv\u00e6r, ogs\u00e5 det mest stille.\n\nHvorn\u00e5r f\u00f8lte du sidst en \u00e6gte forbindelse? Hvad hindrer dig i at s\u00f8ge den igen?',
    'JORD': 'Sorg i jord-elementet er rodl\u00f8shed \u2014 at miste det fundament man troede var fast. N\u00e5r det der holdt dig oppe forsvinder, f\u00f8les det som at st\u00e5 i l\u00f8s sand.\n\nMilten holder vores indre verden sammen, og n\u00e5r den ryster, falder alt i stykker p\u00e5 \u00e9n gang. Ford\u00f8jelsen g\u00e5r i st\u00e5, appetitten forsvinder, tankerne k\u00f8rer i ring uden svar. Jord-elementets sorg handler om tryghed der er v\u00e6k.\n\nRitualerne hj\u00e6lper. Ikke de store, men de sm\u00e5: morgenmaden p\u00e5 det samme tidspunkt, g\u00e5turen den samme rute, teen i den samme kop. Milten n\u00e6res af gentagelse, og i sorgen kan gentagelsen v\u00e6re et anker n\u00e5r alt andet flyder.\n\nOmsorg for andre kan v\u00e6re b\u00e5de st\u00f8tte og f\u00e6lde. Jord-elementet vil tage sig af alle \u2014 men hvem tager sig af dig? Lad ogs\u00e5 andre n\u00e6re dig. Lad ogs\u00e5 andre b\u00e6re.\n\nHvad er det mindste du kan g\u00f8re for dig selv i dag, der f\u00f8les som tryghed?',
    'METAL': 'Sorg er metals naturlige bev\u00e6gelse. Lungerne \u00e5nder ind og slipper ud. Tyktarmen optager og udskiller. At give slip er metal-elementets livsopgave, og sorg er den mest radikale form for slip.\n\nMetal kender sorgen indefra. Det er den rene smerte over det der ikke l\u00e6ngere er \u2014 ufortyndet, uskjult. Lungerne reagerer med gr\u00e5d, med korte ind\u00e5ndinger, med en fornemmelse af at brystkassen er for lille.\n\nHuden, metal-elementets v\u00e6v, kan ogs\u00e5 s\u00f8rge. T\u00f8rhed, udsl\u00e6t, en s\u00e5rbarhed der er helt fysisk. Det er kroppen der viser det sindet m\u00e5ske ikke kan sige.\n\nMetals gave i sorgen er evnen til at finde det v\u00e6sentlige. N\u00e5r alt det overfl\u00f8dige er skr\u00e6llet v\u00e6k, hvad st\u00e5r s\u00e5 tilbage? Der er en klar, n\u00f8gen sk\u00f8nhed i den klarhed \u2014 ogs\u00e5 n\u00e5r den g\u00f8r ondt.\n\nGiv dig selv lov til at s\u00f8rge fuldt ud. Metal-elementet fors\u00f8ger ofte at v\u00e6re st\u00e6rk, klar, uafh\u00e6ngig. Men sorgen beder om bl\u00f8dhed. Hvad ville der ske, hvis du lod den komme helt ind?'
  },

  ensomhed_og_isolation: {
    'VAND': 'Ensomhed i vand-elementet er den dybe, ordl\u00f8se slags. Den der sidder i knoglerne og i de stille timer om natten. Nyrernes urmenneskelige l\u00e6ngsel efter forbindelse \u2014 efter at h\u00f8re til et sted, h\u00f8re til hos nogen \u2014 er en af de \u00e6ldste smerter vi kender.\n\nVand-elementets ensomhed handler ofte om fundamental utryghed. Hvis det tidlige fundament \u2014 tilknytningen, trygheden, f\u00f8lelsen af at v\u00e6re holdt \u2014 var skr\u00f8beligt, kan ensomheden f\u00f8les som en gammel ven der altid vender tilbage.\n\nKroppen reagerer med kulde og tilbagetr\u00e6kning. Du m\u00e6rker det m\u00e5ske som en fysisk kulde, en l\u00e6ngsel efter at gemme dig under et t\u00e6ppe, en uvilje mod at g\u00e5 ud i verden.\n\nVarme er medicin \u2014 fysisk og emotionelt. Varme bade, varme f\u00f8devarer, varme mennesker. Selv en h\u00e5nd p\u00e5 din egen l\u00e6nd kan minde kroppen om at du ikke er helt alene.\n\nOg m\u00e5ske er der en form for ensomhed der er v\u00e6rd at l\u00e6re at bo i. Vandets stilhed er ogs\u00e5 en kilde til dybde. Sp\u00f8rgsm\u00e5let er: er du alene med dig selv, eller er du alene uden dig selv?',
    'TR\u00c6': 'Ensomhed i tr\u00e6-elementet er mangel p\u00e5 retning \u2014 at vokse alene, uden spejling, uden nogen der ser hvad du bliver til. Leveren s\u00f8ger altid udad og fremad, og n\u00e5r der ikke er nogen at vokse mod, kan energien stagnere til en stille desperation.\n\nDu m\u00e6rker det m\u00e5ske som frustration over at ingen forst\u00e5r dig. Som en rastl\u00f8shed der driver dig fra sted til sted uden at finde hjem. Som en vrede der egentlig er sorg over manglen p\u00e5 forbindelse.\n\nKroppen sidder fast \u2014 nakken sp\u00e6nder, k\u00e6ben bider sammen, skuldrene kryber op mod \u00f8rerne. Bev\u00e6gelse l\u00f8sner, men det bedste er bev\u00e6gelse i f\u00e6llesskab. Holdtr\u00e6ning, gruppemeditation, en g\u00e5tur med nogen.\n\nTr\u00e6-elementet har brug for at ses. Ikke bare at v\u00e6re sammen med nogen, men at blive set i sin v\u00e6kst, sin retning, sit potentiale. Hvem ser dig \u2014 virkelig ser dig? Og hvem har du selv holdt op med at se?',
    'ILD': 'Ensomhed i ild-elementet er hjertets prim\u00e6re smertetilstand. At v\u00e6re afsk\u00e5ret fra andre \u2014 fra varme, fra n\u00e6rv\u00e6r, fra den forbindelse der er ildens n\u00e6ring \u2014 er for hjertet som kulde for en flamme.\n\nDu m\u00e6rker det m\u00e5ske som en fysisk smerte i brystet. Som en l\u00e6ngsel der ikke har noget specifikt objekt. Som en uro der driver dig mod mennesker, men ogs\u00e5 en angst for at forbindelsen alligevel ikke er \u00e6gte.\n\nHjertet kan lukke sig som beskyttelse. Pericardium tr\u00e6kker sig sammen, og du bygger mure der holder smerten ude \u2014 men ogs\u00e5 varmen. Det er forst\u00e5eligt, men det er ogs\u00e5 det der opretholder ensomheden.\n\nSmall steps. En besked til en veninde. Et smil til en fremmed. At sige ja til en invitation, ogs\u00e5 n\u00e5r du helst vil blive hjemme. Hjertet heler i kontakt, ogs\u00e5 den mest beskedne.\n\nHvad ville der ske, hvis du turde v\u00e6re s\u00e5rbar over for \u00e9t menneske i dag?',
    'JORD': 'Ensomhed i jord-elementet er at give uden at modtage. Milten t\u00f8mmes langsomt, fordi al energi g\u00e5r udad \u2014 til andres behov, andres bekymringer, andres liv. Og n\u00e5r du endelig stopper, er der tomt.\n\nDu m\u00e6rker det m\u00e5ske som en paradoksal ensomhed: omgivet af mennesker men alligevel alene. Altid den der lytter, aldrig den der bliver h\u00f8rt. Altid den der husker, aldrig den der bliver husket.\n\nMilten reagerer med tr\u00e6thed og t\u00e5ge. Ford\u00f8jelsen g\u00e5r langsomt, tankerne g\u00e5r i ring, og kroppen f\u00f8les tung. Det er ikke dovenskab \u2014 det er t\u00f8mning.\n\nAt lære at modtage er jord-elementets st\u00f8rste udfordring. At lade andre n\u00e6re dig. At sige hvad du har brug for, h\u00f8jt nok til at det kan h\u00f8res. Det f\u00f8les m\u00e5ske egoistisk \u2014 men det er det modsatte. Du kan kun give af det der er fyldt op.\n\nHvem kan du bede om noget i dag \u2014 noget sm\u00e5t, noget konkret, noget for dig?',
    'METAL': 'Ensomhed i metal-elementet er det essentielle frav\u00e6r. At miste noget vigtigt og ikke kunne erstatte det. Lungerne holder p\u00e5 det v\u00e6sentlige og slipper det overfl\u00f8dige \u2014 men hvad g\u00f8r du, n\u00e5r det v\u00e6sentlige er det der forsvandt?\n\nDu m\u00e6rker det m\u00e5ske som en ren, sk\u00e6rende klarhed. En verden der er helt tydelig, men ogs\u00e5 helt tom. Metals ensomhed er ikke rodl\u00f8s som jordens eller br\u00e6ndende som ildens \u2014 den er stille og k\u00f8lig som en novembermorgen.\n\nLungerne tr\u00e6kker sig sammen n\u00e5r vi er ensomme. Vejrtr\u00e6kningen bliver kort og overfladisk. Huden \u2014 vores st\u00f8rste sanseorgan og metals v\u00e6v \u2014 l\u00e6nges efter ber\u00f8ring.\n\nBer\u00f8ring er medicin. Massage, et kram, bare en h\u00e5nd p\u00e5 din skulder. Og dyb vejrtr\u00e6kning \u2014 at \u00e5bne lungerne bevidst, at lade luft og liv komme ind igen.\n\nEnsomheden kan ogs\u00e5 renses. Den kan l\u00e6re dig hvad du virkelig har brug for \u2014 ikke mere, ikke mindre. Hvad er det v\u00e6sentlige, du mangler?'
  },

  forandring_og_overgang: {
    'VAND': 'Forandring i vand-elementet v\u00e6kker frygt. Frygt for det ukendte, for det ukontrollerbare, for den str\u00f8m der b\u00e6rer dig et sted du aldrig har v\u00e6ret. Nyrerne reagerer med alarm n\u00e5r fundamentet ryster.\n\nDu m\u00e6rker det m\u00e5ske som en fysisk uro \u2014 hjertebanken, sveddige h\u00e6nder, en knude i maven. Kroppen siger: dette er farligt. Men m\u00e5ske er det bare nyt.\n\nVand-elementets modgift mod frygt er tillid. Ikke tillid til at alt g\u00e5r godt \u2014 men tillid til at du kan b\u00e6re det, uanset hvad. At du har gjort det f\u00f8r. At du har dybde nok til at rumme det nye.\n\nVand str\u00f8mmer altid videre. Det finder vej rundt om forhindringer, det former sig efter landskabet, det fryser og smelter og fordamper og vender tilbage. Du har den samme evne.\n\nHvad ville der ske, hvis du lod dig flyde med forandringen i stedet for at k\u00e6mpe imod?',
    'TR\u00c6': 'Forandring i tr\u00e6-elementet v\u00e6kker frustration. N\u00e5r rammerne \u00e6ndrer sig \u2014 et job der forsvinder, et forhold der ender, en plan der falder fra hinanden \u2014 reagerer leveren med sp\u00e6nding, vrede og en intens trang til at handle.\n\nDu m\u00e6rker det som en rastl\u00f8shed der ikke finder hvile. Hovedet k\u00f8rer, kroppen sp\u00e6nder, der er en drift mod at g\u00f8re noget \u2014 hvad som helst \u2014 bare for at genvinde kontrollen.\n\nMen tr\u00e6-elementets egentlige styrke i forandringen er fleksibilitet. T\u00e6nk p\u00e5 bambus \u2014 den b\u00f8jer i stormen uden at knække. Din evne til at tilpasse dig, finde nye veje, vokse i uventede retninger, er din st\u00f8rste ressource.\n\nGiv dig selv lov til at v\u00e6re vred over det der \u00e6ndrer sig. Vreden er naturlig. Men lad den ogs\u00e5 drive dig fremad, mod det nye der venter.\n\nHvad m\u00e5 d\u00f8 for at noget nyt kan f\u00f8des?',
    'ILD': 'Forandring i ild-elementet handler om tab af forbindelse. N\u00e5r det kendte forsvinder, mister hjertet sine holdepunkter, og verden kan f\u00f8les pludselig kold og fremmed.\n\nDu m\u00e6rker det m\u00e5ske som angst, som en uro i brystet, som en l\u00e6ngsel efter noget der ikke l\u00e6ngere er. Hjertet s\u00f8ger varme, og i overgangen kan varmen v\u00e6re sv\u00e6r at finde.\n\nMen ild-elementets gave er evnen til at finde varme i det nye. At se mennesker, at knytte b\u00e5nd, at \u00e5bne sig. Det kr\u00e6ver mod \u2014 og mod har du masser af.\n\nLad dig selv s\u00f8rge over det der var, men hold \u00f8jnene \u00e5bne for det der kommer. Ilden slukker ikke af forandring \u2014 den finder bare nyt br\u00e6ndstof.\n\nHvem kan holde din h\u00e5nd i overgangen? Og hvem kan du holde?',
    'JORD': 'Forandring i jord-elementet ryster fundamentet. N\u00e5r det du troede var fast viser sig at v\u00e6re midlertidigt, reagerer milten med bekymring, grublen og en fysisk uro i maven.\n\nDu m\u00e6rker det som en mangel p\u00e5 fast grund under f\u00f8dderne. Appetitten forsvinder eller eksploderer. Tankerne k\u00f8rer: hvad nu? Hvordan? Hvad med dem der afh\u00e6nger af mig?\n\nJord-elementets gave i forandringen er evnen til at genopbygge. Sten for sten, dag for dag, m\u00e5ltid for m\u00e5ltid. Du er mesteren i at skabe tryghed fra bunden \u2014 og du har gjort det f\u00f8r.\n\nStart med det sm\u00e5. \u00c9n rutine der holder. \u00c9t m\u00e5ltid der er varmt og n\u00e6rende. \u00c9t menneske der er p\u00e5lideligt. Milten genopbygges af forudsigelighed, selv midt i kaos.\n\nHvad er det ene faste punkt i dit liv lige nu, som du kan st\u00e5 p\u00e5?',
    'METAL': 'Forandring i metal-elementet handler om slip. Det der var, er ikke l\u00e6ngere. Lungerne \u00e5nder ud, og tomheden efter ud\u00e5ndingen kan f\u00f8les uudholdelig.\n\nDu m\u00e6rker det m\u00e5ske som en sk\u00e6rpet klarhed \u2014 alt er pludselig meget tydeligt, meget n\u00e6rv\u00e6rende, n\u00e6sten smertefuldt klart. Metals reaktion p\u00e5 forandring er at reducere, at rydde, at finde essensen.\n\nDer er en fare i at reducere for hurtigt \u2014 at smide alt det gamle ud i en impuls og st\u00e5 tomh\u00e6ndet. Men der er ogs\u00e5 en kraft i det. At vide hvad du ikke l\u00e6ngere har brug for, er en form for visdom.\n\nLad ud\u00e5ndingen v\u00e6re l\u00e6ngere end ind\u00e5ndingen. Lad det gamle g\u00e5 bevidst, med taknemmelighed for det det gav. Og v\u00e6r t\u00e5lmodig med det nye \u2014 det kommer. Ind\u00e5ndingen f\u00f8lger altid efter ud\u00e5ndingen.\n\nHvad kan du takke og slippe i dag?'
  }
};

// ---- BLOK 4: TIDSREJSE_PAR ----
// N\u00e5r brugeren ser sig selv + en relation p\u00e5 en given dato.

const TIDSREJSE_PAR = {
  'VAND_VAND': {
    intro: 'Dobbelt vand. I deler den samme dybe stilhed. Det kan f\u00f8les som at sidde ved en s\u00f8 sammen \u2014 ingen beh\u00f8ver sige noget. Jeres forbindelse lever i det usagte, i de lange blikke, i den f\u00e6lles trang til ro.',
    raad: 'Lad stilheden v\u00e6re nok. Ikke alt beh\u00f8ver ord. Jeres forbindelse lever i det usagte.',
    oevelse: 'Sid sammen i fem minutter uden at tale. Bare v\u00e6r. M\u00e6rk hvordan kroppen falder til ro i den andens n\u00e6rv\u00e6r.'
  },
  'VAND_TR\u00c6': {
    intro: 'Dit vand m\u00f8der {navn}s tr\u00e6. Du bringer dybde, {navn} bringer retning. I n\u00e6rer hinanden naturligt \u2014 vand f\u00f8der tr\u00e6et i den skabende cyklus. Der er en let, organisk flow mellem jer.',
    raad: 'Du giver n\u00e6ring uden at kr\u00e6ve. {navn} giver retning uden at presse. Respekt\u00e9r hinandens tempo.',
    oevelse: 'G\u00e5 en tur i naturen sammen. Lad {navn} v\u00e6lge retningen, mens du v\u00e6lger tempoet. M\u00e6rk hvordan I balancerer hinanden.'
  },
  'VAND_ILD': {
    intro: 'Dit vand m\u00f8der {navn}s ild. Det er en sp\u00e6ndingsfyldt kombination \u2014 vand sl\u00e5r ild i kontrolcyklussen. Din dybde kan k\u00f8le {navn}s flamme, og {navn}s varme kan f\u00f8les overvældende for dit behov for stilhed.',
    raad: 'Find balancen mellem n\u00e6rv\u00e6r og afstand. I beh\u00f8ver ikke v\u00e6re ens for at v\u00e6re t\u00e6tte. Forskellen er ogs\u00e5 en gave.',
    oevelse: 'Lav mad sammen. Du st\u00e5r for roen i k\u00f8kkenet, {navn} for varmen og samtalen. Lad maden v\u00e6re m\u00f8destedet.'
  },
  'VAND_JORD': {
    intro: 'Dit vand m\u00f8der {navn}s jord. Dybde m\u00f8der fundament. {navn} giver dig den tryghed dit vand-element l\u00e6nges efter, og du giver {navn} den intuition der r\u00e6kker dybere end bekymringerne.',
    raad: 'I kan v\u00e6re hinandens anker. Lad {navn} holde fast, mens du flyder. Lad dig holde.',
    oevelse: 'Sid med f\u00f8dderne p\u00e5 jorden sammen. L\u00e6g en h\u00e5nd p\u00e5 hinandens ryg og m\u00e6rk \u00e5ndedr\u00e6ttet. Stille, jordende, dybt.'
  },
  'VAND_METAL': {
    intro: 'Dit vand m\u00f8der {navn}s metal. Dybde m\u00f8der klarhed. Metal n\u00e6rer vand i den skabende cyklus \u2014 {navn}s essens giver dit vand retning og substans. Der er en stille harmoni mellem jer.',
    raad: 'I forst\u00e5r hinanden uden mange ord. {navn}s klarhed og din dybde skaber noget rent og \u00e6gte.',
    oevelse: '\u00c5nd sammen i tre minutter. Ind i fire t\u00e6l, ud i otte. Lad ud\u00e5ndingen v\u00e6re en f\u00e6lles slippen.'
  },
  'TR\u00c6_VAND': {
    intro: 'Dit tr\u00e6 m\u00f8der {navn}s vand. Du vokser, {navn} n\u00e6rer. Vand f\u00f8der tr\u00e6 i den skabende cyklus \u2014 {navn}s dybde giver dine r\u00f8dder n\u00e6ring. Du rækker opad, {navn} holder fast i dybden.',
    raad: 'V\u00e6r t\u00e5lmodig med {navn}s tempo. Vand bev\u00e6ger sig langsomt, men det b\u00e6rer alt.',
    oevelse: 'Plant noget sammen \u2014 en plante, et fr\u00f8, en id\u00e9. Lad det v\u00e6re en p\u00e5mindelse om at v\u00e6kst kr\u00e6ver b\u00e5de rod og retning.'
  },
  'TR\u00c6_TR\u00c6': {
    intro: 'Dobbelt tr\u00e6. To v\u00e6kster der s\u00f8ger lyset p\u00e5 \u00e9n gang. Der er energi og fremadrettethed mellem jer \u2014 men ogs\u00e5 risiko for at I vokser i hver jeres retning. Kunsten er at finde den f\u00e6lles sol.',
    raad: 'Giv hinanden plads til at vokse \u2014 ogs\u00e5 n\u00e5r retningerne er forskellige. Fleksibilitet er jeres styrke.',
    oevelse: 'G\u00e5 en rask tur sammen og tal om jeres dr\u00f8mme. Hvad vil I hver is\u00e6r? Og hvor m\u00f8des det?'
  },
  'TR\u00c6_ILD': {
    intro: 'Dit tr\u00e6 m\u00f8der {navn}s ild. Tr\u00e6 n\u00e6rer ild i den skabende cyklus \u2014 din v\u00e6kst giver {navn}s flamme br\u00e6ndstof. Der er en naturlig begejstring og energi mellem jer, n\u00e5r I er sammen.',
    raad: 'I forst\u00e6rker hinanden. Nyd den energi, men husk at hvile. Ellers br\u00e6nder I begge ud.',
    oevelse: 'G\u00f8r noget kreativt sammen \u2014 kog, mal, skriv. Lad tr\u00e6ets retning m\u00f8de ildens passion.'
  },
  'TR\u00c6_JORD': {
    intro: 'Dit tr\u00e6 m\u00f8der {navn}s jord. Tr\u00e6 udfordrer jord i kontrolcyklussen \u2014 din drift fremad kan ryste {navn}s fundament. Men sp\u00e6ndingen kan ogs\u00e5 v\u00e6re en gave: du f\u00e5r {navn} til at bev\u00e6ge sig, {navn} f\u00e5r dig til at sl\u00e5 rod.',
    raad: 'V\u00e6r blid med {navn}s behov for stabilitet. Og lad {navn} minde dig om at r\u00f8dder ogs\u00e5 er en styrke.',
    oevelse: 'Lav et m\u00e5ltid sammen. Du h\u00e6lder inspirationen i, {navn} s\u00f8rger for at alt er klar og varm.'
  },
  'TR\u00c6_METAL': {
    intro: 'Dit tr\u00e6 m\u00f8der {navn}s metal. Metal sk\u00e6rer tr\u00e6 i kontrolcyklussen \u2014 {navn}s klarhed kan f\u00f8les sk\u00e6rende for din v\u00e6kst. Men der er en l\u00e6ring her: {navn} viser dig hvad der er v\u00e6sentligt, og du viser {navn} hvad der er levende.',
    raad: 'Respekt\u00e9r forskellen. {navn}s besk\u00e6ring er ikke kritik men omsorg. Din v\u00e6kst er ikke kaos men livskraft.',
    oevelse: 'Skriv hver tre ting I beundrer ved den anden. L\u00e6s dem h\u00f8jt. Lad ordene lande.'
  },
  'ILD_VAND': {
    intro: 'Din ild m\u00f8der {navn}s vand. I er modsætninger i kontrolcyklussen \u2014 {navn}s dybde kan sl\u00e5 din flamme. Men m\u00e5ske er det pr\u00e6cis det du har brug for: en k\u00f8lig h\u00e5nd n\u00e5r alt br\u00e6nder.',
    raad: 'Lad {navn} k\u00f8le dig ned uden at f\u00f8le det som afvisning. Vand sl\u00e6nger ikke ilden \u2014 det beskytter den mod at br\u00e6nde ud.',
    oevelse: 'Tag et brusebad eller bad sammen. Vand p\u00e5 huden, stilhed i rummet. Lad kroppen tale.'
  },
  'ILD_TR\u00c6': {
    intro: 'Din ild m\u00f8der {navn}s tr\u00e6. Tr\u00e6 n\u00e6rer ild \u2014 {navn}s v\u00e6kstenergi f\u00f8der din flamme. I er et naturligt par der begejstrer og inspirerer hinanden. Energien kan v\u00e6re smittende.',
    raad: 'Nyd den f\u00e6lles energi, men l\u00e6g ogs\u00e5 pauser ind. To br\u00e6ndende lys i et lille rum kan g\u00f8re det varmt.',
    oevelse: 'Dan sammen i k\u00f8kkenet eller i stuen. Bevægelse og latter \u2014 ildens og tr\u00e6ets f\u00e6lles sprog.'
  },
  'ILD_ILD': {
    intro: 'Dobbelt ild. Varme, forbindelse, intensitet. N\u00e5r I er sammen, lyser rummet op. Men to flammer i \u00e9t rum kan ogs\u00e5 udt\u00f8mme ilten. Husk at \u00e5bne vinduet.',
    raad: 'I forst\u00e5r hinandens behov for forbindelse. Men husk ogs\u00e5 at give hinanden rum til at br\u00e6nde alene.',
    oevelse: 'T\u00e6nd et stearinlys sammen. Sid stille og se ind i flammen. F\u00f8l varmen mellem jer uden at tale.'
  },
  'ILD_JORD': {
    intro: 'Din ild m\u00f8der {navn}s jord. Ild n\u00e6rer jord i den skabende cyklus \u2014 din varme giver {navn} fundament og tryghed. Du varmer jorden, og {navn} giver din ild et sted at lande.',
    raad: 'Din varme er {navn}s n\u00e6ring. Og {navn}s stabilitet er dit anker. V\u00e6r taknemmelig for den balance.',
    oevelse: 'Lav en kop te til hinanden. Giv den som en gave \u2014 langsomt, n\u00e6rv\u00e6rende, varmt.'
  },
  'ILD_METAL': {
    intro: 'Din ild m\u00f8der {navn}s metal. Ild smelter metal i kontrolcyklussen \u2014 din varme kan f\u00f8les overvældende for {navn}s behov for klarhed. Men du kan ogs\u00e5 bl\u00f8dg\u00f8re det der er stivt og lukke det der er lukket.',
    raad: 'V\u00e6r t\u00e5lmodig med {navn}s tilbagetr\u00e6kning. Det er ikke afvisning \u2014 det er metals m\u00e5de at beskytte sig p\u00e5.',
    oevelse: 'G\u00e5 en g\u00e5tur i frisk luft sammen. Dit n\u00e6rv\u00e6r varmer, luften k\u00f8ler. Find balancen.'
  },
  'JORD_VAND': {
    intro: 'Din jord m\u00f8der {navn}s vand. Jord d\u00e6mmer vand i kontrolcyklussen \u2014 din stabilitet kan f\u00f8les som begr\u00e6nsning for {navn}s behov for flow. Men du giver ogs\u00e5 retning til det der ellers flyder frit.',
    raad: 'Giv {navn} plads til at flyde, uden at miste dit eget fundament. I beh\u00f8ver ikke bev\u00e6ge jer i samme tempo.',
    oevelse: 'Sid ved vand sammen \u2014 en s\u00f8, en b\u00e6k, havet. M\u00e6rk forskellen mellem din fasthed og {navn}s flow.'
  },
  'JORD_TR\u00c6': {
    intro: 'Din jord m\u00f8der {navn}s tr\u00e6. Tr\u00e6 gror i jord \u2014 men det kan ogs\u00e5 sprænge den. {navn}s v\u00e6kst kan ryste dit fundament, men den kan ogs\u00e5 forny det. Sp\u00e6ndingen mellem jer er kreativ.',
    raad: 'Lad {navn}s energi inspirere dig i stedet for at skr\u00e6mme dig. Og lad din tryghed v\u00e6re det sted {navn} kan vende hjem til.',
    oevelse: 'G\u00e5 i haven eller naturen. Du planter, {navn} besk\u00e6rer. Find rytmen i det f\u00e6lles arbejde.'
  },
  'JORD_ILD': {
    intro: 'Din jord m\u00f8der {navn}s ild. Ild n\u00e6rer jord i den skabende cyklus \u2014 {navn}s varme giver dit fundament liv og gl\u00e6de. {navn} varmer din jord, og du giver {navn}s ild et sted at lande.',
    raad: 'Lad {navn}s varme komme ind. Du fortjener at blive n\u00e6ret, ikke kun at n\u00e6re.',
    oevelse: 'Del et m\u00e5ltid i ro. Intet program, ingen sk\u00e6rme. Bare mad, varme og n\u00e6rv\u00e6r.'
  },
  'JORD_JORD': {
    intro: 'Dobbelt jord. Tryghed p\u00e5 tryghed. I forst\u00e5r hinandens behov for fundament, rutine og omsorg. Men to jord-elementer kan ogs\u00e5 sidde fast i det kendte. Turde I bevæge jer sammen?',
    raad: 'Jeres tryghed er en gave. Men pas p\u00e5 at den ikke bliver et f\u00e6ngsel. V\u00e6r modige sammen.',
    oevelse: 'Lav noget I aldrig har pr\u00f8vet f\u00f8r. Noget sm\u00e5t, noget nyt. Og g\u00f8r det sammen.'
  },
  'JORD_METAL': {
    intro: 'Din jord m\u00f8der {navn}s metal. Jord producerer metal i den skabende cyklus \u2014 dit fundament st\u00f8tter {navn}s klarhed. Der er en naturlig respekt mellem jer, en stille forst\u00e5else.',
    raad: 'Du giver {navn} tryghed, {navn} giver dig perspektiv. Det er en fin balance \u2014 n\u00e6r den.',
    oevelse: 'Ryd op sammen. Fysisk eller mentalt. Lad jordens omsorg og metals klarhed arbejde side om side.'
  },
  'METAL_VAND': {
    intro: 'Dit metal m\u00f8der {navn}s vand. Metal n\u00e6rer vand i den skabende cyklus \u2014 din klarhed og essens giver {navn}s dybde retning. Der er en dyb, stille harmoni mellem jer der sj\u00e6ldent beh\u00f8ver ord.',
    raad: 'I finder hinanden i stilheden. Lad den v\u00e6re jeres m\u00f8dested.',
    oevelse: '\u00c5nd sammen i stilhed. Fire t\u00e6l ind, syv t\u00e6l hold, otte t\u00e6l ud. F\u00f8l den delte ro.'
  },
  'METAL_TR\u00c6': {
    intro: 'Dit metal m\u00f8der {navn}s tr\u00e6. Metal sk\u00e6rer tr\u00e6 i kontrolcyklussen \u2014 din klarhed kan f\u00f8les begr\u00e6nsende for {navn}s v\u00e6kst. Men besk\u00e6ring kan ogs\u00e5 v\u00e6re en gave \u2014 den giver retning til det der ellers vokser vildt.',
    raad: 'Din \u00e6rlighed er en gave, hvis du giver den med bl\u00f8dhed. {navn}s v\u00e6kst er ikke en trussel mod din orden.',
    oevelse: 'G\u00e5 en g\u00e5tur og tal om \u00e9n ting I hver is\u00e6r vil \u00e6ndre. Lyt uden at rette.'
  },
  'METAL_ILD': {
    intro: 'Dit metal m\u00f8der {navn}s ild. Ild smelter metal i kontrolcyklussen \u2014 {navn}s varme kan f\u00f8les overvældende for din klarhed. Men m\u00e5ske har du brug for at smeltes lidt. At bl\u00f8de op, at varmes igennem.',
    raad: 'Lad {navn}s varme komme ind bag din rustning. Det er ikke farligt. Det er helende.',
    oevelse: 'Lad {navn} v\u00e6lge en aktivitet der er varm og social. Sig ja, ogs\u00e5 n\u00e5r du helst ville v\u00e6re alene.'
  },
  'METAL_JORD': {
    intro: 'Dit metal m\u00f8der {navn}s jord. Jord producerer metal i den skabende cyklus \u2014 {navn}s fundament st\u00f8tter din klarhed. Der er en tryghed i dette m\u00f8de, en naturlig orden.',
    raad: '{navn}s omsorg n\u00e6rer dig, ogs\u00e5 n\u00e5r du ikke beder om det. V\u00e6r \u00e5ben for at modtage.',
    oevelse: 'Lad {navn} lave mad til dig. Bare det. Modtag uden at kommentere, uden at hj\u00e6lpe. \u00d8v dig i at tage imod.'
  },
  'METAL_METAL': {
    intro: 'Dobbelt metal. Klarhed p\u00e5 klarhed. I ser tingene som de er \u2014 rent, skarpt, uden illusion. Men to metals stilhed kan ogs\u00e5 blive til afstand. Husk at r\u00e6kke ud, ogs\u00e5 n\u00e5r det f\u00f8les overfl\u00f8digt.',
    raad: 'Jeres f\u00e6lles klarhed er sjælden og v\u00e6rdifuld. Men lad den ogs\u00e5 rumme bl\u00f8dhed.',
    oevelse: 'Del \u00e9n ting I hver is\u00e6r har sv\u00e6rt ved at sige h\u00f8jt. Lad metals \u00e6rlighed v\u00e6re en bro, ikke en mur.'
  }
};

// ---- BLOK 5: OVERGANGSALDER_SPECIFIK ----

const OVERGANGSALDER_SPECIFIK = {
  intro: 'Overgangsalderen er ikke et forfald \u2014 det er en forvandling. I kinesisk medicin betragtes den som en naturlig frig\u00f8relse af den energi, der tidligere gik til menstruation og potentiel fertilitet. Den energi er stadig din \u2014 den skal bare finde en ny vej.',

  faser: {
    tidlig: {
      krop: 'I de tidlige \u00e5r af overgangen \u2014 typisk fra begyndelsen af fyrrerne \u2014 begynder kroppen at sende de f\u00f8rste signaler. Menstruationen kan blive uregelmæssig, kortere eller l\u00e6ngere, st\u00e6rkere eller svagere. Det er leveren der arbejder h\u00e5rdt for at tilpasse sig de skiftende hormonniveauer.\n\nDu m\u00e6rker det m\u00e5ske som en ny form for PMS, som naturesved der dukker op f\u00f8r tid, eller som en træthed der er anderledes end den du kender. Brystspænding og hovedpine kan komme i b\u00f8lger. Leverens Qi stagnerer lettere, fordi den hormonelle balance svinger.\n\nKroppen beder ikke om panik. Den beder om opmærksomhed. At spise regelmæssigt, at bevæge sig dagligt, at give leveren plads til sit arbejde. Gr\u00f8nne gr\u00f8ntsager, sur smag, g\u00e5ture i frisk luft. Det lyder enkelt, og det er det ogs\u00e5.',
      sind: 'Mentalt kan de tidlige \u00e5r f\u00f8les som en revision. Du begynder at stille sp\u00f8rgsm\u00e5l ved ting du troede var afgjort \u2014 karrieren, forholdet, den m\u00e5de du lever p\u00e5. Det er ikke krise. Det er opv\u00e5gning.\n\nHum\u00f8rsvingninger kan minde om puberteten \u2014 og det giver mening, for begge overgange handler om hormonelle skift der p\u00e5virker leverens evne til at bevæge Qi. Irritabilitet, ut\u00e5lmodighed, en pludselig gr\u00e5d \u2014 det er ikke svaghed, det er kroppen der genforhandler sin balance.\n\nGiv dig selv lov til at v\u00e6re i sp\u00f8rgsm\u00e5let. Du beh\u00f8ver ikke have svar endnu. M\u00e5ske er det vigtigste at m\u00e6rke, hvad der f\u00f8les \u00e6gte, og hvad der f\u00f8les p\u00e5taget.',
      element_raad: {
        'VAND': 'Dit vand-element beder om ekstra hvile i de tidlige \u00e5r. Nyrerne arbejder h\u00e5rdere nu. Varme f\u00f8dder, tidlig sengetid og sort sesam i gr\u00f8den st\u00f8tter Jing-essensen. Undg\u00e5 at presse dig selv \u2014 nyrerne genopbygges i hvilen.',
        'TR\u00c6': 'Dit tr\u00e6-element m\u00e6rker skiftet som frustration og uro. Leveren har brug for bev\u00e6gelse og fri flow. Daglige g\u00e5ture, str\u00e6k\u00f8velser og sur smag st\u00f8tter dig. Giv vreden plads \u2014 den er en del af forandringen.',
        'ILD': 'Dit ild-element kan reagere med angst og hjertebanken. Hjertet har brug for k\u00f8ling nu. Bitter smag, gr\u00f8n te og rolige aftener. Undg\u00e5 overbelastning af forbindelser \u2014 dit hjerte har brug for mere ro end normalt.',
        'JORD': 'Dit jord-element m\u00e6rker forandringen som ford\u00f8jelsesbesvær og bekymring. Milten har brug for regelmæssige, varme m\u00e5ltider. Undg\u00e5 r\u00e5 kold mad og grublen. S\u00f8d kartoffel og gr\u00e6skar er dine venner.',
        'METAL': 'Dit metal-element reagerer m\u00e5ske med t\u00f8r hud og f\u00f8lelsesm\u00e6ssig s\u00e5rbarhed. Lungerne har brug for fugt \u2014 p\u00e6rer, honning, dybe \u00e5ndedrag. Giv dig selv lov til at s\u00f8rge over det der \u00e6ndrer sig.'
      }
    },
    midt: {
      krop: 'Midt i overgangen \u2014 typisk fra slutningen af fyrrerne til begyndelsen af halvtredserne \u2014 er kroppen i fuld forvandling. Menstruationen kan stoppe i m\u00e5neder og vende tilbage, eller den kan \u00e6ndre karakter fuldst\u00e6ndigt. Hedetur rammer m\u00e5ske med fuld kraft nu.\n\nI kinesisk medicin er det Kidney Yin-manglen der nu for alvor g\u00f8r sig g\u00e6ldende. N\u00e5r Yin aftager, stiger Yang ukontrolleret \u2014 og resultatet er varme der stiger til hovedet: hedeture, natursved, r\u00f8dme. Det er som en gryde der koger t\u00f8r.\n\nKroppen beder om fugtighed og k\u00f8ling. Yin-n\u00e6rende f\u00f8devarer: sort sesam, gojib\u00e6r, p\u00e6re, vandmelon, \u00e6g. Undg\u00e5 alkohol, stærke krydderier og koffein \u2014 de driver varmen opad. Acupunktur kan v\u00e6re en st\u00f8tte, og Yin Yoga giver kroppen den langsomme, dybe str\u00e6kning den l\u00e6nges efter.',
      sind: 'Mentalt er dette ofte den mest intense periode. S\u00f8vnen er m\u00e5ske forstyrret af natursved, og s\u00f8vnmangel p\u00e5virker alt \u2014 humøret, koncentrationen, tålmodigheden. Der kan v\u00e6re en f\u00f8lelse af at miste sig selv \u2014 hvem er jeg uden den cyklus der har defineret mig som kvinde?\n\nDet er et sp\u00f8rgsm\u00e5l der fortjener at blive m\u00f8dt med bl\u00f8dhed. Du er ikke mindre kvinde uden menstruation. Du er en kvinde i forvandling. Der er en enorm kraft i at give slip p\u00e5 det der ikke l\u00e6ngere er n\u00f8dvendigt og finde ud af hvad der er tilbage.\n\nHusk at tale med nogen \u2014 en veninde, en l\u00e6ge, en r\u00e5dgiver. Du beh\u00f8ver ikke b\u00e6re det her alene.',
      element_raad: {
        'VAND': 'Nyrernes Yin er nu under st\u00f8rst pres. N\u00e6r essensen med sort sesam, gojib\u00e6r og knoglesuppe. Undg\u00e5 overstimulering og kolde omgivelser. S\u00f8vn er din vigtigste medicin \u2014 alt andet kan vente.',
        'TR\u00c6': 'Lever Qi-stagnationen kan n\u00e5 sit h\u00f8jdepunkt her. Bev\u00e6gelse hver dag er ikke forhandleligt. Undg\u00e5 alkohol strengt \u2014 leveren har allerede nok at g\u00f8re. M\u00e6lkeb\u00f8ttete og pebermynte st\u00f8tter det frie flow.',
        'ILD': 'Hjerteild kan stige kraftigt nu. Hedeture, hjertebanken og angst er Shen der er urolig. K\u00f8l hjertet med bitter smag, vandmelon og ro. Undg\u00e5 sk\u00e6rme f\u00f8r sengetid. Lad aftenen v\u00e6re stille.',
        'JORD': 'Miltens energi kan v\u00e6re p\u00e5 sit laveste. Spis varmt og regelm\u00e6ssigt \u2014 tre m\u00e5ltider der n\u00e6rer uden at belaste. Undg\u00e5 mejeriprodukter og sukker der skaber fugt. Ingef\u00e6r og kanel varmer milten bl\u00f8dt.',
        'METAL': 'Lungernes t\u00f8rhed intensiveres. Fugt indefra: p\u00e6rer kogt med honning, mandler, sesamfr\u00f8. Dyb vejrtr\u00e6kning tre gange dagligt. Lad huden f\u00e5 fugtende pleje. Din krop har brug for bl\u00f8dhed nu.'
      }
    },
    sen: {
      krop: 'Postmenopausen \u2014 typisk fra begyndelsen af halvtredserne \u2014 er en tid hvor kroppen finder en ny balance. Hedetur og natursved aftager gradvist for de fleste. Kroppen s\u00e6tter sig i et nyt leje.\n\nMen nye temaer dukker op. Knoglernes styrke aftager \u2014 nyrerne styrer knoglerne i kinesisk medicin, og med faldende \u00f8strogen og Jing bliver calcium-optag vigtigere. Led og muskler kan v\u00e6re stivere. Huden og slimhinderne t\u00f8rrere.\n\nKroppen beder om n\u00e6ring og bev\u00e6gelse. V\u00e6gtb\u00e6rende \u00f8velser st\u00f8tter knoglerne. Yin Yoga holder leddene sm\u00f8rbare. Varme supper, knoglesuppe og n\u00e6rende f\u00f8devarer genopbygger langsomt.',
      sind: 'Mentalt oplever mange en ny frihed. Den hormonelle storm er ovre, og med den en vis klarhed. Mange kvinder beskriver det som at vende hjem til sig selv \u2014 m\u00e5ske for f\u00f8rste gang i \u00e5rtier.\n\nDer kan v\u00e6re en sorg over det der er slut \u2014 og en lettelse. Begge f\u00f8lelser er gyldige, og de kan eksistere side om side. Du beh\u00f8ver ikke v\u00e6lge mellem dem.\n\nDenne tid er en invitation til at opdage hvad du virkelig vil \u2014 ikke hvad andre forventer, ikke hvad hormonerne dikterede, men hvad du, helt ind til kernen, l\u00e6nges efter.',
      element_raad: {
        'VAND': 'N\u00e6r Jing med langsom, dyb omsorg. S\u00f8vn, varme og stilhed er stadig de vigtigste redskaber. Bev\u00e6g dig bl\u00f8dt \u2014 tai chi, Yin Yoga, g\u00e5ture. Din visdom er p\u00e5 sit h\u00f8jeste nu. Brug den.',
        'TR\u00c6': 'Leveren finder ny ro. Brug den frigjorte energi p\u00e5 det du altid ville \u2014 det projekt, den rejse, den forandring. Din v\u00e6kstkraft er ikke forsvundet. Den har bare fundet en ny retning.',
        'ILD': 'Hjertet falder til ro. Den gl\u00e6de der nu melder sig er dybere, mere stille. Brug den til at fordybe forbindelserne. Hjertet har brug for f\u00e6rre men dybere relationer nu.',
        'JORD': 'Milten kan genopbygges med konsekvens og omsorg. Regelm\u00e6ssige m\u00e5ltider, varm mad, forudsigelige rytmer. Du fortjener den tryghed du altid har givet andre.',
        'METAL': 'Lungernes klarhed er nu en gave. Du ser livet som det er \u2014 rent, sk\u00f8nt, forgængeligt. Lad den klarhed guide dig. Dyb vejrtr\u00e6kning, frisk luft og enkelhed. Essensen er nok.'
      }
    }
  },

  hedeture: 'Hedeture er et af overgangsalderens mest k\u00f8bte symptomer, og i kinesisk medicin forklares de som Yin-mangel der lader Yang stige ukontrolleret. Forestil dig en gryde med vand over en flamme \u2014 n\u00e5r vandet fordamper, br\u00e6nder gryden t\u00f8r. Varmen stiger til hovedet og breder sig som en b\u00f8lge.\n\nDe kan komme n\u00e5r som helst \u2014 midt i et m\u00f8de, midt om natten, midt i en samtale. De er ubehagelige, men de er ikke farlige. Det er kroppen der genforhandler sin termostat.\n\nK\u00f8lende f\u00f8devarer hj\u00e6lper: agurk, vandmelon, p\u00e6re, mintete. Undg\u00e5 alkohol, st\u00e6rke krydderier og stressende situationer lige f\u00f8r sengetid. V\u00e6r kl\u00e6dt i lag s\u00e5 du kan tilpasse dig hurtigt. Og vigtigst: lad v\u00e6re med at sk\u00e6mmes. Det er naturligt.',

  soevn: 'S\u00f8vnproblemer i overgangsalderen handler ofte om Yin-mangel og urolig Shen. N\u00e5r Yin er svag, kan Yang ikke forankres, og sindet vandrer om natten. Du v\u00e5gner m\u00e5ske mellem kl. 1 og 3 \u2014 leverens tid \u2014 med tankemylder. Eller du v\u00e5gner gennemv\u00e5d af sved og kan ikke falde i s\u00f8vn igen.\n\nEn rolig aftenrutine er vigtig: ingen sk\u00e6rme den sidste time, en kop kamillte, et varmt fodbad. Akupressurpunktet Heart 7 p\u00e5 h\u00e5ndleddets inderside kan berolige Shen. Lavendel p\u00e5 puden hj\u00e6lper nogle.\n\nOg husk: d\u00e5rlig s\u00f8vn er ikke din skyld. Det er biologi i forandring. V\u00e6r t\u00e5lmodig med dig selv.',

  humoor: 'Hum\u00f8rsvingninger i overgangsalderen minder om puberteten \u2014 og det er ikke tilf\u00e6ldigt. B\u00e5de er perioder med massive hormonelle skift der p\u00e5virker leverens evne til at bevæge Qi frit. N\u00e5r Qi stagnerer, kommer irritabiliteten. N\u00e5r Yin falder, kommer angsten.\n\nDu m\u00e6rker det m\u00e5ske som en gr\u00e5d der kommer ud af ingenting. Eller en vrede over noget ubetydeligt. Eller en tristhed der lægger sig som t\u00e5ge. Det er ikke galskab. Det er kemisk betinget emotionel turbulens.\n\nBev\u00e6gelse hj\u00e6lper enormt. En rask g\u00e5tur kan \u00e6ndre humøret p\u00e5 tyve minutter. Og tal med nogen \u2014 at s\u00e6tte ord p\u00e5 det der sker indenfor er i sig selv en form for heling.',

  libido: 'Seksualitet og intimitet forandrer sig i overgangsalderen, og det er et emne mange kvinder b\u00e6rer p\u00e5 i stilhed. Faldende \u00f8strogen kan give t\u00f8rhed i slimhinderne, og det kan g\u00f8re samvær smertefuldt. Men libido handler om mere end hormoner \u2014 det handler om forbindelse, om at f\u00f8le sig set og \u00f8nsket.\n\nI kinesisk medicin er seksuel energi en del af Jing-essensen, og den \u00e6ndrer udtryk over livet. M\u00e5ske er der nu brug for mere n\u00e6rhed, mere langsomhed, en anden form for ber\u00f8ring.\n\nKokos\u00f8lie eller naturlige glidecr\u00e8mer kan hj\u00e6lpe med t\u00f8rhed. B\u00e6kkenbunds\u00f8velser styrker det omr\u00e5de. Og vigtigst: tal med din partner eller med dig selv om hvad du har brug for. \u00d8nsker forandrer sig, og det er helt naturligt.',

  refleksioner: [
    'Hvad har du f\u00e5et frigivet ved at slippe menstruationen?',
    'Hvad ved du nu, som du ikke vidste for ti \u00e5r siden?',
    'Hvilken kvinde er du ved at blive \u2014 og hvad har hun brug for?',
    'Hvad ville du sige til din krop, hvis du talte til den som en veninde?',
    'Er der noget du har ventet med at g\u00f8re \u2014 og er tiden m\u00e5ske nu?'
  ]
};

// ---- BLOK 6: RELATION_DYBDE ----

const RELATION_DYBDE = {
  partner: {
    'VAND': 'At leve med en partner i vand-energi er som at dele et hus med havet. Der er stilhed og dybde, men ogs\u00e5 str\u00f8mme du ikke altid kan f\u00f8lge. {navn} tr\u00e6kker sig m\u00e5ske ind i sig selv uden varsel \u2014 og det handler sj\u00e6ldent om dig. Vand-elementet har brug for tid alene, tid i stilhed, tid til at synke ned. Giv den tid, og du f\u00e5r en partner der kender dig p\u00e5 en m\u00e5de der g\u00e5r dybere end ord.',
    'TR\u00c6': 'At leve med en partner i tr\u00e6-energi er som at bo ved siden af en skov i v\u00e6kst. Der er altid bev\u00e6gelse, altid en ny retning. {navn} har brug for frihed til at vokse \u2014 og den frihed kan f\u00f8les som afstand. Men det er ikke afvisning. Tr\u00e6et s\u00f8ger lyset, og n\u00e5r det finder det, vender det altid r\u00f8dderne hjem.',
    'ILD': 'At leve med en partner i ild-energi er som at dele en lejlighed med solen. Der er varme, forbindelse og gl\u00e6de \u2014 men ogs\u00e5 intensitet der kan br\u00e6nde. {navn} giver sig selv fuldt ud og forventer det m\u00e5ske ogs\u00e5 af dig. Husk at ilden ogs\u00e5 har brug for at hvile. De stille aftener er lige s\u00e5 vigtige som de levende.',
    'JORD': 'At leve med en partner i jord-energi er som at have et hjem der altid er varmt. {navn} er fundamentet \u2014 den der husker, den der n\u00e6rer, den der holder sammen p\u00e5 tingene. Men pas p\u00e5 at tage det for givet. Jord-elementet giver og giver, og det kan glemme at bede om noget selv. Sp\u00f8rg {navn}: hvad har du brug for i dag?',
    'METAL': 'At leve med en partner i metal-energi er som at dele sit liv med en klar vinterhimmel. Der er renhed, \u00e6rlighed og en evne til at se tingene som de er. {navn} siger m\u00e5ske ikke meget, men det der siges, er v\u00e6sentligt. Det kan f\u00f8les k\u00f8ligt \u2014 men under metals overflade er der en dybde af f\u00f8lelse der sj\u00e6ldent vises.'
  },
  mor: {
    'VAND': 'En mor i vand-energi b\u00e6rer en dyb, ordl\u00f8s k\u00e6rlighed. {navn} viste det m\u00e5ske ikke med store ord eller gestus, men med n\u00e6rv\u00e6r \u2014 en h\u00e5nd p\u00e5 ryggen, en stille vuggen, en varme der ikke kr\u00e6vede forklaring. Relationen til en vand-mor kan f\u00f8les dybere end den kan beskrives.',
    'TR\u00c6': 'En mor i tr\u00e6-energi er en kvinde der altid har en retning. {navn} har m\u00e5ske drevet dig fremad \u2014 mod uddannelse, mod selvstændighed, mod det du kunne blive. Det var k\u00e6rlighed, ogs\u00e5 n\u00e5r det f\u00f8ltes som pres. Tr\u00e6-elementets omsorg er at tro p\u00e5 v\u00e6kst.',
    'ILD': 'En mor i ild-energi er en kvinde med et stort hjerte. {navn} har m\u00e5ske fyldt dit liv med varme, latter og forbindelse \u2014 og m\u00e5ske ogs\u00e5 med en intensitet der kunne v\u00e6re overvældende. Ild-m\u00f8dre elsker h\u00f8jt, og det kan b\u00e5de varme og br\u00e6nde.',
    'JORD': 'En mor i jord-energi er selve fundamentet. {navn} var m\u00e5ske den der altid stod i k\u00f8kkenet, altid huskede, altid holdt sammen p\u00e5 familien. Den k\u00e6rlighed er s\u00e5 selvf\u00f8lgelig at man f\u00f8rst opdager den n\u00e5r den mangler. Jord-m\u00f8dre giver alt \u2014 og glemmer sommetider sig selv.',
    'METAL': 'En mor i metal-energi er en kvinde med h\u00f8je standarder og dyb k\u00e6rlighed. {navn} har m\u00e5ske vist omsorg gennem struktur, renhed og \u00e6rlighed \u2014 ikke altid med varme ord, men med handlinger der talte. Metal-m\u00f8dre l\u00e6rer dig at se essensen. Det kan f\u00f8les strengt, men det er ogs\u00e5 en gave.'
  },
  datter: {
    'VAND': '{navn} i vand-energi er en stille sjæl med dybe vande. Hun tr\u00e6kker sig m\u00e5ske ind i sig selv p\u00e5 m\u00e5der der bekymrer dig. Men vand-elementets dybde er en styrke \u2014 hun m\u00e6rker mere end hun siger, og hun har brug for at vide at det er okay. Giv hende plads til stilheden.',
    'TR\u00c6': '{navn} i tr\u00e6-energi er en kraft af natur. Hun vil fremad, hun vil selv, hun vil nu. Det kan f\u00f8les udfordrende \u2014 men det er livskraft i reneste form. Giv hende plads til at vokse, ogs\u00e5 n\u00e5r retningen overrasker dig. Hun finder sin vej.',
    'ILD': '{navn} i ild-energi er en solstr\u00e5le der oplyser et rum. Hendes gl\u00e6de er smittende, og hendes sorg er intens. Hun har brug for forbindelse \u2014 med dig, med veninder, med verden. V\u00e6r der n\u00e5r hun \u00e5bner sit hjerte. Det er en tillid der er uvurderlig.',
    'JORD': '{navn} i jord-energi er den der samler gruppen. Hun husker alle, bekymrer sig om alle, giver til alle. Men hvem giver til hende? V\u00e6r den der sp\u00f8rger hvad hun har brug for. Jord-elementet glemmer ofte at bede om det selv.',
    'METAL': '{navn} i metal-energi er en ung kvinde med sk\u00e6rp blik og dyb f\u00f8lsomhed. Hun kan virke k\u00f8lig eller utiln\u00e6rmelig, men under overfladen er der en s\u00e5rbarhed der har brug for tryghed. Vis hende at det er sikkert at v\u00e6re bl\u00f8d.'
  },
  veninde: {
    'VAND': '{navn} i vand-energi er den veninde du kan sidde med i stilhed. Hun beh\u00f8ver ikke fyldige samtaler for at v\u00e6re n\u00e6r. Jeres forbindelse lever m\u00e5ske i de lange pauser, i de stille kaffe-aftner, i de sms\'er der bare siger: t\u00e6nker p\u00e5 dig. V\u00e6rds\u00e6t det.',
    'TR\u00c6': '{navn} i tr\u00e6-energi er den veninde der f\u00e5r dig op af sofaen. Hun har altid en id\u00e9, altid en plan, altid en ny retning. Det kan v\u00e6re inspirerende og udmattende. Men hendes gave er at minde dig om at livet bev\u00e6ger sig \u2014 og at du bev\u00e6ger dig med det.',
    'ILD': '{navn} i ild-energi er den veninde der f\u00e5r dig til at le. Hendes varme er smittende, og hun har en evne til at f\u00e5 enhver aften til at f\u00f8les som en fest. Men husk at checke ind \u2014 under gl\u00e6den kan der ligge en ensomhed hun ikke viser.',
    'JORD': '{navn} i jord-energi er den veninde der altid husker din f\u00f8dselsdag og sp\u00f8rger hvordan det g\u00e5r \u2014 og virkelig lytter til svaret. Hun er fundamentet i jeres venskab. Giv hende noget tilbage. Sp\u00f8rg hende det samme sp\u00f8rgsm\u00e5l. Og lyt.',
    'METAL': '{navn} i metal-energi er den veninde der siger sandheden, ogs\u00e5 n\u00e5r den er ubehagelig. Hendes \u00e6rlighed er en gave \u2014 hun ser dig som du er, uden filter. Det kan f\u00f8les skarpt, men det er ogs\u00e5 det der g\u00f8r jeres venskab \u00e6gte.'
  }
};

// ---- BLOK 7: UDVIDET_HJAELP ----

const UDVIDET_HJAELP = {
  stress: {
    'VAND': {
      dyb: 'N\u00e5r stress rammer dit vand-element, er det nyrerne der t\u00e6rer. Binyretr\u00e6thed er det vestlige ord for det, kinesisk medicin kalder Kidney Qi-udt\u00f8mning. Du k\u00f8rer p\u00e5 reserve, og kroppen reagerer med frygt \u2014 en diffus, navnl\u00f8s angst der dukker op om aftenen, i stilheden, n\u00e5r du endelig standser. L\u00e6nden er \u00f8m, f\u00f8dderne er kolde, og s\u00f8vnen reparerer ikke som den skal. Det er ikke svaghed. Det er et system der er k\u00f8rt t\u00f8r.',
      oevelse: 'L\u00e6g dig ned. L\u00e6g varme h\u00e6nder p\u00e5 l\u00e6nden over nyrerne. \u00c5nd dybt i fire t\u00e6l, hold i fire, ud i otte. Forestil dig varme der str\u00f8mmer ned i b\u00e6kkenet. Bliv her i fem minutter.',
      kost_raad: 'Drik en kop varm knoglesuppe eller varmt vand med en skive ingef\u00e6r. Undg\u00e5 kaffe \u2014 den l\u00e5ner energi du ikke har.'
    },
    'TR\u00c6': {
      dyb: 'Stress i dit tr\u00e6-element sidder i leveren som stagnation. Energien vil fremad, men livet siger vent. Resultatet er sp\u00e6nding \u2014 i nakken, i k\u00e6ben, i den rastl\u00f8shed der driver dig fra opgave til opgave uden at noget f\u00f8les f\u00e6rdigt. Hovedpinen kommer i tindingerne, frustrationens hjemsted i kinesisk medicin. Du er ikke sur p\u00e5 nogen specifik. Du er fanget.',
      oevelse: 'Rejs dig op. Ryst kroppen l\u00f8s i to minutter \u2014 h\u00e6nder, arme, hofter, ben. Lad lyden komme ud. St\u00e5 derefter helt stille og m\u00e6rk den varme der spreder sig. Leverens stagnation l\u00f8sner.',
      kost_raad: 'Et glas varmt vand med frisk citronsaft. Surt st\u00f8tter leveren og f\u00e5r Qi til at bev\u00e6ge sig.'
    },
    'ILD': {
      dyb: 'Stress i dit ild-element overbelaster hjertet. Du har sagt ja til for meget, \u00e5bnet dig for for mange, givet mere end du havde. Nu banker hjertet for hurtigt, tankerne k\u00f8rer, og s\u00f8vnen kommer ikke. Det er Shen \u2014 din bevidsthed \u2014 der er blevet hjemløs. For mange indtryk, for lidt ro. Pericardium, din hjertebeskytter, er overbelastet.',
      oevelse: 'L\u00e6g h\u00e5nden p\u00e5 brystet. \u00c5nd ind i fire, ud i otte. Sig stille til dig selv: mit hjerte m\u00e5 hvile nu. Gentag i tre minutter. M\u00e6rk varmen under h\u00e5nden falde til ro.',
      kost_raad: 'En kop kamillte eller hibiscuste. K\u00f8ler hjerteild og beroer nervesystemet.'
    },
    'JORD': {
      dyb: 'Stress i dit jord-element k\u00f8rer i cirkler. Milten er overbelastet af bekymring, og tankerne gentager sig: hvad nu? Hvad hvis? Ford\u00f8jelsen g\u00e5r langsomt, maven f\u00f8les oppustet, og der er en tung tr\u00e6thed der f\u00f8les som en v\u00e5d d\u00e6kken over alt. Det er fugt \u2014 i kinesisk medicinsk forstand \u2014 der hober sig op n\u00e5r milten ikke kan transformere.',
      oevelse: 'L\u00e6g begge h\u00e6nder p\u00e5 maven. \u00c5nd ned i maven i fire t\u00e6l, hold i to, ud i seks. M\u00e6rk h\u00e6ndernes varme synke ind. Miltens punkt Milt 6 ligger fire fingre over den indre ankel \u2014 pres bl\u00f8dt her i et minut.',
      kost_raad: 'En sk\u00e5l varm rissuppe eller havregrød med kanel. Milten elsker varme, s\u00f8d smag og forudsigelighed.'
    },
    'METAL': {
      dyb: 'Stress i dit metal-element viser sig som en forsnævring. Lungerne trækker sig sammen, vejrtr\u00e6kningen bliver kort og overfladisk, og verden f\u00f8les tr\u00e6ngere. Du m\u00e6rker det m\u00e5ske som en t\u00f8r hoste, sp\u00e6ndinger i brystet eller en hud der reagerer. Perfektionismen intensiveres \u2014 intet er godt nok, og du presser h\u00e5rdere og h\u00e5rdere.',
      oevelse: '\u00c5bn vinduet. St\u00e5 oprejst og \u00e5nd ind i fire t\u00e6l gennem n\u00e6sen, hold i syv, \u00e5nd ud gennem munden i otte. M\u00e6rk lungerne udvide sig. Gentag fem gange. Lad skulderne falde.',
      kost_raad: 'En p\u00e6re \u2014 r\u00e5 eller let kogt med honning. P\u00e6rer fugter lungerne og k\u00f8ler varme.'
    }
  },
  depression: {
    'VAND': {
      dyb: 'Depression i vand-elementet f\u00f8les som at synke til bunds \u2014 langsomt, stille, uundg\u00e5eligt. Nyrerne er udt\u00f8mte, og frygten er ikke l\u00e6ngere specifik men gennemgribende. Alt f\u00f8les tungt, m\u00f8rkt, for meget. Kroppen er kold, tr\u00e6t, og s\u00f8vnen er enten overdreven eller fraværende. Det er Jing-essensen der er p\u00e5 sit laveste.\n\nOg husk at du altid kan tale med nogen \u2014 din l\u00e6ge, en veninde, en linje der lytter.',
      oevelse: 'L\u00e6g dig under et varmt t\u00e6ppe. L\u00e6g h\u00e6nderne p\u00e5 l\u00e6nden. \u00c5nd langsomt og t\u00e6l \u00e5ndedr\u00e6ttene. Ti ind\u00e5ndinger er nok. Du beh\u00f8ver ikke g\u00f8re mere.',
      kost_raad: 'Varm suppe med salt smag \u2014 miso, knoglesuppe, tang. Varme indefra, langsomt og st\u00f8t.'
    },
    'TR\u00c6': {
      dyb: 'Depression i tr\u00e6-elementet f\u00f8les som at v\u00e6re plantet i beton. Leveren stagnerer s\u00e5 dybt at selv vreden er forsvundet, og uden vreden er der ingen drivkraft. Alt f\u00f8les meningsl\u00f8st, retningsl\u00f8st, fastl\u00e5st. Det er ikke dovenskab. Det er en energi der sidder s\u00e5 fast at den ikke kan bev\u00e6ge sig.\n\nOg husk at du altid kan tale med nogen \u2014 din l\u00e6ge, en veninde, en linje der lytter.',
      oevelse: 'Rejs dig op. G\u00e5 til d\u00f8ren. \u00c5bn den. G\u00e5 ti skridt. Det er nok for nu. Bare det at bev\u00e6ge kroppen l\u00f8sner noget i leveren.',
      kost_raad: 'Et glas varmt vand med citronsaft og lidt frisk mynte. Surt bev\u00e6ger Qi, mynte \u00e5bner.'
    },
    'ILD': {
      dyb: 'Depression i ild-elementet f\u00f8les som en slukket flamme. Hjertet, der normalt br\u00e6nder med gl\u00e6de og forbindelse, er koldt og tomt. Du f\u00f8ler dig afkoblet \u2014 fra andre, fra gl\u00e6den, fra dig selv. Det er Shen der har trukket sig. Verden er stadig der, men du kan ikke m\u00e6rke den.\n\nOg husk at du altid kan tale med nogen \u2014 din l\u00e6ge, en veninde, en linje der lytter.',
      oevelse: 'L\u00e6g h\u00e5nden p\u00e5 hjertet. M\u00e6rk at det sl\u00e5r. Sig til dig selv: jeg er her. Mit hjerte sl\u00e5r. Det er nok. Bliv her i to minutter.',
      kost_raad: 'En kop varm kakao eller rosente. Noget mildt varmt der minder hjertet om gl\u00f8derne.'
    },
    'JORD': {
      dyb: 'Depression i jord-elementet f\u00f8les som rodl\u00f8shed \u2014 fundamentet er v\u00e6k, og der er ingenting at st\u00e5 p\u00e5. Milten kan ikke transformere, og alt hober sig op: tanker, f\u00f8lelser, fyisk tyngde. Du grublerer men finder ingen svar. Du vil hj\u00e6lpe andre men har ingenting at give.\n\nOg husk at du altid kan tale med nogen \u2014 din l\u00e6ge, en veninde, en linje der lytter.',
      oevelse: 'S\u00e6t dig ned. M\u00e6rk stolen under dig. M\u00e6rk gulvet under f\u00f8dderne. L\u00e6g h\u00e6nderne i sk\u00f8det og m\u00e6rk deres v\u00e6gt. Du er her. Jorden b\u00e6rer dig.',
      kost_raad: 'En sk\u00e5l varm havregr\u00f8d med kanel og et par skiver banan. N\u00e6ring der er blid og forudsigelig.'
    },
    'METAL': {
      dyb: 'Depression i metal-elementet f\u00f8les som en verden der er blevet tom. Alt det v\u00e6sentlige er fjernet, og der er kun tomhed tilbage. Lungerne \u00e5nder, men det f\u00f8les mekanisk. Huden er f\u00f8lsom, og ber\u00f8ring kan f\u00f8les for meget eller for lidt. Det er sorgen der har taget over \u2014 en sorg der m\u00e5ske ikke har et navn.\n\nOg husk at du altid kan tale med nogen \u2014 din l\u00e6ge, en veninde, en linje der lytter.',
      oevelse: 'Tr\u00e6d udenfor. M\u00e6rk luften p\u00e5 huden. Tag tre dybe ind\u00e5ndinger \u2014 langsomt, bevidst. Lad lungerne fylde sig helt. Det er nok.',
      kost_raad: 'En p\u00e6re kogt med lidt honning og kanel. Blidt, fugtende, n\u00e6rende for lungerne.'
    }
  },
  ensomhed: {
    'VAND': {
      dyb: 'Ensomhed i vand-elementet sidder dybt i kroppen \u2014 i nyrerne, i l\u00e6nden, i den uro der kommer om natten. Det er en urmenneskelig l\u00e6ngsel efter at h\u00f8re til, efter at v\u00e6re holdt. Nyrernes frygt intensiveres af isolation, og verden kan f\u00f8les k\u00f8lig og ubeboelig.',
      oevelse: 'Tag et varmt fodbad i ti minutter. Nyrernes meridian begynder under foden \u2014 varmen stiger op og minder kroppen om at den ikke er alene.',
      kost_raad: 'En kop varm suppe med salt smag. Miso, tang, knoglesuppe \u2014 noget dybt n\u00e6rende.'
    },
    'TR\u00c6': {
      dyb: 'Ensomhed i tr\u00e6-elementet er mangel p\u00e5 spejling. Du vokser, men ingen ser det. Leveren s\u00f8ger retning og anerkendelse, og uden det kan energien stagnere til en stille frustration over at v\u00e6re usynlig i sit eget liv.',
      oevelse: 'G\u00e5 en rask tur \u2014 mindst tyve minutter. Lad armene svinge, lad skrittene v\u00e6re faste. Bev\u00e6gelsen l\u00f8sner stagnation, ogs\u00e5 den emotionelle.',
      kost_raad: 'Et glas varmt vand med citronsaft. Surt aktiverer leveren og f\u00e5r energien til at bev\u00e6ge sig.'
    },
    'ILD': {
      dyb: 'Ensomhed i ild-elementet er hjertets sorg. Du er skabt til forbindelse, og uden den f\u00f8les verden kold. Hjertet lukker sig som beskyttelse, men det der beskytter det, er ogs\u00e5 det der opretholder ensomheden. Et lukket hjerte er sikkert men ogs\u00e5 tomt.',
      oevelse: 'Skriv en besked til \u00e9n person du t\u00e6nker p\u00e5. Det beh\u00f8ver ikke v\u00e6re stort \u2014 bare et: t\u00e6nker p\u00e5 dig. Det \u00e5bner en d\u00f8r.',
      kost_raad: 'En kop rosente eller hibiscuste. Noget varmt der minder hjertet om forbindelse.'
    },
    'JORD': {
      dyb: 'Ensomhed i jord-elementet er at n\u00e6re alle andre men aldrig selv blive n\u00e6ret. Milten t\u00f8mmes, og den tryghed du giver andre, finder aldrig vej tilbage til dig. Du er m\u00e5ske omgivet af mennesker, men f\u00f8ler dig stadig alene med det hele.',
      oevelse: 'Ring til nogen og sig: jeg har brug for at h\u00f8re din stemme. Ikke for at l\u00f8se noget \u2014 bare for at v\u00e6re forbundet. Lad nogen n\u00e6re dig.',
      kost_raad: 'En sk\u00e5l rissuppe med lidt ingef\u00e6r. Varme, s\u00f8d smag, noget der holder dig.'
    },
    'METAL': {
      dyb: 'Ensomhed i metal-elementet er det essentielle fravær. Noget vigtigt mangler, og intet kan erstatte det. Lungerne holder p\u00e5 det tomme \u2014 hvert \u00e5ndedrag en p\u00e5mindelse om det der ikke er der l\u00e6ngere.',
      oevelse: 'G\u00e5 udenfor og tag ti dybe \u00e5ndedrag. M\u00e6rk luften p\u00e5 huden. Luften er ber\u00f8ring \u2014 hele verden rører ved dig med hvert \u00e5ndedrag.',
      kost_raad: 'En p\u00e6re med lidt honning. Blidt, fugtende, en lille gave til lungerne.'
    }
  },
  angst: {
    'VAND': {
      dyb: 'Angst i vand-elementet er nyrernes alarm. Det er den \u00e6ldste frygt \u2014 den der sidder i kroppen f\u00f8r ordene finder den. Hjertet banker, h\u00e6nderne ryster, maven knuger sig sammen. Nyrernes adrenalin skyller gennem systemet som en flodbølge der aldrig lander.',
      oevelse: 'S\u00e6t dig ned. L\u00e6g f\u00f8dderne fladt p\u00e5 gulvet. Pres Kidney 1-punktet under foden med en tennisbold eller tommelfinger. Hold i tyve sekunder per fod. Det forankrer energien nedad.',
      kost_raad: 'Varmt vand med lidt salt \u2014 en knivspids havsalt i en kop. Det beroer nyrerne direkte.'
    },
    'TR\u00c6': {
      dyb: 'Angst i tr\u00e6-elementet er frustreret energi der vender sig indad. Leveren vil bev\u00e6ge sig men kan ikke, og den fastl\u00e5ste Qi bliver til en indre uro der f\u00f8les som angst. Musklerne sp\u00e6nder, k\u00e6ben bider, og tankerne k\u00f8rer i ring om det v\u00e6rste der kan ske.',
      oevelse: 'St\u00e5 op og stræk dig til siderne \u2014 \u00e9n arm over hovedet, l\u00e6n til modsat side. Hold i fem \u00e5ndedrag. Skift side. Det \u00e5bner lever-meridianen langs kroppens sider.',
      kost_raad: 'Et glas varmt vand med citronsaft og pebermynte. Bevæger stagneret Lever Qi.'
    },
    'ILD': {
      dyb: 'Angst i ild-elementet er hjertets overbelastning. Shen er urolig, og tankerne flakker fra det ene til det andet uden at finde hvile. Hjertet banker for hurtigt, brystet f\u00f8les trangt, og der er en f\u00f8lelse af at alt er for meget. Det er for mange forbindelser, for mange indtryk, for lidt grounding.',
      oevelse: 'L\u00e6g begge h\u00e6nder p\u00e5 brystet. \u00c5nd ind i fire, hold i fire, ud i otte. Sig stille: mit hjerte m\u00e5 hvile. Gentag fem gange. M\u00e6rk h\u00e6ndernes v\u00e6gt roe hjertet.',
      kost_raad: 'En kop kamillte med lidt lavendel. K\u00f8ler hjerteild og beroer Shen.'
    },
    'JORD': {
      dyb: 'Angst i jord-elementet er bekymringens spiral. Milten k\u00f8rer i ring: hvad nu hvis noget g\u00e5r galt? Hvad hvis jeg ikke er nok? Tankerne gentager sig uden svar, og ford\u00f8jelsen g\u00e5r i st\u00e5. Det er milten der fors\u00f8ger at forberede sig p\u00e5 det v\u00e6rste \u2014 utr\u00e6tteligt, forgæves.',
      oevelse: 'L\u00e6g h\u00e6nderne p\u00e5 maven. M\u00e6rk varmen. Sig til dig selv: lige nu er alt godt nok. Gentag det langsomt, fem gange. Lad ordene synke ned i maven.',
      kost_raad: 'En kop ingef\u00e6rte med honning. Varmer milten, beroer maven, l\u00f8sner knuden.'
    },
    'METAL': {
      dyb: 'Angst i metal-elementet er en forsnævring af verden. Lungerne lukker ned, vejrtr\u00e6kningen bliver kort og overfladisk, og alt f\u00f8les for t\u00e6t, for snævert. Det er som at v\u00e6re i et rum der langsomt krymper. Metal-elementets perfektionisme forværrer det \u2014 intet er sikkert nok, rent nok, godt nok.',
      oevelse: '\u00c5bn et vindue. St\u00e5 foran det og \u00e5nd ind i fire t\u00e6l, hold i syv, ud i otte. M\u00e6rk den friske luft i lungerne. Gentag syv gange. Lungerne \u00e5bner sig igen.',
      kost_raad: 'Et par mandler og en p\u00e6re. Mandler n\u00e6rer lungerne, p\u00e6rer fugter. Enkelt og effektivt.'
    }
  },
  udbraendthed: {
    'VAND': {
      dyb: 'Udbr\u00e6ndthed i vand-elementet er den dybeste form for udt\u00f8mning. Nyrernes Jing er brugt, og der er ingenting tilbage at k\u00f8re p\u00e5. Du f\u00f8ler dig ikke bare tr\u00e6t \u2014 du f\u00f8ler dig tom. Gammel, kold, f\u00e6rdig. Det er ikke sandt, men det f\u00f8les overbevisende. Kroppen beder om \u00e9n ting: stop.',
      oevelse: 'L\u00e6g dig ned et m\u00f8rkt sted i femten minutter. G\u00f8r ingenting. Bare lig. Lad tyngdekraften holde dig. Nyrerne genopbygges i passiv hvile.',
      kost_raad: 'Varm knoglesuppe med ingefær. Den dybeste form for n\u00e6ring. Langsom, varm, genopbyggende.'
    },
    'TR\u00c6': {
      dyb: 'Udbr\u00e6ndthed i tr\u00e6-elementet er v\u00e6kst der er vendt til aske. Leveren har k\u00f8rt s\u00e5 h\u00e5rdt at den er stagneret fuldst\u00e6ndigt. Du har ingen retning, ingen drivkraft, ingen vrede \u2014 og uden vrede er tr\u00e6et d\u00f8dt tr\u00e6. Alt f\u00f8les meningsl\u00f8st og fladt.',
      oevelse: 'G\u00e5 udenfor. Se p\u00e5 et tr\u00e6. Se p\u00e5 grenene, bladene, stammen. M\u00e6rk at v\u00e6kst ikke kr\u00e6ver hastighed. St\u00e5 i fem minutter og bare kig.',
      kost_raad: 'En salat med friske, gr\u00f8nne blade og citrondressing. Leverens farve, leverens smag.'
    },
    'ILD': {
      dyb: 'Udbr\u00e6ndthed i ild-elementet er en slukket flamme. Du har givet s\u00e5 meget varme at der ikke er gl\u00f8der tilbage. Hjertet er tr\u00e6t, gl\u00e6den er v\u00e6k, og forbindelserne f\u00f8les tomme. Det er som et bl\u00e5lys der er br\u00e6ndt ned \u2014 ikke engang r\u00f8gen er der l\u00e6ngere.',
      oevelse: 'T\u00e6nd et stearinlys. Sid foran det i fem minutter. M\u00e6rk varmen. Sig stille: min ild er ikke slukket. Den hviler. Lad flammen minde dig.',
      kost_raad: 'Varm kakao med lidt chili eller kanel. En lille gnist der minder hjertet om gl\u00f8derne.'
    },
    'JORD': {
      dyb: 'Udbr\u00e6ndthed i jord-elementet er at have givet alt sit fundament v\u00e6k. Milten er t\u00f8mt, og du har ingenting at st\u00e5 p\u00e5. Du har n\u00e6ret alle andre, og nu er der ingenting til dig selv. Ford\u00f8jelsen er kaotisk, tankerne er tungere end kroppen, og tryghed f\u00f8les som en fj\u00e6rn erindring.',
      oevelse: 'S\u00e6t dig ned og spis \u00e9t m\u00e5ltid langsomt og opm\u00e6rksomt. Ingen sk\u00e6rm, ingen bog, ingen samtale. Bare maden, smagen, varmen. Lad milten m\u00e6rke at du n\u00e6rer DIG.',
      kost_raad: 'En varm sk\u00e5l rissuppe med s\u00f8d kartoffel og et dr\u00fds kanel. Miltens yndlingsm\u00e5ltid.'
    },
    'METAL': {
      dyb: 'Udbr\u00e6ndthed i metal-elementet er at have poleret alt v\u00e6k \u2014 inklusive dig selv. Du har str\u00e6bt efter perfektion s\u00e5 l\u00e6nge at der ikke er noget liv tilbage. Lungerne er flade, vejrtr\u00e6kningen overfladisk, og verden f\u00f8les gr\u00e5 og uden substans. Det er som en vinter der aldrig bliver til for\u00e5r.',
      oevelse: 'G\u00e5 udenfor og tag ti dybe \u00e5ndedrag af frisk luft. Lad lungerne fylde sig helt \u2014 b\u00e5de for og bag. M\u00e6rk at der er mere plads i dig end du tror.',
      kost_raad: 'En p\u00e6re kogt med honning og lidt hvid peber. Lungernes klassiske n\u00e6ringsret i kinesisk tradition.'
    }
  }
};

// ---- BLOK 8: SJAELDNE_VINDUER ----

const SJAELDNE_VINDUER = {
  dobbelt: {
    'VAND': 'To af dine cyklusser m\u00f8des i vand lige nu. Det er en invitation til at g\u00e5 dybere end normalt \u2014 din intuition er sk\u00e6rpet, og kroppen beder om stilhed.',
    'TR\u00c6': 'To cyklusser i tr\u00e6. Din v\u00e6kstkraft er forst\u00e6rket \u2014 noget i dig s\u00f8ger fremad med ekstra styrke. F\u00f8lg den retning, der kalder tydeligt.',
    'ILD': 'To cyklusser i ild. Din forbindelsesevne er p\u00e5 sit h\u00f8jeste. Brug dette vindue til de samtaler og m\u00f8der der virkelig betyder noget.',
    'JORD': 'To cyklusser i jord. Dit fundament er st\u00e6rkere end normalt. Det er en god dag til at bygge, plante, n\u00e6re \u2014 b\u00e5de konkret og billedligt.',
    'METAL': 'To cyklusser i metal. Din klarhed er sk\u00e6rpet. Brug dette vindue til at se hvad der er v\u00e6sentligt \u2014 og give slip p\u00e5 det der ikke er.'
  },
  tredobbelt: {
    'VAND': 'Tre cyklusser i vand. Det er sj\u00e6ldent, og det er kraftfuldt. Alt i dig peger mod dybden lige nu. Respect\u00e9r det \u2014 dette er et vindue der ikke varer l\u00e6nge. Giv dig selv lov til at synke ind.',
    'TR\u00c6': 'Tre cyklusser i tr\u00e6. En usædvanlig samling af v\u00e6kstkraft. Noget stort vil gerne f\u00f8des \u2014 et projekt, en beslutning, en ny retning. Lyt efter den indre stemme der siger: nu.',
    'ILD': 'Tre cyklusser i ild. Dit hjerte br\u00e6nder med tredobbelt flamme. Forbindelserne er intense, gl\u00e6den n\u00e6r overfladen. Brug denne dag til k\u00e6rlighed \u2014 i alle dens former.',
    'JORD': 'Tre cyklusser i jord. En sj\u00e6lden dybde af tryghed og fundament. Du er i dit elements midte. Brug dette vindue til at plante det der skal vare \u2014 relationer, ritualer, r\u00f8dder.',
    'METAL': 'Tre cyklusser i metal. En usædvanlig klarhed gennemtr\u00e6nger alt. Du ser tingene som de er \u2014 rent, skarpt, uden illusion. Brug denne indsigt til at frigøre det der holder dig tilbage.'
  },
  fuld_resonans: {
    'VAND': 'Fuld vand-resonans. Det sker n\u00e6sten aldrig. Alt i dig synger den samme tone \u2014 dybde, stilhed, intuition. Brug dette vindue til noget der betyder noget for dig. Skriv, mediter, v\u00e6r ved vand. Lad dagen v\u00e6re stille og dyb.',
    'TR\u00c6': 'Fuld tr\u00e6-resonans. Alle dine cyklusser peger i samme retning \u2014 fremad, opad, mod lyset. En s\u00e5dan dag kommer m\u00e5ske kun \u00e9n gang p\u00e5 mange \u00e5r. Tr\u00e6f den beslutning du har udskudt. Start det du har dr\u00f8mt om.',
    'ILD': 'Fuld ild-resonans. Dit hjerte synger med alle stemmer p\u00e5 \u00e9n gang. Forbindelse, gl\u00e6de, passion, varme \u2014 alt er forst\u00e6rket. Del denne dag med nogen du elsker. Sig det du m\u00e5ske har ventet med at sige.',
    'JORD': 'Fuld jord-resonans. En sj\u00e6lden harmoni af tryghed og n\u00e6ring. Du er selve fundamentet i dag \u2014 for dig selv og for dem omkring dig. Plant noget der skal vokse i \u00e5revis. Denne dag b\u00e6rer frugt l\u00e6nge.',
    'METAL': 'Fuld metal-resonans. En klarhed s\u00e5 ren at den n\u00e6sten g\u00f8r ondt. Alt det uv\u00e6sentlige falder v\u00e6k, og essensen st\u00e5r tilbage. Brug dette \u00f8jeblik til at se dit liv som det virkelig er \u2014 og m\u00e6rk at det er nok.'
  }
};

// ---- BLOK 9: CYKLUS_SKIFT_TEKST ----

const CYKLUS_SKIFT_TEKST = {
  'VAND_TR\u00c6': 'Vandet giver plads til v\u00e6kst. Du m\u00e6rker m\u00e5ske en ny energi \u2014 noget der vil fremad. Lad den komme, uden at forcere.',
  'VAND_ILD': 'Fra stilhed til flamme. Skiftet kan f\u00f8les abrupt \u2014 nyd den nye varme, men husk at holde forbindelsen til dybden.',
  'VAND_JORD': 'Dybden finder fundament. Du bev\u00e6ger dig fra det flydende til det faste \u2014 en god dag at skabe orden.',
  'VAND_METAL': 'Vand m\u00f8der klarhed. Fra intuition til essens. Hvad ved du allerede, som du ikke har sagt h\u00f8jt?',
  'TR\u00c6_VAND': 'V\u00e6ksten s\u00f8ger dybde. Tempoet s\u00e6nkes, og retningen g\u00e5r indad. Det er ikke tilbageskridt \u2014 det er r\u00f8dderne der s\u00f8ger vand.',
  'TR\u00c6_ILD': 'Tr\u00e6et n\u00e6rer ilden. Din v\u00e6kstkraft antændes nu af passion. Det f\u00f8les naturligt \u2014 som for\u00e5ret der g\u00e5r over i sommer.',
  'TR\u00c6_JORD': 'Fra v\u00e6kst til fundament. Noget i dig vil sl\u00e5 rod nu. Lad det ske \u2014 ikke alt beh\u00f8ver v\u00e6re i bev\u00e6gelse.',
  'TR\u00c6_METAL': 'V\u00e6ksten m\u00f8der klarhed. Metal besk\u00e6rer tr\u00e6et \u2014 hvad skal beholdes, hvad m\u00e5 g\u00e5? Det kan f\u00f8les skarpt, men det er n\u00f8dvendigt.',
  'ILD_VAND': 'Ilden k\u00f8ler ned. Fra forbindelse og varme til stilhed og dybde. Lad overgangen v\u00e6re blid \u2014 hjertet har brug for hvile.',
  'ILD_TR\u00c6': 'Fra flamme til v\u00e6kst. Ildens passion finder retning. Der er en ny drive i dig \u2014 kreativ, fremadrettet, levende.',
  'ILD_JORD': 'Ild n\u00e6rer jord. Varmen lander i fundamentet. Du m\u00e6rker m\u00e5ske en trang til at tage dig af noget \u2014 dig selv, dit hjem, dine n\u00e6rmeste.',
  'ILD_METAL': 'Fra varme til klarhed. Hjertet g\u00f8r plads for lungernes essens. Et skift der beder dig sortere: hvad er \u00e6gte varme, og hvad er vane?',
  'JORD_VAND': 'Fundamentet l\u00f8sner. Jorden g\u00f8r plads for vandets dybde. Det kan f\u00f8les utrygt, men der er en visdom i at lade det faste flyde.',
  'JORD_TR\u00c6': 'Jord giver plads til v\u00e6kst. Noget nyt bryder op af fundamentet \u2014 som tulipaner gennem mulden. Giv det plads.',
  'JORD_ILD': 'Fra tryghed til forbindelse. Fundamentet br\u00e6nder op i ildens varme. Lad hjertet \u00e5bne sig \u2014 der er nogen der har brug for din varme.',
  'JORD_METAL': 'Jord producerer metal. Fra n\u00e6ring til klarhed. Du m\u00e6rker m\u00e5ske en ny sk\u00e6rpethed \u2014 en evne til at se hvad der virkelig t\u00e6ller.',
  'METAL_VAND': 'Metal n\u00e6rer vand. Klarheden synker ned i dybden. Et naturligt, n\u00e6rende skift \u2014 som efteråret der langsomt g\u00e5r over i vinter.',
  'METAL_TR\u00c6': 'Fra essens til v\u00e6kst. Noget nyt bryder frem fra det du troede var f\u00e6rdigt. For\u00e5ret kommer, ogs\u00e5 efter den l\u00e6ngste vinter.',
  'METAL_ILD': 'Metal smelter i ilden. Din klarhed bl\u00f8dg\u00f8res af varme. Det kan f\u00f8les sårbart, men m\u00e5ske er det pr\u00e6cis det du har brug for.',
  'METAL_JORD': 'Fra essens til fundament. Klarheden finder et sted at lande. En god dag til at bruge din indsigt til at bygge noget konkret.'
};

// ---- BLOK 10: AARSTID_ELEMENT_TEKST ----

const AARSTID_ELEMENT_TEKST = {
  vinter: {
    'VAND': 'Vinter og vand. Dobbelt dybde, dobbelt stilhed. Dette er din \u00e5rstid \u2014 alt i naturen bekræfter det din krop allerede ved: det er tid til at samle kr\u00e6fter. Lad dig synke ind i m\u00f8rket uden skyld. Det er her genopbygningen sker.',
    'TR\u00c6': 'Vinter med tr\u00e6-energi. Der er noget i dig der vil vokse, men \u00e5rstiden beder dig vente. Tillad sp\u00e6ndingen \u2014 fr\u00f8et har brug for m\u00f8rket. Den drivkraft du m\u00e6rker er ikke forkert, den er bare for tidlig. For\u00e5ret kommer.',
    'ILD': 'Vinter med ild-energi. Din varme st\u00e5r i kontrast til kulden udenfor. Du l\u00e6nges m\u00e5ske efter forbindelse, efter gl\u00e6de, efter lys. Find den varme indvendig \u2014 et stearinlys, en varm kop, en veninde der forstår.',
    'JORD': 'Vinter med jord-energi. Naturen hviler, men din trang til at n\u00e6re er uforandret. Brug vinteren til at n\u00e6re dig selv for en gangs skyld. Varme supper, bløde tæpper, rytme og regelmæssighed. Milten takker dig.',
    'METAL': 'Vinter med metal-energi. Klarheden er sk\u00e6rpet i den kolde luft. Din evne til at se essensen er p\u00e5 sit h\u00f8jeste. Brug vinterstilheden til at give slip p\u00e5 det overfl\u00f8dige. Lungerne \u00e5nder dybere n\u00e5r luften er ren.'
  },
  foraar: {
    'VAND': 'For\u00e5r med vand-energi. Naturen v\u00e5gner, men noget i dig vil stadig hvile. Det er naturligt \u2014 dit element har dybde, og dybde kræver tid. Lad for\u00e5ret komme til dig i stedet for at jage det. Du vokser ogs\u00e5, bare nedefra.',
    'TR\u00c6': 'For\u00e5r og tr\u00e6. Dobbelt v\u00e6kst, dobbelt kraft. Alt i naturen spejler det du m\u00e6rker \u2014 en intens trang til at bryde igennem. F\u00f8lg den energi. Dette er dit \u00f8jeblik. Leveren jubilerer.',
    'ILD': 'For\u00e5r med ild-energi. V\u00e6ksten n\u00e6rer din flamme. Du m\u00e6rker m\u00e5ske en stigende begejstring, en lyst til at forbinde, til at v\u00e6re ude, til at m\u00f8de verden. Lad for\u00e5ret puste til ilden.',
    'JORD': 'For\u00e5r med jord-energi. V\u00e6ksten kan f\u00f8les urolig for dig der elsker stabilitet. Men jord er det for\u00e5ret vokser i. Du er fundamentet for alt det nye. M\u00e6rk den styrke \u2014 uden dig gror intet.',
    'METAL': 'For\u00e5r med metal-energi. Det nye gr\u00f8nne kan f\u00f8les kaotisk for din klarhed. Men for\u00e5ret renser ogs\u00e5 \u2014 det fejer vinterstøvet v\u00e6k. Lad forårsvinden b\u00e6re det v\u00e6k du ikke l\u00e6ngere har brug for.'
  },
  sommer: {
    'VAND': 'Sommer med vand-energi. Alle andre blomstre og br\u00e6nder, men du s\u00f8ger m\u00e5ske skyggen. Det er helt i orden. Find vand \u2014 s\u00f8en, havet, bruset \u2014 og lad sommerens varme m\u00f8de din dybde. Begge er n\u00f8dvendige.',
    'TR\u00c6': 'Sommer med tr\u00e6-energi. Din v\u00e6kst bader i sommerens lys. Der er en f\u00f8lelse af udfoldelse, af at alting lykkes. Nyd det \u2014 men husk at tr\u00e6et ogs\u00e5 har r\u00f8dder i skyggen. Balance.',
    'ILD': 'Sommer og ild. Dobbelt varme, dobbelt forbindelse. Dette er din \u00e5rstid \u2014 lang dage, \u00e5bne d\u00f8re, levende samtaler. Men pas p\u00e5 overophedning. Find k\u00f8ling i vandmelon, skygge og stille aftener.',
    'JORD': 'Sommer med jord-energi. Sommerens rigdom matcher din trang til at n\u00e6re. Marked, haver, frugter \u2014 alt er tilg\u00e6ngeligt. Brug sensommerens overgang til at samle ind. Du ved instinktivt hvad der skal gemmes.',
    'METAL': 'Sommer med metal-energi. Sommerens intensitet kan f\u00f8les for meget. Du s\u00f8ger m\u00e5ske ro midt i festen, klarhed midt i l\u00e5rmen. Find den \u2014 i en tidlig morgen, en stille sti, et \u00f8jeblik alene med himlen.'
  },
  sensommer: {
    'VAND': 'Sensommer med vand-energi. Lyset begynder at skifte, og din dybde forbereder sig p\u00e5 h\u00f8sten. Der er en s\u00f8dme i disse dage \u2014 den modne frugt, den varme jord. Lad den s\u00f8dme n\u00e5 dit vand-element.',
    'TR\u00c6': 'Sensommer med tr\u00e6-energi. V\u00e6ksten n\u00e5r sit h\u00f8jdepunkt og begynder langsomt at stabilisere sig. Din drivkraft m\u00f8der en invitation til at hvile. Ikke standse \u2014 bare s\u00e6nke tempoet og m\u00e6rke hvad der er modent.',
    'ILD': 'Sensommer med ild-energi. Din flamme finder et nyt udtryk \u2014 ikke eksplosiv men varm, moden, n\u00e6rv\u00e6rende. Sensommerens gl\u00f8der er dybere end sommerens blus. Nyd den modnere varme.',
    'JORD': 'Sensommer og jord. Dobbelt n\u00e6ring, dobbelt fundament. Dette er din \u00e5rstid \u2014 alt modnes, alt samles, alt finder sin plads. M\u00e6rk den tryghed der kommer af at tingene er der, hvor de skal v\u00e6re.',
    'METAL': 'Sensommer med metal-energi. Du m\u00e6rker allerede efter\u00e5ret i luften. Mens andre nyder de sidste varme dage, forbereder du dig p\u00e5 at give slip. Det er din styrke \u2014 at se forandringen f\u00f8r den kommer.'
  },
  efteraar: {
    'VAND': 'Efter\u00e5r med vand-energi. Naturen g\u00e5r indad, og du f\u00f8lger med. Metal-\u00e5rstidens klarhed n\u00e6rer dit vand \u2014 som efterårsregn der fylder b\u00e6kken. Brug denne tid til at samle din dybde.',
    'TR\u00c6': 'Efter\u00e5r med tr\u00e6-energi. Bladene falder, og din v\u00e6kstkraft m\u00f8der en naturlig gr\u00e6nse. Det kan f\u00f8les frustrerende \u2014 men tr\u00e6et slipper bladene for at overleve. Hvad m\u00e5 du give slip p\u00e5 for at vokse igen til for\u00e5r?',
    'ILD': 'Efter\u00e5r med ild-energi. Kulden kryber ind, og din flamme m\u00e5 arbejde h\u00e5rdere for at holde varmen. S\u00f8g den indre ild \u2014 mennesker, b\u00f8ger, samtaler der varmer. Du beh\u00f8ver ikke solen for at br\u00e6nde.',
    'JORD': 'Efter\u00e5r med jord-energi. H\u00f8sten er hjemme, og du kan hvile i det du har samlet. Men efter\u00e5rets slip kan f\u00f8les utrygt for dig. Stol p\u00e5 at fundamentet holder, ogs\u00e5 n\u00e5r bladene falder.',
    'METAL': 'Efter\u00e5r og metal. Dobbelt klarhed, dobbelt slip. Dette er din \u00e5rstid \u2014 alt unødvendigt falder v\u00e6k som blade fra tr\u00e6erne. M\u00e6rk sk\u00f8nheden i det rene. Essensen st\u00e5r tilbage, og den er nok.'
  }
};

// ---- BLOK 11: ORGANUR_VINDUER ----

const ORGANUR_VINDUER = {
  '03-05': {
    organ: 'Lunger',
    element: 'METAL',
    tekst: 'Lungernes tid. Mellem 3 og 5 om morgenen renser kroppen sig. Hvis du v\u00e5gner nu, er det m\u00e5ske metal-elementet der arbejder \u2014 en invitation til at slippe noget i s\u00f8vne. Dyb vejrtr\u00e6kning kan hj\u00e6lpe dig tilbage.'
  },
  '05-07': {
    organ: 'Tyktarm',
    element: 'METAL',
    tekst: 'Tyktarmens tid. Kroppen udskiller det den ikke l\u00e6ngere har brug for. Drik et glas varmt vand og giv ford\u00f8jelsen tid til at vågne. Det er metals daglige \u00f8velse i at give slip.'
  },
  '07-09': {
    organ: 'Mave',
    element: 'JORD',
    tekst: 'Mavens tid. Kroppen er klar til at modtage n\u00e6ring. En varm morgenmad nu \u2014 gr\u00f8d, \u00e6g, ristet br\u00f8d \u2014 giver milten det bedste fundament for hele dagen. Spis roligt og m\u00e6rk maden.'
  },
  '09-11': {
    organ: 'Milt',
    element: 'JORD',
    tekst: 'Miltens tid. Din evne til at omdanne mad til energi er p\u00e5 sit h\u00f8jeste. Det er en god tid til koncentreret arbejde \u2014 milten st\u00f8tter tænkningen. Undg\u00e5 sukker nu; det forstyrrer miltens sortering.'
  },
  '11-13': {
    organ: 'Hjerte',
    element: 'ILD',
    tekst: 'Hjertets tid. Midt p\u00e5 dagen er din forbindelsesenergi h\u00f8jest. Brug frokostpausen til en samtale der varmer, et m\u00f8de der betyder noget. Hjertet trives med n\u00e6rv\u00e6r og gl\u00e6de.'
  },
  '13-15': {
    organ: 'Tyndtarm',
    element: 'ILD',
    tekst: 'Tyndtarmens tid. Kroppen sorterer \u2014 hvad n\u00e6rer, hvad udskilles. Det er en god tid til at t\u00e6nke klart over hvad der er v\u00e6sentligt. Undg\u00e5 tungt arbejde; lad ford\u00f8jelsen have sin energi.'
  },
  '15-17': {
    organ: 'Bl\u00e6re',
    element: 'VAND',
    tekst: 'Bl\u00e6rens tid. Energien begynder at falde, og kroppen forbereder sig p\u00e5 aftenen. Drik vand, tag en kort pause, og lad bladeren g\u00f8re sit rensende arbejde. Undg\u00e5 at presse de sidste timer.'
  },
  '17-19': {
    organ: 'Nyrer',
    element: 'VAND',
    tekst: 'Nyrernes tid. Din dybeste energi samler sig nu. Det er her mange m\u00e6rker en naturlig tr\u00e6thed \u2014 b\u00f8rn der bliver urolige, voksne der l\u00e6nges efter sofaen. Lyt til det. Nyrerne beder om varme, ro og langsomhed.'
  },
  '19-21': {
    organ: 'Perikardium',
    element: 'ILD',
    tekst: 'Pericardiums tid. Hjertets beskytter t\u00e6nder aftenlyset. Det er tid til n\u00e6rhed \u2014 med en partner, en veninde, dig selv. Lad aftenen v\u00e6re varm men rolig. Sk\u00e6rmene kan sl\u00e6nges nu.'
  },
  '21-23': {
    organ: 'Tredobbelt Varmer',
    element: 'ILD',
    tekst: 'Tredobbelt Varmers tid. Kroppen regulerer sin indre varme og forbereder sig p\u00e5 s\u00f8vnen. Det er den perfekte tid til at g\u00e5 i seng. Lad tankerne falde til ro. Din krop ved hvad den har brug for.'
  },
  '23-01': {
    organ: 'Galdebl\u00e6re',
    element: 'TR\u00c6',
    tekst: 'Galdebl\u00e6rens tid. Beslutningsevnen regenererer sig midt om natten. Hvis du stadig er v\u00e5gen nu, belaster du den energi der skal bruges i morgen. G\u00e5 i seng \u2014 dine valg bliver klarere efter s\u00f8vn.'
  },
  '01-03': {
    organ: 'Lever',
    element: 'TR\u00c6',
    tekst: 'Leverens tid. Den dybeste rensning sker nu. Hvis du v\u00e5gner her, er det ofte et tegn p\u00e5 stagneret Lever Qi \u2014 undertrykt frustration eller uforløste f\u00f8lelser. Dyb vejrtr\u00e6kning og en p\u00e5mindelse om at det kan vente.'
  }
};

// ---- BLOK 12: EKSTRA_REFLEKSIONER_NY ----

const EKSTRA_REFLEKSIONER_NY = {
  1: [
    'Hvad er det allerf\u00f8rste du kan huske \u2014 og hvilken f\u00f8lelse b\u00e6rer det?',
    'Hvem holdt dig, da du var bange? Og hvem holder dig nu?',
    'Hvad ville dit barn-jeg sige, hvis det kunne se dig i dag?',
    'Er der en frygt fra din barndom, du stadig b\u00e6rer med dig?',
    'Hvad betyder tryghed for dig \u2014 helt konkret, helt kropsligt?',
    'Hvilken duft minder dig om at v\u00e6re lille? Hvad gemmer den sig i?',
    'Hvad var det f\u00f8rste du nogensinde var bange for? B\u00e6rer du den frygt endnu?',
    'Hvem var den voksne der fik verden til at f\u00f8les sikker? Hvad gjorde de?',
    'Er der et sted fra din barndom, du stadig kan m\u00e6rke i kroppen?',
    'Hvad var den f\u00f8rste f\u00f8lelse du l\u00e6rte at skjule?',
    'Hvilken sansning tr\u00f8stede dig som barn \u2014 en lyd, en ber\u00f8ring, et lys?',
    'Hvad sagde de voksne, som du stadig tror p\u00e5 \u2014 p\u00e5 godt eller ondt?',
    'Er der en stilhed fra barndommen, du savner? Eller en du frygter?',
    'Hvad l\u00e6rte din krop f\u00f8r dine ord \u2014 om verden, om k\u00e6rlighed, om fare?',
    'Hvis du kunne give dit barn-jeg \u00e9n gave, hvad ville det v\u00e6re?'
  ],
  2: [
    'Hvad var du mest nysgerrig p\u00e5 som barn?',
    'Hvorn\u00e5r holdt du op med at lege \u2014 og savner du det?',
    'Hvem var din bedste ven, da du var ti \u2014 og hvad l\u00e6rte I hinanden?',
    'Hvilket eventyr eller historie fangede dig som barn \u2014 og hvad siger det om dig?',
    'Hvad turde du dengang, som du ikke t\u00f8r i dag?',
    'Hvad opdagede du som barn, der stadig overrasker dig?',
    'Hvilken leg glemte du tiden i \u2014 og hvad siger det om din natur?',
    'Hvem ville du v\u00e6re, da du var otte? Og hvem blev du?',
    'Hvad var den f\u00f8rste ting du samlede p\u00e5 \u2014 og hvad siger det om dig?',
    'Er der en skov, en strand eller en baggård der stadig lever i dig?',
    'Hvad l\u00e6rte du om venskab f\u00f8r du vidste hvad det hed?',
    'Hvorn\u00e5r f\u00f8lte du dig f\u00f8rst udenfor \u2014 og hvad l\u00e6rte det dig?',
    'Hvilken voksen troede p\u00e5 dig, da du ikke troede p\u00e5 dig selv?',
    'Hvad lavede du, n\u00e5r ingen kiggede \u2014 og g\u00f8r du det stadig?',
    'Hvad ville det tiårige barn i dig gerne have at du gjorde i dag?'
  ],
  3: [
    'Hvad var det modigste du gjorde som teenager?',
    'Hvorn\u00e5r f\u00f8lte du dig mest misforst\u00e5et \u2014 og er den f\u00f8lelse stadig der?',
    'Hvad ville du sige til den unge pige du var, hvis du m\u00f8dte hende?',
    'Hvilken musik formede dig i de \u00e5r \u2014 og hvad fortalte den dig?',
    'Er der en vrede fra ungdommen, du aldrig har givet plads?',
    'Hvem var du mest jaloux p\u00e5 som teenager \u2014 og hvad sagde det om dine dr\u00f8mme?',
    'Hvad var den f\u00f8rste store skuffelse \u2014 og hvordan formede den dig?',
    'Hvilken hemmelighed bar du p\u00e5 i de \u00e5r? B\u00e6rer du den stadig?',
    'Hvad l\u00e6rte du om din krop som teenager, som du stadig k\u00e6mper med?',
    'Hvorn\u00e5r f\u00f8lte du for f\u00f8rste gang: JEG VED HVEM JEG ER?',
    'Hvem s\u00e5rede dig f\u00f8rst \u2014 og har du tilgivet dem? Og dig selv?',
    'Hvad dr\u00f8mte du om at flygte fra \u2014 og flygtede du?',
    'Hvilken regel br\u00f8d du, som du stadig er glad for at du br\u00f8d?',
    'Er der noget fra de \u00e5r, du aldrig har fortalt nogen?',
    'Hvad ville din teenage-udgave t\u00e6nke om det liv du lever nu?'
  ],
  4: [
    'Hvad dr\u00f8mte du om at skabe, da du var i tyverne?',
    'Hvilket valg fra den tid \u00e6ndrede din retning mest?',
    'Hvorn\u00e5r sagde du ja med hele hjertet \u2014 og hvad f\u00f8lte det?',
    'Er der en ambition du lagde v\u00e6k, som stadig banker p\u00e5?',
    'Hvad ville du g\u00f8re anderledes, hvis du vidste det var godt nok?',
    'Hvilken k\u00e6rlighed formede dig mest i de \u00e5r \u2014 den du fik eller den du mistede?',
    'Hvad sagde du ja til, som du burde have sagt nej til?',
    'Hvad var din st\u00f8rste frygt i tyverne \u2014 og blev den til virkelighed?',
    'Hvem troede du at du var dengang \u2014 og hvem viste du dig at v\u00e6re?',
    'Hvad plantede du i de \u00e5r, som stadig b\u00e6rer frugt?',
    'Hvorn\u00e5r opdagede du din egen styrke for f\u00f8rste gang?',
    'Er der et kompromis fra den tid, du stadig lever med?',
    'Hvad l\u00e6rte du om penge, magt eller status der \u00e6ndrede dig?',
    'Hvilken risiko fortryder du at du IKKE tog?',
    'Hvad var den smukkeste dag i dine tyvere \u2014 og hvad gjorde den s\u00e6rlig?'
  ],
  5: [
    'Hvad ville der ske, hvis du sagde nej til \u00e9n ting i morgen?',
    'Hvem tager sig af dig, n\u00e5r du tager dig af alle andre?',
    'Hvad har du brug for, som du aldrig beder om?',
    'Hvorn\u00e5r f\u00f8lte du sidst at tiden var helt din egen?',
    'Hvad ville din krop sige, hvis den kunne tale?',
    'Hvad br\u00e6nder du for lige nu \u2014 og hvad br\u00e6nder du p\u00e5?',
    'Er der forskel p\u00e5 det du g\u00f8r og det du dr\u00f8mmer om? Hvad st\u00e5r i vejen?',
    'Hvorn\u00e5r sagde du sidst: dette er nok. Jeg er nok?',
    'Hvad ville du g\u00f8re, hvis du vidste at ingen dømte dig?',
    'Hvilket m\u00f8nster gentager sig i dine relationer \u2014 og hvad pr\u00f8ver det at fort\u00e6lle dig?',
    'Hvad er den tungeste byrde du b\u00e6rer lige nu \u2014 og hvem kan hj\u00e6lpe dig med den?',
    'Er der en samtale du undg\u00e5r? Hvad er du bange for at h\u00f8re?',
    'Hvad giver dig energi \u2014 faktisk, kropsligt, m\u00e6rkbart?',
    'Hvad ville du stoppe med, hvis du turde?',
    'Hvad er forskellen p\u00e5 den du er hjemme og den du er ude? Hvem er mest dig?'
  ],
  6: [
    'Hvad ved du nu, som du gerne ville have vidst for ti \u00e5r siden?',
    'Hvilket m\u00f8nster i dit liv er du klar til at bryde?',
    'Hvad har du lyst til at g\u00f8re, som ikke giver mening for andre?',
    'Hvorn\u00e5r f\u00f8ler du dig mest som dig selv \u2014 helt uden roller?',
    'Hvad er det vigtigste du har l\u00e6rt af at leve?',
    'Hvad har du givet afkald p\u00e5 for andres skyld \u2014 og savner du det?',
    'Hvorn\u00e5r opdagede du at du var blevet voksen p\u00e5 en m\u00e5de du ikke forventede?',
    'Er der en del af dig der v\u00e5gner igen nu \u2014 noget du troede var v\u00e6k?',
    'Hvad ville du sige til dig selv om fem \u00e5r, hvis du kunne?',
    'Hvilken rolle er du tr\u00e6t af at spille \u2014 og hvem er du uden den?',
    'Hvad er den mest overraskende ting du har l\u00e6rt om dig selv det sidste \u00e5r?',
    'Er der et tab du aldrig rigtig har s\u00f8rget over? Hvad holdt dig fra det?',
    'Hvad ville du g\u00f8re med en hel dag uden forpligtelser?',
    'Hvorn\u00e5r f\u00f8lte du sidst at noget var helt rigtigt \u2014 uden tvivl, uden forbehold?',
    'Hvad er den smukkeste ting ved at blive \u00e6ldre?'
  ],
  7: [
    'Hvad kan du give slip p\u00e5, som du troede du havde brug for?',
    'Hvilken version af dig selv savner du mest?',
    'Hvad er den gave, din alder giver dig, som ungdommen ikke kunne?',
    'Er der en sandhed om dig selv, du f\u00f8rst nu t\u00f8r se?',
    'Hvad ville du g\u00f8re med dit liv, hvis du startede forfra i morgen?',
    'Hvad har du mistet, som du nu kan se var n\u00f8dvendigt at miste?',
    'Hvorn\u00e5r f\u00f8ler du dig mest levende nu \u2014 anderledes end f\u00f8r?',
    'Er der en gr\u00e6nse du endelig har sat, som du burde have sat for l\u00e6nge siden?',
    'Hvad er den st\u00f8rste forandring i dig de sidste ti \u00e5r?',
    'Hvem har du tilgivet \u2014 og hvem venter stadig?',
    'Hvad ville du g\u00f8re, hvis du ikke var bange for at skuffe nogen?',
    'Er din krop ved at fort\u00e6lle dig noget, du endnu ikke har lyttet til?',
    'Hvad er den frihed du l\u00e6nges efter \u2014 og hvad holder dig fra den?',
    'Hvilken visdom har smerten givet dig, som gl\u00e6den ikke kunne?',
    'Hvad st\u00e5r tilbage, n\u00e5r du fjerner alt det du g\u00f8r for andres skyld?'
  ],
  8: [
    'Hvad er det v\u00e6sentligste du nogensinde har l\u00e6rt?',
    'Hvem har formet dig mest \u2014 og har du fortalt dem det?',
    'Hvad betyder frihed for dig nu \u2014 anderledes end for tyve \u00e5r siden?',
    'Er der en sorg du b\u00e6rer, som fortjener at blive set?',
    'Hvad ville du sige til den unge kvinde du var, fra det sted du st\u00e5r nu?',
    'Hvad er den klareste erkendelse du er n\u00e5et til om dit liv?',
    'Hvorn\u00e5r har du f\u00f8lt dig mest fri \u2014 og hvad skabte den frihed?',
    'Er der en person du savner p\u00e5 en m\u00e5de der har \u00e6ndret sig med \u00e5rene?',
    'Hvad har du l\u00e6rt om ensomhed, som du gerne ville have vidst f\u00f8r?',
    'Hvad er den mest modige ting du har gjort efter fyrre?',
    'Er der en sandhed du nu kan rumme, som du ikke kunne f\u00f8r?',
    'Hvad er din dybeste tak \u2014 til hvem, for hvad?',
    'Hvorn\u00e5r m\u00e6rkede du at visdom ikke er det samme som viden?',
    'Hvad ville du sige til verden, hvis du vidste den lyttede?',
    'Hvad er det smukkeste du har skabt \u2014 ikke med h\u00e6nderne, men med dit liv?'
  ],
  9: [
    'Hvad er din vigtigste arv \u2014 ikke materielt, men menneskeligt?',
    'Hvad har dit liv l\u00e6rt dig om k\u00e6rlighed?',
    'Hvad ville du \u00f8nske at de der kommer efter dig, vidste?',
    'Hvorn\u00e5r f\u00f8ler du dig mest hel \u2014 mest fuldst\u00e6ndig?',
    'Hvad er det smukkeste ved det liv du har levet?',
    'Hvad ved du om gl\u00e6de nu, som du ikke vidste da du var ung?',
    'Hvilket \u00f8jeblik ville du genopleve, hvis du kunne?',
    'Hvad har livet l\u00e6rt dig om at give slip?',
    'Er der et menneske du skylder en tak, du aldrig gav?',
    'Hvad er den vigtigste samtale du nogensinde har haft?',
    'Hvad ville du g\u00f8re anderledes, hvis du vidste det endte godt?',
    'Hvad er den st\u00f8rste overraskelse dit liv har givet dig?',
    'Hvorn\u00e5r opdagede du at sårbarhed er en styrke?',
    'Hvad er det du har givet videre, uden at vide det?',
    'Hvis dit liv var en bog, hvad ville det sidste kapitel hedde?'
  ]
};

// ---- EKSPORT ----

window.MORGEN_AFTEN_TEKST = MORGEN_AFTEN_TEKST;
window.ELEMENT_FASE_DAGLIG = ELEMENT_FASE_DAGLIG;
window.TEMA_DYBDE = TEMA_DYBDE;
window.TIDSREJSE_PAR = TIDSREJSE_PAR;
window.OVERGANGSALDER_SPECIFIK = OVERGANGSALDER_SPECIFIK;
window.RELATION_DYBDE = RELATION_DYBDE;
window.UDVIDET_HJAELP = UDVIDET_HJAELP;
window.SJAELDNE_VINDUER = SJAELDNE_VINDUER;
window.CYKLUS_SKIFT_TEKST = CYKLUS_SKIFT_TEKST;
window.AARSTID_ELEMENT_TEKST = AARSTID_ELEMENT_TEKST;
window.ORGANUR_VINDUER = ORGANUR_VINDUER;
window.EKSTRA_REFLEKSIONER_NY = EKSTRA_REFLEKSIONER_NY;