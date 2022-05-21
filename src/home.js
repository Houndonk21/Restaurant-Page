function createAbout()
{
    const about = document.createElement('div');

    const title = document.createElement('h2');
    title.textContent = 'ABOUT';

    about.appendChild(title);

    const para = document.createElement('p');
    para.innerText = "ALL YOU CAN EAT. WE HAVE THE FINEST SORTIMENTS SO YOU SHOULD EAT THEM OR DIE"

    about.appendChild(para);
    return about;
}

function setActBtn(id)
{
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn)
    {
        activeBtn.classList.remove('active');
    }
    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}

function loadHome()
{
    const content = document.getElementById("tab-content");
    content.classList.add("flex");

    content.innerText = '';

    const aboutSec = createAbout();

    content.appendChild(aboutSec);
}
export default loadHome;