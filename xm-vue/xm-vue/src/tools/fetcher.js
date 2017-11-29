import 'whatwg-fetch';
import fetchJsonp from 'fetch-jsonp';
const reqHeaders = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'marketToken': localStorage.getItem('marketToken') || '',
        'sysType': '1507B'
    }
};
const request = (url, params) => new Promise((resolve, reject) => {
    const init = Object.assign({}, reqHeaders, params);
    fetch(url, init).then((res) => {
        if (res.ok) {
            resolve(res.json());
        } else {
            reject(res);
        }
    });
});
export default {
    get: (url, init) => {
        return request(url, init);
    },
    post: (url, init) => {
        return request(url, init);
    },
    JSONP: (url) => {
        console.log(url);
        return fetchJsonp(url).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return new Promise((resolve, reject) => {
                    reject(new Error('服务器错误'));
                });
            }
        });
    }
};
