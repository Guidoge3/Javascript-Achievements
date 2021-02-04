//Create your arrays an variables
//get DOM elements
//
let toevoegen = document.getElementById('add');
let eindigen = document.getElementById('finish');
let verwijderen = document.getElementById('remove');
let text = document.getElementById('input');
let listText = document.getElementById('listText');
var list = [];
var endlist = [];


toevoegen.addEventListener("click", ()=>{
    //handle adding a new todo
    x = text.value;
    list.push(x)
    endlist.push(false)
    updateListing();
});

eindigen.addEventListener("click", ()=>{
    //handle finishing a todo
    x = text.value;

    //make sure your input is seen as a number
    //check if input really is a number
    if(isNaN(x)){
        parseInt(x)
        endlist[x] = true
        //not a number
    }else{
        endlist[x] = true
        //is a number
    }
    updateListing();

});

verwijderen.addEventListener("click", ()=>{
    //handle removing of a todo
    x = text.value;
    //make sure your input is seen as a number
    //check if input really is a number
    if(isNaN(x)){
        parseInt(x)
        delete list[x];
        delete endlist[x];
        //not a number
    }else{
        list.splice(x, 1)
        endlist.splice(x, 1)
        //is a number
    }
    updateListing();
});

function updateListing(){
    //print list of todo's
    //use loop to step trough the arrays
    let listHTML = '';
    for (let i = 0; i < list.length; i++){
      if (endlist[i] === true){
        listHTML += '<li class="eindigen">' + list[i] + '</li>'
      }else{
        listHTML += '<li class="to_do">' + list[i] + '</li>'
      }
    }

   console.log(listHTML);
    listText.innerHTML = listHTML
    klaar.innerHTML = endlist
   
   }
