//count down
let countDownDate = new Date("dec 31,2024 23:59:59").getTime();
let counter = setInterval(() => {
    let dateNow = Date.now();
    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / ( 1000 * 60 * 60 * 24))
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let secounds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    document.querySelector(".events .info .time .days").innerHTML = days < 100 ? `0${days}` : days < 10 ? `00${days}` : days;
    document.querySelector(".events .info .time .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".events .info .time .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".events .info .time .secounds").innerHTML = secounds < 10 ? `0${secounds}` : secounds;
    if (dateDiff <= 0) {
        clearInterval(counter)
        document.querySelector(".events .info .time .days").innerHTML = "00";
        document.querySelector(".events .info .time .hours").innerHTML = "00";
        document.querySelector(".events .info .time .minutes").innerHTML = "00";
        document.querySelector(".events .info .time .secounds").innerHTML = "00";
    }
}, 1000)

//header background

let head = document.querySelector(".header")

// span fill

let skills = document.querySelector(".our-skills");
let skillspans = document.querySelectorAll(".our-skills .skill .the-progress span");


//count up

let nums = document.querySelectorAll(".stats .box .number");
let stats = document.querySelector(".stats");
let started = false; 

//button go up

let buttongoup = document.querySelector(".go-up")

//mega menu show
let mega = document.querySelector(".header .main-nav .mega span")
let megaspan = document.querySelector(".header .main-nav .mega span .fill-back")
let megamenue = document.querySelector(".header .mega-menu")
let megaclose = document.querySelector(".header .mega-menu .close-mega")

mega.onclick = function () {
    mega.style.color = "white"
    megaspan.style.cssText = "width: 100%; height: 100%;"
    megamenue.style.cssText = "top: calc(100% + 1px);"
}
megaclose.onclick = function () {
    mega.style.color = "black"
    megaspan.style.cssText = "width: 0; height: 0;"
    megamenue.style.cssText = "top: -700%;"
}

