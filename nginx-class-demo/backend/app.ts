import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
const app = express();
const PORT = 8080;


app.use(cors({
  origin: '*',
}));
app.use(morgan('dev'));



app.get('/api', (req, res) => {
  res.json({ message: 'Hola desde el backend con Express!' });
});

app.listen(PORT, () => console.log(`🚀 Backend escuchando en puerto ${PORT}`));
