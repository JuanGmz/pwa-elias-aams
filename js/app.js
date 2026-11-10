const container = document.querySelector(".container");

const coffees = [
  { name: "Perspiciatis", image: "images/drinks/drink1.svg" },
  { name: "Voluptatem", image: "images/drinks/drink2.svg" },
  { name: "Explicabo", image: "images/drinks/drink3.svg" },
  { name: "Architecto", image: "images/drinks/drink4.svg" },
  { name: "Beatae", image: "images/drinks/drink5.svg" },
  { name: "Vitae", image: "images/drinks/drink6.svg" },
  { name: "Inventore", image: "images/drinks/drink7.svg" },
  { name: "Veritatis", image: "images/drinks/drink8.svg" },
  { name: "Accusantium", image: "images/drinks/drink9.svg" },
];

const showCoffees = () => {
  let output = "";

  coffees.forEach(({ name, image }) => {
    output += `
      <div class="card">
        <img class="card--avatar" src="${image}" alt="Taza de café ${name}" />
        <h1 class="card--title">${name}</h1>
        <a class="card--link" href="#">Taste</a>
      </div>
    `;
  });

  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("serviceWorker.js");
  });
}
