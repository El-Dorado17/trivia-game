const database = {
    questions: [{
        id: 1,
        q: "What year is known as Y2K?",
        a: "2000",
        wrong1: "1999",
        wrong2: "2001",
        wrong3: "1492"
    }, {
        id: 2,
        q: "How would you pronounce the musical key: 'A#' ?",
        a: "A-Sharp",
        wrong1: "A-Pound",
        wrong2: "A-Hash",
        wrong3: "A-Number"
    }, {
        id: 3,
        q: "Who were the founding twins of Rome, raised by Faustulus?",
        a: "Romulus & Remus",
        wrong1: "Mario & Luigi",
        wrong2: "Prof. Lupin & Sirius Black",
        wrong3: "Ben & Jerry"
    }, {
        id: 4,
        q: "What is the chemical symbol for gold?",
        a: "Au",
        wrong1: "Go",
        wrong2: "Or",
        wrong3: "Ag"
    }, {
        id: 5,
        q: "Which of these events occured in 1966?",
        a: "All other choices",
        wrong1: "The Beatles released their album 'Revolver'",
        wrong2: "England hosted and won the World Cup against West Germany at Wembley Stadium",
        wrong3: "The first episode of the science fiction television series 'Star Trek' aired"
    }
    ]
}

export const getQuestions = () => {
    return database.questions.map(question => ({...question}))
}