// User Interface Logic
window.addEventListener("load", function(event) {

    const form = document.getElementById("roboger");
    const resetBtn =  document.getElementById("reset");
    
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const numInput = parseInt(document.getElementById("number").value);

    numIdentify(numInput); {
        if (numInput.includes(1, 2, 3)); {
            return true;
    } return false; 
    };  
});
    
resetBtn.addEventListener("click", function() {
    document.getElementById("roboger").reset();
    
});
    });

