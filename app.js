var form = document.getElementById('form');
var cost = document.getElementById('cost');
var shark = 3960;
var submitButton = document.getElementById('submit');

form.addEventListener('submit' , (event) => {
    cost.innerHTML = '';
    event.preventDefault();
   var x = parseInt(form.elements[1].value);
   var answer = (x/shark);
   answer = answer.toFixed(2);

   cost.innerHTML = `Your dream costs ${answer} sharks.`;

});
