const K_GLOABL = '__k_a8cb719_g';
const K_UINFO = '__k_f269865d_u';
const K_TMP = '__k_b526b5f_t';
const CACHE = {};

export function setGlobal(k,v) {
    return _setVal(K_GLOABL,k,v);
}

export function getGlobal(k) {
    return _getVal(K_GLOABL, k);
}

export function clearGlobal() {
    CACHE[K_GLOABL] = {};
    localStorage.removeItem(K_GLOABL);
}

export function setUserInfo(k,v) {
    return _setVal(K_UINFO,k,v);
}

export function getUserInfo(k) {
    return _getVal(K_UINFO, k);
}

export function clearUserInfo() {
    CACHE[K_UINFO] = {};
    localStorage.removeItem(K_UINFO);
}

export function setTmp(k,v) {
    return _setSsVal(K_TMP,k,v);
}

export function getTmp(k) {
    return _getSsVal(K_TMP, k);
}

export function clearTmp() {
    CACHE[K_TMP] = {};
    localStorage.removeItem(K_TMP);
}

function _setVal(key, k, v) {
    if(k) {
        let obj = _get(key);
        typeof v === 'undefined' ? delete obj[k] : obj[k] = v;
        localStorage.setItem(key, JSON.stringify(obj));
    }
}

function _getVal(key, k) {
    return _get(key)[k];
}

function _get(key) {
    if(!CACHE[key]) {
        try {
            CACHE[key] = JSON.parse(localStorage.getItem(key)) || {};
        }catch (e) {
            CACHE[key] = {};
        }
    }
    return CACHE[key];
}

function _setSsVal(key, k, v) {
    if(k) {
        let obj = _getSs(key);
        typeof v === 'undefined' ? delete obj[k] : obj[k] = v;
        localStorage.setItem(key, JSON.stringify(obj));
    }
}

function _getSsVal(key, k) {
    return _getSs(key)[k];
}

function _getSs(key) {
    if(!CACHE[key]) {
        try {
            CACHE[key] = JSON.parse(localStorage.getItem(key)) || {};
        }catch (e) {
            CACHE[key] = {};
        }
    }
    return CACHE[key];
}