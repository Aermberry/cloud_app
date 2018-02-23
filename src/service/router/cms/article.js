export default [{
        path: '/article/topline',
        meta: {
            title: '头条'
        },
        component: function (resolve) {
            require(['src/views/cms/article/TopLine'], resolve)
        }
    },
    {
        path: '/article/list',
        meta: {
            title: '文章列表页'
        },
        component: function (resolve) {
            require(['src/views/cms/article/Article_List'], resolve)
        }
    },
    {
        path: '/article/show',
        meta: {
            title: '文章详情页'
        },
        component: function (resolve) {
            require(['src/views/cms/article/Article_Show'], resolve)
        }
    },
    {
        path: '/about',
        meta: {
            title: '关于我们'
        },
        component: function (resolve) {
            require(['src/views/cms/article/about'], resolve)
        }
    },

    {
        path: '/aboutshow',
        meta: {
            title: '关于我们'
        },
        component: function (resolve) {
            require(['src/views/cms/article/about_show'], resolve)
        }
    },
    {
        path: '/article/usernotice',
        meta: {
            title: '会员通知'
        },
        component: function (resolve) {
            require(['src/views/cms/article/UserNotice'], resolve)
        }
    },
    {
        path: '/article/usernoticeShow',
        meta: {
            title: '会员通知'
        },
        component: function (resolve) {
            require(['src/views/cms/article/UserNotice_Show'], resolve)
        }
    }
]
