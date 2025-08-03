
const allBtn = document.querySelectorAll('.button');
const DISPLAY_NUMBER  = document.getElementById('displayNumber');
let firstOperand = null;
let operator = null;
let secondOperand = null;
let reset = false; 

function btnClick(btn){
  btn.addEventListener('click', function (e) {
    const btnIntxt = e.target.textContent;    
    console.log(btnIntxt);
    if( btnIntxt === 'C') {
         clearClick(btn);
         return;
    }
    if( btn.classList.contains('number')) {
        btnClickNumber(btnIntxt);
        return;
    }
   
    if( btn.classList.contains('operator')) {
        btnClickOp(e.target.textContent);
        return;
    }
    
    if( btn.classList.contains('dot')) {
         if ( !DISPLAY_NUMBER.textContent.includes('.')) {
            DISPLAY_NUMBER.textContent +=  btnIntxt;    
            
        }
        return;
    }

  });
}

function btnClickNumber(btnIntxt){
        if (reset) {
            DISPLAY_NUMBER.textContent = btnIntxt;
            reset = false;
            return;
        }
        let current = DISPLAY_NUMBER.textContent; 
        if (current === '0') {
                if (btnIntxt !== '0') {
                     DISPLAY_NUMBER.textContent = btnIntxt;
                }
    }else{
            DISPLAY_NUMBER.textContent += btnIntxt;
        }       
 }
function btnClickOp(op){
    btnClickEqual(op);
    operator = op;
    reset = true; 
    DISPLAY_NUMBER.textContent = firstOperand;
    console.log(`firstOperand : ${firstOperand}`);
    console.log(`operator : ${operator}`);
   
}

function btnClickEqual(op){
    if( op === '='){
        btnClickEqualIsNow();  // =이면 계산 실행
        return;
    }
    btnClickNotEqual();  // 아니면 상태 저장 or 계산
}
function btnClickEqualIsNow(){
    secondOperand = Number(DISPLAY_NUMBER.textContent);
    firstOperand = Number(calculate(Number(firstOperand), operator, Number(Number(secondOperand).toFixed(2))));

    console.log(`secondOperand : ${secondOperand}`);
    console.log(`firstOperand : ${firstOperand}`);
}
function btnClickNotEqual(){
    if ( firstOperand === null ){
        firstOperand = DISPLAY_NUMBER.textContent ;
    }
    if ( operator !== '=' && operator !== null){ // =도 아니고 초기도 아닐 때
        btnClickEqualIsNow(); //=효과와 같다.
    }
}
function calculate(firstOperand, operator, secondOperand){
    switch(operator){
        case "+" :
        return firstOperand + secondOperand ;
        case "-" :
        return firstOperand - secondOperand ;
        case "*" :
        return firstOperand * secondOperand ;
        case "/" :
        return firstOperand / secondOperand ;
        default: return 0;
    }
}

// 초기화
function clearClick(btn){   
    DISPLAY_NUMBER.textContent = '0';
    firstOperand = null;
    secondOperand = null;
    operator = null;
    reset = false;
    console.log('초기화 완료');
    
}
allBtn.forEach( (btn) => { 
        btnClick(btn)
    }
);


document.addEventListener("DOMContentLoaded", function () {
  const btnMinimize = document.querySelector('.btn__minimize');
  const btnResturn = document.querySelector('.btn__return');
  const btnOpenCar = document.querySelector('.btn__open_cal');
  const btnClose = document.querySelector('.btn__close');
  const btnRestore = document.querySelector('.btn__restore');
  const btnNomalSize = document.querySelector('.btn__nomal_size');
  const el = document.getElementById('calculator-container');

  console.log('btnMinimize:', btnMinimize);
  console.log('btnRestore:', btnResturn);

  btnMinimize?.addEventListener("click", function () {
    el.className = '';
    console.log('minimize clicked');
    el?.classList.add('minimize');
    btnResturn.classList.add('show');
  });

  btnResturn?.addEventListener("click", function (e) {
    el.className = '';
    e.target.classList.remove('show');
    console.log('return clicked');
    el?.classList.remove('minimize');   
  });

  btnClose?.addEventListener("click", function () {
    el.className = '';
    console.log('btnClose clicked');
    el?.classList.add('close');
    btnOpenCar.classList.add('open');
  });

  btnOpenCar?.addEventListener("click", function (e) {    
    e.target.classList.remove('open');
    console.log('btnOpenCar clicked');
    el?.classList.remove('close');   
  });


  btnRestore?.addEventListener("click", function (e) {    
    el?.classList.toggle('expand');    
    btnRestore.classList.toggle('expand');
  });
 

//

});