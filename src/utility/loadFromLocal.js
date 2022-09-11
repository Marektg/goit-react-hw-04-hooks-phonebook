function getFromLocalStorage(key) {
    try {
        const localData = JSON.parse(localStorage.getItem(key));
        return localData;
    }
    catch (error) {
        console.log(error.name + ": " + error.message);
    }
};

export default getFromLocalStorage