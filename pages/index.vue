<!-- filepath: pages/index.vue -->
<template>
    <div>
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
      </main>
      <footer>
        <p>&copy; 2025 スタジオマリアスのホームページ</p>
      </footer>
      <button @click="handleClick">クリック</button>
      <p ref="output">{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { useHead } from '@vueuse/head'
  
  useHead({
    title: 'My Page Title'
  })
  </script>
  
  <style scoped>
  /* ここにCSSを記述します */
  </style>