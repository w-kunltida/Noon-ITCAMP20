document.addEventListener('DOMContentLoaded', function() {
    const changeTextBtn = document.getElementById('changeTextBtn');
    const heading = document.querySelector('h1');

    changeTextBtn.addEventListener('click',function() {
      heading.textContent = 'Welcome';
      window.location.href = 'agian.html'
    });
});