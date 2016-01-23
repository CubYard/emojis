require('wiredep')({
	src: 'views/index.ejs',
	onPathInjected(fileObject) {
		console.log(`wiredep: ${fileObject.path} was inject into ${fileObject.file}`);
	}
});