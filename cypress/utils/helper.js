export function splitDate(dateStr) {
    
    const [day, month, year] = dateStr.split('/');

    return {
        month: Number(month) - 1,
        day: Number(day),
        year: year
    };
}


