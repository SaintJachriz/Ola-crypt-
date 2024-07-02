
function sweepHouse(callback){
    setTimeout(function() {
        document.getElementById("page").textContent = "You swept the house";
        callback()
    }, 3000)
};

function drumming(callback){
    setTimeout(function() {
        document.getElementById("page1").textContent = "You are the one drumming today!";
        callback()
    }, 3000)
};

function talking(callback){
    setTimeout(function() {
        document.getElementById("page2").textContent = "You are the one talking today!";
        callback()
    }, 4000)
};


sweepHouse(() => {
    drumming(() => {
        talking(() => {
            document.getElementById("page3").textContent = "You are doing everything!"
        })
    })
});