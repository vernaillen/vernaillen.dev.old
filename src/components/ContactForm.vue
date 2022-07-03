<script setup>
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  message: yup.string().required().min(20),
})

const { submitForm } = useForm({
  validationSchema: schema,
})
const { value: name, errorMessage: nameError } = useField('name')
const { value: email, errorMessage: emailError } = useField('email')
const { value: message, errorMessage: messageError } = useField('message')
</script>

<template>
  <div
    class="ud-bg-primary ud-bg-opacity-[3%] dark:ud-bg-dark ud-rounded-md ud-p-6 ud-mb-12 lg:ud-mb-5 md:ud-p-8 lg:ud-p-12"
  >
    <form
      action="https://formbold.com/s/6l2G3"
      method="POST"
      @submit="submitForm"
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
              v-model="name"
              name="name"
              type="text"
              class="ud-w-full ud-border ud-border-transparent dark:ud-bg-black ud-rounded-md ud-shadow-one dark:ud-shadow-signUp ud-py-3 ud-px-6 ud-text-body-color ud-text-base ud-placeholder-body-color ud-outline-none focus-visible:ud-shadow-none focus:ud-border-primary"
            >
            <span v-if="nameError" class="ud-text-primary">
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
              v-model="email"
              name="email"
              type="email"
              class="ud-w-full ud-border ud-border-transparent dark:ud-bg-black ud-rounded-md ud-shadow-one dark:ud-shadow-signUp ud-py-3 ud-px-6 ud-text-body-color ud-text-base ud-placeholder-body-color ud-outline-none focus-visible:ud-shadow-none focus:ud-border-primary"
            >
            <span v-if="emailError" class="ud-text-primary">
              {{ emailError }}
            </span>
          </div>
        </div>
        <div class="ud-w-full ud-px-4">
          <div class="ud-mb-5">
            <label
              for="message"
              class="ud-block ud-text-sm ud-font-medium ud-text-dark dark:ud-text-white ud-mb-3"
            >
              Your Message
            </label>
            <textarea
              v-model="message"
              name="message"
              rows="5"
              class="ud-w-full ud-border ud-border-transparent dark:ud-bg-black ud-rounded-md ud-shadow-one dark:ud-shadow-signUp ud-py-3 ud-px-6 ud-text-body-color ud-text-base ud-placeholder-body-color ud-outline-none focus-visible:ud-shadow-none focus:ud-border-primary ud-resize-none"
            />

            <span v-if="messageError" class="ud-text-primary">
              {{ messageError }}
            </span>
          </div>
        </div>
        <div class="ud-w-full ud-px-4">
          <button
            class="ud-text-base ud-font-medium ud-text-white ud-bg-primary ud-py-3 ud-px-6 hover:ud-bg-opacity-80 hover:ud-shadow-signUp ud-rounded-md ud-transition ud-duration-300 ud-ease-in-out"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
