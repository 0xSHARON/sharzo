const fs = require('fs');
(async () => {
    try {
        const _pngToIco = require('png-to-ico');
        const pngToIco = typeof _pngToIco === 'function' ? _pngToIco : _pngToIco.default;
        const buf = await pngToIco('C:/Users/91808/Downloads/logo.png');
        fs.writeFileSync('f:/ANIGRAVITY/SHARZO/gui/icon.ico', buf);
        console.log('Successfully created icon.ico');
    } catch(err) {
        console.error('Error converting:', err);
    }
})();
