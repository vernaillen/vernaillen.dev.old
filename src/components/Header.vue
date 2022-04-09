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
        <div class="ud-flex ud-mx-[-16px] ud-justify-between ud-relative">
            <div class="ud-px-4 ud-w-60 ud-max-w-full">
                <router-link to="/" class="ud-w-full ud-block header-logo">
                    <svg viewBox="0 0 754 276" width="100">
                        <g fill="none" opacity="transparent">
                            <path class="fill-black dark:fill-primary" d="M0 0 H92 V184 H172 V0 H264 V184 H344 V0 H436 V276 H0 Z" />
                            <path class="fill-primary dark:fill-white" d="M490 0 H582 V184 H662 V0 H754 V276 H490 Z" />
                        </g>
                    </svg>
                </router-link>
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
                        ud-ring-primary ud-px-3 ud-py-[6px] ud-rounded-lg"
                    @click="navbarToggler"
                    :class="navbarTogglerClass"
                    >
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
                <nav
                    :if="showNavbar" 
                    id="navbarCollapse" 
                    class="
                        ud-absolute ud-py-5
                        lg:ud-py-0 lg:ud-px-4
                        xl:ud-px-6
                        ud-bg-white
                        dark:ud-bg-dark
                        lg:dark:ud-bg-transparent lg:ud-bg-transparent
                        ud-shadow-lg ud-rounded-lg ud-max-w-[250px] ud-w-full
                        lg:ud-max-w-full lg:ud-w-full
                        ud-right-4 ud-top-full
                        lg:ud-block lg:ud-static lg:ud-shadow-none
                    "
                    :class="navbarCollapseClass">
                <ul class="ud-blcok lg:ud-flex">
                    <li class="ud-relative ud-group">
                        <router-link to="/" class="
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
                        </router-link>
                    </li>
                    <li class="ud-relative ud-group">
                        <router-link to="/about" class="
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
                        </router-link>
                    </li>
                    <li class="ud-relative ud-group">
                        <router-link to="/blog" class="
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
                            Blog
                        </router-link>
                    </li>
                    <li class="ud-relative ud-group">
                        <router-link to="/music" class="
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
                        </router-link>
                    </li>
                    <li class="ud-relative ud-group">
                        <router-link to="/contact" class="
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
                        </router-link>
                    </li>
                    <li class="ud-relative ud-group">
                        <router-link to="/anyotherurl" class="
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
                        </router-link>
                    </li>
                </ul>
                </nav>
            </div>
            <div class="ud-flex ud-justify-end ud-items-center ud-pr-16 lg:ud-pr-0">
                <div>
                    <label
                    for="darkToggler"
                    class="
                        ud-cursor-pointer ud-w-14 ud-h-14
                        ud-rounded-full
                        ud-flex
                        ud-items-center
                        ud-justify-center
                        ud-bg-gray-2
                        dark:ud-bg-dark-bg
                        ud-text-black
                        dark:ud-text-white
                    "
                    @click="darkToggler"
                    >
                        <svg
                            viewBox="0 0 23 23"
                            class="
                            ud-stroke-current
                            dark:ud-hidden
                            ud-w-5 ud-h-5
                            md:ud-w-6 md:ud-h-6
                            "
                            fill="none"
                        >
                            <path
                            d="M9.55078 1.5C5.80078 1.5 1.30078 5.25 1.30078 11.25C1.30078 17.25 5.80078 21.75 11.8008 21.75C17.8008 21.75 21.5508 17.25 21.5508 13.5C13.3008 18.75 4.30078 9.75 9.55078 1.5Z"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                        </svg>
                        <svg
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="
                            ud-hidden
                            dark:ud-block
                            ud-w-5 ud-h-5
                            md:ud-w-6 md:ud-h-6
                            "
                        >
                            <mask id="path-1-inside-1_977:1934" fill="white">
                            <path
                                d="M12.0508 16.5C10.8573 16.5 9.71271 16.0259 8.8688 15.182C8.02489 14.3381 7.55078 13.1935 7.55078 12C7.55078 10.8065 8.02489 9.66193 8.8688 8.81802C9.71271 7.97411 10.8573 7.5 12.0508 7.5C13.2443 7.5 14.3888 7.97411 15.2328 8.81802C16.0767 9.66193 16.5508 10.8065 16.5508 12C16.5508 13.1935 16.0767 14.3381 15.2328 15.182C14.3888 16.0259 13.2443 16.5 12.0508 16.5ZM12.0508 18C13.6421 18 15.1682 17.3679 16.2934 16.2426C17.4186 15.1174 18.0508 13.5913 18.0508 12C18.0508 10.4087 17.4186 8.88258 16.2934 7.75736C15.1682 6.63214 13.6421 6 12.0508 6C10.4595 6 8.93336 6.63214 7.80814 7.75736C6.68292 8.88258 6.05078 10.4087 6.05078 12C6.05078 13.5913 6.68292 15.1174 7.80814 16.2426C8.93336 17.3679 10.4595 18 12.0508 18ZM12.0508 0C12.2497 0 12.4405 0.0790176 12.5811 0.21967C12.7218 0.360322 12.8008 0.551088 12.8008 0.75V3.75C12.8008 3.94891 12.7218 4.13968 12.5811 4.28033C12.4405 4.42098 12.2497 4.5 12.0508 4.5C11.8519 4.5 11.6611 4.42098 11.5205 4.28033C11.3798 4.13968 11.3008 3.94891 11.3008 3.75V0.75C11.3008 0.551088 11.3798 0.360322 11.5205 0.21967C11.6611 0.0790176 11.8519 0 12.0508 0V0ZM12.0508 19.5C12.2497 19.5 12.4405 19.579 12.5811 19.7197C12.7218 19.8603 12.8008 20.0511 12.8008 20.25V23.25C12.8008 23.4489 12.7218 23.6397 12.5811 23.7803C12.4405 23.921 12.2497 24 12.0508 24C11.8519 24 11.6611 23.921 11.5205 23.7803C11.3798 23.6397 11.3008 23.4489 11.3008 23.25V20.25C11.3008 20.0511 11.3798 19.8603 11.5205 19.7197C11.6611 19.579 11.8519 19.5 12.0508 19.5ZM24.0508 12C24.0508 12.1989 23.9718 12.3897 23.8311 12.5303C23.6905 12.671 23.4997 12.75 23.3008 12.75H20.3008C20.1019 12.75 19.9111 12.671 19.7705 12.5303C19.6298 12.3897 19.5508 12.1989 19.5508 12C19.5508 11.8011 19.6298 11.6103 19.7705 11.4697C19.9111 11.329 20.1019 11.25 20.3008 11.25H23.3008C23.4997 11.25 23.6905 11.329 23.8311 11.4697C23.9718 11.6103 24.0508 11.8011 24.0508 12ZM4.55078 12C4.55078 12.1989 4.47176 12.3897 4.33111 12.5303C4.19046 12.671 3.99969 12.75 3.80078 12.75H0.800781C0.601869 12.75 0.411103 12.671 0.270451 12.5303C0.129799 12.3897 0.0507813 12.1989 0.0507812 12C0.0507813 11.8011 0.129799 11.6103 0.270451 11.4697C0.411103 11.329 0.601869 11.25 0.800781 11.25H3.80078C3.99969 11.25 4.19046 11.329 4.33111 11.4697C4.47176 11.6103 4.55078 11.8011 4.55078 12ZM20.5363 3.5145C20.6769 3.65515 20.7559 3.84588 20.7559 4.04475C20.7559 4.24362 20.6769 4.43435 20.5363 4.575L18.4153 6.6975C18.3455 6.76713 18.2628 6.82235 18.1717 6.86C18.0806 6.89765 17.983 6.91699 17.8845 6.91692C17.6855 6.91678 17.4947 6.83758 17.354 6.69675C17.2844 6.62702 17.2292 6.54425 17.1915 6.45318C17.1539 6.36211 17.1345 6.26452 17.1346 6.16597C17.1348 5.96695 17.214 5.77613 17.3548 5.6355L19.4758 3.5145C19.6164 3.3739 19.8072 3.29491 20.006 3.29491C20.2049 3.29491 20.3956 3.3739 20.5363 3.5145ZM6.74678 17.304C6.88738 17.4446 6.96637 17.6354 6.96637 17.8342C6.96637 18.0331 6.88738 18.2239 6.74678 18.3645L4.62578 20.4855C4.48433 20.6221 4.29488 20.6977 4.09823 20.696C3.90158 20.6943 3.71347 20.6154 3.57442 20.4764C3.43536 20.3373 3.35648 20.1492 3.35478 19.9526C3.35307 19.7559 3.42866 19.5665 3.56528 19.425L5.68628 17.304C5.82693 17.1634 6.01766 17.0844 6.21653 17.0844C6.4154 17.0844 6.60614 17.1634 6.74678 17.304ZM20.5363 20.4855C20.3956 20.6261 20.2049 20.7051 20.006 20.7051C19.8072 20.7051 19.6164 20.6261 19.4758 20.4855L17.3548 18.3645C17.2182 18.223 17.1426 18.0336 17.1443 17.8369C17.146 17.6403 17.2249 17.4522 17.3639 17.3131C17.503 17.1741 17.6911 17.0952 17.8877 17.0935C18.0844 17.0918 18.2738 17.1674 18.4153 17.304L20.5363 19.425C20.6769 19.5656 20.7559 19.7564 20.7559 19.9552C20.7559 20.1541 20.6769 20.3449 20.5363 20.4855ZM6.74678 6.6975C6.60614 6.8381 6.4154 6.91709 6.21653 6.91709C6.01766 6.91709 5.82693 6.8381 5.68628 6.6975L3.56528 4.575C3.49365 4.50582 3.43651 4.42306 3.39721 4.33155C3.3579 4.24005 3.33721 4.14164 3.33634 4.04205C3.33548 3.94247 3.35445 3.84371 3.39216 3.75153C3.42988 3.65936 3.48557 3.57562 3.55598 3.5052C3.6264 3.43478 3.71014 3.37909 3.80232 3.34138C3.89449 3.30367 3.99325 3.2847 4.09283 3.28556C4.19242 3.28643 4.29083 3.30712 4.38233 3.34642C4.47384 3.38573 4.5566 3.44287 4.62578 3.5145L6.74678 5.6355C6.81663 5.70517 6.87204 5.78793 6.90985 5.87905C6.94766 5.97017 6.96712 6.06785 6.96712 6.1665C6.96712 6.26515 6.94766 6.36283 6.90985 6.45395C6.87204 6.54507 6.81663 6.62783 6.74678 6.6975Z"
                            />
                            </mask>
                            <path
                            d="M12.0508 16.5C10.8573 16.5 9.71271 16.0259 8.8688 15.182C8.02489 14.3381 7.55078 13.1935 7.55078 12C7.55078 10.8065 8.02489 9.66193 8.8688 8.81802C9.71271 7.97411 10.8573 7.5 12.0508 7.5C13.2443 7.5 14.3888 7.97411 15.2328 8.81802C16.0767 9.66193 16.5508 10.8065 16.5508 12C16.5508 13.1935 16.0767 14.3381 15.2328 15.182C14.3888 16.0259 13.2443 16.5 12.0508 16.5ZM12.0508 18C13.6421 18 15.1682 17.3679 16.2934 16.2426C17.4186 15.1174 18.0508 13.5913 18.0508 12C18.0508 10.4087 17.4186 8.88258 16.2934 7.75736C15.1682 6.63214 13.6421 6 12.0508 6C10.4595 6 8.93336 6.63214 7.80814 7.75736C6.68292 8.88258 6.05078 10.4087 6.05078 12C6.05078 13.5913 6.68292 15.1174 7.80814 16.2426C8.93336 17.3679 10.4595 18 12.0508 18ZM12.0508 0C12.2497 0 12.4405 0.0790176 12.5811 0.21967C12.7218 0.360322 12.8008 0.551088 12.8008 0.75V3.75C12.8008 3.94891 12.7218 4.13968 12.5811 4.28033C12.4405 4.42098 12.2497 4.5 12.0508 4.5C11.8519 4.5 11.6611 4.42098 11.5205 4.28033C11.3798 4.13968 11.3008 3.94891 11.3008 3.75V0.75C11.3008 0.551088 11.3798 0.360322 11.5205 0.21967C11.6611 0.0790176 11.8519 0 12.0508 0V0ZM12.0508 19.5C12.2497 19.5 12.4405 19.579 12.5811 19.7197C12.7218 19.8603 12.8008 20.0511 12.8008 20.25V23.25C12.8008 23.4489 12.7218 23.6397 12.5811 23.7803C12.4405 23.921 12.2497 24 12.0508 24C11.8519 24 11.6611 23.921 11.5205 23.7803C11.3798 23.6397 11.3008 23.4489 11.3008 23.25V20.25C11.3008 20.0511 11.3798 19.8603 11.5205 19.7197C11.6611 19.579 11.8519 19.5 12.0508 19.5ZM24.0508 12C24.0508 12.1989 23.9718 12.3897 23.8311 12.5303C23.6905 12.671 23.4997 12.75 23.3008 12.75H20.3008C20.1019 12.75 19.9111 12.671 19.7705 12.5303C19.6298 12.3897 19.5508 12.1989 19.5508 12C19.5508 11.8011 19.6298 11.6103 19.7705 11.4697C19.9111 11.329 20.1019 11.25 20.3008 11.25H23.3008C23.4997 11.25 23.6905 11.329 23.8311 11.4697C23.9718 11.6103 24.0508 11.8011 24.0508 12ZM4.55078 12C4.55078 12.1989 4.47176 12.3897 4.33111 12.5303C4.19046 12.671 3.99969 12.75 3.80078 12.75H0.800781C0.601869 12.75 0.411103 12.671 0.270451 12.5303C0.129799 12.3897 0.0507813 12.1989 0.0507812 12C0.0507813 11.8011 0.129799 11.6103 0.270451 11.4697C0.411103 11.329 0.601869 11.25 0.800781 11.25H3.80078C3.99969 11.25 4.19046 11.329 4.33111 11.4697C4.47176 11.6103 4.55078 11.8011 4.55078 12ZM20.5363 3.5145C20.6769 3.65515 20.7559 3.84588 20.7559 4.04475C20.7559 4.24362 20.6769 4.43435 20.5363 4.575L18.4153 6.6975C18.3455 6.76713 18.2628 6.82235 18.1717 6.86C18.0806 6.89765 17.983 6.91699 17.8845 6.91692C17.6855 6.91678 17.4947 6.83758 17.354 6.69675C17.2844 6.62702 17.2292 6.54425 17.1915 6.45318C17.1539 6.36211 17.1345 6.26452 17.1346 6.16597C17.1348 5.96695 17.214 5.77613 17.3548 5.6355L19.4758 3.5145C19.6164 3.3739 19.8072 3.29491 20.006 3.29491C20.2049 3.29491 20.3956 3.3739 20.5363 3.5145ZM6.74678 17.304C6.88738 17.4446 6.96637 17.6354 6.96637 17.8342C6.96637 18.0331 6.88738 18.2239 6.74678 18.3645L4.62578 20.4855C4.48433 20.6221 4.29488 20.6977 4.09823 20.696C3.90158 20.6943 3.71347 20.6154 3.57442 20.4764C3.43536 20.3373 3.35648 20.1492 3.35478 19.9526C3.35307 19.7559 3.42866 19.5665 3.56528 19.425L5.68628 17.304C5.82693 17.1634 6.01766 17.0844 6.21653 17.0844C6.4154 17.0844 6.60614 17.1634 6.74678 17.304ZM20.5363 20.4855C20.3956 20.6261 20.2049 20.7051 20.006 20.7051C19.8072 20.7051 19.6164 20.6261 19.4758 20.4855L17.3548 18.3645C17.2182 18.223 17.1426 18.0336 17.1443 17.8369C17.146 17.6403 17.2249 17.4522 17.3639 17.3131C17.503 17.1741 17.6911 17.0952 17.8877 17.0935C18.0844 17.0918 18.2738 17.1674 18.4153 17.304L20.5363 19.425C20.6769 19.5656 20.7559 19.7564 20.7559 19.9552C20.7559 20.1541 20.6769 20.3449 20.5363 20.4855ZM6.74678 6.6975C6.60614 6.8381 6.4154 6.91709 6.21653 6.91709C6.01766 6.91709 5.82693 6.8381 5.68628 6.6975L3.56528 4.575C3.49365 4.50582 3.43651 4.42306 3.39721 4.33155C3.3579 4.24005 3.33721 4.14164 3.33634 4.04205C3.33548 3.94247 3.35445 3.84371 3.39216 3.75153C3.42988 3.65936 3.48557 3.57562 3.55598 3.5052C3.6264 3.43478 3.71014 3.37909 3.80232 3.34138C3.89449 3.30367 3.99325 3.2847 4.09283 3.28556C4.19242 3.28643 4.29083 3.30712 4.38233 3.34642C4.47384 3.38573 4.5566 3.44287 4.62578 3.5145L6.74678 5.6355C6.81663 5.70517 6.87204 5.78793 6.90985 5.87905C6.94766 5.97017 6.96712 6.06785 6.96712 6.1665C6.96712 6.26515 6.94766 6.36283 6.90985 6.45395C6.87204 6.54507 6.81663 6.62783 6.74678 6.6975Z"
                            fill="black"
                            stroke="white"
                            stroke-width="2"
                            mask="url(#path-1-inside-1_977:1934)"
                            />
                        </svg>
                    </label>
                </div>
            </div>
            </div>
        </div>
        </div>
    </header>

    <a
      @click="scrollToTop"
      href="javascript:void(0)"
      class="
        ud-hidden
        ud-items-center
        ud-justify-center
        ud-bg-primary
        ud-text-white
        ud-w-10
        ud-h-10
        ud-rounded-md
        ud-fixed
        ud-bottom-8
        ud-right-8
        ud-left-auto
        ud-z-[999]
        hover:ud-shadow-signUp hover:ud-bg-opacity-80
        ud-transition ud-duration-300 ud-ease-in-out
        back-to-top
        ud-shadow-md
      "
    >
      <span
        class="
          ud-w-3
          ud-h-3
          ud-border-t
          ud-border-l
          ud-border-white
          ud-rotate-45
          ud-mt-[6px]
        "
      ></span>
    </a>
