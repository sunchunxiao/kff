import wxapi from './wxapi.js'
export default {
  js: [wxapi],
  mounted () {
    this.wxRegister(this.wxRegCallback)
  },
  methods: {
    /**
     * [wxRegCallback 用于微信JS-SDK回调]
     */
    wxRegCallback () {
      this.wxShareTimeline()
    },
    /**
     * [wxShareTimeline 微信自定义分享到朋友圈]
     */
    wxShareTimeline () {
      let opstion = {
        title: '胡小呆&曹小萌的情侣博客', // 分享标题
        link: 'http://www.jzdlink.com',      // 分享链接
        imgUrl: 'http://www.jzdlink.com/wordpress/wp-content/themes/wordpress_thems/images/lib/logo.png',// 分享图标
        success() {
          alert('分享成功')
        },
        error() {
          alert('分享失败')
        }
      }
      // 将配置注入通用方法
      this.ShareTimeline(opstion)
    },
    wxShareAppMessage(){
      let opstion = {
        title: '2222', // 分享标题
        link: 'http://www.jzdlink.com',      // 分享链接
        imgUrl: 'http://www.jzdlink.com/wordpress/wp-content/themes/wordpress_thems/images/lib/logo.png',// 分享图标
        success: function () {
          alert('分享成功')
        },
        error: function () {
          alert('分享失败')
        }
      }
      // 将配置注入通用方法
      this.wxShareAppMessage(opstion)
    },
    isWxAuth () {
      // let localUid = localStorage.getItem('')
      let localToken = localStorage.getItem('token')
      if (!localToken) {
        let token = this.$route.query.token
        // let uid = this.$route.query.uid
        if (token) {
          localStorage.setItem('localToken', token)
          localStorage.setItem('localUid', uid)
        } else {
          // 将url编码后传给后端，解决微信过滤Vue hash模式 #被过滤的问题
          var u = encodeURIComponent(window.location.href)
          window.location.href = hostName + '/wxpl/oauth?forwardUrl=' + u
        }
      }
    },
  }
}
