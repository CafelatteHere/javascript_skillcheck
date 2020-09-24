function post () {
  const submitBtn = document.querySelector("#submit_btn");
  const articleText = document.querySelector("#article_text");
  submitBtn.addEventListener("click", (e)=>{
    const formData = new FormData(document.getElementById("new_article"));
    const XHR = new XMLHttpRequest();
    XHR.open('POST', '/articles', true);
    XHR.responseType = 'json';
    XHR.send(formData);
    

    XHR.onload =() => {
      if (XHR.status != 200) {
        alert(`{XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const item = XHR.response.article;
      const form = document.querySelector("#article_text")
      const Articles = document.querySelector("#contents_area")
      const HTML = `
      <div class="article">
        ${item.text}
      </div>`;
      Articles.insertAdjacentHTML("afterbegin", HTML);
      form.value = "";
    };
    e.preventDefault();
  });
}

window.addEventListener("load", post);