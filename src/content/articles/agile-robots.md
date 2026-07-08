After several years in two different career paths in Berlin, I moved to Munich for a new opportunity with a larger robotics company, Agile Robots. Split into multiple sub-teams, I joined the IDE team to work on a development environment that enables operators to define and adapt custom robot actions. The stack centered around Vue with TypeScript on the frontend, backed by GraphQL and Python/Django services.

<img
  src="/assets/article-images/agile-robots/isar_walk_bridge.jpg"
  alt="Bridge on the Isar"
  class="rounded-lg shadow-lg my-8 mx-auto"
/>

Mixing my creative background with my technical training naturally pushed me into a more frontend-oriented role, where interface design, interaction modeling, and system architecture intersected.

## Suggestions

Upon looking through the code in the first couple weeks, parts of the codebase had evolved quickly and were becoming difficult to reason about. Therefore, I consistently raised proposals to improve code organization and architectural coherence; I witnessed lots of prop-drilling, very large components/functions, and little to no type-safety. I advocated for clearer separation of concerns, stronger typing strategies in TypeScript, modular Vue component design, and more predictable state handling.

<img
  src="/assets/article-images/agile-robots/agile-issues-identified.png"
  alt="Issues identified on Confluence"
  class="rounded-lg shadow-lg my-8 mx-auto"
/>

I also pushed for improved accessibility and usability. Although our users were technical experts, striving for an intuitive, nice-to-interact-with user experience should always be a primary goal. My contribution was less about rewriting large portions of the system (although occasional refactoring was necessary) and more about incrementally introducing conventions, documentation, and review standards that reduced ambiguity and long-term maintenance risk.

## Agile Data Hub

One of my earliest initiatives was working on the Agile Data Hub, a marketplace for robot task datasets. I collaborated in a lean team of one other developer and one designer to deliver a proof-of-concept under tight time constraints. We built the MVP using Nuxt, Prisma with SQLite, BetterAuth, and Stripe, focusing on validating the commercial and technical feasibility of selling curated robot action datasets. This was my first experience with a meta-framework like Nuxt, and I appreciated how it streamlined development while still allowing for flexibility in architecture.

<img
  src="/assets/article-images/agile-robots/agile-data-hub-homepage.png"
  alt="Agile Data Hub homepage"
  class="rounded-lg shadow-lg my-8 mx-auto"
/>

Given the team size, responsibilities were fluid. I contributed across the stack, but concentrated on frontend architecture, state management, and establishing patterns that would scale beyond a prototype. A simple Trello board was created as a formality, but I made sure the board was organized and kept up-to-date. The emphasis was speed without accruing unnecessary technical debt, ensuring that even a proof of concept maintained production-grade structure if we were to continue.

<img
  src="/assets/article-images/agile-robots/agile-data-hub-receipt.png"
  alt="Agile Data Hub receipt after purchase"
  class="rounded-lg shadow-lg my-8 max-w-xs mx-auto"
/>

## Design Engineering & Beyond

Over time, I positioned myself closer to a design engineer role. I worked directly with our designers to close the gap between conceptual interface design and implementation realities. Rather than treating Figma files or feature PRs as static handoffs, I used them to get a solid big-picture view of the application.

Leveraging my background in motion design and visual storytelling, I paid particular attention to feedback loops within the UI: micro-interactions, loading states, transitions, and visual hierarchy. In robotics software, clarity directly impacts operator efficiency and safety. My goal was to ensure that design intent translated into deterministic, maintainable code while preserving usability at scale.

At Agile Robots, my time was defined less with isolated feature delivery, and more about shaping how frontend systems were structured and how design and engineering collaborated. I'm proud of the incremental improvements I made, and the way I advocated for a more thoughtful, user-centered approach to building interfaces for complex robotic systems.

<img
  src="/assets/article-images/agile-robots/agile-robots-press-image.jpg"
  alt="Agile Robots robot holding cups"
  class="rounded-lg shadow-lg my-8 mx-auto"
/>
