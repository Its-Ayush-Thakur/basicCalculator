const display = document.getElementById("dspl");

function addtoscr(number) {
        display.value = display.value + number;
}

function ans() {
        try {
                display.value = eval(display.value);
        } catch (error) {
                display.value = 'Error';
        }
}
