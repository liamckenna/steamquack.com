
    class Game {
    constructor(id, name, score, price, release_date, review_count, rating) {
    this.id = id;
    this.name = name;
    this.score = score;
    this.price = price;
    this.release_date = release_date;
    this.review_count = review_count;
    this.rating = rating;
    this.hero_capsule_link = "https://cdn.cloudflare.steamstatic.com/steam/apps/" + id + "/hero_capsule.jpg";
    this.hero_capsule_link = "./Assets/loading.png"; 

    this.setHeroCapsuleLink("https://cdn.cloudflare.steamstatic.com/steam/apps/" + id + "/hero_capsule.jpg")
    .then(result => {
    this.hero_capsule_link = result;
})
    .catch(error => {
    console.error('Error setting hero capsule link:', error);
    this.hero_capsule_link = "./Assets/no_preview.png";
});
}

    setHeroCapsuleLink(url) {
    return new Promise((resolve, reject) => {
    fetch(url)
    .then(response => {
    if (!response.ok) {
    resolve("./Assets/no_preview.png");
} else {
    resolve(url);
}
})
    .catch(error => {
    console.error('Fetch operation failed:', error);
    resolve("./Assets/no_preview.png");
});
});
}

}


        var current_line = null;

        var received_dialogue_profile = false;
        var i = 0;
        var games = [];
        var generated = false;
        var ducktor_frame = "./Assets/Ducktor Idle (Draft).png";
        function Cycle_Forward() {
            if (i == (returned_recommendation_count - 5) || !generated) {
        } else {
            i += 1;
            Update_Display();
        }
        }
        function Cycle_Back() {
            if (i == 0 || !generated) {

        } else {
            i -= 1;
            Update_Display();
        }
        }



        function Update_Display() {
            const slots = document.querySelectorAll(".game_column");
            var display_count;
            if (returned_recommendation_count < 5) display_count = returned_recommendation_count;
            else display_count = 5;
            if (returned_recommendation_count < 2) {
                GenerateDefaultList();
                return;
            }
            for (let j = 0; j < display_count; j++) {
            slots[j].querySelector(".game_name").innerHTML = games[i + j].name;
            //slots[j].querySelector(".game_name").onclick = visitSteamPage(games[i+j].id);
                if (games[i + j].price == 0) {
                    slots[j].querySelector(".game_portrait").innerHTML = "<img src=" + games[i + j].hero_capsule_link +
                    " draggable=\"false\"  >" + "<div class=\"game_info\" onclick=\"Speak_About_Game(" + (i + j) +
                    ")\" onmouseout=\"On_Hover_Exit(this, " + (i + j) + ")\" onmouseover=\"On_Hover(this, " + (i + j) +
                    ")\" style=\"font-size: 5vmin\">" + "FREE" + "</div>";
                } else {
                    slots[j].querySelector(".game_portrait").innerHTML = "<img src=" + games[i + j].hero_capsule_link +
                    " draggable=\"false\"  >" + "<div class=\"game_info\" onclick=\"Speak_About_Game(" + (i + j) +
                    ")\" onmouseout=\"On_Hover_Exit(this, " + (i + j) + ")\" onmouseover=\"On_Hover(this, " + (i + j) +
                    ")\">" + "   $" + games[i + j].price + "</div>";
                }
            
        }
            document.getElementById("left_arrow").innerHTML="<img src=\"./Assets/Left%20Arrow.png\" draggable=\"false\" onmouseout=\"Arrow_Hover_Exit(this)\" onmouseover=\"Arrow_Hover(this)\" onclick=\"Cycle_Back()\"style=\"filter:invert(75%);cursor:pointer\">"
            document.getElementById("right_arrow").innerHTML= "<img src=\"./Assets/Right%20Arrow.png\" draggable=\"false\" onmouseout=\"Arrow_Hover_Exit(this)\" onmouseover=\"Arrow_Hover(this)\" onclick=\"Cycle_Forward()\"style=\"filter:invert(75%);cursor:pointer\">"
            if (i == 0) {
            document.getElementById("left_arrow").innerHTML="<img src=\"./Assets/Left%20Arrow.png\" draggable=\"false\" onclick=\"Cycle_Back()\"style=\"filter:invert(25%);cursor:auto\">"
        }
            if (i == returned_recommendation_count - 5) {
            document.getElementById("right_arrow").innerHTML= "<img src=\"./Assets/Right%20Arrow.png\" draggable=\"false\" onclick=\"Cycle_Forward()\"style=\"filter:invert(25%);cursor:auto\">"
        }

        }
        

        function On_Hover(img, id) {
            //Begin_Speech();
        }

        function On_Hover_Exit(img, id) {
            //End_Speech();
        }

        function Open_Steam_Page(id) {
            let url = "https://store.steampowered.com/app/" + id;
            window.open(url, '_blank').focus();
        }

        function Arrow_Hover(img) {
            img.style.filter = "invert(0.5)"
        }

        function Arrow_Hover_Exit(img) {
            img.style.filter = "invert(0.75)"
        }

        function Options_Dialogue(option) {
            if (option == 1 && !received_dialogue_profile) {
            received_dialogue_profile = true;
            Begin_Speech(npf_steam_id_1);
        }
        }

        function Speak_About_Game(game_id) {
            var article;
            if (games[game_id].rating > 79 && games[game_id].rating < 90) {
            article = "an "
        } else {
            article = "a "
        }
            let line_1 = games[game_id].name + "...<br>great choise! it has " + article + games[game_id].rating + "% positive review score on steam."
            const game_talk_1 = new Speech(line_1)
            Begin_Speech(game_talk_1)
        }

        async function Begin_Speech(line) {
            if (!line.repeatable) {
                return;
            }
            if (current_line == null) {
            current_line = line;
        } else if (current_line.text == line.text) {
            return;
        } else {
            End_Speech();
            await Wait(100);
            current_line = line;
        }

            document.getElementById("duck").innerHTML = "<img src=\"./Assets/Ducktor%20Mouth%20Open%20(Draft).png\" draggable=\"false\" style=\"display: flex;\"> " +
            "<img src=\"./Assets/Ducktor%20Idle%20(Draft).png\" draggable=\"false\" style=\"display: none;\">"
            document.getElementById("speech_bubble_wrapper").innerHTML = "<div class=\"speech_bubble\" id=\"bubble\" onclick=\"Cycle_Line()\"><img src=\"./Assets/Speech%20Bubble.png\" style=\"visibility:visible\" draggable=\"false\"><p></p></div>"

            Speak_Line()
        }



        function End_Speech() {

            document.getElementById("duck").innerHTML = "<img src=\"./Assets/Ducktor%20Mouth%20Open%20(Draft).png\" draggable=\"false\" style=\"display: none;\"> " +
                "<img src=\"./Assets/Ducktor%20Idle%20(Draft).png\" draggable=\"false\" style=\"display: flex;\">"
                document.getElementById("speech_bubble_wrapper").innerHTML = ""

            current_line = null


        }

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

        async function Load_Site() {
            console.log("json loaded: " + json_loaded);
            await Begin_Speech(loading);
            resetInput();
            resetSettings();
            await wait(1000);
    
            if (!json_loaded) {
                callCreateGamesJson();
            }

            End_Speech();
            await Wait(100);
            let greeting = getRandomInt(3);
            var greeting_line;
            if (greeting == 0) {
            greeting_line = greeting_1_0;
        } else if (greeting == 1) {
            greeting_line = greeting_1_1;
        } else if (greeting == 2) {
            greeting_line = greeting_1_2;
        }
            document.getElementById("duck").innerHTML = "<img src=\"./Assets/Ducktor%20Mouth%20Open%20(Draft).png\" draggable=\"false\" style=\"display: none;\"> " +
            "<img src=\"./Assets/Ducktor%20Idle%20(Draft).png\" draggable=\"false\" style=\"display: flex;\">"

            Begin_Speech(greeting_line);
        }


        async function Cycle_Line() {
            if (current_line == null) {
            End_Speech();
        } else if (current_line.next_line == null) {
            End_Speech();
        } else {
            document.getElementById("duck").innerHTML = "<img src=\"./Assets/Ducktor%20Mouth%20Open%20(Draft).png\" draggable=\"false\" style=\"display: none;\"> " +
            "<img src=\"./Assets/Ducktor%20Idle%20(Draft).png\" draggable=\"false\" style=\"display: flex;\">"
            document.getElementById("bubble").innerHTML = "<img src=\"./Assets/Speech%20Bubble.png\" style=\"visibility:hidden\" draggable=\"false\"> <p> </p>"
            await Wait(100);
            document.getElementById("duck").innerHTML = "<img src=\"./Assets/Ducktor%20Mouth%20Open%20(Draft).png\" draggable=\"false\" style=\"display: flex;\"> " +
            "<img src=\"./Assets/Ducktor%20Idle%20(Draft).png\" draggable=\"false\" style=\"display: none;\">"
            current_line = current_line.next_line
            Speak_Line();
        }
        }

        function Speak_Line() {

            document.getElementById("bubble").innerHTML = "<img src=\"./Assets/Speech%20Bubble.png\" draggable=\"false\">" + "<p style='cursor:pointer'>" + current_line.text + "</p>"

            if (current_line.next_line == null && current_line.repeatable == false && current_line.beginning != null) {
                current_line.beginning.repeatable = false;
            }

        }


        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        function Wait(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        function EnableRecButton() {
            document.getElementById("recommendation_generation_button_wrapper").innerHTML = "<div class=\"recommendation_generation_button\" id=\"recommendation_generation_button\" style=\"visibility:visible\" onclick=\"callGeneratorWrapper()\">Patch me up, Duc!</div>";

        }

function visitSteamPage(id) {
  window.open("https://store.steampowered.com/app/" + id, '_blank');
}