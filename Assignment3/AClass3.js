function showPicture() {
    let img = document.createElement("img")
    img.src = document.getElementById("urlText").value;
    let div = document.getElementsByTagName("div") [0];
    div.appendChild(img);
}
function pictureCount() {
  var x = document.images.length;
  document.getElementById("tally").innerHTML = x;
}
function deletePicture() {
  let img = document.getElementById("bigImg");
  img.removeChild(img.childNodes[0]);
}


