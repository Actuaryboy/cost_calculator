# Max Analytics — MHA Board Landing Page
## Complete Build Specification for Claude Code

---

## 1. Project Context

This is a standalone HTML page to be added to **maxanalytics.ca**. Its purpose is to help minor hockey association (MHA) board members understand two things:

1. Whether their current evaluation process has problems worth fixing.
2. How much volunteer time those problems are consuming — and how Max recovers most of it.

The intended reader is a sitting MHA board member who may not yet recognize the severity of their evaluation process deficiencies. The tone throughout is empathetic and consultative — "we understand this is a tough annual challenge" — never accusatory. The page is designed to start a conversation, not close a sale.

The page will be developed and tested **locally** before being integrated into the live site. No live URL is required at build time.

---

## 2. Brand Standards

### 2.1 Colour Palette

| Role | Hex | Usage |
|---|---|---|
| Light Green (Primary Accent) | `#c4d600` | CTAs, highlights, active states, icon accents |
| Dark Green (Secondary Accent) | `#67823a` | Hover states, dark callout backgrounds, section dividers |
| Dark Grey (Body) | `#373a36` | Body text, headings on light backgrounds |
| Near Black (Dark BG) | `#101820` | Hero background, dark sections |
| White | `#ffffff` | Text on dark sections, card backgrounds |
| Light Background | `#f5f5f0` | Alternating light section backgrounds (cream-grey) |

### 2.2 Typography

Match the existing maxanalytics.ca typographic style:
- **"MAX"** wordmark: bold, condensed sans-serif (geometric)
- **"analytics"** wordmark: light weight, same geometric sans-serif
- Body: clean sans-serif (suggest `'Inter', 'Helvetica Neue', Arial, sans-serif`)
- Headings: bold weight of same family
- All font sizes should be set in `rem` for accessibility

### 2.3 Logo Files

The following logo files will be available in the project's `/assets/images/` directory. Claude Code should reference them by the filenames below:

| File | Usage |
|---|---|
| `MAX_LOGO_COLOR_LIGHT_BG_ANALYTICS.jpg` | Light-background sections (nav on light hero alternative) |
| `MAX_LOGO_NO_BG_ANALYTICS.png` | Dark-background sections, hero |
| `MAX_LOGO_NO_BG_LIGHT_ANALYTICS.png` | Alternative dark-section variant |
| `MAX_LOGO_GREY_DARK_BG_ANALYTICS.png` | Footer / de-emphasized dark placement |
| `MAX_LOGO_1000PX-ICON.png` | Favicon, small icon applications |

### 2.4 Existing Site UI Conventions (from screenshot)

- "Request Demo" button: outlined style with `#c4d600` border and text, no fill (ghost button). On hover: fills with `#c4d600`, text becomes dark.
- Nav bar: light/cream background with the colour logo
- Contact/Demo form: delivered via Zendesk widget (slide-up panel) — **CTA buttons on this page should trigger the same Zendesk widget**. The Zendesk trigger ID/URL will be provided later; use a clearly marked `TODO` placeholder for now.
- Page backgrounds alternate between light cream (`#f5f5f0`) and near-black (`#101820`).

---

## 3. Page Architecture — The "4 R" Narrative Flow

The page moves the reader through four emotional/cognitive stages:

| Stage | Goal | Section(s) |
|---|---|---|
| **Recognize** | "This is describing us" | Hero, Does This Sound Familiar |
| **Reflect** | "We should be asking these questions" | Data Volume Callout, Board Questions |
| **Reveal** | "Here is what it's actually costing us" | Volunteer Hours Worksheet |
| **Resolve** | "Max solves exactly these problems" | What Max Does, CTA |

---

## 4. Section-by-Section Specification

---

### Section 1 — Hero

**Visual style:** Full-width, dark background (`#101820`). Logo: `MAX_LOGO_NO_BG_ANALYTICS.png`, top-left, reasonable padding.

**Headline (H1):**
> Your Volunteers Are Spending Hundreds of Hours on Evaluation Admin.
> There's a Better Way.

