import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user.model';

export const sequelize = new Sequelize({
    host: 'db',
    username: 'test',
    password: 'test123',
    database: 'testDB',
    dialect: 'postgres',
    models: [__dirname + '/models'], // or [Player, Team],
});

sequelize.addModels([User]);