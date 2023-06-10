const textLine = `animal until stretching cover strike equal explore grouping why what weekly near good would grass yes eighth for time center bear dance prehistoric monthly man say three idea place keyboarding participate maybe window size many salt milk second park twelfth flood high thirteen cartoon uppercase in flower message whole villain walk land horsetail turn eye number earth year third semi-monthly seven throw program location ground order first kind leg plant skipping subtraction comprehension rarely purple opinion preparation wind must group before seasonal state by coach type alphabet were joint ran like corner distance flexibility keep occasionally wants height elevation turning eighty eighteen weather seasons debt brown May thirty differences check from cat fish last came dissolving cold decreasing body globe had April labor learn town ate vegetation rhyme earth's below jump little nineth sixtiety gas competition machine air work cook boy we reasoning position yard ninetieth numeric movie much garden might answer tomorrow during letter-sound numeral author back stream perspiration hers barrier out price fourteen bank pig composition estimate nineteenth hopping minute when measuring area pass chicken rain any there am five too division sixty put white about date road width circle after ability jogging one unusual sure river week on characteristics argue daily sliding night drawing thirteenth morning sister but they spending motion urban galloping solid worker line arm pound circular just only test_embed_codes event united another sale book nineteen if print crop chapter long materials title neighborhood landing measurement language very rock sight climb speed left make hill run let which six may usually two shoe front magnifier sky yellow prediction them money village diversity breathing think did job typing great down circling smiled decade outdoor greater bread September fly usual to visit his map go jumping snow song me January sun pebble practice search game team half take seller live play purpose street fifteenth liquid or glove quarter people doll blue her kick fortieth August blend everyday funny mental relationship top house every chart congruent some then television & seem country evening green squirrel organize vowel ring advertising inch ending under guess family have consonant theater look thirtieth local lists use reread are finish stadium mammoth heat teamwork experience rainfall gravity highway hunt save picture fuel list than shopping stop yours beginning going boulder my folktale sixteen went nanosecond turns straight-line similarities factory duck hotel speech loss please far lunging those goal us scientist habitat twelve our ask July backward videotape mountain Christmas open construction wildlife rotation better come nine pattern graph ordinal interval textbook table seventh sing solve rabbit thermometer who past model robin could been seventeen seed city afternoon pipeline since creek extension how downtown sun's give this rate fifty goods zero railroad apple outside word a odd balance similarity can four transportation talked inside so prewriting hospital these addition farming thing old cup discussion an sum race housing wood eight rope symbol sports food insect chance mile science June more page and take-off behind sell party present penny away energy increasing character do temperature likely heart behavior seventeenth life new sound said effect twenty over next light digit forest poem calendar services tale other between fourteenth combination change throwing their eighteenth sport cloud above observe she ninety never find overhand box up write here project November zigzag of home conversation custom future question forty ready shape image school feet animals coin estimation population lake less government sheep dictionary newspaper stick airport freezing discover dime community is sixth fiftieth skills way today October magnet 2016 sixteenth difference short dollar name score exploration pulling twentieth skill March hour him where triangle buyer water ship spelling SantaClaus pushing farmer red eightieth volume tree death headstand now activity matter all both lifting still thought set no catch yesterday also angle direction black toy it once mixture be eat burning orange see precipitation yearly vocabulary museum growth parent each shelter needs follow few player right rural was outcome minus gymnasium because hundredth reason birthday region bought climbing ten square often vibration ocean clock foot hundred earn I ball underhand listen organisms magnification cardinal nice tenth thank corn desert should exercise as cost bell timber poverty listening always with climate plus consequence locate cake again that the describe watch eleven business get at ruler he fishing publish girl discuss begin into taking twisting rectangle main round February has weight fourth lowercase world dam big small fifteen will coast seventieth head you states seventy month know star universe value review tallies day want conditions riding sign sentence not predict even dinosaur pretty fairy eleventh nation fifth your settlement explain soil`;

const typedTextZone = document.getElementById("typedText");
const needToTypeTextZone = document.getElementById("needToTypeText");
const inputZone = document.getElementById("inputZone");
const coursor = document.getElementById("typeCoursor");
const secondsRemainCounter = document.getElementById("secondsRemainCounter");
const wordsMinCounter = document.getElementById("wordsMinCounter");
const charsMinCounter = document.getElementById("charsMinCounter");
const accuracyCounter = document.getElementById("accuracyCounter");
const endPopup = document.getElementById("endPopup");
const restartButton = document.getElementById("newGame");
const closeButton = document.getElementById("endgame-popup__close");
const typingIndicator = document.getElementById("startTypingIndicator");
const capsLockIndicator = document.getElementById("capsLockAlert");
const circleTimeCounter = document.getElementById("circleTimeCounter");

