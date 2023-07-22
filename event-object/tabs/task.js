const tabList = Array.from(document.querySelectorAll('.tab'));
const contentList =  Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tabList.length; i++) {
	tabList[i].onclick = () => {
        tabList[i].classList.add('tab_active');
        contentList[i].classList.add('tab__content_active');
        for (let j = 0; j < tabList.length; j++) {
            if (j !== i) {
                tabList[j].classList.remove('tab_active');
                contentList[j].classList.remove('tab__content_active');
            }
        }
	}
}