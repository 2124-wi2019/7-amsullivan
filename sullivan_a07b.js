/*  Anna Sullivan
    sullivan_a07b.js
    INFO2124WW
    Thoendel
    2/1/2020
*/
/* DO NOT MODIFY CODE BETWEEN THESE LINES */
const standardInput = process.stdin;            
standardInput.resume();
standardInput.setEncoding('utf8');
const badFoods = [];
const groceryItems = [];
clearScreen();
console.log(getPrompt(groceryItems));
/* DO NOT MODIFY CODE BETWEEN THESE LINES */

//Step 1
buildFoodsList (badFoods, "bread", "beer", "cheese", "milk", "cookie");     /*added 3 more string values as arguments*/   

standardInput.on('data', function (text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    //Step 4 Begin

    /*if else to determine the user input using decision stucture*/
if((text == "q") || (text == "Q")){
    clearScreen();
    console.log(`Bye!`);
    process.exit();
}else{
    clearScreen();
    checkItem(text, badFoods);
    if(checkItem() == false){
        text += formatItem();
        let addItem = `Item added to list!`;
        return addItem;
    }else if(checkItem() == true){
        let error = `Error: that item is not safe for your allergies.\nIt has not been added to your list. ${getPrompt()}`
        return error;
    }
}
    
    //Step 4 End
});

/* DEFINE YOUR FUNCTIONS BETWEEN THIS LINE */

//Step 2
function buildFoodsList (badFoods, ...foods){
    let total = 0;
    for(let food of foods){
        total += food;
    }
    return total;
    /*iterate through arguments*/
}

/*function getPrompt() output string with return value*/
function getPrompt(groceryItems){
    let msg = `Your grocery list contains ${groceryItems} items
Please enter a grocery item.
Enter Q to quit
=========================`;
return msg;
}

/* checkItem fuction with 2 parameters to compare badfoods to grocerylist item*/
function checkItem(listItem, badFoods){
    for(let badFood of badFoods){
        if(badFood.toLowerCase() == listItem.toLowerCase()){
            return true;
        }else {
            return false;
        }
    }
}

/*function formatItem with 1 parameter to format replace first lowercase to uppercase*/
function formatItem(listItem){
    return listItem.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
//Step 3


/* AND THIS LINE */

function clearScreen() {
    console.log('\033[2J');
}