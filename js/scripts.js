// User Interface Logic
window.addEventListener("load", function(event) {

    const form = document.getElementById("roboger");
    const resetBtn =  document.getElementById("reset");
    
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("get in loser");
    const numInput = parseInt(document.getElementById("number").value);
    console.log("were going shopping");
    function numIdentify(numInput) {
        if (numInput.includes("1", "2", "3")); {
            return console.log("you cant sit with us");
    }
    };  
});
    
resetBtn.addEventListener("click", function() {
    document.getElementById("roboger").reset();
    
});
    });

