import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Project, Skill, Experience } from "@/types";

export const usePortfolioStore = defineStore("portfolio", () => {
  const projects = ref<Project[]>([]);
  const skills = ref<Skill[]>([]);
  const experiences = ref<Experience[]>([]);

  const featuredProjects = computed(() =>
    projects.value.filter((project) => project.featured)
  );

  const skillsByCategory = computed(() => {
    const categories: Record<string, Skill[]> = {};
    skills.value.forEach((skill) => {
      if (!categories[skill.category]) {
        categories[skill.category] = [];
      }
      categories[skill.category].push(skill);
    });
    return categories;
  });

  return {
    projects,
    skills,
    experiences,
    featuredProjects,
    skillsByCategory,
  };
});
