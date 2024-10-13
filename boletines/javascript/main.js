let links = document.querySelectorAll(".close");


links.forEach(function(link){

  link.addEventListener("click",function(evento){
    evento.preventDefault();
    let content = document.querySelector('.content');
    content.classList.remove("animate__backInDown");
    content.classList.remove("animate__animated");

    content.classList.add("animate__backOutUp");
    content.classList.add("animate__animated");

    setTimeout(function(){
        location.href = "/";
    }, 600)

    return false;
  });
});
