const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function begin(){
    main.style.WepkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    qna.style.WepkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    //main.style.display = "none";
    //qna.style.display = "block";
}