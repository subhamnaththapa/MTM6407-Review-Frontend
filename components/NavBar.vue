<template>
  <nav class="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 shadow-lg sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <div class="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-2 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
          </svg>
        </div>
        <span class="text-2xl font-bold text-white group-hover:text-blue-400 transition">ReviewHub</span>
      </NuxtLink>

      <!-- Links -->
      <div class="flex items-center gap-8">
        <NuxtLink to="/" class="text-gray-300 hover:text-white font-medium transition">Reviews</NuxtLink>
        <a href="#" class="text-gray-300 hover:text-white font-medium transition">About</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>
