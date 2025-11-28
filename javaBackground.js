document.addEventListener("mousemove", (e) => {
    const container = document.getElementById("particles-container");

    const particle = document.createElement("div");
    particle.classList.add("particle");

    const size = Math.random() * 6 + 2;
    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.left = e.clientX + "px";
    particle.style.top = e.clientY + "px";

    particle.style.transition = "transform 1.2s linear, opacity 1.2s linear";
    container.appendChild(particle);

    setTimeout(() => {
        particle.style.opacity = 0;
        particle.style.transform = `translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px) scale(0.2)`;
    }, 20);

    setTimeout(() => {
        particle.remove();
    }, 1200);
});