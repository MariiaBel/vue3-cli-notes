export const isValidValue  = (value, notes) => {
    value = value.trim();
    const isSame = (item) => {
        return item.value == value
    }
    if( value == '' ||
        value.length >= 256 ||
        notes.some(isSame)
        )
    {
        return false;
    }

    return true;
}