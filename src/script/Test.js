const fetch = require("node-fetch");

fetch(
  "https://docs.google.com/forms/d/e/1FAIpQLSf3IQqa0ns35ldAdgjnvKJxHhlQu1ZSiOkfHUjR4-OfDg3UbQ/viewform"
)
  .then((res) => res.json())
  .then((data) => console.log(data));
