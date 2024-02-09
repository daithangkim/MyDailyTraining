const addNewEntryButton = document.getElementById('addNewEntryButton')
const reviewOldEntriesButton = document.getElementById('reviewOldEntriesButton')

const intensity = document.getElementById('.intensity')
const intensityUp = document.getElementById('.intensityUp')
const intensityDown = document.getElementById('.intensityDown')
let volume = 0
const textInput = document.getElementById('.sparringTypeInput')


addNewEntryButton.onclick = () =>{
    document.querySelector('.accountActivityOptions').style.display='none'
    document.querySelector('.newEntry').style.display='block'

}

//when question answered then input text is set as day's heading
textInput.onchange = function(e){
    document.getElementById("trainingType").innerHTML = e.target.value
    console.log(e.target.value)
    console.log(textInput.innerHTML)
    textInput.remove()
}

//todo: creates the goals list and make check boxes


intensity.onclick = () => {
    console.log(volume)
}

intensityUp.onclick = () => {
    if (volume < 10) updateIntensityButton(++volume)
}

intensityDown.onclick = () => {
    if (volume > 0) updateIntensityButton(--volume)
}
function updateIntensityButton(n) {
    intensity.innerHTML = n.toString()
}

updateIntensityButton(volume)

