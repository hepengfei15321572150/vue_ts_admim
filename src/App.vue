<template>
    <div id="app">
        <template v-if="$route.name !== '404'">
            <!-- 登录页 -->
            <template v-if="$route.name.indexOf('login') !== -1">
                <router-view></router-view>
            </template>

            <!-- 普通页 -->
            <template v-if="$route.name.indexOf('login') === -1">
                <layout></layout>
            </template>
        </template>

        <!-- 404 -->
        <template v-if="$route.name === '404'">
            <router-view></router-view>
        </template>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

import layout from "@/pages/layout/layout.vue";

@Component({
    components: {
        layout
    }
})
export default class App extends Vue {
    name: string = "张三";
    text: string = `123`;
    b: number = 1;

    @State("a") state1;

    created(): void {
        this.$log(this.$router);
    }

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
    height: 100%;
    > div {
        height: 100%;
        overflow: auto;
    }
}
</style>
