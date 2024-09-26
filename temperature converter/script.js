
var celsius = document.getElementById("celsius");
var fahrenheit = document.getElementById("fahrenheit");

celsius.addEventListener('focus', function() {
    this.value = '';
});

fahrenheit.addEventListener('focus', function() {
    this.value = '';
});

celsius.addEventListener('input', function() {
    let cel = parseFloat(this.value);
    if (!isNaN(cel)) {
        let fah = (cel * 9/5) + 32;
        if (!Number.isInteger(fah)) {
            fah = fah.toFixed(2);
        }
        fahrenheit.value = fah;
    } else {
        fahrenheit.value = '';
    }
});

fahrenheit.addEventListener('input', function() {
    let fah = parseFloat(this.value);
    if (!isNaN(fah)) {
        let cel = (fah - 32) * 5/9;
        if (!Number.isInteger(cel)) {
            cel = cel.toFixed(2);
        }
        celsius.value = cel;
    } else {
        celsius.value = '';
    }
});
