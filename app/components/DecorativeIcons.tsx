// Decorative SVG icons used throughout the invitation (birds, ornaments, double-happiness symbol)

export function BirdIcon({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stylized swallow: two swept wings meeting at a small body, forked tail */}
      <path
        d="M60 30
           C 52 18, 36 10, 8 12
           C 28 18, 40 24, 48 30
           C 40 28, 24 26, 4 32
           C 26 32, 42 36, 50 32
           L 60 36
           L 70 32
           C 78 36, 94 32, 116 32
           C 96 26, 80 28, 72 30
           C 80 24, 92 18, 112 12
           C 84 10, 68 18, 60 30 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DoubleHappinessBadge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* simplified geometric border ticks */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        return (
          <line
            key={i}
            x1="60"
            y1="4"
            x2="60"
            y2="12"
            stroke="currentColor"
            strokeWidth="1.5"
            transform={`rotate(${angle} 60 60)`}
          />
        );
      })}
      <text
        x="60"
        y="78"
        textAnchor="middle"
        fontSize="48"
        fontFamily="serif"
        fill="currentColor"
      >
        囍
      </text>
    </svg>
  );
}

export function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 2H20M2 2V20M2 2C2 2 14 4 18 14C20 19 20 24 20 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M2 30C2 30 2 14 14 6" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

export function FlowerDivider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="12" x2="80" y2="12" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="12" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="100" cy="12" r="1.5" fill="currentColor" />
      <line x1="120" y1="12" x2="200" y2="12" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
