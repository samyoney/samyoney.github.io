from __future__ import annotations

import base64
import html
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BRANDS = ROOT / "public" / "static" / "images" / "projects" / "brands"
OUTPUT = ROOT / "public" / "static" / "images" / "projects"


def data_uri(path: Path) -> str:
    mime = "image/svg+xml" if path.suffix == ".svg" else "image/png"
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{encoded}"


def phone_illustration(accent: str, secondary: str) -> str:
    return f"""
      <g transform="translate(1040 135)" filter="url(#shadow)">
        <rect width="360" height="630" rx="58" fill="#0b1220"/>
        <rect x="18" y="18" width="324" height="594" rx="44" fill="#f8fafc"/>
        <rect x="126" y="34" width="108" height="14" rx="7" fill="#cbd5e1"/>
        <circle cx="78" cy="122" r="34" fill="{accent}" opacity=".15"/>
        <path d="M65 110c12-12 25-11 37 2l-18 18c-13-1-22-8-19-20z" fill="{accent}"/>
        <rect x="128" y="98" width="142" height="15" rx="8" fill="#1e293b"/>
        <rect x="128" y="126" width="102" height="10" rx="5" fill="#94a3b8"/>
        <rect x="54" y="190" width="252" height="116" rx="24" fill="{accent}"/>
        <circle cx="112" cy="248" r="28" fill="#fff" opacity=".95"/>
        <path d="M102 239c10-9 20-8 29 2l-14 14c-10-1-17-6-15-16z" fill="{accent}"/>
        <rect x="157" y="225" width="104" height="14" rx="7" fill="#fff" opacity=".95"/>
        <rect x="157" y="252" width="72" height="10" rx="5" fill="#fff" opacity=".65"/>
        <rect x="54" y="340" width="252" height="88" rx="22" fill="#e2e8f0"/>
        <circle cx="96" cy="384" r="22" fill="{secondary}" opacity=".85"/>
        <rect x="136" y="365" width="126" height="13" rx="7" fill="#334155"/>
        <rect x="136" y="390" width="83" height="9" rx="5" fill="#94a3b8"/>
        <rect x="54" y="454" width="116" height="92" rx="22" fill="#dbeafe"/>
        <rect x="190" y="454" width="116" height="92" rx="22" fill="#ecfeff"/>
      </g>
    """


def pos_illustration(accent: str, secondary: str) -> str:
    return f"""
      <g transform="translate(860 150)" filter="url(#shadow)">
        <rect width="560" height="390" rx="38" fill="#111827"/>
        <rect x="22" y="22" width="516" height="346" rx="24" fill="#f8fafc"/>
        <rect x="54" y="60" width="280" height="52" rx="14" fill="{accent}"/>
        <rect x="54" y="140" width="126" height="82" rx="18" fill="#dbeafe"/>
        <rect x="196" y="140" width="126" height="82" rx="18" fill="#fee2e2"/>
        <rect x="54" y="238" width="126" height="82" rx="18" fill="#dcfce7"/>
        <rect x="196" y="238" width="126" height="82" rx="18" fill="#fef3c7"/>
        <rect x="360" y="60" width="144" height="196" rx="20" fill="#e2e8f0"/>
        <rect x="380" y="86" width="104" height="13" rx="7" fill="#475569"/>
        <rect x="380" y="120" width="104" height="9" rx="5" fill="#94a3b8"/>
        <rect x="380" y="146" width="78" height="9" rx="5" fill="#94a3b8"/>
        <rect x="360" y="278" width="144" height="42" rx="12" fill="{secondary}"/>
        <path d="M230 390h100l34 86H196z" fill="#334155"/>
        <rect x="146" y="466" width="268" height="34" rx="17" fill="#1e293b"/>
      </g>
      <g transform="translate(1240 570) rotate(-7)" filter="url(#shadow)">
        <rect width="220" height="132" rx="22" fill="#fff"/>
        <rect x="24" y="26" width="172" height="22" rx="8" fill="{accent}" opacity=".22"/>
        <path d="M35 83h150" stroke="#334155" stroke-width="15" stroke-linecap="round" stroke-dasharray="8 14"/>
      </g>
    """


