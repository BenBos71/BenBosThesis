function toggleDropdown() {
    var dropdownMenu = document.getElementById("myDropdown");
    if (dropdownMenu.style.display === "none") {
        dropdownMenu.style.display = "block";
    }
    else {
        dropdownMenu.style.display = "none";
    }
}

function selectOption(optionText) {
    var dropdownButton = document.getElementById("dropbtn");
    dropdownButton.textContent = optionText;

    var dropdownMenu = document.getElementById("myDropdown");
    dropdownMenu.style.display = "none"; 
    
    document.getElementById("selectedOption").value = optionText;
}

function validateForm(event) {
    var selectedOption = document.getElementById("selectedOption").value;
    var radioOption = document.getElementsByName("radioOption");
    var checked = false;
    if (!selectedOption) {
        alert("Please select an option from the dropdown.");
        event.preventDefault();
    }
    else {
        for (var i = 0; i < radioOption.length; i++) {
            if (radioOption[i].checked) {
                selectedValue = radioOption[i].value;
                checked = true;
                break;
            }
        }
        if (checked == false)
        {
            alert("Please select a valence.");
            event.preventDefault();
        }
        else
        {
            next(selectedValue);
        }
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}