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


// Function to fetch the survey count from the server
// async function fetchSurveyCount(pic_emotion, sex, ed_field) {
    
//         fetch('https://fierce-escarpment-41876-06bb2cc451d1.herokuapp.com/getSurveyCount', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ pic_emotion, sex, ed_field })
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log('Survey count:', data.count);
//             sessionStorage.setItem('surveyCount', data.count);
//             return data.count;
//         })
//         .catch(error => {
//             console.error('Error fetching survey count:', error);
//         });
// }

// async function fetchSurveyCount(pic_emotion, sex, ed_field) {
//     try {
//         const response = await fetch('https://fierce-escarpment-41876-06bb2cc451d1.herokuapp.com/getSurveyCount', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ pic_emotion, sex, ed_field })
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('Survey countzzz:', data.count);
//         sessionStorage.setItem('surveyCount', data.count);
//         return data.count;
        
//     } catch (error) {
//         console.error('Error fetching survey count:', error);
//         throw error;  // Rethrow error if you need to handle it higher up
//     }
// }

async function fetchSurveyCount(pic_emotion, sex, ed_field) {
    try {
        const response = await fetch('https://fierce-escarpment-41876-06bb2cc451d1.herokuapp.com/getSurveyCount', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pic_emotion, sex, ed_field })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Survey count:', data.count);
        return data.count;
    } catch (error) {
        console.error('Error fetching survey count:', error);
    }
}



function getImageDir(image_dir, hapCount, sadCount, nonCount)
{
    if (image_dir === 'happy' && hapCount < 10)
    {
        return 'happy'
    }
    else if (sadCount < 10)
    {
        return 'sad'
    }
    else if (nonCount < 10)
    {
        return 'none'
    }

    if (image_dir === 'sad' && sadCount < 10)
    {
        return 'sad'
    }
    else if (hapCount < 10)
    {
        return 'happy'
    }
    else if (nonCount < 10)
    {
        return 'none'
    }

    if (image_dir === 'none' && nonCount < 10)
    {
        return 'none'
    }
    else if (hapCount < 10)
    {
        return 'happy'
    }
    else if (sadCount < 10)
    {
        return 'sad'
    }
}