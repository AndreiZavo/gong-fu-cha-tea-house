# Gong Fu Cha at Tea House

QR stickers around Cluj-Napoca lead to a one-page site where people learn what Gong Fu Cha is and book a table at a tea house, without leaving the page.

> Work in progress: final copy and photos are still coming from the client.

![Desktop hero](media/desktop.png)

<p>
  <img src="media/mobile-hero.png" width="49%" alt="Mobile hero">
  <img src="media/mobile-steps.png" width="49%" alt="Mobile: the steps of a session">
</p>

## Highlights

- **Interactive water:** a small fluid simulation on canvas. Move the cursor or a finger to pour tea into it.
- **QR that never gets reprinted:** stickers point to `/qr`, a redirect that can change anytime.
- **Booking in the page:** Cal.com embed, 3 seats per slot (one per table), closes 1 hour before.
- **Mobile first:** every visitor comes from a phone, so the phone layout leads, with a floating booking button.

## Built with AI

Built with [Claude Code](https://claude.com/claude-code). I directed and reviewed; the agent wrote most of the code.

- **Project memory:** a `CLAUDE.md` with fixed decisions and hard rules the agent reads every session.
- **Design skills and a lint hook** that kept the output on brief and flagged generic patterns.
- **Verified in a real browser** at 5 screen sizes after every change.
- **Safe publishing:** private client notes kept out of the repo and out of its history.

## My role

- **Business analysis:** turned the client's needs into booking rules, account ownership and scope.
- **UI/UX design:** set the visual direction and reviewed every iteration.
- **Code:** steered a clean structure, one self-contained module per feature.

## Run it

Plain HTML, CSS and JavaScript, no build step. Hosted on Cloudflare Pages.

```bash
npm install
npm run dev     # http://localhost:8080
npm run qr      # generate the QR from config.json
```

The headline font is licensed and not included.

---

Design and development by Andrei Zavorodnic (ZavoCreates).
