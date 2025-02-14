<script>
export default {
    name: "LinkSidebar",
    props: {
        text: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        active: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    computed: {
        isActive() {
            return this.active ? "active" : ""
        },
    },
}
</script>

<template>
    <li :class="isActive">
        <div class="icon">
            <img :src="icon" :alt="text" />
        </div>
        <a href="#">{{ text }}</a>
    </li>
</template>
