   // chèn chữ bằng DOM.createElement()

   var h1Dom = document.createElement("h1");
   h1Dom.title = "this is dom createElement";
   h1Dom.className = "text-center";
   h1Dom.innerText = "khoa ne";
   document.body.appendChild(h1Dom);
   
   const reactH1 = React.createElement("h1",{
       title: "title",
       className: "text-center"
   },"khoa");
   console.log(reactH1);