let display = document.getElementById('inputBox');
let string = '';

let buttons = document.querySelectorAll('button'); //In the form of nodes
let buttonsArray = Array.from(buttons); //Converting nodes into array

//Converting array into seperate varables
buttonsArray.forEach(function(btn){
    
    btn.addEventListener('click', event => {

        if(event.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            display.value = string;

        } else if (event.target.innerHTML == 'AC') {
            string = '';
            display.value = string;

        } else if (event.target.innerHTML == '=') {
            string = eval(string);
            display.value = string;

        } else {
            string += event.target.innerHTML;
            display.value = string;
        }
    });
});