</template>
<script>
import { usePreferences } from '@/stores/preferences'
export default {
  data() {
    return {
      showNavbar: false
    }
  },
  setup() {
    const preferences = usePreferences()
    return { preferences }
  },
  methods: {
    navbarToggler: function(){
        this.showNavbar = !this.showNavbar;
    },
    darkToggler: function(){
        const html = document.querySelector("html");
        this.isDark
            ? html.classList.remove("ud-dark")
            : html.classList.add("ud-dark");
        this.preferences.toggleDark();
    },
    scrollToTop: function(){
        const to = 0, duration = 500;
        const element = document.documentElement;
        const start = element.scrollTop;
        const change = to - start;
        const increment = 20;
        let currentTime = 0;

        const animateScroll = () => {
        currentTime += increment;

        const val = Math.easeInOutQuad(currentTime, start, change, duration);

        element.scrollTop = val;

        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
        };

        animateScroll();
    },
  },
  computed: {
      isDark() { 
          return this.preferences.dark;
      },
      navbarTogglerClass() {
          return this.showNavbar ? "navbarTogglerActive" : "";
      }, 
      navbarCollapseClass() {
          return this.showNavbar ? "" : "ud-hidden";
      },
      getWColor() {
          return "#9c8e1b";
      },
      getVColor() {
          return "#FFFFFF";
      }
  },
  mounted() {
    if (document.documentElement.scrollTop > 0) {
        this.scrollToTop();
    }
    
    window.onscroll = function () {
        const ud_header = document.querySelector(".header");
        const sticky = ud_header.offsetTop;

        if (window.pageYOffset > sticky) {
            ud_header.classList.add("sticky");
        } else {
            ud_header.classList.remove("sticky");
        }

        // show or hide the back-top-top button
        const backToTop = document.querySelector(".back-to-top");
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            backToTop.style.display = "flex";
        } else {
            backToTop.style.display = "none";
        }
    };

    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };
  }
}

</script>

<style scoped>
.header-logo,
.sticky .header-logo {
    padding-top: 0;
    padding-bottom: 0;
}
@media (min-width: 960px) {
    .header-logo svg {
        width: 130px;
    }
}
button#navbarToggler:hover, 
button#navbarToggler:active, 
button#navbarToggler:focus {
    background: inherit;
    background-color: inherit !important;
    box-shadow: inherit !important;
}
</style>