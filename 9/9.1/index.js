const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel(array, number) {
    for (let i = 0; i<number;i++){
        let name = array.shift()
        console.log(`${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);   
    }    
}

function leaveQueueWithoutParcel(array, number){
    for (let i = 0; i<number;i++){
        let name = array.pop()
        console.log(`${name} не получил(а) посылку и ушел(ла) из очереди.`);       
    }
}

giveParcel(peopleWaiting,2);
peopleWaiting.shift();
leaveQueueWithoutParcel(peopleWaiting,4);