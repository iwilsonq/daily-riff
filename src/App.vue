<template>
  <div id="app">
    <v-app>
      <toolbar />
      <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
export default {
	name: 'App',
	components: {
		Toolbar
	}
}
</script>

<style>
#app {
	font-family: 'Roboto', sans-serif;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