def dashboard_illustration(accent: str, secondary: str) -> str:
    return f"""
      <g transform="translate(820 150)" filter="url(#shadow)">
        <rect width="650" height="500" rx="42" fill="#f8fafc"/>
        <rect width="650" height="72" rx="42" fill="#e2e8f0"/>
        <circle cx="42" cy="36" r="9" fill="#fb7185"/>
        <circle cx="70" cy="36" r="9" fill="#fbbf24"/>
        <circle cx="98" cy="36" r="9" fill="#34d399"/>
        <rect x="36" y="108" width="170" height="356" rx="24" fill="#e2e8f0"/>
        <rect x="66" y="146" width="110" height="14" rx="7" fill="{accent}"/>
        <rect x="66" y="190" width="92" height="11" rx="6" fill="#64748b"/>
        <rect x="66" y="224" width="112" height="11" rx="6" fill="#94a3b8"/>
        <rect x="66" y="258" width="76" height="11" rx="6" fill="#94a3b8"/>
        <rect x="238" y="108" width="174" height="126" rx="24" fill="{accent}"/>
        <rect x="438" y="108" width="174" height="126" rx="24" fill="{secondary}"/>
        <path d="M266 202l32-38 32 18 42-50" fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="488" cy="168" r="34" fill="#fff" opacity=".92"/>
        <path d="M488 138v30l24 18" fill="none" stroke="{secondary}" stroke-width="12" stroke-linecap="round"/>
        <rect x="238" y="264" width="374" height="200" rx="24" fill="#e2e8f0"/>
        <path d="M270 411l70-72 58 42 74-88 108 92" fill="none" stroke="{accent}" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    """


def ticket_illustration(accent: str, secondary: str) -> str:
    return f"""
      <g transform="translate(880 205) rotate(-7)" filter="url(#shadow)">
        <path d="M40 0h520a40 40 0 0 1 40 40v90a42 42 0 0 0 0 84v90a40 40 0 0 1-40 40H40a40 40 0 0 1-40-40v-90a42 42 0 0 0 0-84V40A40 40 0 0 1 40 0z" fill="#fff"/>
        <rect x="56" y="54" width="220" height="28" rx="14" fill="{accent}"/>
        <rect x="56" y="112" width="310" height="14" rx="7" fill="#94a3b8"/>
        <rect x="56" y="150" width="250" height="14" rx="7" fill="#cbd5e1"/>
        <path d="M424 70v210" stroke="#cbd5e1" stroke-width="5" stroke-dasharray="13 14"/>
        <rect x="466" y="88" width="82" height="82" rx="15" fill="{secondary}" opacity=".18"/>
        <path d="M486 129l15 15 30-34" fill="none" stroke="{secondary}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M58 250h310" stroke="#1e293b" stroke-width="22" stroke-linecap="round" stroke-dasharray="5 16"/>
      </g>
    """


def loyalty_illustration(accent: str, secondary: str) -> str:
    return f"""
      <g transform="translate(900 180)" filter="url(#shadow)">
        <g transform="rotate(-8 240 250)">
          <rect width="480" height="300" rx="36" fill="#fff"/>
          <circle cx="88" cy="88" r="42" fill="{accent}"/>
          <rect x="158" y="60" width="238" height="24" rx="12" fill="#1e293b"/>
          <rect x="158" y="104" width="160" height="14" rx="7" fill="#94a3b8"/>
          <rect x="54" y="192" width="372" height="54" rx="18" fill="{secondary}" opacity=".17"/>
          <path d="M80 219h320" stroke="{secondary}" stroke-width="20" stroke-linecap="round" stroke-dasharray="6 16"/>
        </g>
        <g transform="translate(315 292) rotate(10)">
          <rect width="250" height="170" rx="28" fill="{accent}"/>
          <circle cx="62" cy="58" r="24" fill="#fff" opacity=".9"/>
          <path d="M108 52h92M108 82h62" stroke="#fff" stroke-width="12" stroke-linecap="round" opacity=".85"/>
          <path d="M44 128h162" stroke="#fff" stroke-width="14" stroke-linecap="round" stroke-dasharray="4 14"/>
        </g>
      </g>
    """


