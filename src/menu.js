function createGallery(src, alt, text, price)
{
    const cont = document.createElement("div");
    cont.classList.add('container');

    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute("alt", alt);

    const desc = document.createElement("div");
    desc.classList.add("description");

    const foodName = document.createElement("div");
    foodName.innerText = text

    const cost = document.createElement("div");
    cost.innerText = price;

    desc.appendChild(foodName);
    desc.appendChild(cost);

    cont.appendChild(img);
    cont.appendChild(desc);
    return cont;
}

function setActBtn(id)
{
    const actBtn = document.querySelector("taab.active");
    if(actBtn){
        actBtn.classList.remove('active');
    }
    const menuBtn = document.getElementById(id);
    menuBtn.classList.add('active');
}

function loadMenu(){
    const content = document.getElementById('tab-content');
    content.classList.add('flex');
    //setActBtn('menu');
    content.textContent = '';
    const items = [
        createGallery(
            'https://www.brainline.org/sites/all/modules/custom/bl_brain/images/brain-lateral.png',
            'brain',
            'Brain',
            'EAT THE BRAIN'
        ),
        createGallery(
            'https://media.istockphoto.com/vectors/anatomical-heart-isolated-heart-diagnostic-center-sign-human-heart-vector-id1177145926?k=20&m=1177145926&s=612x612&w=0&h=30PszSkc9jmobfif-KVcCaauGUDAWlGspthpmtMsI54=',
            'Heart',
            'Without it you are merciless',
            'Oh no'
        )
    ]

    items.forEach((food)=>{
        content.append(food);
    });
}
export default loadMenu;
