let check = document.querySelector("#check");
let basic = document.querySelector("#basic");
let professional = document.querySelector("#professional");
let master = document.querySelector("#master");

basic.innerHTML = "19.99";
professional.innerHTML = "24.99";
master.innerHTML = "39.99";

check.addEventListener("click", function (e) {
    if (check.checked == true) {
        basic.innerHTML = "199.99";
        professional.innerHTML = "249.99";
        master.innerHTML = "399.99";
    } else {
        basic.innerHTML = "19.99";
        professional.innerHTML = "24.99";
        master.innerHTML = "39.99";
    }
});