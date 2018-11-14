import Mock from 'mockjs'

Mock.mock('/recentCallsList',{
  'recentCalls':[
    {
      outboundCall:true, //是否是拨出电话
      phoneName:'180-4676-2241',
      phoneState:'手机',  //状态
      phonefrequency:'',  //通话次数
      phoneTime:'今天',
      isMissedCall: false  //是否是未接来电
    },
    {
      outboundCall:false,
      phoneName:'A名字',
      phoneState:'南昌,江西',
      phonefrequency:'2',
      phoneTime:'星期一',
      isMissedCall: false
    },
    {
      outboundCall:false,
      phoneName:'15467484',
      phoneState:'未知',
      phonefrequency:'',
      phoneTime:'昨天',
      isMissedCall: false
    },
    {
      outboundCall: true,
      phoneName:'家人',
      phoneState:'手机',
      phonefrequency:'5',
      phoneTime:'2018/11/11',
      isMissedCall: true
    },
    {
      outboundCall:false,
      phoneName:'朋友',
      phoneState:'南昌,江西',
      phonefrequency:'3',
      phoneTime:'2018/11/5',
      isMissedCall: true
    }
  ]
});