//grid box effect
let artic = document.querySelector(".articles")
let articboxes = document.querySelectorAll(".articles .box")
let mainTitle = document.querySelectorAll(".main-title")
let gall = document.querySelector(".gallery")
let gallcont = document.querySelector(".gallery .container")
let feat = document.querySelector(".features")
let featboxes = document.querySelectorAll(".features .box")
let test = document.querySelector(".testimonials")
let testcont = document.querySelector(".testimonials .container")
let team = document.querySelector(".team")
let teamboxes = document.querySelectorAll(".team .box")
let serv = document.querySelector(".services")
let servcont = document.querySelector(".services .container")
let ourSkillsState = document.querySelector(".our-skills .skills")
let img = document.querySelector(".our-skills img")
let work = document.querySelector(".work-steps")
let workImg = document.querySelector(".work-steps .image")
let workInfo = document.querySelector(".work-steps .info")
let events = document.querySelector(".events")
let eventsImg = document.querySelector(".events img")
let eventsInfo = document.querySelector(".events .info")
let eventsSubs = document.querySelector(".events .subscribe")
let plans = document.querySelector(".pricing")
let planscont = document.querySelector(".pricing .container")
let vi = document.querySelector(".videos")
let vihold = document.querySelector(".videos .holder")
function anim(i) {
    mainTitle[i].style.cssText = "animation: startPage 0.3s linear forwards;"
}
window.onscroll = function () {
//header background
    if (window.scrollY >= 1) {
        head.classList.add("change-background")
    }else {
        head.classList.remove("change-background")
    }
//grid box effect
if (window.scrollY >= artic.offsetTop - 500) {
    anim(0)
    articboxes.forEach((ele) => {
        ele.style.cssText = "animation: startPage 1s linear forwards 0.5s;"
    })
    }else {
    articboxes.forEach((ele) => {
        ele.style.cssText = "transform: translateY(100px); opacity: 0;"
    })
}
if (window.scrollY >= gall.offsetTop - 500) {
    anim(1)
    gallcont.style.cssText = "animation: right 1s linear forwards 0.5s;"
    }else {
    gallcont.style.cssText = "transform: translateX(100%); opacity: 0;"
}
if (window.scrollY >= feat.offsetTop - 500) {
    anim(2)
    featboxes.forEach((ele) => {
        ele.style.cssText = "animation: startPage 1s linear forwards 0.5s;"
    })
    }else {
    featboxes.forEach((ele) => {
        ele.style.cssText = "transform: translateY(-100px); opacity: 0;"
    })
}
if (window.scrollY >= test.offsetTop - 500) {
    anim(3)
    testcont.style.cssText = "animation: right 1s linear forwards 0.5s;"
}else {
    testcont.style.cssText = "transform: translateX(-100%); opacity: 0;"
}
if (window.scrollY >= team.offsetTop - 500) {
    anim(4)
    teamboxes.forEach((ele) => {
        ele.style.cssText = "animation: startPage 1s linear forwards;"
    })
    }else {
    teamboxes.forEach((ele) => {
        ele.style.cssText = "transform: translateY(100px); opacity: 0;"
    })
}
if (window.scrollY >= serv.offsetTop - 500) {
    anim(5)
    servcont.style.cssText = "animation: right 1s linear forwards 0.5s;"
}else {
    servcont.style.cssText = "transform: translateX(-100%); opacity: 0;"
}
if (window.scrollY >= work.offsetTop - 500) {
    anim(7)
    workImg.style.cssText = "animation: right 0.5s linear forwards 0.5s;"
    workInfo.style.cssText = "animation: right 0.5s linear forwards 1s;"
}else {
    workImg.style.cssText = "transform: translateX(200%); opacity: 0;"
    workInfo.style.cssText = "transform: translateX(-200%); opacity: 0;"
}
if (window.scrollY >= events.offsetTop - 500) {
    anim(8)
    eventsImg.style.cssText = "animation: right 0.5s linear forwards 0.5s;"
    eventsInfo.style.cssText = "animation: right 0.5s linear forwards 1s;"
    eventsSubs.style.cssText = "animation: startPage 1s linear forwards 1.5s;"
}else {
    eventsImg.style.cssText = "transform: translateX(200%); opacity: 0;"
    eventsInfo.style.cssText = "transform: translateX(-200%); opacity: 0;"
    eventsSubs.style.cssText = "transform: translateY(100%); opacity: 0;"
}
if (window.scrollY >= plans.offsetTop - 500) {
    anim(9)
    planscont.style.cssText = "animation: startPage 1s linear forwards 0.5s;"
}else {
    planscont.style.cssText = "transform: translateY(100px); opacity: 0;"
}
if (window.scrollY >= vi.offsetTop - 500) {
    anim(10)
    vihold.style.cssText = "opacity: 1;"
}else {
    vihold.style.cssText = "opacity: 0;"
}
//span fill
    if (window.scrollY >= skills.offsetTop - 500) {
        anim(6)
        ourSkillsState.style.cssText = "animation: startPage 1s linear forwards 0.5s;"
        img.style.cssText = "animation: startPage 1s linear forwards 0.5s;"
        skillspans.forEach((span) => {
            span.style.width = span.dataset.width
        })
    }else {
        ourSkillsState.style.cssText = "transform: translateX(100%); opacity: 0;"
        img.style.cssText = "transform: translateX(-100%); opacity: 0;"
        skillspans.forEach((span) => {
            span.style.width = "0"
        })
    }
//count up
    if (window.scrollY >= stats.offsetTop - 500) {
    if (!started) {
        nums.forEach((num) => startCount(num));
    }
    started = true;
    }else{
        nums.forEach((num) => {
            num.innerHTML = "0"
        })
        started = false
}
//button go up
    if (window.scrollY >= 2000) {
        buttongoup.style.opacity = "1"
    }else {
        buttongoup.style.opacity = "0"
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
        clearInterval(count);
    }
    }, 1000 / goal);
}
//button go up

buttongoup.onclick = function () {
    window.scrollTo ({
        top: 0,
        behavior: "smooth",
    })
}
//change main color
let icon = document.querySelector(".icon")
let colors = document.querySelector(".colors")
let color = document.querySelectorAll(".colors .box-colors .color")

icon.onclick = function () {
    colors.classList.toggle("colors-show")
    infoone.classList.toggle("information-show")
}

if (window.localStorage.getItem("color")) {
    document.documentElement.style.setProperty("--main-color", window.localStorage.getItem("color"))
    color.forEach((e) => {
        e.classList.remove("active-color")
        if (e.dataset.color === window.localStorage.getItem("color")) {
            e.classList.add("active-color")
        }
    })
    
}

color.forEach((ele) => {
    ele.addEventListener("click", (el) => {
        color.forEach((e) => {
            e.classList.remove("active-color")
        })
        el.currentTarget.classList.add("active-color")
        window.localStorage.setItem("color", el.currentTarget.dataset.color)
        document.documentElement.style.setProperty("--main-color", el.currentTarget.dataset.color)
    })
})




let play = document.querySelector(".videos .holder .preview .play")
let playIcon = document.querySelector(".videos .holder .preview .play .icon")
let vid = document.querySelector(".videos .holder .preview video")
playIcon.onclick = () => play.style.cssText = "opacity: 0; z-index: -1;";

