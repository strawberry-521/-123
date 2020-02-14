import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Map, Button, Text } from '@tarojs/components';
import './index.scss'
import "../../icon图标淘宝/font_5rhyeqzz879/iconfont.css"

class MapCom extends Component {
  config: Config = {
    navigationBarTitleText: '一面而就'
  }

  state={
    location: {
      longitude: 0,
      latitude: 0,
      location:true
    }
  }

  componentDidShow () {
    Taro.getLocation({
      type: 'wgs84',
      success: (res)=>{
        this.setState({
          location: res
        })
      }
    })
    
  }

  componentDidHide () {
    // btnclick=()=>{
    //   console.log("myClickFn")
    // }
   }

  render () {
    const {longitude, latitude,location} = this.state.location;
    return (
      <View className='wrap'>
        <Map longitude={longitude} latitude={latitude} show-location={location}></Map>
        <Button>添加面试</Button>
        <View className='box'>
          <Text className='dibiao iconfont'>&#xe650;</Text>
          <Text className='people iconfont'>&#xe735;</Text>
        </View>
      </View>
    )
  }
}


export default MapCom as ComponentClass;
