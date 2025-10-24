

const counter = document.getElementById("char-count");
const textArea = document.getElementById("text-area");

textArea.addEventListener("input", () => {
  let length = textArea.value.length;

  if(length > 50){
    textArea.value = textArea.value.substring(0,50);
    length = 50;
  }

  counter.textContent = `${length}/50`;

  if(length===50){
    counter.style.color="red";

  }
  else{
    counter.style.color = "rgba(255, 255, 255, 0.599)";
  }

});


