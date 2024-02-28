function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function updateColor() {
    const color = getRandomColor();
    document.body.style.backgroundColor = color;
    const hexCode = document.getElementById("hex-code");
    hexCode.textContent = color;
}

document.querySelector(".copy-button").addEventListener("click", function () {
    const colorCode = document.getElementById("hex-code").textContent;
    navigator.clipboard.writeText(colorCode).then(
        function () {
            alert("Color code copied: " + colorCode);
        },
        function () {
            alert("Failed to copy color code.");
        }
    );
    updateColor();
});

updateColor();
