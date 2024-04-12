const addButton = document.getElementById("add-btn");
const resetButton = document.getElementById("reset-btn");

const message = () => {
    const clock = new Date();
    const hours = clock.getHours();
    if (hours >= 4 && hours < 12) {
        return "Good Morning!";
    } else if (hours >= 12 && hours < 4) {
        return "Good Afternoon!";
    } else if (hours >= 4 && hours <= 7) {
        return "Good Evening!";
    } else {
        return "Its night time!";
    }
}

alert(message());

//for ADD button
const add = () => {
    const num1 = Number(document.getElementById("input-1").value);
    const num2 = Number(document.getElementById("input-2").value);
    addButton.classList.add("clicked");
    setTimeout(() => {
        addButton.classList.remove("clicked");
    }, 3000);
    document.getElementById("result").innerText = num1 + num2;
};

//for RESET button
const reset = () => {
    document.getElementById("input-1").value = "";
    document.getElementById("input-2").value = "";
    document.getElementById("result").innerText = 0;
}

addButton.onclick = add;
resetButton.onclick = reset;

//when page is reloaded/refreshed
window.onload = () => {
    document.getElementById("input-1").value = "";
    document.getElementById("input-2").value = "";
}
