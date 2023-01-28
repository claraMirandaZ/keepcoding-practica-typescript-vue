<template>
  <div v-if="user">
    <h1>Profile page</h1>
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
  <div v-else>Please, log in to check your personal data...</div>
</template>

<script lang="ts">
import { AxiosResponse } from 'axios';
import { defineComponent, ref } from 'vue';
import fakeStoreAPI from '@/api/fakeStoreAPI';
import { User } from '@/models/user';

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
    userRole: String,
  },
  setup(props) {
    let user = ref<User>();
    fakeStoreAPI
      .get<unknown, AxiosResponse<User>>(`/profile/${props.id}`)
      .then((res) => {
        user.value = res.data;
      });
    return {
      user,
    };
  },
});
</script>

<style>
h1 {
  color: rebeccapurple;
}
</style>
