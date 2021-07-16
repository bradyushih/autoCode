//0~9    ０~９         A~Za~z  Ａ~Ｚａ~ｚ
	//48~57  65296~65305  65~122  65313~65370
	let charCodeParams = ccp ={
		newHalWidth : '',
		numGap      : '０'.charCodeAt(0) - '0'.charCodeAt(0),
		alphGap     : 'Ａ'.charCodeAt(0) - 'A'.charCodeAt(0),
		numMin 		: '０'.charCodeAt(0),
	    numMax 		: '９'.charCodeAt(0),
		alphMin 	: 'Ａ'.charCodeAt(0),
		alphMax 	: 'ｚ'.charCodeAt(0),
	}
	function FullWidth2HalWidth(str){
		ccp.newHalWidth = '';
		[...str].forEach( word => {
			let charCode = word.charCodeAt(0);
				switch (isFullWidth(charCode).type){
					case('num'):
						charCode -= ccp.numGap;
						ccp.newHalWidth += String.fromCharCode(charCode)
						break;
					case('alph'):
						charCode -= ccp.alphGap;
						ccp.newHalWidth += String.fromCharCode(charCode)
						break;
					default:
						ccp.newHalWidth += word;
						break;
				}
		});
		return ccp.newHalWidth;
	}
	
	function isFullWidth(charCode){
		let res ={
// 					'status': null, 
					'type': null
				};
		if((ccp.numMin<=charCode && charCode<=ccp.numMax)){
// 			res.status = true;
			res.type = 'num';
		}
		if((ccp.alphMin<=charCode && charCode<=ccp.alphMax)){
// 			res.status = true;
			res.type = 'alph';
		}
		return res;
	}
