Ako rie�enie tohto zadania som si vybral tri projekty n�jden� na githube rie�en� pomocou jazyka JavaScript.

=========

# AR.js

by jeromeetienne

Link: [AR.js](https://github.com/jeromeetienne/AR.js)

#### Popis projektu:

Tento projekt sa zaober� rie�en�m roz��renej reality pre web.
K���ov�mi vlastno�ami jeho rie�enia roz��renej reality s� r�chlos�, open source projekt s mo�nos�ou v�voja pre ka�d�ho a �ist� web based projekt bez potrebnej in�tal�cie.
Na jednom zariaden� m�te pripraven� obr�zok, ktor� rozozn� spusten� aplik�cia na inom zariaden�.
Tento obr�zok bude sl��i� ako podklad pre dan� objekt, na ktorom sa vykresl�.
3D grafika dan�ho objektu sa zaklad� na ot��an� displeja s podkladov�m obr�zkom a podobne sa bude vykres�ova� aj 3D objekt na �om. 

#### Osobn� n�zor na aplik�ciu a pre�o som si ho vybral:

M�a na tomto projekte zaujala najm� technika roz��renej reality a to, �e jej podstatn� �as� je naprogramovan� iba v JavaScripte. 
Tak�to technol�gia je pod�a m�a bud�cnos�ou a u� teraz sa s �ou mnoh� firmy zaoberaj� a predkladaj� do povedomia verejnosti. 
Jednoduchos� tohto programu je pre m�a ve�mi prekvapuj�ca, tak isto aj pou�ite�nos�, ke�e netreba v podstate ni� in�talova� a be�� to iba v prehliada�i, za pomoci web kamery.
S�m som si sk��al zobrazova� p�r objektov pomocou mojej web kamery a mus�m poveda� �e pri plynulom a pomalom pos�van� sa spr�val program ve�mi dobre aj pri n�zkom rozl�en� kamery.

#### Technol�gie pou�it� v aplik�cii:

V projekte s� pou�it� kni�nice three.js pre pr�cu s 3D na webe, artoolkit pre pr�cu s roz��renou realitou a asm.js na kompil�ciu artoolkit c do javascriptu.
V repozit�ri projektu ma prekvapilo ve�k� mno�stvo linkov na podobn� projekty a na n�vody ako pracova� s roz��renou realitou a 3D modelmi a taktie� ve�a obr�zkov z testovania.

#### N�vod na spustenie projektu:

1. Otvor tento obr�zok na jednom zariaden�: https://jeromeetienne.github.io/AR.js/data/images/HIRO.jpg
2. Nasn�maj ho pomocou tejto web aplik�cie v inom zariaden�: https://codepen.io/nicolocarpignoli/full/vMBgob 

#### Uk�ka aplik�cie:

![screenshot](https://cloud.githubusercontent.com/assets/252962/23068128/40343608-f51a-11e6-8cb3-900e37a7f658.jpg)
![screen shot 2017-03-12 at 15 19 51](https://cloud.githubusercontent.com/assets/6317076/23833024/b2e045be-0737-11e7-9ef0-8e1ac9e49ba8.png)
![screen shot 2017-03-07 at 10 08 39](https://cloud.githubusercontent.com/assets/6317076/23833015/947f6abe-0737-11e7-9a0d-1ea919f6ffbe.png)

Mo�n� objekty na hranie sa: https://jeromeetienne.github.io/AR.js-docs/misc/EXAMPLES.html

=========

# OpenSC2K

by nicholas-ochoa

Link: [OpenSC2K](https://github.com/nicholas-ochoa/OpenSC2K)

#### Popis projektu:

Druh�m projektom, ktor� ma ve�mi zaujal je open source remake hry SimCity 2000, nap�san� pou�it�m iba jazyka JavaScript a CSS.
Tento projekt je iba v svojom za�iatku, ale u� je mo�n� prid�va� hotov� mapy miest, budov a ciest z hry, ktor� aplik�cia dok�e na��ta� a zobazi�.
Tak�e grafick� str�nka hry vr�tane renderovania povrchu, vody, p�dy a budov je naimlementovan� a autor �alej pl�nuje pracova� na samotnom engine hry, prid�van� budov a r�znych in�ch druhov pol��ok.

#### Osobn� n�zor na aplik�ciu a pre�o som si ho vybral:

Mysl�m si, �e tak�to hru ur�ite priv�taj� v�etci, ktor� radi zaspom�nuja� na star� dobr� �asy a hry, ktor� hr�vali e�te na Windowse 95 a hlavne je d�le�it� vlastnos�, �e s�ce hru je potrebn� in�talova�, momen�lne pomocou yarn, ale spustite�n� je pomocou lok�lneho servera a prehliada�a.
Ja s�m m�m t�to hru ve�mi r�d a hr�val som ju u� za mlada a preto ma ve�mi zaujalo to, �e sa tak�to na prv� poh�ad zlo�it� hra s grafikou dok�e nap�sa� len za pomoci JavaScriptu a CSS-ka a ur�ite ak bude k dispoz�cii online verzia ve�mi r�d by som si ju zahral. 

#### Technol�gie pou�it� v aplik�cii:

Pri pr�ci pou��val autor n�stroj WebGL, ktor� sl��i na vytvorenie grafick�ch aplik�cii na webe pre HTML5. 
Taktie� pou�il Phaser3 framework na tvorbu hier pre webov� prostedie. 

#### Uk�ka aplik�cie:

![screenshot2](https://github.com/nicholas-ochoa/OpenSC2K/blob/master/screenshots/2.png)
![screenshot1](https://github.com/nicholas-ochoa/OpenSC2K/blob/master/screenshots/1.png)

Moment�lne sa mi tento projekt nepodarilo rozbeha�, ke�e som nena�iel stabiln� verziu a je to st�le ve�mi �iv� projekt na ktorom sa v s��asnosti pracuje. 

=========

# Tone.js 

by Tonejs

Link: [Tone.js github repozitar](https://github.com/Tonejs/Tone.js)

[Tone.js oficialna stranka](https://tonejs.github.io/)

#### Popis projektu:

Tone.js je webov� framework na vytv�ranie hudby priamo vo webovom prehliada�i. 
Tento framework je ur�en� pre tak program�torov na tvorbu ich vlastn�ch hudobn�ch web aplik�ciim, ale z�rove� aj pre hudobn�kov, ktor� pomocou neho dok�u vysklada� vlastn� hudbu.
Poskytuje naozaj �irok� �k�lu r�znych in�trumentov, oscil�torov, efektov, ale aj n�stroje na vizualiz�ciu hudby a omnoho viac. Je to teda pln� framework, zalo�en� v�lu�ne na JavaScripte s MIT licenciou.
Obsahuje aj mno�stvo pr�kladov a uk�ok k�dov ako aj vlastn� API. Pr�klady projektov, kde si m��ete aj trochu vysk��a� n�stroje, ktor� framework obsahuje n�jdete tu: https://tonejs.github.io/examples

#### Osobn� n�zor na aplik�ciu a pre�o som si ho vybral:

Aplik�cia ma zaujala po tom ako som si sk��al uk�kov� syntetiz�tory a n�stroje vytvoren� pomocou tohto frameworku a vyzer� to naozaj skvele, ur�ite by som ho vyu�il ak by som pracoval na vlastnej web aplik�cii, ktor� by pracovala so zvukom.
Obsahuje ve�mi rozsiahlu dokument�ciu a mno�stvo pr�kladov spolu s demami od ostatn�ch pou��vate�ov, ktor� t�to aplik�ciu pou�ili vo svojich projektoch.

#### Technol�gie pou�it� v aplik�cii:

V samotnom README aplik�cie �iadne pou�it� techno�gie uv�dzan� nie s�, ale pri sk�man� zdrojov�ho k�du som si v�imol z�vislosti na kni�nice ako napr�klad  webpack, karma a mocha. Webpack sl��i pravdepodobne na zbalenie JavaScript k�du pre pou�itie na webe, karma a mocha na testovanie JavaScript k�du.
