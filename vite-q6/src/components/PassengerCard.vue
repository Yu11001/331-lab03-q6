<script setup lang="ts">
import {type Passenger} from '@/types'
import { RouterLink } from 'vue-router';
defineProps<{
  passenger: Passenger
}>()
</script>

<template>
  <RouterLink class="passenger-link" :to="{ name: 'passenger-detail-view ', params: { id:passenger._id }}">
    <div class="passenger-card">
      <h2>{{ passenger.name }}</h2>
    </div>
  </RouterLink>
</template>

<style scoped>
.passenger-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.passenger-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.passenger-link {
  text-decoration: none;
  color: #2c3e50;
}
</style>