def field_illustration(accent: str, secondary: str) -> str:
    return f"""
      <g transform="translate(900 140)" filter="url(#shadow)">
        <rect x="120" width="360" height="620" rx="58" fill="#0f172a"/>
        <rect x="140" y="22" width="320" height="576" rx="42" fill="#f8fafc"/>
        <rect x="178" y="76" width="244" height="126" rx="24" fill="{accent}"/>
        <path d="M230 144l42 42 92-100" fill="none" stroke="#fff" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="178" y="238" width="244" height="74" rx="20" fill="#e2e8f0"/>
        <circle cx="216" cy="275" r="18" fill="{secondary}"/>
        <rect x="252" y="258" width="132" height="12" rx="6" fill="#334155"/>
        <rect x="252" y="284" width="88" height="9" rx="5" fill="#94a3b8"/>
        <rect x="178" y="338" width="244" height="74" rx="20" fill="#e2e8f0"/>
        <circle cx="216" cy="375" r="18" fill="#fbbf24"/>
        <rect x="252" y="358" width="132" height="12" rx="6" fill="#334155"/>
        <rect x="252" y="384" width="104" height="9" rx="5" fill="#94a3b8"/>
        <rect x="178" y="452" width="244" height="70" rx="22" fill="{secondary}"/>
      </g>
      <g transform="translate(840 535) rotate(-18)">
        <circle cx="86" cy="86" r="78" fill="#fff"/>
        <path d="M49 115l66-66M80 42l43 43M42 80l43 43" stroke="{accent}" stroke-width="20" stroke-linecap="round"/>
      </g>
    """


def map_illustration(accent: str, secondary: str) -> str:
    return f"""
      <g transform="translate(840 140)" filter="url(#shadow)">
        <rect width="650" height="540" rx="44" fill="#f8fafc"/>
        <path d="M0 112l180 88 180-96 290 114v278l-252-96-202 94L0 416z" fill="#e2e8f0"/>
        <path d="M180 200v294M360 104v296" stroke="#cbd5e1" stroke-width="12"/>
        <path d="M48 350c88-112 176-112 264-14s180 76 290-55" fill="none" stroke="{secondary}" stroke-width="18" stroke-linecap="round" stroke-dasharray="4 30"/>
        <g transform="translate(284 132)">
          <path d="M76 0c42 0 76 34 76 76 0 60-76 142-76 142S0 136 0 76C0 34 34 0 76 0z" fill="{accent}"/>
          <circle cx="76" cy="76" r="34" fill="#fff"/>
          <path d="M76 56v40M56 76h40" stroke="{accent}" stroke-width="14" stroke-linecap="round"/>
        </g>
      </g>
    """


def home_illustration(accent: str, secondary: str) -> str:
    return f"""
      <g transform="translate(845 145)" filter="url(#shadow)">
        <path d="M70 300L340 70l270 230v280H70z" fill="#f8fafc"/>
        <path d="M25 314L340 38l315 276" fill="none" stroke="{accent}" stroke-width="42" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="275" y="370" width="130" height="210" rx="20" fill="{secondary}"/>
        <rect x="112" y="350" width="112" height="112" rx="18" fill="#dbeafe"/>
        <rect x="456" y="350" width="112" height="112" rx="18" fill="#dbeafe"/>
        <path d="M168 350v112M112 406h112M512 350v112M456 406h112" stroke="#93c5fd" stroke-width="10"/>
        <g fill="none" stroke="{accent}" stroke-width="12" stroke-linecap="round">
          <path d="M252 250c48-48 128-48 176 0"/>
          <path d="M282 282c32-30 84-30 116 0"/>
        </g>
        <circle cx="340" cy="316" r="12" fill="{accent}"/>
      </g>
    """


