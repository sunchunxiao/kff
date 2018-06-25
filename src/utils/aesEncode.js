/**
 * Created by zhengchangshun on 2018/4/27.
 */
var CryptoJS = require('crypto-js');
//有val
//export function encrypt(plaintText){
//var key = CryptoJS.enc.Utf8.parse("0987654321qazxcv");
//var iv  = CryptoJS.enc.Utf8.parse('0102030405060708');
//var srcs = CryptoJS.enc.Utf8.parse(plaintText);
//var encrypted = CryptoJS.AES.encrypt(srcs, key, {
//  iv: iv,
//  mode:CryptoJS.mode.CBC,
//  padding: CryptoJS.pad.Pkcs7,
//});
//return encrypted.toString();
//}

export function encrypt(word){  
         var key = CryptoJS.enc.Utf8.parse("abcdefgabcdefg12");   
  
         var srcs = CryptoJS.enc.Utf8.parse(word);  
         var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});  
         return encrypted.toString();  
    }  