**Subheadline (paragraph):**
> Most minor hockey associations don't realize how much time, effort, and accuracy they're giving up every fall. This page is designed to help your board ask better questions — and see exactly where those hours are going.

**CTA Button:**
- Label: `See How Much Time You're Losing`
- Style: Filled, `#c4d600` background, `#101820` text
- Behaviour: Smooth-scroll anchor link to Section 4 (the Worksheet)
- Positioned below the subheadline, centred

**Secondary link** (below the button):
- Label: `Questions your board should be asking →`
- Behaviour: Smooth-scroll to Section 3
- Style: Light, underlined text link

**Layout note:** No background image. Consider a subtle geometric pattern or dark grid overlay to add texture without distraction. Keep it clean and confident.

---

### Section 2 — "Does This Sound Familiar?"

**Background:** Light cream (`#f5f5f0`)

**Section heading (H2):**
> Does This Sound Familiar?

**Intro paragraph:**
> These are the patterns we see most often when we talk to minor hockey associations about their evaluation process. How many apply to you?

**Content:** A 2×3 grid of "pain point cards" (3 columns on desktop, 1 column on mobile). Each card has:
- A simple icon (SVG or emoji-style, in `#c4d600`)
- A short bold title
- One to two sentences of empathetic description

| Icon | Title | Description |
|---|---|---|
| ✉️ | Weeks of Email Back-and-Forth | Your administrative lead spends 40–60 hours each fall sending and responding to emails about ice times, group assignments, and schedule changes. |
| 📋 | Paper Check-In at the Rink | Players are checked in with a printed sheet and a pen. When names are missed or sessions run over, there's no easy recovery. |
| ⌨️ | Manual Score Entry | Evaluators record scores on paper. Someone types them in afterward — and errors don't surface until it's too late to matter. |
| 📍 | Players at the Wrong Level | When the dust settles, some players end up at a level that doesn't fit. It's hard to catch without clean data, and harder to fix once the season starts. |
| 🏒 | Inconsistent Goalie Evaluations | Goalie assessment sits outside the normal process. Placements can feel like educated guesses — and sometimes they turn out to be wrong. |
| 📬 | No Feedback to Players or Parents | Players go through the evaluation process and never hear how they performed. It's a missed opportunity for development and a source of frustration for families. |

---

### Section 2.5 — "The Data Problem" Callout

**Background:** Dark green (`#67823a`)
**Text colour:** White

**Purpose:** Establish the volume and complexity of data that evaluations generate — making the case that manual processes (paper/Excel) aren't just slow, they're structurally inadequate.

**Layout:** Centred, full-width. Two-column layout on desktop: large stat on the left, explanatory text on the right.

**Left column — large stat display:**
```
94
skill observations
per player assessment
```
(The number `94` should be very large — display font, white)

**Right column — explanatory text:**
> A typical evaluation block runs four hours — four one-hour sessions — during which Max captures an average of **94 individual skill observations per player**. That's not a rounding error or a best-case scenario. That's the standard.
>
> Attempting to collect, record, and manage that volume of data on paper or in a spreadsheet doesn't just slow things down — it forces a choice: either collect far fewer observations (sacrificing accuracy) or collect the same number and accept that errors and omissions are inevitable.
>
> Clean data is the foundation of accurate player placement. Max provides both.

---

### Section 3 — "Questions Your Board Should Be Asking"

**Background:** White (`#ffffff`)

**Section heading (H2):**
> Questions Your Board Should Be Asking

**Intro paragraph:**
> If evaluations haven't come up at your board table recently, these are the questions worth raising. If they have — here's a framework for evaluating how honest the answers really were.

**Content:** Six expandable accordion cards. Each card is collapsed by default and expands on click to reveal three layers of content.

**Card interaction:** Clicking the card header toggles it open/closed. An animated chevron (▸ / ▾) indicates state. Only one card needs to be open at a time (accordion behaviour), though allowing multiple open is also acceptable.

**Card structure (repeated for each of the six questions):**

