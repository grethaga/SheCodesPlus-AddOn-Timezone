function showSelectedCity(event) {
  let date;

  if (event.target.value.length > 0) {
    if (event.target.value === "paris") {
      date =
        moment().tz("Europe/Paris").format("dddd, MMMM Do, YYYY h:m A") +
        " in Europe/Paris";
    }
    if (event.target.value === "tokyo") {
      date =
        moment().tz("Asia/Tokyo").format("dddd, MMMM Do, YYYY h:m A") +
        " in Asia/Tokyo";
    }
    if (event.target.value === "sydney") {
      date =
        moment().tz("Australia/Sydney").format("dddd, MMMM Do, YYYY h:m A") +
        " in Australia/Sydney";
    }
  }

  alert(`It is ${date}`);
}

let citySelect = document.querySelector("#cities");

citySelect.addEventListener("change", showSelectedCity);
