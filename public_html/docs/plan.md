Final design direction

Visual character: dark graphite/navy + warm off-white + controlled electric blue/teal accent. Sunset/orange imagery tumhari prepared images mein naturally aa rahi hai, so usko secondary warmth ke liye use karenge rather than forcing orange into UI.

Overall feel: premium engineering consultancy + technology company, not generic Bootstrap corporate template.

Typography: strong modern grotesk/sans-serif, large headings, generous spacing, maximum 2 typefaces. Thin/light text avoid karenge for readability.

Motion: static bilkul nahi hoga, but gimmicky bhi nahi:

subtle scroll reveals
image scale/parallax very lightly
hover depth
animated counters
sticky transparent header → solid/glass header
service cards with elegant motion
smooth accordion transitions
reduced-motion accessibility fallback
Recommended website structure
Home
About
Services
Civil Works
Electrical Works
Telecommunications
IT & Digital Infrastructure
Systems Integration
HVAC
DG / Backup Power
Fire Safety & Alarm
Managed Services
Projects / Capabilities
Partners
Contact

Engineering websites work much better when they show real capabilities, project evidence, technical competence and outcomes, rather than just marketing slogans. That is also a consistent theme in current engineering/construction website audits.

Homepage A–Z layout
1. Header

Large old-style header remove.

New header:
Logo | Home | About | Services | Projects | Partners | Contact | Get a Quote

Desktop:

transparent over hero
blur/glass on scroll
clean dropdown/mega-menu for services

Mobile:

compact logo
proper animated menu
no cramped navigation
2. Hero

Full viewport cinematic engineering image.

Suggested hero copy:

Engineering infrastructure for a connected world.

Civil, power, telecommunications and digital systems — delivered from design through implementation and long-term support.

Buttons:
Explore Capabilities
Talk to Our Team

Then small capability strip:
Civil · Electrical · Telecom · IT · Integration

I would use one of the best civil sunset / telecom / data-center images from the asset folder here.

3. Trust / positioning strip

Immediately below hero.

Something like:

One partner. Multiple engineering disciplines.

Short copy explaining turnkey multidisciplinary delivery.

Then 3–4 metrics only if genuine figures exist:

Projects Delivered
Engineering Disciplines
Technology Partners
Support Coverage

No fake counters.

4. Services — Bento capability grid

This will be one of the strongest sections.

Instead of 10 boring equal cards, use a responsive asymmetric bento layout:

Large:

Civil & Infrastructure

Medium:

Telecommunications
IT Infrastructure

Smaller:

Electrical
HVAC
Systems Integration
Energy / DG
Fire & Safety

Each image card:

image
service title
1 concise line
arrow
subtle hover zoom

Your new WebP pack is perfect for this.

5. Integrated engineering section

Dark background.

Headline:

Physical infrastructure meets digital intelligence.

Use 4 connected stages:

Design → Build → Integrate → Maintain

This immediately explains what differentiates MHS from a contractor who only performs one trade.

6. Featured capabilities

Alternating large editorial layouts.

Example:

Telecommunications
Large tower image + fiber/networking capabilities.

Digital Infrastructure
Server-room image.

Mechanical & HVAC
HVAC plant imagery.

Civil Engineering
Construction image.

Apple-like generous full-width imagery and very little text.

7. Why MHS

Current “Why Choose Us” concept remains, but redesigned.

No icon soup.

Four strong pillars:

Turnkey Delivery
One accountable team across project stages.

Multidisciplinary Expertise
Engineering, technology and field execution under one roof.

Reliability by Design
Solutions built around operational continuity and maintainability.

Long-Term Support
Delivery does not end at commissioning.

This aligns well with the existing company positioning.

8. Project / capability showcase

Even if currently there are limited formal case studies, build the architecture now.

Large cards:

project image
industry
discipline
location
short scope

No fabricated project names/details. Until actual project records are available, use it as Capabilities in Action, not fake case studies.

9. Partners

Huawei / ZTE / Cisco etc. existing recognition stays, but make it restrained.

White/neutral logo row with monochrome treatment and subtle hover.

Existing site already presents these partnerships/recognitions.

10. Managed services / ongoing support

Separate section because recurring support is commercially important.

Something like:

Built for day one. Supported for what comes next.

Monitoring
Preventive Maintenance
Troubleshooting
Upgrades
Technical Support

