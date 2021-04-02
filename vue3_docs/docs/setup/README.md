# 组合式API基础
## <code>setup</code> 组件选项
<code>setup</code> 选项是一个接受 <code>props</code> 和 <code>context</code> 的函数。

```javascript
父组件引入
<HelloWorld :msg="msg"/>

子组件
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  setup(props, context) {
    console.log(this, props)
  }
}
```
上述代码输出顺序为 undefined --> beforeCreate --> created 由此可见 在执行setup时，组件实例尚未被创建，因此setup中没有this, 我们将无法访问组件中声明的任何属性比如本地状态、计算属性、方法等