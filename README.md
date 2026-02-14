# KodNest Premium Build System

A calm, intentional design system for serious B2C product companies.

## Design Philosophy

**Calm. Intentional. Coherent. Confident.**

This is not a flashy system. It does not shout. It does not need gradients, glassmorphism, or neon colors. Every element serves a purpose. Every color has a reason. Every spacing value is predictable.

---

## Color System

Use **maximum 4 colors** across the entire system.

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-background` | `#F7F6F3` | Page background (off-white) |
| `--color-text-primary` | `#111111` | Primary text |
| `--color-accent` | `#8B0000` | Primary actions, links, focus |
| `--color-success` | `#4A5F4A` | Success states, completed items |
| `--color-warning` | `#A67C52` | Warning states, in-progress items |
| `--color-border` | `#D4D2CC` | Borders, dividers |
| `--color-surface` | `#FFFFFF` | Cards, panels, elevated surfaces |

**Rules:**
- Never use gradients
- Never use glassmorphism effects
- Never use neon or saturated colors
- Use opacity for subtle variations, not new colors

---

## Typography

### Font Families

```css
--font-serif: 'Playfair Display', 'Georgia', serif;
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale

| Element | Font | Size | Line Height | Usage |
|---------|------|------|-------------|-------|
| H1 | Serif | 48px | 1.2 | Context header titles |
| H2 | Serif | 36px | 1.2 | Section headings |
| H3 | Serif | 28px | 1.2 | Card titles |
| H4 | Serif | 20px | 1.2 | Panel section titles |
| Body | Sans | 17px | 1.7 | All body text |
| Small | Sans | 14px | 1.7 | Helper text, labels |

### Rules

- **Headings:** Always serif, generous letter-spacing
- **Body text:** 16–18px, line-height 1.6–1.8, max-width 720px
- **Never use:** decorative fonts, random sizes, tight line-height

---

## Spacing System

**Only use values from this scale:**

```css
--space-xs: 8px
--space-sm: 16px
--space-md: 24px
--space-lg: 40px
--space-xl: 64px
```

**Never use:** 13px, 27px, or any arbitrary values. Whitespace is part of the design.

---

## Global Layout Structure

Every page must follow this structure:

```
┌─────────────────────────────────────────────┐
│              TOP BAR                         │
├─────────────────────────────────────────────┤
│          CONTEXT HEADER                      │
├─────────────────────────────────────────────┤
│  PRIMARY WORKSPACE  │  SECONDARY PANEL      │
│       (70%)         │      (30%)            │
│                     │                        │
├─────────────────────────────────────────────┤
│           PROOF FOOTER                       │
└─────────────────────────────────────────────┘
```

### Top Bar

**Purpose:** Global navigation and status

**Layout:**
- Left: Project name
- Center: Progress indicator (Step X / Y)
- Right: Status badge (Not Started / In Progress / Shipped)

**Height:** 64px  
**Background:** `--color-surface`  
**Border:** Bottom 1px `--color-border`  
**Position:** Sticky top

### Context Header

**Purpose:** Explain current page purpose

**Content:**
- Large serif headline (H1)
- 1-line subtitle explaining purpose
- No hype language, no marketing speak

**Padding:** `--space-xl` top/bottom, `--space-lg` left/right  
**Background:** `--color-background`

### Primary Workspace (70%)

**Purpose:** Main product interaction area

**Rules:**
- Clean cards with consistent padding
- No crowding—respect whitespace
- Predictable component behavior
- Maximum text width: 720px

### Secondary Panel (30%)

**Purpose:** Context and actions for current step

**Contains:**
1. **Step explanation** (short, clear)
2. **Copyable prompt box** (code-styled)
3. **Action buttons:**
   - Copy Prompt
   - Build in Lovable
   - It Worked
   - Report Error
   - Add Screenshot

**Background:** `--color-surface`  
**Border:** Left 1px `--color-border`

### Proof Footer

**Purpose:** Track completion proof

**Format:** Checklist style
- □ UI Built
- □ Logic Working
- □ Test Passed
- □ Deployed

**Position:** Sticky bottom  
**Background:** `--color-surface`

---

## Components

### Buttons

```html
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary">Secondary Action</button>
<button class="btn btn-small">Small Button</button>
```

**Rules:**
- Primary = solid deep red (`--color-accent`)
- Secondary = outlined, transparent background
- Hover = opacity 0.85 (primary) or darker border (secondary)
- Transition = 180ms ease-in-out
- Border radius = 4px (consistent everywhere)

### Inputs

```html
<input type="text" class="input" placeholder="Enter text">
<textarea class="textarea" placeholder="Enter longer text"></textarea>
```

**Rules:**
- Clean 1px border
- No heavy shadows
- Focus state = border color changes to `--color-text-primary`
- Same border radius as buttons

### Cards

```html
<div class="card">Content</div>
<div class="card card-compact">Less padding</div>
<div class="card card-spacious">More padding</div>
```

**Rules:**
- Subtle border, no drop shadows
- Background = `--color-surface`
- Balanced padding from spacing scale

### Badges

```html
<span class="badge badge-notstarted">Not Started</span>
<span class="badge badge-inprogress">In Progress</span>
<span class="badge badge-shipped">Shipped</span>
```

**Colors:**
- Not Started = outlined
- In Progress = `--color-warning`
- Shipped = `--color-success`

### Checkboxes

```html
<label class="checkbox-item">
  <input type="checkbox" class="checkbox">
  <span class="checkbox-label">Task Name</span>
