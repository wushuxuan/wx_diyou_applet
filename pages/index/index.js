//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},

    imagesrc01: '/../images/car/showcar/01.jpg',//图片链接  
    imagesrc02: '/../images/car/showcar/02.jpg',//图片链接  
    imagesrc03: '/../images/car/showcar/03.jpg',
    imagesrc04: '/../images/car/showcar/04.jpg',//图片链接  
    imagesrc05: '/../images/car/showcar/05.jpg',//图片链接  
    imagesrc06: '/../images/car/showcar/06.jpg',
    rentimagesrc01: '/../images/car/rentingcar/01.jpg',//图片链接  
    rentimagesrc02: '/../images/car/rentingcar/02.jpg',//图片链接  
    rentimagesrc03: '/../images/car/rentingcar/03.jpg',
    rentimagesrc04: '/../images/car/rentingcar/04.jpg',//图片链接  
    rentimagesrc05: '/../images/car/rentingcar/05.jpg',//图片链接  
    rentimagesrc06: '/../images/car/rentingcar/06.jpg',

      /*业务功能模块图片*/ 
    funimagesrc01: '/../images/navimages/维修.png',//图片链接  
    funimagesrc02: '/../images/navimages/查询.png',//图片链接  
    funimagesrc03: '/../images/navimages/汽车.png',
    funimagesrc04: '/../images/navimages/礼物.png',//图片链接  
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

  //顶部栏的转发
  onShareAppMessage: function () {
    return {
      title: '嘀友管车小程序',
      path: '/page/user?id=123'
    }
  },

  //下拉刷新
  onPullDownRefresh : function(){
    console.log('正在刷新 ..');
  },


  onLoad: function () {
}
})
