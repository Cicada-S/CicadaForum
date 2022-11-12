/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 * @regUser 注册用户
 * @login   登录
 */

exports.regUser = (req, res) => {
  res.send('reguser OK')
}

exports.login = (req, res) => {
  res.send('login OK')
}
