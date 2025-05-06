// TODO: FIX MOBILE CHECK

console.log("JS test");

// redirects from http to https
if (location.protocol !== 'https:'){
  console.log("Redirecting to https...");
  location.replace('https://' + location.href.split('//')[1]);
};

if (false){ // fix this
  console.log("Redirecting to mobile version...");
  location.replace('https://aqurik.fun/mobile');
};
