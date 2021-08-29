const blocks = document.querySelectorAll('li.block');

function changeAll(className) {
  blocks.forEach(block => block.classList.toggle(className));
}

function resetAll() {
  blocks.forEach(block => block.classList = ['block']);
}
