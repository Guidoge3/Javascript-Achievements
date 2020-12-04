    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let onderwerpLength = onderwerp.length;
        let woordLength = werkwoord.length;
        let restwoordLength = restwoord.length;
        let index = randomizer(onderwerpLength);
        let woord1 = onderwerp[index];
        index = randomizer(woordLength);
        let woord2 = werkwoord[index];
        index = randomizer(restwoordLength);
        let woord3 = restwoord[index];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["He", "It", "She"];
    const werkwoord = ["walks", "Runs", "Crawls"];
    const restwoord = ["Fast", "To school", "Home"];
        
    let plaatjes = ["https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-11-1575298223.jpg", "https://stayhipp.com/wp-content/uploads/2019/09/Thomas.jpg", "https://blog.malwarebytes.com/wp-content/uploads/2013/12/NDjEpXQ-900x506.jpg"]

