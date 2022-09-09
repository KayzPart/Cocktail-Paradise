<template>
  <div class="container_users">
    <form @submit.prevent="handleSubmitForm">
      <div class="form_group">
        <label>Pseudo</label>
        <input type="text" class="form-control" v-model="user.pseudo" required>
      </div>
      <div class="form_group">
        <label>Email</label>
        <input type="email" class="form-control" v-model="user.email" required>
      </div>
      <div class="form_group">
        <label>Mot de passe</label>
        <input type="text" class="form-control" v-model="user.mdp" required>
      </div>
      <div class="form_group">
        <button class="btn_create_user">Créer</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      user: {
        pseudo: '',
        email: '',
        mdp: ''
      }
    }
  },
  methods: {
    handleSubmitForm () {
      const apiUrl = 'http://localhost:4000/api/create-user'
      axios.post(apiUrl, this.user).then(() => {
        this.$router.push('/view')
        this.user = {
          pseudo: '',
          email: '',
          mdp: ''
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
