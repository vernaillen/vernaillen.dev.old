<template>
  <header-component />
  <section class="relative z-10 pt-[180px] pb-[120px]">
    <div class="container">
      <div class="flex flex-wrap mx-[-16px]">
        <div class="w-full px-4 animated fadeIn">
          <div class="max-w-[530px] mx-auto text-center">
            <div class="mx-auto mb-9 text-center">
              <svg-404 />
            </div>
            <h3
              class="font-bold text-black dark:text-white text-3xl sm:text-4xl mb-4"
            >
              Sorry, the page can’t be found
            </h3>
            <p
              class="font-medium text-body-color text-base sm:text-lg leading-relaxed sm:leading-relaxed mb-10"
            >
              The page you were looking for appears to have been moved, deleted
              or does not exist.
            </p>
            <router-link
              to="/"
              class="text-base font-bold text-white bg-primary py-3 px-8 md:px-9 lg:px-8 xl:px-9 hover:bg-white hover:text-primary shadow-signUp rounded-md"
            >
              Back to Homepage
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div
      class="hidden sm:block absolute left-0 bottom-0 z-[-1]"
    >
      <svg-404-background />
    </div>
    <div
      class="hidden sm:block absolute top-0 right-0 z-[-1]"
    >
      <svg-404-background />
    </div>
  </section>
  <footer-component />
</template>
