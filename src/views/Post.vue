<template>
<div class="post" v-if="this.post && this.comments && this.user"> 
    <h2>Пост:</h2>
    <div class="title">{{this.post.data[0].title}}</div>
    <div >{{this.post.data[0].body}}</div>
    <v-divider></v-divider>
    <h2>Комментарии: </h2>    
    <div v-for="item in this.comments.data" :key="item.id">
        <h3>
            {{item.email}}
        </h3>
        <p>
            {{item.body}}
        </p>
    </div>
    <v-divider></v-divider>
    <h2>Автор поста:</h2>
    <h1>{{this.user.data[0].name}}</h1>
</div>
 
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            post:null,
            comments:null,
            user:null,
        }
    },
    computed: {
        posts(){

        }
    },
    methods: {
        async fetchPost(){
        this.post = await axios.get('https://jsonplaceholder.typicode.com/posts?id='+this.$route.params.id)
        this.user = await axios.get('https://jsonplaceholder.typicode.com/users?id='+ this.post.data[0].userId)
        this.comments = await axios.get('https://jsonplaceholder.typicode.com/comments?postId='+this.$route.params.id)
        }
        
    },
    created() {
        this.fetchPost()
       
    }
}
</script>

<style  >
.post {
    
    text-align: center;
}
h2 {
    margin-top: 50px;
    text-align: left;
}
p {
    margin-bottom: 40px;
}

</style>