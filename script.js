const n = 16;


for (j = 0; j < n**2; j++) {
    const div = document.createElement('div');
    div.setAttribute("id", `Box${j}`)
    div.setAttribute("class", `Box`)
    gridBox.appendChild(div);
    div.addEventListener('mouseover', () => mouseOvered(div.id))


};

function mouseOvered(divId) {
    console.log(divId);
    document.getElementById(`${divId}`).style.backgroundColor = "white";
}