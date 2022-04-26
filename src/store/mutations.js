export const ACTIVATE_NOTI = (state, notification) => {
  state.notis.push({
    ...notification,
    id: (Math.random().toString(36) + Date.now().toString(36)).substring(2)
  })
}