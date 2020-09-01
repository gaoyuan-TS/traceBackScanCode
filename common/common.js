let API_Url = 'http://scode-beta.cntracechain.com'
// let API_Url = 'https://scode.cntracechain.com'

export default class Common {

	// get请求封装
	static get(url, param, loading = true) {
		if (loading) {
			Common.loading()
		}
		url = API_Url + url
		return new Promise((resolve, reject) => {
			uni.request({
				url: url, //仅为示例，并非真实接口地址。
				method: "GET",
				data:param,
				success: (res) => {
					resolve(res)
				},
				fail: (error) => {
					reject(error)
				},
				complete: () => {
					if (loading) {
						Common.hideLoading()
					}
				}
			});
		})
	}

	// post请求封装
	static post(url, param, loading = true) {
		if (loading) {
			Common.loading()
		}
		url = API_Url + url
		return new Promise((resolve, reject) => {
			uni.request({
				url: url,
				method: 'POST',
				data: param,
				success: (res) => {
					resolve(res)
				},
				fail: (error) => {
					reject(res)
				},
				complete: () => {
					if (loading) {
						Common.hideLoading()
					}
			
				}
			})
		})
	}
	
	
	static loading(title = '加载数据中') {
		uni.showLoading({
			title,
			mask: true,
			duration: 1500
		})
	}
	static hideLoading() {
		uni.hideLoading()
	}

	// 弹窗提醒
	static showToast(title,icon='none') {
		uni.showToast({
			title,
			icon,
			mask: true,
			duration: 1800
		})
	}

	// 跳转页面
	static navigateTo(url) {
		uni.navigateTo({
			url: url
		})
	}

	// 本地缓存: 存储
	static setStorage(key, data) {
		uni.setStorageSync(key, data)
	}
	// 本地缓存: 获取
	static getStorage(key) {
		let value = uni.getStorageSync(key)
		if (value) {
			return value
		} else {
			return false
		}
	}
	
	
	// 图片预览
	static preViewImg(current,urls) {
		uni.previewImage({
			current,
			urls,
			indicator : 'default'
		})
	}
	
	//上传图片
	static uploadImage(tempFilePaths) {
		return new Promise((presolve, preject) => {
			if ({}.toString.call(tempFilePaths) != '[object Array]') {
				throw new TypeError(`上传图片参数 tempFilePaths 类型错误!`)
			}
			//路径数组为空时  不上传
			if (tempFilePaths.length == 0) {
				presolve([])
				return
			}
			Common.loading()
	
			let uploads = []
			tempFilePaths.forEach((item, i) => {
				uploads[i] = new Promise((resolve) => {
					uni.uploadFile({
						url: 'https://zs.cntracechain.com/imageService/image/add',
						filePath: item,
						name: 'file',
						header: {
							'Content-Type': 'multipart/form-data'
						},
						formData: {
							imgSystemId: "shabi",
							imgSpecificUniqueValue: "lowB"
						},
						success(res) {
							resolve(JSON.parse(res.data));
						},
						fail(err) {
							Common.hideLoading()
						}
					})
				})
			})
	
			Promise.all(uploads).then(res => {
				//图片上传完成
				presolve(res)
				Common.hideLoading()
			}).catch(err => {
				preject(err)
				Common.hideLoading()
				Common.showToast('上传失败请重试')
			})
		})
	}
	  static formatTime (timeData, type) {
	    // console.log(timeData)
	    // type 1 是时分秒  0 无时分秒
	    let date = new Date(timeData)
	    let year = date.getFullYear()
	    let mouth = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)
	    let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
	    let hour = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
	    let min = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
	    let sec = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
	    let hourMinSe = ''
	    if (type) {
	      hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
	      min = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()
	      sec = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()
	      hourMinSe = ` ${hour}:${min}:${sec}`
	    }
	    // console.log(hour)
	    let time = `${year}-${mouth}-${day}${hourMinSe}`
	    return time
	  }
}
