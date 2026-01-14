import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function scrollToId(id: string, offsetY = 100) {
  const smoother = (window as any).__smoother;

  // ✅ usa o ScrollSmoother (se existir)
  if (smoother) {
    smoother.scrollTo(`#${id}`, true, "top top");
    return;
  }

  // fallback (se ainda não tiver smoother)
  gsap.to(window, {
    duration: 1.2,
    scrollTo: { y: `#${id}`, offsetY },
    ease: "power3.out",
  });
}
