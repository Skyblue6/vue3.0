 <template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
const fetchList = (time, data) => new Promise(resolve => {
  setTimeout(resolve, time, data.split(''))
})
// import { toRefs } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  beforeCreate() {
    console.log(this, 'beforeCreate')
  },
  created() {
    console.log(this, 'created')
    this.getList()
    // console.log(this.list)
  },
  setup(props) {
    console.log(this)
    let list = []
    const getList = async () => {
      list = await fetchList(2000, props.msg)
      console.log(list, 'list>>>')
    }
    return {
      list,
      getList
    }
  }
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
