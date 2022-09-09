<template>
    <div class="theme-container">
        <Sidebar class=""></Sidebar>
        <Home></Home>
    </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Home from "../components/Home.vue";
export default {
    components: {
        Sidebar,
        Home
    }
}
</script>

<style lang="css">
.my-footer {
    text-align: center;
}

.my-sidebar {
    font-size: 16px;
    width: var(--sidebar-width);
    position: fixed;
    z-index: 10;
    margin: 0;
    top: 10px;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    border-right: 1px solid var(--c-border);
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--c-brand) var(--c-border);
    background-color: var(--c-bg-sidebar);
    transition: transform var(--t-transform), background-color var(--t-color), border-color var(--t-color);
}
</style>