const typingSound = new Howl({
    src:["./sounds/typing.mp3"],
    volume: 0.5,
})
const wrongSound = new Howl({
    src:["./sounds/wrong.mp3"],
    volume: 0.5,
})
const clockTicking = new Howl({
    src:["./sounds/clock_ticking.mp3"],
})

coursor.classList.add("deactivate");

let typed;
let needToType;

let secondsRemain = 60;
let wrongChars;
let correctChars;
let wordsCount;

let wpm;
let cpm;
let accuracy;

let intervalId;
let isStarted = false;
let secondsFromStart = 0;
let secondsToEnd = 0;

let isTimeSoundPlay = false;
let timeSoundId;

function Init() {
    RemoveListeners();
    SetDefaultValues();
    SetRendomTextPlace();
    VisualizeText();
    VisualizeCounters();
    StartTypingSequence();
    CoursorCheckingSequence();
    ShowTypingIndicator();
    CheckForCapsLock();
}

function RemoveListeners() {
    inputZone.removeEventListener("input", TypingCheck);
}

function Destroy() {
    secondsFromStart == 0
    clearInterval(intervalId);
}

// Sets the default cunter values
function SetDefaultValues() {
    isStarted = false;

    typed = "";
    needToType = "";

    secondsToEnd = secondsRemain;
    wrongChars = 0;
    correctChars = 0;
    wordsCount = 0;
}

function SetRendomTextPlace() {
    let splittedTextLine = textLine.split(" ");

    // Get random place in text
    let randomPlaceIndex = Math.round(Math.random() * splittedTextLine.length);

    needToType = splittedTextLine.slice(randomPlaceIndex).join(" ") + " " + splittedTextLine.join(" ");
}

function TickTime() {
    secondsToEnd--;
    secondsFromStart++;
    
    HandleTimeOverSound();
    VisualizeCounters();
    CheckForEnd();
}

function HandleTimeOverSound() {
    if(secondsToEnd <= 10){
        clockTicking.play();
    }
}


function CheckForEnd() {
    if(secondsToEnd == 0){
        isStarted = false;
        inputZone.blur();
        FillEndPopup();
        Destroy();
    }
}

function CheckForStart() {
    if(isStarted == false){
        HideTypingIndicator();
        isStarted = true;
        // AddAddThisScript()
        secondsToEnd = secondsRemain;
        intervalId = setInterval(TickTime, 1000);
    }
}

/* function AddAddThisScript() {
    let script = document.createElement('script');
    script.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-62e91537dc2e94c0";
    document.getElementsByTagName('head')[0].appendChild(script);""
}*/

function StartTypingSequence() {
    inputZone.addEventListener("input", TypingCheck);
}

function TypingCheck(e) {
    CheckForStart();
    typingSound.play();

    let charArr = e.data.split("");
    let charArrLength = charArr.length;

    let inputCharCode = charArr[charArrLength - 1].charCodeAt(0);

    console.log(`input - ` + inputCharCode);
    console.log(`next - ` + GetNextCharCode());

    if(inputCharCode == GetNextCharCode()){
        CorrectWordSequence();
    } else{
        wrongChars ++;
        wrongSound.play();
    }

    VisualizeCounters();
}


function GetNextCharCode(){
    return needToType[0].charCodeAt(0);
}

function CorrectWordSequence() {
    if(IsWordEnded()){
        wordsCount ++;
    }
    
    correctChars ++;

    MoveLine();
    VisualizeText();
}

function IsWordEnded() {
    return needToType[0].charCodeAt(0) == 32 ? true : false;
}

function MoveLine() {
    typed += needToType[0];
    needToType = needToType.slice(1);
}

function VisualizeCounters() {
    secondsRemainCounter.innerText = secondsToEnd;
    circleTimeCounter.style.strokeDashoffset = GetConvertedPercentToCircleRadius(GetPastTimePercent()) + "px";

    // wpm = GetCorrectNum(GetUnitPerMin(wordsCount, secondsFromStart));
    cpm = GetCorrectNum(GetUnitPerMin(correctChars, secondsFromStart));
    wpm = GetCorrectNum(Math.round(cpm / 5));
    accuracy = GetCorrectNum(Math.round(100 -(wrongChars * 100 / correctChars)))

    wordsMinCounter.innerText = wpm;
    charsMinCounter.innerText = cpm;
    accuracyCounter.innerText = accuracy;
}

