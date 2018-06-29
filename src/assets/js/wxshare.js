import wx from 'weixin-js-sdk'

// const ua = window.navigator.userAgent.toLowerCase()
// if (ua.indexOf('micromessenger') < 0) {return false}
export function wechatShare(shareData) {
  var defaultData = {
    title: "",
    content: "",
    link: "",
    logo: ""//分享出来的图片的

  }
  let data = { ...defaultData, ...shareData }
  alert(window.location.href)
  $.ajax({
    // url:"http://192.168.10.151:803/kff/wXShare/sign",
    url:"https://m.qufen.top/wap/kff/wXShare/sign",
    data:{
      // url:"http://localhost:5000/project/"+a+"?"+b+"",
      url:window.location.href
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
        console.log(JSON.stringify(res));
      }
    });
    // let url = window.location.href.split('&')[0]
    // var title = "区分"
    // var desc = '投资区块链一定更要区分';
    // var imgUrl = "https://pic.qufen.top/posts20180628204925934317"
    wx.onMenuShareAppMessage({ // 分享给朋友
      title:  data.title,       // 分享标题
      desc: data.content,   // 分享描述
      link: data.link,       // 分享链接 默认以当前链接
      imgUrl: data.logo,// 分享图标
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
      title: data.title,
      link:  data.link,
      imgUrl: data.logo,
      trigger: function (res) {
        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用
        // ajax的回包会还没有返回
      },
      success: function (res) {
      },
      cancel: function (res) {
      },
      fail: function (res) {
      }
    });
    wx.error(function(res){
      console.log("error")
      // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也
      // 可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    });

  })

}
