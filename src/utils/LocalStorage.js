const LS_NAMESPACE = 'mathPlay';

class LocalStorage {
    getMathPlayObjectLS() {
        return JSON.parse(localStorage.getItem(LS_NAMESPACE));
    }
    /*api*/
    getHistoryObject() {
        return this.getMathPlayObjectLS()
            ? this.getMathPlayObjectLS().history
            : [];
    }
    setMathPlayObjectLS(data) {
        localStorage.setItem(LS_NAMESPACE, JSON.stringify(data));
    }
    setHistoryObject(historyObject) {
        let localObject = {};
        localObject.history = historyObject;
        this.setMathPlayObjectLS(localObject);
    }
    /*api*/
    addMathPlayHistory(mathPlayOneObj) {
        let historyArray = this.getHistoryObject();
        historyArray.push(mathPlayOneObj);
        this.setHistoryObject(historyArray);
    }
    clearHistory() {
        this.setHistoryObject([]);
    }
}

export default LocalStorage;
