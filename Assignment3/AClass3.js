function showPicture() {
    let img = document.createElement("img");
    img.src = document.getElementById("urlText").value;
    let div = document.getElementsByTagName("div") [0];
    let id = "bigImg" + document.images.length;
    img.setAttribute("id", id);
    div.appendChild(img);
    let buttonid = "button" + document.images.length;
    let button = document.createElement("button");
    button.setAttribute("onclick", `deletePicturebyid('${id}', '${buttonid}')`);
    button.setAttribute("id", buttonid);
    div.appendChild(button);
    pictureCount();
    checkPictureCount()
}
function pictureCount() {
  var x = document.images.length;
  document.getElementById("tally").innerHTML = x;
}
function deletePicture() {
  let img = document.getElementById("bigImg");
  img.removeChild(img.childNodes[0]);
  pictureCount();
  checkPictureCount()
}

function deletePicturebyid (id, buttonid) {
  document.getElementById(id).remove();
  document.getElementById(buttonid).remove();
  pictureCount();
  checkPictureCount()
}
function checkPictureCount() {
  var x = document.images.length;
  if (x < 1){
    document.getElementById("secondButton").style.visibility="hidden";
  }
  else{
    document.getElementById("secondButton").style.visibility="visible";
  }
}
