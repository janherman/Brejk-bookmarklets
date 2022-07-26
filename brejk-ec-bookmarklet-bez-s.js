(function () {
    const parametrStranky = new URLSearchParams(window.location.search).get("p");

    if(parametrStranky) {
      if(parametrStranky == "tym_kadr" || parametrStranky == "repretr_kadrnew" || parametrStranky == "repretr_sirsi-kadrnew") {
        const kontejner = document.querySelector(".content-data");
        let potvrzeni = document.createElement("p");

        let prepsatBunky = function() {
          let radky = document.querySelectorAll(
            "[id^=div_kategorie_id] > table > tbody > tr"
          );

          radky.forEach(function(r) {
            let ec = parseInt(r.querySelector("td:nth-child(22)").innerHTML) / 100;
            let atributy = r.querySelectorAll("td");

            for (let index = 3; index < 12; index++) {

              if (atributy[index].querySelector("span")) {
                atributy[index].removeChild(
                  atributy[index].querySelector("span")
                );
              }

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
            }
          });

          potvrzeni.style.textAlign = "left";
          potvrzeni.style.marginBottom = "1rem";
          potvrzeni.innerHTML = "✔️ Hodnota skillů upravená podle aktuální EC.";

          kontejner.prepend(potvrzeni);
        };

        kontejner.addEventListener("change", function(e) {
          if(e.target.getAttribute("type") == "checkbox" || e.target.getAttribute("type") == "select") {
            setInterval(function() {
              prepsatBunky();
            }, 500);
          }
        });

        prepsatBunky();
      }
    }
  })();