<template>
    <div id="login">
        我是登录页
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class Login extends Vue {

}
</script>

<style scoped lang="less">
#login {}
</style>
