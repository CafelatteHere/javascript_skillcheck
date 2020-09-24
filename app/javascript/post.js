function post() {
  const inputForm = document.getElementById("article_text");
  const submitBtn = document.getElementById("submit_btn");
  submitBtn.addEventListener('click', (e) => {
    console.log(inputForm.value);
    e.preventDefault();
  });
}

window.addEventListener('load', post);