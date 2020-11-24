const tangkepUl = document.querySelector("ul");
const tangkepInput = document.querySelector("input");
const tangkepButton = document.querySelector("button");
const liBaru = document.createElement("li");

tangkepButton.addEventListener('click', function(){
    const liBaru = document.createElement("li");
    const isiInput = document.createTextNode(tangkepInput.value);
    liBaru.appendChild(isiInput);
    tangkepUl.appendChild(liBaru);
    tangkepInput.value = '';
});