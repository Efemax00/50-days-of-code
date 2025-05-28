const button = document.getElementById("addParaBtn");
const container = document.getElementById("container");


button.addEventListener("click" , () => {
    const newPara = document.createElement("p");
    newPara.textContent = "This is a new Paragraph";
    container.appendChild(newPara);
});   