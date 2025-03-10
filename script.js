document.getElementById("showButton").addEventListener("click", function() {
    const containers = document.querySelectorAll(".hidden");
    let delay = 0;
    containers.forEach(container => {
        setTimeout(() => {
            container.classList.add("visible");
        }, delay);
        delay += 1000; // 1秒ずつ遅延させて表示
    });
});
