
import {config} from "dotenv";
import OpenAI from 'openai';

config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});




console.log("Ask any question");

console.log("Asking Question");
  

let answer = askQuestion("what is google");
console.log(answer);


console.log("Thinking about your question");

findAnswer(answer);


  function askQuestion(question){
     // returns a promise
        let pr = openai.chat.completions.create({
            messages: [{ role: 'user', content: question }],
            model: 'gpt-3.5-turbo',
        })

       return pr
  }

  function findAnswer(promise){
    
    promise.then((data)=>{
        console.log("Haa! Here you go,there is my answer");
        console.log(data.choices[0].message.content);
      })
      .catch((err) =>{
        console.log("Oops Something went wrong");
        console.log(err);
      })
  }

