import { sql } from './db.js'

sql `
    CREATE TABLE VIDEOS (
        title TEXT,
        description TEXT,
        duration INTEGER
    );
`.then(() => {
    console.log('Tabela Criada');
})