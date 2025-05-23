let shareButton = document.getElementById('share-icon');
let shareIconsWrapper = document.getElementsByClassName("social-media-icons-wrapper")[0];

shareButton.addEventListener("click", () => {
  shareIconsWrapper.classList.toggle("social-media-icons-wrapper")
  shareIconsWrapper.classList.toggle("show")
})