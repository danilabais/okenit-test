<template>
<div>
  <v-banner>
    <v-select ref="input"   @change="filter"  :items="names"/> <v-btn @click="reset">Сбросить</v-btn>
  </v-banner>
  <v-divider/>
  <v-simple-table dark>
     <thead>
        <tr>
          <th class="text-left">
            Пост
          </th>
          <th class="text-left">
            Имя
          </th>
          <th class="text-left">
            Статья
          </th>
          <th class="text-left">
            Статья
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in posts"
          :key="item.id"
        >
        <td>{{ item.userId }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.body }}</td>
          <td><v-btn :to="{ path: `/posts/${item.id}`}">Подробнее {{item.id}}</v-btn></td>
        </tr>
      </tbody>
  </v-simple-table>
</div>
</template>

<script>

export default {
  data() {
    return { 
     

    }
  },
  methods: {
    filter(e) {
      let sortID=this.users.find(el=>el.name==e).id
       this.$store.dispatch('fetchPosts',sortID)
      
    },
    reset () {
      this.name=[]
      this.$refs.input.reset()
      this.$store.dispatch('fetchUsers')
      this.$store.dispatch('fetchPosts','')
    }
  },
  mounted(){
    this.$store.dispatch('fetchUsers')
    this.$store.dispatch('fetchPosts','')
  },
  computed:{
    users() {
      return this.$store.getters.users
     
    },
     posts() {
      return this.$store.getters.posts
     
    },
    names() {
      if (this.users) {
        return this.users.map(el=>el.name)

      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>