
let questions = [
    {
        img: 'https://static01.nyt.com/images/2019/05/19/arts/19ironthrone1/19ironthrone1-videoSixteenByNineJumbo1600.jpghttps://static01.nyt.com/images/2019/05/19/arts/19ironthrone1/19ironthrone1-videoSixteenByNineJumbo1600.jpg',
        question: 'What is the House Targaryen motto?',
        option1: 'Fire and Rain',
        option2: 'Fire and Blood',
        option3: 'Winter is Coming',
        option4: 'Hear me Roar',
        answer: 2,
    },
    {   
        question:
            "In what season does the Red Wedding take place?",
        option1: "Season 3",
        option2: "Season 1",
        option3: "Season 5",
        option4: "None of the above",
        answer: 1,
    },
    {
        question: "What title does Sansa end the series with?",
        option1: "Queen of the South",
        option2: "The Last Queen",
        option3: "Queen in the North",
        option4: "She didn't end up with a title",
        answer: 3,
    },
    {
        question: "What is the last name given to illegitimate children in the North?",
        option1: "Rob",
        option2: "Cook",
        option3: "Fire",
        option4: "Snow",
        answer: 4,
    },
    {
        question: "What are the House Lannister colors and sigil?",
        option1: "Green and a Tree",
        option2: "Red and gold, and a lion",
        option3: "Violet and a Shark",
        option4: "Red and gold, and a Dragon",
        answer: 2,
    },
    {
        question: "How does Daenerys hatch her dragon eggs?",
        option1: "In a funeral pyre",
        option2: "In the river",
        option3: "At a tavern",
        option4: "She never hatched any eggs",
        answer: 1,
    },
    {
        question: 'What is the House Lannister motto?',
        option1: 'Fire and Rain',
        option2: 'Fire and Blood',
        option3: 'Winter is Coming',
        option4: 'Hear me Roar',
        answer: 4,
    },
    {
        question: "Who murders Tywin Lannister?",
        option1: "Cersei",
        option2: "Jamie",
        option3: "Tyrion",
        option4: "He killed himself",
        answer: 3,
    },
    {
        question: "Who destroys the Iron Throne?",
        option1: "Drogon, with a burst of dragon fire",
        option2: "Daenarys",
        option3: "Jon Snow",
        option4: "Cersei",
        answer: 1,
    },
    {
        question: "What god does Stannis worship?",
        option1: "Sun",
        option2: "The Lord of Light",
        option3: "The Lord of the Wind",
        option4: "He's Agnostic",
        answer: 2,
    },
    {
        question: "What are the colors and symbol of House Stark?",
        option1: "Just white and a direwolf",
        option2: "Gray, white, and green, and a fox.",
        option3: "The Starks never had a symbol",
        option4: "Gray, white, and green, and a direwolf.",
        answer: 4,
    },
    {
        question: "What special metal makes up the most famous swords in Game of Thrones?",
        option1: "Newtonian steel",
        option2: "An alloy of gold and silver.",
        option3: "Valyrian steel",
        option4: "None of the Above.",
        answer: 3,
    },
    {
        question: "Where is the seat of House Lannister?",
        option1: "King's Landing",
        option2: "Casterly Rock",
        option3: "Dragonstone",
        option4: "High Tower",
        answer: 2,
    },
    {
        question: "What language do Red Priests and Priestesses use?",
        option1: "Queen's English",
        option2: "Low Valyrian",
        option3: "Gibberish",
        option4: "High Valyrian",
        answer: 4,
    },
    {
        question: "What is the birth order of the Baratheon brothers?",
        option1: "Robert, Stannis, Renly",
        option2: "Renly, Stannis, Robert",
        option3: "Stannis, Robert, Renly",
        option4: "Robert ans Stannis only",
        answer: 1,
    },
    {
        question: "What is the motto of House Tyrell?",
        option1: "Let it go",
        option2: "Stronger Together",
        option3: "Growing Strong",
        option4: "We will survive",
        answer: 3,
    },
    {
        question: "Who does Loras give a rose to at a joust?",
        option1: "Cersei",
        option2: "Sansa",
        option3: "Arya",
        option4: "Margaery",
        answer: 2,
    },
    {
        question: "Who attempted to found the Kingdom of the Iron Islands?",
        option1: "Theon Greyjoy",
        option2: "Euron Greyjoy",
        option3: "Yara Greyjoy",
        option4: "Balon Greyjoy",
        answer: 4,
    },
    {
        question: "How many daughters does Oberyn have?",
        option1: "8",
        option2: "2",
        option3: "He had none",
        option4: "5",
        answer: 1,
    },
    {
        question: "What is Jon Snow's real first name?",
        option1: "Viserys",
        option2: "Ned",
        option3: "Aegon",
        option4: "Stark",
        answer: 3,
    }
   
]

const question = document.querySelector('#question');
const images = document.querySelector('#images');
const options = Array.from(document.querySelectorAll('.option-text'));

let questionBank = []
let questionCounter = 0
let score = 0

beginQuiz = () => {
    questionBank = [...questions]
    questionCounter = 0
    score = 0
    displayQuestions()
}

const voyageDisplay = document.querySelector('#voyageDisplay');
const scoreDisplay = document.querySelector('#score');
const voyageBarPointer = document.querySelector('#voyageBarPointer');
const INCREMENT_POINTS = 100
const TOTAL_QUESTIONS = 9

let eachQuestion = {}
let determineResults = true

displayQuestions = () => {
    
    if(questionBank.length === 0 || questionCounter > TOTAL_QUESTIONS) {
        localStorage.setItem('lastScore', score)

        return window.location.assign('score.html')
    }

    questionCounter++
    voyageDisplay.innerText = `Voyage ${questionCounter} of 10`
    voyageBarPointer.style.width = `${(questionCounter/TOTAL_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * (questionBank.length))
    eachQuestion = questionBank[questionsIndex]
    question.innerText = eachQuestion.question

    options.forEach(option => {
        const number = option.dataset['number']
        option.innerText = eachQuestion['option' + number]
    })

    questionBank.splice(questionsIndex, 2)

    determineResults = true

}

displayScore = num => {
    score +=num
    scoreDisplay.innerText = score
}


options.forEach(option => {
    option.addEventListener('click', evt => {
        if(!determineResults) return

        determineResults = false
        const chosenOption = evt.target
        const chosenAnswer = chosenOption.dataset['number']

        let result = chosenAnswer == eachQuestion.answer ? 'correct' : 'incorrect'

        if(result === 'correct') {
            displayScore(INCREMENT_POINTS)
            let mySound = new Audio('sword.mp3')
            mySound.play()
        }
        else if(result === 'incorrect') {
            let mySound = new Audio('wrong.mp3')
            mySound.play()
        }

        chosenOption.parentElement.classList.add(result)

        setTimeout(() => {
            chosenOption.parentElement.classList.remove(result)
            displayQuestions()

        }, 1000)
    })
})

beginQuiz()









