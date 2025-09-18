const date = document.querySelector("#dynamic-date");
const greet = document.querySelector("#heading");
const btn = document.querySelector("#add-btn");
const list = document.querySelector(".list");
const emoji = document.querySelector(".emoji");
const input = document.querySelector(".input-box");
const active = document.querySelector("#active-count");
const total = document.querySelector("#total-count");
const done = document.querySelector("#done-count");
const progress = document.querySelector("#progress-count");

activeCount = 0;
totalCount = 0;
doneCount = 0;


let today = new Date();
const days = ["sunday","monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let todayDay = days[today.getDay()];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
let todayMonth = months[today.getMonth()];
let todayDate = today.getDate();
date.textContent = `${todayDay}, ${todayDate} ${todayMonth}`;


let message = "";
const time = today.getHours();
if (time < 12) {
    message = "Good morning";
} else if (time < 18) {
    message = "Good afternoon";
} else {
    message = "Good evening";
}
greet.textContent = message;

const updateCount = () => {
    progressCount = totalCount === 0 ? 0 : Math.round((doneCount / totalCount) * 100);
    total.textContent = totalCount;
    done.textContent = doneCount;
    active.textContent = activeCount;
    progress.textContent = `${progressCount}%`;
}

btn.addEventListener("click", () => {
    totalCount++;
    activeCount++;
    updateCount();
    let inp = input.value.trim();
    if (!inp) return;

    let li = document.createElement("li");
    li.textContent = inp;

    
    let ul = list.querySelector("ul");
    if (!ul) {
        ul = document.createElement("ul");
        list.appendChild(ul);
    }

    ul.appendChild(li);
    input.value = ""; 

    if (li) {
        emoji.classList.add("hide");
    }

li.addEventListener("click", () => {
    if (!li.classList.contains("done")) {
        li.classList.add("done");
        doneCount++;
        activeCount--;
        updateCount();
        li.remove();
        if (!list.querySelector("li")) {
            emoji.classList.remove("hide");
        }
    }
});

});








