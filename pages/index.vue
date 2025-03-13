<template>
  <div class="outer-container">
    <div class="container">
      <header>
        <h1>ようこそスタジオマリアスのホームページへ</h1>
        <nav>
          <ul>
            <li><a href="#about">私について</a></li>
            <li><a href="#services">サービス</a></li>
            <li><a href="#contact">お問い合わせ</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>私について</h2>
          <p>ここに自己紹介の内容が入ります。</p>
        </section>
        <section id="services">
          <h2>サービス</h2>
          <p>提供するサービスの詳細がここに入ります。</p>
        </section>
        <section id="contact">
          <h2>お問い合わせ</h2>
          <p>お問い合わせフォームや連絡先情報がここに入ります。</p>
        </section>
        <section id="galleries">
          <div class="gallery">
            <h2>ギャラリー 1</h2>
            <div class="gallery-grid">
              <img :src="currentImage1" :style="{ transform: 'scale(' + zoomLevel1 + ')' }" class="gallery-image" alt="ギャラリー画像" />
            </div>
            <div class="thumbnail-container">
              <img v-for="(image, index) in images" :key="index" :src="image" @click="currentImage1 = image" class="thumbnail-image" alt="サムネイル画像" />
            </div>
            <div class="zoom-controls">
              <button @click="zoomIn(1)" class="zoom-button">+</button>
              <button @click="zoomOut(1)" class="zoom-button">-</button>
            </div>
          </div>
          <div class="gallery">
            <h2>ギャラリー 2</h2>
            <div class="gallery-grid">
              <img :src="currentImage2" :style="{ transform: 'scale(' + zoomLevel2 + ')' }" class="gallery-image" alt="ギャラリー画像" />
            </div>
            <div class="thumbnail-container">
              <img v-for="(image, index) in images" :key="index" :src="image" @click="currentImage2 = image" class="thumbnail-image" alt="サムネイル画像" />
            </div>
            <div class="zoom-controls">
              <button @click="zoomIn(2)" class="zoom-button">+</button>
              <button @click="zoomOut(2)" class="zoom-button">-</button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 スタジオマリアスのホームページ</p>
      </footer>
      <button @click="handleClick">クリック</button>
      <p ref="output">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'My Page Title'
})

const images = [
  'image/image1.jpg',
  'image/image2.jpg',
  'image/image3.jpg',
  'image/image4.jpg'
]

const currentImage1 = ref(images[0])
const currentImage2 = ref(images[0])
const zoomLevel1 = ref(1)
const zoomLevel2 = ref(1)

const zoomIn = (gallery) => {
  if (gallery === 1) {
    zoomLevel1.value += 0.1
  } else if (gallery === 2) {
    zoomLevel2.value += 0.1
  }
}

const zoomOut = (gallery) => {
  if (gallery === 1) {
    zoomLevel1.value = Math.max(1, zoomLevel1.value - 0.1)
  } else if (gallery === 2) {
    zoomLevel2.value = Math.max(1, zoomLevel2.value - 0.1)
  }
}
</script>

<style scoped>
/* ここにCSSを記述します */
body, html {
  height: 100%;
  margin: 0;
}

.outer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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

header, main, footer {
  width: 100%;
  text-align: center;
}

#galleries {
  display: flex;
  gap: 16px;
}

.gallery {
  flex: 1;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.gallery-image {
  width: 100%;
  cursor: pointer;
}

.thumbnail-container {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  margin-top: 16px;
  padding-bottom: 8px; /* スクロールバーのスペースを確保 */
}

.thumbnail-image {
  width: 100px;
  cursor: pointer;
  flex-shrink: 0;
}

/* スクロールバーのスタイルをカスタマイズ */
.thumbnail-container::-webkit-scrollbar {
  height: 8px;
}

.thumbnail-container::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.thumbnail-container::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.zoom-controls {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}

.zoom-button {
  background-color: #ddd;
  border: none;
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
  width: 50%;
}

.zoom-button:hover {
  background-color: #ccc;
}
</style>