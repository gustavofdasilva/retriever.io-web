<template >
    <nav>
        <div class="flex items-center">
            <Button severity="secondary" variant="text" @click="$router.push('/')">
                <img src="../assets/logo.svg" style="width: 45px;" alt="logo">
            </Button>
            <h1 class="font-bold">Retriever.io</h1>
        </div>
        <div class="buttons">
            <Button @click="navigateTo('featuresRef')" label="Features" variant="text"  severity="secondary" ></Button>
            <Button @click="navigateTo('howItWorksRef')" label="How it works" variant="text"  severity="secondary" ></Button>
            <Button @click="goTo('/about')"  label="About" variant="text" severity="secondary" ></Button>
            <Button @click="goTo(downloadFor().link)"  label="Download" icon="pi pi-download" ></Button>

            <a class="hidden" href="/#features" ref="featuresRef" >ref</a>
            <a class="hidden" href="/#how-it-works" ref="howItWorksRef" >ref</a>
        </div>
    </nav>
</template>
<script>
import Button from 'primevue/button';
import { getOS } from '../helpers/checkOs';
export default {
    components: {
        Button
    },
    methods: {
        navigateTo(ref) {
            this.$refs[ref].click();
        },
        goTo(page) {
            console.log(page)
            this.$router.push(page);
        },
        downloadFor() {
          const os = getOS();
          
          if (os === 'mac') {
            return {
              label: 'Download for MacOs',
              link: '/download?os=mac'
            }
          } else if (os === 'linux') {
            return {
              label: 'Download for Linux',
              link: '/download?os=linux'
            }
          } else {
            return {
              label: 'Download for Windows',
              link: '/download?os=windows'
            }
          }

        },
    }
}
</script>
<style scoped>
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: color-mix(in srgb, var(--surface-950) 80%, transparent);
        width: 100%;
        padding: .5em 1.2em;
        position: fixed;
        z-index: 100;
        backdrop-filter: blur(10px);
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