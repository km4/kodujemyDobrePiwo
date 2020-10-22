<template>
  <div class="flex w-full max-w-xs p-4 bg-white">
    <ul class="flex flex-col w-full">
      <li class="my-10 text-center">
        <a href="/">
          <img
            src="../assets/beer-bottle.svg"
            alt="kodujemyDobrePiwo logo"
            width="100"
            height="100"
            class="mx-auto"
          />
        </a>
        <h1>kodujemyDobrePiwo</h1>
      </li>
      <li class="my-px">
        <router-link to="/" href="#" v-slot="{ isActive }">
          <div
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
            :class="{ 'bg-gray-100': isActive }"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-400"
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
            </span>
            <span class="ml-3">Dashboard</span>
          </div>
        </router-link>
      </li>
      <li class="my-px">
        <router-link to="/recipes" v-slot="{ isActive }">
          <div
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
            :class="{ 'bg-gray-100': isActive }"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-400"
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </span>
            <span class="ml-3">Recipes</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
