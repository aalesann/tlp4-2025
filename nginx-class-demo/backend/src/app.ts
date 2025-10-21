import express from 'express';
const app = express();
const PORT = 8080;

app.get('/api', (req, res) => {
  res.json({ message: 'Hola desde el backend con Express!' });
});

app.listen(PORT, () => console.log(`🚀 Backend escuchando en puerto ${PORT}`));
