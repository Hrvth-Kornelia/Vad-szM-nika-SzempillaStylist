
// Mindig frissült CSS-s
document.addEventListener("DOMContentLoaded", () => {
  const css = document.getElementById("main-css");
  if (!css) return;

  const baseHref = css.getAttribute("href").split("?")[0];
  css.setAttribute("href", baseHref + "?v=" + Date.now());
});

console.log("betolthhhhhhhhhhhh");

function copytoclipboard(elementID){
    const text=document.getElementById(elementID).innerText;
    navigator.clipboard.writeText(text).then(()=>{
        alert('Másolva: ' + text);
    
    });
}
