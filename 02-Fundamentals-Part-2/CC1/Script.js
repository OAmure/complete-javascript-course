var markHt, johnHt, markMs, johnMs, markBMI, johnBMI, MarkHbmi;
 var markHt = prompt('What is Marks Height in Meters' );
 var markMs = prompt('What is Marks Weight in Kilograms' );
 var johnHt = prompt('What is Johns Height in Meters' );
 var johnMs = prompt('What is Johns Weight in Kilograms' );
alert('Marks height is ' + markHt + ' meters and Marks Weight is ' + markMs + ' kg');
alert('Johns height is ' + johnHt + ' meters and Johns Weight is '+ johnMs + ' kg');
var markBMI = markMs / (markHt * markHt);
var johnBMI = johnMs / (johnHt * johnHt);
console.log('Marks BMI' + markBMI)
console.log('Johns BMI' + johnBMI)
var MarkHbmi = markBMI > johnBMI;
console.log(MarkHbmi)
alert('Marks BMI is ' + markBMI + ' & Johns BMI is ' + johnBMI)
if (MarkHbmi / true) {alert('Mark has a higher BMI than Mark');} else {alert('John has a higher BMI than Mark');}