<script setup lang="ts">
import { ref } from 'vue'
import { marked } from 'marked'

const plrElusive100 = new URL(
  '@/assets/article-images/prairielearn-ranked/PLR-elusive-100.png',
  import.meta.url
)
const plrBurnup = new URL(
  '@/assets/article-images/prairielearn-ranked/PLR-burnup.jpg',
  import.meta.url
)
const plrScoreboards = new URL(
  '@/assets/article-images/prairielearn-ranked/PLR-scoreboards.png',
  import.meta.url
)
const plrMakeDev = new URL(
  '@/assets/article-images/prairielearn-ranked/PLR-make-dev.png',
  import.meta.url
)

interface Section {
  title?: string
  content: string
}

const sections = ref<Section[]>([
  {
    title: undefined,
    content: `From May to August of 2023, I enrolled in the accelerated version of COSC 499: Capstone Software Engineering Project. With [Dr. Ramon Lawrence](https://cmps.ok.ubc.ca/about/contact/ramon-lawrence/) as our client, my group and I were tasked with integrating gamified functionality into the existing quizzing platform, [PrairieLearn](https://github.com/PrairieLearn/PrairieLearn). This added functionality would server as an "iClicker" alternative for instructors, providing strengthened student engagement and motivation. Due to the sheer scope of the project, I gained industry level experience, largely strengthening my skills in project management, fullstack development, and communication.

Our forked version of PrairieLearn has been transferred to [this repository](https://github.com/rlawrenc/PrairieLearn-Ranked/tree/master) with Dr. Lawrence as the new owner, and is automatically updated on every merge to master at [this DockerHub image](https://hub.docker.com/r/drlawrenc/plr).

<img 
  src="${plrBurnup}" 
  alt="Burnup chart" 
  class="rounded-lg shadow-lg my-8 mx-auto" 
/>
`,
  },
  {
    title: 'Trials & Tribulations',
    content: `Starting this project was quite daunting due to its extensive scope, revolving around the integration into PrairieLearn's existing infrastructure. I found myself uncertain about where to initiate and where to seek guidance. The challenge was exacerbated by outdated documentation and the intricate arrangement of their web pages, database, and file structure. Moreover, a fellow group member and I encountered difficulties in running the Docker container without emulation on our Apple Silicon laptops; the structure of their Docker image is more like a VM, rather than a modularized application.

<img 
  src="${plrMakeDev}" 
  alt="Make dev command when building the application" 
  class="rounded-lg w-5/6 shadow-lg my-8 mx-auto" 
/>

In response, our team opted to construct an isolated rendition of the application to facilitate progress. We employed their structure as a foundation, aspiring to seamlessly integrate it into the larger framework at a later time.

When the time came to embark on the integration phase, we encountered many of the same obstacles. Interestingly, even the official PrairieLearn developers characterized this task as a "nightmare" and deemed its completion within the allotted timeframe as "impossible." Nonetheless, we persevered and managed to achieve integration while maintaining a distinct separation from their system. This was accomplished through the strategic use of triggers within the database, marking a significant milestone in our journey.`,
  },
  {
    title: 'Welcome to PrairieLearn Ranked',
    content: `The "gamified" aspect of this project was achieved through three types of scoreboards:

1. **Live** scoreboards
2. **Seasonal** scoreboards
3. **All-time** scoreboards

As well as a series of **achievements** that students can earn throughout the semester.

<img 
  src="${plrScoreboards}" 
  alt="PrairieLearn Ranked scoreboards" 
  class="rounded-lg w-5/6 shadow-lg my-8 mx-auto" 
/>

Any time a student answers a question in an assessment set as "live" by the instructor, their score automatically gets updated in the live scoreboard. Once a live session ends, the students' scores are tallied into the seasonal and all-time scoreboards, providing progress throughout the semester.

The entire question-answering process is done entirely through the base functionality of PrairieLearn. Through various triggers and functions on Postgres, their scores are being grabbed and inserted into our tables. In addition, achievements are bestowed automatically upon certain events, such as achieving 3 first place finishes consecutively. By reducing the amount of coupling in our system, PrairieLearn Ranked could go down, and all the existing PrairieLearn functionality will remain intact.

A more detailed walkthrough of the application can be observed through [this video](https://youtu.be/zlKrYs1R_nU?si=tVC3QiTvUBOTBjLF).`,
  },
  {
    title: 'Pieces',
    content: `There were 3 pieces that encompassed most pages in the application:

1. An **SQL file**: containing the queries to the migration files needed to display or update information relevant for that page. Each query was separated by \`--BLOCK\` comments.
2. A **JS file**: containing the route handling, helper functions, and functions utilizing the SQL queries.
3. An **EJS file**: containing the HTML code to display the page, alongside embedded JS code to display dynamic information. In addition, **partials** were used to reduce the amount of repeated code, and modularize the application.

When work had to be done directly on the existing pieces of PrairieLearn, finding the appropriate place through thousands of lines of code was quite the massive task, especially in \`server.js\` for routing information.`,
  },
  {
    title: 'Reflection',
    content: `Amidst the challenges encountered on this project, I finished with a ton of invaluable experience that has significantly improved my confidence as a developer. I invested around 270 hours into this project, with an emphasis on meticulous organization, modularization, and adherence to the software engineering process. This was evident in my commitment to generating comprehensive documentation, in-depth pull requests and reviews, and engaging in various other facets of the development process. This journey has undoubtedly paved the way for my growth and improvement as a skilled developer.

My final grade for the course was 100%.

<img 
  src="${plrElusive100}" 
  alt="100% in the course (as listed on the grades page)" 
  class="rounded-lg w-5/6 shadow-lg my-8 mx-auto" 
/>
`,
  },
])
</script>

<template>
  <div class="prose max-w-none dark:prose-invert">
    <section v-for="(section, index) in sections" :key="index" class="mb-12">
      <h2 v-if="section.title" class="mb-6 text-2xl font-bold">{{ section.title }}</h2>
      <div class="text-zinc-600 dark:text-zinc-400" v-html="marked(section.content)" />
    </section>
  </div>
</template>
