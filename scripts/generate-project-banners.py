from __future__ import annotations

import base64
import html
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BRANDS = ROOT / "public" / "static" / "images" / "projects" / "brands"
OUTPUT = ROOT / "public" / "static" / "images" / "projects"


def data_uri(filename: str) -> str:
    path = BRANDS / filename
    mime = "image/svg+xml" if path.suffix == ".svg" else "image/png"
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{encoded}"


PROJECTS = [
    {"slug": "itech-cloud-phone", "logo": "itechh.png", "size": (1050, 230), "tech": ["Cloud", "Mobile", "AWS"]},
    {"slug": "next-generation-ks-pos", "logo": "ksdenki.png", "size": (380, 380), "tech": ["POS", ".NET", "Retail"]},
    {"slug": "edion-business-systems", "logo": "edion.svg", "size": (850, 300), "tech": ["Web", "AWS", "Retail"]},
    {"slug": "sharp-mobile-maintenance", "logo": "sharp.svg", "size": (850, 280), "tech": ["Android", "iOS", "Flutter"]},
    {"slug": "ticketing-payment-platform", "icon": "ticket", "label": "TICKETING & PAYMENT", "tech": ["QR", "Payment", "AWS"]},
    {"slug": "s-point-loyalty-platform", "logo": "s-point.png", "size": (300, 375), "tech": ["Loyalty", "API", "AWS"]},
    {"slug": "sharp-field-service", "logo": "sharp.svg", "size": (850, 280), "tech": ["Android", "Web", "Field Service"]},
    {"slug": "regional-pharmacy-search", "icon": "map", "label": "PHARMACY SEARCH", "tech": ["Android", "Maps", "Location"]},
    {"slug": "viettel-smart-home", "logo": "viettel-high-tech.svg", "size": (850, 300), "tech": ["IoT", "MQTT", "Android"]},
    {"slug": "seikyo-digital-edition", "logo": "seikyo.svg", "size": (850, 280), "tech": ["Android", "iOS", "Digital Edition"]},
    {"slug": "paris-miki-inventory", "logo": "paris-miki.svg", "size": (1000, 300), "tech": ["iPad", "Swift", "Inventory"]},
    {"slug": "fatigue-measurement", "icon": "vision", "label": "FATIGUE MEASUREMENT", "tech": ["Vision", "ML", "Mobile"]},
    {"slug": "e-orico-mobile-security", "logo": "e-orico.svg", "size": (850, 260), "tech": ["Android", "iOS", "Security"]},
    {"slug": "gmo-click-cfd", "logo": "gmo-click-cfd.svg", "size": (850, 280), "tech": ["CFD", "Android", "Real-time"]},
    {"slug": "adam-nft-viewer", "logo": "adam-by-gmo.png", "size": (900, 400), "tech": ["Flutter", "NFT", "Mobile"]},
]


def icon_markup(kind: str) -> str:
    if kind == "ticket":
        return """
        <g transform="translate(610 215)">
          <path d="M34 0h312a34 34 0 0 1 34 34v46a34 34 0 0 0 0 68v46a34 34 0 0 1-34 34H34a34 34 0 0 1-34-34v-46a34 34 0 0 0 0-68V34A34 34 0 0 1 34 0z" fill="#f8fafc" stroke="#0f172a" stroke-width="10"/>
          <path d="M78 68h150M78 112h104M286 48v132" stroke="#2563eb" stroke-width="15" stroke-linecap="round"/>
        </g>"""
    if kind == "map":
        return """
        <g transform="translate(690 185)">
          <path d="M110 0c61 0 110 49 110 110 0 86-110 211-110 211S0 196 0 110C0 49 49 0 110 0z" fill="#0f9f78"/>
          <circle cx="110" cy="108" r="52" fill="#fff"/>
          <path d="M110 78v60M80 108h60" stroke="#0f9f78" stroke-width="18" stroke-linecap="round"/>
        </g>"""
    return """
      <g transform="translate(610 205)">
        <path d="M0 118S76 8 190 8s190 110 190 110-76 110-190 110S0 118 0 118z" fill="#fff" stroke="#172554" stroke-width="13"/>
        <circle cx="190" cy="118" r="67" fill="#8b5bb0"/>
        <circle cx="190" cy="118" r="25" fill="#fff"/>
      </g>"""


def tech_badges(values: list[str]) -> str:
    widths = [max(142, len(value) * 19 + 52) for value in values]
    total = sum(widths) + 26 * (len(values) - 1)
    x = (1600 - total) / 2
    items: list[str] = []
    for index, (value, width) in enumerate(zip(values, widths)):
        dot = ["#2563eb", "#e11d48", "#0f9f78"][index % 3]
        items.append(
            f'<g transform="translate({x:.1f} 700)">'
            f'<rect width="{width}" height="68" rx="34" fill="#f8fafc" stroke="#dbe3ee" stroke-width="2"/>'
            f'<circle cx="34" cy="34" r="8" fill="{dot}"/>'
            f'<text x="56" y="43" fill="#334155" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="25" font-weight="700">{html.escape(value)}</text>'
            '</g>'
        )
        x += width + 26
    return "".join(items)


def render(project: dict[str, object]) -> str:
    if project.get("logo"):
        width, height = project["size"]
        x = (1600 - width) / 2
        visual = (
            f'<image x="{x:.1f}" y="155" width="{width}" height="{height}" '
            f'preserveAspectRatio="xMidYMid meet" href="{data_uri(str(project["logo"]))}"/>'
        )
    else:
        label = html.escape(str(project["label"]))
        visual = icon_markup(str(project["icon"])) + (
            f'<text x="800" y="600" text-anchor="middle" fill="#172554" '
            f'font-family="Inter, Segoe UI, Arial, sans-serif" font-size="42" font-weight="800" letter-spacing="5">{label}</text>'
        )

    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <rect width="1600" height="900" fill="#ffffff"/>
  <circle cx="1450" cy="120" r="36" fill="#e60012"/>
  <path d="M100 120h180M1320 780h180" stroke="#dbe3ee" stroke-width="4" stroke-linecap="round"/>
  {visual}
  {tech_badges(project["tech"])}
</svg>
"""


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for project in PROJECTS:
        target = OUTPUT / f"{project['slug']}.svg"
        target.write_text(render(project), encoding="utf-8", newline="\n")
        print(target.relative_to(ROOT))


if __name__ == "__main__":
    main()
