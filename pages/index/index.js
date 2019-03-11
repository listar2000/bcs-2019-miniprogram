//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    video_src: app.globalData.bcs_video
  },
  //事件处理函数
  onLoad: function() {
    console.log(this.video_src)
  },

  onShow: function() {
    this.setData({
      video_src: app.globalData.bcs_video
    })
  }
})
