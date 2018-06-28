import wx from 'weixin-js-sdk'

// const ua = window.navigator.userAgent.toLowerCase()
// if (ua.indexOf('micromessenger') < 0) {return false}

let url = window.location.href.split('#')[0]
console.log(url)
// var a = url.split("/project")[1].split("/")[1].split("?")[0]
// var b = url.split("/project")[1].split("/")[1].split("?")[1]
// console.log("http://localhost:5000/project/"+a+"?"+b+"",)
// console.log("https://m.qufen.top/wap/project/"+a+"?"+b+"")
$.ajax({
  // url:"http://192.168.10.151:803/kff/wXShare/sign",
  url:"https://m.qufen.top/wap/kff/wXShare/sign",
  data:{
    // url:"http://localhost:5000/project/"+a+"?"+b+"",
    url:url
  },
  dataType:"json",
  success(data){
    console.log(data)
    wx.config({
          debug: false,
          appId: "wxd207589d26688a4a",   // 必填，公众号的唯一标识   由接口返回
          timestamp: data.timestamp, // 必填，生成签名的时间戳 由接口返回
          nonceStr: data.nonceStr,    // 必填，生成签名的随机串 由接口返回
          signature: data.signature,   // 必填，签名 由接口返回
          jsApiList: ['checkJsApi','onMenuShareAppMessage', 'onMenuShareTimeline'] // 此处填你所用到的方法
        });
  }
})
wx.ready(function () {

  // 1 判断当前版本是否支持指定 JS 接口，支持批量判断
  wx.checkJsApi({
    jsApiList: [
      'checkJsApi',
      'openLocation',
      'getLocation',
      'onMenuShareAppMessage',
      'onMenuShareTimeline',
    ],
    success: function (res) {
      alert(JSON.stringify(res));
    }
  });
  let url = window.location.href.split('#')[0]
  console.log(url)
  var title = '表头';
  var desc = '线下商场与线上商城，同步更新，同享优惠。现在注册，立享150元优惠券，3月更多活动，精彩不断。';
  var imgUrl = 'http://p3.pstatp.com/large/pgc-image/152887919766950e17bb4bc'
  wx.onMenuShareAppMessage({ // 分享给朋友
    title: title,       // 分享标题
    desc: desc,   // 分享描述
    link: window.location.href.split('#')[0],       // 分享链接 默认以当前链接
    imgUrl: imgUrl,// 分享图标
    // 用户确认分享后执行的回调函数
    success: function () {
      // var params = new URLSearchParams();
      // params.append('token', window.localStorage.getItem('token'));
      // params.append('type', 'share');
      alert("分享成功")
    },
    // 用户取消分享后执行的回调函数
    cancel: function () {
      alert('分享到朋友取消');
    },
    fail: function (res) {
      alert('失败');
    }
  });

  wx.onMenuShareTimeline({
    title: title,
    link:  window.location.href.split('#')[0],
    imgUrl: imgUrl,
    trigger: function (res) {
      // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
    },
    success: function (res) {
    },
    cancel: function (res) {
    },
    fail: function (res) {
    }
  });
  wx.error(function(res){
    alert.log("error")
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
  });

})
