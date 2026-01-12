const WaveformVisualizer = () => {
  const bars = Array.from({ length: 24 }, (_, i) => {
    const height = Math.sin((i / 24) * Math.PI) * 60 + 20;
    return height;
  });

  return (
    <div className="flex items-center justify-center gap-1 h-32">
      {bars.map((height, i) => (
        <div
          key={i}
          className="wave-bar w-1.5 rounded-full bg-gradient-primary animate-wave opacity-80"
          style={{
            height: `${height}%`,
            animationDelay: `${i * 0.08}s`,
          }}
        />
      ))}
    </div>
  );
};

export default WaveformVisualizer;
