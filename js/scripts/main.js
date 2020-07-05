import SliderCreator from './SliderCreator';
import GenerateArticles from "./GenerateArticles";
import DateManager from "./DateManager";
import ThemeChanger from "./ThemeChanger";
import Login from "./Login";
import TabsHandler from "./TabsHandler";

let existing = false;
let name;

window.addEventListener("load", () => {
    initAll();
});

const initAll = () => {
    initLocationDiffScripts();
    startThemeChanger();
    startLoginEvent();
    loggedIn(document.querySelector("#login-section"));
    logOut();
};

const initLocationDiffScripts = () => {
    if(window.location.href.indexOf("index") > -1){
        startSlider();
        chargeArticles();
    }
    if(window.location.href.indexOf("about") > -1){
        initTabs();
    }
    if(window.location.href.indexOf("clock") > -1){
        initClock();
    }
}

const startSlider = () => {
    const sl = document.querySelector(".slider");
    const dots = document.querySelector(".dots");
    const btns = [document.querySelector(".prev"), document.querySelector(".next")];
    const slider = new SliderCreator(sl, dots, btns);
    slider.createSlider();
}

const chargeArticles = () => {
    const articles = new GenerateArticles(new DateManager(new Date()));
    articles.setArticles(document.querySelector("#articles-section"));
}

const startThemeChanger = () => {
    const theme = new ThemeChanger(document.querySelector("#theme"));
    initThemeChangerEvents(theme);
}

const initThemeChangerEvents = (theme) => {
    document.querySelector("#green").addEventListener("dblclick", () => {
        theme.setTheme("green");
    });
    document.querySelector("#red").addEventListener("dblclick", () => {
        theme.setTheme("red");
    });
    document.querySelector("#blue").addEventListener("dblclick", () => {
        theme.setTheme("blue");
    });
}

const startLoginEvent = () => {
    document.querySelector("#form-login").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const pass = document.querySelector("#password");
        verifyNull(name.value, email.value, pass.value);
        name.value = "";
        email.value = "";
        pass.value = "";
    });
}

const loggedIn = (container) => {
    for(var i in localStorage){
        if(typeof localStorage[i] === "string"){
            const login = new Login();
            login.addInView(container);
            existing = true;
            name = JSON.parse(localStorage[i]).name;
        }
    }
}

const logOut = () => {
    if(existing){
        document.querySelector(".logout").addEventListener("click", () => {
            localStorage.removeItem(name);
            window.location.reload();
        });
    }
}

const verifyNull = (name, email, pass) => {
    if(name !== "" && email !== "" && pass !== ""){
        const login = new Login(name.trim(), email.trim(), pass.trim());
        login.signIn();
    }
}

const initTabs = () => {
    const tabsHandler = new TabsHandler(document.querySelectorAll("#btns-container button"), document.querySelectorAll(".tab"));
    tabsHandler.setEvents();
}

const initClock = () => {
    const time = document.querySelector("#clock-container .time");
    setInterval(() => {
        const date = new DateManager(new Date());
        time.innerHTML = date.getTime();
    }, 1000);
}