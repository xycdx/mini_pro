// pages/help/help.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 0,
        option1: [{
                text: '全部信息',
                value: 0
            },
            {
                text: '紧急信息',
                value: 1
            },
            {
                text: '尽快信息',
                value: 2
            },
        ],
        option2: [{
                text: '时间排序',
                value: 'a'
            },
            {
                text: '紧急程度',
                value: 'b'
            },
            {
                text: '求助报酬',
                value: 'c'
            },
        ],
        value1: 0,
        value2: 'a',
        option3: [{
                text: '全部信息',
                value: 0
            },
            {
                text: '国定信息',
                value: 1
            },
            {
                text: '武东信息',
                value: 2
            },
            {
                text: '武川信息',
                value: 3
            },
        ],
        option4: [{
                text: '时间排序',
                value: 'a'
            },
            {
                text: '紧急程度',
                value: 'b'
            },
            {
                text: '求助报酬',
                value: 'c'
            },
        ],
        value3: 0,
        value4: 'a',
        activeName: '0',
        scroll_height: 0
    },

    onChange(event) {
        wx.showToast({
            title: `切换到标签 ${event.detail.name+1}`,
            icon: 'none',
        });
    },
    onChange1(event1) {
        this.setData({
            activeName: event1.detail,
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let windowHeight = wx.getSystemInfoSync().windowHeight // 屏幕的高度
        let windowWidth = wx.getSystemInfoSync().windowWidth // 屏幕的宽度
        this.setData({
            scroll_height: windowHeight * 750 / windowWidth - (204) - 30
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

    }
})