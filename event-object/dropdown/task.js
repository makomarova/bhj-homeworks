const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');

function openCloseDropDownList(){
    if(dropdownList.classList.contains('dropdown__list_active')){
        dropdownList.classList.remove('dropdown__list_active');
    } else{
        dropdownList.classList.add('dropdown__list_active');
    }
}

dropdownValue.addEventListener('click', openCloseDropDownList);

const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));

for (let i = 0; i < dropdownLink.length; i++) {
	dropdownLink[i].onclick = () => {
        dropdownList.classList.remove('dropdown__list_active');
		dropdownValue.textContent = dropdownLink[i].textContent;
		return false;
	}
}