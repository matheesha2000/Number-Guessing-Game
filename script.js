// NUMBER GUESSING

const minNUm = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNUm+1))+minNUm;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess the number between ${minNUm} - ${maxNum} `);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid Number!");
    }
    else if(guess<minNUm || guess>maxNum){
        window.alert("Please enter a valid Number")
    }
    else{
        attempts++;
        if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else{
            window.alert(`CORRECT! The ansewr was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }

}
