const saveToLocal = (key, val) => {
    localStorage.setItem(`${key}`, JSON.stringify(val))
};
export default saveToLocal