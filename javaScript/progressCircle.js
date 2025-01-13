let circularProgressHTML = document.querySelector(".circular-progressHTML"),
progressValueHTML = document.querySelector(".progress-valueHTML");

let circularProgressCSS = document.querySelector(".circular-progressCSS"),
progressValueCSS = document.querySelector(".progress-valueCSS");

let circularProgressPHP = document.querySelector(".circular-progressPHP"),
progressValuePHP = document.querySelector(".progress-valuePHP");

let circularProgressJS = document.querySelector(".circular-progressJS"),
progressValueJS = document.querySelector(".progress-valueJS");

let circularProgressAS = document.querySelector(".circular-progressAS"),
progressValueAS = document.querySelector(".progress-valueAS");

let circularProgressJ = document.querySelector(".circular-progressJ"),
progressValueJ = document.querySelector(".progress-valueJ");

let circularProgressSQL = document.querySelector(".circular-progressSQL"),
progressValueSQL = document.querySelector(".progress-valueSQL");

let circularProgressXC = document.querySelector(".circular-progressXC"),
progressValueXC = document.querySelector(".progress-valueXC");

let progressStartValueHTML = 0,
progressEndValueHTML = 95,

progressStartValueCSS = 0,
progressEndValueCSS = 90,

progressStartValuePHP = 0,
progressEndValuePHP = 70,

progressStartValueJS = 0,
progressEndValueJS = 80,

progressStartValueAS = 0,
progressEndValueAS = 85,

progressStartValueJ = 0,
progressEndValueJ = 75,

progressStartValueSQL = 0,
progressEndValueSQL = 65,

progressStartValueXC = 0,
progressEndValueXC = 70,

speed = 10;

let progressHTML = setInterval(() => {
    progressStartValueHTML++;

    progressValueHTML.textContent = `${progressStartValueHTML}%`
    circularProgressHTML.style.background = `conic-gradient(#3EFFA2 ${progressStartValueHTML * 3.6}deg, #ededed 0deg)`

    if(progressStartValueHTML == progressEndValueHTML){
        clearInterval(progressHTML);
    }
}, speed);

let progressCSS = setInterval(() => {
    progressStartValueCSS++;

    progressValueCSS.textContent = `${progressStartValueCSS}%`
    circularProgressCSS.style.background = `conic-gradient(#3EFFA2 ${progressStartValueCSS * 3.6}deg, #ededed 0deg)`

    if(progressStartValueCSS == progressEndValueCSS){
        clearInterval(progressCSS);
    }
}, speed);

let progressPHP = setInterval(() => {
    progressStartValuePHP++;

    progressValuePHP.textContent = `${progressStartValuePHP}%`
    circularProgressPHP.style.background = `conic-gradient(#3EFFA2 ${progressStartValuePHP * 3.6}deg, #ededed 0deg)`

    if(progressStartValuePHP == progressEndValuePHP){
        clearInterval(progressPHP);
    }
}, speed);

let progressJS = setInterval(() => {
    progressStartValueJS++;

    progressValueJS.textContent = `${progressStartValueJS}%`
    circularProgressJS.style.background = `conic-gradient(#3EFFA2 ${progressStartValueJS * 3.6}deg, #ededed 0deg)`

    if(progressStartValueJS == progressEndValueJS){
        clearInterval(progressJS);
    }
}, speed);

let progressAS = setInterval(() => {
    progressStartValueAS++;

    progressValueAS.textContent = `${progressStartValueAS}%`
    circularProgressAS.style.background = `conic-gradient(#3EFFA2 ${progressStartValueAS * 3.6}deg, #ededed 0deg)`

    if(progressStartValueAS == progressEndValueAS){
        clearInterval(progressAS);
    }
}, speed);

let progressJ = setInterval(() => {
    progressStartValueJ++;

    progressValueJ.textContent = `${progressStartValueJ}%`
    circularProgressJ.style.background = `conic-gradient(#3EFFA2 ${progressStartValueJ * 3.6}deg, #ededed 0deg)`

    if(progressStartValueJ == progressEndValueJ){
        clearInterval(progressJ);
    }
}, speed);

let progressSQL = setInterval(() => {
    progressStartValueSQL++;

    progressValueSQL.textContent = `${progressStartValueSQL}%`
    circularProgressSQL.style.background = `conic-gradient(#3EFFA2 ${progressStartValueSQL * 3.6}deg, #ededed 0deg)`

    if(progressStartValueSQL == progressEndValueSQL){
        clearInterval(progressSQL);
    }
}, speed);

let progressXC = setInterval(() => {
    progressStartValueXC++;

    progressValueXC.textContent = `${progressStartValueXC}%`
    circularProgressXC.style.background = `conic-gradient(#3EFFA2 ${progressStartValueJ * 3.6}deg, #ededed 0deg)`

    if(progressStartValueXC == progressEndValueXC){
        clearInterval(progressXC);
    }
}, speed);