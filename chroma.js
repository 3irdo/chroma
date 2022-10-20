
let video, video2, c_out, ctx_out, c_tmp, ctx_tmp;

function init() {
    video = document.getElementById('video');
    c_out = document.getElementById('output-canvas');
    ctx_out = c_out.getContext('2d');

    video2 = document.createElement('video');
    video2.src = '/video2.mp4';
    video2.muted = true;
    video2.autoplay = true;
    video2.loop = true;

    c_tmp = document.createElement('canvas');
    c_tmp.setAttribute('width',320);
    c_tmp.setAttribute('height',240);
    ctx_tmp = c_tmp.getContext('2d');

    video.addEventListener('play',computeFrame);
}
function computeFrame() {
    ctx_tmp.drawImage(video,0,0,video.videoWidth,video.videoHeight);
    let frame = ctx_tmp.getImageData(0,0,video.videoWidth,video.videoHeight);

    ctx_tmp.drawImage(video2,0,0,video2.videoWidth,video2.videoHeight);
    let frame2 = ctx_tmp.getImageData(0,0,video2.videoWidth,video2.videoHeight);


    for(let i=0;i<frame.data.length/4;i++) {
        let r = frame.data[i * 4 + 0];
        let g = frame.data[i * 4 + 1];
        let b = frame.data[i * 4 + 2];
        if(r > 71 && r < 91 && g > 211 && g < 231 && b > 55 && b < 75) {
            frame.data[i * 4 + 0] = frame2.data[i * 4 + 0]; //R
            frame.data[i * 4 + 1] = frame2.data[i * 4 + 1]; //G
            frame.data[i * 4 + 2] = frame2.data[i * 4 + 2]; //B
        }
    }

    ctx_out.putImageData(frame,0,0);
    setTimeout(computeFrame,0);
}
document.addEventListener('DOMContentLoaded',() =>{
    init();
});

alert('hola');