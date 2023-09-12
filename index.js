const OpenAI=require('openai');
const express=require('express');

const app=express();
const bodyParser=require('body-parser')
const cors=require('cors')

const port =3080;

const openai = new OpenAI({
   apiKey:"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",
 });



app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
 
app.post('/',async(req,res)=>{
    const {message}=req.body;
    console.log(message)
    const completion = await openai.completions.create({
      model: "text-davinci-003",
      prompt: ` ${message}`,
      max_tokens:100,
      temperature: 0.5,
      });
      
      console.log(completion.choices[0].text);
      res.json({
        message:completion.choices[0].text,
      })
})




app.listen(port,()=>{
  
    console.log(`Example app listening at: ${port}`);

})
