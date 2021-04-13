  <template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <h4 @click="sendMsgToParent">{{ des }}</h4>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <div @click="addCount">count: {{ count }}</div>
    <div>book: {{ book.title }}</div>
    <div>reactive属性绑定ref对象: {{ state.count }}</div>
    <slot name="box"></slot>
  </div>
</template>

<script>
// import { toRefs } from 'vue'
import { toRefs, computed, toRef, ref, reactive } from 'vue'
import useGetList from './list'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    title: String
  },
  // 在执行setup时,组件实例尚未被创建,无法访问 data computed methods
  setup(props, context) {
    const count = ref(0)
    const state = reactive({ count })
    const addCount = () => {
      // state.count = 1
      count.value++
    }
    // console.log(count.value)
    console.log(context, 'context>>>>')
    // attribut
    console.log(context.attrs, 'attrs')

    // 插槽
    console.log(context.slots, 'slots>>>>')

    // 触发事件
    console.log(context.emit, 'emit>>>')

    const sendMsgToParent = () => {
      context.emit('getChildMsg', des)
    }

    // 如果使用结构的方式获取props中的数据,需要引入toRefs
    const { msg } = toRefs(props)

    // 如果title是可选的prop,roRefs将不会为title创建一个ref,需要用toRef替代他
    const title = toRef(props, 'title')

    console.log(title.value, 'title>>>')

    const book = reactive({ title: 'Vue 3.0 Guide' })

    const { list, getList } = useGetList(msg)

    // 计算属性
    const des = computed(() => {
      return msg.value + ' Vue3.0'
    })

    const otherCount = ref(2)
    state.count = otherCount
    console.log(state.count, count.value)
    return {
      count,
      addCount,
      list,
      getList,
      des,
      sendMsgToParent,
      book,
      state
    }
  },
  beforeCreate() {
    console.log(this, 'beforeCreate')
  },
  created() {
    console.log(this, 'created')
    // this.getList()
    // console.log(this.list)
  }
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
