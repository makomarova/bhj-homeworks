const interestChecks = document.querySelectorAll('.interest__check');

interestChecks.forEach(interest => {
    interest.addEventListener('change', (e)=> {
        const interestChild = interest.closest('li').querySelectorAll('.interest__check');
        if(interestChild.length !== 0) {
            for ( child of Array.from(interestChild)){
                child.checked = interest.checked;
            }
        }
    });
})