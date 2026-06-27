const BackgroundEffects = () => {
  return (
    <>
      {/* Glow superior */}
      <div className="fixed left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Glow izquierdo */}
      <div className="fixed left-[-200px] top-[40%] -z-10 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Glow derecho */}
      <div className="fixed right-[-150px] bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[120px]" />

      {/* Grid */}
      <div
        className="
          fixed
          inset-0
          -z-20
          opacity-[0.03]
          [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(to_right,#fff_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />
    </>
  );
};

export default BackgroundEffects;