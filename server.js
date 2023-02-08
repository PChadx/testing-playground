const captcha = require('./createCaptcha');

console.log(`This is your random number: ${captcha.createCaptcha(12345)}`);
