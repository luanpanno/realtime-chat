import express from 'express';
import cors from 'cors';

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`),
);
