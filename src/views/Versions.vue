<template>
    <div>
      <section>
        <main>
          <h1>Versions</h1>
          <div class="mb-2">
            <div class="flex justify-center items-center">
                <SelectButton size="small" class="w-[100%]" fluid v-model="tabValue" :options="tabOptions" optionLabel="value" dataKey="value" aria-labelledby="custom">
                    <template #option="slotProps">
                        <i :class="slotProps.option.icon"></i>
                        <p>{{ slotProps.option.value }}</p>
                    </template>
                </SelectButton>
            </div>

            <div class="bg-[var(--surface-950)] w-[100%] p-4 rounded mt-2">
                <p class="mb-2">{{ tabValue.value }} version history</p>    
                <div class="versions-table-size table-header">
                    <span>Version</span>
                    <span>Released in</span>
                    <span>Status</span>
                    <span>Release notes</span>
                    <span>Download</span>
                </div>

                <div class="versions-table-size table-body flex grid-" v-for="version in versions" :key="version.version">
                    <span class="font-bold">{{ version.version }}</span>
                    <span>{{ version.date }}</span>
                    <div class="flex items-center justify-start">
                        <Tag :severity="version.status == 'Latest' ? 'success' : 'secondary'" :value="version.status" rounded></Tag>
                    </div>
                    <span class="text-nowrap overflow-hidden text-ellipsis ">{{ version.releaseNotes }}</span>
                    <div class="flex items-start justify-center flex-col">
                        <div class="block" v-for="file in version.downloadVersions[tabValue.value.toLowerCase()].versions">
                            <Button :disabled="file.link == ''" @click="()=>{openLink(file.link)}" size="small" icon="pi pi-download" :label="file.label" variant="text" />
                        </div>
                    </div>
                </div>
                
            </div>
          </div>
        </main>
      </section>
    </div>
  </template>
  
  <script>
import { Button, SplitButton, Tag } from 'primevue'
import SelectButton from 'primevue/selectbutton';
import versions from '../constants/versions';

  
    export default {
      components: {
        SplitButton,
        Button,
        SelectButton,
        Tag
      },
      data() {
        return {
        tabValue: 
        { "icon": "pi pi-microsoft", "value": "Windows" },
        versions: versions,
        tabOptions: [
                { icon: 'pi pi-microsoft', value: 'Windows' },
                { icon: 'pi pi-apple', value: 'MacOS' },
                { icon: 'pi pi-desktop', value: 'Linux' },
            ],
          items: [
              {
                  label: 'Download for MacOs',
                  command: () => {
                      
                  }
              },
              {
                  label: 'Download for Linux',
                  command: () => {
                      
                  }
              },
          ]
        }
      },
      methods: {
        openLink(url) {
          window.open(url,'_blank');
        }
      }
    }
  </script>
  
  <style scoped>
  
    img {
      border: 1px solid var(--surface-800);
      border-radius: 10px;
      box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.281);
    }
  
    section {
      min-height: 100vh;
      display: flex;
      padding-top: 6em;
      
      flex-direction: column;
      background-image: url(/src//assets/background-blob-basic.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

    }
    
    main {
      width: 60%;
      margin: 0 auto;
      margin-bottom: 2em;
    }

    p {
      line-height: 2.5em;
      font-size: 1.1em;
    }

    h1 {
      font-size: 2.5em;
      font-weight: 600;
    }

    h2 {
      font-size: 1.5em;
      font-weight: 600;
    }

    li {
      display: flex;
      align-items: center;
    }

    .table-header {
        color: var(--surface-500);
        border-bottom: 1px solid var(--surface-700);
        padding-bottom: .5em;
        margin-bottom: 1em;
    }

    .versions-table-size {
        display: grid;
        grid-template-columns: .6fr .9fr .8fr 2fr 1fr;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 5px;
    }

    .table-body:not(:last-child) {
        border-bottom: 1px solid var(--surface-700);
    }

    .table-body {
        padding: 1em .5em;
    }

    .table-body span:not(.p-tag) {
        display: flex;
        align-items: center;
    }





  
  </style>
  