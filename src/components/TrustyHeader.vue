<script setup lang="ts">
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiGithub, BiInstagram, BiLinkedin } from 'oh-vue-icons/icons/bi'

import { socialLinks } from '@/config/social'

addIcons(BiGithub, BiInstagram, BiLinkedin)
</script>

<template>
  <div class="mt-9 sm:px-8">
    <div class="mx-auto w-full max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <div class="max-w-2xl">
            <!-- My name -->
            <h1
              id="name"
              class="mt-20 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
            >
              {{ $t('header.name') }}
            </h1>
            <!-- Blurb about me -->
            <p id="blurb" class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              {{ $t('header.blurb') }}
            </p>
            <!-- Social links -->
            <div id="social-links-container" class="mt-6 flex gap-6">
              <a
                v-for="link in socialLinks"
                :id="`social-link-${link.name}`"
                :key="link.name"
                :href="link.url"
                class="group -m-1 p-1"
                :aria-label="`Follow me on ${link.name}`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <OhVueIcon
                  :name="link.icon"
                  class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
