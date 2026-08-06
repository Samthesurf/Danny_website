# DACTION Initiative website

Plain HTML and CSS, no build tools, no dependencies except Google Fonts (loaded via CDN link in the head of each page). Ready to hand to a designer or developer as a content and structure reference.

## Pages

* index.html, about.html, programs.html, gallery.html, team.html, partners.html, contact.html
* One detail page per campaign: program-abuadmun.html, program-earth-summit.html, program-hydrogen-horizons.html, program-youth-vs-climate-change.html, program-ocean-conservation.html
* One bio page per core team member: team-daniel-olajuyigbe.html, team-ebenezer-tomoye.html, team-precious-ojo.html, team-gloria-ogundipe.html, team-ayooluwa-sunmonu.html, team-ayokunle-durojaiye.html, team-mariah-kosuowei.html
* style.css holds all design tokens (colors, type, spacing) and shared components

## Photos

No real photos are included. Every spot on the site where a photo belongs uses a `.placeholder` block (a gradient box with a camera icon and "Photo coming soon" label), so the layout, aspect ratios, and content flow already account for where images will go. There's a placeholder for:

* A hero photo on the homepage and every program detail page
* A card photo on each program overview card
* A portrait photo on every team member card and bio page
* A circular avatar photo for every named volunteer or speaker under each campaign's team section
* A full gallery page, organized by campaign, with placeholder tiles ready to be swapped for real photos

To swap in a real photo, replace a `<div class="placeholder ...">...</div>` block with an `<img src="..." alt="...">` of the same class for sizing, or ask your designer to wire up the same grid to a proper image component.

## Logo

The real DACTION logo is at `assets/logo.png` and is already wired into the header and footer on every page.

## Content notes for whoever finishes this

* Individual webpages for the programs are not yet developed but referenced in the site
* Bio pages of core team members are not yet developed but referenced in the site

