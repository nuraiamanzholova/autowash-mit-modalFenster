document.addEventListener("DOMContentLoaded", function () {
let logo = document.querySelector(".logo");
let close = document.getElementById('close');
let modal = document.getElementById('modal');
let background =document.getElementById('background');

logo.addEventListener('click', function () {
    modal.style.display = "block";

});

close.addEventListener('click', function() {
    modal.style.display = "none";
    background.style.display = 'none';
})
logo.addEventListener('click', function(){
background.style.display = 'block';
})


});