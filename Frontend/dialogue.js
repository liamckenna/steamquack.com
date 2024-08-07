
    class Speech {
        constructor(text, next_line = null, repeatable = true) {
            this.repeatable = repeatable;
            this.text = text;
            this.next_line = next_line;
            this.beginning = null;
        }
    }

    function chooseRandomDialogue(selection) {
        let range = selection.length;
        let choice = getRandomInt(range);
        Begin_Speech(selection[choice]);
    }
    
    //done

    const explanations_assessments_3 = new Speech("sum exampels are \"Lore-Rich\", \"Great Soundtrack\", \"Cult Classic\", etc.", null, false);
    const explanations_features_3 = new Speech("like, \"Open-World\", \"PVP\", \"Turn-Based Combat\", etc.", null, false);
    const explanations_super_genres_3 = new Speech("im talkng abowt tags like \"Action\", \"Puzzle\", \"Strategy\", etc.", null, false);
    const explanations_sub_genres_3 = new Speech("hear r sum exampels: \"Souls-like\", \"FPS\", \"2D Platformer\", etc.", null, false);

    //to-do

    


    

    //done
    const explanations_players_2 = new Speech("sum exampels wood be \"Singleplayer\", \"Local Multiplayer\", \"Online Co-Op\", etc.", null, false);
    const explanations_recency_2 = new Speech("krank it up if u dont wanna play old games!! or down if u dont cair.", null, false);
    const explanations_assessments_2 = new Speech("sownds dumb, i nowe, but i didnt make the ruels...", explanations_assessments_3);
    const explanations_features_2 = new Speech("best way i can put it is, think of buzzwords youd find on the back of the box...", explanations_features_3);
    const explanations_themes_and_moods_2 = new Speech("think \"World War II\", \"Cyberpunk\", \"Tactical\", etc.", null, false);
    const explanations_visuals_and_viewpoint_2 = new Speech("for instanse, \"First-Person\", \"Voxel\", \"2D\", etc.", null, false);
    const explanations_super_genres_2 = new Speech("thers only a few of them and there very impresise...", explanations_super_genres_3);
    const explanations_genres_2 = new Speech("think basic, like \"Shooter\", \"Fighting\", \"Battle Royale\", etc.", null, false);
    const explanations_sub_genres_2 = new Speech("thers alot of them, and there pretty importent to a games identee...", explanations_sub_genres_3);

    //to-do
    


    

    

    //done
    const explanations_players_1 = new Speech("the players tag refers too the number of players a game is ment to be playd with...", explanations_players_2);
    const explanations_recency_1 = new Speech("the recency metrick is how inportant it is that the games releesed recentley...", explanations_recency_2);
    const explanations_assessments_1 = new Speech("the assessments tag categorie consists of tags that userz use to describ the game...", explanations_assessments_2);
    const explanations_features_1 = new Speech("feature tags r tags that discribe, well, features!...", explanations_features_2);
    const explanations_themes_and_moods_1 = new Speech("themes and mood tags r the ones that discribe the settings and core consepts of games...", explanations_themes_and_moods_2);
    const explanations_visuals_and_viewpoint_1 = new Speech("visuals and viewpoint refers to a games perspective n art style...", explanations_visuals_and_viewpoint_2);
    const explanations_super_genres_1 = new Speech("super genres are the tags that discribe the tipe of game in a realy broad way...", explanations_super_genres_2);
    const explanations_genres_1 = new Speech("genre tags are farely strait forward. there the tags u probablie use to discribe games urself...", explanations_genres_2);
    const explanations_sub_genres_1 = new Speech("sub genres realy get to the core of wat a game actualy is...", explanations_sub_genres_2);

    //to-do
    
    
    


    


    //done
    explanations_players_2.beginning = explanations_players_1;
    explanations_recency_2.beginning = explanations_recency_1;
    explanations_assessments_3.beginning = explanations_assessments_1;
    explanations_features_3.beginning = explanations_features_1;
    explanations_themes_and_moods_2.beginning = explanations_themes_and_moods_1;
    explanations_visuals_and_viewpoint_2.beginning = explanations_visuals_and_viewpoint_1;
    explanations_super_genres_3.beginning = explanations_super_genres_1;
    explanations_genres_2.beginning = explanations_genres_1;
    explanations_sub_genres_3.beginning = explanations_sub_genres_1;

    //to-do
    
    var return_tags_3 = new Speech("");
    const return_tags_2 = new Speech("take a look at ur top tag categoreys!");
    const return_tags_1 = new Speech("iv lookd over ur profil... hear is my annalisis.", return_tags_2);

    const refresh_request = new Speech("sum thing went wrong. pleas refresh the page!");

    const loading = new Speech("loading... this may take a handful of seconds...");

    const greet_user_by_name_1 = new Speech("well hello ther USER! giv me a minut to read ur medical historie...");

    const missing_input_1 = new Speech("im gunna need ur name befor i can legily take u in.");

    const input_check_1 = new Speech("let me chek my reckords.");

    const found_1 = new Speech("found ya! hello therrrr.");

    const begin_evaluation_1 = new Speech("lets see wat i can doo...");

    const complete_evaluation_1 = new Speech("yaayyyy i figyurd it owt!!!");

    const perscription_2 = new Speech("click on the pick churs to heer moar, or double click to go to the steam store page.");
    const perscription_1 = new Speech("just wat the ducktor ordered! take a look...", perscription_2);

     
    const npf_steam_id_2 = new Speech("click the buton to the rite onse ur done");
    const npf_steam_id_1 = new Speech("enter ur steam id or pro file url hear, than ill see if we can find ur pro file...", npf_steam_id_2);

    const greeting_4 = new Speech("plees fill out the new paishent form so i can <br>e-value ate youre case.");
    const greeting_3 = new Speech("its truli unforchunate, but no need too worrey. uve come to the rite plase...", greeting_4)
    const greeting_2 = new Speech("my name is Ducktor Gamez. i heard ur experiensing some simtoms of bordum...", greeting_3)
    const greeting_1_0 = new Speech("hi ther! pleasd to make<br>ur aquaintense... (Click this text bubble to continue.)", greeting_2)
    const greeting_1_1 = new Speech("howdye! welcom too my offise... (Click this text bubble to continue.)", greeting_2)
    const greeting_1_2 = new Speech("well come! please, have a seet... (Click this text bubble to continue.)", greeting_2)
    let greetings = [];
    greetings.push(greeting_1_0, greeting_1_1, greeting_1_2);

    const private_3 = new Speech("for this too work i need u to open up too me.");
    const private_2 = new Speech("go to ur steam profile, click on 'Edit Profile', go down to ur privacy settings, then set it to public...", private_3);
    const private_1 = new Speech("i fownd ur acount but it looks like u hav it set to private...", private_2);

    const invalid_2 = new Speech("i cant find pashents by their current nickname, but if u giv me the link to ur profile, that could wokr.");
    const invalid_1 = new Speech("i culdnt find ur profile from the info u gav me...", invalid_2);