import { getQuestions } from "./database.js"

const questions = getQuestions()

console.log(questions)

export const Questions = () =>{
    let html = `<ul>`
    for (const question of questions){
        html += `<li> ${question.q}</li>`
    }

    html += `</ul>`

    return html
}

const mainContainer = document.querySelector("#container")

const applicationHTML= `
<h1> Hey </h1>

${Questions()}
`


mainContainer.innerHTML = applicationHTML