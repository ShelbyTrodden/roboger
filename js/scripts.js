// User Interface Logic
window.addEventListener("load", function(event) {

    const form = document.getElementById("roboger");
    const resetBtn =  document.getElementById("reset");
    
form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const numInput = parseInt(document.getElementById("number").value);
    const result = numIdentify(numInput);
    

    function numIdentify(numInput) {
        numArray=[];
        for (let i = 0; i <= numInput; i++){
            let inputString = i.toString().split("");
            if (inputString.includes("1")) {
              return alert("beepity");
            }
    }
}
    
resetBtn.addEventListener("click", function() {
    document.getElementById("roboger").reset();
    console.log("goodbye")
    
});
});
});
