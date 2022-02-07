
## Co to je

Jedná se o tzv. bookmarklet. Bookmarklet je javascriptový kód, který se uloží jako záložka v prohlížeči. Zatímco standardní záložka obsahuje nějaký odkaz na webovou stránku, záložka s bookmarkletem obsahuje instrukce, které se mají po kliknutí vykonat. 

## Co je cílem tohoto nástroje

V kádru, kde jsou vypsaní všichni hráči, vypočítat a zobrazit "správnou" hodnotu skillů dle aktuální Ec a sehranosti.

Je to věc, kterou ze začátku sezóny pravda člověk moc neužije. Zato v pokročilejší fázi ročníku se může hodit porovnat si, jak na tom hráči skutečně jsou (a nebo možná ne a je to celé jen můj výmysl... :-D).

## Instalace

"Instalace" nástroje spočívá v tom, že si uložíte odkaz do záložek v prohlížeči a na stránce kádru pak tuto záložku spustíte.

Na mobilu / tabletu uvedené metody fungovat nejspíš nebudou. Prozatím prosím zkoušejte na počítači / notebooku.
### Instalace přetažením na lištu záložek

Pokud máte zapnutou lištu záložek, stačí odkaz vzít myší a přetáhnout na lištu. Zobrazí se tam jako nová záložka.

<a href="javascript:(function(){const e=new URLSearchParams(window.location.search).get('p');if(e&&'tym_kadr'==e){const e=document.querySelector('.content-data');let t,n,r=document.createElement('p'),o=function(){t=parseInt(document.querySelector('#div_sehranost td:nth-child(2)').textContent.slice(10,-2)),n=40*t/100/100+1},l=function(){let e=document.querySelectorAll('[id^=div_kategorie_id] > table > tbody > tr');o(),e.forEach((function(e){let t=e.classList.contains('bgcolor-orange'),r=parseInt(e.querySelector('td:nth-child(22)').innerHTML)/100,o=e.querySelectorAll('td');for(let e=3;e<12;e++){o[e].querySelector('span')&&o[e].removeChild(o[e].querySelector('span'));let l=document.createElement('span');l.style.position='absolute',l.style.left='0',l.style.width='100%',l.style.textAlign='right',l.style.color='#000',l.innerHTML=t?Math.round(parseInt(o[e].innerHTML)*r*n):Math.round(parseInt(o[e].innerHTML)*r),o[e].style.position='relative',o[e].style.color='transparent',o[e].appendChild(l)}}))};r.style.textAlign='left',r.style.marginBottom='1rem',r.innerHTML='✔️ Hodnota skillů upravená podle aktuální EC, u základní jedenáctky zohledněna také sehranost.',e.prepend(r),e.addEventListener('change',(function(e){'checkbox'!=e.target.getAttribute('type')&&'select'!=e.target.getAttribute('type')||setInterval((function(){l()}),500)})),l()}})()">Odkaz</a>

### Instalace uložením do záložek
#### Mozilla Firefox

Klikněte na odkaz pravým tlačítkem a zvolte **Přidat do záložek**.

<a href="javascript:(function(){const e=new URLSearchParams(window.location.search).get('p');if(e&&'tym_kadr'==e){const e=document.querySelector('.content-data');let t,n,r=document.createElement('p'),o=function(){t=parseInt(document.querySelector('#div_sehranost td:nth-child(2)').textContent.slice(10,-2)),n=40*t/100/100+1},l=function(){let e=document.querySelectorAll('[id^=div_kategorie_id] > table > tbody > tr');o(),e.forEach((function(e){let t=e.classList.contains('bgcolor-orange'),r=parseInt(e.querySelector('td:nth-child(22)').innerHTML)/100,o=e.querySelectorAll('td');for(let e=3;e<12;e++){o[e].querySelector('span')&&o[e].removeChild(o[e].querySelector('span'));let l=document.createElement('span');l.style.position='absolute',l.style.left='0',l.style.width='100%',l.style.textAlign='right',l.style.color='#000',l.innerHTML=t?Math.round(parseInt(o[e].innerHTML)*r*n):Math.round(parseInt(o[e].innerHTML)*r),o[e].style.position='relative',o[e].style.color='transparent',o[e].appendChild(l)}}))};r.style.textAlign='left',r.style.marginBottom='1rem',r.innerHTML='✔️ Hodnota skillů upravená podle aktuální EC, u základní jedenáctky zohledněna také sehranost.',e.prepend(r),e.addEventListener('change',(function(e){'checkbox'!=e.target.getAttribute('type')&&'select'!=e.target.getAttribute('type')||setInterval((function(){l()}),500)})),l()}})()">Odkaz</a>

