import Mock from 'mockjs'

Mock.mock('/collectionList',{
  'collection':[
    {
      name: '张三',
    },
    {
      name: '李四',
    }
  ]
});