function GetPastTimePercent() {
    return secondsToEnd * 100 / secondsRemain
}

function GetConvertedPercentToCircleRadius(percent) {
    // 0 - fill circle
    // 332 - empty circle
    let to = 332;

    return to -(to * percent / 100);
}

function GetUnitPerMin(unit, seconds) {
    return Math.round(unit / (seconds / 60));
}

function GetCorrectNum(num){
    if( 
        num != NaN && 
        num != Infinity && 
        num != -Infinity &&
        num > 0
    ){
        return num;
    } else{
        return 0;
    }
}

function VisualizeText() {
    let isCurrentNotSpacebar = typed.slice(-1).charCodeAt(0) != 32 ? true : false

    let splittedTypedList = typed.split(" ");
    let splittedNeedToTypeList = needToType.split(" ");

    let typedRenderLine = "";
    let needToTypeRenderLine = "";

    splittedTypedList.forEach((el, index) => {
        if(isCurrentNotSpacebar && index == splittedTypedList.length-1){
            typedRenderLine += String.fromCharCode(160) + `<span class = "isPrinting">${el}</span>`
        } else{
            typedRenderLine += String.fromCharCode(160) + `<span class = "printed">${el}</span>`
        }
    });

    needToTypeRenderLine = splittedNeedToTypeList.join(String.fromCharCode(160));

    typedTextZone.innerHTML = typedRenderLine;
    needToTypeTextZone.innerText = needToTypeRenderLine;
}

function CoursorCheckingSequence() {
    let timeoutId;

    inputZone.addEventListener("blur", ()=>{
        coursor.className = "deactivate";
    })

    inputZone.addEventListener("focus", ()=>{
        MakeTypingCoursorBlink();
    })

    inputZone.addEventListener("input", ()=> {
        coursor.className = "";

        if(timeoutId != null){
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(()=>{coursor.className = "blink";}, 10);
    })
}
function MakeTypingCoursorBlink() {
    coursor.className = "blink";
}


function FillEndPopup(){
    let title, uptitle, imagePath;

    if(wpm < 25)
    {
        uptitle = "Nice work!"
        title = "Turtle",
        imagePath  = "./img/Turtle.webp"
    } else if(wpm < 35)
    {
        uptitle = "Good Job!"
        title = "Hippo",
        imagePath  = "./img/Hippo.webp"
    } else if(wpm < 45)
    {
        uptitle = "Well done!"
        title = "Octopus",
        imagePath  = "./img/Octopus.webp"
    } else if(wpm < 55)
    {
        uptitle = "Excellent!"
        title = "Rabbit",
        imagePath  = "./img/Rabbit.webp"
    } else if(wpm < 65)
    {
        uptitle = "Imressive!"
        title = "Tiger",
        imagePath  = "./img/Tiger.webp"
    } else
    {
        uptitle = "Incredible!"
        title = "Cheetah",
        imagePath  = "./img/turtle.webp"
    }


    localStorage.setItem("wpm", wpm);
    localStorage.setItem("accuracy", accuracy);
    localStorage.setItem("title", title);
    localStorage.setItem("uptitle", uptitle);
    localStorage.setItem("imagePath", imagePath);
    localStorage.setItem("time", GetFormattedTime(secondsRemain));

    window.location.href = "result.php";
}


function GetFormattedTime(seconds) {
    min = Math.floor(seconds / 60)
    secs = seconds - min * 60

    return `${GetFormattedNum(min)}:${GetFormattedNum(secs)}`
}

function GetFormattedNum(num) {
    if(num < 10){
        return "0" + num
    } 

    return num
}


function ShowTypingIndicator(){
    typingIndicator.classList.add("active");
}

function HideTypingIndicator(){
    typingIndicator.classList.remove("active");
}

function ShowCapsLockIndicator(){
    capsLockIndicator.classList.add("active");
}

function HideCapsLockIndicator(){
    capsLockIndicator.classList.remove("active");
}

function CheckForCapsLock() {
    document.addEventListener('keyup', (e) => {
        if (IsCapslockOn(e)) {
            ShowCapsLockIndicator();
        } else {
            HideCapsLockIndicator();
        }
    });
}

function IsCapslockOn(e) {
    return e.getModifierState('CapsLock')
}

function FocusOnInputZone() {
    inputZone.focus();
    MakeTypingCoursorBlink();
}

FocusOnInputZone()
Init();