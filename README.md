# Corraloop Web

A Malaysia-focused showcase for **Corraloop**, an Android running-community app concept. The website introduces the product, demonstrates the intended group-run and location check-in flow, and helps runners discover a curated set of Malaysian running clubs.

> **Project status:** The website is a product showcase, not the app backend. Its interactive cards, counts, activity feed, signup/profile modal, and check-in radar use sample/demo data. The linked feedback survey is the current way to collect runner feedback and beta interest.

## What the Android app demo includes

The companion Android demo currently lets you explore:

- Browse and search running communities, then view community details and membership state.
- View scheduled group runs and run details, including a check-in time window.
- Try a one-time device location check-in for a run. The demo checks GPS accuracy and distance from the meeting point (up to 100 metres); Android requests location access only when you try this action.
- View sample runner attendance, run history, distance totals, and streaks.
- Switch between sample runner and organizer personas. The organizer can create sample communities and runs.

The Android demo has **no sign-in, network access, or live backend connection**. Its sample content and changes are kept in memory and reset when the app process restarts. The web check-in simulator is illustrative and does not perform a real location check.

## Runner feedback and beta interest

Share the short [Corraloop runner feedback survey](https://docs.google.com/forms/d/e/1FAIpQLSdyhx1w1g-1mSONTygQjpIRjLnaHQi_O-GqEL0OMK-le3qkMg/viewform?usp=dialog) to help shape the app and see who is interested in beta testing.

## Website preview

- **Live website:** [Add your deployed website URL]
- **Android app repository:** [corraloop](https://github.com/niqaqil/corraloop)
- **Feedback survey:** [Help shape Corraloop](https://docs.google.com/forms/d/e/1FAIpQLSdyhx1w1g-1mSONTygQjpIRjLnaHQi_O-GqEL0OMK-le3qkMg/viewform?usp=dialog)

### Add screenshots to GitHub

1. Run the site locally with `npm run dev` and capture a clear desktop screenshot of the landing page and club directory. A mobile screenshot is also useful.
2. Add the images to a folder such as `screenshots/` in this repository.
3. Replace the placeholders below with the real screenshot paths and add the live website URL above.

```markdown
![Corraloop Malaysia landing page](screenshots/homepage.png)
![Malaysian running club directory](screenshots/run-clubs.png)
```

On GitHub, the README appears at the top of the repository page. A concise description, topics such as `running`, `android`, `kotlin`, and `malaysia`, and screenshots make the project easier to understand. To pin it on your profile, open your GitHub profile and use **Customize your pins** to select the repository. To share the live site, deploy the website and add its URL in the repository’s **About** section and in this README.

## Run the website locally

Requirements: Node.js 18 or newer and npm.

```bash
git clone https://github.com/niqaqil/corraloop-web.git
cd corraloop-web
npm install
npm run dev
```

Open the local URL printed by Vite (usually <http://localhost:5173>).

Build and preview the production site:

```bash
npm run build
npm run preview
```

## Website features

- Malaysia-focused landing page and product overview.
- Curated run-club showcase with state filters, text search, and links to club references.
- Links to the runner feedback and beta interest survey.
- Responsive layout for desktop and mobile screens.

## Tech stack

- React 18
- Vite
- Tailwind CSS
- Lucide React icons

## Related project

The Android app source and its setup notes are in [the Corraloop Android repository](https://github.com/niqaqil/corraloop).