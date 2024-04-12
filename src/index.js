function updateTime() {
  let ViennaElement = document.querySelector("#vienna");
  if (ViennaElement) {
    let ViennaDateElement = document.querySelector(".date");
    let ViennaTimeElement = document.querySelector(".time");
    let viennaTime = moment().tz("Europe/Vienna");

    ViennaDateElement.innerHTML = viennaTime.format("MMMM Do, YYYY");
    ViennaTimeElement.innerHTML = viennaTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }
  let TokyoElement = document.querySelector("#tokyo");
  if (TokyoElement) {
    let TokyoDateElement = document.querySelector("#tokyo-date");
    let TokyoTimeElement = document.querySelector("#tokyo-time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    TokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY");
    TokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }

  let cityName = cityTimezone.split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let cityElement = document.querySelector(".multipleCities");
  cityElement.innerHTML = `
  <div class="city"><div>
          <h2>${cityName}</h2>
          <p class="date">${cityTime.format("MMMM Do, YYYY")}</p>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="index.html">All Cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", updateCity);
