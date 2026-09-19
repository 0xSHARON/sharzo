const pngToIco = require('png-to-ico');
const fs = require('fs');
const path = require('path');

const input = 'f:/ANIGRAVITY/SHARZO/logo.png';
const output = 'f:/ANIGRAVITY/SHARZO/gui/icon.ico';

async function run() {
  try {
    console.log('Starting icon generation...');
    const buf = await pngToIco(input);
    fs.writeFileSync(output, buf);
    console.log('Icon generated successfully at ' + output);
  } catch (err) {
    console.error('GEN_ERROR:', err.message);
    process.exit(1);
  }
}

run();