11. Large CTA

Near footer:

Planning your next infrastructure project?

Talk to MHS Technologies about engineering, implementation and long-term support.

Start a Conversation

12. Footer

Completely redesign current footer.

Four columns:

Company
Capabilities
Contact
Quick Links

Plus:

phone
email
location if available
LinkedIn/social if genuine
copyright
privacy
terms

No oversized footer clutter.

Service-page redesign

Current Services page has useful detailed content. I would not throw that content away.

Instead every service page/section follows one premium reusable template:

Hero → overview → capabilities → image → delivery approach → related services → CTA

The existing detailed sub-services become clean accordion or expandable capability blocks, rather than massive paragraphs.

For example Telecom:

Telecommunications

Reliable connectivity infrastructure engineered for performance, coverage and operational continuity.

Then:

Network Design & Installation
Broadband Solutions
Telecom Infrastructure
Data & Voice
Maintenance & Upgrades
IoT / Smart Systems

Exactly the useful existing content, but much easier to consume.

Image mapping

The folder you gave:

/home/muhammad-shahwaiz-ali/data_drive/websites/mhs-tech/public_html/images/mhs-technologies-website-assets

will become the new visual library.

Recommended use:

Civil
civil-works-01...06.webp

Telecom
telecom-01...05.webp
telecom-equipment-01.webp

IT/Data Center
it-infrastructure-01...06.webp

HVAC
hvac-01...03.webp

Energy
solar-energy-01.webp

Company / Facilities / About
corporate-facility-01.webp
corporate-facility-02.webp

I would intentionally reuse very few images. Different pages should feel related, not duplicated.

Responsive behavior

This will be built mobile-first, not desktop CSS squeezed down later.

Target behavior:

desktop: full editorial grids
tablet: 2-column adaptive layouts
mobile: deliberate single-column flow
fluid typography via clamp()
responsive image sources/sizes
touch-safe buttons
no horizontal overflow
off-canvas mobile nav
service bento collapses intelligently
large hero height adapts to mobile browser viewport
accordions instead of huge mobile content blocks
Performance

Because this is a production company website, animation cannot destroy Core Web Vitals.

I would keep:

WebP assets you prepared
lazy-load below-the-fold images
hero image preload
responsive srcset where useful
minimal JS
native CSS animations wherever possible
defer noncritical scripts
semantic HTML
no giant animation framework unless the existing stack genuinely benefits
no unnecessary carousel libraries
SEO / technical improvements

While redesigning, I would also fix the foundation:

meaningful <title> and meta descriptions per page
canonical URLs
Open Graph metadata
structured headings
Organization / LocalBusiness schema where appropriate
service schema where defensible
sitemap
robots.txt
accessible alt text
semantic navigation
proper favicon/app icons
404 page
contact CTA tracking hooks
descriptive service URLs
internal linking between related disciplines
Content improvements

I would preserve the real meaning of your current copy, but rewrite portions to reduce generic phrases like “high quality,” “advanced,” “modern,” etc.

The tone should become:

specific + technical + confident + concise

rather than:

marketing-heavy + repetitive.

Your About page already gives us the right base: multidisciplinary engineering, field experience, greenfield/brownfield work, technical standards, reliability and long-term partnerships.

One blocker before I actually rewrite the files

I checked the connected GitHub account, but the MHS website repository is not available there, and the Linux path you gave is on your own Ubuntu machine, not mounted inside my current coding environment.

So I can design the whole architecture from the live site, but I should not fabricate your local file structure and blindly generate replacements.

Run this one command from the website folder and paste me the result:

cd /home/muhammad-shahwaiz-ali/data_drive/websites/mhs-tech/public_html
find . -maxdepth 2 -type f | sort

Then I’ll inspect the actual structure first and we can start the redesign safely from the header/global foundation → homepage → shared components → inner pages → responsive polish, without destroying any working content.

mshahwaiz-ali/websites ye repo hai buddy and es mein abhi sirf ek folder hai wo mshs ka hai

Perfect — repo mil gaya and structure confirm ho gaya. mshahwaiz-ali/websites → main → public_html/ is the current site root. Repo public hai, aur existing site files bhi mil gaye: index.html, about.html, services.html, contact.html, style.css, nav.js, legal pages, SEO files, contact PHP, and images/.

So ab local command ki zarurat nahi. Main GitHub main ko authoritative source maan ke hi kaam karunga.

