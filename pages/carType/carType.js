//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    imagesrc01: '/../images/car/showcar/01.jpg',//图片链接  
    imagesrc02: '/../images/car/showcar/02.jpg',//图片链接  
    imagesrc03: '/../images/car/showcar/03.jpg',
    imagesrc04: '/../images/car/showcar/04.jpg',//图片链接  
    imagesrc05: '/../images/car/showcar/05.jpg',//图片链接  
    imagesrc06: '/../images/car/showcar/06.jpg',

    imagewidth: 100,//缩放后的宽  
    imageheight: 100,//缩放后的高 
  },
  imageLoad: function (e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
