let birthday = new Date("2008/11/26");
let diff = new Date().valueOf() - birthday.valueOf();
export let age = Math.floor(diff / 31536000000);

let time = new Date();
let hour = time.getHours();

export let message: string;

if (hour > 5 && hour < 12) {
  message = "morning";
} else if (hour >= 12 && hour <= 17) {
  message = "afternoon";
} else if (hour >= 17 && hour <= 24) {
  message = "evening";
}
