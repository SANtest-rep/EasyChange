// const filter_btn = document.getElementById('filter-btn');
// const cut_btn = document.getElementById('cut-btn');
// const rotate_btn = document.getElementById('rotate-btn');
// const text_btn = document.getElementById('text-btn');


// filter_btn.addEventListener('click', function handleClick() {
//     filter_btn.classList.remove("active");
// });


function toggleItem(elem) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener("click", function(e) {
        let current = this;
        for (let i = 0; i < elem.length; i++) {
          if (current != elem[i]) {
            elem[i].classList.remove('active');
          }  else {
            current.classList.add('active')
          }
        }
        e.preventDefault();
      });
    };
  }
  toggleItem(document.querySelectorAll('.filters'));