const video1 = document.getElementById('main__video-1');
const video2 = document.getElementById('main__video-2');
const video3 = document.getElementById('main__video-3');
const video4 = document.getElementById('main__video-4');
const video5 = document.getElementById('main__video-5');
const video6 = document.getElementById('main__video-6');
const video7 = document.getElementById('main__video-7');
const video8 = document.getElementById('main__video-8');

let mediaRecorder;

async function init() {

    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        });
        startWebcam(stream);
    } catch (err) {
        console.log('Error retrieving a media device.');
        console.log(err);
    }
}

function startWebcam(stream) {
    window.stream = stream;
    video1.srcObject = stream;

    setTimeout(() => {
        video2.srcObject = stream;
    }, 1000)
    setTimeout(() => {
        video3.srcObject = stream;
    }, 2000)
    setTimeout(() => {
        video4.srcObject = stream;
    }, 3000)
    setTimeout(() => {
        video5.srcObject = stream;
    }, 4000)
    setTimeout(() => {
        video6.srcObject = stream;
    }, 5000)
    setTimeout(() => {
        video7.srcObject = stream;
    }, 6000)
    setTimeout(() => {
        video8.srcObject = stream;
    }, 7000)
}
init();