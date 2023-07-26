const elementList = document.querySelectorAll('.has-tooltip');

elementList.forEach(element => {
    element.addEventListener('click', (event) => {
        if(document.querySelector('.tooltip_active') != null){
            document.querySelector('.tooltip_active').classList.remove('tooltip_active');
        }
        let position = element.getBoundingClientRect()
        let toolTip = document.createElement('div');
        toolTip.classList.add('tooltip');
        toolTip.classList.add('tooltip_active');
        toolTip.textContent = element.getAttribute('title');
        toolTip.style.top = position.bottom + 'px';
        toolTip.style.left = position.left + 'px';
        element.insertAdjacentElement("afterend", toolTip);
        event.preventDefault();
    })
})