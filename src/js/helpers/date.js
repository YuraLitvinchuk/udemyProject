import {
    format
} from 'date-fns';


/** 
 *
 * @param {String} str
 * @param {String} type
 * @returns 
 */
export function formatDate(str, type) {
    const date = new Date(str);
    return format(date, type);
}