function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "A poem goes here <br /> more poem",
    autoStart: true,
    delay: 10,
    cursor: null,
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
