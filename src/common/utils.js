import config from '../config/index'
import axios from 'axios';
/**
 * 密码校验
 * @param psd 密码
 * @param cpsd 确认密码
 * @param min 最小长度
 * @param max 最大长度
 * @return {boolean}
 */
export const psdVerify = (psd, cpsd, min, max) => {
	if (psd.length <= max && psd.length >= min) {
		if (psd === cpsd) {
			return true
		} else {
			return false
		}
	} else {
		return false
	}
}

export const RoleSuperAdmin = 1

/**
 * 菜单数据格式化
 * @param menus
 * @return {*}
 */
export const formatRoutes = (menus) => {
	let topMenus = menus.filter(item => {
		item.key = item.id
		return item.parent === 0
	})
	topMenus.forEach(menu => {
		let children = menus.filter(item => menu.id === item.parent)
		if (children.length !== 0) menu.children = children
	})
	return topMenus
}

// 传入时间戳 获取 yyyy-mm-dd hh:mm:ss
export const getFullDateByTime = (timer) => {
	let time = new Date(timer);
	let year = time.getFullYear();
	let month = time.getMonth() + 1;
	let day = time.getDate();
	let h = time.getHours();
	let m = time.getMinutes();
	let s = time.getSeconds();
	month = month < 10 ? '0' + month : month;
	day = day < 10 ? '0' + day : day;
	h = h < 10 ? '0' + h : h;
	m = m < 10 ? '0' + m : m;
	s = s < 10 ? '0' + s : s;
	return `${year}-${month}-${day} ${h}:${m}:${s}`;
  };
  


    //proxy到自己服务器，代理中转
export	const aeyeSchemaFilter = (schema) =>{
		console.log("filter:" + JSON.stringify(schema))
		if(schema && schema.api){
		  if(typeof(schema.api)==='object'){
			schema.api.url = config.proxyUrl + "?url="+ encodeURIComponent(schema.api.url)
		  }
	
		  if(typeof(schema.api)==='string'){
			schema.api = config.proxyUrl + "?url="+ encodeURIComponent(schema.api)
		  }
		  return schema
		}
	  }

