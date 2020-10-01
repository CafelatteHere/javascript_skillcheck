function post() {
  const inputForm = document.getElementById("article_text");
  const submitBtn = document.getElementById("submit_btn");
  submitBtn.addEventListener('click', (e) => {
    const XHR = new XMLHttpRequest();
    const formData = new FormData(document.getElementById("new_article"));
    XHR.open("POST", "/articles", true);
    XHR.responseType = "json";
    XHR.send(formData);

    XHR.onload = () => {
      alert(`アラートを表示します： ${XHR.status}: ${XHR.statusText}`);
      const item = XHR.response.article;
      const contentsArea = document.getElementById("contents_area");
      const articleText = document.getElementById("article_text");
      const HTML = `
        <div class="article">
          ${ item.text }
        </div>`;
      contentsArea.insertAdjacentHTML("afterbegin", HTML);
      articleText.value = "";
    };

    e.preventDefault();
  })
  
}

window.addEventListener('load', post);