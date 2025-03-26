<template>
    <div>
      <section>
        <main>
          <h1>Terms of Use</h1>
          <div class="mb-2 ms-4">
            <p>Retriever.io is a tool that makes downloading public content easier. the end user is responsible for what they download, how they use and distribute that content.</p>
            <p>According to the software license agreement, you must have the right to download the content you are downloading. You personally retain all responsibility for the content downloaded by you. This software is not intended for downloading copyrighted material.</p>
            <p class="my-5">Retriver.io is licensed under the <a href="https://opensource.org/license/mit" target="_blank">MIT License</a>. You can freely use, modify and distribute it.</p>
            <p>See the <a href="https://github.com/yt-dlp/yt-dlp" target="_blank">yt-dlp</a> documentation for more information about using yt-dlp.</p>
          </div>
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

    
    @media screen and (max-width: 768px) {
      main {
        width: 100%;
        padding: 0 1.5em;
      }
      
    }
  
  </style>
  