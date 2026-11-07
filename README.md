# Gong Fu Cha at Demmers Teehaus

A dynamic QR code and a one-page booking site for a Gong Fu Cha tea session at Demmers Teehaus, a tea house in Piața Unirii, Cluj-Napoca.

QR stickers are spread around the city and inside the tea house. A passerby scans one, lands on the page, learns what Gong Fu Cha is and books a table without leaving the site.

> Work in progress. Copy, photos and the final booking account are still being finalised with the client.

![Desktop hero](media/desktop.png)

<p>
  <img src="media/mobile-hero.png" width="49%" alt="Mobile hero">
  <img src="media/mobile-steps.png" width="49%" alt="Mobile: the steps of a session">
</p>

## What is interesting here

- **Water you can stir.** The hero background is a small stable-fluids simulation (advection, diffusion and a pressure projection on a coarse grid) drawn to a canvas. Moving the cursor or a finger pours "tea" into the water. It pauses when the hero is off screen or the tab is hidden, and shows a still image under `prefers-reduced-motion`.
- **A QR code that never has to be reprinted.** The sticker encodes only `https://demmerscluj.ro/qr`. That path is a 302 redirect in `site/_redirects`, with UTM parameters, so the destination can change at any time while the printed stickers stay the same.
- **Booking inside the page.** A Cal.com inline embed handles the calendar: 3 seats per slot (one per table), bookings close one hour before a session. A skeleton shows while it loads, a fallback link appears if it never does, and a custom confirmation replaces Cal.com's own screen.
- **The session as a sequence.** The steps of a session (rinse, first cup, the leaves open, again) sit on a thin thread. Each cup fills and comes forward as it reaches the reading line, and the rinse is marked as preparation because nobody drinks it. Everything stays readable without scrolling effects.
- **Mobile first.** 100% of the traffic comes from QR scans, so the phone layout is the real one. A small booking pill appears once the hero button scrolls away and hides near the calendar. Buttons never wrap; on very narrow screens they shrink instead.

## Stack

Plain HTML, CSS and JavaScript, no framework and no build step. Hosted on Cloudflare Pages.

- [Lenis](https://github.com/darkroomengineering/lenis) for smooth wheel scrolling on desktop
- [Cal.com](https://cal.com) inline embed for bookings
- [`qrcode`](https://github.com/soldair/node-qrcode) for generating the print-ready QR
- Phosphor-style icons, inline SVG

## Run it locally

```bash
npm install
npm run dev     # serves site/ on http://localhost:8080
npm run qr      # writes qr/gongfucha-qr.svg and .png from config.json
```

The headline font (A Song for Jennifer) is a licensed commercial font and is not included in this repository. Without it the headlines fall back to Futura or Jost.

## Structure

```
site/             everything that gets published
  index.html      the page: styles, markup and scripts in one file
  _redirects      the /qr redirect
  404.html
  assets/         illustration, favicon, fonts (not in the repo)
scripts/          QR generator
qr/               generated QR files (SVG for print, PNG for testing)
config.json       domain, QR path and UTM parameters
```

## Credits

Design and development by Andrei Zavorodnic (ZavoCreates) for Demmers Teehaus, Cluj-Napoca.
