document.querySelectorAll(".ripple").forEach((button) => {
  button.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    const rect = button.getBoundingClientRect();

    const size = Math.max(button.clientWidth, button.clientHeight);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.classList.add("ripple-effect");

    const ripple = button.querySelector(".ripple-effect");
    if (ripple) ripple.remove();

    button.appendChild(circle);
  });
});
