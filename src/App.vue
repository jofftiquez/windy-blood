<template>
  <div>
    <header>
      <ul>
        <li>
          <router-link :to="{ name: 'page-1' }">
            Page 1
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'page-2' }">
            Page 2
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'page-3' }">
            Page 3
          </router-link>
        </li>
      </ul>
    </header>

    <RouterView />
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>
