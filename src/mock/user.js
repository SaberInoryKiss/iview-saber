import Mock from 'mockjs';

Mock.mock('/userList', { //输出数据
    'userList|10': [
        {
            'id|+1': 1,
            'name': '@cname', //随机生成姓名
            'age|10-20': 10, //随机生成10-20的年龄
            'gender': '@integer(0,1)'
            //还可以自定义其他数据
        }
    ]
})



Mock.mock('/showList', { //输出数据
    'showList|56': [
        {
            'id|+1': 1,
            "img": "https://b304.photo.store.qq.com/psb?/V104Mmz10rAAbQ/yjYKi3M50IhMIFKTOyYHBlzcF9gz2tKZh.gEqIkN1dY!/b/dDABAAAAAAAA&bo=vALuArwC7gIDCSw!&rf=viewer_4",
            "title": "@ctitle(2,3)",
            'artistname': '@cname', //随机生成姓名
            "type": "@csentence(2,3)",
            "city": "@city",
            "address": "@county",
            "showtime": "@datetime(yyyy-MM-dd)"
            //还可以自定义其他数据
        }
    ]
})

Mock.mock('/login', 'post', (req) => {
    // eslint-disable-next-line standard/object-curly-even-spacing
    const { password, username } = JSON.parse(req.body)
    if (username === 'admin' && password === 'admin') {
        return {
            success: true
        }
    } else {
        return {
            success: false
        }
    }
})