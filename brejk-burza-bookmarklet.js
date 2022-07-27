(function(){
    let tabulky = document.querySelectorAll("table.ram");
    let hraci = document.querySelectorAll("table.ram a");
    let odkazyNaHrace = [];

    if(hraci) {
        hraci.forEach(o => odkazyNaHrace.push(o.href));
    }

    for(let index = 0; index < hraci.length; index++) {
        fetch(odkazyNaHrace[index]).then(function (response) {
            return response.text();
        }).then(function (html) {
            let dnes = new Date();
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, 'text/html');
            let radek = doc.querySelector(".table-black tr:nth-child(3)").textContent.trim();
            let datum = radek.match(/((\d+)\.(\d+)\.(\d{4}))/g);
            let datumRozdelene = datum[0].split(".");
            let datumVIso = datumRozdelene[2] + "-" + datumRozdelene[1] + "-" + datumRozdelene[0];
            let datumToDate = new Date(datumVIso);
            let milisekundy = Math.abs(datumToDate - dnes);
            let dny = Math.round(milisekundy / (1000 * 60 * 60 * 24));

            let radky = doc.querySelectorAll(".table-black tr");
            let predposledniRadek = radky[radky.length - 2];
            let majitel = predposledniRadek.querySelector("a");

            tabulky[index].querySelector("tr:last-child > td:first-child").innerHTML += "<p>(na Brejku " + dny + " dnů)</p><p style='margin-bottom: .5em'><a href='" + majitel.href + "'>" + majitel.innerText + "</a></p>";

        }).catch(function (err) {
            console.warn("Něco se nepovedlo, nepodařilo se načíst data hráče.", err);
        });
    }
})();