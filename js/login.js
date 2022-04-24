const loginPage = document.querySelector("#login-page");
const loginForm = loginPage.querySelector("form");
const loginInput = loginForm.querySelector("input");
const greetMessage = document.querySelector(".main-page__main span:nth-child(2)");
const mainPage = document.querySelector("#main-page");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "nickname"

function paintGreetings(nickname) {
    loginPage.classList.add(HIDDEN_CLASSNAME);
    mainPage.classList.remove(HIDDEN_CLASSNAME);

    const hour = new Date().getHours();
    let greetMsg = "";
    if (hour >= 6 && hour < 12) {
        greetMsg = "Good morning!";
    } else if (hour >= 12 && hour < 18) {
        greetMsg = "Good afternoon!";
    } else if (hour >= 18 && hour < 22) {
        greetMsg = "Good evening!";
    } else if (hour >= 22 || hour < 6) {
        greetMsg = "Good night!";
    } else {
        greetMsg = "Hello!"
    }

    greetMessage.innerText = `${greetMsg} ${nickname}`;
}

function onLoginSubmit(event) {
    event.preventDefault();

    const nickname = loginInput.value;
    localStorage.setItem(USERNAME_KEY, nickname);

    paintGreetings(nickname);
}

const savedNickname = localStorage.getItem(USERNAME_KEY);

if (savedNickname === null) {
    loginPage.classList.remove(HIDDEN_CLASSNAME);
    mainPage.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedNickname);
}
