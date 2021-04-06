import { ref, onMounted, watch } from 'vue'

const fetchList = (msg) => {
  return new Promise(resolve => {
    setTimeout(resolve, 2000, msg.split(''))
  })
}

export default function useGetList(msg) {
  const list = ref([])
  const getList = async () => {
    list.value = await fetchList(msg.value)
  }

  // 注册生命周期钩子
  onMounted(getList)
  
  // 添加侦听器
  watch(msg, (newValue) => {
    getList(newValue)
  })
  return {
    list,
    getList
  }
}