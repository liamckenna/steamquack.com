
    var settings = {
    user_id: "",
    super_genres: 0.1,
    genres: 0.25,
    sub_genres: 0.5,
    visuals_and_viewpoint: 0.25,
    themes_and_moods: 0.25,
    features: 0.25,
    players: 0.25,
    other_tags: 0.0,
    software: 0.0,
    assessments: 0.1,
    ratings_etc: 0.0,
    hardware_input: 0.0,
    funding_etc: 0.0,
    unknown: 0.0,
    review_threshold: 100,
    review_description_threshold: "N/A",
    review_score: 1.0,
    recency: 0.5,
    recommendation_count: 30,
    review_percent_threshold: 80,
    maximum_price: 70
};
    var returned_recommendation_count;
    var results_json;
    var profile_json;
    var preliminary_json;
    var username;
    var profile_icon_link;
    var is_private = true;
    var fetching_profile = false;
    var generating_profile = false;
    var can_recieve_recs = false;
    var generating_recommendations = false;
    var getting_profile_info = false;
    var json_loaded = false;

    const defaultSettings = { ...settings };

    function resetSettings() {
        settings = { ...defaultSettings };

        document.getElementById('review_threshold').value = settings.review_threshold;
        document.getElementById('review_percent_threshold').value = settings.review_percent_threshold;
        document.getElementById('maximum_price').value = settings.maximum_price;
        document.getElementById('super_genres').value = settings.super_genres;
        document.getElementById('genres').value = settings.genres;
        document.getElementById('sub_genres').value = settings.sub_genres;
        document.getElementById('visuals_and_viewpoint').value = settings.visuals_and_viewpoint;
        document.getElementById('themes_and_moods').value = settings.themes_and_moods;
        document.getElementById('features').value = settings.features;
        document.getElementById('players').value = settings.players;
        document.getElementById('assessments').value = settings.assessments;
        document.getElementById('recency').value = settings.recency;

    }

    function resetInput() {
        document.getElementById('id_input').value = '';
        document.getElementById('id_input').placeholder = 'Profile Name/URL';
    }


    function updateSetting(element) {
        const settingName = element.name;
        explainSetting(settingName);
        const value = parseFloat(element.value);
        settings[settingName] = value;
        if (settingName == "maximum_price") {
            if (value == 70) {
                document.getElementById(settingName + '_value').innerText = "Any";
            } else if (value == 0) {
                document.getElementById(settingName + '_value').innerText = "Free";
            } else {
                document.getElementById(settingName + '_value').innerText = "$" + value;
            }
        } else if (settingName == "review_percent_threshold") {
            document.getElementById(settingName + '_value').innerText = value + "%";
        } else if (settingName == "review_threshold") {
            document.getElementById(settingName + '_value').innerText = value;
        }
    }

    function explainSetting(setting) {
        switch (setting) {
            case "super_genres":
                Begin_Speech(explanations_super_genres_1);
                break;
            case "genres":
                Begin_Speech(explanations_genres_1);
                break;
            case "sub_genres":
                Begin_Speech(explanations_sub_genres_1);
                break;
            case "visuals_and_viewpoint":
                Begin_Speech(explanations_visuals_and_viewpoint_1);
                break;
            case "themes_and_moods":
                Begin_Speech(explanations_themes_and_moods_1);
                break;
            case "features":
                Begin_Speech(explanations_features_1);
                break;
            case "players":
                Begin_Speech(explanations_players_1);
                break;
            case "assessments":
                Begin_Speech(explanations_assessments_1);
                break;
            case "recency":
                Begin_Speech(explanations_recency_1);
                break;
        }
    }

    async function fetchData(apiURL) {
    try {
    const response = await fetch(apiURL);
    if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
}
    const data = await response.json();
    console.log(data); 
    return data;
} catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
}
}

    function fetchImage(url) {
    try {
    const response = fetch(url);
    if (!response.ok) {
    return "./Assets/no_preview.png";
}
    return url;
} catch (error) {
    console.error('Fetch operation failed:', error);
    return "./Assets/no_preview.png";
}
}


    var Module = {
    onRuntimeInitialized: function () {
    
    console.log("WebAssembly module is initialized.");
}
};

    function callMainFunction() {
    if (Module['_main']) {
    Module['_main']();
} else {
    console.error('Main function is not defined or the module is not yet loaded.');
}
}

    function callCheckProfileInput() {
    if (fetching_profile) return;

    if (Module['_CheckProfileInput']) {
    var inputElement = document.getElementById('id_input'); 
    var input = inputElement.value;
    if (input === "") {
    Begin_Speech(missing_input_1);
    } else {
        Begin_Speech(input_check_1);
        console.log("ok now");
        console.log(input);
        fetching_profile = true;
        Module.ccall('CheckProfileInput', 'string', ['string'], [input], { async: true}).then(result => {
        if (result === "0") {
        Begin_Speech(invalid_1);
    } else if (result[0] === "P") {
        Begin_Speech(private_1);
        settings.user_id = result.substring(1);
    } else {
        settings.user_id = result;
        is_private = false;
        console.log("user id:");
        console.log(result);
        callGetProfileNameAndIcon();
    }

        fetching_profile = false;

    }).catch(e => {
        console.log("Error: " + e);
        Begin_Speech(refresh_request);
    });;
        console.log("yeah yeah yeah");
}

} else {
    console.error('CheckProfileInput function is not defined or the module is not yet loaded.');
}
}

    function callGetProfileNameAndIcon() {
        if (Module['_GetProfileNameAndIcon']) {
            console.log(settings.user_id);
            console.log("going into C...");
            Module.ccall('GetProfileNameAndIcon', 'string', ['string'], [settings.user_id], { async: true}).then(result => {

                InterpretPreliminaryInfo(result);
            }).catch(e => {
                console.log("Error: " + e);
                Begin_Speech(refresh_request);
            });;
        } else {
            console.error('GetProfileNameAndIcon function is not defined or the module is not yet loaded.');
        }
    }

    function InterpretPreliminaryInfo(results) {
        console.log(results);
        try {
            preliminary_json = JSON.parse(results);
        } catch (error) {
            console.error('Invalid JSON string:', error);
            return;
        }
        username = preliminary_json.nickname;
        profile_icon_link = preliminary_json.profile_icon_link;
        
        var profilePicElement = document.getElementById('profile-pic');
        if (profilePicElement) {
            profilePicElement.src = profile_icon_link;
        }
        var usernameElement = document.getElementById('name_area');
        if (usernameElement) {
            usernameElement.innerHTML = username;
            
        }
        adjustFontSize();
        greet_user_by_name_1.text = "well hello ther " + username + "! giv me a minut to read ur medical histury...";
        Begin_Speech(greet_user_by_name_1);
        
        callCreateAndEvaluateProfile();
    }

    function adjustFontSize() {
        console.log("ADJUSTING FONT SIZE");
        const nameSection = document.getElementById('name_area');
        const nameLength = nameSection.innerText.length;
        let fontSize;
      
        
        if (nameLength <= 4) {
            fontSize = '8vw';
        } else if (nameLength <= 12) {
            fontSize = '6vw';
        } else if (nameLength <= 20) {
            fontSize = '4vw';
        } else if (nameLength <= 25) {
            fontSize = '3.5vw';
        } else if (nameLength <= 35) {
            fontSize = '2.5vw';
          } else {
            fontSize = '1.5vw';
        }
      
        nameSection.style.fontSize = fontSize;
      }

    function callCreateGamesJson() {
        if (Module['_CreateGamesJson']) {
            console.log(settings.user_id);
            console.log("going into C...");
            Module.ccall('CreateGamesJson', null, [], [], {async : true});
        } else {
            console.error('CreateGamesJson function is not defined or the module is not yet loaded.');
            Begin_Speech(refresh_request);
        }
        json_loaded = true;
    }


    function callCreateAndEvaluateProfile() {
        if (Module['_CreateAndEvaluateProfile']) {
            console.log(settings.user_id);
            console.log("going into C...");
            Module.ccall('CreateAndEvaluateProfile', 'string', ['string'], [settings.user_id], { async: true}).then(result => {

                InterpretProfileSummary(result);
            }).catch(e => {
                console.log("Error: " + e);
                Begin_Speech(refresh_request);
            });;
        } else {
            console.error('CreateAndEvaluateProfile function is not defined or the module is not yet loaded.');
        }
    }

    function InterpretProfileSummary(results) {
        console.log(results);
        try {
            profile_json = JSON.parse(results);
            can_recieve_recs = true;
            EnableRecButton();
            parseProfileJson(profile_json);
        } catch (error) {
            console.error('Invalid JSON string:', error);
            return;
        }

    }

    
    Module.onRuntimeInitialized = function() {
    Module.handleAsyncResult = function(result) {
        console.log("Async result received:", result);
        Begin_Speech(complete_evaluation_1);
    };
};

    function callGeneratorWrapper() {
    if (generating_recommendations) return;
    if (Module['_GeneratorWrapper']) {
    if (settings.user_id == "") {
    console.log("womp womp");
    return;
} else if (is_private) {
    Begin_Speech(fix_privacy_1);
    return;
}
    const input = "";
    const jsonString = JSON.stringify(settings, null, 2);
    console.log(jsonString);

    Begin_Speech(begin_evaluation_1);
    generating_recommendations = true;
    
    Module.ccall('GeneratorWrapper', 'string', ['string', 'string'], [input, jsonString], {async: true}).then(result => {
    InterpretResults(result);
});
}
}


