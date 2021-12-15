function showdiv(mainID, other1, other2, other3, kart, base) {
  const alldivs = [mainID, other1, other2, other3, kart];
  let score = 0;    // keeps a check of how many closed divs are there
  for (let i=0; i<alldivs.length; i++) {
    var x = document.getElementById(alldivs[i]);
    // turns on the div at index 0 in the above list and hides rest
    if (i==0) {
      // turn on the div if its hidden or vice versa
      if (x.style.display == "none") {
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
