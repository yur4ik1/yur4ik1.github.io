document.addEventListener('DOMContentLoaded', () => {
    // hero navigation
    const chaptersBtn = document.querySelector('.chapters-btn');
    const chaptersList = document.querySelector('.chapters-list');
    const navContainer = document.querySelector('.select-container');

    const toggleClasses = () => {
        chaptersBtn.classList.toggle('act');
        chaptersList.classList.toggle('act');
    };

    chaptersBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleClasses();
    });

    document.addEventListener('click', (event) => {
        if (!navContainer.contains(event.target)) {
            chaptersBtn.classList.remove('act');
            chaptersList.classList.remove('act');
        }
    });

    // TOC items will be generated
    const tocList = document.getElementById('toc-list');
    const headers = document.querySelectorAll('.gude__drag-drop-area h2');

    headers.forEach((header, index) => {
        const id = `section-${index}`;
        header.id = id;

        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#${id}">${header.innerText}</a>`;
        tocList.appendChild(listItem);
    });

    document.querySelectorAll('#toc-list a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }

            document.querySelectorAll('#toc-list a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    window.addEventListener('scroll', function () {
        let currentActive = null;

        headers.forEach(header => {
            const headerTop = header.getBoundingClientRect().top;

            if (headerTop <= window.innerHeight / 2 && headerTop >= 0) {
                currentActive = header;
            }
        });

        if (currentActive) {
            const id = currentActive.id;
            const tocLink = document.querySelector(`#toc-list a[href="#${id}"]`);

            document.querySelectorAll('#toc-list a').forEach(link => link.classList.remove('active'));
            if (tocLink) {
                tocLink.classList.add('active');
            }
        }
    });

    window.addEventListener('scroll', updateProgressBar);
    window.addEventListener('resize', updateProgressBar);

    function updateProgressBar() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;

        const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
        document.getElementById('progress-bar').style.width = scrolled + '%';
    }

    updateProgressBar();

    const toggleBtn = document.getElementById('toggle-btn');
    toggleBtn.addEventListener('click', function () {
        tocList.classList.toggle('show');
        this.classList.toggle('flip');
    });
});


document.querySelectorAll('pre code').forEach((block) => {
    block.textContent = block.textContent.trim();
});


