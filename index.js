
function vansh() {
   
   document.querySelector(".btnone").addEventListener("click",()=>{

    let color = Math.random()*5+1
    console.log(color)

    if (color<2) {
        document.querySelector(".projectone").style.backgroundColor="red"
    } else if(color<4){
        document.querySelector(".projectone").style.backgroundColor="green"
    }
    else {
        document.querySelector(".projectone").style.backgroundColor="blue"
    }
    }
   )


}


vansh()


function shree() {
    

let count = 0 ;

const value = document.querySelector(".num");
const btns = document.querySelectorAll(".btn");


btns.forEach(function (btn) {
    btn.addEventListener("click",(e)=>{
      const styles=  e.currentTarget.classList;
      if (styles.contains("dec")) {
        count--;
        
      } else if(styles.contains("inc")) {
        count++
       
        
      }
      else{
    count=0;
  }
  value.innerHTML=count;
      if (count>0) {
        value.style.color="green";
      } 
      if(count<0) {
        value.style.color="red";
      }
      if(count===0){
        value.style.color="black";
      }
    })


})
// document.querySelector(".inc").addEventListener("click",()=>{
//     for (let index = 0; index < Array.length; index++) {
        
//         console.log()
        
//     }
// })
// }
}
shree()




function vanshi()  {

    const reviews=[
      {
        id:"1",
        name:"Sundar Pichai",
        job:"Web CEO",
        img:"https://cdn.comparably.com/28020681/u/23906/ceo_s.jpg",
        text:"Google's CEO, Sundar Pichai, has 5702 employee ratings and a score of 79/100, placing them in the Top 5% of similar size companies on Comparably with 10,000+ Employees and Top 20% of other companies in San Francisco. When breaking the CEO score down by factors such as department, gender, and ethnicity, we see that males at Google rate Sundar Pichai higher than non-binary employees, giving the CEO a score of 81/100",

      },
      {
        id:"2",
        name:"Satya Nadella",
        job:"CEO Microsoft",
        img:"https://cdn.comparably.com/27819021/u/25042/ceo_s.jpg",
        text:"Mr. Satya Nadella has been the Chief Executive Officer of Microsoft Corporation since February 4, 2014. Mr. Nadella joined Microsoft in 1992 and served leadership roles in both enterprise and consumer businesses across Microsoft for over 22 years. He served as Executive Vice President of Cloud & and",

      },
      {
        id:"3",
        name:"Elon musk",
        job:"Ceo Tesla",
        img:"https://cdn.comparably.com/27606091/u/25528/ceo_v1.jpg",
        text:"Men have higher ratings for their leadership team compared to Men. African American/Black employees and the IT department have the most favorable ratings for their leadership team compared to employees of other ethnicities and Caucasian employees. ",

      },
      {
        id:"4",
        name:"Chris Kelly",
        job:"Fandor",
        img:"https://cdn.comparably.com/26339145/u/55425/55425_chris-kelly.jpg",
        text:"Chris Kelly and the Fandor leadership team are scored a  by 5 employees placing it in the Top 50% of companies sized 11-50 Employees on Comparably. The Leadership Score of 76/100 is based on 14 ratings; it combines employee feedback on their CEO (80/100), Manager (74/100), and Executive Team (78/100)",

      },
      {
        id:"5",
        name:"George Kurian",
        job:"NetApp Ceo",
        img:"https://cdn.comparably.com/24939082/u/25903/ceo_v2.jpg",
        text:"Men have higher ratings for their leadership team compared to Women. the Customer Support department and the Sales department have the most favorable ratings for their leadership team compared to Hispanic or Latino employees and employees who have been at the company Over 10 Years.",

      }
    ]
    // select items

     const img = document.querySelector(".kalu")
     const name = document.querySelector(".name")
     const job = document.querySelector(".deg")
     const info = document.querySelector(".para")


     const rightbtn = document.querySelector(".rightbtn")
     const leftbtn = document.querySelector(".leftbtn")
     const surprise = document.querySelector(".surprise")
     
     let avenger = 0;


     window.addEventListener("DOMContentLoaded",()=>{
      showPerson(avenger)
    })
    function showPerson(person){const item = reviews[person];
    img.src = item.img
    name.textContent = item.name
    job.textContent = item.job
    info.textContent=item.text   } 
    
    rightbtn.addEventListener("click",()=>{
      avenger++
      if (avenger>4) {
        avenger=0
      } 
      showPerson(avenger)
    })
    leftbtn.addEventListener("click",()=>{
      avenger--;
      if (avenger<0) {
        avenger=0
      } 
      showPerson(avenger)
    })

   
    surprise.addEventListener("click",()=>{
         avenger = Math.floor(Math.random()*3+1)
         console.log(avenger)
        showPerson(avenger)
    })

}
vanshi()




 function thirdproject(){
    let hambg = document.querySelector(".hambg")
     hambg.addEventListener("click",()=>{
      
      document.querySelector(".listhaiye").style.overflow="visible"

     })




 }

 thirdproject()





 function projectfour(){
    
  let openmodal= document.querySelector(".btnmodal")
  let slectmodal = document.querySelector(".divokok")
  let closemodal = document.querySelector(".x")

  openmodal.addEventListener("click",function (){
    slectmodal.classList.add("divnotok");
  })
  closemodal.addEventListener("click",function (){
    slectmodal.classList.remove("divnotok");
  })

 }
 projectfour()




 function projectfive(){
   
   let fplus = document.querySelector(".oneyo")
   let splus = document.querySelector(".twoyo")
   let tplus = document.querySelector(".threeyo")
   let fbox = document.querySelector(".firstboxchild")
   let sbox = document.querySelector(".secondboxchild")
   let tbox = document.querySelector(".thirdboxchild")
   

    fplus.addEventListener("click",()=>{
      fbox.classList.toggle("addevent")
    })
    splus.addEventListener("click",()=>{
      sbox.classList.toggle("addevent")
    })

    tplus.addEventListener("click",()=>{
      tbox.classList.toggle("addevent")
    })

 }

 projectfive()



