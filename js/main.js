const userInput = document.querySelector("#text-zone");

const countDisplay = document.querySelector("#count-increment");

const vowelCount = () => {
    // store what the user enters on the textarea
    let valueStr = userInput.value.toLowerCase();
   
    // store the vowels in an array
    let arrVowel = ['a', 'e', 'i', 'o', 'u']; 
    let counter = 0;
    // Loop through the text entered
    for(let i = 0; i < valueStr.length; i++) {
        // Check if the alphabet's vowels were inputed
        if(arrVowel.indexOf(valueStr[i]) !== -1) {
          console.log("i: " + valueStr[i]);
          counter++;
        }
    }
    // Show the number incresing as the user enters a vowel
    countDisplay.innerText = counter;
    valueStr = "";
    return counter;
}

userInput.addEventListener("keyup", vowelCount);

