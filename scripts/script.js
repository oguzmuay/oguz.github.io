//Some stuffs
let navBar = document.querySelector("#NavigationBar");
let navButtons = document.querySelectorAll(".navButton");
let buttomBar = document.querySelector("#socialmedia");
let terminalOpenButton = document.querySelector("#terminalOpenButton");
let terminalCloseButton = document.querySelector("#terminalCloseButton");
let navBarButtonIndex = null;
let homeText = "C:\\Oguz Ugurdogan";
//-------------------------------------
//underLineChecker();
homeTextAnimation(1500);
//window.onscroll = underLineChecker;
//--------Home Text Animation Begin--------
function homeTextAnimation(duration) {
  let target = homeText;
  startTime = null;
  let homeTextStart = document.querySelector("#text").innerHTML;
  function drawText(currentTime) {
    if (startTime == null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let letterCount = linearEase(timeElapsed, 0, target.length, duration);
    //console.log(parseFloat(letterCount));
    //console.log(target.substring(0,letterCount));
    document.querySelector("#text").innerHTML =
      target.substring(0, letterCount) + homeTextStart;
    if (timeElapsed < duration) {
      requestAnimationFrame(drawText);
    }
  }
  function linearEase(t, b, c, d) {
    return (c * t) / d + b;
  }
  requestAnimationFrame(drawText);
}
//--------Home Text Animation End----------
//Navbar buttonlarinin altlarini cizmek icin kontrol.
/* Cok bugli
function underLineChecker()
{
    for (let i = 0; i < navButtons.length; i++) 
    {
        if(parseFloat(window.pageYOffset)+parseFloat((parseFloat(window.innerHeight)/2)) >= objectStartPosition(navButtons[i]) && parseFloat(window.pageYOffset)+parseFloat((parseFloat(window.innerHeight)/2)) < objectEndPosition(navButtons[i]))
        {
            if (navBarButtonIndex != i) {
                navBarButtonIndex = i;
                drawUnderLine(navButtons[i]);
                break;
            }

        }
    }

//NavBar'daki buttonlarin altlarini cizmek icin.
function drawUnderLine(object)
{
    console.log(object.id+"Girdi");
    navButtons.forEach(element => {
        if(element.id==object.id)
        {
            element.style.textDecoration = "underline"; 
        }else
        {
            element.style.textDecoration = "none";
        }
    }
    );
}
}*/
//querySelector komutunu kisaltmak icin.
function getObject(object) {
  return document.querySelector("#" + object.id.toLowerCase());
}
//Objenin baslangic pixelini bulmak icin
function objectStartPosition(object) {
  return (
    parseFloat(window.pageYOffset) +
    parseFloat(getObject(object).getBoundingClientRect().top)
  );
}
//Objenin bitis pixelini bulmak icin
function objectEndPosition(object) {
  return (
    parseFloat(window.pageYOffset) +
    parseFloat(getObject(object).getBoundingClientRect().bottom)
  );
}
//--------------------------------------
//-------------------Scroll-Begin------------------------------
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  let targetPosition = target.getBoundingClientRect().top - navBar.clientHeight;
  let startPositon = window.pageYOffset;
  let startTime = null;
  function animate(currentTime) {
    if (startTime == null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let animFrame = ease(timeElapsed, startPositon, targetPosition, duration);
    window.scrollTo(0, animFrame);
    if (timeElapsed < duration) {
      requestAnimationFrame(animate);
    }
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animate);
}
//-------------------Scroll-End------------------------------
for (let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener("click", function () {
    smoothScroll("#" + navButtons[i].id.toLowerCase(), 1000);
    document.querySelector("#audio").play();
  });
}
//Iconlara ses efekti eklemek icin.
document.querySelectorAll("#icon").forEach((element) => {
  element.addEventListener("click", function () {
    document.querySelector("#audio").play();
  });
});
//-----------Terminal-------------
//WIP
