<template>
    <div id="slidebar">
        <div v-for="(item, index) in list" :key="index">
            <div>{{ item.name }}</div>
            <div
                style="padding-left:60px;"
                v-for="(jtem, jndex) in item.children"
                :key="jndex"
                @click="changePage(item, jtem)"
            >
                <div>{{ jtem.name }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class Slidebar extends Vue {
    list: any = [
        {
            name: "书库管理",
            prefix: "/book",
            children: [
                {
                    path: "/novel",
                    name: "书库管理"
                },
                {
                    path: "/free",
                    name: "限免管理"
                },
                {
                    path: "/vip",
                    name: "会员书籍管理"
                }
            ]
        }
    ];

    changePage(item, itemChildren): void {
        if (!itemChildren.path) {
            return null;
        };

        this.$router.push({
            path: `${item.prefix}${itemChildren.path}`
        });
    }
}
</script>

<style scoped lang="less">
#slidebar {
}
</style>
