const app = getApp();
Page({
    data:{
      text:'未登录',
      isLogin: false,
      img: "../../img/maoyan.png",
    },
    onLoad(){
       
      this.setData({
        text:wx.getStorageSync('nickName'),
        img:wx.getStorageSync('img')
      });
      if(wx.getStorageSync('nickName')){
        this.data.isLogin = true;
      }
    },
    logins(e){
      if(this.data.isLogin) return false;
      wx.getUserProfile({
        desc: '用于完善会员资源',
        success:(res=>{
           wx.setStorageSync('img',res.userInfo.avatarUrl)
          let {encryptedData,iv,userInfo} =res;
          wx.login({
            success:(res)=>{
              let {code} =res;
              let param = {
                encryptedData,iv,userInfo,code
              }
              app.post('/user/login',param).then(res=>{
                this.setData({
                  text:res.data.nickName
                });
                wx.setStorageSync('nickName',res.data.nickName)
              }).catch(err=>{
                console.log(err);
              })
            }
          })
        })
      })
    }
})