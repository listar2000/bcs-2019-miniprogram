//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    bcs_video: "https://r1---sn-25ge7nl6.googlevideo.com/videoplayback?c=WEB&mime=video%2Fmp4&txp=2211222&itag=18&pl=24&mt=1552270308&mv=u&ei=3MSFXMrIOpDZVJqrlJAD&ms=au%2Conr&requiressl=yes&gir=yes&ratebypass=yes&clen=8958225&mn=sn-25ge7nl6%2Csn-4g5e6nze&source=youtube&fvip=5&id=o-AOa5KYB5br19UjfOxhIF7JqFm9cd21nVfp7AtBz64Aj1&mm=31%2C26&ip=212.47.239.90&key=yt6&lmt=1551301226233361&dur=112.500&expire=1552292157&signature=82A4E6A3B795381C53135850588759DFF06FA4.DA3C471916F06BCB0A26EAE63B55BD67D713C18E&sparams=clen%2Cdur%2Cei%2Cgir%2Cid%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&ipbits=0"
  }
})