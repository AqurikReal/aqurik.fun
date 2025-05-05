// redirects from http to https
if (location.protocol !== 'https:'){
  location.replace('https://' + location.href.split('//')[1]);
}
