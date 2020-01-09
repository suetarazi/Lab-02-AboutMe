'use strict';

var name = prompt('What is your name?');
alert('Hi ' + name + '! Please answer the following questions \'yes\' or \'no\'');
/*
var question1 = prompt('Question 1: I have lived in 8 countries.');

switch(question1.toLowerCase()){
    case 'no':
    //console.log('correct');    
    alert('You are correct!');
        break;
    case 'n':
    //console.log('correct');    
    alert ('You are correct!');
        break;
    case 'yes':
    //console.log('wrong');    
    alert('Sorry, no!');
        break;
    case 'y':
    //console.log('wrong');    
    alert('Sorry, no!');
        break;
    default: 
    //console.log('invalid input')    
    alert('Please choose yes or no');
        break;
}

var question2 = prompt('Question 2: My undergraduate degree is in Biomedical Engineering.');

if(question2.toLowerCase()==='yes'||question2.toLowerCase()==='y'){
    //console.log('correct');
    alert('You are correct!');
}
else if(question2.toLowerCase()==='no'||question2.toLowerCase()==='n'){
    //console.log('wrong');  
    alert('No, sorry!');
}
    else{
    //  console.log('invalid input');
       alert('Please choose yes or no');
}

var question3 = prompt('My favorite sport is volleyball.');

if(question3.toLowerCase()==='yes'||question3.toLowerCase()==='y'){
    //console.log('wrong');
    alert('No, sorry!');
}
else if(question3.toLowerCase()==='no'||question3.toLowerCase()==='n'){
    //console.log('correct');
    alert('You are correct!');
}
else{
    //console.log('invalid input')
    alert('Please choose yes or no');
}

var question4 = prompt('My cat\'s name is Pinot.');

if(question4.toLowerCase()==='yes'||question4.toLowerCase()==='y'){
    //console.log('correct');
    alert('You are correct!');
}
else if(question4.toLowerCase()==='no'||question4.toLowerCase()==='n'){
    //console.log('wrong');
    alert('No, sorry!');
}
else{
    //console.log('invalid input');
    alert('Please choose yes or no');
}

var question5 = prompt('I\'m a Mom of two boys.');

if(question5.toLowerCase()==='yes'||question5.toLowerCase()==='y'){
    //console.log('correct);
    alert('You are correct!');
}
else if(question5.toLowerCase()==='no'||question5.toLowerCase()==='n'){
    //console.log('wrong');
    alert('No, sorry!');
}
else{
    //console.log('invalid input');
    alert('Pleaes choose yes or no');
}
*/

/*
//Lab 03 - question 6 - guessing a number (too high vs too low)
var travel = 35; 
var guessCount=1;

while(guessCount<=4){
    var guessNum = prompt('I love to travel! Can you guess how many countries I have visited?');
    if(guessNum==travel){
        alert('You are Correct!');
        break;
    }else if
        (guessNum<travel){
            alert('Too low!');
            guessCount++;
            
        }else if
            (guessNum>travel){
                alert('Too high!');
                guessCount++;
             
            }
            
        }
    
/*After max iterations, how to return 'hey, here's the right answer!':
else if((guessCount=4) && (guessNum != travel)){
    alert('The correct answer is 35.');
}
*/

alert('35 countries is a lot to visit! Thank you ' + name + ' for answering the questions! Now continue to the site to learn more about me.');


//Lab 03 - question 7 - guessing a string within in array

var visitedCountries = ['Spain', 'Turkey', 'Jordan', 'China', 'Australia', 'Nicaragua'];
var modifiedVisitedCountries = [];
for (var x=0; x<visitedCountries.length; x++){
    modifiedVisitedCountries[x]=visitedCountries[x].toLowerCase();
}
console.log(modifiedVisitedCountries);

var answered=false;

for(var i=1; i<=6; i++){ //attempt;
    var guessCountry = prompt('Can you guess one of the countries I have visited?');
//    if(modifiedVisitedCountries.includes(guessCountry.toLowerCase)){
        for(var j=0; j<5; j++){   //iterate through array 
                if(guessCountry.toLowerCase()===visitedCountries[j].toLowerCase()){//compare conditions
                        alert('You guessed right!');
                        i=7;
                        break;
                    }
                    else{
                        alert('Sorry, no!');
                    }
                }
            }
   // if(answered===true){
     //   ;
    //}


alert('Some of the countries I have visited are: Spain, Turkey, Jordan, China, Australia, Nicaragua');
                
