# Brejk bookmarklet - hodnota skillů podle aktuální Ec a sehranosti

Následující odkaz buď přetáhněte do lišty záložek v prohlížeči, nebo prostě uložte do záložek.

Na telefonu a v tabletu fungovat nebude, je nutné vyzkoušet na PC.

<a href="javascript:(function(){const e=new URLSearchParams(window.location.search).get('p');if(e&&'tym_kadr'==e){const e=document.querySelector('.content-data');let t,n,r=document.createElement('p'),o=function(){t=parseInt(document.querySelector('#div_sehranost td:nth-child(2)').textContent.slice(10,-2)),n=40*t/100/100+1},l=function(){let e=document.querySelectorAll('[id^=div_kategorie_id] > table > tbody > tr');o(),e.forEach((function(e){let t=e.classList.contains('bgcolor-orange'),r=parseInt(e.querySelector('td:nth-child(22)').innerHTML)/100,o=e.querySelectorAll('td');for(let e=3;e<12;e++){o[e].querySelector('span')&&o[e].removeChild(o[e].querySelector('span'));let l=document.createElement('span');l.style.position='absolute',l.style.left='0',l.style.width='100%',l.style.textAlign='right',l.style.color='#000',l.innerHTML=t?Math.round(parseInt(o[e].innerHTML)*r*n):Math.round(parseInt(o[e].innerHTML)*r),o[e].style.position='relative',o[e].style.color='transparent',o[e].appendChild(l)}}))};r.style.textAlign='left',r.style.marginBottom='1rem',r.innerHTML='✔️ Hodnota skillů upravená podle aktuální EC, u základní jedenáctky zohledněna také sehranost.',e.prepend(r),e.addEventListener('change',(function(e){'checkbox'!=e.target.getAttribute('type')&&'select'!=e.target.getAttribute('type')||setInterval((function(){l()}),500)})),l()}})()">Odkaz</a>

Jakmile máte záložku uloženou, přejděte na Brejku do A-týmu -> Kádr. Teď záložku spustíte. Skilly by měly být přepočítány.
