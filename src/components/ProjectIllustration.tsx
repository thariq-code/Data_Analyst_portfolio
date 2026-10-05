type Props = {
  variant: string;
  live?: boolean;
};

/* ------------------------------------------------------------------
   Each project gets its own hand-drawn analytical illustration.
   Canvas: 640 x 300. Compositions never repeat: report canvas,
   spreadsheet grid, query window, feedback panels, time-series
   chart, scatter/regression, commit heatmap, schema + shelf.
------------------------------------------------------------------- */

function Observatory() {
  const kpis = ["TOTAL MODELS", "TOTAL DOWNLOADS", "TOTAL LIKES", "TOTAL AUTHORS"];

  return (
    <svg className="project-artwork" viewBox="0 0 640 300" role="img" aria-label="Illustration of a four-page Power BI report with KPI tiles, trend area and a popularity funnel">
      <defs>
        <linearGradient id="pi-obs-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8b6cf0" stopOpacity="0.4" />
          <stop offset="1" stopColor="#8b6cf0" stopOpacity="0.03" />
        </linearGradient>
      </defs>
      <rect width="640" height="300" fill="#f4f1fe" />
      <circle cx="588" cy="40" r="128" fill="#eae2ff" opacity="0.75" />
      <g className="pi-rings">
        <circle cx="588" cy="40" r="58" fill="none" stroke="#cbbaf8" strokeWidth="1.2" />
      </g>

      <rect x="34" y="26" width="572" height="248" rx="14" fill="#fff" stroke="#e3dbf9" />
      <path d="M34 58h572" stroke="#ece6fb" />

      {["ECOSYSTEM PULSE", "MODEL INTELLIGENCE", "RESEARCH", "MARKET & INSIGHTS"].map((tab, index) => (
        <g key={tab} className="pi-tab" style={{ animationDelay: `${index * 90}ms` }}>
          <rect
            x={50 + index * 140}
            y={35}
            width={130}
            height={17}
            rx="8"
            fill={index === 0 ? "#6d4fd6" : "#f7f4fe"}
            stroke={index === 0 ? "#6d4fd6" : "#e5def9"}
          />
          <text x={60 + index * 140} y={47} className="pi-micro" fill={index === 0 ? "#fff" : "#8b83a4"}>
            {tab.length > 14 ? `${tab.slice(0, 13)}…` : tab}
          </text>
        </g>
      ))}

      {kpis.map((kpi, index) => (
        <g key={kpi} className="pi-kpi" style={{ animationDelay: `${index * 110}ms` }}>
          <rect x={50 + index * 140} y={70} width={130} height={46} rx="10" fill="#faf8ff" stroke="#e9e2fb" />
          <text x={62 + index * 140} y={86} className="pi-micro" fill="#8d86a6">
            {kpi}
          </text>
          <rect x={62 + index * 140} y={94} width={54 - index * 6} height={7} rx="3.5" fill="#a68ff0" opacity={0.9 - index * 0.14} />
          <path
            className="pi-draw"
            pathLength={1}
            d={`M${62 + index * 140} 110 l11 -5 l9 6 l10 -9 l11 7 l10 -6`}
            fill="none"
            stroke="#6d4fd6"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </g>
      ))}

      <rect x="50" y="128" width="316" height="134" rx="10" fill="#fbfaff" stroke="#ece6fb" />
      <text x="64" y="148" className="pi-label" fill="#6f678c">
        TREND / ENGAGEMENT
      </text>
      <path d="M64 244h288M64 214h288M64 184h288M64 154h288" stroke="#efeafb" />
      <path
        className="pi-draw"
        pathLength={1}
        d="M64 238c36-9 44-30 78-26s42 24 70 9 44-44 78-36 44-6 66-26"
        fill="none"
        stroke="#6d4fd6"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        className="pi-fade"
        d="M64 238c36-9 44-30 78-26s42 24 70 9 44-44 78-36 44-6 66-26v68H64Z"
        fill="url(#pi-obs-area)"
      />
      {[
        [104, 224, 5],
        [164, 206, 7],
        [232, 214, 4],
        [296, 186, 8],
        [338, 200, 5],
      ].map(([cx, cy, r]) => (
        <circle key={cx} className="pi-pulse" cx={cx} cy={cy} r={r} fill="#fff" stroke="#8a68e6" strokeWidth="1.8" />
      ))}

      <rect x="380" y="128" width="226" height="134" rx="10" fill="#fbfaff" stroke="#ece6fb" />
      <text x="394" y="148" className="pi-label" fill="#6f678c">
        POPULARITY FUNNEL
      </text>
      {[104, 84, 64, 44].map((width, index) => (
        <g key={width} className="pi-row" style={{ animationDelay: `${index * 110}ms` }}>
          <rect
            className="pi-bar-h"
            x={493 - width / 2}
            y={164 + index * 22}
            width={width}
            height="13"
            rx="6.5"
            fill="#b39cf3"
            opacity={0.95 - index * 0.19}
          />
          <text x={394} y={174 + index * 22} className="pi-micro" fill="#a099b4">
            {["EXTREME", "VERY HIGH", "HIGH", "MEDIUM"][index]}
          </text>
        </g>
      ))}
      <text x="394" y="252" className="pi-micro" fill="#8b83a4">
        DOWNLOADS · LIKES · TRENDING SCORE
      </text>
    </svg>
  );
}