Redesign approach

Main poora site ek hi baar blindly overwrite nahi karunga. Best safe order ye rahega:

Audit current files/content/assets
Build shared design system
colors
typography
spacing
buttons
cards
responsive breakpoints
animations
New global header + navigation
New homepage
About page
Services page
Contact page + existing form compatibility
Privacy / Terms styling
SEO / sitemap / metadata cleanup
responsive + accessibility + performance pass
final browser-level consistency check
Design language locked

I’d go with:

deep navy / graphite foundation
off-white surfaces
restrained cool-blue accent
your sunset imagery providing warm orange naturally
large premium typography
lots of whitespace
dark/light section rhythm
editorial image layouts
bento-style service cards
glass/sticky header
subtle motion only
no generic Bootstrap-template feel
no excessive gradients / neon / cheesy tech graphics

And yes: existing content stays authoritative, but I can improve wording, hierarchy and add sensible content where the existing site is too thin. I won’t invent fake clients, metrics, certifications or projects.

Your new WebP assets will be used from:

public_html/images/mhs-technologies-website-assets/

One important thing

Abhi I have only inspected, not modified or pushed anything yet.

Since this is a full redesign, next I want to inspect the actual current index.html, style.css, nav.js, services.html, about.html, and contact flow first. After that I can start implementing directly on main in controlled commits.

Next step: I’ll audit those actual repo files and then start with the shared foundation + homepage redesign first.

hn tum poori repo inspect krlo and images ham parnet ke folder ki use kareibn ge and new wali jahan bhi need ho and proper sahi se krna sab ek sath nai 1 page at a time ya jese best lage es liye so that you can work properly inspection krlo and then phir ek banalo plan poora master plan koib deatil miss nai krna koi bhi content data kuch bhi sab dekhna and phir plan karo and then us plan ko follow krte hue banaein ge igthu pey okie

Haan buddy — ab proper repo audit ho gaya hai, aur ab hum random redesign nahi karenge. Pehle architecture lock karenge, phir page-by-page controlled implementation on GitHub main.

Current site technically kaafi clean hai: semantic HTML, responsive CSS, accessibility basics, mobile navigation, service filters/accordions, contact form, PHP mail handler, SEO metadata, sitemap, robots, HTTPS redirect, caching/security headers already exist. Inko destroy nahi karna; visual system + information architecture + presentation ko major upgrade karna hai.

MHS Technologies — Master Redesign Plan
1. What stays authoritative

Existing website content is our source of truth. MHS currently presents 10 core service areas:

Civil Works
Electrical Works
Telecommunications
IT Works & Systems Development
Systems Integration
HVAC Services
Diesel Generator Solutions
Fire Safety & Alarm Systems
Managed Services
Managed IT Services

Each already has useful sub-capabilities that we will preserve rather than throwing away. For example civil includes construction, infrastructure, project management, structural work, renovation and environmental planning; electrical includes distribution, installations, renewables, automation, maintenance and emergency power.

Managed Services and Managed IT also remain separate because they address genuinely different operational areas.

No fake:

projects
client counts
employee numbers
years of experience
certifications
office locations
case studies
metrics

unless we later get real information.

2. Core brand direction

The site should feel like a company working across:

Engineering × Infrastructure × Connectivity × Digital Systems

Not like a generic construction template and not like a software startup.

Visual language

Use:

Primary

deep midnight navy / graphite
almost-black blue
clean warm white

Secondary

muted steel grey
cool blue

Accent

controlled electric/engineering blue

The existing CSS already starts with this navy/blue direction. We can evolve it rather than introduce a completely unrelated identity.

Your new photography adds the warmth:

sunset amber
concrete grey
metallic silver
data-center blue
telecom silhouettes

This gives a premium industrial-tech look naturally.

3. Design personality

Think:

Apple-level restraint + engineering-company credibility

Not literal Apple cloning.

Key attributes:

oversized editorial headings
large photography
strong whitespace
thin separators
very few decorative elements
deliberate dark/light section transitions
beautiful crop ratios
restrained glass effects
subtle motion
highly consistent components
minimal visual clutter
very little icon spam
excellent mobile composition

Our current site already has some of these ideas, but visually it is still too conventional and repetitive: four-column cards, repeated service layouts and relatively plain hero composition.

The redesign should be much more cinematic.

