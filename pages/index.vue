<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <NavBar />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 px-4 md:py-20">
      <div class="max-w-5xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-3">Movie Reviews</h1>
        <p class="text-blue-100 text-lg">Discover thoughtful critiques of cinema's finest</p>
      </div>
    </section>

    <main class="max-w-5xl mx-auto px-4 py-12">
      <!-- Search Bar -->
      <div class="mb-12">
        <div class="relative">
          <svg class="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input 
            v-model="query" 
            placeholder="Search reviews by title or description..." 
            class="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="reviews.length === 0" class="text-center py-20">
        <div class="inline-block">
          <svg class="h-16 w-16 text-blue-400 mb-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          <p class="text-gray-300 text-lg font-medium">Loading reviews...</p>
        </div>
      </div>

      <!-- Reviews Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <NuxtLink 
          v-for="r in filtered" 
          :key="r.slug" 
          :to="`/review/${r.slug}`" 
          class="group bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden cursor-pointer"
        >
          <!-- Image Container -->
          <div class="relative h-52 overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400">
            <img 
              :src="r.coverImage" 
              :alt="r.title" 
              class="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              @error="e => e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'"
            />
            <!-- Rating Badge -->
            <div class="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
              {{ r.rating }}/10
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h2 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition mb-2 line-clamp-2">{{ r.title }}</h2>
            <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">{{ r.summary }}</p>
            
            <!-- Footer -->
            <div class="mt-5 pt-5 border-t border-gray-200 flex items-center justify-between">
              <span class="text-xs font-semibold text-blue-600 uppercase tracking-wider">{{ r.category }}</span>
              <span class="text-blue-600 font-bold text-sm group-hover:translate-x-1 transition">→</span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- No Results -->
      <div v-if="reviews.length > 0 && filtered.length === 0" class="text-center py-20">
        <svg class="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p class="text-gray-400 text-lg font-medium">No reviews match "{{ query }}". Try a different search.</p>
      </div>

      <!-- Results Count -->
      <div v-if="reviews.length > 0" class="mt-10 text-center text-gray-400 text-sm">
        Showing {{ filtered.length }} of {{ reviews.length }} reviews
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import NavBar from '~/components/NavBar.vue'

const query = ref('')
const reviews = ref([])
const config = useRuntimeConfig()

async function load() {
  try {
    // Try to fetch from Strapi API
    const res = await $fetch(`${config.public.strapiBase}/api/reviews?populate=*`)
    
    if (res && res.data && Array.isArray(res.data)) {
      // Strapi v4 format: { data: [ { id, attributes } ] }
      reviews.value = res.data.map((item) => {
        const attrs = item.attributes || item
        return {
          id: item.id,
          slug: attrs.slug,
          title: attrs.title,
          summary: attrs.summary,
          body: attrs.body,
          rating: attrs.rating,
          coverImage: attrs.coverImage,
          category: attrs.category,
          author: attrs.author,
          publishedAt: attrs.publishedAt
        }
      })
    } else if (Array.isArray(res)) {
      reviews.value = res
    } else {
      throw new Error('Invalid API response format')
    }
  } catch (err) {
    console.warn('[Frontend] Strapi API unavailable, using fallback data:', err.message)
    // Fallback to static sample data
    try {
      const fallback = await fetch('/sample-reviews.json').then((r) => r.json())
      reviews.value = fallback
    } catch (e) {
      console.error('[Frontend] Failed to load fallback data:', e)
    }
  }
}

onMounted(load)

const filtered = computed(() => {
  if (!query.value) return reviews.value
  const q = query.value.toLowerCase()
  return reviews.value.filter((r) => {
    const titleMatch = (r.title || '').toLowerCase().includes(q)
    const summaryMatch = (r.summary || '').toLowerCase().includes(q)
    return titleMatch || summaryMatch
  })
})
</script>
