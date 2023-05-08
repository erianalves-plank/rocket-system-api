import 'reflect-metadata';
import express from 'express';
import AppDataSource from '../ormconfig';
import bodyParser from 'body-parser';
import { router } from './routes/router';

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

const app = express();

app.use(bodyParser.json());

app.use(router);


app.get('/', (req, res) => {
    return res.json({'message': 'Hello Yellow, welcome to the root page!!'});
})

app.listen(8080, () => console.log('Running.'));

export {
    app
}; 