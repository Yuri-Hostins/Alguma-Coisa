const cartoes = document.querySelectorAll('.cartao-perfil');

const gifs = {
  scott: 'scott_novo.gif',
  allison: 'allison_novo.gif',
  stiles: 'stiles_novo.gif',
  lydia: 'lydia_novo.gif'
};

cartoes.forEach(cartao => {
  const cartaoId = cartao.id;
  const gif = cartao.querySelector('.perfil-foto');
  const originalSrc = gif.src;

  cartao.addEventListener('mouseenter', () => {
    gif.src = gifs[cartaoId] || originalSrc;
  });

  cartao.addEventListener('mouseleave', () => {
    gif.src = originalSrc;
  });
});
