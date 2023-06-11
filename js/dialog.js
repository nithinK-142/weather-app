const dialog = document.getElementById('dialog-open');
const about = document.getElementById('about');

dialog.addEventListener('click', () => {
    document.body.style.filter = "blur(5px)";
    about.showModal();
});

document.addEventListener('click', (event) => {
    if (!dialog.contains(event.target)) {
        document.body.style.filter = "none";
        about.close();
    }
});
