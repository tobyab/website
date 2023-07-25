let birthday = new Date("2008/11/26");
let diff = new Date().valueOf() - birthday.valueOf();
export let age = Math.floor(diff / 31536000000);
