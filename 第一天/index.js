const list = document.querySelectorAll('.nav li');
console.log(list);
list.forEach((item) => {
  item.addEventListener('click', function () {
    console.log(this);
    //   干掉所有人
    document.querySelector('.active').classList.remove('active');
    this.classList.add('active');
  });
});
