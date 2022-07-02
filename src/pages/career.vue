<script setup lang="ts">
import CareerStep from "@/components/CareerStep.vue";
import { careerSteps } from "@/classes/career";
</script>

<template>
  <header-component />
  <section class="ud-relative ud-z-10 ud-pt-[100px] ud-overflow-hidden">
    <div class="ud-container">
      <div class="ud-flex ud-flex-wrap">
        <breadcrumb-component page-name="Career" path="/career" />
        <div class="ud-px-4">
          <div class="ud-mb-2">
            <div class="ud-flex ud-flex-wrap">
              <h1
                class="ud-font-bold ud-text-black dark:ud-text-white ud-text-2xl sm:ud-text-3xl ud-mb-5 animated pulse"
              >
                Career
              </h1>
            </div>
            <div class="ud-flex ud-flex-wrap">
              <p
                class="ud-font-medium ud-text-base ud-text-body-color ud-leading-relaxed ud-mb-8"
              >
                An overview of the projects I worked on and the technologies
                I've used on those projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <span class="ud-absolute ud-top-0 ud-left-0 ud-z-[-1] animated fadeIn">
        <svg-background-left1 />
      </span>
      <span class="ud-absolute ud-right-0 ud-top-0 ud-z-[-1] animated fadeIn">
        <svg-background-right1 />
      </span>
    </div>
  </section>
  <section class="ud-relative ud-z-10 ud-pt-[20px] ud-pb-[100px]">
    <div class="ud-container">
      <div class="ud-flex ud-flex-wrap ud-mx-[-16px]">
        <div class="ud-w-full ud-py-4 ud-px-8 md:ud-px-12">
          <div class="ud-mx-auto">
            <ol class="">
              <li v-for="(careerStep, index) in careerSteps" :key="index">
                <career-step :careerStep="careerStep" />
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer-component />
</template>
