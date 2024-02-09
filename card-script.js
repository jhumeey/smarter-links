
	const top1 = document.querySelector(".top-card1");
  const top2 = document.querySelector(".top-card2");
  const mid = document.querySelector(".t-middle_inner");
  
  const readout = document.querySelector("p");

  top1.addEventListener("mousemove", (e) => {
    const { x, y } = top1.getBoundingClientRect();
    top1.style.setProperty("--x", e.clientX - x);
    top1.style.setProperty("--y", e.clientY - y);
  });
  
  top2.addEventListener("mousemove", (e) => {
    const { x, y } = top2.getBoundingClientRect();
    top2.style.setProperty("--x", e.clientX - x);
    top2.style.setProperty("--y", e.clientY - y);
  });
  
  mid.addEventListener("mousemove", (e) => {
    const { x, y } = mid.getBoundingClientRect();
    mid.style.setProperty("--x", e.clientX - x);
    mid.style.setProperty("--y", e.clientY - y);
  });
