let btn= document.querySelector("button");
let content= document.querySelector(".content");
function speak(text) {
    let text_speak= new SpeechSynthesisUtterance(text);                        
    text_speak.pitch=1;                                                      
    text_speak.rate=1;                                                    
    text_speak.volume=1;     
    text_speak.lang="en-GB";                                     
    window.speechSynthesis.speak(text_speak);
}                                                                            

let speechrecognition= window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechrecognition();
recognition.onresult= (event)=>{
     let currentIndex = event.resultIndex;
     let transcript= event.results[currentIndex][0].transcript;
     content.innerText=transcript;
     takeCommand(transcript.toLowerCase());
}
btn.addEventListener("click",()=>{
    recognition.start();
})

function takeCommand(message){
        if(message.includes("hello") || message.includes("hi") || message.includes("hey") || message.includes("hello jarvis") || message.includes("jarvis")){
            speak("hello sir,what can i help you?");
        }
        else if(message.includes("who are you")){
            speak("I am Jarvis,created by Muhammad Hashim");
        }
        else if(message.includes("who is hashim's best friend")||message.includes("hashim best friend") ||message.includes("Hashim best friend")){
            speak("Bilal is Hashim's Best Friend");
        }
        else if(message.includes("how are you")){
            speak("I am fine,what about you");
        }
        else if(message.includes("who created you")){
            speak("I am created by Muhammad Hashim");
        }
        else if(message.includes("what is your name")){
            speak("I am Jarvis,created by Muhammad Hashim");
        }
        else if(message.includes("open youtube")){
            speak("opening youtube");
            window.open("https://www.youtube.com/");
        }
        else if(message.includes("open google")){
            speak("opening google");
            window.open("https://www.google.com/");
        }
        else if(message.includes("open apna college")|| message.includes("apna college")){
            speak("opening apna college youtube channel");
            window.open("https://www.youtube.com/@ApnaCollegeOfficial");
        }
        else if(message.includes("open facebook")){
            speak("opening facebook");
            window.open("https://www.facebook.com/");
        }
        else if(message.includes("open instagram")){
            speak("opening instagram");
            window.open("https://www.instagram.com/");
        }
        else if(message.includes("open whatsapp")){
            speak("opening whatsapp");
            window.open("https://www.whatsapp.com/");
        }
        else if(message.includes("open calculator")){
            speak("opening calculator");
            window.open("calculator://");
        }
        else if(message.includes("change background color")|| message.includes("change background colour")){
            speak("changing background colour");
            document.querySelector("body").style.backgroundColor="red";
            btn.style.backgroundColor= "#0d6963";
            document.querySelector(".one").style.color="rgb(10 32 100)";
        }
        else if(message.includes("find on youtube")|| message.includes("youtube channel") ){
            speak(`this is what i found on Youtube regarding ${message}`);
            window.open(`https://www.youtube.com/results?search_query=${message}`);
        }
        else{
            speak(`this is what i found on internet regarding ${message}`);
            window.open(`https://www.google.com/search?q=${message}`);
        }
}
