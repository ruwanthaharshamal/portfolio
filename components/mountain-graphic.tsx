export function MountainGraphic({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="skyGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#450a0a" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#280e15" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0d080b" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="ridgeFar" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#681926" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1a0c12" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="ridgeMid" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#881f2f" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#150a0f" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="ridgeFront" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#4c141d" />
            <stop offset="100%" stopColor="#0d080b" />
          </linearGradient>
        </defs>

        {/* Ambient Sky Glow */}
        <rect width="600" height="400" fill="url(#skyGlow)" />

        {/* Far Mountain Ridge */}
        <path
          d="M0 260 L90 200 L180 230 L270 160 L360 210 L460 140 L540 190 L600 170 L600 400 L0 400 Z"
          fill="url(#ridgeFar)"
        />

        {/* Mid Mountain Peaks */}
        <path
          d="M0 300 L110 240 L190 270 L300 190 L400 250 L490 200 L600 260 L600 400 L0 400 Z"
          fill="url(#ridgeMid)"
        />

        {/* Front Dunes / Ridges with lighting edge */}
        <path
          d="M0 340 Q150 260 320 310 T600 290 L600 400 L0 400 Z"
          fill="url(#ridgeFront)"
        />
        <path
          d="M-20 370 Q160 300 380 340 T620 330 L620 400 L-20 400 Z"
          fill="#10070a"
          opacity="0.9"
        />
      </svg>
    </div>
  )
}

