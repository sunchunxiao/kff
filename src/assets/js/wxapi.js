import wx from 'weixin-js-sdk'
const wxApi = {
  //判断是不是微信浏览器
  isweixin(){
    const ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=='MicroMessenger'){
        return true
    }else {
      this.$router.push({path:'/wxkj/isnotWechat'})
    }
  },
  /**
   * [wxRegister 微信Api初始化]
   * @param  {Function} callback [ready回调函数]
   */
  wxRegister (callback) {
    $.ajax({
      type:"get",
      url:"http://192.168.10.151:803/kff/weiXinShare/getJsApiTicket",
      async:true,
      data:{
        link:'http://res.wx.qq.com/open/js/jweixin-1.2.0.js'
      },
      success(data){
        console.log(data)
        if(data.code==0){
          var respanse = data.data;
          wx.config({
            debug: false, // 开启调试模式
            appId: respanse.appId, // 必填，公众号的唯一标识
            timestamp: respanse.timestamp, // 必填，生成签名的时间戳
            nonceStr: respanse.noncestr, // 必填，生成签名的随机串
            signature: respanse.signature, // 必填，签名，见附录1
            jsApiList: [
              'onMenuShareAppMessage', // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
              'onMenuShareTimeline' // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          })
        }
      }
    });
    wx.ready((res) => {
      // 如果需要定制ready回调方法
      if (callback) {
        callback()
      }
    })
  }
}
export default wxApi
