const URL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&daily=temperature_2m_min"

const tableBody = document.getElementById("tableBody");
const options = {
    weekday: "long",
    hour: "numeric",
};

const dateFormatter = new Intl.DateTimeFormat("ro-RO", options);

fetch(URL, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)

      data.hourly.temperature_2m.forEach((temperature_2m , i) =>  {
         const row = document.createElement("tr");

         const tempCell = document.createElement("td");
         tempCell.innerText = data.hourly.temperature_2m[i] + "°C";

         const timeCell = document.createElement("td");
         timeCell.innerText = dateFormatter.format(new Date(temperature_2m));

         row.appendChild(timeCell);

         row.appendChild(tempCell);

         tableBody.appendChild(row);
       }
    )});
  