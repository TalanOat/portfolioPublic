const enableDarkmode = () => {
    // add the darkmode class to the body
    document.documentElement.classList.remove('lightmode');
    document.documentElement.classList.add('darkmode');
    updateThemeImages(true);
}

const enableLightmode = () => {
    document.documentElement.classList.remove('darkmode');
    document.documentElement.classList.add('lightmode');
    updateThemeImages(false);
}

// switches the theme image src using the html data attributes
const updateThemeImages = (isDarkMode) => {
    const themeImages = document.querySelectorAll('.theme-image');

    themeImages.forEach((img) => {
        img.src = isDarkMode ? img.dataset.darkSrc : img.dataset.lightSrc;
    });

}

// (1) First check the device setting for new users, if no localStorage is set
let darkmode = localStorage.getItem('darkmode');

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (darkmode === null) {
    if (prefersDarkMode) {
        enableDarkmode();
    } else {
        enableLightmode();
    }
}

// (2) Then Check local storage for existing users or if the user has set a preference
if (darkmode === 'enabled') {
    enableDarkmode();
} 
if (darkmode === 'disabled') {
    enableLightmode();
}

const themeswitchButton = document.getElementById('theme-switch');

// click event listener to toggle themes
themeswitchButton.addEventListener('click', () => {
    if (document.documentElement.classList.contains('darkmode')) {
        // Switch to light mode
        enableLightmode();
        localStorage.setItem('darkmode', 'disabled');
    } else {
        // Switch to dark mode
        enableDarkmode();
        localStorage.setItem('darkmode', 'enabled'); 
    }
});


// (OTHER) 
// This code swaps the image src when the button is clicked to prevent having to load in multiple images unecessarily