```
[Card Header — always visible]
  Question text (bold, H3 style)
  Chevron icon (right-aligned)

[Card Body — visible when expanded]
  WHAT WE COMMONLY HEAR
  [italic, grey label]
  [1–2 sentences describing the typical board response]

  INDUSTRY REALITY
  [bold green label]
  [2–3 sentences describing what experience/data shows]

  HOW MAX CHANGES THIS
  [bold, subtle label]
  [1 sentence on the Max impact — soft, not salesy]
```

---

#### Card 1

**Question:** What percentage of our players ended up at the wrong level?

**What We Commonly Hear:**
*"We think it went pretty well — we didn't hear too many complaints."* Most boards default to complaint volume as a proxy for accuracy. But families who don't understand the evaluation process rarely know how to complain effectively.

**Industry Reality:**
In associations using manual evaluation processes, misplacement rates of 10–20% are not unusual. The players affected often don't know it, and neither does the board — because without clean comparative data, there's no way to audit the outcome.

**How Max Changes This:**
Max's algorithmic ranking and bias-calibration tools produce player standings that can be reviewed, audited, and defended — and misplacement rates drop significantly as a result.

---

#### Card 2

**Question:** How did goalie evaluations go — were the placements accurate?

**What We Commonly Hear:**
*"The goalie evaluators did their best."* Goalie assessment is often treated as a separate, informal process — relying heavily on the subjective judgment of one or two evaluators without structured scoring.

**Industry Reality:**
Goalies represent a small percentage of players but a disproportionate share of evaluation complaints. Without structured, scored goalie-specific assessments, placements are difficult to justify and easy to challenge.

**How Max Changes This:**
Max supports structured goalie evaluation with the same scoring, calibration, and ranking tools as skater assessments — so placements are defensible and consistent.

---

#### Card 3

**Question:** Why don't we deliver feedback to each of our players?

**What We Commonly Hear:**
*"We'd love to, but we just don't have the capacity to produce individual feedback for 200 kids."* This is an honest answer — producing individual feedback manually is genuinely impractical at scale.

**Industry Reality:**
Player development research consistently shows that feedback accelerates learning — and that its absence is a significant source of player and family disengagement. Associations that can't provide it aren't failing for lack of caring; they're failing for lack of infrastructure.

**How Max Changes This:**
Max automatically generates a personalized report card for every evaluated player — no manual production required. See a [sample Gold Report Card here] (link to Gold Report Card HTML, opens in new tab).

---

#### Card 4

**Question:** How many collective volunteer hours do we spend on evaluation administration?

**What We Commonly Hear:**
*"It's a lot of work, but our people are committed."* Volunteer dedication is real — but commitment doesn't make the hours sustainable. Most boards have never actually counted.

**Industry Reality:**
When associations add up communication, scheduling, check-in, data entry, auditing, and result distribution, total administrative hours routinely exceed 100–150 hours per evaluation cycle. That's time taken from the rest of the season — and from burnout prevention.

**How Max Changes This:**
Scroll down to the Volunteer Hours Worksheet to calculate your association's estimated total — and see how many of those hours Max handles automatically.

*(Note: "Scroll down to the Volunteer Hours Worksheet" should be an anchor link to Section 4.)*

---

#### Card 5

**Question:** Were our evaluator results free of errors and omissions?

**What We Commonly Hear:**
*"We caught a few things but nothing major."* Errors that don't surface as complaints often aren't caught at all — especially when auditing is done manually by directors already stretched thin.

**Industry Reality:**
Manual data entry introduces transcription errors. Paper score sheets get lost, misread, or partially completed. When the only audit is a director reviewing a spreadsheet at 11pm, the error rate is higher than anyone wants to admit.

**How Max Changes This:**
Evaluators score in-app in real time — no paper, no transcription. Scores are visible and auditable instantly, and the system flags incomplete or outlier entries automatically.

---

#### Card 6

**Question:** What other problems exist in our process that we haven't named yet?

**What We Commonly Hear:**
*"We deal with problems as they come up."* Reactive problem-solving is the norm when a board doesn't have a baseline to compare against. You can't see what you've normalized.

