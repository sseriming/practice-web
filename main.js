let target= document.querySelector("#dynamic");


function ArrString(){
  
    let stringArr=["DESIGN YOUR HOUSE","LS",""];
    let selectString=stringArr[0];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}


//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(ArrString());
}


//한글자씩 텍스트 출력 함수
function dynamic(Arr){
    if(Arr.length>0){
        target.textContent += Arr.shift();
        setTimeout(function(){
            dynamic(Arr);
        },80);    
    }else{
        setTimeout(resetTyping, 3000);
    }
}

dynamic(ArrString());


//커서 깜빡이 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink,500);