//index.js
//获取应用实例
const app = getApp()
 
Page({
  data: {
    area:['亚洲','欧洲','非洲','南美洲','北美洲','澳洲','南极洲'],
    person:[
      { name: '王二', sex: '男', come:'欧洲'},
      { name: 'Tom', sex: '男', come: '亚洲' },
      { name: 'Black', sex: '女', come: '非洲' },
      { name: '马拉多纳', sex: '男', come: '北美洲' },
      { name: 'cruse', sex: '男', come: '南极洲' }
    ],
    areaIndex:[],
    tempalte:{ name: '王二', sex: '男', come:'欧洲'},
    search:[{
      
    }],
    things: ['ATI气溶胶发生器（冷发尘）', 'ATI气溶胶发生器（热发尘）', 'ATI气溶胶光度计', '超声波雾化器','风量罩','气体质量检测仪','手持式露点仪','纯蒸汽取样冷凝器','红外测温仪','光照度计','数字式压差计','声级仪（噪声）','数字光电转速表','紫外辐射照度计','FLUKE2635A有限温度验证仪（20路）','FLUKE2635A有限温度验证仪（40路）','FLUKE9143干井炉','无线温度验证仪','无线温度压力记录验证仪','计时器（秒表）','Climet Cl-95+浮游菌采样仪(压空)','MAS-100NT浮游菌采样仪','METONE3445尘埃粒子计数器','无线温湿度记录器','泵吸式氮气检测仪','手套完整性检测仪','臭氧检测仪','ApexZ50便携式粒子计数器','AC100H浮游菌采集器','生化培养室的温度传感器','SVMS蒸汽品质检测仪（电子天平、数字温度计）','VT 115便携式风速仪'],
  },
 
  onLoad: function () {
    var lis =[]
    var area = this.data.area;
    var person = this.data.person;
    //把areaindex转变成数组。
    for(var i =0;i<person.length;i++){
      for (var j = 0; j < area.length;j++){
        //当person中的come和area中相等时，组成新数组
        if (person[i].come === area[j]){
          lis.push(j)
        }
      } 
    }
    this.setData({ areaIndex: lis })
    console.log(this.data.areaIndex)  
  },
  bindPickerChange:function(e){
    //解决当改变一个picker时，所有picker都改变的状况。
    var curindex = e.target.dataset.current;
    var curlist = this.data.areaIndex;
    console.log(e.target.dataset.current)
    //替换原来的数组中的元素
    curlist.splice(curindex,1,e.detail.value);
    this.setData({areaIndex:curlist})
  },
  addThing:function(){
    var  person = this.data.person;
    var newData = this.data.tempalte;
    console.log(newData)
    person.push(newData);//实质是添加person数组内容，使for循环多一次
    this.setData({
      person: person,
})  
this.bindPickerChangek
console.log(this.data.person);
},
delThing:function(){
    var person = this.data.person;
    person.pop();      //实质是删除lists数组内容，使for循环少一次
    this.setData({
      person: person,
    })
}
})