#### Google Chrome

V Chromu po kliknutí pravým tlačítkem na odkaz zvolte **Kopírovat adresu odkazu**. Poté si otevřete **Správce záložek** (klávesová zkratka Ctrl + Shift + O), v pravém horním rohu klikněte na tři tečky a zvolte **Přidat novou záložku**. Pak už stačí jen vyplnit název (libovolný) a do řádku _Adresa URL_ vložit odkaz, který jste na začátku zkopírovali do schránky.

<a href="javascript:(function(){const e=new URLSearchParams(window.location.search).get('p');if(e&&'tym_kadr'==e){const e=document.querySelector('.content-data');let t,n,r=document.createElement('p'),o=function(){t=parseInt(document.querySelector('#div_sehranost td:nth-child(2)').textContent.slice(10,-2)),n=40*t/100/100+1},l=function(){let e=document.querySelectorAll('[id^=div_kategorie_id] > table > tbody > tr');o(),e.forEach((function(e){let t=e.classList.contains('bgcolor-orange'),r=parseInt(e.querySelector('td:nth-child(22)').innerHTML)/100,o=e.querySelectorAll('td');for(let e=3;e<12;e++){o[e].querySelector('span')&&o[e].removeChild(o[e].querySelector('span'));let l=document.createElement('span');l.style.position='absolute',l.style.left='0',l.style.width='100%',l.style.textAlign='right',l.style.color='#000',l.innerHTML=t?Math.round(parseInt(o[e].innerHTML)*r*n):Math.round(parseInt(o[e].innerHTML)*r),o[e].style.position='relative',o[e].style.color='transparent',o[e].appendChild(l)}}))};r.style.textAlign='left',r.style.marginBottom='1rem',r.innerHTML='✔️ Hodnota skillů upravená podle aktuální EC, u základní jedenáctky zohledněna také sehranost.',e.prepend(r),e.addEventListener('change',(function(e){'checkbox'!=e.target.getAttribute('type')&&'select'!=e.target.getAttribute('type')||setInterval((function(){l()}),500)})),l()}})()">Odkaz</a>

#### Microsoft Edge

Pro Edge platí podobný postup, jako pro Chrome. Také musíte odkaz nejprve zkopírovat do schránky. Nahoře pak kliknete na **Oblíbené**, pod třemi čárkami se skrývá volba **Otevřít stránku Oblíbené**. Pak už jen zvolíte možnost **Přidat oblíbenou položku** a dokončíte stejně jako v Google Chrome.

<a href="javascript:(function(){const e=new URLSearchParams(window.location.search).get('p');if(e&&'tym_kadr'==e){const e=document.querySelector('.content-data');let t,n,r=document.createElement('p'),o=function(){t=parseInt(document.querySelector('#div_sehranost td:nth-child(2)').textContent.slice(10,-2)),n=40*t/100/100+1},l=function(){let e=document.querySelectorAll('[id^=div_kategorie_id] > table > tbody > tr');o(),e.forEach((function(e){let t=e.classList.contains('bgcolor-orange'),r=parseInt(e.querySelector('td:nth-child(22)').innerHTML)/100,o=e.querySelectorAll('td');for(let e=3;e<12;e++){o[e].querySelector('span')&&o[e].removeChild(o[e].querySelector('span'));let l=document.createElement('span');l.style.position='absolute',l.style.left='0',l.style.width='100%',l.style.textAlign='right',l.style.color='#000',l.innerHTML=t?Math.round(parseInt(o[e].innerHTML)*r*n):Math.round(parseInt(o[e].innerHTML)*r),o[e].style.position='relative',o[e].style.color='transparent',o[e].appendChild(l)}}))};r.style.textAlign='left',r.style.marginBottom='1rem',r.innerHTML='✔️ Hodnota skillů upravená podle aktuální EC, u základní jedenáctky zohledněna také sehranost.',e.prepend(r),e.addEventListener('change',(function(e){'checkbox'!=e.target.getAttribute('type')&&'select'!=e.target.getAttribute('type')||setInterval((function(){l()}),500)})),l()}})()">Odkaz</a>

