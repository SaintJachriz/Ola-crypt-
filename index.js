
for(let i = 0; i < 10; i++) {
    console.log(`Hello World ${i}`);
}

let x;
let y;
let z;

document.getElementById("button").onclick = () => {
    y = Math.round(Math.random() * 20 + 1);
    z = Math.round(Math.random() * 20 + 1);
    x = Math.round(Math.random() * 1000000000000);
    let show = "";
    let displayShow = "FDHDJDMJDQ";


    let random = ""
    let display = "Afshshsh";


    let random_string = ""
    let display_string = "AfsggFSJSH2563748928267336";


    random += display.charAt(Math.floor(Math.random() * display.length))
    random_string += display_string.charAt(Math.floor(Math.random() * display.length))
    document.getElementById("page1").innerHTML = random_string;
    document.getElementById("page2").innerHTML = random;
    show += displayShow.charAt(Math.floor(Math.random() * displayShow.length))
    document.getElementById("page3").innerHTML = x;
}





const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const fd = new FormData(form);

    const data = Object.fromEntries(fd);

    const json = JSON.stringify(data);

    localStorage.getItem("form", json);
});