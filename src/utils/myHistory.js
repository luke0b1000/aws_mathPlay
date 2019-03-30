class History {
    constructor() {
        this.keepHistory = true;
        this.history = [];
    }
    add(historyObj) {
        this.history.unshift(historyObj);
    }
    erase() {
        this.history = [];
    }
    turnOnHistory() {
        this.keepHistory = true;
    }
    turnOffHistory() {
        this.keepHistory = false;
    }
    allHistory() {
        return this.history;
    }
}

class MathHistory extends History {
    incorrectHistory() {
        return this.history.filter(eachObj => eachObj.correct !== true);
    }
    correctHistory() {
        return this.history.filter(eachObj => eachObj.correct === true);
    }
}

export default MathHistory;
