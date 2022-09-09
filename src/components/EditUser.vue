<template>
  <div class="row">
    <h3>Editer User</h3>
    <form @submit.prevent="handleUpdateForm">
      <div class="form_group">
        <label>Pseudo</label>
        <input type="text" class="form_control" v-model="user.pseudo" required>
      </div>
      <div class="form_group">
        <label>Email</label>
        <input type="email" class="form_control" v-model="user.email">
      </div>
      <div class="form_group">
        <label>Mot de passe</label>
        <input type="text" class="form_control" v-model="user.mdp">
      </div>
      <div class="form_group">
        <button>Editer</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      user: { }
    }
  },
  created () {
    const apiUrl = `http://localhost:4000/api/edit-user/${this.$route.params.id}`

    axios.get(apiUrl).then((res) => {
      this.user = res.data
    })
  },
  methods: {
    handleUpdateForm () {
      const apiUrl = `http://localhost:4000/api/update-user/${this.$route.params.id}`
      axios.post(apiUrl, this.user).then((res) => {
        console.log(res)
        this.$router.push('/view')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
