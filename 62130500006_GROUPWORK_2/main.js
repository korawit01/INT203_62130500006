const app = {

    data() {

        return {

            // msg: 'Hello, Vue3',
            // shown:true,
            // url: "https://www.facebook.com/",
            pic: "images/profile image.jpg",
            firstname: "Korawit",
            lastname: "Rittisit",
            nickname: "Oum"
        }

    }
    
}

var mountedApp = Vue.createApp(app).mount('#app')