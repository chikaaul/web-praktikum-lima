let nilai = document.getElementById("nilai");
let kurs = document.getElementById("kurs");
let button = document.getElementById("konversi");

button.addEventListener("click",function(){
    let total = document.getElementById("rupiah");
    total.value = "Rp." + (kurs.value * nilai.value).toFixed(3);
;});