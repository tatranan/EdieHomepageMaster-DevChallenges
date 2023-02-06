window.addEventListener('load', () => {
    const buttonNav = document.querySelector('#nav-mobile-hambuger .open');
    const nav = document.querySelector('.nav');
    const navLink = document.querySelectorAll('.nav-link');
    buttonNav.addEventListener('click', (e) => {
        e.preventDefault();
        const closeButton = document.querySelector('#nav-mobile-close');
        buttonNav.style.display = 'none';
        closeButton.style.display = 'block';

        nav.style.display = 'block';
        closeButton.addEventListener('click', (e) => {
            e.preventDefault();
            nav.style.display = 'none';
            buttonNav.style.display = 'block';
            closeButton.style.display = 'none';
        })
    })
    navLink.forEach(link => {
        link.addEventListener('click', () => {
            const width = window.innerWidth;
            if (width <= 375) {
                nav.style.display = 'none';
                buttonNav.style.display = 'block';

            }
        })
    })
    window.addEventListener('resize', (event) => {
        let height = window.innerHeight;
        let width = window.innerWidth;
        console.log(height, width);
        if (width > 375) {
            console.log(1);
            nav.style.display = "block";
            buttonNav.style.display = 'none';
        } else {
            nav.style.display = "none";
            buttonNav.style.display = "block";
        }
    })
})

