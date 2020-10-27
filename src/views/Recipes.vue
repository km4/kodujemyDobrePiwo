<template>
<div>
  <div class="flex flex-col mb-4">
    <div class="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-3 bg-white flex flex-row justify-between">
          <input type="text" v-model="searchTerm" class="border rounded-md flex-1 pl-3 mr-4 py-2" placeholder="Type name to search beer">
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col">
    <div class="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Style
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Batch (l)
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  IBU
                </th>
                <th class="px-6 py-3 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(recipe, key) in filteredResults" :key="key">
                <td class="px-6 py-4 whitespace-no-wrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1543791959-12b3f543282a?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-gray-900">
                        {{recipe.name}}
                      </div>
                      <div class="text-sm leading-5 text-gray-500">
                        {{recipe.alcohol}} %
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <div class="text-sm leading-5 text-gray-900">{{recipe.style}}</div>
                  <div class="text-sm leading-5 text-gray-500">{{recipe.blg}} BLG</div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{recipe.batch}} l
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                  {{recipe.ibu}}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Show recipe</a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>


</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
      const searchTerm = ref('');
      const placeholderData = ref([
        {
          name: 'Sworne Gacie',
          alcohol: 4,
          style: 'IPA',
          blg: 14.5,
          batch: 25,
          ibu: 41,
        },
        {
          name: 'Dzika Jadwiga',
          alcohol: 5,
          style: 'Witbier',
          blg: 14.5,
          batch: 40,
          ibu: 32,
        },
        {
          name: 'Dziki Jack',
          alcohol: 6.5,
          style: 'American IPA',
          blg: 14.5,
          batch: 30,
          ibu: 20,
        }
      ]);

      const filteredResults = computed(function() {
        return placeholderData.value.filter(
          (recipe) => {
            return recipe.name.toLowerCase().includes(searchTerm.value.toLowerCase()) 
          }
          );
      });
    
    return {
      searchTerm,
      filteredResults,
      placeholderData
    }
  }
}
</script>