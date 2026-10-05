const MONETAG_LINK = "https://href.li/?https://omg10.com/4/10570248";

const MOBIDEA_LINKS = [
"https://www.underlingmistery.support/?sl=6156924-437e5&pub_click_id={External_ID_from_traffic_source}&site={subID}&pub_sub_id={sub_subID}",
"https://www.passingcars.wiki/?sl=6156933-b106a&pub_click_id={External_ID_from_traffic_source}&site={subID}&pub_sub_id={sub_subID}"
];

const GOOGLE_LINK = "https://www.google.com/";

const VIDEOS = [
"video/video1.mp4",
"video/video2.mp4",
"video/video3.mp4"
];

const backgroundVideo = document.getElementById("backgroundVideo");

if (backgroundVideo && VIDEOS.length > 0) {


const randomVideoIndex =
    Math.floor(Math.random() * VIDEOS.length);

const selectedVideo =
    VIDEOS[randomVideoIndex];

const source =
    document.createElement("source");

source.src = selectedVideo;

source.type = "video/mp4";

backgroundVideo.appendChild(source);

backgroundVideo.load();

backgroundVideo.play().catch(function(error) {

    console.log(
        "El navegador no permitió el autoplay:",
        error
    );

});


}

const randomMobideaIndex =
Math.floor(Math.random() * MOBIDEA_LINKS.length);

const MOBIDEA_LINK =
MOBIDEA_LINKS[randomMobideaIndex];

const yesButton =
document.getElementById("yesButton");

if (yesButton) {


yesButton.addEventListener(
    "click",
    function() {

        window.open(
            MOBIDEA_LINK,
            "_blank"
        );

    }
);


}

const noButton =
document.getElementById("noButton");

if (noButton) {


noButton.addEventListener(
    "click",
    function() {

        window.location.href =
            MONETAG_LINK;

    }
);


}

if (
typeof window.orientation === "undefined" &&
screen.width >= 1000
) {


window.location.href =
    MONETAG_LINK;


}
