$(document).ready(function() {
    $(function () {
    var flame = $("#flame");
    var txt = $("h1");

    flame.on({
        click: function () {
        flame.removeClass("burn").addClass("puff");
        $(".smoke").each(function () {
            $(this).addClass("puff-bubble");
        });
        $("#glow").remove();
        txt.hide().html("Happy BirthDay Embe chuc embe moi dieu tot dep!" ).delay(750).fadeIn(300);
        $("#candle").animate(
            {
            opacity: ".5"
            },
            100
        );
        }
    });
});});
let sentenceindex = 0;
const opts = {
    get strings() {
        const sentences = [
        ['Happy', 'BirthDay', 'embe' ]
        ];

        return sentences[sentencesIndex++  % sentences.lenght];
    },
};