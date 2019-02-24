# vue-sign-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

axios:发送http请求,可以挂载到Vue实例上prototype属性上,直接this.$http.get/post
导航守卫:路由高级应用 导航守卫,接收服务端的数据,将token存在localStorage里面,用户输入除了登录,注册的url,先判断有没有token存在,如果没有,应该让其跳转到登录页
拦截器:Axios高级应用 拦截器,请求拦截和响应拦截,在发送请求之前拦截,将字段Authorization字段的值设为localStorage里面的token,这样以后发送请求就不需要携带Authorization字段
