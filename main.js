const selectors = {
    mode: "section.main .mode",
    section: "section.main",
    title: "section.main .title",
    clouds: "section.main .clouds img",
};


const mode = document.querySelector(selectors.mode);
const section = document.querySelector(selectors.section);
const title = document.querySelector(selectors.title);
const clouds = document.querySelectorAll(selectors.clouds);



const modeLight = 'heaven';
const modeDark = 'hell';


const getCurrentMode = () => {
    let currentMode = null;
    if(section.classList.contains(modeLight)) {
        currentMode = modeLight;
    }else if (section.classList.contains(modeDark)) {
        currentMode = modeDark;
    }
    return currentMode;
};

const toggleTitle = () => {
    const current = getCurrentMode();
    const titleText = {};
    titleText[modeLight] = 'Heaven';
    titleText[modeDark] = 'Hell';
    title.innerText = titleText[current];
};

const toggleMainClass = () => {
    const current = getCurrentMode();
    section.classList.remove(modeLight, modeDark);
    if(current === modeLight) {
        section.classList.add(modeDark);
    } else if (current === modeDark) {
        section.classList.add(modeLight);
    }
};

const toggleClouds = () => {
    const current = getCurrentMode();
    const regex = /img\/(heaven|hell)/;
    const newSrc = `img/${current}`;

    clouds.forEach((img) => {
        const imgSrc = img.src.replace(regex, newSrc);
        img.src = imgSrc;
    });
};


const toggleMode = (e) => {
    toggleMainClass();
    //alterar classe
    toggleTitle();
    //alterrar o titulo
    toggleClouds();
    //alterar nuvens
    
};

mode.addEventListener('click', toggleMode);