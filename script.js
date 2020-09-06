btn = document.querySelector(".btn1");
form = document.querySelector("form");
box = document.querySelector(".box");

form.addEventListener("submit" , e =>{
    e.preventDefault();
    const nm = form.Name.value.trim();
    html = `  <h2 class="d-flex justify-content-center"  style="font-family:Rajdhani, sans-serif; font-weight:bold; color: Red;">Thank You ${nm}</h2>`
    box.innerHTML +=html;
    form.reset()
    setTimeout(window.location.replace("sayan191.github.io/hello1") , 3000);
});
