import wx from 'weixin-js-sdk'

// const ua = window.navigator.userAgent.toLowerCase()
// if (ua.indexOf('micromessenger') < 0) {return false}

let url = window.location.href
// console.log(url)
var a = url.split("/project")[1].split("/")[1].split("?")[0]
var b = url.split("/project")[1].split("/")[1].split("?")[1]
// console.log("http://localhost:5000/project/"+a+"?"+b+"",)
console.log("https://m.qufen.top/wap/project/"+a+"?"+b+"")
$.ajax({
  // url:"http://192.168.10.151:803/kff/wXShare/sign",
  url:"https://m.qufen.top/wap/kff/wXShare/sign",
  data:{
    // url:"http://localhost:5000/project/"+a+"?"+b+"",
    url:"https://m.qufen.top/wap/project/"+a+"?"+b+""
  },
  dataType:"json",
  success(data){
    console.log(data)
    wx.config({
          debug: false, // 开启调试模式,开发时可以开启
          appId: "wxd207589d26688a4a",   // 必填，公众号的唯一标识   由接口返回
          timestamp: data.timestamp, // 必填，生成签名的时间戳 由接口返回
          nonceStr: data.nonceStr,    // 必填，生成签名的随机串 由接口返回
          signature: data.signature,   // 必填，签名 由接口返回
          jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 此处填你所用到的方法
        });
  }
})
wx.ready(function () {
  wx.onMenuShareAppMessage({ // 分享给朋友
    title: "文章分享",       // 分享标题
    desc: "求子区块链一定要区分",   // 分享描述
    link: url,       // 分享链接 默认以当前链接
    imgUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1763222384,388956083&fm=58',// 分享图标
    // 用户确认分享后执行的回调函数
    success: function () {
      var params = new URLSearchParams();
      params.append('token', window.localStorage.getItem('token'));
      params.append('type', 'share');
      alert("分享成功")
    },
    // 用户取消分享后执行的回调函数
    cancel: function () {
      alert('分享到朋友取消');
    }
  });

})
