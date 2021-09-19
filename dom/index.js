//window.onload = function() {
window.addEventListener("load", function() {        
    var btnAdd = document.getElementById("btn-add");
    btnAdd.onclick = function() {
        var x, y;
        x = prompt("x 값을 입력하세요", 0); // 0은 기본값
        y = prompt("y 값을 입력하세요", 0); // 0은 기본값
        
        x = parseInt(x);
        y = parseInt(y);

        var btnAdd = document.getElementById("btn-add");
        
        btnAdd.type = "text";
        btnAdd.value = x + y;
        span1.innerText = x + y;
    };
});