document.querySelector('#consulta').addEventListener('submit', function (event) {
  event.preventDefault();
  document.querySelector('#estado-formulario').textContent = 'El formulario todavía no envía emails. Configurá un servicio de envío antes de publicarlo.';
});
document.querySelectorAll('#menu .nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    const menu = document.querySelector('#menu');
    if (menu.classList.contains('show') && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
});
const heroVideo = document.querySelector('#video-portada');
const videoButton = document.querySelector('#control-video');
function updateVideoButton() {
  videoButton.textContent = heroVideo.paused ? 'Reproducir video' : 'Pausar video';
  videoButton.setAttribute('aria-label', (heroVideo.paused ? 'Reproducir' : 'Pausar') + ' video de portada');
}
heroVideo.addEventListener('play', updateVideoButton);
heroVideo.addEventListener('pause', updateVideoButton);
videoButton.addEventListener('click', function () {
  if (heroVideo.paused) heroVideo.play().catch(updateVideoButton);
  else heroVideo.pause();
});
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  heroVideo.autoplay = false;
  heroVideo.pause();
} else {
  heroVideo.muted = true;
  heroVideo.play().catch(updateVideoButton);
}
updateVideoButton();
