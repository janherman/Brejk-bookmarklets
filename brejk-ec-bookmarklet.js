(function() {
    const parametrStranky = new URLSearchParams(window.location.search).get("p");

    if(parametrStranky && parametrStranky == "tym_kadr") {
        const nadpisStranky = document.querySelector("#nadpis_stranky > h3");
        const radky = document.querySelectorAll("[id^='div_kategorie_id'] > table > tbody > tr");

        nadpisStranky.innerHTML += " (atributy dle aktuálního Ec)";

        radky.forEach(function(g) {
            let ec = parseInt(g.querySelector("td:nth-child(22)").innerHTML) / 100;
            let atributy = g.querySelectorAll("td");

            for(let index = 3; index < 12; index++) {
                atributy[index].innerHTML = Math.round(parseInt(atributy[index].innerHTML) * ec);
            }
        });
    }    
})();