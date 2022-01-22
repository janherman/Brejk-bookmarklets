(function () {
  const parametrStranky = new URLSearchParams(window.location.search).get("p");

  if (parametrStranky && parametrStranky == "tym_kadr") {
    const kontejner = document.querySelector(".content-data");
    // Pokud je sehranost na desetinné místo, parseInt to pravděpodobně zaokrouhlí, resp. na desetinné místo nebere ohled. Opravit?
    let sehranost = parseInt(document.querySelector("#div_sehranost td:nth-child(2)").textContent.slice(10, -2));
    let sehranostBonusKoeficient = (((40 * sehranost) / 100) / 100) + 1;
    let ovladaciPanel = document.createElement("div");
    let toggle = document.createElement("input");
    let toggleLabel = document.createElement("label");
    let prepsatBunky = function() {
      let radky = document.querySelectorAll(
        "[id^='div_kategorie_id'] > table > tbody > tr"
      );
      sehranost = parseInt(document.querySelector("#div_sehranost td:nth-child(2)").textContent.slice(10, -2));
      sehranostBonusKoeficient = (((40 * sehranost) / 100) / 100) + 1;
      
      radky.forEach(function(r) {
        let nominovany = r.classList.contains("bgcolor-orange");
        let ec = parseInt(r.querySelector("td:nth-child(22)").innerHTML) / 100;
        let atributy = r.querySelectorAll("td");

        for (let index = 3; index < 12; index++) {

          if (atributy[index].querySelector("span")) {
            atributy[index].removeChild(
              atributy[index].querySelector("span")
            );
          }

          if (toggle.checked == true) {
            let nalepka = document.createElement("span");
            nalepka.style.position = "absolute";
            nalepka.style.left = "0";
            nalepka.style.width = "100%";
            nalepka.style.textAlign = "right";
            nalepka.style.color = "#000";

            if(nominovany) {
              nalepka.innerHTML = Math.round(
                parseInt(atributy[index].innerHTML) * ec * sehranostBonusKoeficient
              );
            } else {
              nalepka.innerHTML = Math.round(
                parseInt(atributy[index].innerHTML) * ec
              );
            }


            atributy[index].style.position = "relative";
            atributy[index].style.color = "transparent";
            atributy[index].appendChild(nalepka);
          } else {
            atributy[index].style.color = "#000";
            if (atributy[index].querySelector("span")) {
              atributy[index].removeChild(
                atributy[index].querySelector("span")
              );
            }
          }
        }
      });
    };

    toggle.type = "checkbox";
    toggle.id = "zapnout-ec-zobrazeni";
    toggleLabel.innerHTML = "Zobrazit atributy dle aktuální Ec a sehranosti";
    toggleLabel.setAttribute("for", "zapnout-ec-zobrazeni");
    toggleLabel.style.marginRight = "1rem";
    ovladaciPanel.style.padding = "1rem";
    ovladaciPanel.style.backgroundColor = "lightgrey";
    ovladaciPanel.style.marginBottom = ".5rem";
    ovladaciPanel.appendChild(toggleLabel);
    ovladaciPanel.appendChild(toggle);

    kontejner.prepend(ovladaciPanel);

    kontejner.addEventListener("change", function(e) {
      if(e.target.getAttribute("type") == "checkbox" || e.target.getAttribute("type") == "select") {
        setInterval(function() {
          prepsatBunky();
        }, 500);
      }
    });

  }
})();
