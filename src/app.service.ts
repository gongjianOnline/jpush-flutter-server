import { Injectable } from '@nestjs/common';
import { JPushAsync } from "jpush-async";

@Injectable()
export class AppService {
  async getHello() {
    console.log(JPushAsync)
    var client = JPushAsync.buildClient('93ba8df603b6f530b2310c69', 'ebe7ec76cb62d0119a577ac4')
    client.push().setPlatform('ios', 'android')
    .setAudience(JPushAsync.alias('jg123'))
    .setNotification(JPushAsync.android('龚箭向你发送了一条信息', '定点消息推送测试', 1, {'key':'value'}))
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
