<template>
  <div
    class="ud-bg-primary ud-bg-opacity-[3%] dark:ud-bg-dark ud-rounded-md ud-p-11 ud-mb-12 lg:ud-mb-5 sm:ud-p-[55px] lg:ud-p-11 xl:ud-p-[55px] wow fadeInUp"
  >
    <form
      @submit="submitForm"
      action="https://formbold.com/s/6l2G3"
      method="POST"
    >
      <div class="ud-flex ud-flex-wrap ud-mx-[-16px]">
        <div class="ud-w-full md:ud-w-1/2 ud-px-4">
          <div class="ud-mb-8">
            <label
              for="name"
              class="ud-block ud-text-sm ud-font-medium ud-text-dark dark:ud-text-white ud-mb-3"
            >
              Your name
            </label>
            <input
              name="name"
              type="text"
              v-model="name"
              class="ud-w-full ud-border ud-border-transparent dark:ud-bg-black ud-rounded-md ud-shadow-one dark:ud-shadow-signUp ud-py-3 ud-px-6 ud-text-body-color ud-text-base ud-placeholder-body-color ud-outline-none focus-visible:ud-shadow-none focus:ud-border-primary"
            />
            <span v-if="nameError" class="ud-text-red-500">
              {{ nameError }}
            </span>
          </div>
        </div>
        <div class="ud-w-full md:ud-w-1/2 ud-px-4">
          <div class="ud-mb-8">
            <label
              for="email"
              class="ud-block ud-text-sm ud-font-medium ud-text-dark dark:ud-text-white ud-mb-3"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              v-model="email"
              class="ud-w-full ud-border ud-border-transparent dark:ud-bg-black ud-rounded-md ud-shadow-one dark:ud-shadow-signUp ud-py-3 ud-px-6 ud-text-body-color ud-text-base ud-placeholder-body-color ud-outline-none focus-visible:ud-shadow-none focus:ud-border-primary"
            />
            <span v-if="emailError" class="ud-text-red-500">
              {{ emailError }}
            </span>
          </div>
        </div>
        <div class="ud-w-full ud-px-4">
          <div class="ud-mb-8">
            <label
              for="message"
              class="ud-block ud-text-sm ud-font-medium ud-text-dark dark:ud-text-white ud-mb-3"
            >
              Your Message
            </label>
            <textarea
              name="message"
              v-model="message"
              rows="5"
              class="ud-w-full ud-border ud-border-transparent dark:ud-bg-black ud-rounded-md ud-shadow-one dark:ud-shadow-signUp ud-py-3 ud-px-6 ud-text-body-color ud-text-base ud-placeholder-body-color ud-outline-none focus-visible:ud-shadow-none focus:ud-border-primary ud-resize-none"
            ></textarea>

            <span v-if="messageError" class="ud-text-red-500">
              {{ messageError }}
            </span>
          </div>
        </div>
        <div class="ud-w-full ud-px-4">
          <button
            class="ud-text-base ud-font-medium ud-text-white ud-bg-primary ud-py-4 ud-px-9 hover:ud-bg-opacity-80 hover:ud-shadow-signUp ud-rounded-md ud-transition ud-duration-300 ud-ease-in-out"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  message: yup.string().required().min(20),
});

const { submitForm } = useForm({
  validationSchema: schema,
});
const { value: name, errorMessage: nameError } = useField("name");
const { value: email, errorMessage: emailError } = useField("email");
const { value: message, errorMessage: messageError } = useField("message");
</script>
