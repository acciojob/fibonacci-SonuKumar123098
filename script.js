function fibonacci(num) {
// your code here
	let x=0;
	let y=1;
	let z=0;
	if(num===1)return 0;
	if(num<=2)return 1;
	for(let n=3;n<=num;n++){
		z=x+y;
		x=y;
		y=z;
	}
	return z;
}

module.exports = fibonacci;
