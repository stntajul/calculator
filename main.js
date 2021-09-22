let operation;
let number1,number2;
function setNumber(id){
    const number=document.getElementById(id).innerText;
    document.getElementById('input').value +=number;
    //console.log(number);


}
function getNumber(){
    const value= document.getElementById('input').value;
    //document.getElementById('input').value='';
    return parseFloat(value);

}
const one=document.getElementById('one');
one.addEventListener('click',function(){
    setNumber('one');
    
})
const two=document.getElementById('two');
two.addEventListener('click',function(){
    setNumber('two');
    
})
const three=document.getElementById('three');
three.addEventListener('click',function(){
    setNumber('three');
    
})
const four=document.getElementById('four');
four.addEventListener('click',function(){
    setNumber('four');
    
})
const five=document.getElementById('five');
five.addEventListener('click',function(){
    setNumber('five');
    
})
const six=document.getElementById('six');
six.addEventListener('click',function(){
    setNumber('six');
    
})
const seven=document.getElementById('seven');
seven.addEventListener('click',function(){
    setNumber('seven');
    
})
const eight=document.getElementById('eight');
eight.addEventListener('click',function(){
    setNumber('eight');
    
})
const nine=document.getElementById('nine');
nine.addEventListener('click',function(){
    setNumber('nine');
    
})
const zero=document.getElementById('zero');
zero.addEventListener('click',function(){
    setNumber('zero');
    
})
const plus=document.getElementById('plus');
plus.addEventListener('click',function(){
   
   operation='plus';
   number1=getNumber();
   document.getElementById('input').value='';
   
    
})
const minus=document.getElementById('minus');
minus.addEventListener('click',function(){
    
    number1=getNumber();
    operation='minus';
    document.getElementById('input').value='';
    
    
})
const multiplication=document.getElementById('multiplication');
multiplication.addEventListener('click',function(){
   
    number1=getNumber();
    operation='multiplication';
    document.getElementById('input').value='';
    
    
})
const division=document.getElementById('division');
division.addEventListener('click',function(){
    
    operation='division';
    number1=getNumber();
    document.getElementById('input').value='';

    
    
})
const cancel=document.getElementById('cancel');
cancel.addEventListener('click',function(){
    document.getElementById('input').value='';
    operation='cancel';
    number1=0;
    number2=0;
   
    
})
const equal=document.getElementById('equal');
equal.addEventListener('click',function(){
   
    number2=getNumber();
    //console.log(number1,' ',number2);
    switch(operation){
    case "plus":
    document.getElementById('input').value=number1+number2;
    operation='';
    break;
    case "minus":
    document.getElementById('input').value=number1-number2;
    operation='';
    break;
    case 'division':
    document.getElementById('input').value=number1/number2;
    operation='';
    break;
    case 'multiplication':
    document.getElementById('input').value=number1*number2;
    operation='';
    break;
    case 'cancel':
    document.getElementById('input').value='';
    
    
    }

   
    
})



