(function(){
    const tabs=document.querySelectorAll('.js-tabs');
    Array.from(tabs,tab => {
        const tabLinks=tab.querySelectorAll('.js-tab-link');
        let currentActiveTab=tab.querySelector('.js-tab-link.is-active');

        const toggleTab = (toggleTabLink=currentActiveTab) => {
            currentActiveTab=toggleTabLink || currentActiveTab;
            toggleTabLink.classList.toggle('is-active');

            const toggleTabData=toggleTabLink.dataset.index;
            const toggleTabArea=tab.querySelector(`.js-tabarea[data-indexed=${toggleTabData}]`);
            toggleTabArea.classList.toggle('is-active');
        }

        if(!currentActiveTab){
            toggleTab(tabLinks[0]);
        }

        tabLinks.forEach(tabLink => {
            tabLink.addEventListener('click',function(event){
                if(currentActiveTab === this){
                    return;
                }

                if(currentActiveTab){
                    toggleTab();
                }

                toggleTab(this);
            })
        })

    })
})()