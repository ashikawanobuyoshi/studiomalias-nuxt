<template>
  <div>
    <h1>Example Page</h1>
    <p>This is an example page.</p>
    <!-- 他のコンテンツがここに入ります -->
    <img :src="require('@/top/image/' + currentImage1)" :style="{ transform: 'scale(' + zoomLevel1 + ')' }" class="gallery-image" alt="ギャラリー画像" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

// マクロ機能の利用例
const exampleMacro = ref('This is a macro example')
</script>

<script>
// ...existing code...
export default {
  // ...existing code...
  data() {
    return {
      currentImage1: 'example.jpg', // 例として画像ファイル名を指定
      zoomLevel1: 1
    };
  },
  // ...existing code...
}
</script>

<style scoped>
/* ここにCSSを記述します */
body, html {
  height: 100%;
  margin: 0;
}

.container {
  max-width: 1200px;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: #333;
}

p {
  font-size: 16px;
}
</style>