function Blinkit() {
  const slicers = ["MONTH", "REGION", "SEGMENT", "CATEGORY", "PAYMENT", "DELIVERY"];

  return (
    <svg className="project-artwork" viewBox="0 0 640 300" role="img" aria-label="Illustration of an Excel workbook with slicers, a PivotTable and a PivotChart of monthly revenue">
      <defs>
        <linearGradient id="pi-blink-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2e8a72" />
          <stop offset="1" stopColor="#a9dccd" />
        </linearGradient>
      </defs>
      <rect width="640" height="300" fill="#eef2f9" />
      <g opacity="0.7">
        {Array.from({ length: 17 }, (_, i) => (
          <path key={`v${i}`} d={`M${i * 40} 0v300`} stroke="#dde4f1" />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <path key={`h${i}`} d={`M0 ${i * 40}h640`} stroke="#dde4f1" />
        ))}
      </g>

      <rect x="28" y="22" width="584" height="256" rx="12" fill="#fff" stroke="#d9e0ee" />
      <path d="M28 54h584" stroke="#e6ebf5" />
      <rect x="42" y="32" width="48" height="15" rx="4" fill="#e9f5f0" stroke="#cfe7dd" />
      <text x="52" y="43" className="pi-micro" fill="#2f7f68">
        fx
      </text>
      <text x="100" y="43" className="pi-micro" fill="#8d97ab">
        =SUM(Orders[Revenue]) · MONTHLY TREND · ROAS BY CHANNEL
      </text>

      <rect x="42" y="66" width="102" height="198" rx="9" fill="#f7fafc" stroke="#e2e8f2" />
      <text x="52" y="84" className="pi-micro" fill="#7c869c">
        SLICERS
      </text>
      {slicers.map((chip, index) => (
        <g key={chip} className="pi-chip" style={{ animationDelay: `${index * 80}ms` }}>
          <rect
            x="52"
            y={94 + index * 28}
            width="82"
            height="20"
            rx="6"
            fill={index % 2 === 0 ? "#e2f3ed" : "#eff2f8"}
            stroke={index % 2 === 0 ? "#c2e3d7" : "#e0e5ef"}
          />
          <text x="60" y={107.5} className="pi-micro" fill={index % 2 === 0 ? "#2c7d66" : "#8a92a6"}>
            {chip}
          </text>
        </g>
      ))}

      <rect x="156" y="66" width="204" height="120" fill="#fff" stroke="#e4eaf4" />
      <rect x="156" y="66" width="204" height="22" fill="#eaf0f9" />
      {Array.from({ length: 5 }, (_, row) => (
        <g key={row}>
          <path d={`M156 ${88 + row * 20}h204`} stroke="#e9eef6" />
          <rect x="166" y={94 + row * 20} width={row === 0 ? 58 : 40 + row * 5} height="6" rx="3" fill="#c3d0e6" />
          <rect x="286" y={94 + row * 20} width={row === 0 ? 30 : 20 + row * 3} height="6" rx="3" fill="#dbe3f0" />
        </g>
      ))}
      <text x="156" y="204" className="pi-micro" fill="#7c869c">
        PIVOTTABLE · EXCEL DATA MODEL
      </text>
      <rect x="156" y="214" width="204" height="18" rx="6" fill="#f4f7fb" />
      <text x="164" y="227" className="pi-micro" fill="#8d97ab">
        8 CSV · customer_id / order_id / product_id
      </text>
      <g className="pi-row">
        <rect x="156" y="244" width="98" height="20" rx="7" fill="#eaf5f0" stroke="#cfe7dd" />
        <text x="166" y="257" className="pi-micro" fill="#2c7d66">
          PIVOTCHART
        </text>
        <rect x="262" y="244" width="98" height="20" rx="7" fill="#f4f6fa" stroke="#e2e8f2" />
        <text x="272" y="257" className="pi-micro" fill="#7c869c">
          POWER QUERY
        </text>
      </g>

      <rect x="372" y="66" width="228" height="198" rx="10" fill="#fbfdff" stroke="#e2e8f2" />
      <text x="386" y="86" className="pi-label" fill="#66708a">
        MONTHLY REVENUE TREND
      </text>
      {[
        { t: "DELIVERY TIME", x: 386, w: 34 },
        { t: "RATING MIX", x: 456, w: 28 },
        { t: "DAMAGE", x: 526, w: 40 },
      ].map((tile, index) => (
        <g key={tile.t} className="pi-kpi" style={{ animationDelay: `${index * 120}ms` }}>
          <rect x={tile.x} y="96" width="66" height="34" rx="8" fill="#f2f8f5" stroke="#dbeee7" />
          <text x={tile.x + 7} y="110" className="pi-micro" fill="#4c8a76">
            {tile.t.length > 10 ? `${tile.t.slice(0, 9)}…` : tile.t}
          </text>
          <rect x={tile.x + 7} y="117" width={tile.w} height="6" rx="3" fill="#4fae97" opacity={0.75 - index * 0.14} />
        </g>
      ))}
      <path d="M386 244h200" stroke="#dbe2ee" strokeWidth="1.2" />
      {[40, 62, 50, 78, 66, 94, 82].map((height, index) => (
        <rect
          key={index}
          className="pi-bar"
          style={{ animationDelay: `${index * 70}ms` }}
          x={388 + index * 29}
          y={244 - height}
          width="19"
          height={height}
          rx="4"
          fill="url(#pi-blink-bar)"
        />
      ))}
      <path
        className="pi-draw"
        pathLength={1}
        d="M397 208c18-24 26 8 44-16s22 18 40-8 24-26 42-34 22 8 40-2"
        fill="none"
        stroke="#4a6fd0"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <text x="386" y="258" className="pi-micro" fill="#8d97ab">
        REVENUE / ORDERS / CUSTOMERS / MARKETING
      </text>
    </svg>
  );
}

