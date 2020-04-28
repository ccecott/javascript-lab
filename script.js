const name = "Cassidy Cecott";
const age = 22;
const birthday = "October 6";
const detroitGC = true;
const lifeEvents = ["I was born in Palos Hills, IL", "I played competative ice hockey", "I moved to Milwaukee", "I moved back to Illinois"];

//if else statement
if (detroitGC) {
    console.log(`My name is ${name} and I am ${age} years old and was born ${birthday}.`);
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

//life events
for (let i = 0; i <= lifeEvents.length - 1; i++) {
    console.log(lifeEvents[i]);
}


//random number == 5
let counter = 0;

while (true) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber !== 5) {
        counter++
        console.log(`${randomNumber} !==5`);
    } else {
        counter++
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5`);
        break;
    }
}










//extended challenge 

let wage = 10;
let hours = 60;
let pay = (wage * hours);
let overTimePay = (((hours - 40) * 1.5) + pay);

if (hours > 40) {
    console.log(overTimePay);
} else {
    console.log(pay);
}

//1,000,000 dollars
let weekCount = 0;
let y = 0;
while (y < 1000000) {
    weekCount++;
    console.log(y += 630);
    console.log(`${weekCount}`);

}
//1,587 weeks


