
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
    const colorinput = document.querySelector("#colorselect");

    contents.forEach(sel => {sel.addEventListener("mouseenter",()=>{sel.style.backgroundColor = colorinput.value})})

}

function era_color(){

    const contents = document.querySelectorAll(".content");

    contents.forEach(sel => {sel.addEventListener("mouseenter",()=>{sel.style.backgroundColor = "white"})})

}

function res_color(){

    const contents = document.querySelectorAll(".content");

    contents.forEach(sel => {sel.style.backgroundColor = "white"})}

function rain_color(){
    const contents = document.querySelectorAll(".content");
    contents.forEach(sel => {sel.addEventListener("mouseenter",()=>{const r = Math.floor(Math.random() * 256);const g = Math.floor(Math.random() * 256);const b = Math.floor(Math.random() * 256);sel.style.backgroundColor = `rgb(${r},${g},${b})`;})})

}

function alpha_color() {
    const contents = document.querySelectorAll(".content");

    contents.forEach(sel => {
        // Initialize the darkness level for each cell if it doesn't exist
        if (!sel.dataset.darkness) {
            sel.dataset.darkness = 0.95;  // Default value: fully light (1 = normal)
        }

        sel.addEventListener("mouseenter", () => {
            let darkness = parseFloat(sel.dataset.darkness); // Get the current darkness level
            const cs = window.getComputedStyle(sel);
            const rgb = cs.backgroundColor;
            
            let [r, g, b] = rgb.match(/\d+/g).map(Number);
            const rNormalized = r / 255;
            const gNormalized = g / 255;
            const bNormalized = b / 255;
            const max = Math.max(rNormalized, gNormalized, bNormalized);
            const min = Math.min(rNormalized, gNormalized, bNormalized);
            
            let h, s, l = (max + min) / 2;

            if (max === min) {
                h = s = 0; // Achromatic (gray)
            } else {
                const d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case rNormalized:
                        h = (gNormalized - bNormalized) / d + (gNormalized < bNormalized ? 6 : 0);
                        break;
                    case gNormalized:
                        h = (bNormalized - rNormalized) / d + 2;
                        break;
                    case bNormalized:
                        h = (rNormalized - gNormalized) / d + 4;
                        break;
                }
                h /= 6;
            }
            
            // Decrease lightness progressively by reducing the darkness factor
            darkness = Math.max(0, darkness - 0.05);  // Decrease darkness by 5% each time
            
            // Update the background color with the new HSL value
            sel.style.backgroundColor = `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(darkness * 100)}%)`;
            
            // Store the new darkness level for the cell
            sel.dataset.darkness = darkness;

            
        });
    });
}




const c_b = document.querySelector("#color");
c_b.addEventListener("click",() => {def_color();});


const e_b = document.querySelector("#erase");
e_b.addEventListener("click",() => {era_color();});

const r_b = document.querySelector("#reset");
r_b.addEventListener("click",() => {res_color();});

const r_c = document.querySelector("#rainbow");
r_c.addEventListener("click",() => {rain_color();});

const a_b = document.querySelector("#alpha");
a_b.addEventListener("click",()=> {alpha_color();});