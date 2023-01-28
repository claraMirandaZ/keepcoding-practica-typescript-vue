<template>
  <div class="user-item">
    <img :src="user.avatar" alt="Foto de perfil" />
    <h2>Name: {{ user.name }}</h2>
    <h3>E-mail address: {{ user.email }}</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam cum sed,
      sunt eaque voluptates reiciendis tempora consequatur earum veritatis
      suscipit omnis, laborum accusamus fugiat deserunt! Harum quis maxime error
      itaque.
    </p>
    <h3>Role: {{ userRole }}</h3>
    <small>User ID: {{ user.id }}</small>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { User } from '@/models/user';

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    userRole: String,
  },
});
</script>

<style scoped>
.user-item {
  width: 300px;
  display: flex;
  border: 1px solid black;
}

.user-avatar {
  width: 50%;
}

.user-avatar > img {
  width: 100%;
  height: auto;
}
</style>
