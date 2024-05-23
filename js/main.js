var sAge;
var sSex;
var sentence_index = 0;
var image_num = 2;
var emotions = []

// Array of sentences
var sentences = [
    "Time seemed to stand in that moment",
    "Silence enveloped the room",
    "The old oak tree stood tall, its branches reaching towards the sky, casting long shadows across the water",
    "Raindrops tapped against the windowpane",
    "Footsteps echoed in the alleyway",
    "The wind whispered through the leaves",
    "Shadows lengthened as the sun dipped below the horizon, transforming the world with the approach of evening",
    "The moon cast a light over the landscape",
    "Time seemed to slip through my fingers",
    "The sound of thunder rumbled",
    "The world seemed to be holding",
    "The scent of rain hung in the air",
    "The silence was broken only by my heartbeat",
    "A car rumbled down the dusty highway",
    "A person walked on the sidewalk",
    "Leaves rustled in the wind",
    "Someone wrote on a piece of paper",
    "A clock ticked on the wall",
    "A phone rang in the room",
    "A train passed by on the tracks",
    "A key turned in a lock",
    "A baby cried in the next room",
    "A car horn honked outside",
    "The child ran through the park",
    "The man stood at the edge of the cliff and looked down",
    "The woman picked up the phone and dialed a number",
    "The dog barked loudly in the yard",
    "The door slammed shut behind him",
    "The flowers swayed in the breeze",
    "The athlete triumphantly crossed the finish line",
    "The couple held hands as they walked along the beach",
    "The fox jumped over the log, dashed between the trees, and disappeared into the forest",
    "The sound of footsteps echoed in the hallway",
    "By the tranquil lake, beneath the setting sun",
];



function demo_to_session()
{
    sAge = document.getElementById("dAge").value;
    sSex = document.getElementById("dSex").value;

    sessionStorage.setItem("age", sAge);
    sessionStorage.setItem("sex", sSex);
    
    // window.location.href = "../survey/survey_1.html";
    window.location.assign('../survey/survey_1.html');

    return false;
}

function next_submit()
{
    if (image_num <= 35)
    {
        document.getElementById("sentence").textContent = sentences[sentence_index];
        document.getElementById("image_display").src = "../images/survey_images/" + sessionStorage.getItem("image_dir") + "/" + image_num + ".jpg";

        sentence_index = sentence_index + 1;
        image_num = image_num + 1;

        emotions.push(document.querySelector(".dropbtn").textContent);
        document.querySelector(".dropbtn").textContent = "";
    }

    if (document.getElementById("next_submit").textContent == "Submit")
    {
        // send results
        // run()
        // .then(() => {
        //     // Success handling, if needed
        // })
        // .catch(error => {
        //     console.error("Error connecting to MongoDB:", error);
        // });
        run().catch(console.dir);
    }

    if (sentence_index == sentences.length)
    {
        document.getElementById("next_submit").textContent = "Submit";
        // document.getElementById("results").textContent = emotions; // Test to see if results were saved
    }

}
