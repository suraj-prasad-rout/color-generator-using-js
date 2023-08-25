let btn = document.querySelector("button");
function getRandomColor(){
    let red = Math.floor(Math.random()*250);
    let green =  Math.floor(Math.random()*250);
    let blue =  Math.floor(Math.random()*250);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}
btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3")
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div")
    div.style.backgroundColor = randomColor;
    div.innerText = "This Is Your New Color"
    console.log("color updated!")
})