function SaasSql() {
  const code: [string, string][] = [
    ["SELECT", " c.company_name, SUM(p.amount) AS revenue"],
    ["FROM", " customers c"],
    ["LEFT JOIN", " subscriptions s ON c.customer_id = s.customer_id"],
    ["LEFT JOIN", " payments p ON s.subscription_id = p.subscription_id"],
    ["WHERE", " p.payment_status = 'Paid'"],
    ["GROUP BY", " c.customer_id, c.company_name"],
    ["ORDER BY", " revenue DESC"],
    ["LIMIT", " 10"],
  ];
  const tags = ["INNER JOIN", "CTE", "RANK()", "COALESCE", "INDEX", "VIEW"];

  return (
    <svg className="project-artwork" viewBox="0 0 640 300" role="img" aria-label="Illustration of a MySQL query window beside a ranked result grid">
      <defs>
        <linearGradient id="pi-saas-scan" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6d4fd6" stopOpacity="0" />
          <stop offset="0.5" stopColor="#6d4fd6" stopOpacity="0.13" />
          <stop offset="1" stopColor="#6d4fd6" stopOpacity="0" />
        </linearGradient>
        <clipPath id="pi-saas-clip">
          <rect x="26" y="54" width="374" height="164" />
        </clipPath>
      </defs>
      <rect width="640" height="300" fill="#eef1fa" />
      <g opacity="0.65">
        <circle cx="34" cy="286" r="96" fill="#e2e7f8" />
        <circle cx="612" cy="18" r="84" fill="#e4e9f9" />
      </g>

      <rect x="26" y="24" width="374" height="252" rx="12" fill="#fdfdff" stroke="#dde2f2" />
      <path d="M26 54h374" stroke="#e6eaf6" />
      {[42, 56, 70].map((cx, index) => (
        <circle key={cx} cx={cx} cy="40" r="4" fill={["#e6cfd6", "#e8e0c8", "#cfe3d8"][index]} />
      ))}
      <rect x="86" y="32" width="132" height="16" rx="5" fill="#e8ecf8" />
      <text x="94" y="44" className="pi-micro" fill="#5c6893">
        Business_Analytics.sql
      </text>

      <g clipPath="url(#pi-saas-clip)">
        <rect className="pi-scan" x="30" y="58" width="366" height="86" fill="url(#pi-saas-scan)" />
        {code.map(([keyword, rest], index) => (
          <g key={keyword + index} className="pi-code" style={{ animationDelay: `${index * 80}ms` }}>
            <text x="44" y={76 + index * 19} className="pi-code-text" fill="#7050c8">
              {keyword}
            </text>
            <text x={44 + keyword.length * 6.3} y={76 + index * 19} className="pi-code-text" fill="#66708c">
              {rest}
            </text>
          </g>
        ))}
      </g>
      <path d="M44 216h338" stroke="#e6eaf6" />
      {tags.map((tag, index) => (
        <g key={tag} className="pi-chip" style={{ animationDelay: `${index * 70}ms` }}>
          <rect x={44 + index * 58} y="228" width="54" height="17" rx="6" fill="#f0ecfd" stroke="#ddd2f8" />
          <text x={50 + index * 58} y="240" className="pi-micro" fill="#5f47ac">
            {tag}
          </text>
        </g>
      ))}
      <text x="44" y="266" className="pi-micro" fill="#8d95b0">
        30+ BUSINESS-FOCUSED QUERIES · SYNTHETIC PORTFOLIO DATA
      </text>

      <rect x="414" y="24" width="200" height="252" rx="12" fill="#fff" stroke="#dde2f2" />
      <text x="430" y="46" className="pi-label" fill="#66708a">
        RESULT GRID
      </text>
      <path d="M414 56h200" stroke="#e6eaf6" />
      {Array.from({ length: 7 }, (_, row) => (
        <g key={row} className="pi-row" style={{ animationDelay: `${row * 70}ms` }}>
          <rect x="428" y={68 + row * 24} width="15" height="15" rx="4" fill={row === 0 ? "#6d4fd6" : "#efeafb"} />
          <text x="432" y={79 + row * 24} className="pi-micro" fill={row === 0 ? "#fff" : "#8f88ac"}>
            {row + 1}
          </text>
          <rect x="452" y={72 + row * 24} width={94 - row * 6} height="6" rx="3" fill="#d4dbec" />
          <rect x="556" y={72 + row * 24} width={46 - row * 3} height="6" rx="3" fill={row === 0 ? "#8c72e4" : "#e7eaf4"} />
          <path d={`M428 ${92 + row * 24}h172`} stroke="#f1f3fa" />
        </g>
      ))}
      <rect x="428" y="240" width="172" height="24" rx="7" fill="#eef7f2" stroke="#d3eade" />
      <text x="438" y="255" className="pi-micro" fill="#2f7d64">
        6 TABLES · ER DIAGRAM · VALIDATION
      </text>
    </svg>
  );
}

