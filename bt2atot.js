<script>
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-bt2atot='true']").forEach(function (banner) {
        let width = banner.getAttribute("data-width") || "400";
        let height = banner.getAttribute("data-height") || "100";
        let fontSize = banner.getAttribute("data-fontsize") || "20";
        let imgScale = banner.getAttribute("data-imgscale") || "1";
        let position = banner.getAttribute("data-position") || "12t";
        let imgSpacing = banner.getAttribute("data-imgspacing") || "10";
        let textSpacing = banner.getAttribute("data-textspacing") || "15";
        let bgColor = banner.getAttribute("data-bgcolor") || "#ffcc00";
        let textColor = banner.getAttribute("data-textcolor") || "#000";
        let textStyle = banner.getAttribute("data-textstyle") || "";
        let direction = banner.getAttribute("data-direction") || "pt";
        let speed = banner.getAttribute("data-speed") || "sp5";
        let img1 = banner.getAttribute("data-img1") || "";
        let img2 = banner.getAttribute("data-img2") || "";
        let text = banner.getAttribute("data-text") || "Nội dung chạy";

        let speedMap = {
            sp0: "0s",
            sp1: "10s",
            sp2: "8s",
            sp3: "6s",
            sp4: "5s",
            sp5: "4s",
            sp6: "3.5s",
            sp7: "3s",
            sp8: "2.5s",
            sp9: "2s"
        };
        let animationSpeed = speedMap[speed] || "4s";

        banner.style.cssText = "display: flex; align-items: center; justify-content: space-between; width: " + width + "px; height: " + height + "px; background-color: " + bgColor + "; overflow: hidden; position: relative; font-size: " + fontSize + "px; color: " + textColor + "; white-space: nowrap; font-family: Arial, sans-serif;";

        let styleText = "";
        if (textStyle.includes("B")) styleText += "font-weight: bold;";
        if (textStyle.includes("U")) styleText += "text-decoration: underline;";
        if (textStyle.includes("I")) styleText += "font-style: italic;";

        let img1HTML = img1 ? "<img src='" + img1 + "' style='height:" + (fontSize * imgScale) + "px; margin-right:" + imgSpacing + "px;'>" : "";
        let img2HTML = img2 ? "<img src='" + img2 + "' style='height:" + (fontSize * imgScale) + "px; margin-left:" + imgSpacing + "px;'>" : "";
        let contentHTML = "<span style='" + styleText + "'>" + text + "</span>";

        let innerHTML = "";
        if (position === "12t") {
            innerHTML = img1HTML + img2HTML + contentHTML;
        } else if (position === "12s") {
            innerHTML = contentHTML + img1HTML + img2HTML;
        } else if (position === "1c2") {
            innerHTML = img1HTML + contentHTML + img2HTML;
        }

        let marquee = document.createElement("div");
        marquee.innerHTML = innerHTML;
        marquee.style.cssText = "display: flex; align-items: center; position: absolute; " + (direction === "tp" ? "left: 100%;" : "right: 100%;") + " animation: moveBanner " + animationSpeed + " linear infinite;";

        banner.appendChild(marquee);

        let keyframes = "@keyframes moveBanner { from { " + (direction === "tp" ? "left: 100%;" : "right: 100%;") + " } to { " + (direction === "tp" ? "left: -100%;" : "right: -100%;") + " } }";
        let styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerHTML = keyframes;
        document.head.appendChild(styleSheet);
    });
});
<\/script>