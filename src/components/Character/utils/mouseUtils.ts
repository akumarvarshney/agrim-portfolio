import * as THREE from "three";

export const handleMouseMove = (
  event: MouseEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchMove = (
  event: TouchEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchEnd = (
  setMousePosition: (
    x: number,
    y: number,
    interpolationX: number,
    interpolationY: number
  ) => void
) => {
  setTimeout(() => {
    setMousePosition(0, 0, 0.03, 0.03);
    setTimeout(() => {
      setMousePosition(0, 0, 0.1, 0.2);
    }, 1000);
  }, 2000);
};

let virtualHead = { x: 0, y: 0 };

export const handleHeadRotation = (
  headBone: THREE.Object3D,
  mouseX: number,
  mouseY: number,
  interpolationX: number,
  interpolationY: number,
  lerp: (x: number, y: number, t: number) => number
) => {
  if (!headBone) return;
  if (window.scrollY < 200) {
    const maxRotation = Math.PI / 6;
    virtualHead.y = lerp(
      virtualHead.y,
      mouseX * maxRotation,
      interpolationY
    );
    let minRotationX = -0.3;
    let maxRotationX = 0.4;
    let targetX;
    if (mouseY > minRotationX) {
      if (mouseY < maxRotationX) {
         targetX = -mouseY - 0.5 * maxRotation;
      } else {
         targetX = -maxRotation - 0.5 * maxRotation;
      }
    } else {
         targetX = -minRotationX - 0.5 * maxRotation;
    }
    virtualHead.x = lerp(virtualHead.x, targetX, interpolationX);
    
    // Cleanly offset the base animation!
    headBone.rotation.x += virtualHead.x;
    headBone.rotation.y += virtualHead.y;
  } else {
    if (window.innerWidth > 1024) {
      virtualHead.x = lerp(virtualHead.x, 0.05, 0.03); // Look slightly down/forward instead of up!
      virtualHead.y = lerp(virtualHead.y, -0.3, 0.03); // Look right towards the text
      headBone.rotation.x += virtualHead.x;
      headBone.rotation.y += virtualHead.y;
    }
  }
};
