import { compareAsc, format } from 'date-fns'

const bday = new Date('26 November 2008 00:07:00 GMT');
const ageMilliseconds = Date.now() - bday.getTime();

export const MILLISECOND = 1;
export const SECOND = MILLISECOND * 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const YEAR = DAY * 365;

export const age = ageMilliseconds / YEAR;

export function getUserTime() {
    var today = new Date()
    var curHr = today.getHours()
    
    if (curHr < 12) {
      console.log('morning')
    } else if (curHr < 18) {
      console.log('afternoon')
    } else {
      console.log('evening')
    }
}