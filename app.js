const intensity = document.querySelector('.diary .intensity')
const intensityUp = document.querySelector('.diary .intensityUp')
const intensityDown = document.querySelector('.diary .intensityDown')
const textInput = document.querySelector('.diary .sparringTypeInput')
var volume = 0

function updateIntensityButton(n) {
    intensity.innerHTML = n.toString()
}

function login(user){

}

intensity.onclick = () => {
    console.log(volume)
}

intensityUp.onclick = () => {
    if (volume < 10) updateIntensityButton(++volume)
}
intensityDown.onclick = () => {
    if (volume > 0) updateIntensityButton(--volume)
}

//when question answered then input text is set as day's heading
textInput.onchange = function(e){
    document.getElementById("trainingType").innerHTML = e.target.value
    console.log(e.target.value)
    console.log(textInput.innerHTML)
    textInput.remove()
}


updateIntensityButton(volume)


