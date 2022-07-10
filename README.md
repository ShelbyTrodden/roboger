#Tests#

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

Expected Outcome: "beep!", "boop!", "wont you be my neightbor?","beep!", "beep!", "boop!"

