function notify(title,body){
console.log(body)
navigator.serviceWorker.register('sw.js');
Notification.requestPermission(perm=>{
	if(perm=='granted'){
		if(typeof body != 'object')return
		if(typeof body != 'string'){
			navigator.serviceWorker.ready.then(reg => {
				reg.showNotification(title)
			})
		}else{
		navigator.serviceWorker.ready.then(reg=>{
			reg.showNotification(title,body)
		})}
	}
})}
