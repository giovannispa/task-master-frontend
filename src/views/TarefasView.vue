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
            <Card title="Distribuir tarefas" user-image="https://i.imgur.com/OZaT7jl.png" :text="card.text" date="22/02/2023"/>
          </Draggable>
        </Container>
      </div>
      <div class="bg-white w-96 h-[700px] rounded-xl shadow-slate-300 mt-2 ml-2 p-1">
        <h2 class="mb-3.5 p-3">Em desenvolvilmento</h2>
        <Container group-name="board" @drag-start="handleDragStart('dev', $event)" @drop="handleDrop('dev', $event)" :get-child-payload="getChildPayload">
          <Draggable v-for="card in cards.dev" :key="card.id">
            <Card title="Distribuir tarefas" user-image="https://i.imgur.com/OZaT7jl.png" :text="card.text" date="22/02/2023"/>
          </Draggable>
        </Container>
      </div>
      <div class="bg-white w-96 h-[700px] rounded-xl shadow-slate-300 mt-2 ml-2 p-1">
        <h2 class="mb-3.5 p-3">Testes</h2>
        <Container group-name="board" @drag-start="handleDragStart('test', $event)" @drop="handleDrop('test', $event)" :get-child-payload="getChildPayload">
          <Draggable v-for="card in cards.test" :key="card.id">
            <Card title="Distribuir tarefas" user-image="https://i.imgur.com/OZaT7jl.png" :text="card.text" date="22/02/2023"/>
          </Draggable>
        </Container>
      </div>
      <div class="bg-white w-96 h-[700px] rounded-xl shadow-slate-300 mt-2 ml-2 p-1">
        <h2 class="mb-3.5 p-3">Concluido</h2>
        <Container group-name="board" @drag-start="handleDragStart('conclusion', $event)" @drop="handleDrop('conclusion', $event)" :get-child-payload="getChildPayload">
          <Draggable v-for="card in cards.conclusion" :key="card.id">
            <Card title="Distribuir tarefas" user-image="https://i.imgur.com/OZaT7jl.png" :text="card.text" date="22/02/2023"/>
          </Draggable>
        </Container>
      </div>
    </div>
a
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { Container, Draggable } from "vue3-smooth-dnd";
import { initialCards } from "../initialCards";
import Card from "../components/Card.vue";

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