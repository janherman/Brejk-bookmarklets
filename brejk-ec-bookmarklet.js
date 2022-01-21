(function () {
  const parametrStranky = new URLSearchParams(window.location.search).get("p");

  if (parametrStranky && parametrStranky == "tym_kadr") {
    const kontejner = document.querySelector(".content-data");
    //const nominace = document.querySelectorAll("input[id^='checkbox_']");
    let ovladaciPanel = document.createElement("div");
    let toggle = document.createElement("input");
    let toggleLabel = document.createElement("label");
    let prepsatBunky = function() {
      let radky = document.querySelectorAll(
        "[id^='div_kategorie_id'] > table > tbody > tr"
      );
      
      radky.forEach(function (g) {
        let ec = parseInt(g.querySelector("td:nth-child(22)").innerHTML) / 100;
        let atributy = g.querySelectorAll("td");

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
            nalepka.innerHTML = Math.round(
              parseInt(atributy[index].innerHTML) * ec
            );

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
    toggleLabel.innerHTML = "Zobrazit atributy dle aktuální Ec";
    toggleLabel.setAttribute("for", "zapnout-ec-zobrazeni");
    toggleLabel.style.marginRight = "1rem";
    ovladaciPanel.style.padding = "1rem";
    ovladaciPanel.style.backgroundColor = "lightgrey";
    ovladaciPanel.style.marginBottom = ".5rem";
    ovladaciPanel.appendChild(toggleLabel);
    ovladaciPanel.appendChild(toggle);

    kontejner.prepend(ovladaciPanel);

    // toggle.addEventListener("change", function() {
    //   prepsatBunky();
    // });

    kontejner.addEventListener("change", function(e) {
      if(e.target.getAttribute("type") == "checkbox" || e.target.getAttribute("type") == "select") {
        setInterval(function() {
          prepsatBunky();
        }, 500);
      }
    });

    // nominace.forEach(function (n) {
    //   n.addEventListener("change", function () {
    //     console.log("Změna nominace");
    //     nominace = document.querySelectorAll("input[id^='checkbox_']");
    //     prepsatBunky();
    //   });
    // });
  }
})();
