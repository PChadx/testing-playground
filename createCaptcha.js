//const crypto = require('crypto');
const Math = require('math');

const createCaptcha = (userId) => {
  startTime = Date.now();
  //const seed = userId.toString();
  
  //const captchaValue = crypto.createHash('sha256').update(seed).digest('hex').substring(0, 6);
  const captchaValue = Math.floor(Math.random() * (1000000 - 100000) + 100000).toString();

  console.log(`All done! It took me ${Date.now() - startTime} ms`);
  return captchaValue;
};

module.exports = { createCaptcha };