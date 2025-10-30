const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('bien hecho, el servidor funciona correctamente');
})

app.get('/api/data',(req,res)=>{
    res.json({message: 'esta es una ruta de API que devuelve datos en formato JSON'});
})

app.listen(PORT, ()=>{
    console.log(`server esta corriendo en el puerto ${PORT}`)
})