import type { GitHubData } from '@/types/github'
import consola from 'consola'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const url = `https://api.github.com/repos/vernaillen/vernaillen.dev/commits?path=/content/${body.filename}`
    return await $fetch<GitHubData[]>(url, { query: { page: 1, per_page: 1 } })
})