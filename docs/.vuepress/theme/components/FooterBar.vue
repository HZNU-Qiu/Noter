<template lang="">
    <div>
        FooterBar
    <p class="copyright" v-html="copyRight"></p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            copyRight: `© ${new Date().getFullYear()} ❤️ <a target="_blank" rel="external nofollow noopener" href="#">NNU KJ</a>`
        }
    },
}
</script>
<style lang="">
    
</style>