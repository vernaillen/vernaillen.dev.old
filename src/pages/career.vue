<script setup lang="ts"></script>
<template>
  <header-component />
  <section class="ud-relative ud-z-10 ud-pt-[100px] ud-overflow-hidden">
    <div class="ud-container">
      <div class="ud-flex ud-flex-wrap ud-items-center ud-mx-[-16px]">
        <breadcrumb-component page-name="Career" path="/career" />
        <div class="ud-w-full ud-px-4">
          <div class="ud-mb-12 md:ud-mb-0">
            <h1
              class="ud-font-bold ud-text-black dark:ud-text-white ud-text-2xl sm:ud-text-3xl ud-mb-5"
            >
              Career
            </h1>
            <p
              class="ud-font-medium ud-text-base ud-text-body-color ud-leading-relaxed ud-mb-8"
            >
              An overview of the projects I worked on and the technologies I've
              used
            </p>
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
          <div class="ud-mx-auto"></div>
        </div>
      </div>
    </div>
  </section>
  <footer-component />
</template>
