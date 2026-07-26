"use client";

export default function GradientBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent-purple/8 rounded-full blur-[128px] animate-blob" />
      <div className="absolute top-[30%] right-[-15%] w-[50%] h-[50%] bg-accent-cyan/6 rounded-full blur-[100px] animate-blob" style={{ animationDelay: "-4s" }} />
      <div className="absolute bottom-[-20%] left-[20%] w-[55%] h-[55%] bg-accent-pink/5 rounded-full blur-[120px] animate-blob" style={{ animationDelay: "-8s" }} />
      <div className="absolute top-[10%] left-[40%] w-[30%] h-[30%] bg-accent-purple/5 rounded-full blur-[80px] animate-blob" style={{ animationDelay: "-2s" }} />
    </div>
  );
}

