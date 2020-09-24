function post() {
  const inputForm = document.getElementById("article_text");
  const submitBtn = document.getElementById("submit_btn");
  submitBtn.addEventListener('click', (e) => {
    const XHR = new XMLHttpRequest();
    const formData = new FormData(document.getElementById("new_article"));
    XHR.open('POST', '/articles', true);
    XHR.responseType = 'json';
    XHR.send(formData);
    

    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Произошла ошибка ${XHR.status}: ${XHR.statusText}`);
      }
      const inputForm = document.getElementById('article_text');
      const contents = document.getElementById('contents_area');
      const article = XHR.response.article;
      const HTML = `
        <div class="article">
          ${article.text}
        </div>`
      contents.insertAdjacentHTML('afterBegin', HTML);
      inputForm.value = "";
    };

    e.preventDefault();
  });
}

window.addEventListener('load', post);