let navButtons = document.querySelectorAll(".navButton");
underLineChecker();
window.onscroll = underLineChecker;
//Navbar buttonlarinin altlarini cizmek icin kontrol.
function underLineChecker()
{
    for (let i = 0; i < navButtons.length; i++) 
    {
        if(parseFloat(window.pageYOffset)+parseFloat((parseFloat(window.innerHeight)/2)) >= objectStartPosition(navButtons[i]) && parseFloat(window.pageYOffset)+parseFloat((parseFloat(window.innerHeight)/2)) < objectEndPosition(navButtons[i]))
        {
            drawUnderLine(navButtons[i]);
            break;
        }
    }
}
//NavBar'daki buttonlarin altlarini cizmek icin.
function drawUnderLine(object)
{
    navButtons.forEach(element => {
        if(element==object)
        {
            element.style.textDecoration = "underline"; 
        }else
        {
            element.style.textDecoration = "none";
        }
    }
    );
}
//querySelector komutunu kisaltmak icin.
function getObject(object)
{
    return document.querySelector("#"+object.id.toLowerCase())
}
//Objenin baslangic pixelini bulmak icin
function objectStartPosition(object)
{
    return parseFloat(window.pageYOffset) + parseFloat(getObject(object).getBoundingClientRect().top)   
}
//Objenin bitis pixelini bulmak icin
function objectEndPosition(object)
{
    return parseFloat(window.pageYOffset) + parseFloat(getObject(object).getBoundingClientRect().bottom)    
}
//--------------------------------------
//-------------------Scroll-Begin------------------------------
let navBar = document.querySelector("#NavigationBar");
function smoothScroll(target,duration)
{
    var target = document.querySelector(target);
    let targetPosition = target.getBoundingClientRect().top - navBar.clientHeight;
    let startPositon = window.pageYOffset;
    let startTime = null;
        function animate(currentTime)
        {
            if(startTime == null) startTime = currentTime;
            let timeElapsed = currentTime - startTime;
            let animFrame = ease(timeElapsed,startPositon,targetPosition,duration)
            window.scrollTo(0,animFrame);
            if(timeElapsed < duration)
            {
                requestAnimationFrame(animate);
            }
        }
        function ease(t, b, c, d) 
        {
            t /= d/2;
            if (t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
        }
        requestAnimationFrame(animate);
}
//-------------------Scroll-End------------------------------
for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener("click",function()
    {
        smoothScroll("#"+navButtons[i].id.toLowerCase(),1000)
    });
}