function InterpretResults(results) {

    console.log(results);
    try {
        results_json = JSON.parse(results);
    } catch (error) {
        console.error('Invalid JSON string:', error);
        return;
    }



    returned_recommendation_count = results_json.top_picks.length;
    games = [];



    for (let i = 0; i < returned_recommendation_count; i++) {
        var id = results_json.top_picks[i].appid;
        var score = results_json.top_picks[i].score;
        var review_percentage = results_json.top_picks[i].review_percentage;
        var release_date = results_json.top_picks[i].release_date;
        var review_count = results_json.top_picks[i].review_count;
        var name = results_json.top_picks[i].name;
        var price = results_json.top_picks[i].msrp / 100;
        const game = new Game(id, name, score, price, release_date, review_count, review_percentage);
        games.push(game);
    }

    setTimeout(() => {
        Update_Display();
        Begin_Speech(perscription_1);
        generated = true;
        generating_recommendations = false;
    }, 2000);
}

function Default_List() {
    const g1 = new Game(367520, "Hollow Knight", 15, 15, "Feb 24, 2017", 100000);
    const g2 = new Game(271590, "Grand Theft Auto V", 30, 87);
    const g3 = new Game(2000950, "Call of Duty®: Modern Warfare®", 35, 87);
    const g4 = new Game(240720, "Getting Over It with Bennett Foddy", 8, 82);
    const g5 = new Game(2161700, "Persona 3 Reload", 70, 95);
    const g6 = new Game(730, "Counter-Strike 2", 0, 87);
    const g7 = new Game(204360, "Castle Crashers®", 15, 96);
    const g8 = new Game(1657630, "Slime Rancher 2", 30, 94);
    const g9 = new Game(1091500, "Cyberpunk 2077", 60, 83);
    const g10 = new Game(1172470, "Apex Legends™", 0, 77);
    const g11 = new Game(1085660, "Destiny 2", 0, 80);
    const g12 = new Game(1055540, "A Short Hike", 8, 99);
    const g13 = new Game(413150, "Stardew Valley", 15, 98);
    const g14 = new Game(1364780, "Street Fighter™ 6", 60, 86);
    const g15 = new Game(976730, "Halo: The Master Chief Collection", 40, 92);
    games.push(g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15);
    generated = true;
    Update_Display();
    Begin_Speech(perscription_1);
}