<template >
    <nav>
        <div class="flex items-center">
            <img src="../assets/logo.svg" style="width: 45px;" alt="logo">
            <h1 class="font-bold">Retriever.io</h1>
        </div>
        <div class="buttons">
            <Button @click="navigateTo('featuresRef')" label="Features" variant="text"  severity="secondary" ></Button>
            <Button @click="navigateTo('howItWorksRef')" label="How it works" variant="text"  severity="secondary" ></Button>
            <Button label="About" variant="text" severity="secondary" ></Button>
            <Button label="Download" icon="pi pi-download" ></Button>
            
            <a class="hidden" href="#features" ref="featuresRef" >ref</a>
            <a class="hidden" href="#how-it-works" ref="howItWorksRef" >ref</a>
        </div>
    </nav>
</template>
<script>
import Button from 'primevue/button';
export default {
    components: {
        Button
    },
    methods: {
        navigateTo(ref) {
            this.$refs[ref].click();
        }
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
        padding: .8em 1.2em;
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