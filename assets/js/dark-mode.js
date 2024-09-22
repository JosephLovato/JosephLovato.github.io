// Adapted from https://github.com/kens-visuals/social-media-dashboard

const body = document.body;

const addDarkMode = () => {
    console.log("Switched to dark mode!");
    body.classList.add('dark-mode');
    localStorage.setItem('dark-mode-on', "true");

};

const addLightMode = () => {
    console.log("Switched to light mode!");
    body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode-on', "false");
};

const toggleTheme = () =>
    !body.classList.contains('dark-mode') ? addDarkMode() : addLightMode();

// const checkPreference = () =>
//     preferenceQuery.matches && window.matchMedia ? addDarkMode() : addLightMode();

const onLoad = () => {
    // check system setting if first visiting site
    if (localStorage.getItem('dark-mode-on') == null) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.setItem('dark-mode-on', "true");
        } else {
            localStorage.setItem('dark-mode-on', "false");
        }
    }

    if (localStorage.getItem('dark-mode-on') == "true") {
        addDarkMode();
    } else {
        addLightMode();
    }
}

onLoad();