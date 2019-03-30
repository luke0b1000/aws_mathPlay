class myMath {
    constructor({
        operationArray = [
            'addition',
            //'subtraction',
            //'multiplication',
            //'division',
        ],
        level = 2,
    } = {}) {
        /* operation = Set(addition, subtraction, multiplication, division) */
        this.operationArray = operationArray;
        this.level = level;
        this.setup();
    }
    setup() {
        this.operationMethod();
        this.numOne = this.generateRandomNum();
        this.numTwo = this.generateRandomNum();
        if (this.operation === 'subtraction') {
            /* make sure numTwo > numOne */
            if (this.numOne < this.numTwo)
                [this.numOne, this.numTwo] = [this.numTwo, this.numOne];
        } else if (this.operation === 'division') {
            /* make sure numOne or numTwo is not 0 */
            while (this.numTwo === Number(0) || this.numOne === Number(0)) {
                this.numOne = this.generateRandomNum();
                this.numTwo = this.generateRandomNum();
            }
            this.numTwo = this.multiplication(this.numOne, this.numTwo);
        }
        this.correctAnswer = this.answerBuilder(
            this.operation,
            this.numOne,
            this.numTwo
        );
    }
    operationMethod() {
        let high = this.operationArray.length - 1;
        let operationIndex = Math.floor(Math.random() * (1 + high));
        this.operation = this.operationArray[operationIndex];
    }
    mathObj() {
        const mathObj = {
            numOne: this.numOne,
            numTwo: this.numTwo,
            correctAnswer: this.correctAnswer,
            operation: this.operation,
        };
        return mathObj;
    }
    answerBuilder(operation, a, b) {
        switch (operation) {
            case 'subtraction':
                return this.subtraction(a, b);
            case 'multiplication':
                return this.multiplication(a, b);
            case 'division':
                return this.division(b, a);
            case 'addition':
            default:
                return this.addition(a, b);
        }
    }
    generateRandomNum() {
        return Math.floor(Math.random() * Math.pow(10, this.level));
    }
    addition(x, y) {
        return x + y;
    }
    subtraction(x, y) {
        return x - y;
    }
    multiplication(x, y) {
        return x * y;
    }
    division(x, y) {
        return x / y;
    }
}

export default myMath;
