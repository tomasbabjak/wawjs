# Zadanie 1

Vypracoval: Tomáš Babjak

Predmet: Vıvoj aplikácii v jazyku JavaScript

# AR.js

by [jeromeetienne](https://github.com/jeromeetienne)

Link: [AR.js](https://github.com/jeromeetienne/AR.js)

#### Popis projektu:

Tento projekt sa zaoberá riešením rozšírenej reality pre web.
K¾úèovımi vlastnoami jeho riešenia rozšírenej reality sú rıchlos, open source projekt s monosou vıvoja pre kadého a èistı web based projekt bez potrebnej inštalácie.
Na jednom zariadení máte pripravenı obrázok, ktorı rozozná spustená aplikácia na inom zariadení.
Tento obrázok bude slúi ako podklad pre danı objekt, na ktorom sa vykreslí.
3D grafika daného objektu sa zakladá na otáèaní displeja s podkladovám obrázkom a podobne sa bude vykres¾ova aj 3D objekt na òom. 

#### Osobnı názor na aplikáciu a preèo som si ho vybral:

Mòa na tomto projekte zaujala najmä technika rozšírenej reality a to, e jej podstatná èas je naprogramovaná iba v JavaScripte. 
Takáto technológia je pod¾a mòa budúcnosou a u teraz sa s òou mnohé firmy zaoberajú a predkladajú do povedomia verejnosti. 
Jednoduchos tohto programu je pre mòa ve¾mi prekvapujúca, tak isto aj pouite¾nos, keïe netreba v podstate niè inštalova a beí to iba v prehliadaèi, za pomoci web kamery.
Sám som si skúšal zobrazova pár objektov pomocou mojej web kamery a musím poveda e pri plynulom a pomalom posúvaní sa správal program ve¾mi dobre aj pri nízkom rozlíšení kamery.

#### Technológie pouité v aplikácii:

V projekte sú okrem tradiènıch JS technológií a frameworkov ako vue.js alebo d3.js pouité aj kninice three.js pre prácu s 3D objektami na webe, artoolkit pre prácu s rozšírenou realitou a asm.js na kompiláciu artoolkit c do javascriptu.
V repozitári projektu ma prekvapilo ve¾ké mnostvo linkov na podobné projekty a na návody ako pracova s rozšírenou realitou a 3D modelmi a taktie ve¾a obrázkov z testovania.

#### Návod na spustenie projektu:

1. Otvor tento obrázok na jednom zariadení: https://jeromeetienne.github.io/AR.js/data/images/HIRO.jpg
2. Nasnímaj ho pomocou tejto web aplikácie v inom zariadení: https://codepen.io/nicolocarpignoli/full/vMBgob 

Podkladovı obrázok:

![Obrazok](https://jeromeetienne.github.io/AR.js/data/images/HIRO.jpg)

#### Ukáka aplikácie:

![screenshot](https://cloud.githubusercontent.com/assets/252962/23068128/40343608-f51a-11e6-8cb3-900e37a7f658.jpg)
![screen shot 2017-03-12 at 15 19 51](https://cloud.githubusercontent.com/assets/6317076/23833024/b2e045be-0737-11e7-9ef0-8e1ac9e49ba8.png)

Moné objekty na hranie sa: https://jeromeetienne.github.io/AR.js-docs/misc/EXAMPLES.html


# OpenSC2K

by [nicholas-ochoa](https://github.com/nicholas-ochoa)

Link: [OpenSC2K](https://github.com/nicholas-ochoa/OpenSC2K)

#### Popis projektu:

Druhım projektom, ktorı ma ve¾mi zaujal je open source remake hry SimCity 2000, napísaná pouitím iba jazyka JavaScript a CSS.
Tento projekt je iba v svojom zaèiatku, ale u je moné pridáva hotové mapy miest, budov a ciest z hry, ktoré aplikácia dokáe naèíta a zobazi.
Take grafická stránka hry vrátane renderovania povrchu, vody, pôdy a budov je naimlementovaná a autor ïalej plánuje pracova na samotnom engine hry, monosti pridávania budov a rôznych inıch druhov políèok.

#### Osobnı názor na aplikáciu a preèo som si ho vybral:

Myslím si, e takúto hru urèite privítajú všetci, ktorí radi zaspomínujaú na staré dobré èasy a hry, ktoré hrávali ešte na Windowse 95 a hlavne je dôleitá vlastnos, e síce hru je potrebné inštalova, momenálne pomocou yarn, ale spustite¾ná je pomocou lokálneho servera a prehliadaèa.
Ja sám mám túto hru ve¾mi rád a hrával som ju u za mlada a preto ma ve¾mi zaujalo to, e sa takáto na prvı poh¾ad zloitá hra s grafikou dokáe napísa len za pomoci JavaScriptu a CSS-ka a urèite ak bude k dispozícii online verzia ve¾mi rád by som si ju zahral. 

#### Technológie pouité v aplikácii:

Pri práci pouíval autor nástroj WebGL, ktorı slúi na vytvorenie grafickıch aplikácii na webe pre HTML5. 
Taktie pouil Phaser3 framework na tvorbu hier pre webové prostedie. 

#### Ukáka aplikácie:

![screenshot2](https://github.com/nicholas-ochoa/OpenSC2K/blob/master/screenshots/2.png)
![screenshot1](https://github.com/nicholas-ochoa/OpenSC2K/blob/master/screenshots/1.png)

Momentálne sa mi tento projekt nepodarilo rozbeha, keïe som nenašiel stabilnú verziu a je to stále ve¾mi ivı projekt na ktorom sa v súèasnosti pracuje. 


# Tone.js 

by [Tonejs](https://github.com/Tonejs)

Link: [Tone.js github repozitar](https://github.com/Tonejs/Tone.js)

[Tone.js oficialna stranka](https://tonejs.github.io/)

#### Popis projektu:

Tone.js je webovı framework na vytváranie hudby priamo vo webovom prehliadaèi. 
Tento framework je urèenı tak pre programátorov na tvorbu ich vlastnıch hudobnıch web aplikácii, ale zároveò aj pre hudobníkov, ktorí si pomocou neho dokáu vyskúša syntetizátory a iné nástroje.
Poskytuje naozaj širokú škálu rôznych inštrumentov, oscilátorov, efektov, ale aj nástroje na vizualizáciu hudby a omnoho viac. Je to teda plnı framework, zaloenı vıluène na JavaScripte s MIT licenciou.
Obsahuje aj mnostvo príkladov a ukáok kódov ako aj vlastné API. Príklady projektov, kde si môete aj trochu vyskúša nástroje, ktoré framework obsahuje nájdete tu: https://tonejs.github.io/examples

#### Osobnı názor na aplikáciu a preèo som si ho vybral:

Aplikácia ma zaujala po tom ako som si skúšal ukákové syntetizátory a nástroje vytvorené pomocou tohto frameworku a vyzerá to naozaj skvele, urèite by som ho vyuil ak by som pracoval na vlastnej web aplikácii, ktorá by pracovala so zvukom.
Obsahuje ve¾mi rozsiahlu dokumentáciu a mnostvo príkladov spolu s demami od ostatnıch pouívate¾ov, ktorí túto aplikáciu pouili vo svojich projektoch.

#### Technológie pouité v aplikácii:

V samotnom README aplikácie iadne pouité technoógie uvádzané nie sú, ale pri skúmaní zdrojového kódu som si všimol závislosti na kninice ako napríklad  webpack, karma a mocha. Webpack slúi pravdepodobne na zbalenie JavaScript kódu pre pouitie na webe, karma a mocha na testovanie JavaScript kódu.

#### Ukáka aplikácie:

![Demos Tone.js](https://github.com/tomasbabjak/wawjs/blob/cvicenie01/01-cvicenie/Zadanie1/Demos-tone.js.png)
![Example Tone.js](https://github.com/tomasbabjak/wawjs/blob/cvicenie01/01-cvicenie/Zadanie1/Examples-tone.js.png)

