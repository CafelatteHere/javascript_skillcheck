function post() {
  const inputForm = document.getElementById("article_text");
  const submitBtn = document.getElementById("submit_btn");
  submitBtn.addEventListener('click', (e) => {
    const XHR = new XMLHttpRequest();
    const formData = new FormData(document.getElementById("new_article"));
    XHR.open("POST", "/articles", true);
    XHR.responseType = "json";
    XHR.send(formData);
   

    XHR.onload = ()=>{
      if (XHR.status != 200) {
        alert (`${XHR.status}: ${XHR.statusText}`);
      }

      const item = XHR.response.article;
      const contentsArea = document.getElementById("contents_area");
      const HTML = `
        <div class="article">
          ${item.text}
        </div>`;
      contentsArea.insertAdjacentHTML("afterbegin", HTML);
      inputForm.value = "";
    };
    e.preventDefault();
  })
}
window.addEventListener('load', post);