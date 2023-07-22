const container = document.querySelector('.container');
const leftSide = document.querySelector('.left');
const rightSide = document.querySelector(".right");

leftSide.addEventListener('mouseenter', () => container.classList.add('mouse-enter-left'));
leftSide.addEventListener('mouseleave', () => container.classList.remove('mouse-enter-left'));

rightSide.addEventListener('mouseenter', () => container.classList.add('mouse-enter-right'));
rightSide.addEventListener('mouseleave', () => container.classList.remove('mouse-enter-right'));