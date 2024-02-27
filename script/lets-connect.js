let wordsArr = ['talk', 
    'take coffe', 
    'collaborate', 
    'create', 
    'innovate', 
    'keep in touch', 
    'paint this <span class="rainbow">World</span>'];

let changeTheWord = document.getElementById('changeWords');
let i = 0;
let timeId = setInterval(() => {
    if (i > wordsArr.length-1) {
        i = 0;
    } else {
        //console.log(wordsArr[i]);
        changeTheWord.innerHTML = wordsArr[i];
        i++;
  }
}, 500);
