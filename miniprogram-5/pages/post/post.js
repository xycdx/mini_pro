Page({
    data: {
        text: '',
        image: ''
    },
    shuru(event) {
        this.setData({
            text: event.detail.value
        })
    },
    click1: function () {
        let that = this
        wx.showActionSheet({
            itemList: ['拍照', '从相册中选择'],
            success(res) {
                console.log(res.tapIndex)
                if (res.tapIndex == 0) { //0是拍照
                    wx.chooseImage({
                        count: 1,
                        sizeType: ['compressed'],
                        sourceType: ['camera'],
                        success: function (res) {
                            that.setData({
                                image: res.tempFilePaths[0]
                            })
                            //res.tempFilePaths[0] 这个是图片
                        },
                    })
                } else if (res.tapIndex == 1) {
                    wx.chooseImage({
                        count: 1,
                        sizeType: ['compressed'],
                        sourceType: ['album'],
                        success: function (res) {
                            that.setData({
                                image: res.tempFilePaths[0]
                            })
                            //res.tempFilePaths[0] 这个是图片
                        },
                    })
                }
            }
        })
    },
    fabu() {
        const db = wx.cloud.database()
        db.collection('posts').add({
            data: {
                text: this.data.text,
                image: this.data.image
            }
        })

    }
})