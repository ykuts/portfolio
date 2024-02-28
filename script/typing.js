const helloWorldElement = document.getElementById('helloWorld');
const phrases = ['console.log("Hello, World!");',
    'print("Hello, World!")',
    'System.out.println("Hello, World!");',
    'Console.WriteLine("Hello, World!");',
    'World, HELLO!'
];
const animationDelay = 1000;

function printLetters(phraseIndex, letterIndex) {
    if (phraseIndex < phrases.length) {
        const currentPhrase = phrases[phraseIndex];

        if (letterIndex < currentPhrase.length) {
            helloWorldElement.innerHTML += currentPhrase.charAt(letterIndex);
            setTimeout(function () {
                printLetters(phraseIndex, letterIndex + 1);
            }, 100);
        } else {
            // Wait for a delay before deleting the phrase
            setTimeout(function () {
                deletePhrase(phraseIndex, currentPhrase.length - 1);
            }, animationDelay);
        }
    }
}

function deletePhrase(phraseIndex, letterIndex) {
    if (letterIndex >= 0) {
        // Remove the last letter from the content
        helloWorldElement.innerHTML = helloWorldElement.innerHTML.slice(0, -1);

        // Use setTimeout for the delay before deleting the next letter
        setTimeout(function () {
            deletePhrase(phraseIndex, letterIndex - 1);
        }, 100);
    } else {
        // Wait for a delay before printing the next phrase or repeat
        setTimeout(function () {
            printLetters((phraseIndex + 1) % phrases.length, 0);
        }, animationDelay);
    }
}

// Start the animation with the first phrase
printLetters(0, 0);