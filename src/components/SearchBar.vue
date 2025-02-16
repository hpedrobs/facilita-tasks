<template>
    <div class="search-container">
        <input @input="updateSearch" class="search-bar" placeholder="Buscar tarefas..." />
        <img class="" :src="GlassIcon" />
    </div>
</template>

<script>
import GlassIcon from "@/assets/icons/glass-icon.svg"

export default {
    name: "SearchBar",
    data() {
        return {
            GlassIcon,
        }
    },
    methods: {
        updateSearch(event) {
            this.$emit("search-updated", event.target.value)
        },
    },
}
</script>

<style lang="stylus" scoped>
.search-container
  display flex
  justify-content space-between
  align-items center
  padding 10px
  width 100%
  padding 10px
  border 2px solid #BFDAEB
  border-radius 4px
  color #BFDAEB
  font-size 17px
  outline none
  transition all 0.3s ease-in-out

  input
    background-color transparent
    border none
    outline none
    color #BFDAEB
    height: 100%;

    &::placeholder
        color #A6C1D2
        font-weight 600

    &:focus
      background-color transparent
      border-color none

  &:focus
    background-color darken(#BFDAEB, 10%)
    border-color darken(#BFDAEB, 20%)
</style>
