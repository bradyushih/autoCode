function numIsFullWidth(val){
		let gap = '０'.charCodeAt(0) - '0'.charCodeAt(0);
		let min = '０'.charCodeAt(0);
		let max = '９'.charCodeAt(0);
		let halWidth = '';
		[...val].forEach( c => {
			let charCode = c.charCodeAt(0);
			if(min<=charCode && charCode<=max){
				charCode -= gap;
				halWidth += String.fromCharCode(charCode)
			}
		});
		return halWidth;
	}
