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
    class="bg-primary bg-opacity-[3%] dark:bg-dark rounded-md p-6 mb-12 lg:mb-5 md:p-8 lg:p-12"
  >
    <form
      action="https://formbold.com/s/6l2G3"
      method="POST"
      @submit="submitForm"
    >
      <div class="flex flex-wrap mx-[-16px]">
        <div class="w-full md:w-1/2 px-4">
          <div class="mb-8">
            <label
              for="name"
              class="block text-sm font-medium text-dark dark:text-white mb-3"
            >
              Your name
            </label>
            <input
              v-model="name"
              name="name"
              type="text"
              class="w-full border border-transparent dark:bg-black rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary"
            >
            <span v-if="nameError" class="text-primary">
              {{ nameError }}
            </span>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-4">
          <div class="mb-8">
            <label
              for="email"
              class="block text-sm font-medium text-dark dark:text-white mb-3"
            >
              Your Email
            </label>
            <input
              v-model="email"
              name="email"
              type="email"
              class="w-full border border-transparent dark:bg-black rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary"
            >
            <span v-if="emailError" class="text-primary">
              {{ emailError }}
            </span>
          </div>
        </div>
        <div class="w-full px-4">
          <div class="mb-5">
            <label
              for="message"
              class="block text-sm font-medium text-dark dark:text-white mb-3"
            >
              Your Message
            </label>
            <textarea
              v-model="message"
              name="message"
              rows="5"
              class="w-full border border-transparent dark:bg-black rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary resize-none"
            />

            <span v-if="messageError" class="text-primary">
              {{ messageError }}
            </span>
          </div>
        </div>
        <div class="w-full px-4">
          <button
            class="text-base font-medium text-white bg-primary py-3 px-6 hover:bg-opacity-80 hover:shadow-signUp rounded-md transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
