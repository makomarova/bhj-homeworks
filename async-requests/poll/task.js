const card = document.querySelector('.card');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.addEventListener('readystatechange', function() {
    if (this.readyState == xhr.DONE && this.status == 200) {
        let response = JSON.parse(xhr.responseText).data;
        let html = `<div class="poll">
           <div class="poll__title" id="poll__title">
           ${response.title}
           </div>
           <div class="poll__answers poll__answers_active" id="poll__answers">`;
        response.answers.forEach(answer => {
            html += `<button class="poll__answer">
               ${answer}
             </button>`
        });
        html += `</div>
       </div>`;
        card.innerHTML = html;
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'))
        })
    }
});
xhr.send();