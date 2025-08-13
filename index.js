
var NoHttps = true; // http mode (Used for testing and local hosting)

// Redirects

// redirects from http to https
if (location.protocol !== 'https:'){
  if (!NoHttps){
    console.log("Redirecting to https...");
    location.replace('https://' + location.href.split('//')[1]);
  }
}

// redirects to mobile version
if (/Mobi|Android|iPhone|Tablet|iPad|iPod/i.test(navigator.userAgent)) {
  if (!NoHttps){
    console.log("Redirecting to mobile version...");
    window.location.href = 'https://aqurik.fun/mobile';
  }
}

// Redirects

