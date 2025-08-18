// No topo do arquivo, adicione esta importação
import { join } from 'path';
import { DataSourceOptions } from "typeorm";

const producao: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'neto',
    password: '123456',
    database: 'mindfit_db',
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: false
}

const postgres: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'neto',
    password: '123456',
    database: 'mindfit_db',
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true
}

const sqlite: DataSourceOptions = {
    type: 'sqlite',
    database: './.db/mindfitdb.db',
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true
}

export const config: DataSourceOptions = sqlite;