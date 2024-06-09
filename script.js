let lang = "fr" // fr or us


function switch_lang(lang_clicked){
    if(lang_clicked === "fr" || lang_clicked === "us"){
        lang = lang_clicked;
    } else {
        console.error("Langage not supported or non existent");
    }
}