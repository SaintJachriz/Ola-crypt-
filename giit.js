
function Rat() {
    return new Promise(function (reject, resolve) {
        setTimeout(function (){

            let Rat = true

            if(Rat === true){ 
                resolve("There is rat in the house")
            } else{
                reject("There is no rat in the house")
            }
        })
    })
}

function Escape() {
    return new Promise(function (resolve, reject){
        setTimeout(function () {

            let Escape = false

            if(Escape === false){
                resolve("The Rat is still in the house")
            } else{
                reject("The rat has escaped")
            }
        })
    })
}

Rat().then(value => {console.log(value)}).catch(err => console.log(err));
Escape().then(value => {console.log(value)}).catch(error => console.log(error));