def reader_illustration(accent: str, secondary: str) -> str:
    return f"""
      <g transform="translate(900 145)" filter="url(#shadow)">
        <rect width="500" height="620" rx="48" fill="#0f172a"/>
        <rect x="22" y="22" width="456" height="576" rx="34" fill="#f8fafc"/>
        <rect x="58" y="66" width="384" height="88" rx="22" fill="{accent}"/>
        <rect x="58" y="190" width="170" height="278" rx="24" fill="#dbeafe"/>
        <rect x="250" y="190" width="192" height="128" rx="24" fill="{secondary}" opacity=".18"/>
        <rect x="250" y="342" width="192" height="126" rx="24" fill="#e2e8f0"/>
        <path d="M92 236h100M92 270h72M92 394h98M280 234h120M280 270h82M280 386h126M280 420h94" stroke="#334155" stroke-width="13" stroke-linecap="round"/>
        <rect x="58" y="504" width="384" height="48" rx="16" fill="{secondary}"/>
      </g>
    """


def vision_illustration(accent: str, secondary: str) -> str:
    return f"""
      <g transform="translate(870 155)" filter="url(#shadow)">
        <rect width="570" height="560" rx="46" fill="#f8fafc"/>
        <circle cx="285" cy="230" r="150" fill="{accent}" opacity=".10"/>
        <path d="M94 230s78-116 191-116 191 116 191 116-78 116-191 116S94 230 94 230z" fill="#fff" stroke="{accent}" stroke-width="20"/>
        <circle cx="285" cy="230" r="72" fill="{accent}"/>
        <circle cx="285" cy="230" r="28" fill="#0f172a"/>
        <path d="M118 408h334" stroke="#cbd5e1" stroke-width="18" stroke-linecap="round"/>
        <path d="M118 408h236" stroke="{secondary}" stroke-width="18" stroke-linecap="round"/>
        <rect x="118" y="454" width="150" height="52" rx="18" fill="{accent}"/>
        <rect x="288" y="454" width="164" height="52" rx="18" fill="#e2e8f0"/>
      </g>
    """


def security_illustration(accent: str, secondary: str) -> str:
    return f"""
      <g transform="translate(940 135)" filter="url(#shadow)">
        <rect width="400" height="630" rx="58" fill="#0f172a"/>
        <rect x="20" y="20" width="360" height="590" rx="42" fill="#f8fafc"/>
        <path d="M200 82l116 42v92c0 88-49 151-116 184-67-33-116-96-116-184v-92z" fill="{accent}"/>
        <path d="M146 224l38 38 76-86" fill="none" stroke="#fff" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="74" y="438" width="252" height="48" rx="16" fill="#e2e8f0"/>
        <rect x="74" y="510" width="252" height="54" rx="18" fill="{secondary}"/>
      </g>
      <circle cx="1325" cy="655" r="92" fill="{secondary}" opacity=".22"/>
      <path d="M1282 655h86M1325 612v86" stroke="{secondary}" stroke-width="18" stroke-linecap="round"/>
    """


