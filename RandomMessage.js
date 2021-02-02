function getRandomNumber(){
    var num = 4
    return Math.floor(Math.random() * num)
}

function  MessageGenerator(x){
    console.log(x)
    if(x === 1){
    console.log(`Lagi Pergi`)
    } else if (x === 2){
    console.log(`Lagi Keluar`)
    } else if (x === 3){
    console.log(`Lagi Tidur`)
    } else {
    console.log('Dimana?')
    }
}

MessageGenerator(getRandomNumber())