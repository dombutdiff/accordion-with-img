document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const accordionItem = header.parentElement;
                const accordionContent = accordionItem.querySelector('.accordion-content');
                const isItemActive = accordionItem.classList.contains('active');

                // 1. (Optional) Close all other open items for a true single-select accordion
                document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
                    if (activeItem !== accordionItem) {
                        activeItem.classList.remove('active');
                        activeItem.querySelector('.accordion-content').style.maxHeight = 0;
                        activeItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
                    }
                });

                // 2. Toggle active class for arrow flip and visibility state
                accordionItem.classList.toggle('active');

                // 3. Handle smooth height animation
                if (accordionItem.classList.contains('active')) {
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"; // Dynamically set height
                    header.setAttribute('aria-expanded', 'true');
                } else {
                    accordionContent.style.maxHeight = 0; // Collapse
                    header.setAttribute('aria-expanded', 'false');
                }
            });
        });