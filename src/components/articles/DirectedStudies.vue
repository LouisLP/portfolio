<script setup lang="ts">
import { ref } from 'vue'
import { marked } from 'marked'

import onlinePaper from '/assets/article-images/directed-studies/online-paper.png'
import liveScoreboard from '/assets/article-images/directed-studies/live-scoreboard.png'

interface Section {
  title?: string
  content: string
}

const sections = ref<Section[]>([
  {
    title: undefined,
    content: `Shortly after writing this document, I will be graduating with a Bachelor of Science in Computer Science from the University of British Columbia. One of my final credits was through a directed studies, provided to me and overseen by [Dr. Ramon Lawrence](https://www.linkedin.com/in/ramonlawrence/).

After completing this directed studies, him and I co-authored a paper titled [Live Session Gamification using PrairieLearn](https://dl.acm.org/doi/10.1145/3660650.3660663), published in June of 2024.

<img 
  src="${onlinePaper}" 
  alt="Cited paper of Live Session Gamification using PrairieLearn" 
  class="rounded-lg shadow-lg my-8 mx-auto" 
/>`,
  },
  {
    title: 'Jumping Back In',
    content: `After completing my capstone project, I was eager to continue working on PrairieLearn, as I had become quite familiar with the codebase and the development team. Previously, my work was largely done on the "ranked" (gamified) extension of PrairieLearn, whereas this directed studies would focus on a wider variety of tasks:

1. Utilizing and editing autograders to create updated course questions
2. Maintaining the deployment of PrairieLearn ("Canary") on the UBC servers
3. Improving PrairieLearn Ranked functionality

There were additional smaller tasks sprinkled in throughout the weeks, such as designing LinkedIn badges for top Computer Science students at UBC, or identifying bugs in the HelpMe ticketing system for the Computer Science department.

During the first week of classes, Dr. Lawrence set up a live assessment using PrairieLearn Ranked in his [COSC 304 (Introduction to Databases)](https://github.com/rlawrenc/cosc_304) course. It worked almost flawlessly, and the students were able to answer questions and see their results in real time. This was a huge success, and gave me enough confidence to work on other tasks while Dr. Lawrence identified any issues with the Ranked functionality throughout the semester.

<img 
  src="${liveScoreboard}" 
  alt="Live scoreboard on PrairieLearn Ranked during COSC 304" 
  class="rounded-lg shadow-lg w-5/6 my-8 mx-auto" 
/>`,
  },
  {
    title: 'Autograders & Questions',
    content: `Every week, I would be given a new topic to research and create questions for. These questions would be based on the course material, starting with relational algebra, and moving on to SQL, aggregation, ER/UML design and finally, Java/Python programming questions. 

I was also tasked with updating the UML autograder (written in Python), as the code was incredibly "spaghettified" and had a few bugs (such as receiving an error while adding multiple cardinalities from one relation to another). This was swiftly cleaned up by modularizing several functions, fixing some linter issues, adding lots of comments, and documenting the entire process.`,
  },
  {
    title: 'Post-Graduation',
    content: `Through this directed studies, I not only honed my technical skills in database management, programming, and problem-solving, but also gained invaluable insights into the practical aspects of software development and deployment in an educational setting. One of the most rewarding aspects of this project was seeing the immediate impact of my work.

I encourage you to read the [full paper](https://dl.acm.org/doi/10.1145/3660650.3660663) for a more detailed look at the project, and the broader benefits gained from gamifying live sessions in an educational setting.

As I move forward from my time at UBC into the professional world, the lessons learned during this directed studies will undoubtedly be some of the most significant milestones of my university experience.`,
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
