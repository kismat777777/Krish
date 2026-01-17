let likes = 0;

const units = [
  { name: "पाठ १ : समूह", video: "0AUyGv0rKRA" },
  { name: "पाठ २ : कर", video: "cPO_aCqY2fQ" },
  { name: "पाठ ३ : कमिसन र लाभांश", video: "toDIOdlpAJo" },
  { name: "पाठ ४ : घर्यासी अङ्कगणित", video: "-kAhXeukfT8" },
  { name: "पाठ ५ : क्षेत्रफल", video: "9H1pt6kd8kg" },
  { name: "पाठ ६ : प्रिज्म", video: "9jGpW3hGcuM" },
  { name: "पाठ ७ : बेल्ना र गोला", video: "kA-ZTe7Ih-M" },
  { name: "पाठ ८ : अनुक्रम र श्रेणी", video: "zXOy4MobYxM" },
  { name: "पाठ ९ : खण्डीकरण", video: "uo-7-FNYUzM" },
  { name: "पाठ १० : लसमस", video: "pU4F7bzGQfY" },
  { name: "पाठ ११ : रेखीय योजना", video: "jQqY7IKmAHo" },
  { name: "पाठ १२ : घाताङ्क", video: "tiaaZ4RuUF8" },
  { name: "पाठ १३ : त्रिभुज", video: "QR45iIzb2XQ" },
  { name: "पाठ १४ : चतुर्भुज", video: "uOgZTAHCi1k" },
  { name: "पाठ १५ : रचना", video: "wvKJDqrCCpk" },
  { name: "पाठ १६ : वृत्त", video: "XylravmIyss" },
  { name: "पाठ १७ : तथ्याङ्कको वर्गीकरण तथा प्रस्तुतिकरण", video: "yw-LgPhU4kE" },
  { name: "पाठ १८ : केन्द्रीय प्रवृत्तिको मापन", video: "mOfOhrvt-Dk" },
  { name: "पाठ १९ : सम्भाव्यता", video: "V73KmiXXFwQ" },
  { name: "पाठ २० : त्रिकोणमिति", video: "jagXZBBcvc4" },
];

const unitContainer = document.getElementById("unitContainer");

units.forEach((unit, index) => {
  const card = document.createElement("div");
  card.className = "unit-card";
  card.innerHTML = `<div class="unit-header">${unit.name}</div>
                    <ul class="subunit" id="unit${index+1}">
                      <li onclick="playVideo('https://www.youtube.com/embed/${unit.video}','${unit.name}')">Exercise</li>
                    </ul>`;
  card.querySelector(".unit-header").addEventListener("click", () => toggleUnit(index + 1));
  unitContainer.appendChild(card);
});

function toggleUnit(num) {
  const unit = document.getElementById("unit" + num);
  unit.style.display = unit.style.display === "block" ? "none" : "block";
}

function playVideo(url, unitName) {
  document.getElementById("unitContainer").style.display = "none";
  const player = document.getElementById("videoPlayer");
  player.src = url + "?autoplay=1";
  document.getElementById("videoSection").style.display = "block";
  
  // Update comment mail
  const commentBtn = document.getElementById("commentBtn");
  commentBtn.href = `mailto:educationgurunp@gmail.com?subject=Comment on ${unitName}&body=Video बारे आफ्नो प्रतिक्रिया लेख्नुहोस्`;
}

function closeVideo() {
  document.getElementById("videoPlayer").src = "";
  document.getElementById("videoSection").style.display = "none";
  document.getElementById("unitContainer").style.display = "grid";
}

function likeVideo() {
  likes++;
  document.getElementById("likeCount").innerText = likes;
}