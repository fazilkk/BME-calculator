< !DOCTYPE >
    <
    html >
    <
    html lang = "en" >
    <
    head >
    <
    meta charset = "UTF-8" >
    <
    title > BMI Calculator < /title> < /
    head > <
    body >
    BMI = KG / (H / 100 * H / 100) < br / > < br / >
    Height in CM <
    input type = "text"
id = "cm" > < br / >
    Weight in KG <
    input type = "text"
id = "kg" > < br / >
    <
    input type = "submit"
id = "submit"
value = "Submit" > < br / > < br / >
    Under Weight = Less than 18.6 < br / >
    Normal Range = 18.6 and 24.9 < br / >
    Overweight = Greater than 24.9 < br / >
    <
    div id = "result" > < /div>

<
script >
    document.getElementById("submit").addEventListener("click", bmiCalculator);

function bmiCalculator() {
    var cm = parseInt(document.getElementById("cm").value);
    var kg = parseFloat(document.getElementById("kg").value);

    var bmi;
    var newCm = parseFloat(cm / 100);

    bmi = kg / (newCm * newCm);
    bmi = bmi.toFixed(1);
    console.log(bmi);

    document.getElementById("result").innerHTML = bmi;

} <
/script> < /
body > <
    /html>