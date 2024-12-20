document.querySelectorAll('.puzzle-piece').forEach(piece => {
    piece.addEventListener('click', () => {
        piece.classList.toggle('flipped');
        if (!piece.querySelector('.back')) {
            const back = document.createElement('div');
            back.classList.add('back');
            back.innerHTML = `
                <strong>${piece.dataset.language}</strong>: <br>${piece.dataset.meaning}
            `;
            piece.appendChild(back);
        }
    });
});