def gallery_illustration(accent: str, secondary: str) -> str:
    return f"""
      <g transform="translate(850 160)" filter="url(#shadow)">
        <rect x="56" y="40" width="520" height="440" rx="44" fill="#f8fafc"/>
        <rect x="94" y="82" width="220" height="260" rx="28" fill="{accent}"/>
        <circle cx="204" cy="178" r="48" fill="#fff" opacity=".85"/>
        <path d="M124 310l74-76 52 48 64-72v132H94z" fill="{secondary}" opacity=".9"/>
        <rect x="344" y="82" width="194" height="94" rx="24" fill="#e2e8f0"/>
        <rect x="344" y="198" width="194" height="144" rx="24" fill="{secondary}" opacity=".18"/>
        <path d="M376 126h124M376 242h126M376 278h86" stroke="#334155" stroke-width="14" stroke-linecap="round"/>
        <rect x="94" y="378" width="444" height="62" rx="20" fill="{accent}"/>
        <g transform="translate(0 356) rotate(-10)">
          <rect width="180" height="180" rx="34" fill="#071b34"/>
          <path d="M38 116L90 54l52 62" fill="none" stroke="#fff" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </g>
    """


ILLUSTRATIONS = {
    "phone": phone_illustration,
    "pos": pos_illustration,
    "dashboard": dashboard_illustration,
    "ticket": ticket_illustration,
    "loyalty": loyalty_illustration,
    "field": field_illustration,
    "map": map_illustration,
    "home": home_illustration,
    "reader": reader_illustration,
    "vision": vision_illustration,
    "security": security_illustration,
    "gallery": gallery_illustration,
}


