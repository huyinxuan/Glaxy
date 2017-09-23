import menubar from './menu-bar.vue'

const Menu = {
	install:function(Vue){
		Vue.component('aside-menu', menubar)  //注册组件
	}
}
export default  Menu