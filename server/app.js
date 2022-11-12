const express = require('express')
const app = express()

// 导入 cors 中间件 注册为全局中间件
const cors = require('cors')
app.use(cors())

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 响应数据的中间件
app.use((req, res, enxt) => {
  res.cc = (err, status = 1) => {
    res.send({
      status,
      // instanceof 判断 err 是否为 Error 的实例对象或 Error 子类的示例对象
      message: err instanceof Error ? err.message : err
    })
  }
  enxt()
})

// 解析 Token 的中间件
const expressjwt = require('express-jwt')
app.use(expressjwt({
  secret: config.jwtSecretKey,
  algorithms: ["HS256"],
}).unless({ path: [/^\/api\//] })) // 指定哪些接口不需要进行 Token 的身份认证

// 导入并注册路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)


// 调用 app.listen 方法 指定端口号并启动 web 服务器
app.listen(8848, () => {
  console.log('app server running at http://127.0.0.1:8848');
})
