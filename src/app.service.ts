import { Injectable } from '@nestjs/common';
import { JPushAsync } from "jpush-async";

@Injectable()
export class AppService {
  async getHello() {
    console.log(JPushAsync)
    var client = JPushAsync.buildClient('appkey', '密钥')
    client.push().setPlatform('ios', 'android')
    .setAudience(JPushAsync.ALL)
    .setNotification('Hi, JPush', JPushAsync.ios('ios alert', 'happy', 5))
    .send()
    .then(function(result) {
        console.log(result)
    }).catch(function(err) {
        console.log(err)
    })

    return {
      code:101,
      message:'hello world',
      data:null
    };
  }
}

// const jpushFun = (client)=>{
//   return new Promise((resolve)=>{
    
    
//   })
// }
