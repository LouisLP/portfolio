<script setup lang="ts">
const skills = {
  general: [
    'Git, Docker, CI/CD Pipelines',
    'Software Engineering Principles, Project Management, Data Structures/Algorithms',
  ],
  programming: {
    title: 'Programming in Javascript/Typescript, Python, C, C++, Java, SQL, Assembly',
    subskills: [
      { title: 'Frontend', items: 'HTML/CSS, Vue.js, React.js, Bootstrap, Tailwind' },
      { title: 'Backend/Databases', items: 'Node.js, Express, MySQL, PostgreSQL, MongoDB, PHP' },
    ],
  },
  other: [
    'Parallel Computing, Network Science, Data Analytics',
    'Video Editing, Motion Graphics, Photography, Videography',
  ],
}
</script>

<template>
  <div>
    <h2 class="mt-10 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
        class="h-6 w-6 flex-none dark:fill-zinc-400"
      >
        <path
          d="M320-490v-60h320v60H320Zm0-160v-60h320v60H320ZM220-390h320q26.43 0 49.215 12Q612-366 628-346l112 146v-620H220v430Zm0 250h490L581-309q-7.565-9.882-18.283-15.441Q552-330 540-330H220v190Zm520 60H220q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18Zm-520-60v-680 680Zm0-190v-60 60Z"
        />
      </svg>
      <span class="ml-3">Skills</span>
    </h2>
    <ul class="ml-6 mt-6 list-disc space-y-3">
      <li
        v-for="skill in skills.general"
        :key="skill"
        class="font-small w-full flex-none text-sm text-zinc-900 dark:text-zinc-100"
      >
        {{ skill }}
      </li>
      <li class="font-small w-full flex-none text-sm text-zinc-900 dark:text-zinc-100">
        {{ skills.programming.title }}
        <ul class="list-disc space-y-2 pl-5">
          <li
            v-for="subskill in skills.programming.subskills"
            :key="subskill.title"
            class="font-small mt-2 w-full flex-none text-xs text-zinc-800 dark:text-zinc-200"
          >
            <b>{{ subskill.title }}</b
            >: {{ subskill.items }}
          </li>
        </ul>
      </li>
      <li
        v-for="skill in skills.other"
        :key="skill"
        class="font-small w-full flex-none text-sm text-zinc-900 dark:text-zinc-100"
      >
        {{ skill }}
      </li>
    </ul>
  </div>
</template>