**Industry Reality:**
Every association we talk to discovers at least one significant problem they hadn't named before. Late-night emails to parents. Evaluators scoring the wrong group. A division's scores getting entered twice. These aren't anomalies — they're symptoms of a process running at the edge of what manual coordination can handle.

**How Max Changes This:**
The first step is the conversation. If you'd like to walk through your current process with us, we're happy to help you find what you haven't found yet.

---

### Section 4 — Volunteer Hours Worksheet

**Background:** Light grey (`#f5f5f0`)
**Section ID:** `#worksheet` (anchor target for CTA scroll)

**Section heading (H2):**
> How Many Volunteer Hours Is Your Evaluation Process Consuming?

**Intro paragraph:**
> Enter a few details about your association below. We'll estimate how many volunteer hours your current evaluation process is likely generating — and show you how many of those Max handles automatically.

---

#### 4.1 Input Mode Toggle

Two clearly labelled modes, presented as a segmented toggle button at the top of the worksheet:

| Mode | Label | Description |
|---|---|---|
| Simple | **Simple** | One total player count, one sessions-per-player input |
| Refined | **By Age Group** | Per-group player counts with dynamic row management |

Default: **Simple mode**.

---

#### 4.2 Simple Mode Inputs

Two inputs, displayed side-by-side on desktop, stacked on mobile:

**Input 1 — Total Players**
- Label: `Total players being evaluated`
- Type: Number input (integer)
- Min: 30 | Max: 1000 | Default placeholder: e.g. `200`
- Helper text: *"Include all players across all age groups"*

**Input 2 — Evaluation Sessions per Player**
- Label: `Evaluation sessions per player`
- Type: Number input (integer)
- Min: 1 | Max: 8 | Default: `3`
- Helper text: *"Typically 2–4 sessions per player"*

---

#### 4.3 Refined Mode ("By Age Group") Inputs

Replaces the Simple inputs when the **By Age Group** toggle is selected.

**Age Group Table:**

A dynamic table where each row represents one age group. The user can add and remove rows.

**Columns per row:**
1. **Age Group** — Dropdown selector (see list below)
2. **Number of Players** — Number input (integer, min 1)
3. **Remove Row** — Small ✕ button (removes that row); disabled/hidden if only one row remains

**Age group dropdown options** (in order, all selectable):
U9, U10, U11, U12, U13, U14, U15, U16, U17, U18

**Add Row button:**
- Label: `+ Add Age Group`
- Style: text link or subtle outlined button below the table
- Behaviour: Appends a new row with a blank age group selector and empty player count
- A given age group cannot be selected twice; already-selected options should be disabled or hidden in other rows' dropdowns

**Sessions per player** in Refined mode: A single shared input below the table.
- Label: `Evaluation sessions per player (applies to all groups)`
- Same specs as Simple mode

---

#### 4.4 Calculation Model

The worksheet calculates estimated volunteer hours using a **mixed fixed + variable model**. Users do not see this breakdown — they only see the output table and totals. The model runs silently in the background.

##### Fixed Costs (do not scale with player count)

These are coordination overhead tasks that take roughly the same time regardless of association size:

| Task | Estimated Hours (Your Process) | With Max |
|---|---|---|
| Building the evaluation session schedule | 6–10 hrs | ~1 hr |
| Post-evaluation director review sessions | 4–8 hrs | ~1 hr |
| Goalie evaluation coordination | 3–6 hrs | ~1 hr |

##### Variable Costs (scale with player count and/or sessions)

These tasks grow proportionally with the number of players and sessions:

| Task | Rate (Your Process) | Rate (With Max) |
|---|---|---|
| Communicating ice times to players/parents | 12–18 min/player | ~0 min/player |
| Assigning players to each evaluation session | 4–6 min/player/session | ~0 min/player/session |
| Check-in management at the rink | 2–4 min/player/session | ~0 min/player/session |
| Manual score entry | 3–5 min/player/session | ~0 min/player/session |
| Auditing results and catching errors | 5–8 min/player | ~0 min/player |
| Building level groupings from results | 4–7 min/player | ~1 min/player |
| Producing and distributing player feedback/report cards | 8–12 min/player | ~0 min/player |

