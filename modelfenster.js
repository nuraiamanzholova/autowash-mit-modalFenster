document.addEventListener("DOMContentLoaded", function () {
let logo = document.getElementById("logoo");
let close = document.getElementById('close');
let modal = document.getElementById('modal');


logo.addEventListener('click', function () {
    modal.style.display = "block";
    modal.style.opacity ="1";
});

close.addEventListener('click', function() {
    modal.style.display = "none";
})

});