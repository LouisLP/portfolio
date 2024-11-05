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
    content: `As with any new job, the first few weeks were spent getting acquainted with the codebase, the tech stack, and the team. My first task was to implement \`i18n\` internationalization support across the entire frontend, as Jobreel was originally only offered in German. This was the best starting task I could've asked for, as it was a great way to get to know the codebase by touching almost every file. What used to be an overwhelming amount of code became familiar territory.

Anytime I ran into a new concept, I would take the time to fully understand it, and then make sure to **document** it. This forced me to understand the concept well enough to explain it to someone else, all while helping future developers in the process.

As I grew more confident, I began to take on more complex tasks and make suggestions of my own, such as:

- Adding **custom error handling middleware** to the backend, which allowed for more descriptive error messages and status codes to be sent to the frontend.
- Implementing **usability improvements** and **stylistic changes** to the user application and admin-panel, such as adding the ability to preview matches before signing up for an account.
- Better **modularization** and **organization** of the entire codebase, including implementing best-practices, which made everything cleaner and easier to understand.`,
  },
  {
    title: 'Expertise',
    content: `Throughout my time at Jobreel, I've developed significant expertise across various aspects of modern web development:

**Frontend Development (Vue.js)**
- Implemented complex state management solutions using Pinia
- Created reusable components or composables following the Composition API pattern
- Built responsive and accessible user interfaces using Tailwind CSS
- Integrated i18n internationalization for multi-language support

**Backend Development (Node.js/Express)**
- Designed and implemented RESTful APIs with proper error handling
- Optimized database queries and created complex aggregations
- Abstracted services and classes for better code organization and easier testing

**Database Management (MongoDB)**
- Designed efficient schema structures for complex data relationships
- Implemented aggregation pipelines for analytics
- Managed data migrations 

**DevOps & Infrastructure**
- Configured CI/CD pipelines with GitHub Actions
- Set up development environments with Docker

**Project Management**
- Participated in agile development processes
- Feature prioritization and ticket planning at sprint meetings
- Provided extremely detailed pull requests and code reviews`,
  },
  {
    title: 'Key Projects & Achievements',
    content: `During my tenure at Jobreel, I led several significant initiatives that improved both the product and development processes:
`,
  },
  {
    title: 'Reflection',
    content: `Working at Jobreel has been a transformative experience that has significantly shaped my growth as a full-stack developer. The opportunity to work in a small team environment allowed me to take on substantial responsibilities and make meaningful contributions to the product's success.

**Key Learnings:**
- The importance of documentation and knowledge sharing in a growing team
- The value of proper architecture and planning in preventing technical debt
- The balance between perfect code and delivering business value
- The significance of user feedback in driving product decisions

**Challenges Overcome:**
- Learning to prioritize tasks effectively in a fast-paced startup environment
- Managing technical debt while delivering new features
- Adapting to changing requirements and pivoting quickly when needed
- Building scalable solutions with limited resources

Working at Jobreel was a great experience; I was able to take on a lot of responsibility and make a real impact on the product. I'm proud of the work I did and will always be grateful for the opportunity to be part of such an innovative and driven team.

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
