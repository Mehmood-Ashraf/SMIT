// get color function for generating random hexcode and change body backgroynd color.
function getColor(){
    const randomNumber = Math.floor(Math.random() * 16777215);
    const hexCode = `#${randomNumber.toString(16)}`
    document.body.style.backgroundColor = hexCode;
    document.getElementById("code").innerText = hexCode;
    document.getElementById("image").style.width = "200px"
}


//Add click event on button and invoking function
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
