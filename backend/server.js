import express from 'express';
import { configDotenv } from 'dotenv';

configDotenv()
const app = express()
app.use((req,res,next) => {
    console.log(req.path, req.method);
    
})


app.get('/', (req,res) => {
    res.json({msg: 'welcome to app'})
})


app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
})