//your JS code here. If required.
let div = document.getElementById("output")
function promiseCh(arr){

	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(arr)
		},3000)
	})
}


promiseCh([1,2,3,4]).then((res)=>{
console.log(res)

	return new Promise((resolve,reject)=>{

		setTimeout(()=>{
			let even = res.filter((v)=>{
				return v%2==0
			})
			resolve(even)
		},1000)
	})
	
})
.then((res)=>{
console.log(res)
	let p = document.createElement("p")
	p.innerText = `${res[0]},${res[1]}`
div.append(p)
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let even = res.map((v)=>{
				return v*2
			})
			resolve(even)
		},2000)
	})
		
})
.then((res)=>{
	let p = document.createElement("p")
	p.innerText = `${res[0]},${res[1]}`
div.append(p)
})