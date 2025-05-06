// redirects from http to https
if (location.protocol !== 'https:'){
  console.log("Redirecting to https...");
  location.replace('https://' + location.href.split('//')[1]);
};

if (navigator.userAgentData.mobile){
  console.log("Redirecting to mobile version...")
  location.replace('https://aqurik.fun/mobile');
}
