document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar');
    const allNavItems = document.querySelectorAll('.nav-link');
    const navList = document.querySelector('.navbar-collapse');
    const footerYear = document.querySelector('.footer-year');

    const email = document.querySelector('#e-mail');
    const textarea = document.querySelector('#textarea');
    const sendBtn = document.querySelector('.btn-light');
    const popup = document.querySelector('.popup');
    const closePopupBtn = document.querySelector('.close-popup');


    // dodawanie cienia na menu
    function addShadow() {
        if (window.scrollY >= 60 && navList.classList.contains('show')) {
            nav.classList.add('shadow-bg')
        } else if (window.scrollY >= 235) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    //sprawdzanie formularza kontaktowego
    function showError(input) {
        const formBox = input.parentElement;
        formBox.classList.add('show-error');
    }

    function clearError(input) {
        const formBox = input.parentElement;
        formBox.classList.remove('show-error');
    }

    function checkForm(input) {
        input.forEach(el => {
            if (el.value === '') {
                showError(el)
            } else {
                clearError(el)
            }
        })
    }

    function checkEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(email.value)) {
            clearError(email)
        } else {
            showError(email)
        }
    }

    function checkErrors() {
        const allInputs = document.querySelectorAll('.form-box');
        let errorCount = 0;

        allInputs.forEach(el => {
            if (el.classList.contains('show-error')) {
                errorCount++
            }
        });

        if (errorCount === 0) {
            popup.classList.add('show-popup');
        }
    }

    function closePopup() {
        email.value = '';
        textarea.value = '';
        popup.classList.remove('show-popup');
    }

    //aktualny rok w footerze
    const currentYear = () => {
        const year = (new Date).getFullYear();
        footerYear.innerText = year;
    }


    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))
    window.addEventListener('scroll', addShadow);
    sendBtn.addEventListener('click', e => {
        checkForm([email, textarea]);
        checkEmail(email);
        checkErrors();
    });
    closePopupBtn.addEventListener('click', closePopup);
    currentYear();
});