let hex = ['0','1', '2' , '3', '4', '5', '6','7', '8', '9', 'A', 'B', 'C', 'D', 'E'];
let colorSpan = document.getElementById('color');
let button = document.getElementById('btn');



button.addEventListener('click', function(){
    let hexCodeValue = "#";
    for(let i = 1; i<=6; i++ ){
        hexCodeValue += hex[Math.floor(Math.random()*hex.length)]
   }
    colorSpan.innerText = hexCodeValue;
    document.body.style.backgroundColor = hexCodeValue;
})