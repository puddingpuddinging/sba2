const thumbnails = document.querySelectorAll('.video-thumbnails img');
const video = document.querySelector('.video-youtube iframe');
const videoInfo = document.querySelector('.video-info');

thumbnails.forEach(function(thumbnail) {
 thumbnail.addEventListener('click', function() {
   const videoId = this.getAttribute('data-video-id');
   const thumbnailSrc = this.getAttribute('src');
   const videoTitle = this.getAttribute('alt');
   const videoDescription = this.getAttribute('data-description');
   video.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
   videoInfo.querySelector('h2').textContent = videoTitle;
   videoInfo.querySelector('p').textContent = videoDescription;
   thumbnails.forEach(function(thumbnail) {
     thumbnail.classList.remove('active');
   });
   this.classList.add('active');
 });
});



const knowMoreLinks = document.querySelectorAll('.know-more-link');

knowMoreLinks.forEach(function(link) {
  const moreContent = link.nextElementSibling;

  link.addEventListener('click', function(event) {
    event.preventDefault();
    moreContent.style.display = 'block';
  });

  moreContent.addEventListener('click', function() {
    moreContent.style.display = 'none';
  });
});
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>