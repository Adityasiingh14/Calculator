var equal= document.getElementsByClassName("equal");
equal.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
        document.getElementsByClassName("equal").click();
    }
});
