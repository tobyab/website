var birthday = new Date("2008/11/26");
var diff = new Date().valueOf() - birthday.valueOf();
export var age = Math.floor(diff / 31536000000);

export var year = new Date().getFullYear()

var dayTime = new Date()
var currentHour = dayTime.getHours()
export var message;
if (currentHour < 12)
    message = 'morning';
else if (currentHour >= 12 && currentHour <= 17)
    message = 'afternoon';
else if (currentHour >= 17 && currentHour <= 24)
    message = 'evening';