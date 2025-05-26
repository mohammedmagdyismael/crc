export const getLocalizedDateTime = dateTimeString => {
    let localTimeString = dateTimeString.replace('Z', '');
    let localDate = new Date(localTimeString);
    return localDate?.toLocaleDateString('en-Eg', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
};