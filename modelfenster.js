document.addEventListener("DOMContentLoaded", function () {
let logo = document.querySelector(".logo");
let close = document.getElementById('close');
let modal = document.getElementById('modal');


logo.addEventListener('click', function () {
    modal.style.display = "block";

});

close.addEventListener('click', function() {
    modal.style.display = "none";
})

});