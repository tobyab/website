import moment from 'moment';
const bday = new Date('26 November 2008 00:07:00 GMT');
const ageMilliseconds = Date.now() - bday.getTime();

    var a = moment([2007, 0, 29]);
    var b = moment([2007, 0, 28]);
    a.diff(b)

export const MILLISECOND = 1;
export const SECOND = MILLISECOND * 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const YEAR = DAY * 365;

export const age = ageMilliseconds / YEAR;