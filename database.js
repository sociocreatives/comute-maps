const sqlite = require('sqlite');

async function setup() {
    const db = await sqlite.open('./comute.sqite');
    await db.migrate({force: 'last'});
}

setup();  