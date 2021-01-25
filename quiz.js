const quizData = [
    {
        question: "王貞治の通算本塁打数は",
        a: "444本",
        b: "562本",
        c: "787本",
        d: "868本",
        correct: "d",
    },
    {
        question: "シンガーソングライターの幾田りらがボーカルを務める、代表曲「夜に駆ける」を歌っている音楽ユニットは？",
        a: "ASAASOBI",
        b: "HIRUASOBI",
        c: "YOASOBI",
        d: "SHINYAASOBI",
        correct: "c",
    },
    {
        question: "原子核を構成している中性子と陽子を強く結び付けている素粒子は？",
        a: "グルーオン",
        b: "ボソン",
        c: "フェルミオン",
        d: "クォーク",
        correct: "a",
    },
    {
        question: "イギリスと中国の間で起こった第一次アヘン戦争は西暦何年の出来事？",
        a: "1562年",
        b: "1724年",
        c: "1840年",
        d: "1901年",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>あなたは${quizData.length}問中【${score}問】正解でした！</h2>
                
                <button onclick="location.reload()">トップへ戻る</button>
            `;
        }
    }
});