**Calculation note:** All rates shown are midpoint estimates for the default display. Use the midpoint of each range for calculation (e.g., 15 min/player for communication). Final hours should be rounded to the nearest whole hour for display. The "With Max" column uses the rates above and should show a dramatically reduced total.

**Scaling behaviour:** When a user changes player count from 250 to 500, all variable rows change proportionally. Fixed rows do not change. This means the calculated totals are meaningfully different at different player counts, which is the intended behaviour.

---

#### 4.5 Output Display

Below the input controls, display a results table. This table updates **live** (reactively) as the user changes any input.

**Table columns:**
1. **Task** — task name (left-aligned)
2. **Your Process** — estimated hours (right-aligned, bold)
3. **With Max** — estimated hours with Max (right-aligned, in `#67823a` dark green)
4. **Hours Saved** — difference (right-aligned, in `#c4d600` light green, bold)

**Table rows:** One row per task listed in 4.4 (fixed tasks first, then variable tasks).

**Summary row** at the bottom of the table (visually separated with a top border):

| | Your Process | With Max | Hours Saved |
|---|---|---|---|
| **Total** | **[X] hrs** | **[Y] hrs** | **[Z] hrs** |

**Callout block below the table:**

Display two callout boxes side-by-side (stacked on mobile):

**Box 1 — Hours Saved (large display):**
```
You're spending an estimated
[X] volunteer hours
on evaluation administration.
Max handles approximately [Z] of them.
```

**Box 2 — Converted to Days:**
```
That's roughly
[Z ÷ 8, rounded] volunteer work-days
returned to your community each fall.
```

Both boxes: Dark background (`#101820`), light green accent text for the big numbers, white supporting text.

---

#### 4.6 Worksheet Footer

Below the callout boxes:

> *These estimates are based on patterns we observe across minor hockey associations of similar size. Your actual hours may vary. Want a more precise assessment? We're happy to walk through your process with you.*

**CTA Button:**
- Label: `Book a Walk-Through`
- Style: Filled `#c4d600` button
- Behaviour: Triggers Zendesk demo widget (`TODO: insert Zendesk trigger`)

---

### Section 5 — What Max Actually Does

**Background:** Near-black (`#101820`)
**Text colour:** White

**Section heading (H2):**
> What Max Actually Does

**Intro paragraph:**
> Every task in the worksheet above corresponds to something Max handles — automatically, accurately, and without adding work for your volunteers. Here's how.

**Content:** Seven feature items. Layout: two columns on desktop (icon + title + description), single column on mobile.

Each item has:
- A `#c4d600` icon (SVG or Unicode symbol)
- A bold white title
- 2–3 sentences of description

| Icon | Title | Description |
|---|---|---|
| ✉️ | Automated Player Communication | Max handles all parent and player communication about ice times, session assignments, and schedule updates — automatically, throughout the evaluation period. No email queue for your admin coordinator. |
| 📅 | Smart Session Scheduling | Players are automatically assigned to the right evaluation sessions based on division, availability, and session capacity. Changes are handled without manual re-coordination. |
| 📱 | Digital Check-In | Evaluators and administrators check players in digitally on-device. No printer, no clipboard, no lineup confusion at the rink door. |
| ⚡ | Near Real-Time Scoring | Evaluators score in the app during sessions. Results update within approximately 10 minutes — no waiting for a data entry volunteer to catch up. |
| 🏆 | Instant Player Rankings | When evaluation sessions conclude, player standings are calculated automatically. No director needs to spend a weekend building a spreadsheet. |
| 📄 | Personalized Player Report Cards | Every evaluated player receives a detailed, personalized report card — automatically generated, automatically distributed. No manual production. |
| 🎯 | Bias-Calibrated Results | Max uses algorithmic tools to detect and reduce evaluator bias and inconsistency — so placements reflect player performance, not the tendencies of whoever happened to be scoring that session. |

**Report Card Proof Point:**

Below the feature grid, insert a visually distinct callout box (slightly lighter background — `#1e2a1e` or similar dark green tint):

