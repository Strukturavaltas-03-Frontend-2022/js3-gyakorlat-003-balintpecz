const setCookie = (string) => {
    const expires = new Date(Date.now()+ (15 * 60 * 1000)).toUTCString();
    document.cookie = `token=${string}; expires=${expires}`
}

export default setCookie;
