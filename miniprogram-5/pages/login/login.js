Page({
    data:{
        userinfo: ''
    },
    onLoad(){
      console.log("进入login页面")
      let user = wx.getStorageSync('user')
      this.setData({
        userinfo: user
      })
    },
    login() {
      wx.getUserProfile({
        desc: '请授权登录',
        success: res=> {
            let user=res.userInfo
            wx.setStorageSync('user', user)
          this.setData({
            userinfo: user
          })
        },
        fail:res=> {
          console.log("fail", res)
        }
      })
    },
    logout(){
      this.setData({
        userinfo: ''
      })
      wx.setStorageSync('user', null)
    },
    enter(){
      wx.switchTab({
        url: '../index/index',
      })
    }
  })