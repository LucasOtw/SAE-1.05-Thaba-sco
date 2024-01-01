document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById('overlay');
    if (!getCookie('acceptedCookies')) {
      overlay.style.visibility = 'visible';
      overlay.style.opacity = '1';
    }
  });
  
  function acceptCookies() {
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
    setCookie('acceptedCookies', 'true', 30);
  }