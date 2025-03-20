<template>
    <div>
      <section>
        <main>
          <h1>404</h1>
          <div class="mb-2 ms-4">
            <p>The page you are trying to access do not exists.</p>
            <p>Go back to <a href="/">home screen</a></p>
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
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
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

  
  </style>
  