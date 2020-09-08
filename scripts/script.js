let navButtons = document.querySelectorAll(".navButton");
for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener("click",drawUnderLine);
}
navButtons[0].style.textDecoration = "underline";
function drawUnderLine()
{
    navButtons.forEach(element => {
        if(element==this)
        {
            element.style.textDecoration = "underline"; 
        }else
        {
            element.style.textDecoration = "none";
        }
    }
    );
}