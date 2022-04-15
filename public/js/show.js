function showWork() {
    // show hidden elements if display is none, else hide elements
    var sf = document.getElementById("stanford");
    if (sf.style.display === "none") {
      sf.style.display = "block";
    } else {
      sf.style.display = "none";
    }
    var uc = document.getElementById("unitycouncil");
    if (uc.style.display === "none") {
      uc.style.display = "block";
    } else {
      uc.style.display = "none";
    }
  }
  


function showProject() {
  // show hidden elements if display is none, else hide elements
  var zoo = document.getElementById("zooGame");
  if (zoo.style.display === "none") {
    zoo.style.display = "block";
  } else {
    zoo.style.display = "none";
  }
  var board = document.getElementById("boardGame");
  if (board.style.display === "none") {
    board.style.display = "block";
  } else {
    board.style.display = "none";
  }
  var website = document.getElementById("website");
  if (website.style.display === "none") {
    website.style.display = "block";
  } else {
    website.style.display = "none";
  }
}