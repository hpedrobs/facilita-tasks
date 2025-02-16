<template>
    <div class="ordered-Tasks-sidebar">
        <div class="flex-center flex-col gap-15">
            <h2>Categorias</h2>

            <ul>
                <li v-for="(value, key) in getFilterCounts" :key="key" @click="selectCategory(key)">
                    <img v-if="selectedCategory === key" :src="ArrowRightIconActive" />
                    <img v-else :src="ArrowRightIcon" />

                    <span :class="{ 'category-active': selectedCategory === key }">{{ key }}</span>

                    <span v-if="key === 'Urgentes'" class="count-circle urgente">{{ value }}</span>
                    <span v-if="key === 'Importantes'" class="count-circle importante">{{
                        value
                        }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

import ArrowRightIconActive from "@/assets/icons/arrow-right-icon-active.svg"
import ArrowRightIcon from "@/assets/icons/arrow-right-icon.svg"

export default {
    name: "OrderedTasksSidebar",
    props: {
        selectedCategory: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            searchQuery: "",
            ArrowRightIconActive,
            ArrowRightIcon,
        }
    },
    methods: {
        selectCategory(category) {
            this.$emit("category-selected", category)
        },
    },
    computed: {
        ...mapGetters(["getFilterCounts"]),
    },
}
</script>

<style lang="stylus" scoped>
.ordered-Tasks-sidebar
  background-color #F4FBFF
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
  height 100%
  padding 25px
  display none
  align-items center
  justify-content center
  flex-direction column

  h2
    color #4E5F70
    font-size 17px
    font-weight bold
    width 100%

  ul
    li
      list-style none
      cursor pointer

      span
        color #283848
        font-weight bold
        margin-right 15px

      img
        margin-right 15px
        color #283848

.count-circle
  display inline-flex
  justify-content center
  align-items center
  width 20px
  height 20px
  border-radius 50%
  color #fff!important
  font-size 11px

.urgente
  background-color #FF2E79

.importante
  background-color #FFC42E

@media (min-width: 992px)
  .ordered-Tasks-sidebar
    display flex

.category-active
  color #1182F2!important
</style>
