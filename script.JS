function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    if (tabName == "Tab1"){
      document.body.style.background = "url(img/bgT1.jpg)"
    }

    if (tabName == "Tab2"){
      document.body.style.background = "url(img/bgT2.jpg)"
    }

    if (tabName == "Tab3"){
      document.body.style.background = "url(img/bgT3.jpg)"
    }
    
  }
  document.getElementsByClassName("tablinks")[0].click()