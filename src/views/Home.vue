<template>
    <div>
      <section class="landing-section">
        <div class="flex items-center">
          <div>
            <h1>Download Videos</h1>
            <h2>Simpler & Easier</h2>
            <aside>Retriever.io is a powerful desktop application that lets you download videos from multiple websites simultaneously with just a few clicks.</aside>
            <SplitButton icon="pi pi-download" :model="downloadSubOptions()" :label="downloadFor().label" @click="()=>{openLink(downloadFor().link)}" ></SplitButton>
            <Button @click="openLink('https://github.com/gustavofdasilva/retriever.io')" label="View in github" icon="pi pi-github" severity="secondary" ></Button>
          </div>
          <img src="/src/assets/screenshot-landing.png" alt="screenshot landing">
        </div>
      </section>
  
      <section class="functionalities-section" id="features" >
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
  
      <section class="explanation-section" id="how-it-works">
        <div class="flex flex-col items-center">
          <h3>How It Works</h3>
          <p>Retriever.io makes downloading videos incredibly simple with just a few steps.</p>
        </div>
  
        <div class="content">
          <img src="/src/assets/downloading-video.gif" alt="screenshot download page"/>
          <aside>
            <div>
              <div class="card-header">
                <span> 1 </span>
                <p>Paste your URL</p>
              </div>
              <div>
                <p>Copy the video URL from your browser and paste it into Retriever.io. You can paste multiple URLs for batch downloads.</p>
              </div>
            </div>
  
            <div>
              <div class="card-header">
                <span> 2 </span>
                <p>Choose Your Options</p>
              </div>
              <div>
                <p>Select your preferred quality, format, and download location, or use the quick-download option for default settings.</p>
              </div>
            </div>
  
            <div>
              <div class="card-header">
                <span> 3 </span>
                <p>Download & Enjoy</p>
              </div>
              <div>
                <p>Click the download button and Retriever.io will handle the rest. Monitor progress in real-time and access your files when complete.</p>
              </div>
            </div>
  
            <Button @click="openLink(downloadFor().link)" label="Get Started Now" icon="pi pi-download" ></Button>
          </aside>
        </div>
      </section>
  
      <section class="download-history-section">
        <div class="flex flex-col items-center">
          <h3>Track Your Downloads</h3>
          <p>Easily manage and organize all your downloaded content.</p>
        </div>
  
        <img src="/src/assets/screenshot-downloads.png" alt="screenshot history page"/>
      </section>
  
      <section class="download-section">
  
        <div>
          <h3>Ready to Start Downloading?</h3>
          <p>Download now for free the easiest way to save videos.</p>
        </div>
  
        <div class="mb-4">
          <SplitButton fluid :label="downloadFor().label" icon="pi pi-download" :model="downloadSubOptions()" @click="openLink(downloadFor().link)" ></SplitButton>
          <Button @click="openLink('https://github.com/gustavofdasilva/retriever.io')" label="View in github" icon="pi pi-github" severity="secondary" ></Button>
        </div>
        <a href="/versions">See all versions</a>
  
      </section>
  
    </div>
  </template>
  
  <script>
import { Button, SplitButton } from 'primevue'
import { getOS } from '../helpers/checkOs'
import githubUrls from '../constants/githubUrls';

  
    export default {
      components: {
        SplitButton,
        Button,
      },
      data() {
        return {
        }
      },
      methods: {
        downloadSubOptions() {
          const os = getOS();
          let items = [];
          const macosSubOption = {
            label: 'Download for MacOs',
            command: () => {
                this.$router.push('/download?os=mac');
            }
          }
          const linuxSubOption = {
            label: 'Download for Linux',
            command: () => {
              this.$router.push('/download?os=linux');
            }
          }
          const windowsSubOption = {
            label: 'Download for Windows',
            command: () => {
              this.$router.push('/download?os=windows');
            }
          }
          const seeAllVersionsSubOption = {
            label: 'See all versions',
            command: () => {
              this.$router.push('/versions')   
            }
          }
          
          if (os === 'mac') {
            items.push(linuxSubOption, windowsSubOption, seeAllVersionsSubOption);
          } else if (os === 'linux') {
            items.push(macosSubOption, windowsSubOption, seeAllVersionsSubOption);
          } else {
            items.push(macosSubOption, linuxSubOption, seeAllVersionsSubOption);
          }

          return items;
        },
        downloadFor() {
          const os = getOS();
          
          if (os === 'mac') {
            return {
              label: 'Download for MacOs',
              link: 'https://github.com/gustavofdasilva/retriever.io/releases/tag/v1.0.0/'
            }
          } else if (os === 'linux') {
            return {
              label: 'Download for Linux',
              link: githubUrls.linux.deb
            }
          } else {
            return {
              label: 'Download for Windows',
              link: githubUrls.windows.setup
            }
          }

        },
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
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6em 2em 4em 2em;
      background-image: url(/src//assets/background-blob.svg);
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

      .landing-section .p-splitbutton {
        margin-right: 1em;
        margin-bottom: .5em;
      }

    @media screen and (max-width: 768px) {
      .landing-section > div{
        margin-top: 6em;
        
        flex-direction: column;
        text-align: center;
      }

      .landing-section h1 {
        font-size: 3em;
        line-height: 1em;
        font-weight: bold;
      }
  
      .landing-section h2 {
        font-size: 2em;
        font-weight: bold;
        color: var(--primary);
      }

      .landing-section aside {
        width: 100%;
      }

      .landing-section img {
        flex: 1;
        width: 100%;
        margin-top: 2em;
      }

      .landing-section .p-splitbutton {
        margin-right: 0;
        margin-bottom: .5em;
      }
      
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

    @media screen and (max-width: 768px) {
      .functionalities-section .grid-section {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(6, 1fr);
        grid-column-gap: 30px;
        grid-row-gap: 30px;
      }
      
    }
    
  
     
    .explanation-section {
      padding: 5em 2em;
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

    @media screen and (max-width: 768px) {
      .explanation-section .content {
        display: flex; 
        justify-content: center;
        align-items: center;
        padding: 0;
        text-align: start;
        flex-direction: column;
      }
  
      .explanation-section .content > img {
        width: 100%;
        margin: 2em 0 2em 0;
      }

      .explanation-section .content > aside {
        display: flex;
        flex-direction: column;
        align-items: center;
      } 

      .explanation-section .content > aside button{
        align-self: flex-end;
      }
      
    }
  
  
    .download-history-section {
      background-color: var(--surface-950);
      padding: 5em 2em;
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

    @media screen and (max-width: 768px) {
      .download-history-section img {
        width: 100%;
        margin-top: 3em;
      }
      
    }
     
    .download-section {
      padding: 9em 2em 9em 2em;
      min-height: 0;
      background-image: url(/src/assets/background-blob-spike.svg);
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
      .download-section button, .download-section .p-splitbutton {
          margin-bottom: .5em;
      }

  @media screen and (max-width: 768px) {
    .download-section button, .download-section .p-splitbutton {
      width: 100%;
      margin-bottom: 1em;
    }
    
  }
  
  
  </style>
  