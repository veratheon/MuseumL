const buy = document.getElementById('btn-buy'),
closeF = document.getElementById('closeForm'),
forme = document.getElementById('forma'),
book = document.getElementById('book'),
totalSenior = document.getElementById('total-senior'),
totalBasic = document.getElementById('total-basic'),
howMuchBasic = document.getElementById('total-basic-tickets'),
howMuchSenior = document.getElementById('total-senior-tickets'),
priceBasic = document.getElementById('total-basic-price'),
priceSenior = document.getElementById('total-senior-price'),
total = document.getElementById('total');


const showForm = () =>{
    forme.classList.add('active-form');
    howMuchBasic.innerHTML = totalBasic.value;
    howMuchSenior.innerHTML = totalSenior.value;
    priceBasic.innerHTML = `${totalBasic.value * 20} €`;
    priceSenior.innerHTML = `${totalSenior.value * 10} €`;
    total.innerHTML = `${totalBasic.value * 20 + totalSenior.value * 10} €`;
}

const closeForm = () => {
    forme.classList.remove('active-form');
}

buy.addEventListener('click', showForm);
closeF.addEventListener('click', closeForm);
book.addEventListener('click', closeForm);