## Jak používat

1. uložím si záložku (viz postup v předchozí sekci)
2. otevřu si Kádr (pod záložkou A-tým, prostě klasika)
3. zatímco jsem v Kádru, kliknu na záložku, kterou jsem si uložil v bodu 1.
4. pod nadpisem "Můj tým - Kádr" by měla přibýt věta: ✔️ Hodnota skillů upravená podle aktuální EC, u základní jedenáctky zohledněna také sehranost.
5. skilly všech hráčů by nyní měly být přepočítané podle Ec, u základní jedenáctky ještě podle sehranosti

## Jak to funguje

Je to jednorázový nástroj. Kliknu na záložku, přepočítají se skilly.

Pokud stránku aktualizujete, přepočet se smaže a opět uvidíte "klasický" kádr. Stejně tak pokud například z kádru přejdete na trénink a zase zpátky. V takovém případě musíte na záložku kliknout znovu.

Vodítkem, zda je nástoj aktivní, je věta pod hlavním nadpisem, která zní: ✔️ Hodnota skillů upravená podle aktuální EC, u základní jedenáctky zohledněna také sehranost.

## Co když to nefunguje?

Pokud jste úspěšně uložili odkaz z kapitoly "Instalace" do záložek, jste na obrazovce kádr, kliknuli jste na uloženou záložku - a nic se nestalo, dejte prosím vědět.

## Příklad

Mám hráče Sergio Cuarto. Sezónu teď díky věku začíná s Ec 95. V kádru normálně vidím toto:

![Hráč normálně](hrac-pred.png)

Teď kliknu na uloženou záložku s mým nástrojem. Sergio Cuarto má Ec 95, čili reálně např. jeho hodnota obrany není 371, ale 95% z 371, tedy zhruba 352.

![Hráč po přepočtu skillu](hrac-po.png)

A tento přepočet je proveden pro všechny atributy s výjimkou doplňkových, na které nemá Ec vliv.

## Další bookmarklety...
### Úprava výpisu přestupů
Zobrazí u hráče počet dnů, kolik je na Brejku a jméno posledního / současného majitele.

<a href="javascript:(function(){let tabulky=document.querySelectorAll('table.ram'),hraci=document.querySelectorAll('table.ram a'),odkazyNaHrace=[];hraci&&hraci.forEach(e=>odkazyNaHrace.push(e.href));for(let o=0;o<hraci.length;o++)fetch(odkazyNaHrace[o]).then(function(e){return e.text()}).then(function(e){var t=new Date;let a=new DOMParser,r=a.parseFromString(e,'text/html'),l=r.querySelector('.table-black tr:nth-child(3)').textContent.trim(),n=l.match(/((\d+)\.(\d+)\.(\d{4}))/g);e=n[0].split('.'),e=e[2]+'-'+e[1]+'-'+e[0],e=new Date(e),e=Math.abs(e-t),t=Math.round(e/864e5),e=r.querySelectorAll('.table-black tr');let c=e[e.length-2];e=c.querySelector('a');tabulky[o].querySelector('tr:last-child > td:first-child').innerHTML+='<p>(na Brejku '+t+' dnů)</p><p style=\'margin-bottom: .5em\'><a href=\''+e.href+'\'>'+e.innerText+'</a></p>'}).catch(function(e){console.warn('Něco se nepovedlo, nepodařilo se načíst data hráče.',e)})})()">Odkaz</a>
