document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        document.querySelector(".generator__right").classList.add("loaded")
    },1000)
    
})

const machineBlock = document.querySelector(".generator__main");

if(machineBlock){
    const machine = machineBlock.querySelector(".generator__machine");
    const screen = machineBlock.querySelector(".generator__screen video");
    const presets = machineBlock.querySelectorAll(".right-preset");

    let states = [
        {from: 0, to: 4.4},
        {from: 4.5, to:8.3 },
        {from: 8.4, to:12.2 },
        {from: 12.3, to:16.3 },
        {from: 16.3, to:20.2 },
        {from: 20.3, to:24 },
    ]

    function writeState(state){
        machineBlock.dataset.state = state;
    }

    function getState(){
        return Number(machineBlock.dataset.state)
    }

    function nextState(state, stateLength = states.length){
        if(state < stateLength-1){
            state++
            writeState(state, machine)
        } else{
            writeState(0, machine)
        }
    }

    function setVideo(){
        screen.currentTime = states[getState()].from;
        screen.play();
        machine.classList.add("inProgress");

        let stopAfter = (states[getState()].to - states[getState()].from)*1000

        setTimeout(()=>{
            screen.pause()
            machine.classList.remove("inProgress");
            machine.classList.remove("play")
        }, stopAfter)
    }  
    
    function playVideo(){
        screen.play();
    }

    function activePreset(){
        presets.forEach((el)=>{
            el.classList.remove("active");
            if(Number(el.dataset.num) == getState()){
                el.classList.add("active");
            }
        })
    }

    machine.addEventListener("click", ()=>{
        if(!machine.classList.contains("inProgress")){
            machine.classList.add("play")
            nextState(getState());
            setVideo()
            playVideo()
            activePreset()
        }
        
    })
}