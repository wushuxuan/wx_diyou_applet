//app.js
App({

  /*onLaunch 
  当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  生命周期函数--监听小程序初始化*/
  onLaunch: function() {
    //调用API从本地缓存中获取数据
   
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})
