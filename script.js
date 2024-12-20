document.querySelectorAll('.piece').forEach(piece => {
    piece.addEventListener('click', () => {
      if (!piece.style.transform || piece.style.transform === 'rotateY(0deg)') {
        piece.style.transform = 'rotateY(180deg)';
      } else {
        piece.style.transform = 'rotateY(0deg)';
      }
    });
  });
  
