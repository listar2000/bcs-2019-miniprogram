// pages/course/course.js
Page({

  /**
   * Page initial data
   */
  data: {
    isLoaded: true,
    item: null,
    image_url: "http://static.nipic.com/images/recharge.png"
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.showLoading({
      title: 'loading courses',
    });
    var core = this;
    wx.request({
      url: 'http://127.0.0.1:3000/bcs_api/speakers/51.json',
      success(res) {
        console.log(res);
        core.setData({item: res.data.speaker});
      },
      complete(res) {
        wx.hideLoading();
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    this.setData({isLoaded: false})
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})