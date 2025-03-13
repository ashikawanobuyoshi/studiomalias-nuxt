// filepath: c:\Users\nashi\studiomalias-nuxt\pages\example.vue
<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'My Page Title'
})

const images = [
  '/image/image1.jpg',
  '/image/image2.jpg',
  '/image/image3.jpg',
  '/image/image4.jpg'
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