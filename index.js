// redirects from http to https
if (location.protocol !== 'https:'){
  console.log("Redirecting to https...");
  location.href('https://' + location.href.split('//')[1]);
};






if (navigator.userAgent.match(/android|iphone|blackberry/)){
  console.log("Redirecting to mobile version...");
  location.href('https://aqurik.fun/mobile');
};
