function createHeader(id, text)
{
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const h1 = document.createElement('h1');
    h1.innerText = text;
    header.appendChild(h1);
    return header;
}

function createBtn(id, text)
{
    const btn = document.createElement("button");
    btn.setAttribute('id', id);
    btn.innerText = text;
    return btn
}

function createNav(id)
{
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);

    const homeBtn = createBtn('home', 'Home');
    const menuBtn = createBtn("menu", "Menu");

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    return nav;
}

function createMain(id)
{
    const main = document.createElement('main');
    main.setAttribute("id", id);
    return main;
}

function loadPage()
{
    console.log('called loadPage');
    const content = document.getElementById('content');

    const header = createHeader("header", "Biology Restaurant");
    content.appendChild(header);

    const nav = createNav("nav");
    content.appendChild(nav);

    const tabContent = createMain('tab-content');
    content.appendChild(tabContent);
}

export default loadPage;