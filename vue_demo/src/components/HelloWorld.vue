  <template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <h4>{{ des }}</h4>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
// import { toRefs } from 'vue'
import { toRefs, computed, toRef } from 'vue'
import useGetList from './list'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    title: String
  },
  setup(props, context) {
    console.log(context, 'context>>>>')
    console.log(context.attrs, 'attrs')
    // 如果使用结构的方式获取props中的数据,需要引入toRefs
    const { msg } = toRefs(props)

    // 如果title是可选的prop,roRefs将不会为title创建一个ref,需要用toRef替代他
    const title = toRef(props, 'title')

    console.log(title.value, 'title>>>')

    const { list, getList } = useGetList(msg)

    // 计算属性
    const des = computed(() => {
      return msg.value + ' Vue3.0'
    })
    return {
      list,
      getList,
      des
    }
  },
  beforeCreate() {
    console.log(this, 'beforeCreate')
  },
  created() {
    console.log(this, 'created')
    // this.getList()
    // console.log(this.list)
  },
  // watch: {
  //   msg: {
  //     handler: function(value) {
  //       console.log(value)
  //     },
  //     immediate: true
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
