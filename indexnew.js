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
    
    window.addEventListener('load',()=>{
        playbtn.classList.add('spanbtnadd')
    })
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

 
// **Select items here**

const project1 = document.querySelector(".project1")
const project2 = document.querySelector(".project2")
const project3 = document.querySelector(".project3")
const project4 = document.querySelector(".project4")
const project5 = document.querySelector(".project5")
const project6 = document.querySelector(".project6")
const project7 = document.querySelector(".project7")
const project8 = document.querySelector(".project8")
const project9 = document.querySelector(".project9")
const project10 = document.querySelector(".project10")
const project11 = document.querySelector(".project11")
const project12 = document.querySelector(".project12")
const project13 = document.querySelector(".project13")
const project14 = document.querySelector(".project14")




const project1box = document.querySelector(".project1box")
const project2box = document.querySelector(".project2box")
const project3box = document.querySelector(".project3box")
const project4box = document.querySelector(".project4box")
const project5box = document.querySelector(".project5box")
const project6box = document.querySelector(".project6box")
const project7box = document.querySelector(".project7box")
const project8box = document.querySelector(".project8box")
const project9box = document.querySelector(".project9box")
const project10box = document.querySelector(".project10box")
const project11box = document.querySelector(".project11box")
const project12box = document.querySelector(".project12box")
const project13box = document.querySelector(".project13box")
const project14box = document.querySelector(".project14box")

const cross = document.querySelector(".photocross")
const cross1 = document.querySelector(".photocross1")
const cross2 = document.querySelector(".photocross2")
const cross3 = document.querySelector(".photocross3")
const cross4 = document.querySelector(".photocross4")
const cross5 = document.querySelector(".photocross5")
const cross6 = document.querySelector(".photocross6")
const cross7 = document.querySelector(".photocross7")
const cross8 = document.querySelector(".photocross8")
const cross9 = document.querySelector(".photocross9")
const cross10 = document.querySelector(".photocross10")
const cross11 = document.querySelector(".photocross11")
const cross12 = document.querySelector(".photocross12")
const cross13 = document.querySelector(".photocross13")
const cross14 = document.querySelector(".photocross14")

// ***Event Listeners **

project1.addEventListener("click",()=>{
    console.log("You opened project 1")
    project1box.classList.add('showbox')
})
cross.addEventListener('click',()=>{
    project1box.classList.remove('showbox')
    
})
// next
project2.addEventListener("click",()=>{
    console.log("You opened project 2")
    project2box.classList.add('showbox')
})
cross1.addEventListener('click',()=>{
    project2box.classList.remove('showbox')
})
// next
project3.addEventListener("click",()=>{
    console.log("You opened project 3")
    project3box.classList.add('showbox')
})
cross2.addEventListener('click',()=>{
    project3box.classList.remove('showbox')
})
// next
project4.addEventListener("click",()=>{

    project4box.classList.add('showbox')
})
cross3.addEventListener('click',()=>{
    project4box.classList.remove('showbox')
})
// next
project5.addEventListener("click",()=>{
  
    project5box.classList.add('showbox')
})
cross4.addEventListener('click',()=>{
    project5box.classList.remove('showbox')
})
// next
project6.addEventListener("click",()=>{
    
    project6box.classList.add('showbox')
})
cross5.addEventListener('click',()=>{
    project6box.classList.remove('showbox')
})
// next
project7.addEventListener("click",()=>{
    
    project7box.classList.add('showbox')
})
cross6.addEventListener('click',()=>{
    project7box.classList.remove('showbox')
})
// next
project8.addEventListener("click",()=>{
    
    project8box.classList.add('showbox')
})
cross7.addEventListener('click',()=>{
    project8box.classList.remove('showbox')
})
// next
project9.addEventListener("click",()=>{
    
    project9box.classList.add('showbox')
})
cross8.addEventListener('click',()=>{
    project9box.classList.remove('showbox')
})
// next
project10.addEventListener("click",()=>{
    
    project10box.classList.add('showbox')
})
cross9.addEventListener('click',()=>{
    project10box.classList.remove('showbox')
})
// next
project11.addEventListener("click",()=>{
    
    project11box.classList.add('showbox')
})
cross10.addEventListener('click',()=>{
    project11box.classList.remove('showbox')
})
// next
project12.addEventListener("click",()=>{
    
    project12box.classList.add('showbox')
})
cross11.addEventListener('click',()=>{
    project12box.classList.remove('showbox')
})
// next
project13.addEventListener("click",()=>{
    
    project13box.classList.add('showbox')
})
cross12.addEventListener('click',()=>{
    project13box.classList.remove('showbox')
})
// next
project14.addEventListener("click",()=>{
    
    project14box.classList.add('showbox')
})
cross13.addEventListener('click',()=>{
    project14box.classList.remove('showbox')
})
// next

