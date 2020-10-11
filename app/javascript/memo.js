function memo() {
 const submit = document.getElementById("submit");
 submit.addEventListener("click", (e) => {
   const formData = new FormData(document.getElementById("form"));
   const XHR = new XMLHttpRequest();
   XHR.open("POST", "/posts", true);
   XHR.responseType = "json";
   XHR.send(formData);
   XHR.onload = () => {
     if (XHR.status != 200) {
       alert(`Error ${XHR.status}: ${XHR.statusText}`);
       return null;
     }
     const item = XHR.response.post;
     const list = document.getElementById("list");
     const formText = document.getElementById("content");
     const formName = document.getElementById("name");
     const HTML = `
       <div class="post" data-id=${item.id}>
         <div class="post-date">
           名前:${item.name} 投稿日時：${item.created_at}
         </div>
         <div class="post-content">
         ${item.content}
         </div>
         <div>
           <img src = ${item.avatar.url}>
         </div>
       </div>`;
     list.insertAdjacentHTML("afterend", HTML);
     formName.value = item.name;
     formText.value = "";
   };
   e.preventDefault();
 });
}
window.addEventListener("load", memo);
