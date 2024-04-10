function updateTime() {
  let ViennaElement = document.querySelector("#vienna");
  if (ViennaElement) {
    let ViennaDateElement = document.querySelector(".date");
    let ViennaTimeElement = document.querySelector(".time");

    ViennaDateElement.innerHTML = moment()
      .tz("Europe / Vienna")
      .format("MMMM Do, YYYY");
    ViennaTimeElement.innerHTML = moment()
      .tz("Europe / Vienna")
      .format("h:mm:ss [<small>] A [</small>]");
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let cityElement = document.querySelector(".neu");
  cityElement.innerHTML = `
  <div class="city" id="vienna"><div>
          <h2>${cityName}</h2>
          <p class="date">${cityTime.format("MMMM Do, YYYY")}</p>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", updateCity);
