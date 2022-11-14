let countEl = document.getElementById('count-el')
let lapsCount = document.getElementById('laps-count')
let count =0



function increment(){
    count +=1
    countEl.textContent = count
}
function save(){
    lapsCount.textContent += count + " 🏁 "
    count= 0 
    countEl.textContent = count
}