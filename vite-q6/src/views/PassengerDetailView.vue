<script setup lang="ts">
  import { ref, onMounted, defineProps, toRefs } from 'vue'
  import {type Passenger} from '@/types'
  import PassengerService from '@/services/PassengerService'
  const props = defineProps<{
    passengers: Passenger
    id: string
  }>()
  const { passengers } = toRefs(props)
  onMounted(() =>{
    PassengerService.getPassenger (props.id)
        .then ((response) => {
            passengers.value = response.data.data
        })
        .catch ((error) => {
            console.error ('There was an error!', error)
        })
  })
</script>

<template>
  <div v-if="passengers">
    <h1>{{ passengers.name }}</h1>
    <p>id: {{ passengers._id }}</p>
  </div>
</template>