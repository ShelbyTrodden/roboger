// User Interface Logic
window.addEventListener('load', function () {
    const form = document.getElementById('roboger');
    const resetBtn = document.getElementById('reset');
    const submitButton = document.getElementsByClassName('btn')[0];

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const numInput = parseInt(document.getElementById('number').value);
    const result = numIdentify(numInput);
    submitButton.setAttribute('disabled', 'disabled');

    function numIdentify(numInput) {
        numArray = [];
        for (let i = 0; i <= numInput; i++) {
        let inputString = i.toString().split('');
        if (inputString.includes('3')) {
            numArray.push("Won't you be my neighbor?");
        } else if (inputString.includes('2')) {
            numArray.push('Boop!');
        } else if (inputString.includes('1')) {
            numArray.push('Beep!');
        } else {
            numArray.push(inputString);
        }
    }
        return numArray.join(', ');
    }
    (document.getElementById('beep-boop').innerText = result);
});

resetBtn.addEventListener('click', function () {
    document.getElementById('roboger').reset();
    submitButton.removeAttribute('disabled');
    document.getElementById('beep-boop').innerText = '';
});
});