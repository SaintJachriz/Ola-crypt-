
function goSchool() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const school = true;

            if(school) {
                resolve("How was school?");
            } else{
                reject("Why did you not go to school?");
            }
        }, 2000)
    })
}

function homecoming() {
     return new Promise((resolve, reject) => {
        setTimeout(() => {

            const homecoming = true;

            if(homecoming) {
                resolve("You will be going back home soon!")
            } else{
                reject("You will never go back home!")
            }
        }, 3000)
     })
}


function washPlate(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const platewash = true;

            if(platewash){
                resolve("Plate was washed!")
            } else{
                reject("Plate was not washed!")
            }
        }, 3000);
    })
}

goSchool().then(value => {console.log(value); return homecoming()})
.then(value => {console.log(value); return washPlate()})
.then(value => {console.log(value); console.log("You did everything!")})
.catch(error => console.log(error))




setTimeout(() => {
    let myArray = [1, 2, 3, 4, 5];

for (let i = 0; i < myArray.length; i++) {
    document.getElementById("page").textContent = `The numbers are: ${myArray[0]}`;
    document.getElementById("page1").textContent = `The numbers are: ${myArray[1]}`;
    document.getElementById("page2").textContent = `The numbers are: ${myArray[2]}`;
    document.getElementById("page3").textContent = `The numbers are: ${myArray[3]}`;
    document.getElementById("page4").textContent = `The numbers are: ${myArray[4]}`;
}
}, 3000)


fetch("people.json")
    .then(response => response.json())
    .then(value => value.json)

    let names = ["Spongebob", "Patrick", "Squidward", "Sandy"]

    const json = JSON.stringify(names)

    console.log(json)