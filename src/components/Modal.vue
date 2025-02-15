<template>
    <div v-if="isOpen" class="modal-overlay" @click.self="close">
        <div class="modal-content">
            <div class="close-btn-content">
                <button @click="close">
                    <img :src="CloseIcon" height="15" width="15" />
                </button>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import CloseIcon from "@/assets/icons/close-icon.svg"

export default {
    name: "ModalGlobal",
    props: {
        isOpen: Boolean,
    },
    data() {
        return {
            CloseIcon,
        }
    },
    methods: {
        close() {
            this.$emit("close")
        },
    },
}
</script>
