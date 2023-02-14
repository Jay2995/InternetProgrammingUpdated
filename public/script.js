'use strict'

document.getElementById("changeThis1").textContent = 1;
document.getElementById("changeThis2").textContent = 2;
document.getElementById("changeThis3").textContent = 3;
document.getElementById("changeThis4").textContent = 4;



document.querySelectorAll(".rows").forEach(element => 
   element.style.backgroundColor = "rgb(8,100,100)")

const feedbackCommentByUser = document.querySelector('.comment')
const sendButton = document.querySelector('input[type=submit]')
const resetBtn = document.querySelector('input[type=reset]')
const feedback = document.getElementById('feedbackReturn')
const studentOption = document.querySelector('.student')
const bachelorOption = document.querySelector('.bachelors')
let surveyDiv = document.querySelector('.surveyDiv')

const clear = function(){
   surveyDiv.innerHTML = ''
}


// ******************

// use localhosted json
// 'http://localhost:5000/surveys/'
// 'http://localhost:5000/questions/'




//new student api

const newStudent = async function(id){
   try {
    surveyDiv = document.querySelector('.surveyDiv')
   const res = await fetch
   // (`https://my-json-server.typicode.com/depth0/survey1/surveys/${id}`)
   (`http://localhost:5000/surveys/${id}`)
   let data = await res.json()
   console.log(data);
   surveyDiv.innerHTML +=
   
   `
   <h1>${data.title}</h2>
   <h2>${data.desc}</h3>`
   
      
for (let index=0; index < data.qs.length; index++) {
   let id = data.qs[index];
         const response = await fetch 
         // (`https://my-json-server.typicode.com/depth0/survey1/questions/${id}`)
         (`http://localhost:5000/questions/${id}`)
         const questions = await response.json()
          surveyDiv.innerHTML +=
          `<h3>${index + 1}. ${questions.title}</h2>
          <h4>${questions.description}</h3> 
          `
         if (questions.type === "rate") {
         questions.options.map(e =>{
         surveyDiv.innerHTML += `<input class = "tick" type="radio"><label style="font-size: 15px" > ${e}</label> <br>`
         }).join("")}
         if (questions.type === "free") {
            surveyDiv.innerHTML +=
            `<textarea class="answer" rows="6" cols="30" name="commentfield" placeholder="Enter your answer"></textarea> 
            <br>
            <button type="submit" name="formBtn">
            Submit
            </button>
            `
         }
      }
   }catch(err){
      console.log(err);
      
   }
}



sendButton.addEventListener('click', function(e){
   e.preventDefault()
   feedback.insertAdjacentHTML('beforeend', feedbackCommentByUser.value)
})



studentOption.addEventListener('click',function(e){
   clear()
      newStudent(1)
   })

bachelorOption.addEventListener('click',function(e){
   clear()
   
      newStudent(2)

})




resetBtn.addEventListener('click', function(e){
feedbackCommentByUser.value = feedback.textContent = ''
   
   })