function projectsix(){


  let All = document.querySelector(".all")
  let breakfastbtn = document.querySelector(".breakfastbtn")
  let lunchbtn = document.querySelector(".lunchbtn")
  let dinnerbtn = document.querySelector(".dinnerbtn")
  let shakesbtn = document.querySelector(".shakesbtn")
  let foodbox = document.querySelector(".foodbox")
  

  let lunch = document.querySelectorAll(".lunch")
  let breakfast = document.querySelectorAll(".breakfast")
  let dinner = document.querySelectorAll(".dinner")
  let shakes = document.querySelectorAll(".shakes")



  All.addEventListener("click",()=>{
    breakfast.forEach((e)=>{

      
      e.classList.remove('hide');
     
    })

    shakes.forEach((e)=>{

      
      e.classList.remove('hide');
     
    })


lunch.forEach((e)=>{

      
      e.classList.remove('hide');
     
    })

    dinner.forEach((e)=>{

      
      e.classList.remove('hide');
     
    })
  })

  breakfastbtn.addEventListener("click",()=>{


    lunch.forEach((e)=>{

      
      e.classList.add('hide');
     
    })
    dinner.forEach((e)=>{

      
      e.classList.add('hide');
     
    })
    shakes.forEach((e)=>{

      
      e.classList.add('hide');
     
    }) 
     breakfast.forEach((e)=>{

      
      e.classList.remove('hide');
     
    })
    
    
    console.log("clicked on breakfast")
  })
  lunchbtn.addEventListener("click",()=>{
    lunch.forEach((e)=>{

      
      e.classList.remove('hide');
     
    })

    breakfast.forEach((e)=>{

      
      e.classList.add('hide');
     
    })
    dinner.forEach((e)=>{

      
      e.classList.add('hide');
     
    })
    shakes.forEach((e)=>{

      
      e.classList.add('hide');
     
    })
    
    
    console.log("clicked on breakfast")
  })
  dinnerbtn.addEventListener("click",()=>{

    dinner.forEach((e)=>{

      
      e.classList.remove('hide');
     
    })
    lunch.forEach((e)=>{

      
      e.classList.add('hide');
     
    })
    breakfast.forEach((e)=>{

      
      e.classList.add('hide');
     
    })
    shakes.forEach((e)=>{

      
      e.classList.add('hide');
     
    })
    
    
    console.log("clicked on breakfast")
  })
  shakesbtn.addEventListener("click",()=>{
   
    shakes.forEach((e)=>{

      
      e.classList.remove('hide');
     
    })

    lunch.forEach((e)=>{

      
      e.classList.add('hide');
     
    })
    dinner.forEach((e)=>{

      
      e.classList.add('hide');
     
    })
    breakfast.forEach((e)=>{

      
      e.classList.add('hide');
     
    })
    
    
    console.log("clicked on breakfast")
  })

}

