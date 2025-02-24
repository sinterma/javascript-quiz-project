class Quiz {
    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions; // array
        this.timeLimit = timeLimit; // number
        this.timeRemaining = timeRemaining; // number
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        return this.questions [this.currentQuestionIndex]; 

    }
    
    moveToNextQuestion() {
        this.currentQuestionIndex += 1;
    }

    shuffleQuestions() {
            const shuffledQuestions = this.questions.sort((a, b) => 0.5 - Math.random());
            return shuffledQuestions;
    }
    checkAnswer(answer) {
        this.correctAnswers +=1;
    }

    hasEnded() {

        if (this.currentQuestionIndex < this.questions.length) {
            return false;
        }
        else {
            return true;
        }
    }

}
