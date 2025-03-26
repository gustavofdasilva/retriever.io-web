<template>
    <div>
      <section>
        <main>
          <h1>About</h1>
          <div class="mb-2 ms-4">
            <p>Completely free, Retriever.io is a Open Source GUI that works as a frontend for yt-dlp, with a focus on making it easier to use for users with no programming experience.</p>
            <p class="mt-5">If you have any suggestion or bug report, don’t hesitate to open an issue in <a href="">github</a></p>
          </div>

          <h2 class="mt-12" >Developers</h2>
          <ul class="ms-4">
            <li>Gustavo Silva - Founder <a href="https://github.com/gustavofdasilva" target="_blank"><span class="ms-2 pi pi-github"></span></a></li>
          </ul>

          <h3 class="text-center font-semibold text-[var(--surface-700)] mt-42">Thank you for choosing Retriever.io <span class="pi pi-heart"></span></h3>
        </main>
      </section>
    </div>
  </template>
  
  <script>
import { Button, SplitButton } from 'primevue'

  
    export default {
      components: {
        SplitButton,
        Button,
      },
      data() {
        return {
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
      margin-bottom: 1em;
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

    @media screen and (max-width: 768px) {
      main {
        width: 100%;
        padding: 0 1.5em;
      }
      
    }

  
  </style>
  