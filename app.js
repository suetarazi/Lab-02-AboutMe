'use strict';


var question1 = prompt('Question 1: I have lived in 8 countries.');

switch(question1.toLowerCase()){
    case 'no':
    console.log('correct');    
    //alert('You are correct!');
        break;
    case 'n':
    console.log('correct');    
    //alert ('You are correct!');
        break;
    case 'yes':
    console.log('wrong');    
    //alert('Sorry, no!');
        break;
    case 'y':
    console.log('wrong');    
    //alert('Sorry, no!');
        break;
    default: 
    console.log('invalid input')    
    //alert('Please choose yes or no');
        break;
}

var question2 = prompt('Question 2: My undergraduate degree is in Biomedical Engineering.');

if(question2.toLowerCase()==='yes'||question2.toLowerCase()==='y'){
    console.log('correct');
    //alert('You are correct!');
}
else if(question2.toLowerCase()==='no'||question2.toLowerCase()==='n'){
    console.log('wrong');  
    //alert('No, sorry!');
}
    else{
      console.log('invalid input');
       // alert('Please choose yes or no');
}

var question3 = prompt('My favorite sport is volleyball.');

if(question3.toLowerCase()==='yes'||question3.toLowerCase()==='y'){
    console.log('wrong');
    //alert('No, sorry!');
}
else if(question3.toLowerCase()==='no'||question3.toLowerCase()==='n'){
    console.log('correct');
    //alert('You are correct!');
}
else{
    console.log('invalid input')
    //alert('Please choose yes or no');
}
