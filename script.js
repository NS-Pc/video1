let videobox = document.querySelector("#videobox video");
let p = document.querySelector("#videobox p");
let videos = document.querySelectorAll("#video");
videos.forEach((video) => {
  video.addEventListener("click", () => {
    p.innerText = video.children[2].innerText;
    videobox.src = video.children[1].src;
  });
});
