export const isValidValue  = (value, notes) => {
    value = value.trim();
    if( value == '' ||
        value.length >= 256 ||
        notes.includes(value, 0))
    {
        return false;
    }

    return true;
}