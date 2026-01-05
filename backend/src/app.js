import express from 'express';
import cors from 'cors';
import morgan from 'morgan';


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Server Express funcționează!');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Serverul rulează pe portul ${PORT}`);
});
