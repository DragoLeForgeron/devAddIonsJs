/**
 * Return if some varaibles are null.
 * @param  {...any} variables - Any variables to know if they all null.
 * @returns {Boolean} Boolean
 */
 export function areNull(...variables) {

    for(const variable of variables) {
        if(variable !== null) return false;
    }

    return true;
}