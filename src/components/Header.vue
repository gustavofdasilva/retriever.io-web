<template >
    <nav>
        <div class="flex items-center">
            <img src="../assets/logo.svg" style="width: 45px;" alt="logo">
            <h1 class="font-bold">Retriever.io</h1>
        </div>
        <div class="buttons">
            <Button label="Features" variant="text"  severity="secondary" ></Button>
            <Button label="How it works" variant="text"  severity="secondary" ></Button>
            <Button label="About" variant="text" severity="secondary" ></Button>
            <Button label="Download" icon="pi pi-download" ></Button>
        </div>
    </nav>
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
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--surface-950);
        width: 100%;
        padding: .8em 1.2em;
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