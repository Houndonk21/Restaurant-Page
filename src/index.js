import loadHome from "./home";
import loadPage from "./init";
import loadMenu from "./menu";

init();

function addNavEvents()
{
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');

    homeBtn.addEventListener("click", loadHome);
    menuBtn.addEventListener("click", loadMenu);
}

function init()
{
    loadPage();
    loadHome();
    addNavEvents();
}