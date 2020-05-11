// Write your code here
window.onload

var slideShowInterval;
var millisPerSlide = 1000;


    var img1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG";
    var img2 = "https://www.ecestaticos.com/imagestatic/clipping/1b2/113/1b21131793b5003905419eb329e1692f/el-cafe-no-es-malo-pero-hasta-que-cantidad-se-puede-tomar.jpg?mtime=1531916182";
    var img3 = "https://estaticos.miarevista.es/media/cache/760x570_thumb/uploads/images/article/591c48f75bafe80ab23c986a/int-cafe.jpg";
    var img4 = "https://www.dw.com/image/44469116_303.jpg";
    var img5 = "https://as.com/deporteyvida/imagenes/2018/02/16/portada/1518787733_123354_1518787790_noticia_normal.jpg";
    var imgArray = [img1, img2, img3, img4, img5];

    count = 0;


    autoBack = document.getElementById("autoBack");
    autoBack.addEventListener("click", autoBackFunction);

    back = document.getElementById("back");
    back.addEventListener("click", backFunction);

    stop = document.getElementById("stop");
    stop.addEventListener("click", stopFunction);

    foward = document.getElementById("foward");
    foward.addEventListener("click", fowardFunction);

    autoFoward = document.getElementById("autoFoward");
    autoFoward.addEventListener("click", autoFowardFunction);

    carruselIMG = document.querySelector("img");
    carruselIMG.src = imgArray[0];
    console.log(imgArray[0]);


function backFunction() {
    count--;
    if (count < 0) {
        count = imgArray.length - 1;
    }
    carruselIMG.src = imgArray[count];
}

function fowardFunction() {
    count++;
    if (count > imgArray.length - 1) {
        count = 0;
    }
    carruselIMG.src = imgArray[count];
}

function autoBackFunction() {
    stopFunction();
    slideShowInterval = setInterval(backFunction, millisPerSlide);
}

function autoFowardFunction() {
    stopFunction();
    slideShowInterval = setInterval(fowardFunction, millisPerSlide)
}

function stopFunction() {

    clearInterval(slideShowInterval);



    }