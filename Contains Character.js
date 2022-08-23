let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

// Alternative solution
//if (byteSequence.includes('x')) {
if (/x/.test(byteSequence)) {
  console.log('True');
} else {
  console.log('False');
}
