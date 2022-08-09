let container = document.getElementById("container");
let searchInput = document.getElementById("search-input");
let searchButton = document.getElementById("search-button");
let result = document.getElementById("result");
searchInput.addEventListener("keyup", show);

let value = "";
let timer = false;

function show(e){

    if(timer) clearTimeout(timer);
    
    value = e.target.value;

    timer = setTimeout(() => {
        result.innerHTML = value;
        searchInput.value = "";
    }, 400)
}

