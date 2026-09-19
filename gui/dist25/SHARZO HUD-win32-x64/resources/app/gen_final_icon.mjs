import pngToIco from 'png-to-ico';
import fs from 'fs';

const input = 'f:/ANIGRAVITY/SHARZO/icon.png';
const output = 'f:/ANIGRAVITY/SHARZO/gui/icon.ico';

async function run() {
  try {
    const buf = await pngToIco(input);
    fs.writeFileSync(output, buf);
    console.log('Icon written to ' + output);
  } catch (err) {
    console.error('FAILED:', err);
    process.exit(1);
  }
}
run();
