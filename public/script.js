const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const photoContainer = document.getElementById('photo-container');
const captureButton = document.getElementById('capture');

// Akses webcam
navigator.mediaDevices.getUser Media({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error