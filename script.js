//your code here
const info = document.getElementById("info")
const img = document.getElementById("img")
const age = document.getElementById("age")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const name = document.getElementById("name")

async function getData() {
	const data = await fetch("https://randomuser.me/api/")
	const res = await data.json()
	const userData = res.results[0]
	console.log(userData.first + userData.last)
	img.src = userData.picture.large
	info.innerText = ""
	name.innerText = userData.name.first +" " +userData.name.last
	console.log(name)
	age.addEventListener('click', e=>{
		info.innerText = userData.dob.age
	})
	email.addEventListener('click', e=>{
		info.innerText = userData.email
	})
	phone.addEventListener('click', e=>{
		info.innerText = userData.phone
	})
}

getData();

