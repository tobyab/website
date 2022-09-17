var birthday = new Date("2008/11/26");
var diff = new Date().valueOf() - birthday.valueOf();
export var Age = Math.floor(diff / 31536000000);
