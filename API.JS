//fetching data
//fetch("http://api.fikrcamp.com/student")
//.then((res)=>{
  //code  
 // return res.json()
//})
//.then((data)=>{
   //code 
  // console.log(data)
//})
// .catch(()=>{
//     console.log("error")
// })
// dog image API
document.querySelector("#btn").addEventListener("click",()=>{
  //GET request
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((res)=>{
      return res.json()
  })
  .then((data)=>{
      document.querySelector("#dog-img").src = data.message
  })
  .catch(()=>{
      console.log("Error!")
  })
})

//wheather APP challenge
document.querySelector(".btn").addEventListener("click",()=>{
  let city =  document.querySelector("#search").value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=100db93d0c467fdbd82b72c7c5aa1432`)
  
  .then((res)=>{
     return res.json()
  })
  .then((data)=>{
     console.log(data)
     document.querySelector("#location").innerText = data.name
     document.querySelector(".desc").innerText = data.weather[0].description
     document.querySelector(".c").innerText = data.main.temp
  })

})