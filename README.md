# create_plugin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

#多个插件 
# 这是移动端虚拟键盘插件
```
 1. npm install huxinfa_keyboard
```  

```
 2. 在main.js 
   引入 import keyboard from 'hu-keyboard'
   挂载 Vue.use(keyboard)
```  
```
 3. pros属性值
  isPay  是否显示当前键盘
  @pas-end  当前键盘输入完毕事件
  @close  关闭当前虚拟键盘
  payTitle  当前虚拟键盘标题 	
``` 

```
  4. 组件内部使用
  
   <keyboard ref="pay" :is-pay='isPay' @pas-end='pasEnd' @close='isPay=false'>
    </keyboard>
	....
	
	this.$refs.pay.$payStatus(true) //输入正确 状态
	
	this.$refs.pay.$payStatus(false) //输入错误 状态
	
```	