export const isValidValue  = (value, notes, exceptId = -1) => {
    value = value.trim();
    let newNotes =  [...notes];
    if(exceptId != -1) newNotes.splice(exceptId, 1);
    if( value == '' ||
        value.length >= 256 ||
        newNotes.some((item) => item.value == value)) return false;

    return true;
}