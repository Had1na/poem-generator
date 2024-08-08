function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "137ae6afd69a1ab4tc7ba7202of80b98";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a poem expert and love to write short poems. Your mission is to generate a four line poem and seperate each line with a <br />. Make sure to follow the user instructions. Do not include a title. Sign the poem with `SheCodes AI` inside a <small> element at the end of the poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  new Typewriter("#poem", {
    strings: `Generating a poem about "${instructionsInput.value}"...`,
    autoStart: true,
    delay: 10,
    cursor: null,
    pauseFor: 1500,
  });

  axios.get(apiUrl).then(displayPoem);
}

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: null,
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
