<template>
  <div class="component-wrapper">
    <AwesomeButton to="/post" text="Post 페이지로 이동" />
    <AwesomeButton
      class="button"
      text="Go Naver Button"
      href="https://www.naver.com/" />
    <AwesomeFormSwitch />
    <div>{{ composableHello }}</div>
    <div>{{ serverLayer }}</div>
  </div>
</template>

<script setup lang="ts">
const composableHello = useHello();
const { data: serverLayer } = await useFetch('/api/hello');
</script>

<style scoped>
.component-wrapper {
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  height: 500px;
}

.button {
  width: 200px;
}
</style>
