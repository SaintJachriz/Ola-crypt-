// Generate a transaction number

let x;
let y;
let z;

document.getElementById("rollButton").onclick = function () {
    let random_string = "";
    let characters = "AbFrY";
    x = Math.floor(Math.random() * 20) + 1;
    y = Math.floor(Math.random() * 20) + 1;
    z = Math.floor(Math.random() * 20) + 1;

    random_string += characters.charAt(Math.floor(Math.random() * characters.length))
     document.getElementById("aLabel").innerHTML = random_string;
    document.getElementById("xLabel").innerHTML = x;
    document.getElementById("yLabel").innerHTML = y;
    document.getElementById("zLabel").innerHTML = z;
}