4. Shared global architecture

Every primary page gets the same polished shell.

Header

Desktop:

Logo | About | Capabilities ▼ | Why MHS | Contact | Discuss a Project

Services mega-menu grouped as:

Engineering
Civil
Electrical
HVAC
DG / Backup Power
Fire Safety

Technology
Telecommunications
IT Infrastructure
Systems Integration

Managed
Managed Infrastructure
Managed IT

Current navigation already uses this grouping, which is good. We keep the logic but redesign the presentation.

Header behavior

At top of cinematic hero:

transparent/dark-overlay header

After scrolling:

dark translucent/navy glass
slight blur
subtle bottom border
reduced height

Mobile:

polished full-screen/off-canvas navigation
expandable service groups
body scroll lock
accessible Escape close
proper focus behavior

The current JS already provides a stable base for mobile menu, dropdown, filtering, Escape handling and body locking.

5. Homepage — flagship page

Homepage will establish the complete visual language first.

Section 1 — Cinematic hero

Full-bleed or near full-bleed visual.

Likely new civil/telecom/data infrastructure imagery.

Copy direction:

Engineering infrastructure for a connected world.

Support:

MHS Technologies integrates civil, electrical, telecommunications and digital systems — from planning and execution through commissioning and long-term support.

CTA:

Explore Capabilities
Discuss a Project

Small capability line:

Civil · Power · Telecom · Digital Infrastructure · Integration

No carousel.

One excellent hero is stronger than rotating slides.

Section 2 — Capability positioning

Minimal four-part strip:

Build
Civil & structural infrastructure

Power
Electrical, HVAC and critical systems

Connect
Telecom and network infrastructure

Operate
Integration, monitoring and managed support

This communicates the entire company in seconds.

6. Homepage service explorer — new Bento system

Current homepage has conventional equal capability cards.

Replace them with an asymmetric responsive capability bento.

Example desktop composition:

Large:
Civil & Infrastructure

Large:
Telecommunications

Medium:
Digital Infrastructure

Medium:
Electrical & Energy

Smaller:
HVAC
Systems Integration
Critical Power
Fire & Safety

Final row:
Managed Infrastructure
Managed IT

Every tile gets:

strong image
category
service title
concise line
arrow
beautiful hover transition

Mobile converts cleanly to stacked editorial cards.

7. Integrated delivery story

This is strategically important because MHS's value isn't just ten disconnected services.

Large dark section:

One infrastructure partner. One coordinated outcome.

Four-stage journey:

01 Discover
Requirements, site constraints, engineering assessment

02 Design
Architecture, disciplines, coordination

03 Deliver
Construction, installation, integration

04 Operate
Testing, commissioning, maintenance and support

Current site already contains essentially this delivery lifecycle, so we improve its presentation rather than inventing a new claim.

Visual style:

horizontal progress line on desktop
elegant vertical timeline on mobile
subtle scroll activation
8. Feature storytelling blocks

Instead of endless cards, use alternating editorial blocks.

Example:

Built infrastructure

Large construction photo.

Civil engineering that considers what comes next.

Connected infrastructure

Tower / telecom image.

Connectivity engineered into the environment.

Digital infrastructure

Data-center photograph.

The systems behind modern operations.

Critical environments

HVAC / equipment image.

Reliability where downtime matters.

These sections will make the website feel significantly more expensive.

9. Why MHS

Current content gives four good principles:

Complete Ownership
Practical Engineering
Coordinated Systems
Long-Term Support

Keep those concepts.

Redesign as either:

4 editorial pillars

or

large numbered blocks:

01 — Multidisciplinary
02 — Accountable
03 — Integrated
04 — Lifecycle-focused

Minimal copy.

10. Technology ecosystem

Current partner logos:

Cisco
Huawei
Midea
Smart Optics
ZTE

Keep all.

Use tasteful monochrome logo strip.

Important wording:

Not automatically call every brand an official “partner” unless legally/contractually accurate.

Safer wording:

Technology Ecosystem

or

Brands across our project environment

which the current homepage already does correctly.

11. Projects / case studies
Not now as fake content.

But architecture should anticipate it.

For the first redesign, we can use:

Capabilities in Practice

without claiming specific client contracts.

Later, once you provide actual projects:

/projects.html

could contain:

Project
Location
Industry
Scope
Services provided
Outcome
gallery

