// User Interface Logic
window.addEventListener("load", function(event) {

    const form = document.getElementById("roboger");
    const resetBtn =  document.getElementById("reset");
    
form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const numInput = parseInt(document.getElementById("number").value);
    
})
    
console.log("hello")
resetBtn.addEventListener("click", function() {
    document.getElementById("roboger").reset();
    console.log("goodbye")
    
});
});
