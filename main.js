const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector('.hex-color-value');
const hexColorContainer = document.querySelector('.hex-color-container');
//Create Random HEX Color

hexBtn.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "";

  for (let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * charSetLength)
    );
  }

hexColorValue.textContent =  `#${hexColorOutput}`
hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;

  console.log("==========================");
  console.log("hexColorOutput");
  console.log("==========================");
});
