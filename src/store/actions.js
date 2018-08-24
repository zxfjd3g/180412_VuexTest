import axios from 'axios'
import {REQUESTING, REQ_SUCCESS, REQ_FAIL} from './mutaion-types'

export default {
  search ({commit}, searchName) {
    // 更新状态(请求中)
    commit(REQUESTING)
    // 发送ajax请求获取users数据
    const url = `https://api.github.com/search/users?q=${searchName}`
    axios.get(url)
      .then(response => {
        const result = response.data
        const users = result.items.map(item => ({
          username: item.login,
          header_url: item.avatar_url,
          url: item.html_url
        }))
        // 请求成功了, 更新状态(成功)
        commit(REQ_SUCCESS, {users})
      })
      .catch(error => {
        // 请求失败了, 更新状态(失败)
        commit(REQ_FAIL)
      })
  }
}