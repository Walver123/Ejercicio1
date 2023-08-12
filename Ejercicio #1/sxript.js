let add = document.querySelector("#add");
substract = document.querySelector("#substract");
console.log (add, substract);
add.addEventListener("click",function(){
    let output = document.querySelector("#output");
    let result=parseInt(output.innerText)+1;
   
    if (result <=10)
    { output.innerHTML=result;
    }

else {output.innerHTML = 0;
    alert="Ya por favor"
   
}
});
substract.addEventListener('click', () => {
    let output = document.querySelector('#output');
    let result = parseInt(output.innerHTML) -1;
    if (result <0)
    {output.innerHTML = 0;
    alert="Ya por favor"
    }

else {
    output.innerHTML=result;
}
});

