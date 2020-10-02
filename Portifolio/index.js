$("#example").typer({ strings: ["an Android Developer", "Full Stack Web Developer", "Competitive Programmer", "Wannabe Poet :p"], typeSpeed: 150 }), AOS.init();
const darkSwitch = document.getElementById("darkSwitch");
function initTheme() {
    document.body.setAttribute("data-theme", "dark");
}
function resetTheme() {
    darkSwitch.checked ? (document.body.setAttribute("data-theme", "dark"), localStorage.setItem("darkSwitch", "dark")) : (document.body.removeAttribute("data-theme"), localStorage.removeItem("darkSwitch"));
}
function hide() {
    console.log("Hide"), document.getElementById("navbarSupportedContent").classList.remove("show"), document.getElementById("toggle").classList.add("collapsed");
}
window.addEventListener("load", () => {
    darkSwitch &&
        (initTheme(),
        darkSwitch.addEventListener("change", () => {
            resetTheme();
        }));
});
const speed = 9,
    moveBackground = () => {
        let e = (event.x / window.innerWidth) * 100,
            t = (event.y / window.innerHeight) * 100;
        document.getElementById("animatedTextHeading").style.backgroundPosition = `${e / 9}% ${t / 9}%`;
    };
function screen_resize() {
    parseInt(window.innerHeight);
    parseInt(window.innerWidth) <= 990 ? $(".education-title").insertBefore(".education-info") : $(".education-info").insertBefore(".education-title");
}
document.body.addEventListener("mousemove", moveBackground),
    $(window).resize(function (e) {
        screen_resize();
    }),
    $(window).on("load", function () {
        $(".loader-wrapper").fadeOut("slow");

        screen_resize();
    });
