<template>
  <div>
    <Header/>
    <RouterView />
    <Footer/>

  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import SplitButton from 'primevue/splitbutton';
  import Button from 'primevue/button';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';

  export default {
    components: {
      Header,
      SplitButton,
      Button,
      Footer,
      RouterView
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
    align-items: center;
    
    flex-direction: column;
    justify-content: center;
    text-align: center;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  }

  .landing-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2em;
    background-image: url(./assets/background-blob.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: row;
    text-align: start;
  }

    .landing-section h1 {
      font-size: 4em;
      line-height: 1em;
      font-weight: bold;
    }

    .landing-section h2 {
      font-size: 3em;
      font-weight: bold;
      color: var(--primary);
    }

    .landing-section aside {
      font-size: 1em;
      width: 50%;
      margin: 1em 0 2em 0;
      color: var(--surface-400);
    }

    .landing-section img {
      width: 50%;
      box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
      transition: ease .2s all;
    }

    .landing-section img:hover {
      margin-bottom: 10px;
      box-shadow: 0px 10px 15px -3px color-mix(in srgb, var(--primary) 10%, transparent);
      transition: ease .2s all;
    }

  .functionalities-section {
    background-color: var(--surface-950);
    padding: 5em 2em;
  }
    .functionalities-section h3 {
      font-size: 2em;
      font-weight: bold;
      margin-bottom: .5em;
    }
    .functionalities-section aside {
      font-size: 1em;
      width: 80%;
      color: var(--surface-400);
      margin-bottom: 4em;
    }

    .functionalities-section .grid-section {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 30px;
    }
    .functionalities-section .grid-section .card {
      padding: 1em;
      text-align: start;
      background-color: var(--surface-900);
      border-radius: 10px;
      transition: ease .3s all;
    }
        .functionalities-section .grid-section .card:hover {
          transition: ease .3s all;
          box-shadow: 0px 10px 10px -3px color-mix(in srgb, var(--primary) 5%, transparent);
        }
      .functionalities-section .grid-section .card span{
        color: var(--primary);
        background: var(--primary-fill);
        font-size: 1.2em;
        padding: .8em;
        border-radius: 10px;
        margin-bottom: 1em;
      }
      .functionalities-section .grid-section .card p {
        font-size: 1.2em;
        font-weight: bold;
        margin-bottom: .5em;
      }
      .functionalities-section .grid-section .card p:last-child {
        font-size: 1em;
        font-weight: normal;
        color: var(--surface-500);
      }
  

   
  .explanation-section {
    padding: 4em 0 4em 0;
  }
    .explanation-section h3 {
      font-size: 2em;
      font-weight: bold;
      margin-bottom: .5em;
    }
    .explanation-section > div > p {
      font-size: 1em;
      width: 80%;
      color: var(--surface-400);
    }

    .explanation-section .content {
      display: flex; 
      justify-content: space-between;
      align-items: center;
      padding: 2.5em 2em 0 2em;
      text-align: start;
    }
      .explanation-section .content > img {
        width: 45%;
        margin-right: 5em;
        transition: ease .3s all;
      }
        .explanation-section .content > img:hover {
          transition: ease .3s all;
          box-shadow: 0px 10px 10px -3px color-mix(in srgb, var(--primary) 5%, transparent);
        }

      .explanation-section .content > aside > div {
        margin: 1em 0 3em 0;
      }

      .explanation-section .content > aside > div > div.card-header {
        display: flex;
        align-items: center;
        margin-bottom: .5em;
      }

      .explanation-section .content > aside > div > div.card-header > span{
        background: var(--primary);
        width: 2.2em;
        height: 2.2em;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: var(--surface-900);
        font-weight: bold;
      }

      .explanation-section .content > aside > div > div.card-header > p {
        color: var(--white-text);
        font-weight: bold;
        margin-left: .5em;
        font-size: 1.2em;
      }


  .download-history-section {
    background-color: var(--surface-950);
    padding: 4em 0 4em 0;
  }
    .download-history-section h3 {
        font-size: 2em;
        font-weight: bold;
        margin-bottom: .5em;
      }
    .download-history-section p {
      font-size: 1em;
      color: var(--surface-500);
    }
    .download-history-section img {
      width: 70%;
      margin-top: 3em;
      transition: ease .3s all;
    }
      .download-history-section img:hover {
        transition: ease .3s all;
        box-shadow: 0px 10px 10px -3px color-mix(in srgb, var(--primary) 5%, transparent);
      }
   
  .download-section {
    padding: 9em 0 9em 0;
    min-height: 0;
    background-image: url(./assets/background-blob-spike.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  }
    .download-section h3 {
        font-size: 2em;
        font-weight: bold;
        margin-bottom: .2em;
      }
    .download-section p {
      font-size: 1em;
      margin-bottom: 2em;
      color: var(--surface-500);
    }


</style>
