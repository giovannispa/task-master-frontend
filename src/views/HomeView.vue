<script setup>

import MapaProjetos from "../components/MapaProjetos.vue";
import IconArrowLongLeft from "../components/icons/IconArrowLongLeft.vue";
import IconArrowLongRight from "../components/icons/IconArrowLongRight.vue";
import IconInformationCircle from "../components/icons/IconInformationCircle.vue";
import IconCog from "../components/icons/IconCog.vue";
import Card from "../components/Card.vue";
</script>

<template>
  <div class="container mx-auto">
    <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
      <div class="max-w-xs md:max-w-full bg-white p-2 m-2 rounded-md shadow-md ml-7 md:ml-0">
        <div>
          <h1 class="text-cyan-800 font-bold mt-2">Últimas Tasks</h1>
          <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
        </div>
        <Card title="Distribuir tarefas" user-image="https://i.imgur.com/OZaT7jl.png" text="teste 1" date="22/02/2023"/>
        <Card title="Distribuir tarefas" user-image="https://i.imgur.com/OZaT7jl.png" text="teste 2" date="22/02/2023"/>
        <Card title="Distribuir tarefas" user-image="https://i.imgur.com/OZaT7jl.png" text="teste 3" date="22/02/2023"/>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
        <div class="flex justify-between items-center p-2">
          <span>Mostrando 8 de 30 Tasks</span>
          <ul class="flex justify-center items-center rounded-full">
            <li class="inline-block border border-gray-300 hover:border-gray-400 pb-[0.25rem] px-[0.5rem] rounded-md ml-1 cursor-pointer">
              <a class="text-[0.7rem] leading-5 text-gray-700 hover:text-gray-500">
                <icon-arrow-long-left/>
              </a>
            </li>
            <li class="inline-block border border-gray-300 hover:border-gray-400 pb-[0.25rem] px-[0.5rem] rounded-md ml-1 cursor-pointer">
              <a class="text-[0.7rem] leading-5 text-gray-700 hover:text-gray-500">
                1
              </a>
            </li>
            <li class="inline-block border border-gray-300 hover:border-gray-400 pb-[0.25rem] px-[0.5rem] rounded-md ml-1 cursor-pointer bg-sky-600">
              <a class="text-[0.7rem] leading-5 text-white">
                2
              </a>
            </li>
            <li class="inline-block border border-gray-300 hover:border-gray-400 pb-[0.25rem] px-[0.5rem] rounded-md ml-1 cursor-pointer">
              <a class="text-[0.7rem] leading-5 text-gray-700 hover:text-gray-500">
                3
              </a>
            </li>
            <li class="inline-block border border-gray-300 hover:border-gray-400 pb-[0.25rem] px-[0.5rem] rounded-md ml-1 cursor-pointer">
              <a class="text-[0.7rem] leading-5 text-gray-700 hover:text-gray-500">
                <icon-arrow-long-right/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="max-w-xs md:max-w-full bg-white p-2 m-2 rounded-md shadow-md h-[510px] ml-7 md:ml-0">
        <div>
          <h1 class="text-cyan-800 font-bold mt-2">Status dos projetos</h1>
          <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
        </div>
        <div class="flex flex-col space-y-4 justify-center items-center">
          <mapa-projetos/>
        </div>
        <div class="mt-3 px-1 divide-y divide-dashed">
          <div class="flex justify-between items-center py-2">
          <span class="flex">
            <icon-information-circle class="text-[#0AB39C] mr-1" /> Completo
          </span>
            <span class="text-slate-400">
            125 Projetos
          </span>
          </div>
          <div class="flex justify-between items-center py-2">
          <span class="flex">
            <icon-information-circle class="text-[#405189] mr-1"/> Em progresso
          </span>
            <span class="text-slate-400">
            42 Projetos
          </span>
          </div>
          <div class="flex justify-between items-center py-2">
          <span class="flex">
            <icon-information-circle class="text-[#F7B84B] mr-1"/> Não iniciado
          </span>
            <span class="text-slate-400">
            58 Projetos
          </span>
          </div>
          <div class="flex justify-between items-center py-2">
          <span class="flex">
            <icon-information-circle class="text-[#F06548] mr-1"/> Cancelado
          </span>
            <span class="text-slate-400">
            89 Projetos
          </span>
          </div>
        </div>
      </div>
      <div class="max-w-xs md:max-w-full bg-white p-2 m-2 rounded-md shadow-md h-{420px} ml-7 md:ml-0">
        <div>
          <h1 class="text-cyan-800 font-bold mt-2">Projetos ativos</h1>
          <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
          <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <table class="table-auto min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Nome do projeto</th>
                <th class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Líder do projeto</th>
                <th class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Status</th>
                <th class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Data de vencimento</th>
                <th class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Ações</th>
              </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
              <tr>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">Lorem Ipsum</td>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  <div class="flex">
                    <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full mr-2">
                    <span class="mt-1">
                      Giovanni
                    </span>
                  </div>
                </td>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-[#405189] uppercase last:mr-0 mr-1">23/02/2023</span>
                </td>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 uppercase last:mr-0 mr-1">23/02/2023</span>
                </td>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  <IconCog/>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">Lorem Ipsum</td>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  <div class="flex">
                    <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full mr-2">
                    <span class="mt-1">
                      Giovanni
                    </span>
                  </div>
                </td>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-[#405189] uppercase last:mr-0 mr-1">23/02/2023</span>
                </td>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 uppercase last:mr-0 mr-1">23/02/2023</span>
                </td>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  <IconCog/>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">Lorem Ipsum</td>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  <div class="flex">
                    <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full mr-2">
                    <span class="mt-1">
                      Giovanni
                    </span>
                  </div>
                </td>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-[#405189] uppercase last:mr-0 mr-1">23/02/2023</span>
                </td>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 uppercase last:mr-0 mr-1">23/02/2023</span>
                </td>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  <IconCog/>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">Lorem Ipsum</td>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  <div class="flex">
                    <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full mr-2">
                    <span class="mt-1">
                      Giovanni
                    </span>
                  </div>
                </td>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-[#405189] uppercase last:mr-0 mr-1">23/02/2023</span>
                </td>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 uppercase last:mr-0 mr-1">23/02/2023</span>
                </td>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  <IconCog/>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="flex justify-between items-center p-2">
            <span>Mostrando 8 de 12 Projetos</span>
            <ul class="flex justify-center items-center rounded-full">
              <li class="inline-block border border-gray-300 hover:border-gray-400 pb-[0.25rem] px-[0.5rem] rounded-md ml-1 cursor-pointer">
                <a class="text-[0.7rem] leading-5 text-gray-700 hover:text-gray-500">
                  <icon-arrow-long-left/>
                </a>
              </li>
              <li class="inline-block border border-gray-300 hover:border-gray-400 pb-[0.25rem] px-[0.5rem] rounded-md ml-1 cursor-pointer">
                <a class="text-[0.7rem] leading-5 text-gray-700 hover:text-gray-500">
                  1
                </a>
              </li>
              <li class="inline-block border border-gray-300 hover:border-gray-400 pb-[0.25rem] px-[0.5rem] rounded-md ml-1 cursor-pointer bg-sky-600">
                <a class="text-[0.7rem] leading-5 text-white">
                  2
                </a>
              </li>
              <li class="inline-block border border-gray-300 hover:border-gray-400 pb-[0.25rem] px-[0.5rem] rounded-md ml-1 cursor-pointer">
                <a class="text-[0.7rem] leading-5 text-gray-700 hover:text-gray-500">
                  3
                </a>
              </li>
              <li class="inline-block border border-gray-300 hover:border-gray-400 pb-[0.25rem] px-[0.5rem] rounded-md ml-1 cursor-pointer">
                <a class="text-[0.7rem] leading-5 text-gray-700 hover:text-gray-500">
                  <icon-arrow-long-right/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="max-w-xs md:max-w-full bg-white p-2 m-2 rounded-md shadow-md h-{420px} ml-7 md:ml-0">
        <div>
          <h1 class="text-cyan-800 font-bold mt-2">Membros da equipe</h1>
          <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
        </div>
        <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
          <table class="table-auto min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Membro</th>
              <th class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Projetos trabalhados</th>
              <th class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Tasks realizadas</th>
              <th class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Ações</th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
            <tr>
              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                <div class="flex">
                  <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full mr-2">
                  <span class="mt-1">
                      Giovanni
                    </span>
                </div>
              </td>
              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                10
              </td>
              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                500
              </td>
              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                <IconCog/>
              </td>
            </tr>
            <tr>
              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                <div class="flex">
                  <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full mr-2">
                  <span class="mt-1">
                      Giovanni
                    </span>
                </div>
              </td>
              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                10
              </td>
              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                500
              </td>
              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                <IconCog/>
              </td>
            </tr>
            <tr>
              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                <div class="flex">
                  <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full mr-2">
                  <span class="mt-1">
                      Giovanni
                    </span>
                </div>
              </td>
              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                10
              </td>
              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                500
              </td>
              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                <IconCog/>
              </td>
            </tr>
            <tr>
              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                <div class="flex">
                  <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full mr-2">
                  <span class="mt-1">
                      Giovanni
                    </span>
                </div>
              </td>
              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                10
              </td>
              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                500
              </td>
              <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                <IconCog/>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="flex justify-between items-center p-2">
          <span>Mostrando 8 de 12 membros</span>
          <ul class="flex justify-center items-center rounded-full">
            <li class="inline-block border border-gray-300 hover:border-gray-400 pb-[0.25rem] px-[0.5rem] rounded-md ml-1 cursor-pointer">
              <a class="text-[0.7rem] leading-5 text-gray-700 hover:text-gray-500">
                <icon-arrow-long-left/>
              </a>
            </li>
            <li class="inline-block border border-gray-300 hover:border-gray-400 pb-[0.25rem] px-[0.5rem] rounded-md ml-1 cursor-pointer">
              <a class="text-[0.7rem] leading-5 text-gray-700 hover:text-gray-500">
                1
              </a>
            </li>
            <li class="inline-block border border-gray-300 hover:border-gray-400 pb-[0.25rem] px-[0.5rem] rounded-md ml-1 cursor-pointer bg-sky-600">
              <a class="text-[0.7rem] leading-5 text-white">
                2
              </a>
            </li>
            <li class="inline-block border border-gray-300 hover:border-gray-400 pb-[0.25rem] px-[0.5rem] rounded-md ml-1 cursor-pointer">
              <a class="text-[0.7rem] leading-5 text-gray-700 hover:text-gray-500">
                3
              </a>
            </li>
            <li class="inline-block border border-gray-300 hover:border-gray-400 pb-[0.25rem] px-[0.5rem] rounded-md ml-1 cursor-pointer">
              <a class="text-[0.7rem] leading-5 text-gray-700 hover:text-gray-500">
                <icon-arrow-long-right/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
