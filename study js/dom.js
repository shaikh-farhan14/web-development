
let counts = 0;

const button_1 =document.getElementById('btn_1');

let countupdate = document.getElementById('countupdate');

function data(){
    countupdate.append(counts);
}

button_1.addEventListener('click',function(){
    countupdate.innerHTML=''
    counts++
   countupdate.innerText = counts;
})

const button_2 =document.getElementById('btn_2')

button_2.addEventListener('click',function(){   
    if(counts==0)
        return
    countupdate.innerHTML=''

    counts--
   countupdate.innerText = counts;
})







