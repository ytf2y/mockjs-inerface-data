import React,{Component} from 'react';

import '../mock'
import axios from 'axios';

import Swiper from 'swiper';

import 'swiper/dist/css/swiper.css'

class App extends Component{
    constructor(){
        super();
        this.state = {
            list:[]
        };
    }
    componentDidMount(){
        //测试轮播图接口
        axios.post('/carousel',{count:4}).then((res)=>{
            console.log(res.data);

            //最好在setState完成合并之后,再对swiper进行初始化
            this.setState({
                list:res.data.list
            },function(){
                new Swiper('.swiper-container', {
                    autoplay: {
                        delay: 2000
                    },
                    pagination:{
                        el:'.swiper-pagination'
                    }
                });
            })
        });

    }
    handleClick = ()=>{

        //发送ajax请求时, 如果需要传参,必须采用post方式
        /*axios.post('/login',  { username:'admin1',password:'123456' }  ).then((res)=>{
            console.log(res.data);
        });*/

        /*axios.get('/list').then((res)=>{
            console.log(res.data);
        });*/
        /*axios.post('/goodList',{page:2,pageSize:2}).then((res)=>{
            console.log(res.data);
        });*/

    }
    render(){
        return (
            <div className="app" onClick={this.handleClick}>

                <div className="swiper-container">

                    <div className="swiper-wrapper">

                        {
                            this.state.list.map((item,index)=>{
                                return (
                                    <div key={index} className="swiper-slide" >
                                        <img src={item.pic} alt=""/>
                                    </div>
                                )
                            })
                        }

                    </div>

                    <div className="swiper-pagination"></div>
                </div>

            </div>
        )
    }
}

export default App;

