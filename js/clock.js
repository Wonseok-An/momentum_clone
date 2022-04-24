const clock = document.querySelector(".main-page__main span:first-child");

function getClockTime(number) {
    return String(number).padStart(2, "0");
}

function getClock() {
    const date = new Date();
    clock.innerText = `${getClockTime(date.getHours())}:${getClockTime(date.getMinutes())}`;
}

getClock();
setInterval(getClock, 1000);
