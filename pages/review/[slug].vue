<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <NavBar />
    
    <main class="max-w-4xl mx-auto px-4 py-8">
      <!-- Back Link -->
      <NuxtLink to="/" class="inline-flex items-center text-blue-400 hover:text-blue-300 transition mb-8 font-medium">
        <span class="mr-2">←</span> Back to reviews
      </NuxtLink>

      <!-- Loading State -->
      <div v-if="!review" class="text-center py-20">
        <svg class="h-16 w-16 text-blue-400 mx-auto mb-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
        <p class="text-gray-300 text-lg">Loading review...</p>
      </div>

      <!-- Article -->
      <article v-else class="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <!-- Hero Image -->
        <div class="relative h-96 overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400">
          <img 
            :src="review.coverImage" 
            :alt="review.title" 
            class="w-full h-full object-cover"
            @error="e => e.target.src = 'https://via.placeholder.com/800x400?text=No+Image'"
          />
          <!-- Rating Overlay Badge -->
          <div class="absolute bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg">
            <span class="text-4xl font-bold">{{ review.rating }}</span><span class="text-2xl">/10</span>
          </div>
        </div>

        <!-- Content -->
        <div class="p-8 md:p-12">
          <!-- Header -->
          <div class="mb-8">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{{ review.title }}</h1>
            
            <!-- Metadata -->
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b-2 border-gray-200">
              <div class="flex items-center gap-6">
                <div>
                  <p class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Author</p>
                  <p class="text-lg font-bold text-gray-900">{{ review.author }}</p>
                </div>
                <div>
                  <p class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Published</p>
                  <p class="text-lg font-bold text-gray-900">{{ formattedDate }}</p>
                </div>
              </div>
              <div>
                <span class="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold text-sm">{{ review.category }}</span>
              </div>
            </div>
          </div>

          <!-- Summary -->
          <div class="mb-8">
            <p class="text-lg text-gray-700 leading-relaxed font-medium italic">{{ review.summary }}</p>
          </div>

          <!-- Body -->
          <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
            <p>{{ review.body }}</p>
          </div>

          <!-- Rating Bar -->
          <div class="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8">
            <p class="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">Overall Rating</p>
            <div class="flex items-center gap-4">
              <div class="flex-1 bg-gray-300 rounded-full h-3 overflow-hidden">
                <div 
                  class="bg-gradient-to-r from-blue-500 to-indigo-600 h-full transition-all duration-500"
                  :style="{ width: `${(review.rating / 10) * 100}%` }"
                ></div>
              </div>
              <span class="text-3xl font-bold text-blue-600">{{ review.rating }}/10</span>
            </div>
          </div>
        </div>
      </article>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import NavBar from '~/components/NavBar.vue'
const route = useRoute()
const config = useRuntimeConfig()
const slug = route.params.slug
const review = ref(null)

async function load() {
  try {
    const res = await $fetch(`${config.public.strapiBase}/api/reviews?filters[slug][$eq]=${slug}&populate=*`)
    if (res && res.data && res.data.length) {
      review.value = res.data[0].attributes
    } else {
      const fallback = await fetch('/sample-reviews.json').then((r) => r.json())
      review.value = fallback.find((r) => r.slug === slug) || null
    }
  } catch (e) {
    const fallback = await fetch('/sample-reviews.json').then((r) => r.json())
    review.value = fallback.find((r) => r.slug === slug) || null
  }
}

onMounted(load)

const formattedDate = computed(() => {
  if (!review.value || !review.value.publishedAt) return ''
  return new Date(review.value.publishedAt).toLocaleDateString()
})
</script>
