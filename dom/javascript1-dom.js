//Ex6-2 : 엘리먼트 노드의 속성 변경
window.addEventListener("load", function() {        
    var section = document.querySelector("#section6-2");
    var srcInput = section.querySelector(".src-input");
    //var imgList = section.querySelector("#img-list");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");

    changeButton.onclick = function() {
        img.src = "../images/" + srcInput.value;
    };
});

//Ex6-1 : 엘리먼트 노드의 속성 변경
window.addEventListener("load", function() {        
    var section = document.querySelector("#section6-1");
    var imgSelect = section.querySelector(".img-select");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");

    changeButton.onclick = function() {
        img.src = "../images/" + imgSelect.value;
    };
});

//Ex6 : 엘리먼트 노드의 속성 변경
window.addEventListener("load", function() {        
    var section = document.querySelector("#section6");
    var srcInput = section.querySelector(".src-input");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");

    changeButton.onclick = function() {
        img.src = "../images/" + srcInput.value;
    };
});

//Ex5 : childNodes를 이용한 노드 선택
window.addEventListener("load", function() {        
    var section5 = document.querySelector("#section5");
    //var inputs = section5.querySelectorAll("input");
    var box = section5.querySelector(".box");
    //var input1 = box.childNodes[0];
    //var input2 = box.childNodes[1];
    var input1 = box.children[0];
    var input2 = box.children[1];

    input1.value = "hello";
    input2.value = "okay";
});

//Ex4 : Selectors API Level1 - Name
window.addEventListener("load", function() {        
    var section4 = document.getElementById("section4");

    // Section4 아래의 input type의 name 속성이 'x'인 엘리먼트 하나를 찾음
    var txtX = section4.querySelector("input[name='x']");
    var txtY = section4.querySelector("input[name='y']");
    var btnAdd = section4.querySelector("input[name='btn-add']");
    var txtSum = section4.querySelector("input[name='sum']");

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});

//Ex3 : Selectors API Level1 - Class
window.addEventListener("load", function() {        
    var section3 = document.getElementById("section3");

    // Section3 아래의 클래스명이 "txt-x"인 엘리먼트 하나를 찾음
    var txtX = section3.querySelector(".txt-x");
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});

//Ex2 : 엘리먼트 선택방법 개선하기
window.addEventListener("load", function() {        
    var section2 = document.getElementById("section2");
    
    /* option 1: by tag name
    var inputs = section2.getElementsByTagName("input");

    var txtX = inputs[0];
    var txtY = inputs[1]
    var btnAdd = inputs[2];
    var txtSum = inputs[3];*/    
    /* option 2: by class name */
    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});

//Ex1 : 계산기 프로그램
window.addEventListener("load", function() {        
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});