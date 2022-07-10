# Mr. Roboger's Neighborhood

#### By _**Shelby Trodden**_

#### _Language Translator_

##### page can be viewed at https://ShelbyTrodden.github.io/roboger

## Technologies Used

* HTML
* CSS
* Javascript


## Description
_This is a language translator that takes a number from the user and returns a translated sentence, replacing specific numbers in the array, with specific words or phrases._

## Setup/Installation Requirements
* Clone this repository to your desktop
* Navigate to the top level of the directory
* Open roboger/index.html in your browser

## Known Bugs
* No known issues

## License

If you run into any bugs, please contact me at shelby.trodden@gmail.com

[MIT License](/LICENSE.txt)

Copyright (c) [2022] [Shelby Trodden]

# Tests 

Describe: numIdentify  

Test: Will identify if input number contains a 1  

Code: numInput= 19978
numIdentify(numInput);   


Expected output: true   

Test: Will replace number with "beep" if number contains "1"    

code: numInput= 1
numIdentify(numInput);  

Expected outcome: "beep"  

Test: Will replace number with "Won't you be my neighbor" if number contains "3"  

code: numInput= 13
numIdentify(numInput);  

Expected outcome: ""beep!","won't you be my neighbor?","beep!", "beep!", "beep!", "wont you be my neighbor?""  

Test: will replace number with "Boop!" if number contains "2"  

code: numInput= 12
numIdentify(numInput);  

Expected Outcome: "beep!", "boop!", "wont you be my neighbor?","beep!", "beep!", "boop!"  

