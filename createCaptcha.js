const crypto = require('crypto');

const createCaptcha = (userId) => {
    startTime = Date.now();
    const seed = userId.toString();
    
    const captchaValue = crypto.createHash('sha256').update(seed).digest('hex').substring(0, 6);
  
    console.log(`All done! It took me ${Date.now() - startTime} ms`);
    return captchaValue;
  };
  
  module.exports = { createCaptcha };