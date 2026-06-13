const fs = require('fs');
const path = require('path');


const CERTS_NAMES = fs.readdirSync(path.join(__dirname, "../public/certificates")).filter(v => v.endsWith("webp")).map(v => ({
    name:'',
    sourceName:v.split(".", 1)[0]
}));



console.log(CERTS_NAMES);



