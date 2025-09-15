function openLab(url) {
        document.getElementById("labFrame").src = url;
        document.getElementById("labModal").style.display = "block";
    }
    function closeLab() {
        document.getElementById("labModal").style.display = "none";
        document.getElementById("labFrame").src = "";
    }
    window.onclick = function (event) {
        let modal = document.getElementById("labModal");
        if (event.target == modal) {
            closeLab();
        }
    }