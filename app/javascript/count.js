function count () {
  const inputForm = document.getElementById("article_text");
  const charNum = document.getElementById("char_num");
  inputForm.addEventListener("keyup", ()=>{
    
    charNum.innerHTML = `${inputForm.value.length}文字`;
  });

  const submitBtn = document.getElementById("submit_btn");
  submitBtn.addEventListener("click", ()=> {
    charNum.innerHTML = `0文字`;
  });
}

window.addEventListener('load', count);