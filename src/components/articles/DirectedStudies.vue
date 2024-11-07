<script setup lang="ts">
import { ref } from 'vue'
import { marked } from 'marked'

import onlinePaper from '@/assets/article-images/directed-studies/online-paper.png'
import liveScoreboard from '@/assets/article-images/directed-studies/live-scoreboard.png'
import helloWorld from '@/assets/article-images/directed-studies/hello-world.png'

interface Section {
  title?: string
  content: string
}

const sections = ref<Section[]>([
  {
    title: undefined,
    content: `Shortly after writing this document, I will be graduating with a Bachelor of Science in Computer Science from the University of British Columbia. One of my final credits was through a directed studies, provided to me and overseen by [Dr. Ramon Lawrence](https://cmps.ok.ubc.ca/about/contact/ramon-lawrence/).

After completing this directed studies, him and I co-authored a paper titled [Live Session Gamification using PrairieLearn](https://dl.acm.org/doi/10.1145/3660650.3660663).

<img 
  src="${onlinePaper}" 
  alt="Cited paper of Live Session Gamification using PrairieLearn" 
  class="rounded-lg shadow-lg my-8 mx-auto" 
/>`,
  },
  {
    title: 'Jumping Back In',
    content: `After completing my capstone project, I was eager to continue working on PrairieLearn, as I had become quite familiar with the codebase and the development team. My work was largely done on the Ranked extension of PrairieLearn, whereas this directed studies would focus on a wider variety of tasks:

1. Utilizing and editing autograders to create updated course questions
2. Altering the deployment of PrairieLearn ("Canary") on the UBCO servers
3. Maintaining and improving the PrairieLearn Ranked functionality

There were additional smaller tasks sprinkled in throughout the weeks, such as designing LinkedIn badges for top Computer Science students at UBCO, or identifying bugs in the HelpMe ticketing system for the Computer Science department.

During the first week of classes, Ramon set up a live assessment using PrairieLearn Ranked in his [COSC 304 (Introduction to Databases)](https://github.com/rlawrenc/cosc_304) course. It worked almost flawlessly, and the students were able to answer questions and see their results in real time. This was a huge success, and gave me enough confidence to work on other tasks while Ramon identified any issues with the Ranked functionality throughout the semester.

<img 
  src="${liveScoreboard}" 
  alt="Live scoreboard on PrairieLearn Ranked during COSC 304" 
  class="rounded-lg shadow-lg w-5/6 my-8 mx-auto" 
/>`,
  },
  {
    title: 'Autograders & Questions',
    content: `Every week, I would be given a new topic to create questions for. These questions would be based on the course material, starting with relational algebra, and moving on to SQL, aggregation, ER/UML design and finally, Java/Python programming questions. Although there were slight differences between each topic, the process of creating questions was largely the same:

- Create an \`info.json\` file, containing information related to the question type, tags, UUID, and more.
- Create a \`question.html\` file to display the question for student interaction. Certain custom tags would be used, such as \`<pl-uml-element>\`.
- Create another \`info.json\` file for an assessment, to house each previously-created question.
- Create an SQL file to build a database for any querying-related questions.

For example, here is what an SQL file's \`question.html\` may look like, utilizing the SQL autograder:

\`\`\`html
<!-- Question -->
<pl-question-panel>
    <i>CHALLENGE</i>: Write the SQL query to return a list of all <b>department names</b>, the <b>names of the projects of that department</b>, and the <b>name of the manager of each department</b>.
</pl-question-panel>    
<!-- SQL editor -->
<pl-sql-element database = "./SQLElementSharedLibrary/slideDatabases/6_SQL/WorksOn.sql">
    <sql-answer answer="SELECT dname, pname, ename FROM dept JOIN proj ON dept.dno = proj.dno JOIN emp ON mgreno = eno;">
    </sql-answer>
</pl-sql-element>
\`\`\`

I was also tasked with updating the UML autograder (written in Python), as the code was incredibly messy, difficult to work with, and had a few bugs (such as getting an error while including multiple cardinalities from one relation to another). This was swiftly cleaned up by modularizing several functions, fixing some linter issues, adding lots of comments, and documenting the entire process in a markdown file.

My next challenge was a bit more difficult, involving changing the deployment of PrairieLearn on the UBCO servers.`,
  },
  {
    title: 'PrairieLearn Canary Deployment',
    content: `When it came time to start working on the programming questions, the Java/Python autograders (which should be working with the default deployment of PrairieLearn) weren't functioning, even though I could get it working locally with the following command (utilizing an autograder jobs folder):

\`\`\`sh
docker run --platform linux/x86_64 -it --rm -p 3000:3000
-w /PrairieLearn
-v $PWD:/PrairieLearn
-v $PWD/COSC304-Questions:/course
-v $PWD/pl_ag_jobs:/jobs
-e HOST_JOBS_DIR=$PWD/pl_ag_jobs
-v /var/run/docker.sock:/var/run/docker.sock
prairielearn/prairielearn /bin/bash
\`\`\`

By a total stroke of dumb luck, [Dr. Firas Moosvi](https://firas.moosvi.com/) was in the official PrairieLearn Slack channel while I was asking questions about deployment, and he was able to notify me that he intentionally disabled this feature on the UBCO servers due to potential overhead. I got him to send me the \`canary.yml\` file he used to deploy PrairieLearn on the UBCO servers, and I was able to edit it to enable the proper settings for the programming autograders. After a few days of back-and-forth, I was able to get the autograders working again, and a successful "Hello World" program was able to be run on the UBCO servers. This was a huge win, as it meant that I could continue working on the programming questions, and that the students would be able to answer them without any issues.

<img 
  src="${helloWorld}" 
  alt="Hello World program autograding successfully" 
  class="rounded-lg shadow-lg w-5/6 my-8 mx-auto" 
/>`,
  },
  {
    title: 'PrairieLearn Ranked',
    content: `Last but not least, PrairieLearn Ranked had a few bugs that needed to be addressed. The first was a deadlock issue, where if a student submitted an answer to a question at the exact same time as another student, their score and rank would not be updated, and they would receive an error. This was due to an expensive query (trigger) that was being run every time a student submitted an answer to re-rank them. Instead, ranking was moved to be a frontend operation, and the trigger was altered into a separate function. This fixed the deadlock issue, and also improved the performance of the Ranked extension.

Next, Ramon was concerned students who weren't at the top of the scoreboard would be discouraged from answering questions, as they would never receive their "5 seconds of fame". To address this, I added [Bootstrap Toast notifications](https://getbootstrap.com/docs/5.2/components/toasts/) whenever a student would successfully increase their score.

Lastly, there was an issue where the same student would show up in the notification over and over, so this was a quick fix by adding unique identifiers to already-displayed scores.
`,
  },
  {
    title: 'Conclusion',
    content: `Through this directed studies, I not only honed my technical skills in database management, programming, and problem-solving, but also gained invaluable insights into the practical aspects of software development and deployment in an educational setting. One of the most rewarding aspects of this project was seeing the immediate impact of my work. I am particularly proud of how I tackled the challenges presented during this project; from resolving deadlock issues to ironing out smaller bugs by understanding the broader codebase, each problem solved was a step forward in my development as a computer scientist.

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
