export function ArchitectureDiagnostic() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-slate-950 p-5 sm:p-7">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.11)_1px,transparent_1px)] [background-size:30px_30px]" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-4 text-[10px] uppercase tracking-[0.16em] text-slate-600">
        <span className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />{" "}
          architecture map
        </span>
        <span className="font-mono text-emerald-300/70">v1.0 / review</span>
      </div>
      <svg
        viewBox="0 0 520 280"
        className="relative mt-5 h-auto w-full"
        role="img"
        aria-label="Mapa de arquitetura com camadas de produto, dados e segurança"
      >
        <defs>
          <linearGradient id="lineGlow" x1="0" x2="1">
            <stop offset="0" stopColor="#34d399" stopOpacity="0.15" />
            <stop offset="0.5" stopColor="#34d399" stopOpacity="0.9" />
            <stop offset="1" stopColor="#38bdf8" stopOpacity="0.25" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g
          fill="none"
          stroke="url(#lineGlow)"
          strokeWidth="1.5"
          strokeDasharray="5 6"
        >
          <path d="M72 72 C135 72 138 140 206 140" />
          <path d="M72 208 C135 208 138 140 206 140" />
          <path d="M314 140 C380 140 380 72 448 72" />
          <path d="M314 140 C380 140 380 208 448 208" />
          <path d="M260 92 V50" />
          <path d="M260 188 V230" />
        </g>
        <g fill="#081b20" stroke="#2dd4bf" strokeOpacity=".7">
          <rect x="24" y="42" width="96" height="60" rx="12" />
          <rect x="24" y="178" width="96" height="60" rx="12" />
          <rect
            x="206"
            y="105"
            width="108"
            height="70"
            rx="14"
            stroke="#34d399"
            strokeWidth="2"
          />
          <rect x="400" y="42" width="96" height="60" rx="12" />
          <rect x="400" y="178" width="96" height="60" rx="12" />
          <rect
            x="216"
            y="18"
            width="88"
            height="34"
            rx="10"
            stroke="#38bdf8"
            strokeOpacity=".55"
          />
          <rect
            x="216"
            y="228"
            width="88"
            height="34"
            rx="10"
            stroke="#a78bfa"
            strokeOpacity=".55"
          />
        </g>
        <g fill="#a7f3d0" fontFamily="sans-serif" fontSize="10">
          <text x="42" y="69">
            product
          </text>
          <text x="42" y="86" fill="#64748b">
            client layer
          </text>
          <text x="42" y="205">
            auth + API
          </text>
          <text x="42" y="222" fill="#64748b">
            service edge
          </text>
          <text x="228" y="135" fill="#ecfdf5" fontSize="11">
            core system
          </text>
          <text x="228" y="153" fill="#6ee7b7">
            decision node
          </text>
          <text x="418" y="69">
            data layer
          </text>
          <text x="418" y="86" fill="#64748b">
            PostgreSQL
          </text>
          <text x="418" y="205">
            observability
          </text>
          <text x="418" y="222" fill="#64748b">
            signals
          </text>
          <text x="237" y="39" fill="#7dd3fc">
            security
          </text>
          <text x="239" y="249" fill="#c4b5fd">
            deploy
          </text>
        </g>
        <g filter="url(#softGlow)">
          <circle cx="260" cy="140" r="8" fill="#34d399" />
          <circle cx="260" cy="140" r="3" fill="#ecfdf5" />
        </g>
      </svg>
      <div className="relative mt-1 grid grid-cols-3 gap-2 text-[9px] uppercase tracking-[0.13em] text-slate-600">
        <span>dependencies mapped</span>
        <span className="text-center">risk surface</span>
        <span className="text-right">next decision</span>
      </div>
    </div>
  );
}