function Airbnb() {
  const words: [string, number, number, boolean][] = [
    ["clean", 486, 76, true],
    ["host", 552, 92, false],
    ["location", 470, 104, true],
    ["quiet", 556, 116, false],
    ["space", 492, 128, false],
    ["check-in", 546, 142, false],
    ["comfort", 470, 152, true],
    ["value", 546, 164, false],
  ];
  const reviews = [
    { y: 66, tone: "#e7f6ee", edge: "#c8e8d8", label: "POSITIVE", w: 150 },
    { y: 118, tone: "#fdf4e5", edge: "#f2dfbc", label: "NEUTRAL", w: 112 },
    { y: 170, tone: "#fbecec", edge: "#f0cfd0", label: "NEGATIVE", w: 84 },
  ];

  return (
    <svg className="project-artwork" viewBox="0 0 640 300" role="img" aria-label="Illustration of review text cards, a sentiment donut and a keyword cloud">
      <rect width="640" height="300" fill="#fbf2f6" />
      <g opacity="0.5">
        {Array.from({ length: 45 }, (_, i) => (
          <circle key={i} cx={28 + (i % 15) * 44} cy={28 + Math.floor(i / 15) * 68} r="1.7" fill="#e0aec0" />
        ))}
      </g>

      <rect x="26" y="24" width="252" height="252" rx="12" fill="#fff" stroke="#f0dce5" />
      <text x="42" y="46" className="pi-label" fill="#95647c">
        INSIDE AIRBNB · REVIEWS
      </text>
      {reviews.map((card, index) => (
        <g key={card.label} className="pi-review" style={{ animationDelay: `${index * 120}ms` }}>
          <rect x="42" y={card.y} width="220" height="44" rx="9" fill={card.tone} stroke={card.edge} />
          <rect x="54" y={card.y + 13} width={card.w} height="6" rx="3" fill="#a9808f" opacity="0.45" />
          <rect x="54" y={card.y + 26} width={card.w - 38} height="6" rx="3" fill="#c9a7b3" opacity="0.5" />
          <text x="196" y={card.y + 18} className="pi-micro" fill="#8c6273">
            {card.label}
          </text>
        </g>
      ))}
      <path d="M42 228h220" stroke="#f4e5ec" />
      {["TEXT CLEAN", "BERT EMBED", "T5 SUMMARY", "TF-IDF"].map((step, index) => (
        <g key={step} className="pi-chip" style={{ animationDelay: `${index * 90}ms` }}>
          <rect x={42 + index * 56} y="240" width="52" height="18" rx="6" fill="#f9eff3" stroke="#eed7e0" />
          <text x={47 + index * 56} y="253" className="pi-micro" fontSize="6.4" fill="#9a6579">
            {step}
          </text>
        </g>
      ))}
      <text x="42" y="270" className="pi-micro" fill="#a4899a">
        KEYWORDS · SUMMARIES · SCORES
      </text>

      <circle cx="352" cy="120" r="56" fill="none" stroke="#f6e6ee" strokeWidth="19" />
      <path className="pi-donut" pathLength={1} d="M352 64 A56 56 0 0 1 400 152" fill="none" stroke="#c85f80" strokeWidth="19" strokeLinecap="round" />
      <path className="pi-donut-2" pathLength={1} d="M400 152 A56 56 0 0 1 322 174" fill="none" stroke="#efb87f" strokeWidth="19" strokeLinecap="round" />
      <circle className="pi-pulse" cx="352" cy="120" r="12" fill="#fff" stroke="#f3dbe6" strokeWidth="2" />
      <text x="352" y="118" textAnchor="middle" className="pi-label" fill="#8b6474">
        SCORE
      </text>
      <text x="352" y="132" textAnchor="middle" className="pi-micro" fill="#b391a0">
        LABEL
      </text>
      <text x="352" y="206" textAnchor="middle" className="pi-micro" fill="#9c7c8c">
        SENTIMENT DISTRIBUTION
      </text>

      <rect x="446" y="24" width="168" height="164" rx="12" fill="#fff" stroke="#f0dce5" />
      <text x="462" y="46" className="pi-label" fill="#95647c">
        KEY TOPICS
      </text>
      {words.map(([word, x, y, strong], index) => (
        <text
          key={word}
          className="pi-word"
          x={x}
          y={y}
          style={{ animationDelay: `${index * 70}ms` }}
          fontSize={strong ? 12 - index * 0.3 : 8.5}
          fontWeight={strong ? 800 : 500}
          fill={strong ? "#b4547a" : "#a99aa2"}
        >
          {word}
        </text>
      ))}
      <path d="M462 172 h136" stroke="#f6e8ef" />

      <rect x="446" y="200" width="168" height="76" rx="12" fill="#fff" stroke="#f0dce5" />
      <text x="462" y="220" className="pi-label" fill="#95647c">
        WORD CLOUD
      </text>
      {[22, 34, 28, 44, 30, 20, 38].map((height, index) => (
        <rect
          key={index}
          className="pi-bar"
          style={{ animationDelay: `${index * 60}ms` }}
          x={462 + index * 21}
          y={264 - height}
          width="14"
          height={height}
          rx="4"
          fill={index === 3 ? "#c85f80" : "#f0cadb"}
        />
      ))}
      <path d="M26 296h614" stroke="#f0dce5" />
    </svg>
  );
}

