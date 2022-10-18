let clientsEstimations = []
function askClientToGiveEstimation(){
    const value = prompt('Как вы оцениваете нашу кофейню от 1 до 10?')
    if (parseInt(value)>=0&&parseInt(value)<=10){
        clientsEstimations.push(value)
    }
}

for (let i=0; i<5;i++){
    askClientToGiveEstimation()
}

const goodEstimations = clientsEstimations.filter(el=>parseInt(el)>5).length;
const notGoodEstimations  = clientsEstimations.filter(el=>parseInt(el)<=5).length;

alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`)
