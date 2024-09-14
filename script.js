const themeIcon = document.getElementById('theme-icon');

themeIcon.addEventListener('click', function () {
    document.body.classList.toggle('light-mode');

    document.querySelector('.navbar').classList.toggle('light-mode');
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.toggle('light-mode');
    });
    document.querySelector('.logo').classList.toggle('light-mode');
    document.querySelector('.hire-me').classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        themeIcon.src = 'moon.png';
    } else {
        themeIcon.src = 'sun.png';
    }
});
