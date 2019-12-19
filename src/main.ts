document.querySelector("button").addEventListener("click", e => {
	(<any> navigator.mediaDevices).getDisplayMedia().then(r => {
		let video = document.querySelector("video");
		video.srcObject = r;
		video.onloadedmetadata = e => video.play();
	}).catch(err => console.log(err));
});
