<template>
  <div class="container mx-auto">

    <div class="mt-2">
      <label for="projects" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Projetos:</label>
      <select id="projects" name="projects" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Selecione uma opção</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>

    <div class="flex">
      <div class="bg-white w-96 h-[700px] rounded-xl shadow-slate-300 mt-2 p-1">
        <h2 class="mb-3.5 p-3">Backlog</h2>
        <Container group-name="board" @drag-start="handleDragStart('backlog', $event)" @drop="handleDrop('backlog', $event)" :get-child-payload="getChildPayload">
          <Draggable v-for="card in cards.backlog" :key="card.id">
            <div class="p-2 my-2 rounded-md border border-gray-200 border-l-4 border-l-indigo-500 cursor-pointer hover:shadow-md">
              <div class="flex justify-between p-1">
                <span class="text-cyan-600 font-bold">Distribuir tarefas</span>
                <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full mr-2">
              </div>
              <div class="d-block p-1">
                {{ card.text }}
              </div>
              <div class="flex justify-between p-1">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
            </svg>
          </span>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase last:mr-0 mr-1">
            22/02/2023
          </span>
              </div>
            </div>
          </Draggable>
        </Container>
      </div>
      <div class="bg-white w-96 h-[700px] rounded-xl shadow-slate-300 mt-2 ml-2 p-1">
        <h2 class="mb-3.5 p-3">Em desenvolvilmento</h2>
        <Container group-name="board" @drag-start="handleDragStart('dev', $event)" @drop="handleDrop('dev', $event)" :get-child-payload="getChildPayload">
          <Draggable v-for="card in cards.dev" :key="card.id">
            <div class="p-2 my-2 rounded-md border border-gray-200 border-l-4 border-l-indigo-500 cursor-pointer hover:shadow-md">
              <div class="flex justify-between p-1">
                <span class="text-cyan-600 font-bold">Distribuir tarefas</span>
                <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full mr-2">
              </div>
              <div class="d-block p-1">
                {{ card.text }}
              </div>
              <div class="flex justify-between p-1">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
            </svg>
          </span>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase last:mr-0 mr-1">
            22/02/2023
          </span>
              </div>
            </div>
          </Draggable>
        </Container>
      </div>
      <div class="bg-white w-96 h-[700px] rounded-xl shadow-slate-300 mt-2 ml-2 p-1">
        <h2 class="mb-3.5 p-3">Testes</h2>
        <Container group-name="board" @drag-start="handleDragStart('test', $event)" @drop="handleDrop('test', $event)" :get-child-payload="getChildPayload">
          <Draggable v-for="card in cards.test" :key="card.id">
            <div class="p-2 my-2 rounded-md border border-gray-200 border-l-4 border-l-indigo-500 cursor-pointer hover:shadow-md">
              <div class="flex justify-between p-1">
                <span class="text-cyan-600 font-bold">Distribuir tarefas</span>
                <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full mr-2">
              </div>
              <div class="d-block p-1">
                {{ card.text }}
              </div>
              <div class="flex justify-between p-1">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
            </svg>
          </span>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase last:mr-0 mr-1">
            22/02/2023
          </span>
              </div>
            </div>
          </Draggable>
        </Container>
      </div>
      <div class="bg-white w-96 h-[700px] rounded-xl shadow-slate-300 mt-2 ml-2 p-1">
        <h2 class="mb-3.5 p-3">Concluido</h2>
        <Container group-name="board" @drag-start="handleDragStart('conclusion', $event)" @drop="handleDrop('conclusion', $event)" :get-child-payload="getChildPayload">
          <Draggable v-for="card in cards.conclusion" :key="card.id">
            <div class="p-2 my-2 rounded-md border border-gray-200 border-l-4 border-l-indigo-500 cursor-pointer hover:shadow-md">
              <div class="flex justify-between p-1">
                <span class="text-cyan-600 font-bold">Distribuir tarefas</span>
                <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full mr-2">
              </div>
              <div class="d-block p-1">
                {{ card.text }}
              </div>
              <div class="flex justify-between p-1">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
            </svg>
          </span>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase last:mr-0 mr-1">
            22/02/2023
          </span>
              </div>
            </div>
          </Draggable>
        </Container>
      </div>
    </div>

  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { Container, Draggable } from "vue3-smooth-dnd";
import { initialCards } from "../initialCards";

const cards = reactive({
  backlog: initialCards.backlog,
  dev: initialCards.dev,
  test: initialCards.test,
  conclusion: initialCards.conclusion
});

let draggingCard = {
  lane: "",
  index: -1,
  cardData: {}
};

const handleDragStart = (lane, dragResult) => {
  const { payload, isSource } = dragResult
  if(isSource) {
    draggingCard = {
      lane,
      index: payload.index,
      cardData: {
        ...cards[lane][payload.index]
      },
    };
  }
};

const handleDrop = (lane, dropResult) => {
  const { removedIndex, addedIndex } = dropResult;

  if(lane === draggingCard.lane && removedIndex === addedIndex) {
    return;
  }

  if(removedIndex !== null) {
    cards[lane].splice(removedIndex,1);
  }

  if(addedIndex !== null) {
    cards[lane].splice(addedIndex, 0, draggingCard.cardData);
  }

};

const getChildPayload = (index) => {
  return {
    index,
  }
};

</script>

<style scoped>

</style>