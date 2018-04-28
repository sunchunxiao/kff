/**
 * Created by zhengchangshun on 2018/4/27.
 */
var aesjs = require('aes-js');

// function encryption(plaintText) {
//   //明文
//   var plaintText = plaintText;
//   // CBC加密
//   var options = {
//   iv: CryptoJS.enc.Utf8.parse("0102030405060708"),
//    mode: CryptoJS.mode.CBC,
//    padding: CryptoJS.pad.Pkcs7
//   }
//
//   //秘钥
//   var key = CryptoJS.enc.Utf8.parse("0987654321qazxcv");
//   var encryptedData = CryptoJS.AES.encrypt(plaintText, key, options);
//   var encryptedBase64Str = encryptedData.toString();
//   return encryptedBase64Str;
// }


//字符串转为16btytes
function stringToHex(str){
  var val="";
  for(var i = 0; i < str.length; i++){
    if(val == "")
      val = str.charCodeAt(i).toString(16);
    else
      val += "," + str.charCodeAt(i).toString(16);
  }
  return val;
}

export function ase128Encode(plaintText) {
  //   // An example 128-bit key
  var key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// // The initialization vector (must be 16 bytes)
  var iv = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

  // var key = '0987654321qazxcv'.split("");
  // var iv = stringToHex('0102030405060708').split(",");



// Convert text to bytes (text must be a multiple of 16 bytes)
  var text = stringToHex(plaintText);

  var textBytes = aesjs.utils.utf8.toBytes(text);

  var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
  var encryptedBytes = aesCbc.encrypt(textBytes);

// To print or store the binary data, you may convert it to hex
  var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
  return encryptedHex
}
