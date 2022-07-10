// User Interface Logic
window.addEventListener("load", function(event) {

    const form = document.getElementById("roboger");
    const resetBtn =  document.getElementById("reset");
    
form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    console.log("do you suck yet?")
    const numInput = parseInt(document.getElementById("number").value);
    console.log("maybe you suck now?")
    function numIdentify(numInput) {
        let numArray=[];
            for (let i=0; i<numInput.length; i++){
                let newArray=i.toString();
                if (newArray.includes("1")) {
                    console.log("bet you suck here")
                }
            
    }
    }; 
    
resetBtn.addEventListener("click", function() {
    document.getElementById("roboger").reset();
    
});
});
});