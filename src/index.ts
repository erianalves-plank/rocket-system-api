import 'reflect-metadata';
import express from 'express';
import AppDataSource from '../ormconfig';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
dotenv.config()
import { rocketRouter } from '../routes/rocketRouter';
import { crewmanRouter } from '../routes/crewmanRouter';
import { crewRouter } from '../routes/crewRouter';
import { launchRouter } from '../routes/launchRoute';

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

const app = express();

app.use(bodyParser.json());

app.use('/rocket', rocketRouter);
app.use('/crewman', crewmanRouter);
app.use('/crew', crewRouter);
app.use('/launch', launchRouter);


app.get('/', (req, res) => {
    return res.send('Hello Yellow');
})

app.listen(80, () => console.log('Running.'));

export {
    app
};