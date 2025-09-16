let btn = document.querySelector("#btn");
let content= document.querySelector("#content");
let voice = document.querySelector("#voice")



function speak(text) {
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.pitch=2;
    text_speak.volume=1;
    text_speak.lang="en-GB";
    window.speechSynthesis.speak(text_speak);


    
}
function wishme() {
    let day= new Date();
     let hours= day.getHours();
     console.log(hours);
     if(hours>=0 && hours<12 ){
        speak("good morning dude ");
     }
     else if(hours>=12 && hours<16 ){
        speak("good afternoon  dude");

     }else{
        speak("good eveninng  dude ");
     }
     
    
}
 window.addEventListener('load',()=>{
     wishme()
 })
let SpeechRecognition= window.SpeechRecognition||window.webkitspeechRecognition;
let recognition=  new SpeechRecognition();
recognition.onresult= (event)=>{
    let currentIndex= event.resultIndex;
     let transcript= event.results[currentIndex][0].transcript;
     content.innerText= transcript
     console.log("event");
     
    takeCommand(transcript.toLowerCase());
    

};
btn.addEventListener("click",()=>{
    

    recognition.start();
    content.innerText="listening...";
    btn.Style.display="none";
    voice.style.display="block";

    
    
});
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")|| message.includes("hey")){
        speak("hello ,  i am shifra how can i help you");
    }
    else if(message.includes("who are you")){
        speak("hello I am shifra your  virtual assistant ,cretaed by Khushi pandey ");
    }
    else if(message.includes("what language you speak")){
        speak(" I speak english language")


    }
    else if(message.includes("who is your creator")){
        speak("i am created by khushi pandey")
    }
  
    



    else if(message.includes("open youtube")){
        speak("opening youtube");
        window.open("https://www.youtube.com/");
    }
    else if(message.includes("open Google")){
        speak("opening google...")
        window.open("https://www.google.com/")


    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/")
        
        
    }
     else if(message.includes("open whatshapp")){
        speak("opening whatshapp...")
        window.open("whatshapp://")
     }
     else if(message.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
     }
      else if(message.includes("open gallery")){
        speak("opening gallery...")
        window.open("gallery://")
      }
      else if(message.includes("time")){
        let time= new Date().toLocaleString(undefined,{hour: "numeric",minute:"numeric"})
        speak(time)


      }
       else if(message.includes("date")){
        let time= new Date().toLocaleString(undefined,{day: "numeric",month:"short"})
        speak(date)
       }
       else if(message.includes("what language you speak "))
        speak("I usually speak in english")
    
    else if(message.includes("who created you and by using which technology"))
        speak("my creater is khushi pandey and the technology used to create me is HTML,CSS,JAVASCRIPT")









            
        
    

    
   else {
        speak(`this is what i found in internet about ${message.replace ("shifra", "")}`)
       
        window.open(`https://www.google.com/search?q=${message.replace("shifra"," ")}`)
    }
}




