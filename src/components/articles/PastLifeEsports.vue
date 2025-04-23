<script setup lang="ts">
import { marked } from 'marked'
import { ref } from 'vue'

import clgLcs from '/assets/article-images/past-lives/CLG-LCS.jpeg'
import clgTwitchcon from '/assets/article-images/past-lives/CLG-twitchcon.jpg'
import mggBerlinSunset from '/assets/article-images/past-lives/MGG-Berlin-sunset.jpg'
import mggMadrid from '/assets/article-images/past-lives/MGG-Madrid.jpg'
import mggWriting from '/assets/article-images/past-lives/MGG-writing.jpg'

interface Section {
  title?: string
  content: string
}

const sections = ref<Section[]>([
  {
    title: undefined,
    content: `The short version of my esports journey can be found on my work experience, however, there's much more to tell. After being a fan of competitive gaming for many years, creating videos on YouTube as a freelancer, and even playing at a high level myself, I decided to pursue a career in the industry.`,
  },
  {
    title: 'Counter Logic Gaming',
    content: `The first in-person esports company I worked for was Counter Logic Gaming just outside of Los Angeles in Arcadia, California. In 2016, I had been in touch with [Devin Nash](https://www.youtube.com/@devinnash), the CEO. He offered me valuable advice: to keep accumulating experience and get back in touch with him after a year. True to his suggestion, exactly one year later, I reached out to him again. His response was incredible — he not only remembered our conversation but also instantly bought me a plane ticket due to my commitment. The original opportunity was twofold:

1. Help Devin build his personal brand by becoming his personal videographer and editor.
2. Create content for CLG's [Overwatch](https://liquipedia.net/overwatch/Counter_Logic_Gaming) team, as they were in the process of training for the Overwatch League.

Most of my attention was focused on the former, as the Overwatch team had much more occasional opportunities for content creation. Throughout the process of building Devin's brand, I learned a lot about the esports industry, and gained direct insight through insider events, meetings, and other professionals.

<img 
  src="${clgTwitchcon}" 
  alt="2017 TwitchCon with Devin Nash" 
  class="rounded-lg w-2/3 shadow-lg my-8 mx-auto" 
/>

However, all of this was cut short due to the following...`,
  },
  {
    title: 'Madison Square Garden',
    content: `The North American League of Legends competitive teams were aiming towards the franchising of the league. While seeking larger sums of capitol and added room for growth, CLG accepted an offer to be bought by [Madison Square Garden](https://www.msgentertainment.com/). Devin brought [Nick Allen](https://www.linkedin.com/in/rnickallen/) as the new CEO after this move was finalized, thereby leaving the company.

It was a bittersweet moment, as I left without a concrete position, but excited for the future of the company. I was tasked to leverage my video editing skills to create a franchising announcement video, as well as several design and motion graphics assets for Madison Square Garden's "Fan Fest" event in New-York. After the event, I became a video editor for the League of Legends team, leveraging their popularity due to the franchising announcement.

<img 
  src="${clgLcs}" 
  alt="North American LCS with Counter Logic Gaming" 
  class="rounded-lg w-5/6 shadow-lg my-8 mx-auto" 
/>

After several months of working with the team, I was unable to receive a work visa, and was forced to return to Vancouver. I was fully anticipating a return to California, but was devastated to learn that it wouldn't be possible. Thankfully, the CEO felt badly about the situation, and offered to speak with other League of Legends team owners to find me a position. This led to somewhere I would have never expected...`,
  },
  {
    title: 'Misfits Gaming',
    content: `After working remotely for a few months, I was offered a video editing position in Berlin for one of the European League of Legends teams: [Misfits](https://misfitsgaming.gg/). I was ecstatic to be in a completely different continent, and to start fresh. [Ella Pravetz](https://www.linkedin.com/in/ella-pravetz-4511122a/) and I were the only two members of the content team at the time, and constituted a dyanmic videographer/editor duo. We were responsible for creating content for the League of Legends teams, and traveling Europe to take part in live events.

<img 
  src="${mggMadrid}" 
  alt="2018 Madrid with Misfits Gaming on stage" 
  class="rounded-lg w-5/6 shadow-lg my-8 mx-auto" 
/>

The European League of Legends teams had their turn for franchising around this time. What was previously known as the "EU LCS" became the "LEC". Many new opportunities were created now that thousands more viewers would tune in; our team grew very rapidly. I felt like I was trusted more with my expertise in video editing and motion graphics, and was given more responsbilities as a senior.

<img 
  src="${mggWriting}" 
  alt="Me writing a script for our weekly video series" 
  class="rounded-lg w-5/6 shadow-lg my-8 mx-auto" 
/>

The Misfits Gaming Group, the parent company of Misfits, expanded its reach by bringing in various teams and personalities, including the [Florida Mayhem](https://liquipedia.net/overwatch/Florida_Mayhem) in the Overwatch League, the [Florida Mutineers](https://cod-esports.fandom.com/wiki/Florida_Mutineers) in the Call of Duty League, as well as notable Fortnite personalities, such as Sceptic and Clix. My role involved content creation for these teams and players based in Florida. While I was making progress, I often felt restricted in expressing my creativity and focusing on projects that truly excited me.

Around a year and a half into my time in Berlin, the COVID-19 outbreak prompted a shift to remote work. This unexpected change provided me with time to reflect on the direction of my life. Not only did I develop a deep affection for Berlin, I embraced the European way of life. It became clear that I needed a more stable and predictable career path, with aspirations to ultimately return to Europe. By preserving my creativity as a hobby, I could strike a healthier balance in my life. Consequently, I made the decision to part ways with Misfits after a fulfilling 3-years, and set my sights on a new journey in computer science.

<img 
  src="${mggBerlinSunset}" 
  alt="Me looking off into the sunset in Berlin with the Fernsehturm in the background" 
  class="rounded-lg w-5/6 shadow-lg my-8 mx-auto" 
/>
`,
  },
  {
    title: 'Reflections',
    content: `Working in esports was a dream come true. I was able to travel the world, meet the players I grew up watching, and gain a ton of valuable work experience. I learned from some of the most talented individuals in the world; all the lessons I've learned will translate to my future endeavors. Now it's time to pour my all into computer science.`,
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
