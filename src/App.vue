<template>
    <div id="app">
        <slidebar></slidebar>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

import slidebar from "@/pages/slidebar/slidebar.vue";

@Component({
    components: {
        slidebar
    }
})
export default class App extends Vue {
    name: string = "张三";
    text: string = `123`;
    b: number = 1;

    @State("a") state1;

    async a() {
        this.$message({
            message: this.name
        });

        let { data, code, msg } = await this.$axios.post({
            url: "/home",
            data: {
                type: 1,
                page: 1
            }
        });
        this.$log(data, code, msg);
    }

    get ab(): number {
        return this.b + 1;
    }
}
</script>

<style lang="less">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    img {
        width: 100px;
    }
}
</style>
