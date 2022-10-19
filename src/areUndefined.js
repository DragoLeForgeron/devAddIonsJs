/**
 * Return if some varaibles are undefined.
 * @param  {...any} variables - Any variables to know if they all undefined.
 * @returns {Boolean} Boolean
 */
export function areUndefined(...variables) {

    for(const variable of variables) {
        if(typeof variable !== 'undefined') return false;
    }

    return true;
}