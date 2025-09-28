document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.system-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const arabicDesc = card.querySelector('.arabic-desc');
            const englishDesc = card.querySelector('.english-desc');

            if (arabicDesc.style.display === 'block') {
                arabicDesc.style.display = 'none';
                englishDesc.style.display = 'block';
            } else {
                arabicDesc.style.display = 'block';
                englishDesc.style.display = 'none';
            }
        });
    });
});