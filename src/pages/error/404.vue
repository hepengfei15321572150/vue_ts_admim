<template>
    <div id="404">
        页面走丢了
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class Not404 extends Vue {

}
</script>

<style scoped lang="less">
#404 {}
</style>
