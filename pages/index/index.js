import {request} from "../../ request/index";

Page({
  data: {
    //轮播图数据
    swiperList:[
        {
            id:"0",
            img_src:"https://s3.bmp.ovh/imgs/2022/07/05/40e2f5195497a2b7.jpg"
        },
        {
            id:"1",
            img_src:"https://s3.bmp.ovh/imgs/2022/07/05/ce380a6276115b18.jpg"
        },
        {
            id:"2",
            img_src:"https://s3.bmp.ovh/imgs/2022/07/05/8b417d63548e1dd3.jpg"
        },
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 500,
    // 导航数组
    catesList: [],
    // 楼层数组
    floorList: []
  },
  onLoad: function(options){
    this.getCateList();
    this.getFloorList();
  },
  // 1 发送异步请求
    getCateList(){    
        request({
            url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"
        })
        .then(result=>{
            this.setData({
                catesList:result.data.message
            })
        })
    },
    getFloorList(){
        request({
            url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"
        })
        .then(result=>{
            this.setData({
                floorList:result.data.message
            })
        })
    }

})