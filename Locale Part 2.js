function extractRegion(locale) {
  return locale.split('_')[1].substring(0, 2);
}

console.log(extractRegion('en_US.UTF-8'));
console.log(extractRegion('en_GB.UTF-8'));
console.log(extractRegion('ko_KR.UTF-16'));
