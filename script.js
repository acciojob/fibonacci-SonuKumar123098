function fibonacci(num) {
// your code here
	let x=0;
	let y=1;
	let z=0;
	if(num<==1)return num;
	for(let n=0;n<num;n++){
		z=x+y;
		x=y;
		y=z;
	}
	return z;
}

module.exports = fibonacci;
