<template>
  <div>
    <!-- v-if="user" -->
    <h1>Profile page</h1>
    <UserItem />
  </div>
  <!-- <div v-else>Please, log in to check your personal data...</div> -->
</template>

<script lang="ts">
import useUsers from '@/composables/useUsers';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProfileView',
  props: {
    id: {
      type: Number,
      required: true,
    },
    userRole: String,
  },
  setup(props) {
    const { user, fetchUserById, isLoading } = useUsers();
    fetchUserById(props.id);
    return {
      user,
      isLoading,
    };
  },
});
</script>

<style>
h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rebeccapurple;
}
</style>
