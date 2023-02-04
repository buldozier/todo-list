<template>
  <div class="modal" ref="modal" @mousedown="modalHidden">
    <div class="modal-inner" @mousedown.stop>
      <task-editor @closeTask="modalHidden" />
    </div>
  </div>
</template>

<script>
import TaskEditor from "@/components/TaskEditor";
export default {
  name: "ModalVue",
  emits: ["modalHidden"],
  components: { TaskEditor },

  data() {
    return {};
  },
  methods: {
    modalHidden() {
      this.$emit("modalHidden");
    },
  },
  mounted() {
    setTimeout(() => {
      this.$refs.modal.classList.add("opacity");
    }, 1);
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: opacity 0.2s ease-in-out;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  z-index: 100;
}

.opacity {
  opacity: 1;
}

.modal-inner {
  width: 500px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  &__content {
  }
}
</style>
