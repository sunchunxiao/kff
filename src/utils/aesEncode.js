/**
 * Created by zhengchangshun on 2018/4/27.
 */
var aesjs = require('aes-js');
var CryptoJS = require('crypto-js');

export function encrypt(plaintText){
  var key = CryptoJS.enc.Utf8.parse("0987654321qazxcv");
  var iv  = CryptoJS.enc.Utf8.parse('0102030405060708');
  var srcs = CryptoJS.enc.Utf8.parse(plaintText);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv,mode:CryptoJS.mode.CBC});
  return encrypted.toString();
}
