const toDayMonthYearFormat = (date) => {
    //format date to dd/mm/yyyy format
    const day = (0 + date.getDate()).slice(-2);
    const month = (0 + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export { toDayMonthYearFormat }