```
See what a player receives after evaluation →
[Thumbnail preview or icon of the report card]
View Sample Gold Report Card  [opens Max_Analytics_-_Gold_Report_Card.html in new tab]
```

Style the link as a `#c4d600` bordered box/button. The report card file will be located at `/assets/report-card/Max_Analytics_-_Gold_Report_Card.html`.

---

### Section 6 — CTA (Closing)

**Background:** Light green (`#c4d600`)
**Text colour:** Near-black (`#101820`)

**Heading (H2):**
> Ready to Talk About Your Evaluation Process?

**Supporting paragraph:**
> We're not here to tell you your process is broken. We're here to help you figure out where the opportunities are — and whether Max is the right fit for your association. A 30-minute conversation is usually all it takes.

**Primary CTA Button:**
- Label: `Book a Demo`
- Style: Dark filled (`#101820` background, `#c4d600` text)
- Behaviour: Triggers Zendesk demo widget (`TODO: insert Zendesk trigger`)

**Secondary link:**
- Label: `Learn more about Max Analytics →`
- Href: `https://maxanalytics.ca` (or site root)
- Style: Dark underlined text link

---

### Footer

**Background:** Near-black (`#101820`)

Contents (standard, minimal):
- Logo: `MAX_LOGO_GREY_DARK_BG_ANALYTICS.png` or `MAX_LOGO_NO_BG_ANALYTICS.png`, left-aligned
- Copyright: `© [current year] Max Analytics. All rights reserved.`
- Link: `maxanalytics.ca`
- Optional: `Privacy Policy` link placeholder

---

## 5. Interactivity Specifications

### 5.1 Worksheet Reactivity

- All worksheet outputs must update **immediately** (no submit button) as inputs change.
- If a player count field is empty or zero, the corresponding variable rows should display `—` rather than `0`.
- In Refined (By Age Group) mode, the total player count used in variable calculations is the **sum of all age group player counts**.
- If no age groups have been added yet in Refined mode, display a prompt: *"Add at least one age group to see your estimate."*

### 5.2 Accordion (Section 3 — Board Questions)

- Cards are collapsed by default.
- Clicking a header toggles its body open or closed.
- Use a smooth CSS height transition (not `display:none` toggle) for the open/close animation.
- The chevron icon rotates 90° when the card is open.
- Accordion behaviour (closing others on open) is preferred but not required.

### 5.3 Mode Toggle (Worksheet)

- The Simple / By Age Group toggle should use a styled segmented control, not a native `<select>`.
- Switching modes should preserve the sessions-per-player value.
- Switching from Refined back to Simple should not clear the age group data — it should just hide the refined inputs and calculate from the aggregate total instead.

### 5.4 Age Group Row Management (Refined Mode)

- Default state: one empty row already present when the user switches to Refined mode.
- The `+ Add Age Group` button adds a new row below the last existing row.
- The ✕ Remove button on each row removes that row instantly.
- The ✕ button is hidden (or disabled) when only one row remains.
- Already-selected age groups should be visually disabled in other rows' dropdowns to prevent duplicate selection.
- The calculation updates immediately whenever any row's player count changes.

### 5.5 Smooth Scrolling

- All anchor links (CTA scroll-down, "Questions your board should be asking" link, Section 3 worksheet anchor reference) use CSS `scroll-behavior: smooth` or JavaScript smooth scroll.

---

## 6. Mobile Behaviour

**Priority:** Desktop is the primary build target for v1. Mobile support should be included but may use simplified layouts.

### Responsive breakpoints

| Breakpoint | Behaviour |
|---|---|
| ≥ 1024px (desktop) | Full layouts as described |
| 768px–1023px (tablet) | 2-column grids collapse to 1-column; worksheet table scrollable horizontally |
| < 768px (mobile) | Single column throughout; worksheet table stacks vertically per task row |

### Mobile-specific notes

- The Section 2.5 two-column stat callout becomes single-column: stat on top, text below.
- The Section 5 feature grid becomes single-column.
- The worksheet output table on small screens: consider collapsing the 4-column table to card-per-task format (task name as heading, then three value rows beneath).
- CTA buttons should be full-width on mobile.

