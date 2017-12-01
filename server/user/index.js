function getUserInfo(app) {
  app.get('/api/user-ajax', (req, res) => {
    res.send({
      name: '廖才明',
      age: 18
    })
  })

  // 获取用户信息
  app.get('/api/user/get-user-info', (req, res) => {
    res.send({
      nickname: '飘零',
      avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1486083553,2709114243&fm=27&gp=0.jpg'
    })
  })
}
module.exports = getUserInfo


