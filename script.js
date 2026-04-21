document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');
        const isActive = accordionItem.classList.contains('active');

        // 1. Close all other open items
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = 0;
                item.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
            }
        });

        // 2. Toggle current item
        if (isActive) {
            accordionItem.classList.remove('active');
            accordionContent.style.maxHeight = 0;
            header.setAttribute('aria-expanded', 'false');
        } else {
            accordionItem.classList.add('active');
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            header.setAttribute('aria-expanded', 'true');
        }
    });
});
