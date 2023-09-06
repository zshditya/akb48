function showRelevantMessage(message) {
    alert(message);
}

document.getElementById('history').addEventListener('click', function () {
    showRelevantMessage('This is the history section of AKB48.');
});

document.getElementById('achievement').addEventListener('click', function () {
    showRelevantMessage('This is the achievement section of AKB48.');
});

document.getElementById('gallery').addEventListener('click', function () {
    showRelevantMessage('This is the gallery section of AKB48.');
});

document.getElementById('philanthropy').addEventListener('click', function () {
    showRelevantMessage('This is the philanthropy section of AKB48.');
});
