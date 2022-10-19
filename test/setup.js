/**
 * Format a test value to display in the console.
 * @param {any} value - Any test value to format.
 * @returns {any|string} any | string
 */
export function formatTestValue(value) {

    if(typeof value === 'string') return `"${value}"`;

    if(Array.isArray(value)) {
        if(value.length <= 0) return `[]`;
        else return `[${value[0]}]`;
    }
    
    if(typeof value === 'object') {
        if(Object.keys(value).length <= 0) return `{}`;
        else return `{${value}}`;
    }

    return value;
}