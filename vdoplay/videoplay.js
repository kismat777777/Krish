






// Toggle unit
function toggleUnit(el) {
  const chapters = el.nextElementSibling;
  chapters.style.display =
    chapters.style.display === "block" ? "none" : "block";
}

// Load video
function loadVideo(chapter) {
  let url = "";
  
  const videos = {
    u1c1: "WvRJyqCbXwI",
    u1c2: "Y92PDmHbTxwI",
    u1c3: "654if6Sl1FA",
    u2c1: "J4n62q2KFzk",
    u2c2: "d3co-lAN09w",
    u2c3: "-FD3Z_G0lcg",
    u2c4: "NQ-Fy3TVgPc",
    u3c1: "gxUiIHVmImA",
    u3c2: "5jM_ktwVjKo",
    u3c3: "8t4X3g-532s",
    u4c1: "r06mAWBG3UA",
    u4c2: "1d3Gn1tzuwE"
  };
  
  url = `https://www.youtube.com/embed/${videos[chapter]}?autoplay=1`;
  
  document.getElementById("videoFrame").src = url;
  document.getElementById("videoSection").classList.remove("hidden");
  document.getElementById("unitList").style.display = "none";
}

// Exit video
function exitVideo() {
  document.getElementById("videoFrame").src = "";
  document.getElementById("videoSection").classList.add("hidden");
  document.getElementById("unitList").style.display = "block";
}

// Like
let liked = false;
let count = 0;

document.getElementById("likeBtn").onclick = () => {
  liked = !liked;
  count += liked ? 1 : -1;
  document.getElementById("likeCount").innerText = count;
  document.getElementById("likeBtn").classList.toggle("liked");
};

// Subscribe
function subscribeChannel() {
  window.open("https://youtube.com/@educationguru.7", "_blank");
}

// Dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}