const result = document.getElementById('result');

function display(number){
    result.value += number;
    final_value = result.value;
}

function equal(){
    calculate= eval(final_value);
    result.value= calculate;
}


function clearinput(){
    result.value = "";
}

function deleteinput(){
    result.value = result.value.slice(0,-1);
}

// function toggleSun() {
//     document.querySelector('.calculator').classList.toggle('sun');
// }

function toggleMoon() {
    document.querySelector('.calculator').classList.toggle('moon');
}