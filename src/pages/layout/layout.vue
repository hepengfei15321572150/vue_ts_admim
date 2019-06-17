<template>
    <div id="layout">
        <el-container style="height:100%;">
            <el-header style="background:red;"></el-header>

            <el-container style="height:calc(100% - 60px);">
                <el-aside width="240px" style="background-color: red;">
                    <el-menu
                        :default-openeds="defaultOpeneds"
                        :default-active="defaultActive"
                    >
                        <el-submenu
                            v-for="(item, index) in list"
                            :key="index"
                            :index="'' + index"
                        >
                            <!-- 大标题 -->
                            <template slot="title">
                                <i class="el-icon-message"></i>
                                {{ item.name }}{{ $route.path }}
                            </template>
                            <!-- 每一项 -->
                            <el-menu-item
                                v-for="(jtem, jndex) in item.children"
                                :key="jndex"
                                :index="index + '-' + jndex"
                                @click="toLink(item, jtem)"
                            >
                                {{ jtem.name }}{{ item.prefix + jtem.path }}
                            </el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>

                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class Layout extends Vue {
    //默认展开的项
    defaultOpeneds: Array<string> = [];
    //默认选中的项
    defaultActive: string = "0";

    list: any = [
        {
            name: "书库管理",
            prefix: "/book",
            icon: "",
            children: [
                {
                    path: "/novel",
                    icon: "",
                    name: "书库管理"
                },
                {
                    path: "/free",
                    icon: "",
                    name: "限免管理"
                },
                {
                    path: "/vip",
                    icon: "",
                    name: "会员书籍管理"
                }
            ]
        },
        {
            name: "活动管理",
            prefix: "/activity",
            icon: "",
            children: [
                {
                    path: "/list",
                    icon: "",
                    name: "运营活动管理"
                },
                {
                    path: "/ticket",
                    icon: "",
                    name: "书券管理"
                }
            ]
        }
    ];

    created(): void {
        let routerName = this.$route.path;
        let defaultActive: string = "0";
        let defaultOpeneds: Array<string> = [];

        this.list.forEach((item, index) => {
            let children = item.children;

            children.forEach((jtem, jndex) => {
                if (routerName === item.prefix + jtem.path) {
                    //默认选中哪项
                    defaultActive = index + "-" + jndex;
                    //默认打开
                    defaultOpeneds = ["" + index];
                }
            });
        });

        this.defaultActive = defaultActive;
        this.defaultOpeneds = defaultOpeneds;
    }

    //跳转
    toLink(item, jtem): void {
        this.$router.push({
            path: `${item.prefix}${jtem.path}`
        });
    }
}
</script>

<style scoped lang="less">
#layout {
}
</style>
