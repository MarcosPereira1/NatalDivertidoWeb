document.getElementById('surpriseButton').addEventListener('click', function() {
    var surprise = document.getElementById('surprise');
    if (surprise.style.display === 'none') {
        surprise.style.display = 'block';
    } else {
        surprise.style.display = 'none';
    }
});
