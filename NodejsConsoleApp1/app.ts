(function () {
    var ffi = require('ffi');
    var util = require('util');
    
    if (process.platform === 'win32') {
        var kernel32 = ffi.Library('Kernel32', {
            'Sleep': ['double']
        });
        kernel32.Sleep(1000);

        console.log('sleeped.'); 
    }
})();

