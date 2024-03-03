
// import { switchLogos } from './dark-mode-logos.js'

const afterLoad = () => {
    console.log("afterLoad");
    const dmSwitch = document.getElementById('dark-mode-switch')
    if (localStorage.getItem('dark-mode-on') == "true") {
        dmSwitch.checked = true;
    } else {
        dmSwitch.checked = false;
    }
}

afterLoad();