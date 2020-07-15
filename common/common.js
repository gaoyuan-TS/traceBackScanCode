let API_Url = ''

export default class Common {

	// get请求封装
	static get(url, param, loading = true) {
		if (loading) {
			Common.loading()
		}
		// #ifdef APP-PLUS || MP-WEIXIN
		url = API_Url + url
		// #endif

		return new Promise((resolve, reject) => {
			uni.request({
				url: url,
				method: 'GET',
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

	// post请求封装
	static post(url, param, loading = true) {
		if (loading) {
			Common.loading()
		}
		// #ifdef APP-PLUS || MP-WEIXIN
		url = API_Url + url
		// #endif
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
	
	// 函数节流
	static throttle(fn, time) {
		let last
		let timer
		const interval = time || 200
		return function() {
			const th = this
			const args = arguments
			const now = +new Date()
			if (last && now - last < interval) {
				clearTimeout(timer)
				timer = setTimeout(function() {
					last = now
					fn.apply(th, args)
				}, interval)
			} else {
				last = now
				fn.apply(th, args)
			}
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
	
}
