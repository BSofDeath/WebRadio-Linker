function changeTable() {
    const selector = document.getElementById("city-select");
    const table = document.getElementsByTagName("table");

    for (let i = 0; i < table.length; i++) {
        if (table[i].id === selector.value) table[i].classList.add("visible");
        else table[i].classList.remove("visible");
    }
    getPlaylistLink();
    getBatchLink();

    localStorage.setItem("selectedValue", selector.value);
}

function getPlaylistLink() {
    const selector = document.getElementById("city-select");
    const a = document.getElementById("playlist-button");
    let result = "https://radio.bsod.kr/playlist/" + selector.value + ".m3u";
    a.href = result;
}

function getBatchLink() {
    const selector = document.getElementById("city-select");
    const a = document.getElementById("batch-button");
    let result =
        "https://radio.bsod.kr/vlc_batch/vlc-stream_" + selector.value + ".bat";
    a.href = result;
}

document.addEventListener("DOMContentLoaded", function () {
    var selector = document.getElementById("city-select");
    var savedValue = localStorage.getItem("selectedValue");
    if (savedValue) {
        selector.value = savedValue;
    }
    changeTable();
});