PROJECTS = [
    {
        "slug": "itech-cloud-phone",
        "eyebrow": "CLOUD COMMUNICATION",
        "title": "Business Phone Platform",
        "subtitle": "Modern calling operations for enterprise teams",
        "accent": "#0b5aa5",
        "secondary": "#22c1c3",
        "start": "#071b34",
        "end": "#0b3156",
        "logo": "itechh.png",
        "logo_width": 530,
        "title_size": 67,
        "illustration": "phone",
    },
    {
        "slug": "next-generation-ks-pos",
        "eyebrow": "RETAIL TECHNOLOGY",
        "title": "Next-Generation KS-POS",
        "subtitle": "Fast, resilient checkout for large-scale retail",
        "accent": "#ed1c24",
        "secondary": "#f5c400",
        "start": "#19120d",
        "end": "#4b1b18",
        "logo": "ksdenki.png",
        "logo_width": 130,
        "title_size": 55,
        "illustration": "pos",
    },
    {
        "slug": "edion-business-systems",
        "eyebrow": "ENTERPRISE PLATFORM",
        "title": "Business Web Systems",
        "subtitle": "Reliable workflows across retail operations",
        "accent": "#0054a6",
        "secondary": "#e60012",
        "start": "#071b38",
        "end": "#103c6c",
        "logo": "edion.svg",
        "logo_width": 390,
        "title_size": 58,
        "illustration": "dashboard",
    },
    {
        "slug": "sharp-mobile-maintenance",
        "eyebrow": "MOBILE ENGINEERING",
        "title": "Application Modernization",
        "subtitle": "Stable releases, maintainable code, measurable quality",
        "accent": "#e60012",
        "secondary": "#2563eb",
        "start": "#24070a",
        "end": "#541019",
        "logo": "sharp.svg",
        "logo_width": 340,
        "title_size": 62,
        "illustration": "phone",
    },
    {
        "slug": "ticketing-payment-platform",
        "eyebrow": "CLOUD COMMERCE",
        "title": "Ticketing & Payments",
        "subtitle": "Secure transactions with dependable event operations",
        "accent": "#7c3aed",
        "secondary": "#06b6d4",
        "start": "#150c32",
        "end": "#31205d",
        "logo": None,
        "logo_width": 0,
        "title_size": 60,
        "illustration": "ticket",
    },
    {
        "slug": "s-point-loyalty-platform",
        "eyebrow": "LOYALTY ECOSYSTEM",
        "title": "Shared Loyalty Platform",
        "subtitle": "One connected point experience across partner services",
        "accent": "#32258c",
        "secondary": "#ef6f75",
        "start": "#150f3d",
        "end": "#32256e",
        "logo": "s-point.png",
        "logo_width": 150,
        "title_size": 55,
        "illustration": "loyalty",
    },
    {
        "slug": "sharp-field-service",
        "eyebrow": "FIELD OPERATIONS",
        "title": "Service Support System",
        "subtitle": "Clear assignments, faster response, verified completion",
        "accent": "#e60012",
        "secondary": "#2563eb",
        "start": "#1d0b11",
        "end": "#49202a",
        "logo": "sharp.svg",
        "logo_width": 340,
        "title_size": 60,
        "illustration": "field",
    },
    {
        "slug": "regional-pharmacy-search",
        "eyebrow": "DIGITAL HEALTH",
        "title": "Regional Pharmacy Search",
        "subtitle": "Location-aware access to nearby healthcare services",
        "accent": "#0f9f78",
        "secondary": "#2563eb",
        "start": "#082a28",
        "end": "#0f4a43",
        "logo": None,
        "logo_width": 0,
        "title_size": 53,
        "illustration": "map",
    },
    {
        "slug": "viettel-smart-home",
        "eyebrow": "CONNECTED LIVING",
        "title": "Smart Home IoT Platform",
        "subtitle": "Secure device control for everyday living",
        "accent": "#ee0033",
        "secondary": "#00b5ad",
        "start": "#21070f",
        "end": "#501327",
        "logo": "viettel-high-tech-light.svg",
        "logo_width": 420,
        "title_size": 56,
        "illustration": "home",
    },
    {
        "slug": "seikyo-digital-edition",
        "eyebrow": "DIGITAL PUBLISHING",
        "title": "Seikyo Digital Edition",
        "subtitle": "A focused reading experience across mobile platforms",
        "accent": "#0f5da8",
        "secondary": "#38bdf8",
        "start": "#071a35",
        "end": "#123c69",
        "logo": None,
        "logo_text": "SEIKYO SHIMBUN",
        "logo_width": 430,
        "title_size": 56,
        "illustration": "reader",
    },
    {
        "slug": "paris-miki-inventory",
        "eyebrow": "RETAIL MOBILE",
        "title": "Inventory Application",
        "subtitle": "Real-time stock visibility for store teams",
        "accent": "#07558b",
        "secondary": "#13a6b8",
        "start": "#071d31",
        "end": "#123f59",
        "logo": None,
        "logo_text": "PARIS MIKI",
        "logo_width": 330,
        "title_size": 58,
        "illustration": "dashboard",
    },
    {
        "slug": "fatigue-measurement",
        "eyebrow": "COMPUTER VISION",
        "title": "Fatigue Measurement",
        "subtitle": "Visual analysis translated into actionable insight",
        "accent": "#8b5bb0",
        "secondary": "#f97316",
        "start": "#1d1231",
        "end": "#3b2458",
        "logo": None,
        "logo_text": "FATIGUE AI",
        "logo_width": 300,
        "title_size": 57,
        "illustration": "vision",
    },
    {
        "slug": "e-orico-mobile-security",
        "eyebrow": "FINTECH SECURITY",
        "title": "Mobile Security",
        "subtitle": "Stronger authentication and protected customer data",
        "accent": "#ef7d32",
        "secondary": "#2563eb",
        "start": "#2b1408",
        "end": "#5b2c12",
        "logo": None,
        "logo_text": "e-Orico",
        "logo_width": 250,
        "title_size": 62,
        "illustration": "security",
    },
    {
        "slug": "gmo-click-cfd",
        "eyebrow": "FINTECH MOBILE",
        "title": "CFD Trading Platform",
        "subtitle": "Real-time markets, orders, charts, and news",
        "accent": "#0b62b4",
        "secondary": "#3ddc84",
        "start": "#06182d",
        "end": "#0b355e",
        "logo": None,
        "logo_text": "GMO CLICK CFD",
        "logo_width": 370,
        "title_size": 56,
        "illustration": "dashboard",
    },
    {
        "slug": "adam-nft-viewer",
        "eyebrow": "DIGITAL ASSETS",
        "title": "Adam NFT Viewer",
        "subtitle": "A polished cross-platform experience for digital art",
        "accent": "#1d4ed8",
        "secondary": "#3ddc84",
        "start": "#04182c",
        "end": "#0d3154",
        "logo": None,
        "logo_text": "Adam byGMO",
        "logo_width": 330,
        "title_size": 60,
        "illustration": "gallery",
    },
]


