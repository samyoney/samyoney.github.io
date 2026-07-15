from __future__ import annotations

import html
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "static" / "images" / "blog" / "cards"


CARDS = [
    ("pm-control-operating-system", "PM-Control", "A careful AI workspace", "workspace", "#e11d48"),
    ("agents-md-policy-engine", "AGENTS.md", "Rules AI can follow", "document", "#7c3aed"),
    ("local-ai-memory", "Local AI Memory", "Markdown + Qdrant", "memory", "#0f9f78"),
    ("deterministic-project-sync", "Project Sync", "Sheets · Backlog · Git", "sync", "#2563eb"),
    ("local-code-intelligence", "Code Intelligence", "Understand impact first", "code", "#f97316"),
]


def phone(accent: str, content: str) -> str:
    return f"""
      <g transform="translate(610 365)">
        <rect width="380" height="600" rx="72" fill="#111827"/>
        <rect x="18" y="18" width="344" height="564" rx="58" fill="#fff"/>
        <path d="M132 18h116l-16 24a24 24 0 0 1-20 11h-44a24 24 0 0 1-20-11z" fill="#111827"/>
        {content}
        <circle cx="190" cy="538" r="8" fill="#cbd5e1"/>
      </g>"""


def visual(kind: str, accent: str) -> str:
    if kind == "ios":
        mark = f'<path d="M94 274c78 43 150 29 205-29-28 8-55 4-81-13 23-2 47-13 68-33-30 5-60-2-88-23 20-3 38-10 55-23-82-1-136-40-173-91 17 60 50 105 98 137-42-20-78-47-108-80 16 69 49 121 101 156-29-9-55-24-77-45z" fill="{accent}" transform="translate(0 -25)"/>'
        return phone(accent, mark)
    if kind in {"android", "android-test"}:
        check = '<path d="M127 267l44 44 91-106" fill="none" stroke="#fff" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>' if kind.endswith("test") else ''
        mark = f'''<g transform="translate(70 155)">
          <path d="M42 76h236v180a36 36 0 0 1-36 36H78a36 36 0 0 1-36-36z" fill="{accent}"/>
          <path d="M66 76c12-58 48-90 94-90s82 32 94 90" fill="{accent}"/>
          <path d="M95 1L65-40M225 1l30-41" stroke="{accent}" stroke-width="12" stroke-linecap="round"/>
          <circle cx="112" cy="35" r="8" fill="#fff"/><circle cx="208" cy="35" r="8" fill="#fff"/>
          {check}
        </g>'''
        return phone(accent, mark)
    if kind == "ios-test":
        mark = f'''<g transform="translate(78 150)">
          <rect width="224" height="224" rx="52" fill="{accent}"/>
          <path d="M54 116l42 42 80-94" fill="none" stroke="#fff" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="112" y="282" text-anchor="middle" fill="#334155" font-family="Arial, sans-serif" font-size="34" font-weight="800">XCTest</text>
        </g>'''
        return phone(accent, mark)
    if kind == "document":
        return f'''<g transform="translate(560 350)">
          <rect width="480" height="430" rx="38" fill="#f8fafc" stroke="#111827" stroke-width="12"/>
          <path d="M350 0v130h130" fill="#ede9fe" stroke="#111827" stroke-width="12" stroke-linejoin="round"/>
          <path d="M74 190h310M74 250h250M74 310h285" stroke="{accent}" stroke-width="20" stroke-linecap="round"/>
          <circle cx="402" cy="354" r="74" fill="{accent}"/><path d="M370 354l24 24 44-52" fill="none" stroke="#fff" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
        </g>'''
    if kind == "memory":
        return f'''<g transform="translate(520 370)" fill="none" stroke-linecap="round">
          <path d="M118 130l175-70 170 116 130-82M118 130l148 194 197-148 130 176M266 324l327 28" stroke="#cbd5e1" stroke-width="14"/>
          <g fill="{accent}" stroke="#fff" stroke-width="12"><circle cx="118" cy="130" r="54"/><circle cx="293" cy="60" r="54"/><circle cx="463" cy="176" r="54"/><circle cx="593" cy="94" r="54"/><circle cx="266" cy="324" r="54"/><circle cx="593" cy="352" r="54"/></g>
          <circle cx="463" cy="176" r="18" fill="#fff" stroke="none"/>
        </g>'''
    if kind == "sync":
        return f'''<g transform="translate(500 365)">
          <rect x="0" y="70" width="210" height="210" rx="38" fill="#e8f0fe"/><rect x="390" y="0" width="210" height="210" rx="38" fill="#fff1f2"/><rect x="680" y="180" width="210" height="210" rx="38" fill="#f0fdf4"/>
          <path d="M190 88c82-76 175-94 278-53M565 164c76 36 119 88 145 158M670 365c-154 57-290 38-407-56" fill="none" stroke="{accent}" stroke-width="18" stroke-linecap="round"/>
          <path d="M448 2l30 36-45 13M731 294l-18 45-42-22M283 333l-38-29 34-33" fill="none" stroke="{accent}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="105" y="198" text-anchor="middle" fill="#2563eb" font-family="Arial" font-size="54" font-weight="900">S</text><text x="495" y="130" text-anchor="middle" fill="#e11d48" font-family="Arial" font-size="54" font-weight="900">B</text><text x="785" y="310" text-anchor="middle" fill="#0f9f78" font-family="Arial" font-size="54" font-weight="900">G</text>
        </g>'''
    if kind == "code":
        return f'''<g transform="translate(470 355)">
          <rect width="660" height="420" rx="42" fill="#0f172a"/>
          <circle cx="54" cy="46" r="10" fill="#fb7185"/><circle cx="86" cy="46" r="10" fill="#fbbf24"/><circle cx="118" cy="46" r="10" fill="#34d399"/>
          <path d="M95 150l-52 52 52 52M215 150l52 52-52 52M180 122l-50 164" fill="none" stroke="{accent}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M340 142h225M340 202h170M340 262h250M340 322h125" stroke="#cbd5e1" stroke-width="16" stroke-linecap="round"/>
        </g>'''
    return f'''<g transform="translate(470 355)">
      <rect width="660" height="420" rx="42" fill="#f8fafc" stroke="#111827" stroke-width="12"/>
      <rect width="660" height="76" rx="42" fill="#e2e8f0"/><circle cx="48" cy="38" r="10" fill="#fb7185"/><circle cx="82" cy="38" r="10" fill="#fbbf24"/><circle cx="116" cy="38" r="10" fill="#34d399"/>
      <rect x="44" y="120" width="160" height="250" rx="24" fill="#e2e8f0"/><rect x="240" y="120" width="170" height="110" rx="24" fill="{accent}"/><rect x="446" y="120" width="170" height="110" rx="24" fill="#dbeafe"/><rect x="240" y="262" width="376" height="108" rx="24" fill="#fff" stroke="#cbd5e1" stroke-width="6"/>
    </g>'''


def render(title: str, subtitle: str, kind: str, accent: str) -> str:
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <rect width="1600" height="900" fill="#fff"/>
  <circle cx="1440" cy="120" r="28" fill="#e60012"/>
  <text x="800" y="158" text-anchor="middle" fill="#050505" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="60" font-weight="900">{html.escape(title)}</text>
  <path d="M758 196h84" stroke="#050505" stroke-width="9" stroke-linecap="round"/>
  <text x="800" y="242" text-anchor="middle" fill="#475569" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="24" font-weight="600">{html.escape(subtitle)}</text>
  <g transform="translate(240 120) scale(.70)">
    {visual(kind, accent)}
  </g>
</svg>\n'''


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for slug, title, subtitle, kind, accent in CARDS:
        target = OUTPUT / f"{slug}.svg"
        target.write_text(render(title, subtitle, kind, accent), encoding="utf-8", newline="\n")
        print(target.relative_to(ROOT))


if __name__ == "__main__":
    main()
