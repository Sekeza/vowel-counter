const userInput = document.querySelector("#text-zone");

const countDisplay = document.querySelector("#count-increment");

const vowelCount = () => {
    let valueStr = userInput.value.toLowerCase();
   
    let arrVowel = ['a', 'e', 'i', 'o', 'u']; 
    let counter = 0;
    for(let i = 0; i < valueStr.length; i++) {
        if(arrVowel.includes(valueStr[i])) {
            console.log("i: " + valueStr[i]);
            counter++;
        }
    }
    countDisplay.innerText = counter;
    valueStr = "";
    return counter;
}

userInput.addEventListener("keyup", vowelCount);

