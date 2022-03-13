const form = document.querySelector('#todoForm');
const inputItem = document.querySelector('#inputItem')
const myUl = document.querySelector('#myUl')



form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (inputItem.value != ""){
        let li = document.createElement('li')
        let cRandom = Math.floor(Math.random()*100)
        li.innerText = inputItem.value;
        li.setAttribute('id', cRandom )
        myUl.appendChild(li)
        inputItem.value = "";
    }else{
        alert("Malsın")
    }

})

let melDayk = document.getElementById("myUl")

melDayk.addEventListener("click", function(e){

    var item = document.getElementById(e.target.id).style
    if(item.textDecoration == "line-through"){
        document.getElementById(e.target.id).style = "text-decoration: none"
    }else{
        document.getElementById(e.target.id).style = "text-decoration: line-through"

    } 

})














