// pages/help/help.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 0,
        option1: [{
                text: '全部书',
                value: 0
            },
            {
                text: '教材',
                value: 1
            },
            {
                text: '习题',
                value: 2
            },
            {
                text: '其他',
                value: 3
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
                text: '全部物品',
                value: 0
            },
            {
                text: '学习必备',
                value: 1
            },
            {
                text: '洗护美妆',
                value: 2
            },
            {
                text: '宿舍神器',
                value: 3
            },
            {
                text: '潮玩服饰',
                value: 4
            },
            {
                text: '影娱数码',
                value: 5
            },
            {
                text: '健康户外',
                value: 6
            },
        ],
        
        value3: 0,
        activeName: '0',
        scroll_height: 0
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
            scroll_height: windowHeight * 750 / windowWidth - (154) - 30
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