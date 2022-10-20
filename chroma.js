
let video, c_out, ctx_out, c_tmp, ctx_tmp;

function init() {
    video = document.getElementById("video")
    c_out = document.getElementById("output-canvas")
    ctx_out = c_out.getContext("2d")

    c_tmp = document.createElement("canvas")
    c_tmp.setAttribute("width",320)
    c_tmp.setAttribute("height",240)
    ctx_tmp = c_tmp.getContext("2d")

    video.addEventListener("play",computeFrame)
}
function computeFrame() {
    ctx_tmp.drawImage(video,0,0,video.videoWidth,video.videoHeight)
    let feame = ctx_tmp.getImageData(0,0,video.videoWidth,video.videoHeight)

    ctx_out.putImageData(frame,0,0)
    setTimeout(computeFrame,0)
}
document.addEventListener("DOMContentLoaded",() =>{
    init();
})

