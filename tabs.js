


const tabChange = (event, tabName) => {
    let i, tabpanels, tabButtons;
    tabpanels = Array.from(document.getElementsByClassName("tabpanels")).forEach(
      element => (element.style.display = "none")
    );
  
    tabButtons = document.getElementsByClassName("tab-buttons");
    for (i = 0; i < tabButtons.length; i++) {
      tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  }
  document.getElementById("default").click();
  

  