We do not block current redesign waiting for that.

12. Homepage closing CTA

Large visual or deep navy section:

Planning something complex?

Bring the requirement. We'll help connect the disciplines.

Buttons:

Discuss Your Project
Explore Services

Simple and strong.

13. About page — complete redesign

Existing About content is already reasonably strong: multidisciplinary operating model, coordinated disciplines, vision/mission/values, connected infrastructure and long-term operations.

We preserve all useful information.

New layout

01 Hero

Large engineering/facility image.

Headline:

Engineering depth. Technology reach. One accountable team.

02 Company story

Not generic corporate paragraph.

A beautiful editorial section explaining:

MHS exists around one central idea:

complex infrastructure performs better when disciplines are coordinated instead of fragmented.

This is already the essence of the existing copy.

03 Mission / Vision / Values

Current content preserved but beautifully reformatted.

Three large sections rather than three little cards.

04 Multidisciplinary map

Civil
Electrical
Telecom
IT
Integration

Could become an interactive connected diagram / clean horizontal composition.

No cheesy infographic.

05 Future-ready engineering

Use data-center / telecom / facilities imagery.

Connect:
physical infrastructure + digital infrastructure.

06 Why MHS

Current four pillars.

07 CTA

Discuss a project.

14. Services page — major UX rethink

Current Services page is information-rich but long. It contains all ten service groups with accordions.

We keep all sub-service content.

But presentation becomes easier to scan.

Top hero

Headline:

Engineering and technology, connected.

Short overview.

Sticky service navigation

Current filter bar is a good concept.

Upgrade it to:

All / Engineering / Technology / Managed

plus desktop service jump navigation.

Each service block

Use consistent editorial pattern:

Image
Category
Service title
Summary
Capabilities
Project CTA

Alternating left/right imagery to avoid monotonous repetition.

Example Civil:

Civil Works

Intro.

Capabilities:

Building Construction
Infrastructure Development
Project Management
Structural Design & Analysis
Renovation & Maintenance
Environmental Planning

Existing information stays.

15. Important service naming cleanup

Professional naming consistency:

Current:
D.G Solutions

Better:

Diesel Generator & Backup Power

Navigation can say:

Critical Power

while section heading retains the factual service.

Current:
IT Works

Better externally:

IT Infrastructure & Systems

because “IT Works” sounds less polished.

But we should preserve the underlying breadth:

software
cloud
networking
cybersecurity
server rooms
support

The existing service content confirms all these areas.

16. Contact page

Current contact flow is functional and worth preserving.

Fields currently include:

Name
Company
Email
Phone
Service
City / Project Location
Project Details
Honeypot anti-spam field

Excellent base.

New page layout

Left:

strong contact intro
email
phones
service coverage
response context

Right:

elegant form

Possibly add:

Preferred contact method

only if genuinely useful.

Avoid making it too long.

17. Contact backend — preserve, then harden

Existing PHP endpoint already does:

POST-only
input trimming
maximum lengths
email validation
honeypot
server-side allowed-service mapping
generic error handling
Reply-To
JSON response

Frontend JS handles async submission, states and success/error messaging.

We preserve it.

Later hardening:

CSRF strategy if appropriate
rate limiting/server protection if hosting supports it
stricter newline/header safety
stronger email deliverability configuration
optional Cloudflare Turnstile only if spam becomes an issue

No unnecessary CAPTCHA initially.

18. Footer redesign

Full shared footer.

Column 1

MHS logo
Company positioning

Column 2 — Company

About
Why MHS
Contact

Column 3 — Engineering

Civil
Electrical
HVAC
Power
Fire Safety

Column 4 — Technology

Telecommunications
IT Infrastructure
Systems Integration
Managed IT

Bottom

Privacy
Terms
Copyright

Email + phones remain visible.

Current footer already contains the correct core contacts:

info@mhs-tech.com.pk
+92 309 2072638
+92 315 2111206
19. Legal pages

Privacy Policy and Terms already contain meaningful content and are dated November 20, 2025.

Do not rewrite legal substance unnecessarily.

Tasks:

bring header/footer in line with new global design
improve typography/readability
proper heading rhythm
preserve legal text
ensure contact email remains correct
20. Image strategy

We now have two image libraries.

Existing repo assets

Current GitHub contains:

hero images
about images
section background images
service cards
service-section assets
service-page images
logo assets
partner logos
New high-quality pack

