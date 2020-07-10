//0.引入用来发送请求的方法，一定要把路径补全
import {request} from "../../request/index.js"
Page({
  data:{
    //轮播图数据
    swiperList:[],
    //导航数据
    catesList:[],
    //楼层数据
    floorList:[]
  },
  //页面开始加载就会触发
  onLoad:function(){
    //1.发送异步请求获取轮播图数据 优化可使用es6的promise
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   }
    // });
    this.getSwiperList();
    this.getCartList();
    this.getfloorList();
  },
  //获取轮播图数据
  getSwiperList(){
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'
    }).then(result=>{
      this.setData({
        swiperList:result.data.message
      })
    })
  },
  //获取导航数据
  getCartList(){
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'
    }).then(result=>{
      this.setData({
        catesList:result.data.message
      })
    })
  },
  //获取楼层数据
  getfloorList(){
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'
    }).then(result=>{
      this.setData({
        floorList:result.data.message
      })
    })
  },

})