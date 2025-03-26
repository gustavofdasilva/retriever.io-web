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
            <Button @click="openLink(downloadFor().link)"  label="Download" icon="pi pi-download" ></Button>

            <a class="hidden" href="/#features" ref="featuresRef" >ref</a>
            <a class="hidden" href="/#how-it-works" ref="howItWorksRef" >ref</a>
        </div>
        <div class="drawer">
          <Drawer v-model:visible="visibleDrawer" header="Links" position="right" icon="pi" >
            <div class="flex flex-col items-center justify-between h-full w-full">
              <div class="flex flex-col items-center w-full">
                <Button class="my-2" fluid size="medium"
                  @click="()=>{
                      navigateTo('featuresRef');
                      visibleDrawer = false;
                    }" label="Features" variant="text"  severity="secondary" ></Button>
                <Button class="my-2" fluid size="medium" @click="()=>{
                    navigateTo('howItWorksRef')
                    visibleDrawer = false;
                  }" label="How it works" variant="text"  severity="secondary" ></Button>
                <Button class="my-2" fluid size="medium" @click="()=>{
                    goTo('/about')
                    visibleDrawer = false;
                  }"  label="About" variant="text" severity="secondary" ></Button>
                <Button class="my-2" fluid size="medium" @click="()=>{
                    openLink(downloadFor().link)
                    visibleDrawer = false;
                  }"  label="Download" icon="pi pi-download" ></Button>
              </div>
              <p class="text-[var(--surface-600)]">Retriever.io</p>
            </div>

            <a class="hidden" href="/#features" ref="featuresRef" >ref</a>
            <a class="hidden" href="/#how-it-works" ref="howItWorksRef" >ref</a>
          </Drawer>
          <Button icon="pi pi-bars" @click="visibleDrawer = true" />
        </div>
    </nav>
</template>
<script>
import Button from 'primevue/button';
import { getOS } from '../helpers/checkOs';
import openLink from '../helpers/openLink';
import githubUrls from '../constants/githubUrls';
import { Drawer } from 'primevue';

export default {
    components: {
        Button,
        Drawer
    },
    data() {
      return {
          openLink,
          visibleDrawer: false,
      }
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

    .drawer {
      display: none;
    }

    @media screen and (max-width: 768px) {
        nav {
            padding: .5em .5em;
        }

        h1 {
        font-size: 20px;
        font-weight: 700;
          margin-left: .1em;
      }

        .buttons {
          display: none;
        }

        .drawer {
          display: block;
        }
          .drawer {
            font-size: 1.6em !important;
          }
      
    }
</style>