Your local folder:

public_html/images/mhs-technologies-website-assets/

with the 24 new WebP images:

civil
telecom
IT infrastructure
HVAC
solar
facility
telecom equipment

Important: this new folder is currently on your local machine but is not in GitHub main yet — GitHub's current images/ root does not list it.

So before pages reference them on production, those files need to be committed/pushed.

Selection rule

Do NOT automatically replace every old image.

For each section:

compare old image
compare new asset
choose whichever fits composition/content best

New assets probably dominate:

hero
civil
telecom
IT
HVAC
facility sections

Existing assets remain useful for:

electrical
DG
fire
managed services
specific gaps where the new batch has no equivalent

Exactly as you requested.

21. Image performance

We should eventually make responsive derivatives for high-impact images:

Hero:

1920
1440
960
mobile crop

Cards:

1200
800

Then use:

srcset
sizes
loading="lazy"
fetchpriority="high"

Only hero gets eager/high priority.

Everything else lazy.

No unnecessary 1600px asset downloaded into a 350px mobile card.

22. Animation system

Dynamic but controlled.

Allowed
fade/translate reveal
small image zoom on hover
card hover depth
sticky header transition
mega-menu animation
accordion animation
service filter transitions
subtle line progression
image parallax on selected desktop sections
scroll indicator where appropriate
Avoid
background particles
random floating blobs
overdone gradients
cursor effects
constant moving logos
excessive 3D
scroll hijacking
heavy animation libraries

Current IntersectionObserver reveal system is lightweight and good.

We can enhance it without adding 100 KB of JS.

And existing CSS already respects prefers-reduced-motion, which absolutely stays.

23. Responsive system

Current breakpoints are approximately:

1100
860
620

We can retain similar logical ranges.

But redesign mobile intentionally, not just collapse desktop grids.

Desktop

Full editorial composition.

Tablet

2-column and carefully reorganized layouts.

Mobile
short header
full-screen nav
single-column hero
stronger image crops
no sticky elements that consume half the screen
horizontal service chips only where beneficial
full-width CTAs
touch targets ≥ ~44px
reduced decorative motion
24. Typography system

Keep system-native loading performance.

Potential stack:

Inter / system-ui / -apple-system / Segoe UI

or another carefully selected locally/efficiently delivered sans.

No reason to add several Google Fonts.

Hierarchy:

Display
H1
H2
H3
body
supporting
eyebrow
label

Fluid clamp() typography — already used in current CSS and worth retaining.

25. Design tokens / CSS architecture

Instead of continuing one giant ad-hoc stylesheet forever, organize logically:

tokens
reset/base
typography
layout
navigation
buttons
hero
cards
services
forms
footer
utilities
responsive
motion

We can still keep a single production style.css if preferred; the key is internal organization.

No framework required.

The site is small enough that HTML/CSS/vanilla JS is the best architecture.

No React/Vue/Next unnecessarily.

26. Accessibility checklist

Already present:

skip link on primary pages
focus-visible styling
reduced motion
semantic buttons
aria-expanded behavior

We add/fix:

alt text quality
color contrast
keyboard mega menu
focus trapping/management for mobile nav where appropriate
aria-current
accordion relationships
heading hierarchy
form errors
visible labels
minimum target sizes
27. SEO plan

Current foundation is good:

Homepage already has:

title
description
canonical
robots
Open Graph
Twitter card
Organization JSON-LD

And current sitemap contains six public URLs.

Robots points to the sitemap correctly.

Improve during redesign

Every page:

title
meta description
canonical
OG title
OG description
OG image
Twitter card

Structured data:

Organization
service information where appropriate
breadcrumb only if actual navigational structure warrants it

Also:

richer internal links
clean heading hierarchy
descriptive image alt text
correct link labels
28. Performance / hosting

Existing .htaccess already has:

HTTPS forcing
/index.html → /
compression
browser caching
security headers

Good.

We keep it.

Possible improvements later:

CSP after we know all assets/scripts
immutable versioned asset strategy
modern font preload if used
preconnect only where justified

Do not add a bloated build system.

29. Security

Keep:

no unsafe inline user rendering
validated form fields
allowlisted service values
honeypot
POST enforcement
security headers

Potential later:

Content-Security-Policy
stricter Permissions-Policy
HSTS only when we are certain HTTPS is permanent across the host/subdomains

