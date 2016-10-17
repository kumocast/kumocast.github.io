document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelectorAll('.post-shownotes a').forEach(function(anchor) {
    anchor.setAttribute('target', '_blank');
  })
});
