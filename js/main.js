let leon, canvas, ctx;

const sw = 1200;
const sh = 300;
const pixelRatio = 2;

function checkTime(i) { //将0-9的数字前面加上0，例1变为01
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function cutDown() {

    const dayEnd = new Date('2058-10-08');
    const dayStart = new Date();
    return Math.ceil((dayEnd - dayStart) / 1000 / 3600 / 24)
}

function init() {

    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");

    canvas.width = sw * pixelRatio;
    canvas.height = sh * pixelRatio;
    canvas.style.width = sw + 'px';
    canvas.style.height = sh + 'px';
    ctx.scale(pixelRatio, pixelRatio);

    leon = new LeonSans({
        //text: 'cut down :',
        color: [],
        size: 100,
        weight: 500
    });
    leon.text = "    CUT DOWN    \n" +"    "+ cutDown() + " DAYS    ";
    requestAnimationFrame(animate);

    let i, total = leon.drawing.length;
    for (i = 0; i < total; i++) {
        TweenMax.fromTo(leon.drawing[i], 3, {
            value: 0
        }, {
            delay: i * 0.05,
            value: 1,
            ease: Power4.easeOut
        });
    }

}

function animate(t) {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, sw, sh);

    const x = (sw - leon.rect.w) / 2;
    const y = (sh - leon.rect.h) / 2;
    leon.position(x, y);

    leon.drawColorful(ctx);
    leon.grid(ctx);
    leon.box(ctx);
    leon.point(ctx);
}


window.onload = () => {
	init();
};
