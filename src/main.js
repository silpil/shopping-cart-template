const cart = document.getElementById('cart');
const modal = document.getElementById('modal');
const checkout = document.getElementById('checkout');
const changeStep = document.getElementsByClassName('change-step');

const onChangeStep = (step) => {
  switch (step) {
    case 'cart':
      cart.classList.add('active');
      checkout.classList.remove('active');
      modal.scroll(0, 0);
      break;
  
    case 'checkout':
      checkout.classList.add('active');
      cart.classList.remove('active');
      modal.scroll(0, 0);
      break;
  }
}

for (let element of changeStep) {
  element.addEventListener('click', () => {
    onChangeStep(element.dataset.step);
  }, false);
}