projectsix()




 


 
function projectseven(){
 


 let playbtn = document.querySelector(".playbtnspan");
 let pausebtn = document.querySelector(".pausebtnspan");
 let btn = document.querySelector(".videobtn");
 let video = document.querySelector(".videocontainer");
 
 playbtn.addEventListener("click",()=>{
video.play()
playbtn.classList.add('spanbtnadd')
pausebtn.classList.remove('spanbtnadd')
})
pausebtn.addEventListener("click",()=>{
  pausebtn.classList.add('spanbtnadd')
  playbtn.classList.remove('spanbtnadd')
  video.pause()
  })

playbtn.add
}


projectseven()






//     plus.forEach(btn => {
      
//       btn.addEventListener("click",()=>{
        
//         box.classList.add("addevent");
//         document.querySelector(".minusbtn").classList.add("annevent");
//         plus.classList.add("adnevent");
        
//       })
//       document.querySelector(".minusbtn").addEventListener("click",()=>{
        
//         box.classList.remove("addevent");
        
//         plus.classList.remove("adnevent");
//         document.querySelector(".minusbtn").classList.remove("addevent");
//       })
//     });
//  }
//  projectfive()


  // function projectfivepart() {
  //   let minus = document.querySelector(".minusbtn")


  //   document.querySelector(".plusbtn").addEventListener("click",()=>{
 
      
  //     document.querySelector(".minusbtn").classList.add("addevent");
      
    
  //   })
  // }
  // projectfivepart()


  function projectnine(){

    let radha=[

      {history:"History is an intellectual discipline practiced by historians who try to make sense of the past. Because history is about change, nothing was ever “always” a certain way. Non-historians often romanticize the past and speak of the “good old days” when they believe that things were generally better than at present."},
      {vision:"Vision is the process where your eyes and brain work together and use light reflecting off things around you to create the ability to see. It's one of the five main senses and a key contributor to how most people understand the world around them"},
      {goals:"The term goal refers to your specific aims or desired results. Goals are milestones created to help you achieve your dream. Conversely, vision is the ability to imagine and think of the future with insight. It also refers to the purpose that a person visualizes without knowing how to achieve it"}
    ]
    


     let history = document.querySelector('.history')
     let vision = document.querySelector('.vision')
     let  goals =document.querySelector('.goals')
     let para = document.querySelector('.paraslide')


history.addEventListener('click',()=>{
  console.log("button is running")
  console.log(radha[0].history)
   para.textContent=radha[0].history;
})
vision.addEventListener('click',()=>{
  para.textContent=radha[1].vision;
  
})
goals.addEventListener('click',()=>{
  para.textContent=radha[2].goals;
  
})


  }
  projectnine()


  function projectten(){
let giveway = document.querySelector(".giveway")

  let future = new Date(2024,8,25,11,30,0);
 

  let year = future.getFullYear();
  
  let hours = future.getHours();
  
  let minutes = future.getMinutes();
   

  let month = future.getMonth();
   let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
   ]

   month = months[month];
   
   let weekday= future.getDay();
   let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday"
   ]
   let date = future.getDate();
    weekday=weekdays[weekday];
    giveway.textContent=`Giveway ends on ${weekday},${date} ${month} ${year} ${hours}:${minutes}am`;

    
    
    
    
    const today = new Date().getTime();
    const t = future-today
    
    // 1s = 1000ms
    // 1m =  60s
    // 1hr = 60min
    // 1d = 24hr

    const oneday = 24*60*60*1000;
    const onehour = 60*60*1000;
    const oneminute = 60*1000;

    let days = Math.floor( t/oneday);
    
    document.querySelector(".days").textContent=`${days}  Days`
    let newhours = Math.floor((t%oneday)/onehour)
    document.querySelector(".hours").textContent=`${newhours}  Hours`
    

    let newminute = Math.floor((t%onehour)/oneminute);
    document.querySelector(".mins").textContent=`${newminute}  Minutes`
    
    let newsec = Math.floor((t%oneminute)/1000);
    document.querySelector(".secs").textContent=`${newsec}  seconds`
    
     
  }

  let countdown = setInterval(
    projectten
  , 1000);
  projectten()


  function projecteleven(){


    let text = [`Coronavirus- One of the horrific names humankind will remember. It is one of the worst pandemics, the world has witnessed which seems like an invisible army which emerged from China’s Wuhan city. Just like other parts of the world, India and the world’s second most populated country is also in the state of lockdown. Despite the fact that we can’t move out of the houses, there are various positive aspects of the lockdown like we get time to spend time with family`,
    `With the advent of information and technology, the world has turned a global village. The easy assess to study material on the internet has provided a new way of learning to students expanding their reach outside the walls of a classroom. Benefits like easy access, comprehensive material, video content, pictures and graphs for better understanding, etc. are making these formats popular. However, the booming benefits of Online learning are taking away the traditional ways of education, majorly, classroom learning.`,
    `These are the connecting words that help the reader grasp a better idea of what you are trying to convey. They are used to introduce new information in place and also connect different ideas together. Auxiliary verbs include “shall,” “will,” “can,” “may,” “is,” “are,” “was,” and others which are used with main verbs. These auxiliary verbs help drive force in the sentence`,
    `In writing a structure for an essay or article, you need to be consistent with the flow of your ideas. In order to avoid confusion, it is recommended to use conjunctions and connective devices. These help the reader understand your main idea and make it easy for them to follow along with your train of thoughts in a logical manner.`,
    `The persuasive paragraph tries to persuade the reader to feel or think a certain way about something. This type of paragraph is usually written in first person and uses reasoning and facts as evidence for its point.`
   

    ]

    let input = document.querySelector(".inpt")
    let generate = document.querySelector(".generatebtn")
    let amount = document.querySelector(".amount")
    let result = document.querySelector(".pararesult")

    input.addEventListener('submit',(e)=>{
    e.preventDefault();
    const value = parseInt( amount.value);
    let random = Math.floor(Math.random()) *text.length

    if(isNaN(value) || value < 0 || value > 9 ){
      result.innerHTML = `<p class="pararesult">${text[random]}</p>`;
    }
    else{
      let temptext = text.slice(0, value);
      temptext = temptext
              .map(function(item){
                return`<p class="pararesult">${item}</p>`;

              })
              .join("");
              result.innerHTML=temptext;
    }

    })



  };
  projecteleven();

   function projecttwelve(){
    
    let next = document.querySelector(".nextbtn")
    let pri = document.querySelector(".previousbtn")
     let slides = document.querySelectorAll(".slide")
   

   slides.forEach(function (slide, index) {
    slide.style.left=`${index*100}%`; });
    let count= 0; 
    next.addEventListener("click",()=>{
      count++;
      lalasher();
    })
    pri.addEventListener("click",()=>{
      count--;
      lalasher();
    })
   

    function lalasher(){
      if(count<slides.length-1 ){
        next.style.display="block";
      }
      else{next.style.display="none"}


      if (count>0) {
        pri.style.display="block";
      } else {
        pri.style.display="none";
      }
      slides.forEach(function(slide){
      slide.style.transform=`translateX(-${count*200}%)`
      })

      }
      pri.style.display="none";
      
    }
    
   

   
   projecttwelve();

   function projectlast(){
  
  
    // ****SELECT ITEMS***//

    let alert = document.querySelector('.alert');
    let form = document.querySelector('.grocery-form');
    let grocery=document.getElementById('grocery');
    let submitbtn = document.querySelector('.submit-btn');
    let container = document.querySelector('.grocery-container');
    let list = document.querySelector('.grocery-list')
    let clearbtn = document.querySelector('.clear-btn');


  //  edit option 
   let editElement;
   let editFLag = false;
   let editID = "";
  // Event LIsteners
form.addEventListener('submit',addItem)
  // FUNCTIONs
function addItem(e){
  e.preventDefault();
  let value = grocery.value;
  
  const id = new Date().getTime().toString();

  if(value && !editFLag){
    
    let element= document.createElement("article");
    
   element.classList.add('grocery-item')

   let attr = document.createAttribute("data-id");
   attr.value = id;
   element.setAttributeNode(attr);
   element.innerHTML=` <p class="title">${value}</p>
   <div class="btn-container">
     <button type="button" class="edit-btn"><img src="addlist.svg" alt=""></button>
     <button type="button" class="dlt-btn"><img  src="trash.svg" alt=""></button>
   </div>`;
   

   list.appendChild(element);
   displayalert("item added","lala")


  } else if(value && editFLag){
    
     
  }else{
    displayalert("please enter value","add")
  }

}




clearbtn.addEventListener('click',()=>{
  const items = document.querySelectorAll(".grocery-item")
 if (items.length>0){
  

 items.forEach(item => {
  list.removeChild(item);
  
 });
  
 }

})
 
function displayalert(text,action){
  alert.textContent=text;
  alert.classList.add(`alert${action}`)
  
  setTimeout(function ()  {
    alert.textContent="";
    alert.classList.remove(`alert${action}`)
  }, 1000);


}



  // local storage

  // setup items

   }

   projectlast()