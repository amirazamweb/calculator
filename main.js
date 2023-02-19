let val= document.getElementsByClassName("val");
let screen= document.getElementById("screen");
let equal= document.getElementById("eql");
let symbol= document.getElementsByClassName("symbol");
let cancel = document.getElementById("cancel");
let sqrt= document.getElementById("sqrt");
let sqr= document.getElementById("sqr");
let perc= document.getElementById("perc");
let str= "";
let calc= "";
let temp= "";
screen.value= 0;
for(let x of val){
    x.addEventListener("click", function(){
      str+=x.innerText; 
      temp+=x.innerText;
      screen.value = temp; 
    })
}
for(let y of symbol){
    y.addEventListener("click", function(){
        str+=y.innerText;
        temp="";
    })
}
equal.addEventListener("click", function(){
    calc= eval(str);
    if(!Number.isInteger(calc)){
        calc= calc.toFixed(2);
    }
    screen.value= calc;
})
cancel.addEventListener("click", function(){
    screen.value=0;
    str= "";
    temp="";
})
sqrt.addEventListener("click", function(){
    str= Math.sqrt(str);
})
sqr.addEventListener("click", function(){
    str= str*str;
})
perc.addEventListener("click", function(){
    str= str*(1/100);
})