function Tesla() {
  const metrics = [
    { k: "MAE", v: "28.38", x: 356 },
    { k: "MSE", v: "1257.55", x: 442 },
    { k: "RMSE", v: "35.46", x: 528 },
  ];

  return (
    <svg className="project-artwork" viewBox="0 0 640 300" role="img" aria-label="Illustration of a historical price line with a 60-day window, forecast band and error metrics">
      <defs>
        <linearGradient id="pi-tesla-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4d6fc4" stopOpacity="0.3" />
          <stop offset="1" stopColor="#4d6fc4" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect width="640" height="300" fill="#edf1fa" />
      <path d="M0 240h640M0 196h640M0 152h640M0 108h640" stroke="#dde3f2" />
      <text x="34" y="42" className="pi-label" fill="#5f6b8f">
        TESLA · HISTORICAL OPEN PRICE
      </text>
      <text x="34" y="58" className="pi-micro" fill="#8d97ad">
        MINMAX SCALED · 75 / 25 TRAIN-TEST SPLIT
      </text>

      {metrics.map((metric, index) => (
        <g key={metric.k} className="pi-kpi" style={{ animationDelay: `${index * 110}ms` }}>
          <rect x={metric.x} y="26" width="78" height="34" rx="9" fill="#fff" stroke="#dde3f2" />
          <text x={metric.x + 10} y="40" className="pi-micro" fill="#7b86a3">
            {metric.k}
          </text>
          <text x={metric.x + 10} y="54" className="pi-metric" fill="#3f4f7c">
            {metric.v}
          </text>
        </g>
      ))}

      <path d="M160 68v196M344 68v196" stroke="#5f7fd0" strokeDasharray="3 4" strokeWidth="1.2" />
      <rect x="160" y="68" width="184" height="196" fill="#5f7fd0" opacity="0.08" />
      <text x="176" y="62" className="pi-micro" fill="#4f6aa8">
        60-DAY SEQUENCE WINDOW
      </text>

      <path
        className="pi-draw"
        pathLength={1}
        d="M34 232c34-6 44-34 74-30s36 28 66 16 34-44 64-38 36 22 64 10 34-40 64-34 34 6 66-6 26-8 54-16"
        fill="none"
        stroke="#4c6bc0"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        className="pi-fade"
        d="M34 232c34-6 44-34 74-30s36 28 66 16 34-44 64-38 36 22 64 10 34-40 64-34 34 6 66-6 26-8 54-16v96H34Z"
        fill="url(#pi-tesla-area)"
      />
      <path
        className="pi-fade"
        d="M486 122c18-6 30-12 46-16s32 4 54-2v44c-22 6-38 2-54 8s-28 10-46 16Z"
        fill="#7a63d8"
        opacity="0.16"
      />
      <path
        className="pi-dashed"
        d="M486 134c18-6 30-12 46-16s32 2 54-4"
        fill="none"
        stroke="#6a51c9"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <text x="492" y="212" className="pi-micro" fill="#6a51c9">
        PREDICTED
      </text>
      {[
        [108, 202],
        [196, 218],
        [284, 172],
        [372, 146],
      ].map(([cx, cy]) => (
        <circle key={cx} className="pi-pulse" cx={cx} cy={cy} r="5" fill="#fff" stroke="#4c6bc0" strokeWidth="2.2" />
      ))}
      <path d="M34 264h572" stroke="#dbe2f0" />
      <text x="34" y="282" className="pi-micro" fill="#8d97ad">
        ACTUAL PRICE · PREDICTED PRICE · EVALUATION ERROR
      </text>
    </svg>
  );
}

