
const visitTime=function() {
	let date = new Date();
	let time = '';
	let year = date.getFullYear(),
		month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
		day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
		hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
		minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
		seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
	time = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds

	return time
}


// 将工具模块注入到 Vue 实例和 Nuxt 上下文
export default ({ app }, inject) => {
    // 注入工具模块
    inject('visitTime', visitTime)
  }