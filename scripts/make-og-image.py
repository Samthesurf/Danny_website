#!/usr/bin/env python3
"""Generate public/assets/og.png — a 1200x630 branded Open Graph image for
DACTION Initiative (white card + logo + navy tagline, matching the site's
#122A4A brand). Safe to re-run: overwrites in place."""
from PIL import Image, ImageDraw, ImageFont

NAVY = (18, 42, 74)
NAVY2 = (24, 55, 102)
SLATE = (110, 125, 145)
LIGHT = (245, 248, 250)
W, H = 1200, 630

BOLD = "/usr/share/fonts/TTF/DejaVuSans-Bold.ttf"
REGULAR = "/usr/share/fonts/TTF/DejaVuSans.ttf"

def font(path, size):
    return ImageFont.truetype(path, size)

def main():
    img = Image.new("RGB", (W, H), "white")
    d = ImageDraw.Draw(img)

    # Top navy band with a gentle gradient.
    for y in range(170):
        t = y / 170
        c = tuple(int(NAVY[i] + (NAVY2[i] - NAVY[i]) * t) for i in range(3))
        d.line([(0, y), (W, y)], fill=c)
    d.rectangle([0, 170, W, 178], fill=NAVY2)

    # Logo (white-background wordmark) placed on the white area, centered.
    logo = Image.open("public/assets/logo.png").convert("RGB")
    logo_w = 760
    logo_h = int(logo.height * (logo_w / logo.width))
    logo = logo.resize((logo_w, logo_h), Image.LANCZOS)
    lx = (W - logo_w) // 2
    ly = 292
    img.paste(logo, (lx, ly))

    # Tagline below the logo.
    tag = "Youth-led environmental action, from Lekki, Lagos, Nigeria."
    f_tag = font(REGULAR, 40)
    tw = d.textlength(tag, font=f_tag)
    d.text(((W - tw) / 2, ly + logo_h + 60), tag, fill=SLATE, font=f_tag)

    saved = "public/assets/og.png"
    img.save(saved, "PNG")
    print("wrote", saved, img.size)

if __name__ == "__main__":
    main()