def render_banner(project: dict[str, object]) -> str:
    title = html.escape(str(project["title"]))
    subtitle = html.escape(str(project["subtitle"]))
    eyebrow = html.escape(str(project["eyebrow"]))
    accent = str(project["accent"])
    secondary = str(project["secondary"])
    illustration = ILLUSTRATIONS[str(project["illustration"])](accent, secondary)

    if project["logo"]:
        uri = data_uri(BRANDS / str(project["logo"]))
        logo_width = int(project["logo_width"])
        logo = (
            f'<rect x="92" y="82" width="{logo_width + 64}" height="118" rx="28" fill="#fff" opacity=".96"/>'
            f'<image x="124" y="105" width="{logo_width}" height="72" preserveAspectRatio="xMinYMid meet" href="{uri}"/>'
        )
    elif project.get("logo_text"):
        logo_width = int(project["logo_width"])
        logo_text = html.escape(str(project["logo_text"]))
        logo = (
            f'<rect x="92" y="82" width="{logo_width + 64}" height="118" rx="28" fill="#fff" opacity=".96"/>'
            f'<text x="124" y="157" fill="{accent}" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="42" font-weight="900">{logo_text}</text>'
        )
    else:
        logo = (
            f'<rect x="92" y="82" width="118" height="118" rx="28" fill="{accent}"/>'
            '<path d="M128 141h46M151 118v46" stroke="#fff" stroke-width="14" stroke-linecap="round"/>'
        )

    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="{project['start']}"/>
      <stop offset="1" stop-color="{project['end']}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0" cy="0" r="1" gradientTransform="translate(1310 170) rotate(135) scale(690)">
      <stop stop-color="{accent}" stop-opacity=".38"/>
      <stop offset="1" stop-color="{accent}" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="170%">
      <feDropShadow dx="0" dy="24" stdDeviation="24" flood-color="#020617" flood-opacity=".34"/>
    </filter>
    <pattern id="grid" width="54" height="54" patternUnits="userSpaceOnUse">
      <path d="M54 0H0V54" fill="none" stroke="#fff" stroke-opacity=".045"/>
    </pattern>
  </defs>
  <rect width="1600" height="900" rx="46" fill="url(#bg)"/>
  <rect width="1600" height="900" rx="46" fill="url(#glow)"/>
  <rect width="1600" height="900" rx="46" fill="url(#grid)"/>
  <circle cx="1510" cy="80" r="230" fill="{secondary}" opacity=".10"/>
  <circle cx="760" cy="860" r="310" fill="{accent}" opacity=".09"/>
  {logo}
  <text x="96" y="302" fill="{secondary}" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="26" font-weight="800" letter-spacing="5">{eyebrow}</text>
  <text x="92" y="402" fill="#fff" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="{project['title_size']}" font-weight="800">{title}</text>
  <text x="96" y="466" fill="#cbd5e1" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="29" font-weight="500">{subtitle}</text>
  <rect x="96" y="540" width="104" height="12" rx="6" fill="{accent}"/>
  <rect x="216" y="540" width="54" height="12" rx="6" fill="{secondary}"/>
  {illustration}
  <rect x="1.5" y="1.5" width="1597" height="897" rx="44.5" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="3"/>
</svg>
"""


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for project in PROJECTS:
        target = OUTPUT / f"{project['slug']}.svg"
        target.write_text(render_banner(project), encoding="utf-8", newline="\n")
        print(target.relative_to(ROOT))


if __name__ == "__main__":
    main()
