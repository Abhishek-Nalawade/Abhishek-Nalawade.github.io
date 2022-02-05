function showdiv(mainID, other1, other2, other3, kart, base) {
  const alldivs = [mainID, other1, other2, other3, kart];
  let score = 0;    // keeps a check of how many closed divs are there
  for (let i=0; i<alldivs.length; i++) {
    var x = document.getElementById(alldivs[i]);
    // turns on the div at index 0 in the above list and hides rest
    if (i==0) {
      // turn on the div if its hidden or vice versa
      if (!x.style.display || x.style.display == "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
        score++;
      }
    } else {
      x.style.display = "none";
      score++;
    }
  }
  // if all divs are hidden then turn on the base div
  var x = document.getElementById(base);
  if (score==5) {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// function to expand and collapse the courses list
function expandcollapse(mainID, activity) {
  const alldivs = [mainID, activity];
  for (let i=0; i<alldivs.length; i++) {
    var x = document.getElementById(alldivs[i]);
    // increase the height of div if its hidden or vice versa
    if (i==0){
      if (!x.style.height || x.style.height == "0px") {
        x.style.height = "440px";
      } else {
        x.style.height = "0px";
      }
    } else {          // else statement for checking displaying the activity div
      if (document.getElementById(alldivs[i-1]).style.height == "0px") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
  }
}
