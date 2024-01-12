var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tabs");
    }
    event.currentTarget.classList.add("active-links");
     document.getElementById(tabname).classList.add("active-tabs");


} 
 var sidemenu =document.getElementById("sidemenu");


 function openmenu(){
    sidemenu.style.right="0";

 }
 
 function closemenu(){
    sidemenu.style.right="-200px";
    
 }

 

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyQm0pBEDBg9SDG1FLPGu-du1npsz4eXUPl1mMHxRWq5U_vBCsDCXidYiuwh-FnMZeN/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")
  const spinner=document.getElementById("spinner")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "Successfully send your message "
        setTimeout(function(){
          msg.innerHTML=""
        },5000)
        form.reset()
      })
      spinner.innerHTML ="Loading Loading"
      setTimeout(function(){
        spinner.innerHTML=""
      },4000)
      .catch(error => console.error('Error!', error.message))
  })
