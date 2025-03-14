<template >
    <footer>
        <section>
            <div>
              <p>Retriever.io</p>
              <p>A powerful desktop application for downloading multiple videos simultaneously from a wide variety of websites.</p>
              <a href="#"><span class="pi pi-github"></span></a>
              <a href="#"><span class="pi pi-twitter"></span></a>
              <a href="#"><span class="pi pi-instagram"></span></a>
            </div>
            <div>
              <ul>
                  <li>Resources</li>
                  <li>Installation Guide</li>
                  <li>Tutorials</li>
                  <li>Versions</li>
              </ul>
            </div>
            <div>
              <ul>
                  <li>Legal</li>
                  <li>Terms of Use</li>
                  <li>License</li>
              </ul>
            </div>
        </section>
        <section>
            <div>
                <a href="#">Retriever.io</a>
                <p>Retriver.io is not affiliated with yt-dlp. It is a external tool that depends of yt-dlp to run</p>
            </div>
            <div>
                <a href="#">yt-dlp <span class="pi pi-external-link"></span></a>
                <a href="#">ffmpeg <span class="pi pi-external-link"></span></a>
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
        align-items: center;
        justify-content: space-between;
        background: var(--surface-950);
        width: 100%;
        padding: .8em 1.2em;
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
</style>