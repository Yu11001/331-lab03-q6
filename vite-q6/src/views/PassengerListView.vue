<script setup lang="ts">
  import PassengerCard from '@/components/PassengerCard.vue'
  import PassengerService from '@/services/PassengerService';
  import {type Passenger} from '@/types'
  import { ref, onMounted } from 'vue'
  const passengers = ref<Passenger[] | null >(null)
  onMounted(() =>{
    PassengerService.getPassengers()
    .then((response) =>{
      passengers.value = response.data.data
    })
    .catch((error) =>{
      console.error('There was an error!', error)
    })
  })
</script>

<template>
  <h1>Passengers list</h1>
  <div class="passengers">
    <PassengerCard v-for="passenger in passengers" :key="passenger._id" :passenger="passenger" />
  </div>
</template>

<style scoped>
.passengers {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>