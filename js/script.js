$(() => {
	// 要素を追加した後に表示
	new Promise(resolve => {
		// display
		const loads = {
			header: 'parts/header.html',
			footer: 'parts/footer.html'
		}
		$('#headerDiv').load(loads.header)
		$('#footerDiv').load(loads.footer)
		
		// resolve 
		resolve()
	}).then(() => {
		$('#root').css('display', 'block')
	})
})