function Cardeko() {
  const points: [number, number, number][] = [
    [58, 218, 4],
    [88, 196, 5],
    [112, 208, 3.5],
    [142, 172, 5.5],
    [168, 186, 4],
    [198, 148, 6],
    [224, 164, 4],
    [254, 124, 5.5],
    [282, 138, 4.5],
    [308, 104, 6],
    [332, 118, 4],
  ];
  const features = ["VEHICLE AGE", "KM DRIVEN", "MILEAGE", "ENGINE CC", "FUEL TYPE", "SELLER TYPE", "TRANSMISSION", "SEATS"];
  const models = [
    { name: "RANDOM FOREST", value: 96, best: true },
    { name: "DECISION TREE", value: 78 },
    { name: "SVR", value: 64 },
    { name: "RIDGE", value: 52 },
    { name: "LINEAR REG.", value: 46 },
    { name: "LASSO", value: 38 },
  ];

  return (
    <svg className="project-artwork" viewBox="0 0 640 300" role="img" aria-label="Illustration of a price scatter plot with a fitted line and a regression model comparison">
      <rect width="640" height="300" fill="#f2effb" />
      <circle cx="60" cy="272" r="116" fill="#e9e2fa" opacity="0.75" />

      <rect x="26" y="24" width="332" height="252" rx="12" fill="#fff" stroke="#e6def7" />
      <text x="42" y="46" className="pi-label" fill="#6f6490">
        PRICE vs KILOMETERS
      </text>
      <path d="M42 236h300M42 62v174" stroke="#eae3f8" strokeWidth="1.2" />
      {Array.from({ length: 4 }, (_, i) => (
        <path key={i} d={`M42 ${94 + i * 36}h300`} stroke="#f5f1fc" />
      ))}
      {points.map(([cx, cy, r], index) => (
        <circle
          key={cx}
          className="pi-dot"
          style={{ animationDelay: `${index * 55}ms` }}
          cx={cx}
          cy={cy}
          r={r}
          fill="#c9b8f0"
          stroke="#fff"
          strokeWidth="1.2"
        />
      ))}
      <path
        className="pi-fade"
        d="M42 216c60-10 90-42 142-58s86-38 158-60v40c-72 22-106 42-158 60s-82 46-142 56Z"
        fill="#8f79e0"
        opacity="0.12"
      />
      <path
        className="pi-draw"
        pathLength={1}
        d="M42 208c60-10 90-42 142-58s86-38 158-58"
        fill="none"
        stroke="#7056cf"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <text x="42" y="78" className="pi-micro" fill="#7a6fa0">
        FITTED PRICE TREND · USED-CAR ATTRIBUTES
      </text>
      <path d="M42 240h300" stroke="#f1ecfb" />
      {features.map((feature, index) => (
        <g key={feature} className="pi-chip" style={{ animationDelay: `${index * 55}ms` }}>
          <text
            x={42 + (index % 4) * 76}
            y={index < 4 ? 256 : 270}
            className="pi-micro"
            fontSize="6.4"
            fill={index < 4 ? "#7a6fa0" : "#a8a0bd"}
          >
            {feature}
          </text>
        </g>
      ))}

      <rect x="374" y="24" width="240" height="252" rx="12" fill="#fff" stroke="#e6def7" />
      <text x="390" y="46" className="pi-label" fill="#6f6490">
        REGRESSION COMPARISON
      </text>
      <path d="M374 56h240" stroke="#efe9fb" />
      {models.map((model, index) => (
        <g key={model.name} className="pi-model" style={{ animationDelay: `${index * 90}ms` }}>
          <text x="390" y={78 + index * 30} className="pi-micro" fill={model.best ? "#5b44b7" : "#8d87a8"}>
            {model.name}
          </text>
          <rect x="390" y={84 + index * 30} width="208" height="8" rx="4" fill="#f3eefc" />
          <rect
            className="pi-meter"
            x="390"
            y={84 + index * 30}
            width={(model.value / 100) * 208}
            height="8"
            rx="4"
            fill={model.best ? "#7056cf" : "#bda9ec"}
          />
        </g>
      ))}
      <rect x="390" y="256" width="208" height="18" rx="6" fill="#f7f3fe" />
      <text x="399" y="269" className="pi-micro" fill="#6e58b8">
        BEST MODEL · RMSE 213890.68 · R² 0.9341
      </text>
    </svg>
  );
}

