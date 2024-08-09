import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  if (process.client) {
    createPersistedState({
      storage: window.sessionStorage
    })(store)
  }
}
