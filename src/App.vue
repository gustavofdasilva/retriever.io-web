<template>
  <div>
    <Header></Header>
    <section class="landing-section">
      <div class="flex items-center">
        <div>
          <h1>Download Videos</h1>
          <h2>Simpler & Easier</h2>
          <aside>Retriever.io is a powerful desktop application that lets you download videos from multiple websites simultaneously with just a few clicks.</aside>
          <SplitButton class="me-3" label="Download for windows" icon="pi pi-download" :model="items" ></SplitButton>
          <Button label="View in github" icon="pi pi-github" severity="secondary" ></Button>
        </div>
        <img src="./assets/screenshot-landing.png" alt="screenshot landing">
      </div>
    </section>

    <section class="functionalities-section">
      <div class="flex flex-col items-center">
        <h3>Powerful Features</h3>
        <aside>Retriever.io combines simplicity with powerful functionality to give you the best video downloading experience.</aside>
      </div>
        <div class="grid-section">
          <div class="card">
            <span class="pi pi-check"></span>
            <p >Simple Mode</p>
            <p class="">Quick one-click downloads with default settings for when you're in a hurry.</p>
          </div>

          <div class="card">
            <span class="pi pi-sliders-v"></span>
            <p>Detailed Controls</p>
            <p>Fine-tune your downloads with quality settings, format selection, and more.</p>
          </div>

          <div class="card">
            <span class="pi pi-objects-column"></span>
            <p>Multiple Downloads</p>
            <p>Download multiple videos at once to save time and maximize efficiency.</p>
          </div>

          <div class="card">
            <span class="pi pi-plus"></span>
            <p>Wide Compatibility</p>
            <p>Works with hundreds of websites including YouTube, Vimeo, and many more.</p>
          </div>

          <div class="card">
            <span class="pi pi-save"></span>
            <p>Format Conversion</p>
            <p>Download videos in various formats including MP4, MP3, WEBM, and more.</p>
          </div>

          <div class="card">
            <span class="pi pi-download"></span>
            <p>Fast Downloads</p>
            <p>Optimized for speed with multiple downloads at the same time.</p>
          </div>
        </div>
    </section>

    <section class="explanation-section">
      <div>
        <h3>How It Works</h3>
        <p>Retriever.io makes downloading videos incredibly simple with just a few steps.</p>
      </div>

      <div>
        <img src="#" alt="screenshot download page"/>
        <aside>
          <div>
            <span>1</span>
            <div>
              <p>Paste your URL</p>
              <p>Copy the video URL from your browser and paste it into Retriever.io. You can paste multiple URLs for batch downloads.</p>
            </div>
          </div>

          <div>
            <span>2</span>
            <div>
              <p>Choose Your Options</p>
              <p>Select your preferred quality, format, and download location, or use the quick-download option for default settings.</p>
            </div>
          </div>

          <div>
            <span>3</span>
            <div>
              <p>Download & Enjoy</p>
              <p>Click the download button and Retriever.io will handle the rest. Monitor progress in real-time and access your files when complete.</p>
            </div>
          </div>

          <Button label="Get Started Now" icon="pi pi-download" ></Button>
        </aside>
      </div>
    </section>

    <section class="download-history-section">
      <div>
        <h3>Track Your Downloads</h3>
        <p>Easily manage and organize all your downloaded content with our intuitive interface.</p>
      </div>

      <img src="#" alt="screenshot history page"/>
    </section>

    <section class="download-section">

      <div>
        <h3>Ready to Start Downloading?</h3>
        <p>Download now for free the easiest way to save videos.</p>
      </div>

      <div>
        <SplitButton label="Download for windows" icon="pi pi-download" :model="items" ></SplitButton>
        <Button label="View in github" icon="pi pi-github" severity="secondary" class="ms-2" ></Button>
      </div>
      <a href="#">Versions</a>

    </section>

    <Footer/>

  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import SplitButton from 'primevue/splitbutton';
  import Button from 'primevue/button';
import Footer from './components/Footer.vue';

  export default {
    components: {
      Header,
      SplitButton,
      Button,
      Footer
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
  }
</script>

<style scoped>

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
      font-weight: bold;
    }

    .landing-section h2 {
      font-size: 3em;
      font-weight: bold;
      margin-top: -20px;
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

  }

  .download-history-section {
    background-color: var(--surface-950);
  }
   


</style>
