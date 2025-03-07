<template>
  <div>
    <Header></Header>
    <div class="landing-section">
      <div class="flex items-center">
        <div>
          <h1>Download Videos</h1>
          <h2>Simpler & Easier</h2>
          <aside>Retriever.io is a powerful desktop application that lets you download videos from multiple websites simultaneously with just a few clicks.</aside>
          <SplitButton label="Download for windows" icon="pi pi-download" :model="items" ></SplitButton>
          <Button label="View in github" icon="pi pi-github" ></Button>
        </div>
      </div>
    </div>
    <div class="functionalities-section">
      <div>
        <h3>Powerful Features</h3>
        <aside>Retriever.io combines simplicity with powerful functionality to give you the best video downloading experience.</aside>
      </div>
        <div class="grid-section">
          <div class="card">
            <span class="pi pi-user"></span>
            <p>Simple Mode</p>
            <p>Quick one-click downloads with default settings for when you're in a hurry.</p>
          </div>

          <div class="card">
            <span class="pi pi-user"></span>
            <p>Detailed Controls</p>
            <p>Fine-tune your downloads with quality settings, format selection, and more.</p>
          </div>

          <div class="card">
            <span class="pi pi-user"></span>
            <p>Multiple Downloads</p>
            <p>Download multiple videos at once to save time and maximize efficiency.</p>
          </div>

          <div class="card">
            <span class="pi pi-user"></span>
            <p>Wide Compatibility</p>
            <p>Works with hundreds of websites including YouTube, Vimeo, and many more.</p>
          </div>

          <div class="card">
            <span class="pi pi-user"></span>
            <p>Format Conversion</p>
            <p>Download videos in various formats including MP4, MP3, WEBM, and more.</p>
          </div>

          <div class="card">
            <span class="pi pi-user"></span>
            <p>Fast Downloads</p>
            <p>Optimized for speed with concurrent downloads.</p>
          </div>
        </div>
    </div>


    <div class="explanation-section">
      <div>
        <h3>How It Works</h3>
        <p>Retriever.io makes downloading videos incredibly simple with just a few steps.</p>
      </div>
    </div>


  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import SplitButton from 'primevue/splitbutton';
  import Button from 'primevue/button';

  export default {
    components: {
      Header,
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
  }
</script>

<style scoped>

</style>
