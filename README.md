# Brejk bookmarklet - hodnota skillů podle aktuální Ec

<a href="javascript:(function(){!function(){const e=new URLSearchParams(window.location.search).get("p");if(e&&"tym_kadr"==e){const e=document.querySelector("#nadpis_stranky > h3"),t=document.querySelectorAll("[id^='div_kategorie_id'] > table > tbody > tr");e.innerHTML+=" (atributy dle aktuálního Ec)",t.forEach((function(e){let t=parseInt(e.querySelector("td:nth-child(22)").innerHTML)/100,n=e.querySelectorAll("td");for(let e=3;e<12;e++)n[e].innerHTML=Math.round(parseInt(n[e].innerHTML)*t)}))}}();})()">Tento odkaz si uložte na lištu záložek]</a>

## Co tento bookmarklet umí?
- přepočítá hodnotu skillů hráčů podle jejich aktuální Ec

## Co tento bookmarklet neumí?
- zachovat přepočítené hodnoty potom, co např. přesunete hráče do jiné kategorie, změníte číslo, nominaci apod.