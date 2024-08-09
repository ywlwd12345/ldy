import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  website: {
    ip: '',
    searchTool: '1',
    visitedTime: '',
    enterChannel: '3',
    keyword: '无'
  },
  pageId: ''
})

export const mutations = {
  setTime(state, time) {
    state.website.visitedTime = time
  },
  setPageId(state, pageId) {
    state.pageId = pageId
  },
  setSearchTool(state, searchTool) {
    let search = searchTool ? '1' : '2'
    state.website.searchTool = search
  }
}