function Burnout() {
  const levels = [0.12, 0.32, 0.55, 0.78, 1];
  const features = ["CONSISTENCY SCORE", "STRESS PATTERN", "SENTIMENT SIGNAL", "BUG-FIX FREQUENCY"];

  return (
    <svg className="project-artwork" viewBox="0 0 640 300" role="img" aria-label="Illustration of a GitHub commit heatmap with a night-coding clock and engineered feature list">
      <rect width="640" height="300" fill="#ebeaf9" />
      <g opacity="0.5">
        <circle cx="600" cy="264" r="98" fill="#ded9f6" />
      </g>

      <rect x="26" y="24" width="336" height="252" rx="12" fill="#fff" stroke="#e3dcf5" />
      <text x="42" y="46" className="pi-label" fill="#68608a">
        GITHUB PUBLIC COMMITS
      </text>
      <text x="42" y="62" className="pi-micro" fill="#a09ab6">
        MON · TUE · WED · THU · FRI · SAT · SUN
      </text>
      {Array.from({ length: 17 }, (_, week) =>
        Array.from({ length: 7 }, (_, day) => {
          const level = levels[(week + day * 3 + (week % 4)) % levels.length];
          return (
            <rect
              key={`${week}-${day}`}
              className="pi-cell"
              style={{ animationDelay: `${((week * 5 + day * 11) % 40) * 22}ms` }}
              x={42 + week * 18}
              y={70 + day * 18}
              width="14"
              height="14"
              rx="4"
              fill="#6f5ad0"
              opacity={level}
            />
          );
        }),
      )}
      <path d="M42 210h306" stroke="#efeafb" />
      <text x="42" y="226" className="pi-micro" fill="#8b84a4">
        WEEKLY COMMIT FREQUENCY
      </text>
      <path
        className="pi-draw"
        pathLength={1}
        d="M42 258c26-14 34 6 56-12s30 12 52-6 28-24 50-16 30 22 54 10 34-18 52-8"
        fill="none"
        stroke="#7f66d8"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      <rect x="378" y="24" width="236" height="122" rx="12" fill="#fff" stroke="#e3dcf5" />
      <text x="394" y="46" className="pi-label" fill="#68608a">
        NIGHT CODING 22:00 — 05:00
      </text>
      <g transform="translate(430 92)">
        <circle r="27" fill="none" stroke="#f1ecfc" strokeWidth="7" />
        <path className="pi-ring" pathLength={1} d="M0 -27 A27 27 0 1 1 -25.6 8.3" fill="none" stroke="#6f5ad0" strokeWidth="7" strokeLinecap="round" />
        <path className="pi-hand" d="M0 0 V-19" stroke="#4b3f78" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M0 0 L13 7" stroke="#9b87e8" strokeWidth="2.2" strokeLinecap="round" />
        <circle r="2.8" fill="#4b3f78" />
      </g>
      {[
        { t: "WEEKEND RATIO", w: 46 },
        { t: "AVG SENTIMENT", w: 62 },
        { t: "ACTIVITY SPAN", w: 34 },
      ].map((row, index) => (
        <g key={row.t} className="pi-row" style={{ animationDelay: `${index * 110}ms` }}>
          <text x="478" y={78 + index * 24} className="pi-micro" fill="#8b84a4">
            {row.t}
          </text>
          <rect x="478" y={84 + index * 24} width="118" height="6" rx="3" fill="#f2eefc" />
          <rect className="pi-meter" x="478" y={84 + index * 24} width={row.w + 40} height="6" rx="3" fill="#bda9ec" />
        </g>
      ))}

      <rect x="378" y="156" width="236" height="120" rx="12" fill="#fff" stroke="#e3dcf5" />
      <text x="394" y="178" className="pi-label" fill="#68608a">
        ENGINEERED FEATURES
      </text>
      {features.map((feature, index) => (
        <g key={feature} className="pi-row" style={{ animationDelay: `${index * 100}ms` }}>
          <circle cx="398" cy={196 + index * 20} r="3.4" fill="#7f66d8" />
          <text x="412" y={200 + index * 20} className="pi-micro" fill="#7b748f">
            {feature}
          </text>
        </g>
      ))}
      <rect x="394" y="252" width="204" height="18" rx="6" fill="#f6f3fe" />
      <text x="404" y="265" className="pi-micro" fill="#6e58b8">
        FLASK · MONGODB ATLAS · RANDOM FOREST
      </text>
    </svg>
  );
}

