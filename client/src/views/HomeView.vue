<template>
  <div class="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
    <header class="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40"><a class="lg:hidden"
        href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
          <path d="M12 3v6"></path>
        </svg><span class="sr-only">Home</span></a>
      <div class="w-full flex-1">
        <form>
          <div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg><input
              class="flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
              placeholder="Search" type="search"></div>
        </form>
      </div><button
        class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
        type="button" id="radix-:r22:" aria-haspopup="menu" aria-expanded="false" data-state="closed"><img
          src="./placeholder.svg" width="32" height="32" class="rounded-full" alt="Avatar"
          style="aspect-ratio: 32 / 32; object-fit: cover;"><span class="sr-only">Toggle user menu</span></button>
    </header>
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div class="flex items-center gap-4"><button
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg><span class="sr-only">Back</span></button>
        <h1 class="font-semibold text-lg md:text-xl">Protein Calculator</h1>
      </div>
      <div class="grid gap-6">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6">
            <p class="text-sm text-muted-foreground">Calculate your recommended daily protein intake</p>
          </div>
          <div class="p-6">
            <form class="grid gap-4">
              <div class="grid gap-2"><label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="weight">Weight</label><input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="weight" placeholder="Enter your weight" required="" type="number"></div>
              <div class="grid gap-2"><label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="activity">Activity Level</label><button type="button" role="combobox" aria-controls="radix-:r24:"
                  aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder=""
                  class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"><span
                    style="pointer-events: none;">Select</span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 opacity-50" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg></button><select aria-hidden="true" tabindex="-1"
                  style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">
                  <option value=""></option>
                </select></div>
              <div class="grid gap-2"><label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="diet">Dietary Preferences</label><button type="button" role="combobox" aria-controls="radix-:r25:"
                  aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder=""
                  class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"><span
                    style="pointer-events: none;">Select</span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 opacity-50" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg></button><select aria-hidden="true" tabindex="-1"
                  style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">
                  <option value=""></option>
                </select></div><button
                class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                type="submit">Calculate</button>
            </form>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6">
            <p class="text-sm text-muted-foreground">Your recommended daily protein intake is:</p>
            <h3 class="text-2xl font-semibold leading-none tracking-tight">100g</h3>
          </div>
          <div class="p-6">
            <p class="text-sm">
              Based on your information, your recommended daily protein intake is 100g.
            </p>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6">
            <p class="text-sm text-muted-foreground">Protein Sources</p>
          </div>
          <div class="p-6">
            <div class="grid gap-4">
              <div class="grid gap-2">
                <h2 class="font-semibold">Meat</h2>
                <p class="text-sm">
                  Meat is a rich source of protein. It contains all the essential amino acids your body needs.
                </p>
              </div>
              <div class="grid gap-2">
                <h2 class="font-semibold">Dairy</h2>
                <p class="text-sm">
                  Dairy is a good source of protein. It contains all the essential amino acids your body needs.
                </p>
              </div>
              <div class="grid gap-2">
                <h2 class="font-semibold">Eggs</h2>
                <p class="text-sm">
                  Eggs are a good source of protein. They contain all the essential amino acids your body needs.
                </p>
              </div>
              <div class="grid gap-2">
                <h2 class="font-semibold">Beans</h2>
                <p class="text-sm">
                  Beans are a good source of protein. They contain all the essential amino acids your body needs.
                </p>
              </div>
              <div class="grid gap-2">
                <h2 class="font-semibold">Nuts</h2>
                <p class="text-sm">
                  Nuts are a good source of protein. They contain all the essential amino acids your body needs.
                </p>
              </div>
              <div class="grid gap-2">
                <h2 class="font-semibold">Seeds</h2>
                <p class="text-sm">
                  Seeds are a good source of protein. They contain all the essential amino acids your body needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm grid gap-4" data-v0-t="card">
    <div class="flex flex-col space-y-1.5 p-6">
      <h3 class="text-2xl font-semibold leading-none tracking-tight">Calculate Your Protein Intake</h3>
      <p class="text-sm text-muted-foreground">
        Enter your personal information to calculate your recommended daily protein intake.
      </p>
    </div>
    <div class="p-6">
      <form class="grid gap-4">
        <div class="grid gap-2"><label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="age">Age</label><input
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="age" placeholder="Enter your age" type="number"></div>
        <div class="grid gap-2"><label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="gender">Gender</label><button type="button" role="combobox" aria-controls="radix-:r5m:"
            aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder=""
            class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"><span
              style="pointer-events: none;">Select your gender</span><svg xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="h-4 w-4 opacity-50" aria-hidden="true">
              <path d="m6 9 6 6 6-6"></path>
            </svg></button><select aria-hidden="true" tabindex="-1"
            style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select></div>
        <div class="grid gap-2"><label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="weight">Weight</label><input
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="weight" placeholder="Enter your weight in kg" type="number"></div>
        <div class="grid gap-2"><label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="activity">Activity Level</label><button type="button" role="combobox" aria-controls="radix-:r5n:"
            aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder=""
            class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"><span
              style="pointer-events: none;">Select your activity level</span><svg xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 opacity-50" aria-hidden="true">
              <path d="m6 9 6 6 6-6"></path>
            </svg></button><select aria-hidden="true" tabindex="-1"
            style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">
            <option value=""></option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select></div><button
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">Calculate</button>
      </form>
    </div>
  </div>
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm grid gap-4" data-v0-t="card">
    <div class="flex flex-col space-y-1.5 p-6">
      <h3 class="text-2xl font-semibold leading-none tracking-tight">Search Food Database</h3>
      <p class="text-sm text-muted-foreground">
        Search for different types of food and their protein content.
      </p>
    </div>
    <div class="p-6">
      <form class="grid gap-4">
        <div class="grid gap-2"><label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="search">Search</label><input
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="search" placeholder="Search for food" type="text"></div><button
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">Search</button>
      </form>
    </div>
  </div>
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm grid gap-4" data-v0-t="card">
    <div class="flex flex-col space-y-1.5 p-6">
      <h3 class="text-2xl font-semibold leading-none tracking-tight">Track Your Progress</h3>
      <p class="text-sm text-muted-foreground">
        Enter your daily protein intake and track your progress over time.
      </p>
    </div>
    <div class="p-6">
      <div class="w-full aspect-[4/3]">
        <div style="width: 100%; height: 100%;">
          <div style="position: relative;"><svg xmlns="http://www.w3.org/2000/svg" width="1187" height="890.25"
              role="application">
              <rect width="1187" height="890.25" fill="transparent"></rect>
              <g transform="translate(40,10)">
                <g>
                  <line opacity="1" x1="0" x2="0" y1="0" y2="840.25" stroke="#f3f4f6" stroke-width="1"></line>
                  <line opacity="1" x1="227.4" x2="227.4" y1="0" y2="840.25" stroke="#f3f4f6" stroke-width="1"></line>
                  <line opacity="1" x1="454.8" x2="454.8" y1="0" y2="840.25" stroke="#f3f4f6" stroke-width="1"></line>
                  <line opacity="1" x1="682.2" x2="682.2" y1="0" y2="840.25" stroke="#f3f4f6" stroke-width="1"></line>
                  <line opacity="1" x1="909.6" x2="909.6" y1="0" y2="840.25" stroke="#f3f4f6" stroke-width="1"></line>
                  <line opacity="1" x1="1137" x2="1137" y1="0" y2="840.25" stroke="#f3f4f6" stroke-width="1"></line>
                </g>
                <g>
                  <line opacity="1" x1="0" x2="1137" y1="840" y2="840" stroke="#f3f4f6" stroke-width="1"></line>
                  <line opacity="1" x1="0" x2="1137" y1="634" y2="634" stroke="#f3f4f6" stroke-width="1"></line>
                  <line opacity="1" x1="0" x2="1137" y1="428" y2="428" stroke="#f3f4f6" stroke-width="1"></line>
                  <line opacity="1" x1="0" x2="1137" y1="222" y2="222" stroke="#f3f4f6" stroke-width="1"></line>
                  <line opacity="1" x1="0" x2="1137" y1="16" y2="16" stroke="#f3f4f6" stroke-width="1"></line>
                </g>
                <g transform="translate(0,840.25)">
                  <g transform="translate(0,0)" style="opacity: 1;">
                    <line x1="0" x2="0" y1="0" y2="0" style="stroke: rgb(119, 119, 119); stroke-width: 1;"></line><text
                      dominant-baseline="text-before-edge" text-anchor="middle" transform="translate(0,16) rotate(0)"
                      style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51); outline-width: 0px; outline-color: transparent;">Jan</text>
                  </g>
                  <g transform="translate(227.4,0)" style="opacity: 1;">
                    <line x1="0" x2="0" y1="0" y2="0" style="stroke: rgb(119, 119, 119); stroke-width: 1;"></line><text
                      dominant-baseline="text-before-edge" text-anchor="middle" transform="translate(0,16) rotate(0)"
                      style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51); outline-width: 0px; outline-color: transparent;">Feb</text>
                  </g>
                  <g transform="translate(454.8,0)" style="opacity: 1;">
                    <line x1="0" x2="0" y1="0" y2="0" style="stroke: rgb(119, 119, 119); stroke-width: 1;"></line><text
                      dominant-baseline="text-before-edge" text-anchor="middle" transform="translate(0,16) rotate(0)"
                      style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51); outline-width: 0px; outline-color: transparent;">Mar</text>
                </g>
                <g transform="translate(682.2,0)" style="opacity: 1;">
                  <line x1="0" x2="0" y1="0" y2="0" style="stroke: rgb(119, 119, 119); stroke-width: 1;"></line><text
                    dominant-baseline="text-before-edge" text-anchor="middle" transform="translate(0,16) rotate(0)"
                    style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51); outline-width: 0px; outline-color: transparent;">Apr</text>
                </g>
                <g transform="translate(909.6,0)" style="opacity: 1;">
                  <line x1="0" x2="0" y1="0" y2="0" style="stroke: rgb(119, 119, 119); stroke-width: 1;"></line><text
                    dominant-baseline="text-before-edge" text-anchor="middle" transform="translate(0,16) rotate(0)"
                    style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51); outline-width: 0px; outline-color: transparent;">May</text>
                </g>
                <g transform="translate(1137,0)" style="opacity: 1;">
                  <line x1="0" x2="0" y1="0" y2="0" style="stroke: rgb(119, 119, 119); stroke-width: 1;"></line><text
                    dominant-baseline="text-before-edge" text-anchor="middle" transform="translate(0,16) rotate(0)"
                    style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51); outline-width: 0px; outline-color: transparent;">Jun</text>
                </g>
                <line x1="0" x2="1137" y1="0" y2="0" style="stroke: transparent; stroke-width: 1;"></line>
              </g>
              <g transform="translate(0,0)">
                <g transform="translate(0,840)" style="opacity: 1;">
                  <line x1="0" x2="0" y1="0" y2="0" style="stroke: rgb(119, 119, 119); stroke-width: 1;"></line><text
                    dominant-baseline="central" text-anchor="end" transform="translate(-16,0) rotate(0)"
                    style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51); outline-width: 0px; outline-color: transparent;">0</text>
                </g>
                <g transform="translate(0,634)" style="opacity: 1;">
                  <line x1="0" x2="0" y1="0" y2="0" style="stroke: rgb(119, 119, 119); stroke-width: 1;"></line><text
                    dominant-baseline="central" text-anchor="end" transform="translate(-16,0) rotate(0)"
                    style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51); outline-width: 0px; outline-color: transparent;">50</text>
                </g>
                <g transform="translate(0,428)" style="opacity: 1;">
                  <line x1="0" x2="0" y1="0" y2="0" style="stroke: rgb(119, 119, 119); stroke-width: 1;"></line><text
                    dominant-baseline="central" text-anchor="end" transform="translate(-16,0) rotate(0)"
                    style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51); outline-width: 0px; outline-color: transparent;">100</text>
                </g>
                <g transform="translate(0,222)" style="opacity: 1;">
                  <line x1="0" x2="0" y1="0" y2="0" style="stroke: rgb(119, 119, 119); stroke-width: 1;"></line><text
                    dominant-baseline="central" text-anchor="end" transform="translate(-16,0) rotate(0)"
                    style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51); outline-width: 0px; outline-color: transparent;">150</text>
                </g>
                <g transform="translate(0,16)" style="opacity: 1;">
                  <line x1="0" x2="0" y1="0" y2="0" style="stroke: rgb(119, 119, 119); stroke-width: 1;"></line><text
                    dominant-baseline="central" text-anchor="end" transform="translate(-16,0) rotate(0)"
                    style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51); outline-width: 0px; outline-color: transparent;">200</text>
                </g>
                <line x1="0" x2="0" y1="0" y2="840.25" style="stroke: transparent; stroke-width: 1;"></line>
              </g>
              <path d="M0,593L227.4,643L454.8,111L682.2,519L909.6,445L1137,0" fill="none" stroke-width="2"
                stroke="#e11d48"></path>
              <path d="M0,663L227.4,276L454.8,589L682.2,243L909.6,733L1137,206" fill="none" stroke-width="2"
                stroke="#2563eb"></path>
              <g>
                <g transform="translate(1137, 0)" style="pointer-events: none;">
                  <circle r="3" fill="#e11d48" stroke="transparent" stroke-width="0" style="pointer-events: none;">
                  </circle>
                </g>
                <g transform="translate(909.6, 445)" style="pointer-events: none;">
                  <circle r="3" fill="#e11d48" stroke="transparent" stroke-width="0" style="pointer-events: none;">
                  </circle>
                </g>
                <g transform="translate(682.2, 519)" style="pointer-events: none;">
                  <circle r="3" fill="#e11d48" stroke="transparent" stroke-width="0" style="pointer-events: none;">
                  </circle>
                </g>
                <g transform="translate(454.8, 111)" style="pointer-events: none;">
                  <circle r="3" fill="#e11d48" stroke="transparent" stroke-width="0" style="pointer-events: none;">
                  </circle>
                </g>
                <g transform="translate(227.4, 643)" style="pointer-events: none;">
                  <circle r="3" fill="#e11d48" stroke="transparent" stroke-width="0" style="pointer-events: none;">
                  </circle>
                </g>
                <g transform="translate(0, 593)" style="pointer-events: none;">
                  <circle r="3" fill="#e11d48" stroke="transparent" stroke-width="0" style="pointer-events: none;">
                  </circle>
                </g>
                <g transform="translate(1137, 206)" style="pointer-events: none;">
                  <circle r="3" fill="#2563eb" stroke="transparent" stroke-width="0" style="pointer-events: none;">
                  </circle>
                </g>
                <g transform="translate(909.6, 733)" style="pointer-events: none;">
                  <circle r="3" fill="#2563eb" stroke="transparent" stroke-width="0" style="pointer-events: none;">
                  </circle>
                </g>
                <g transform="translate(682.2, 243)" style="pointer-events: none;">
                  <circle r="3" fill="#2563eb" stroke="transparent" stroke-width="0" style="pointer-events: none;">
                  </circle>
                </g>
                <g transform="translate(454.8, 589)" style="pointer-events: none;">
                  <circle r="3" fill="#2563eb" stroke="transparent" stroke-width="0" style="pointer-events: none;">
                  </circle>
                </g>
                <g transform="translate(227.4, 276)" style="pointer-events: none;">
                  <circle r="3" fill="#2563eb" stroke="transparent" stroke-width="0" style="pointer-events: none;">
                  </circle>
                </g>
                <g transform="translate(0, 663)" style="pointer-events: none;">
                  <circle r="3" fill="#2563eb" stroke="transparent" stroke-width="0" style="pointer-events: none;">
                  </circle>
                </g>
              </g>
              <g>
                <rect width="1137" height="840.25" fill="red" opacity="0" style="cursor: auto;"></rect>
              </g>
            </g>
          </svg></div>
      </div>
    </div>
  </div>
</div></template>


<script setup lang="ts">
</script>

<!-- <template>
  <main>
    <TheWelcome />
  </main>
</template> -->
