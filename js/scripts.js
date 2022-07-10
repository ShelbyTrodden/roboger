// User Interface Logic
window.addEventListener("load", function(event) {

    const form = document.getElementById("roboger");
    const resetBtn =  document.getElementById("reset");
    
form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const numInput = parseInt(document.getElementById("number").value);
    
    function numIdentify(number) {
        let newArray=[];
            for (let i=0; i<number.length; i++){
                newArray.push(i.toString());
    }
    console.log("you dont suck i guess")

    newArray.forEach(function(element,index){
        if (element.includes(1)){
            console.log("thats so fetch");
        }
    })
    }; 
    
resetBtn.addEventListener("click", function() {
    document.getElementById("roboger").reset();
    
});

});