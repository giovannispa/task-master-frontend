<template>
  <div class="d-block h-56">
    <canvas id="myChart"></canvas>
  </div>
  <div class="d-block">
    <span class="font-bold">
      258 Projetos
    </span>
  </div>
</template>

<script setup>
import Chart from 'chart.js/auto';
import {onMounted} from "vue";

onMounted(() => {
  const ctx = document.getElementById('myChart');

  const data = {
    datasets: [{
      label: 'My First Dataset',
      data: [60, 5, 10, 20],
      backgroundColor: [
        'rgb(10, 179, 156)',
        'rgb(64, 81, 137)',
        'rgb(247, 184, 75)',
        'rgb(240, 101, 72)'
      ],
      hoverOffset: 4
    }],
  };

  new Chart(ctx, {
    type: 'doughnut',
    data: data,
  });
});

</script>

<style scoped>

</style>