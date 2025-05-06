// redirects from http to https
if (location.protocol !== 'https:'){
  console.log("Redirecting to https...");
  location.replace('https://' + location.href.split('//')[1]);
};




if (
  
 /Mobile/i.test(navigator.userAgent) ||
 /Android/i.test(navigator.userAgent) || 
 /Tablet/i.test(navigator.userAgent) ||
 /IEMobile/i.test(navigator.userAgent) ||
 /IEMobile/i.test(navigator.userAgent) ||
 /iPad/i.test(navigator.userAgent) ||
 /iPod/i.test(navigator.userAgent) ||
 /iPhone/i.test(navigator.userAgent)){
  console.log("Redirecting to mobile version...");
  location.replace('https://aqurik.fun/mobile');
};
