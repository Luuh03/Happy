import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// Rota = conjunto
// Recurso = usuario

// Metodos HTTP = GET, POST, PUT, DELETE
// Parametros

// GET = buscando informação
// POST = criando informação
// PUT = editando informação
// DELETE = deletando informação

// Query Params: http://localhost:3333/users?search=luan
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users

app.listen(3333);
//localhost:3333

// Driver nativo, query builder, ORM
// Object Relational Mapping

