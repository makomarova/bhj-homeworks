const form = document.getElementById('signin__form');
const welcome = document.querySelector('.welcome ');
const signinBtn = document.getElementById('signin__btn');
const userId = document.getElementById('user_id');
const signin = document.querySelector('.signin');

let id = localStorage.getItem('userId');

if(id){
    signIn(id);
}

signinBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    xhr.responseType = 'json';
    xhr.send(formData);
    xhr.onload = () => {
		const responce = xhr.response;
		if (responce['success']) {
			const id = responce['user_id']
			localStorage.setItem('userId', id);
			signIn(id);
		} else {
			alert('неверный логин/пароль!')
		}
	}
});

function signIn(user) {
	signin.classList.remove('signin_active');
	welcome.classList.add('welcome_active');
	userId.textContent = user;
}