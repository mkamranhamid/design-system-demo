
const CURRENCY = {
    'USD': '$',
    'EUR': '€',
}
export const request = async (path, method) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `${process.env.REACT_APP_API_URL}/${path}`;
    try {
        const response = await fetch(proxyurl + url, {
            method, // GET, POST, PUT, DELETE, etc.
            headers: {
                // the content type header value is usually auto-set
                // depending on the request body
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
        })
        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error(error)
    }
}

export const currencySymbol = (currencyName) => {
    if (!currencyName || currencyName === 'NULL') return;
    return CURRENCY[currencyName];
}

export const formatDate = (date) => {
    if (!date || date === 'NULL') return;
    const dateObj = new Date(date)
    const day = dateObj.getDay();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    return `${day}.${month},${year}`;
}

export const sortByDate = (arr, key) => {
    let newSortedArr = [...arr]
    newSortedArr = newSortedArr.sort((a, b) => {
        return new Date(a[key]) > new Date(b[key]) ? -1 : 1;
    });
    return newSortedArr;
}

export const findText = (arr, text) => {
    let newArr = [...arr]
    if (!text) return newArr;
    newArr = newArr.filter((data, index) => {
        return data.description.toLowerCase().includes(text.toLowerCase());
    });
    return newArr;
}