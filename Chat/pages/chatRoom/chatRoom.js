// pages/chatRoom/chatRoom.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    msgKey:0,
    items:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var self = this;
      wx.setNavigationBarTitle({
          title: '优惠券仓库'
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getInput: function(e){
    this.setData({
      inputValue: e.detail.value
    })
  },
  send: function(e){
    var self = this;
    var keyWord = this.data.inputValue.trim();
    if (keyWord !== ''){
      wx.request({
        url: 'https://pub.alimama.com/items/search.json',
        data:{
          q: keyWord,
          perPageSize:5
        },
        header:{
          'content-type': 'application/json' // 默认值
        },
        success(res){
          self.setData({
            items: res.data.data.pageList  //如果在sucess直接写this就变成了wx.request()的this了.必须为send函数的this,不然无法重置调用函数
          })
        },
        fail: function (err) { },//请求失败
        complete: function () { }//请求完成后执行的函数
      })

        this.setData({
            inputValue: ""
        })
    }
  }
})