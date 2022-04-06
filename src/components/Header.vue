<template>
    <header class="
            header
            ud-bg-transparent
            ud-absolute
            ud-top-0
            ud-left-0
            ud-z-40
            ud-w-full
            ud-flex
            ud-items-center
            ">
        <div class="ud-container">
        <div class="
                ud-flex ud-mx-[-16px] ud-items-center ud-justify-between ud-relative
                ">
            <div class="ud-px-4 ud-w-60 ud-max-w-full">
            <a href="/" class="ud-w-full ud-block header-logo">
                <img src="../assets/logo-top.png" alt="logo" class="ud-w-full dark:ud-hidden" />
                <img src="../assets/logo-top.png" alt="logo" class="ud-w-full ud-hidden dark:ud-block" />
            </a>
            </div>
            <div class="ud-flex ud-px-4 ud-justify-between ud-items-center ud-w-full">
            <div>
                <button id="navbarToggler" aria-label="Mobile Menu" class="
                        ud-block
                        ud-absolute
                        ud-right-4
                        ud-top-1/2
                        ud-translate-y-[-50%]
                        lg:ud-hidden
                        focus:ud-ring-2
                        ud-ring-primary ud-px-3 ud-py-[6px] ud-rounded-lg
                    ">
                <span class="
                        ud-relative
                        ud-w-[30px]
                        ud-h-[2px]
                        ud-my-[6px]
                        ud-block
                        ud-bg-dark
                        dark:ud-bg-white
                        "></span>
                <span class="
                        ud-relative
                        ud-w-[30px]
                        ud-h-[2px]
                        ud-my-[6px]
                        ud-block
                        ud-bg-dark
                        dark:ud-bg-white
                        "></span>
                <span class="
                        ud-relative
                        ud-w-[30px]
                        ud-h-[2px]
                        ud-my-[6px]
                        ud-block
                        ud-bg-dark
                        dark:ud-bg-white
                        "></span>
                </button>
                <nav id="navbarCollapse" class="
                        ud-absolute ud-py-5
                        lg:ud-py-0 lg:ud-px-4
                        xl:ud-px-6
                        ud-bg-white
                        dark:ud-bg-dark
                        lg:dark:ud-bg-transparent lg:ud-bg-transparent
                        ud-shadow-lg ud-rounded-lg ud-max-w-[250px] ud-w-full
                        lg:ud-max-w-full lg:ud-w-full
                        ud-right-4 ud-top-full ud-hidden
                        lg:ud-block lg:ud-static lg:ud-shadow-none
                    ">
                <ul class="ud-blcok lg:ud-flex">
                    <li class="ud-relative ud-group">
                        <a href="/" class="
                                menu-scroll
                                ud-text-base
                                text-dark
                                dark:ud-text-white
                                group-hover:ud-opacity-70
                                ud-py-2
                                lg:ud-py-6 lg:ud-inline-flex lg:ud-px-0
                                ud-flex ud-mx-8
                                lg:ud-mr-0
                                ">
                            Home
                        </a>
                    </li>
                    <li class="ud-relative ud-group">
                        <a href="/about" class="
                                menu-scroll
                                ud-text-base
                                text-dark
                                dark:ud-text-white
                                group-hover:ud-opacity-70
                                ud-py-2
                                lg:ud-py-6 lg:ud-inline-flex lg:ud-px-0
                                ud-flex ud-mx-8
                                lg:ud-mr-0 lg:ud-ml-8
                                xl:ud-ml-12
                                ">
                            About
                        </a>
                    </li>
                    <li class="ud-relative ud-group">
                        <a href="/contact" class="
                                menu-scroll
                                ud-text-base
                                text-dark
                                dark:ud-text-white
                                group-hover:ud-opacity-70
                                ud-py-2
                                lg:ud-py-6 lg:ud-inline-flex lg:ud-px-0
                                ud-flex ud-mx-8
                                lg:ud-mr-0 lg:ud-ml-8
                                xl:ud-ml-12
                                ">
                            Contact
                        </a>
                    </li>
                    <li class="ud-relative ud-group">
                        <a href="/music" class="
                                menu-scroll
                                ud-text-base
                                text-dark
                                dark:ud-text-white
                                group-hover:ud-opacity-70
                                ud-py-2
                                lg:ud-py-6 lg:ud-inline-flex lg:ud-px-0
                                ud-flex ud-mx-8
                                lg:ud-mr-0 lg:ud-ml-8
                                xl:ud-ml-12
                                ">
                            Music
                        </a>
                    </li>
                    <li class="ud-relative ud-group">
                        <a href="/anyotherurl" class="
                                menu-scroll
                                ud-text-base
                                text-dark
                                dark:ud-text-white
                                group-hover:ud-opacity-70
                                ud-py-2
                                lg:ud-py-6 lg:ud-inline-flex lg:ud-px-0
                                ud-flex ud-mx-8
                                lg:ud-mr-0 lg:ud-ml-8
                                xl:ud-ml-12
                                ">
                            404
                        </a>
                    </li>
                </ul>
                </nav>
            </div>
            <div class="ud-flex ud-justify-end ud-items-center ud-pr-16 lg:ud-pr-0">
                
                <div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </header>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style scoped>
.header-logo,
.sticky .header-logo {
    padding-top: 0;
    padding-bottom: 0;
}
</style>