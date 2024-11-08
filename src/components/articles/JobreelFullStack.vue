<script setup lang="ts">
import { ref } from 'vue'
import { marked } from 'marked'

import jobreelTeamEvent from '/assets/article-images/full-stack-jobreel/team-event.jpg'
import jobreelTeamPhoto from '/assets/article-images/full-stack-jobreel/team-photo.jpg'

interface Section {
  title?: string
  content: string
}

const sections = ref<Section[]>([
  {
    title: undefined,
    content: `In March of 2024, I was hired as a full stack engineer at [Jobreel](https://www.linkedin.com/company/thejobreel/), a Berlin-based startup specialized in finding the perfect job for young talent. Their tech stack includes: Vue.js, Node.js with Express, MongoDB, Supertokens, and more.

Originally, the tech team was very small, consisting of only the founding developer and myself; this meant that I was responsible for a wide range of tasks, quickly learning all that was necessary. Such responsibilities included the development across 4 repositories (frontend, backend, admin-panel, and website), with a focus on 2 main aspects:

- The **Jobreel web application**, allowing users to complete a job quiz in order to be matched with potential jobs. Thereafter, they can apply to these jobs, manage their applications, or explore other employers.
- The **Jobreel admin-panel**, allowing Jobreel's team to manage the employers and jobs offered on the platform, as well as providing analytics on user activity, job matches, and more.

The following is a reflection on my time at Jobreel, the challenges I had, and the lessons I learned.

<img 
  src="${jobreelTeamPhoto}" 
  alt="Jobreel team photo" 
  class="rounded-lg shadow-lg my-8 mx-auto" 
/>`,
  },
  {
    title: 'The Beginning',
    content: `As with any new job, the first few weeks were spent getting acquainted with the codebase, the tech stack, and the team. My first task was to implement <code>i18n</code> internationalization support across the entire frontend, as Jobreel was originally only offered in German. This was the best starting task I could've asked for, as it was a great way to get to know the codebase by touching almost every file. What used to be an overwhelming amount of code became familiar territory.

Anytime I ran into a new concept, I would take the time to document it — thereby forcing me to understand the concept well enough to explain it to someone else, all while helping future developers in the process.

As I grew more confident, I began to take on more complex tasks and make suggestions of my own, such as:

- Adding **custom error handling middleware** to the backend, which allowed for more descriptive error messages and status codes to be sent to the frontend.
- Implementing **usability improvements** and **stylistic changes** to the user application and admin-panel, such as adding the ability to preview matches before signing up for an account.
- Better **modularization** and **organization** of the entire codebase, and implementing best-practices for Vue.js, such as: when to make a component or a composable, an interface or a type, a store versus prop-drilling, and more.`,
  },
  {
    title: 'Expertise',
    content: `Throughout my time at Jobreel, I've developed significant expertise across various aspects of modern web development:

    On the **frontend** side, I've become proficient in Vue.js, using the Composition API and Pinia for state management. I've also worked on making the user interfaces responsive and accessible, either through my own custom-built components, or customizing various component libraries with Tailwind.

    **Backend**-wise, I've become proficient in Node.js with Express, and MongoDB for database management. I've designed and implemented RESTful APIs with proper error handling, optimized database queries, and created (very) complex aggregations. Abstracting services and classes for better code organization and easier testing was also a key focus.

    Lastly, in terms of **project management**, I've always provided extremely detailed pull requests and code reviews, making sure that the codebase is always in a maintainable state.`,
  },
  {
    title: 'Key Projects & Achievements',
    content: `During my tenure at Jobreel, I led several significant initiatives that improved both the product and development processes:
`,
  },
  {
    title: 'Reflection',
    content: `Working at Jobreel has been a transformative experience that has significantly shaped my growth as a developer. The opportunity to work in a small team environment allowed me to take on substantial responsibilities and make extremely meaningful contributions to the product's success.

    Tobias, the founding developer, is an excellent mentor who provided me with the guidance and support I needed to succeed. He showed me there's something beautiful about creating something so complex to make it look simple.

    Galen, who joined about half a year after me (mostly as a backend and devops engineer) is a fantastic colleague and person — we complimented eachothers skills greatly, and I'll always remember his dedication to optimization, performance, and clean code.

    I'm grateful for the opportunity to have worked at Jobreel, and although I still work there today, I'm excited to see what the future holds with all the lessons I learned from my time here.

<img 
  src="${jobreelTeamEvent}" 
  alt="Team event at a kayaking location" 
  class="rounded-lg shadow-lg my-8 mx-auto" 
/>`,
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
