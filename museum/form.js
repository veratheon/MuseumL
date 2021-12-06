const buy = document.getElementById('btn-buy'),
closeF = document.getElementById('closeForm'),
forme = document.querySelectorAll('.forma');

const showForm = () =>{
    forme.classList.add('active-form');
    buy.classList.add("check");
}

const closeForm = () => {
    forme.classList.remove('active-form');
}

buy.addEventListener('click', showForm);
closeF.addEventListener('click', closeForm);
