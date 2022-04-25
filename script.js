let n = 16;
mousedColor = "blue"
drawGrid(n)

function drawGrid(n) {
    for (j = 0; j < n**2; j++) {
        const div = document.createElement('div');
        div.setAttribute("id", `Box${j}`)
        div.setAttribute("class", `Box`)
        gridBox.appendChild(div);
        div.addEventListener('mouseover', () => mouseOvered(div.id))
    };
};

function mouseOvered(divId) {
    document.getElementById(`${divId}`).style.backgroundColor = `${mousedColor}`;
}
function resizeGrid() {
    n = getPrompt()
    if (n > 100) {
        n = getPrompt()
    }
    removeAllChildNodes(gridBox);
    document.getElementById("gridBox").style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    document.getElementById("gridBox").style.gridAutoRows = `${960/n}px`
    console.log(n)
    drawGrid(n)
}

function getPrompt() {
    let n =  window.prompt("new grid size")
    console.log(n)
    return n

}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}