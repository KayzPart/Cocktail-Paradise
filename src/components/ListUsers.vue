<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Pseudo</th>
          <th>Email</th>
          <th>Mot de passe</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in Users" :key="user._id">
          <td>{{ user.pseudo }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.mdp }}</td>
          <td>
            <router-link :to="{name: 'edit', params: { id: user._id }}">Edit</router-link>
            <button v-on:click="deleteUser(user._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      Users: []
    }
  },
  created () {
    const apiUrl = 'http://localhost:4000/api'
    axios.get(apiUrl).then(res => {
      this.Users = res.data
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    deleteUser (id) {
      const apiUrl = `http://localhost:4000/api/delete-user/${id}`
      const indexOfArrayItem = this.Users.findIndex(i => i._id === id)

      if (window.confirm('Voulez vous vraiment supprimez cet user ?')) {
        axios.delete(apiUrl).then(() => {
          this.Users.splice(indexOfArrayItem, 1)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
}
</script>