function Bookstore() {
  const shelves = [56, 82, 44, 70, 90, 62];
  const tables = [
    { x: 292, y: 30, label: "CUSTOMERS", key: "customer_id PK" },
    { x: 466, y: 30, label: "ORDERS", key: "order_id PK" },
    { x: 292, y: 106, label: "ORDER_ITEMS", key: "order_id · book_id FK" },
    { x: 466, y: 106, label: "BOOKS", key: "book_id PK" },
  ];

  return (
    <svg className="project-artwork" viewBox="0 0 640 300" role="img" aria-label="Illustration of a bookshelf-style inventory chart next to a relational schema for a bookstore database">
      <rect width="640" height="300" fill="#f4f0f9" />
      <circle cx="76" cy="46" r="118" fill="#ebe3f4" opacity="0.7" />

      <rect x="26" y="24" width="240" height="252" rx="12" fill="#fff" stroke="#e7dff2" />
      <text x="42" y="46" className="pi-label" fill="#74658b">
        STOCK BY CATEGORY
      </text>
      <path d="M42 236h208" stroke="#eee7f7" strokeWidth="1.6" />
      {shelves.map((height, index) => (
        <g key={index} className="pi-book" style={{ animationDelay: `${index * 85}ms` }}>
          <rect
            x={46 + index * 35}
            y={236 - height}
            width="25"
            height={height}
            rx="3"
            fill={index === 4 ? "#9a6a37" : "#e0d3ee"}
          />
          <rect x={46 + index * 35} y={236 - height} width="25" height="7" rx="3" fill="#fff" opacity="0.45" />
        </g>
      ))}
      <text x="42" y="256" className="pi-micro" fill="#8d84a2">
        BOOKS · CUSTOMERS · ORDERS
      </text>
      <text x="42" y="270" className="pi-micro" fill="#8d84a2">
        ORDER_ITEMS · ADMINS
      </text>

      {tables.map((table, index) => (
        <g key={table.label} className="pi-table" style={{ animationDelay: `${index * 110}ms` }}>
          <rect x={table.x} y={table.y} width="150" height="52" rx="10" fill="#fff" stroke="#e2d8f1" />
          <path d={`M${table.x} ${table.y + 20}h150`} stroke="#f0eafb" />
          <rect x={table.x + 150 - 22} y={table.y + 6} width="14" height="8" rx="3" fill="#d8c8f0" />
          <text x={table.x + 12} y={table.y + 14} className="pi-micro" fill="#6f5aa8">
            {table.label}
          </text>
          <text x={table.x + 12} y={table.y + 38} className="pi-micro" fill="#a29bb6">
            {table.key}
          </text>
        </g>
      ))}
      <path
        d="M442 56h24M367 82v24M442 132h24M367 158v22M442 158h24"
        stroke="#b9a6e6"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />

      <rect x="292" y="176" width="324" height="34" rx="9" fill="#fff" stroke="#e2d8f1" />
      <text x="304" y="192" className="pi-micro" fill="#6f5aa8">
        ONE CUSTOMER → MANY ORDERS
      </text>
      <text x="304" y="204" className="pi-micro" fill="#a29bb6">
        ORDER_ITEMS CONNECTS ORDERS AND BOOKS
      </text>

      {[
        { t: "ProcessOrder()", tone: "#e9f6ef", edge: "#cbe6d6", text: "#3b7f5f" },
        { t: "UpdateStock", tone: "#fdf1e5", edge: "#f2ddc4", text: "#94663b" },
        { t: "COMMIT / ROLLBACK", tone: "#eef1fb", edge: "#d8e0f3", text: "#4f639c" },
      ].map((item, index) => (
        <g key={item.t} className="pi-chip" style={{ animationDelay: `${index * 110}ms` }}>
          <rect x={292 + index * 110} y="222" width="104" height="20" rx="7" fill={item.tone} stroke={item.edge} />
          <text x={300 + index * 110} y="235" className="pi-micro" fontSize="6.6" fill={item.text}>
            {item.t}
          </text>
        </g>
      ))}
      <rect x="292" y="250" width="324" height="26" rx="8" fill="#f8f5ff" />
      <text x="304" y="267" className="pi-micro" fill="#8d84a2">
        EXPLAIN · INDEX idx_customer_email · VIEW OrderSummary
      </text>
    </svg>
  );
}

const illustrations: Record<string, () => React.JSX.Element> = {
  observatory: Observatory,
  blinkit: Blinkit,
  saas: SaasSql,
  airbnb: Airbnb,
  tesla: Tesla,
  cardeko: Cardeko,
  burnout: Burnout,
  bookstore: Bookstore,
};

export const illustrationCaptions: Record<string, { domain: string; tagline: string }> = {
  observatory: { domain: "POWER BI · DAX", tagline: "Four-page report canvas" },
  blinkit: { domain: "EXCEL · PIVOT", tagline: "Eight connected datasets" },
  saas: { domain: "MYSQL · SQL", tagline: "Query-to-result analysis" },
  airbnb: { domain: "NLP · FEEDBACK", tagline: "Sentiment, summary, topics" },
  tesla: { domain: "TIME-SERIES", tagline: "Rolling-window forecasting" },
  cardeko: { domain: "PRICING", tagline: "Feature-to-value comparison" },
  burnout: { domain: "BEHAVIORAL", tagline: "Commit pattern analytics" },
  bookstore: { domain: "SCHEMA", tagline: "Relational design & flow" },
};

export function ProjectIllustration({ variant, live = false }: Props) {
  const Art = illustrations[variant] ?? Observatory;
  return (
    <div className={`illustration${live ? " is-live" : ""}`} data-variant={variant}>
      <Art />
    </div>
  );
}
