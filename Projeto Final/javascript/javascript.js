$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
window.addEventListener('DOMContentLoaded', () => {
    const footerContent = document.querySelector('.footer-content');
    const footer = document.querySelector('footer');

    const observer = new MutationObserver(() => {
        if (footerContent.innerText.trim() !== '') {
            footerContent.classList.add('show');
            footer.classList.add('footer-dark');
        } else {
            footerContent.classList.remove('show');
            footer.classList.remove('footer-dark');
        }
    });

    observer.observe(footerContent, { childList: true });

    // Verifica o conteúdo do rodapé quando a página for carregada
    if (footerContent.innerText.trim() !== '') {
        footerContent.classList.add('show');
        footer.classList.add('footer-dark');
    }
});
