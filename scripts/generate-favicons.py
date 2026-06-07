#!/usr/bin/env python3
"""Generate favicon assets from the Hopverse logo icon mark."""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
LOGO = ROOT / "public" / "assets" / "logo.png"
PUBLIC = ROOT / "public"

SIZES = {
    "favicon-16.png": 16,
    "favicon-32.png": 32,
    "apple-touch-icon.png": 180,
    "android-chrome-192x192.png": 192,
    "android-chrome-512x512.png": 512,
}

ICO_SIZES = [16, 32, 48]

# Icon-only crop of logo.png (H + rabbit mark, excluding wordmark text).
ICON_CROP = (95, 48, 405, 298)


def load_icon_mark() -> Image.Image:
    img = Image.open(LOGO).convert("RGBA")
    if not LOGO.exists():
        raise FileNotFoundError(LOGO)

    icon = img.crop(ICON_CROP)

    # Flatten onto dark site background so favicons match the brand palette.
    background = Image.new("RGBA", icon.size, (8, 8, 7, 255))
    background.alpha_composite(icon)
    return background


def resize_icon(size: int) -> Image.Image:
    return load_icon_mark().resize((size, size), Image.Resampling.LANCZOS)


def main() -> None:
    if not LOGO.exists():
        raise SystemExit(f"Logo not found: {LOGO}")

    for filename, size in SIZES.items():
        out = PUBLIC / filename
        resize_icon(size).save(out, format="PNG", optimize=True)
        print(f"Wrote {out} ({size}x{size})")

    ico_images = [resize_icon(size) for size in ICO_SIZES]
    ico_path = PUBLIC / "favicon.ico"
    ico_images[0].save(
        ico_path,
        format="ICO",
        sizes=[(s, s) for s in ICO_SIZES],
        append_images=ico_images[1:],
    )
    print(f"Wrote {ico_path} ({', '.join(f'{s}x{s}' for s in ICO_SIZES)})")


if __name__ == "__main__":
    main()
