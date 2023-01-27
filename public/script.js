'use strict'

document.getElementById("changeThis1").textContent = 1;
document.getElementById("changeThis2").textContent = 2;
document.getElementById("changeThis3").textContent = 3;
document.getElementById("changeThis4").textContent = 4;


//container 

document.querySelectorAll(".rows").forEach(element => 
   element.style.backgroundColor = "rgb(8,100,100)")


// console.log(document.querySelectorAll(".rows"));
const feedbackCommentByUser = document.querySelector('.comment')
// console.log(feedbackCommentByUser);
const sendButton = document.querySelector('input[type=submit]')
const resetBtn = document.querySelector('input[type=reset]')
const feedback = document.getElementById('feedbackReturn')
const studentOption = document.querySelector('.student')
const bachelorOption = document.querySelector('.bachelors')
const container = document.getElementById('container')




//new student api

const newStudent = async function(){
   try{
   let newStudentId;
   let NewStudentQuestionsID = []
   const res1 = await fetch('https://my-json-server.typicode.com/depth0/survey1/surveys')
   let data1 = await res1.json()
   data1 = data1[0]
   console.log(data1);
   newStudentId = data1.id
   console.log(newStudentId);
   ////////survery 
   NewStudentQuestionsID = data1.qs
   console.log(NewStudentQuestionsID); 
   const res2 = await fetch('https://my-json-server.typicode.com/depth0/survey1/questions')
   let data2 = await res2.json()
   let data2Questions = await data2.map(x => {
      return x.id
   })  

   container.insertAdjacentHTML('afterend',
   `<h2>${data1.title}</h2>
   <h3>${data1.desc}</h3>
   
   <h4>1. ${data2[2].title}</h4>
   <h4>${data2[2].description}</h4>
   ${data2[2].options.map(e =>{
      return `<input type="radio"><label> ${e}</label> <br>`
   }).join("")}
   <h4>2. ${data2[3].title}</h4>
   <h4> ${data2[3].description}</h4>
   <textarea class="answer" rows="6" cols="30" name="commentfield" placeholder="Enter your answer"></textarea> 
   <br> 

   <button type="submit" name="formBtn">
   Submit
   </button>
   `
   )
}catch(err){
console.log(err);
}
}



////bachelor stundent
const bachelorStudent = async function(){
   try {
   let newStudentId;
   let NewStudentQuestionsID = []
   const res1 = await fetch('https://my-json-server.typicode.com/depth0/survey1/surveys')
   let data1 = await res1.json()
   data1 = data1[1]
   console.log(data1);
   newStudentId = data1.id
   console.log(newStudentId);
   ////////survery 
   NewStudentQuestionsID = data1.qs
   console.log(NewStudentQuestionsID); 
   const res2 = await fetch('https://my-json-server.typicode.com/depth0/survey1/questions')
   let data2 = await res2.json()
   let data2Questions = await data2.map(x => {
      return x.id
   })  

   container.insertAdjacentHTML('afterend',
   
   `<h2>${data1.title}</h2>
   <h3>${data1.desc}</h3>
   
   
   <h4>1. ${data2[0].title}</h4>
   <h4> ${data2[0].description}</h4>
   ${data2[0].options.map(e =>{
      return `<input type="radio"><label> ${e}</label> <br>`
   }).join("")}


   <h4>2. ${data2[1].title}</h4>
   <h4> ${data2[1].description}</h4>
   ${data2[1].options.map(e =>{
      return `<input type="radio"><label> ${e}</label> <br>`
   }).join("")}

    <h4>3. ${data2[2].title}</h4>
   <h4>${data2[2].description}</h4>
   ${data2[0].options.map(e =>{
      return `<input type="radio"><label> ${e}</label> <br>`
   }).join("")}



   <h4>4. ${data2[3].title}</h4>
   <h4>${data2[3].description}</h4>
   <textarea class="answer" rows="6" cols="30" name="commentfield" placeholder="Enter your answer"></textarea> 
   <br>
   <button type="submit" name="formBtn">
   Submit
   </button>
   `
   )}catch(err){
      console.log(err);
   }
}


sendButton.addEventListener('click', function(e){
   e.preventDefault()
   feedback.insertAdjacentHTML('beforeend', feedbackCommentByUser.value)
})

   //   


studentOption.addEventListener('click',function(e){
   // e.preventDefault()
   newStudent()
   // }else if(studentOption === true){
   //    newStudent()
   // }else if(bachelorOption === true){
   //    bachelorStudent()
   // }
})
bachelorOption.addEventListener('click',function(e){
   // e.preventDefault()

   bachelorStudent()
})



   resetBtn.addEventListener('click', function(e){
   // e.preventDefault()
   feedbackCommentByUser.value = feedback.textContent = ''
   
   })
