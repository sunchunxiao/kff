/**
 * Created by zhengchangshun on 2018/4/27.
 */
let CryptoJS = require('crypto-js')

function encryption(plaintText) {
  //明文
  var plaintText = plaintText;
  // CBC加密
  var options = {
  iv: CryptoJS.enc.Utf8.parse("0102030405060708"),
   mode: CryptoJS.mode.CBC,
   padding: CryptoJS.pad.Pkcs7
  }

  //秘钥
  var key = CryptoJS.enc.Utf8.parse("0987654321qazxcv");
  var encryptedData = CryptoJS.AES.encrypt(plaintText, key, options);
  var encryptedBase64Str = encryptedData.toString();
  return encryptedBase64Str;
}
