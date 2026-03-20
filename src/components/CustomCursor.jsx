import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] mix-blend-difference hidden lg:block">
      <div
        ref={cursorRef}
        className="w-10 h-10 border border-secondary rounded-full flex items-center justify-center transition-transform duration-100 ease-out"
      >
        <div className="w-1 h-1 bg-primary"></div>
      </div>
    </div>
  );
};

export default CustomCursor;
