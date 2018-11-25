// components/message/message.js
Component({
  /**
   * 组件的属性列表
   */

  
  properties: {
    "content":String,//显示的内容
    // "msgId":Number,
    "isUserMsg": Boolean,//用户消息还是服务器返回消息，默认是用户消息 
  //搜索结果
    "nick": String,//店铺名称
    "shopTitle":String,
    "actionUrl": String,//宝贝详情
    "title":String,//
   "biz30day":Number,//月销
   "reservePrice":Number,//原价
   "zkPrice":Number,//促销价
   "tkCommonRate":Number,//淘宝客佣金比率
   "tkCommonFee":Number,//淘宝客佣金
    "picUrl":String,//需要加域名
    "sellerId":Number,
    "auctionId":Number,
    "couponInfo":String,//优惠券信息
    "couponEffectiveStartTime": String,//优惠券有效期开始时间
    "couponEffectiveEndTime":String,//优惠券有效期截至时间
    "couponActivityId":String,
    "couponLeftCount":Number,//优惠券剩余
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
