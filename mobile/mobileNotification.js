function notify(title,body){
navigator.serviceWorker.register('sw.js');
Notification.requestPermission(perm=>{
	if(perm=='granted'){
		if(typeof body != 'object')return
		if(typeof body == 'object'){
			navigator.serviceWorker.ready.then(reg => {
				reg.showNotification(title,body)
		})
		}else{
		navigator.serviceWorker.ready.then(reg=>{
			reg.showNotification(title)
		})}
	}
})}
