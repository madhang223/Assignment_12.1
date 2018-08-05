$(function(){
    console.log(counterReducer("INC", 5));// passing to increment the counter by 1
    console.log(counterReducer("DEC", 10));// passing to decrement the counter by 1
    console.log(counterReducer("788", 10));// passing invalid string 
    function counterReducer(actionType, counter){
        if(actionType == "INC"){ // increments the counter and returns the counter
            counter += 1
            return counter;
        }
        else if(actionType == "DEC"){ // reduces the counter and returns the counter
            counter -= 1;
            return counter;
        }
        else{ // reutrns invaid value when the string not matches
            return "Invalid value passed"
        }
    }
});