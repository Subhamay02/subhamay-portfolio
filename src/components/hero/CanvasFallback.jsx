const CanvasFallback = () => {
  return (
    <div className="w-full h-[400px] md:h-[600px] flex items-center justify-center">
      <div className="w-56 h-56 md:w-80 md:h-80 rounded-full bg-primary/80 shadow-[0_0_80px_rgba(245,158,11,0.45)] animate-pulse" />
    </div>
  );
};

export default CanvasFallback;
