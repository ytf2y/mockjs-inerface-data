/**
 * Created by apple on 2019/9/9.
 */

//引入mockjs
import Mock from 'mockjs';

//实际使用中,,用post方式接收参数
Mock.mock('/login','post',function(options){

    //获取到请求参数 username,password
    var {username,password} = JSON.parse(options.body);

    if(username == 'admin' && password == '123456')
    {
        return {
            "status": 200,
            msg: "登陆成功!"
        };
    }
    else
    {
        return { "status":422,msg:"用户名/密码错误!" };
    }

});

Mock.mock('/list','get',{
    "status":200,
    "list|5":[
        { "id|+1":1,"name":'@cname',"age|18-30":1,"address":'@county(true)',"phone|13600000000-19099999999":0 }
    ]
});

//需求1: 用mockjs模拟分页接口
//要求: 1. 接口地址: '/goodList'
//      2.需要接收参数: page=?, pageSize=?
//      3.返回数据格式如下:
//{
//    "status":200,
//    "total":200,
//    "page":1,
//    "pageSize":5,
//    "list":[
//        { "id":1,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
//        { "id":2,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
//        { "id":3,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
//        { "id":4,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
//        { "id":5,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
//    ]
//}

var data = [
    { "id":1,"name":'xxx',"price":20,"pic":'https://dummyimage.com/200x100' },
    { "id":2,"name":'xxx',"price":20,"pic":'https://dummyimage.com/200x100' },
    { "id":3,"name":'xxx',"price":20,"pic":'https://dummyimage.com/200x100' },
    { "id":4,"name":'xxx',"price":20,"pic":'https://dummyimage.com/200x100' },
    { "id":5,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
    { "id":6,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
    { "id":7,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
    { "id":8,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
    { "id":9,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
    { "id":10,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
    { "id":11,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
    { "id":12,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
    { "id":13,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
    { "id":14,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
    { "id":15,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
    { "id":16,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
    { "id":17,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
    { "id":18,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
    { "id":19,"name":'xxx',"price":20,"pic":'http://xxx.jpg' },
    { "id":20,"name":'xxx',"price":20,"pic":'http://xxx.jpg' }

];

//用slice从大数组data中截取一部分作为返回数据
Mock.mock('/goodList','post',function(options){
    //取出参数
    var {page,pageSize} = JSON.parse(options.body);

    //用slice从大数组data中截取一部分作为返回数据
    var arr = data.slice( (page-1)*pageSize ,page*pageSize );

    return {
        "status":200,
        "page":page,
        "pageSize":pageSize,
        "total": data.length,
        "list":arr
    }
});


//需求2: 用mockjs模拟轮播图接口
//要求: 1. 接口地址: '/carousel'
//      2.需要接收参数: count=?
//      3.返回数据格式如下:
//{
//    "status":200,
//    "count":5,
//    "list":[
//        { "id":1,"desc":'xxx',"link":'http://baidu.com',"pic":'http://xxx.jpg' },
//        { "id":2,"desc":'xxx',"link":'http://baidu.com',"pic":'http://xxx.jpg' },
//        { "id":3,"desc":'xxx',"link":'http://baidu.com',"pic":'http://xxx.jpg' },
//        { "id":4,"desc":'xxx',"link":'http://baidu.com',"pic":'http://xxx.jpg' },
//        { "id":5,"desc":'xxx',"link":'http://baidu.com',"pic":'http://xxx.jpg' }
//    ]
//}


//轮播图接口实现
Mock.mock('/carousel','post',function(options){

    var {count} = JSON.parse(options.body);

    var arr = data.slice(0,count);

    return {
        "status":200,
        "count": count,
        "list":arr
    }
});

//轮播图接口升级版
Mock.mock('/carousel2','post',function(options){

    var {count} = JSON.parse(options.body);

    var arr = data.slice(0,count);

    return {
        "status":200,
        "count": count,
        "list":arr
    }
});



