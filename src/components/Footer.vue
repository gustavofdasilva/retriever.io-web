<template >
    <footer>
        <section>
            <div>
              <p>Retriever.io</p>
              <p class="text-[var(--surface-600)] w-[80%] mb-3">A powerful desktop application for downloading multiple videos simultaneously from a wide variety of websites.</p>
              <a href="https://github.com/gustavofdasilva/retriever.io" target="_blank" class="me-2"><span class="pi pi-github"></span></a>
              <a href="https://x.com/retriever_io" class="me-2"><span class="pi pi-twitter"  target="_blank"></span></a>
              <a href="https://www.instagram.com/retriever.io.app/"  target="_blank" class="me-2"><span class="pi pi-instagram"></span></a>
            </div>
            <div class="topics-container">
                <div class="topics" >
                  <ul>
                      <li>Resources</li>
                      <!-- <a href="/installationGuide">
                          <li>Installation Guide</li>
                      </a>
                      <a href="/tutorials">
                          <li>Tutorials</li>
                      </a> -->
                      <a href="/versions">
                          <li>Versions</li>
                      </a>
                  </ul>
                </div>
                <div class="topics">
                  <ul>
                        <li>Legal</li>
                      <a href="/terms">
                          <li>Terms of Use</li>
                      </a>
                      <a href="https://opensource.org/license/mit" target="_blank">
                          <li>License</li>
                      </a>
                  </ul>
                </div>
            </div>
        </section>
        <section>
            <div>
                <p  class="text-[var(--surface-600)] w-[80%]" >Retriver.io is not affiliated with yt-dlp. It is a external tool that depends of yt-dlp to run</p>
            </div>
            <div class="flex external-binaries-links" >
                <a href="https://github.com/yt-dlp/yt-dlp" target="_blank" class="flex items-center me-4">yt-dlp <span class="pi pi-external-link ms-2"></span></a>
                <a href="https://www.ffmpeg.org" target="_blank" class="flex items-center">ffmpeg <span class="pi pi-external-link ms-2"></span></a>
            </div>
        </section>
    </footer>
</template>
<script>
import Button from 'primevue/button';
export default {
    components: {
        Button
    }
}
</script>
<style scoped>
    footer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: var(--surface-950);
        width: 100%;
        border-top: 1px solid var(--surface-800);
    }

    h1 {
        font-size: 20px;
        font-weight: 700;
        margin-left: .8em;
    }

    .buttons button{
        margin-left: 1.5em;
    }

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--surface-900);
        padding: 3em 2em;
    }
        section:first-child {
            border-bottom: 1px solid var(--surface-800);
        }

        
        
        .topics {
            align-self: start;
            margin-left: 2em;
        }

        .topics > ul > li:first-child {
            font-weight: bold;
        }

        .topics a:not(:first-child) {
            color: var(--surface-500) ;
            font-weight: normal !important;
            transition: .2s ease all;
        }
            .topics a:not(:first-child):hover {
                color: var(--surface-700) ;
                font-weight: normal !important;
                transition: .2s ease all;
            }

    .topics-container {
        display: flex;
        justify-content: space-between;
    }

    li, a {
        overflow: hidden; 
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    @media screen and (max-width: 768px) {
        section {
            flex-direction: column;
            padding: 1.5em 2em;
        }

        section p {
            width: 100% !important;
            margin-bottom: .5em;
        }
    

        .topics {
            flex-direction: row;
            display: flex;
            margin-left: 0em;
            margin-top: 1em;
        }

        .topics-container {
            flex-direction: row;
            justify-content: space-between;
            margin-top: 1em;
            width: 100%;
        }

        .external-binaries-links {
            justify-content: space-between;
            width: 100%;
            margin-top: 1em;
        }
        
    }

</style>