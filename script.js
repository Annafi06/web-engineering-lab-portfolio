// Toggle dark mode and light mode
const themeIcon = document.getElementById('theme-icon');

themeIcon.addEventListener('click', function () {
    document.body.classList.toggle('light-mode');

    // Apply light mode styles to navbar and other elements
    document.querySelector('.navbar').classList.toggle('light-mode');
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.toggle('light-mode');
    });
    document.querySelector('.logo').classList.toggle('light-mode');
    document.querySelector('.hire-me').classList.toggle('light-mode');

    // Change icon based on mode
    if (document.body.classList.contains('light-mode')) {
        themeIcon.src = 'moon.png';  // Change to moon icon for dark mode
    } else {
        themeIcon.src = 'sun.png';  // Change to sun icon for light mode
    }
});