</label>
```

**Checked state:** `--color-success` background with white checkmark

---

## Interaction Rules

### Transitions

```css
transition: all 180ms ease-in-out;
```

**Rules:**
- Duration: 150–200ms only
- Timing: `ease-in-out` only
- Never use: bounce, parallax, spring animations

### Hover States

- Buttons: opacity change or border color change
- Links: opacity 0.7
- Inputs: border color change

---

## Error & Empty States

### Error Messages

```html
<div class="error-message">
  <div class="error-title">What went wrong</div>
  <div class="error-description">Why it happened</div>
  <div class="error-solution">→ How to fix it</div>
</div>
```

**Rules:**
- Always explain what went wrong
- Always provide a solution
- Never blame the user
- Use arrow (→) for solution prefix

### Empty States

```html
<div class="empty-state">
  <h3 class="empty-state-title">Nothing here yet</h3>
  <p class="empty-state-description">What this space is for</p>
  <button class="btn btn-secondary">Next Action</button>
</div>
```

**Rules:**
- Never feel dead or abandoned
- Always provide a next action
- Keep copy calm and helpful

---

## Usage

### Import Styles

```html
<link rel="stylesheet" href="styles/main.css">
```

### Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link rel="stylesheet" href="styles/main.css">
</head>
<body>

  <header class="topbar">
    <div class="topbar-left">
      <span class="project-name">Project Name</span>
    </div>
    <div class="topbar-center">
      <span class="progress-text">Step X / Y</span>
    </div>
    <div class="topbar-right">
      <span class="badge badge-notstarted">Not Started</span>
    </div>
  </header>

  <section class="context-header">
    <h1 class="context-header-title">Page Title</h1>
    <p class="context-header-subtitle">One-line explanation</p>
  </section>

  <div class="workspace-layout">
    <main class="primary-workspace">
      <!-- Main content -->
    </main>
    <aside class="secondary-panel">
      <!-- Panel content -->
    </aside>
  </div>

  <footer class="proof-footer">
    <div class="proof-checklist">
      <!-- Checkboxes -->
    </div>
  </footer>

</body>
</html>
```

---

## File Structure

```
/styles
  ├── tokens.css      # Design tokens (colors, spacing, typography)
  ├── base.css        # Base styles and typography
  ├── layout.css      # Global layout structure
  ├── components.css  # Component styles
  └── main.css        # Entry point (imports all)

/demo.html            # Full demo page
/README.md            # This file
```

---

## Principles

1. **One mind designed this.** No visual drift across pages.
2. **Whitespace is part of design.** Never crowd elements.
3. **Every color has a reason.** Maximum 4 colors total.
4. **Predictable spacing.** Only use the spacing scale.
5. **No decoration.** Every element serves a purpose.
6. **Calm over loud.** Confidence over flash.

---

## Version

**1.0.0** — February 2026  
KodNest Premium Build System