Do not casually deploy an HSTS policy that can lock out misconfigured subdomains.

30. Content writing rules

For every page:

Avoid

“leading provider”
“world class”
“best quality”
“cutting-edge” repeatedly
“innovative solutions” everywhere

Prefer

Concrete wording:

Design, deploy and maintain telecommunications infrastructure.

rather than:

We provide innovative state-of-the-art telecom solutions.

Professional engineering buyers respond better to specificity.

31. Content preservation matrix

Before changing each page we create a mini checklist.

For example Services:

Must preserve

all ten service categories
all current sub-capabilities
enquiry deep links
managed service distinction
contact flow
internal service anchors

Can improve

headings
descriptions
grouping
labels
CTA wording
visual order

This ensures nothing quietly disappears during redesign.

32. File architecture

Current simple static architecture is suitable:

public_html/
├── index.html
├── about.html
├── services.html
├── contact.html
├── privacy_policy.html
├── terms_cond.html
├── style.css
├── nav.js
├── contact.js
├── contact.php
├── .htaccess
├── robots.txt
├── sitemap.xml
└── images/

No need to turn a six-page company website into a framework project.

We should preserve this simplicity.

33. Implementation order

This is the exact sequence I recommend.

Phase 0 — Asset/technical baseline

Before visual work:

confirm latest main
inventory assets
add new WebP asset folder to GitHub
no old assets deleted yet
preserve existing working site
Phase 1 — Global design foundation

Modify:

style.css
nav.js

Build:

design tokens
typography
containers
buttons
header
mega menu
mobile navigation
footer
motion
shared CTA
responsive foundations

No page should be fully rewritten before this base is solid.

Phase 2 — Homepage

index.html

This becomes our reference design.

Finish it completely:

desktop
tablet
mobile
images
motion
links
SEO
accessibility

Then review.

Phase 3 — About

about.html

Reuse established system, but unique page composition.

Phase 4 — Services

services.html

Largest content page.

Take extra care because it contains the most business information.

Phase 5 — Contact

contact.html
contact.js
possibly contact.php

Visual redesign + validation of working enquiry flow.

Phase 6 — Legal

privacy_policy.html
terms_cond.html

Global shell + typography, substance preserved.

Phase 7 — Technical/SEO

.htaccess
robots.txt
sitemap.xml
metadata
structured data
404 page if we add one

Phase 8 — final QA

Every route.

34. Git workflow

Because this is a redesign and you want controlled work:

Work directly against authoritative GitHub main, but small incremental commits.

Suggested sequence:

refactor: establish MHS design system and navigation
redesign: rebuild MHS homepage
redesign: rebuild MHS about page
redesign: rebuild MHS services experience
redesign: rebuild MHS contact experience
style: align MHS legal pages
chore: finalize SEO accessibility and performance

No huge one-shot commit containing the whole website.

That makes regression review much easier.

35. Rules I will follow during implementation
Inspect current GitHub file before every modification.
Never assume local content is already pushed.
Never delete existing content without verifying its replacement.
New imagery is used intelligently, not everywhere just because it is new.
Existing imagery remains available.
One page completed before moving to the next.
Homepage establishes the shared visual language.
Services gets special attention because it contains most business information.
Contact functionality must remain working.
No fake business claims.
No framework migration.
No heavy JS dependencies unless genuinely necessary.
Mobile receives equal design attention.
SEO/accessibility are part of each page, not an afterthought.
Old unused assets can be cleaned only at the very end, once we know nothing references them.
Final target

When complete, the site should communicate this within the first few seconds:

MHS is not just a contractor and not just an IT company. It is a multidisciplinary engineering and technology company capable of building, powering, connecting, integrating and supporting modern infrastructure.

And visually it should feel:

premium → technical → credible → modern → spacious → responsive → fast

not:

template → crowded → corporate brochure → static.

Current state

Inspection: done.
Architecture: understood.
Content inventory: understood.
Technical/contact/SEO foundation: understood.
Master redesign direction: now locked.

One thing remains before implementation: the new mhs-technologies-website-assets folder needs to exist on GitHub, because right now it exists locally but GitHub's current image tree doesn't contain it.

Once that is pushed, I recommend we start Phase 1 + Homepage only. We get index.html completely right first, inspect the result, and then carry that exact design system across About → Services → Contact → Legal.S