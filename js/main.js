const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            img: 'https://play-lh.googleusercontent.com/XJIXWvMtYKOfdE8k_353XZwKEHE63JigwjZnsSyhUH6VzOeUHhxouqGHpy7f1nQGyQ=w1052-h592'
        }
    }
}).mount('#app')
