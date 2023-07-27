const loader =document.querySelector('.loader ');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.addEventListener('readystatechange', function() {
    if (this.readyState == xhr.DONE && this.status == 200) {
        loader.classList.remove('loader_active');

        let response = JSON.parse(xhr.responseText).response.Valute;
        console.log(response);
        for (var key in response)  {
            let html  = `<div class="item">
                <div class="item__code">${response[key].CharCode}</div>
                <div class="item__value">${response[key].Value}</div>
                <div class="item__currency">руб.</div> 
                <\div>`;
            items.innerHTML += html;
        }
    }
});
xhr.send();