---

## 7. Asset File References

Claude Code should expect the following files in the project directory. Paths shown are suggestions — adjust to match the actual project structure:

| File | Suggested Path |
|---|---|
| `MAX_LOGO_NO_BG_ANALYTICS.png` | `/assets/images/MAX_LOGO_NO_BG_ANALYTICS.png` |
| `MAX_LOGO_COLOR_LIGHT_BG_ANALYTICS.jpg` | `/assets/images/MAX_LOGO_COLOR_LIGHT_BG_ANALYTICS.jpg` |
| `MAX_LOGO_GREY_DARK_BG_ANALYTICS.png` | `/assets/images/MAX_LOGO_GREY_DARK_BG_ANALYTICS.png` |
| `MAX_LOGO_NO_BG_LIGHT_ANALYTICS.png` | `/assets/images/MAX_LOGO_NO_BG_LIGHT_ANALYTICS.png` |
| `MAX_LOGO_1000PX-ICON.png` | `/assets/images/MAX_LOGO_1000PX-ICON.png` (favicon) |
| `Max_Analytics_-_Gold_Report_Card.html` | `/assets/report-card/Max_Analytics_-_Gold_Report_Card.html` |

---

## 8. Technical Requirements

- **Single HTML file** for local development (inline CSS and JS are acceptable for v1; separate files preferred if the build will be integrated into a CMS or existing site).
- **No frameworks required.** Vanilla HTML, CSS, and JavaScript is preferred for simplicity and portability. React or Vue may be used if the builder prefers, but is not necessary.
- **No external dependencies** that require a build step (no Webpack, Vite, etc. unless the existing maxanalytics.ca site already uses one).
- External CDN resources (fonts from Google Fonts, icons from a CDN) are acceptable.
- **Zendesk integration:** All "Book a Demo" and "Request Demo" CTA buttons should have a clearly marked `<!-- TODO: Zendesk trigger -->` comment and a placeholder `onclick` handler. The Zendesk integration method will be provided in a follow-up.
- **Report Card link:** Opens in `target="_blank"` with `rel="noopener noreferrer"`.
- **Accessibility baseline:** All images have `alt` attributes. Colour contrast meets WCAG AA. Accordion cards are keyboard-navigable (Enter/Space to toggle). Form inputs have associated `<label>` elements.

---

## 9. Open Items (To Be Resolved Later)

The following items are **not blocking** the build. Claude Code should insert clearly labelled placeholders:

| Item | Placeholder Instruction |
|---|---|
| Zendesk demo widget trigger | Comment: `<!-- TODO: Replace with Zendesk widget trigger -->` |
| Specific hour estimate validation | Current estimates are reasonable placeholders; exact values TBD |
| Final page URL / slug | Build locally at `index.html`; slug TBD for site integration |
| Nav integration with maxanalytics.ca | Build as standalone page; nav integration TBD |
| Privacy Policy link | Placeholder `href="#"` in footer |

---

## 10. Summary Checklist for Claude Code

Before considering the build complete, verify:

- [ ] All 6 page sections present and in correct order
- [ ] Hero scrolls to worksheet on CTA click
- [ ] Section 3 accordion cards expand/collapse with animation
- [ ] All 6 accordion cards include all three content layers (What We Hear, Industry Reality, How Max Changes This)
- [ ] Worksheet toggles correctly between Simple and Refined modes
- [ ] Refined mode supports add/remove age group rows; duplicate age group prevention works
- [ ] Worksheet calculations update live on any input change
- [ ] Fixed costs do not change when player count changes; variable costs do
- [ ] Output table displays all tasks with Your Process / With Max / Hours Saved columns
- [ ] Hours-to-days callout boxes display below the table
- [ ] Report Card link opens in new tab
- [ ] All Zendesk CTA buttons have TODO placeholder comments
- [ ] Brand colours used consistently throughout (see Section 2.1)
- [ ] Correct logo variant used per section background colour
- [ ] Responsive layout functions at mobile breakpoint (< 768px)
- [ ] All images have alt text
- [ ] Page validates as well-formed HTML
