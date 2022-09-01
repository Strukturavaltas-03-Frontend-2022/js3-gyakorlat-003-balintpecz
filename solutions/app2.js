'use strict'

const cookieHandler = {

    getAll() {
        let obj = {};
        const cookies = document.cookie.split("; ");
        cookies.forEach((cookie) => {
            const uniCookie = cookie.split("=");
            obj[uniCookie[0]] = uniCookie[1];
        });

        return obj;
    },

    toSessionStorage() {
        const obj = this.getAll();
        Object.entries(obj).forEach(([key, value]) => {
            sessionStorage.setItem(key, value);
        });
    },

    flush() {
        const obj = this.getAll();
        Object.keys(obj).forEach((key) => {
            document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        });
    },
};

export default cookieHandler;
