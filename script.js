
function def_case(){

    const cont = document.querySelector(".container");

    for(let i=1; i<=256; i=i+1){
        const div = document.createElement("div");
        div.style.width = "40px";
        div.style.height = "40px";
        div.style.border = "solid 1px black";
        div.classList.add("content");
        cont.appendChild(div);

        
    }

}
def_case();


function def_color(){

    const contents = document.querySelectorAll(".content");

    contents.forEach(sel => {sel.addEventListener("mouseenter",()=>{sel.style.backgroundColor = "black"})})

}

function era_color(){

    const contents = document.querySelectorAll(".content");

    contents.forEach(sel => {sel.addEventListener("mouseenter",()=>{sel.style.backgroundColor = "white"})})

}

function res_color(){

    const contents = document.querySelectorAll(".content");

    contents.forEach(sel => {sel.style.backgroundColor = "white"})}



const c_b = document.querySelector("#color");
c_b.addEventListener("click",() => {def_color();});


const e_b = document.querySelector("#erase");
e_b.addEventListener("click",() => {era_color();});

const r_b = document.querySelector("#reset");
r_b.addEventListener("click",() => {res_color();});