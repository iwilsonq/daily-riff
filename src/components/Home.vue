<template>
  <v-container>
      <v-layout row wrap>
        <v-flex v-for="(record, i) in records" :key="i" xs4>
          <record :record="record" />
        </v-flex>
      </v-layout>
		<router-link to="/upload">
			<v-btn
				fixed
				dark
				fab
				bottom
				right
				color="pink"
			>
				<v-icon>add</v-icon>
			</v-btn>
		</router-link>
  </v-container>
</template>

<script>
import axios from 'axios'
import Record from '@/components/Record'

export default {
	name: 'Home',
	data: () => ({
		records: [],
		isLoading: false
	}),
	mounted() {
		this.getRecords()
	},
	methods: {
		getRecords() {
			this.isLoading = true
			axios
				.get('https://secret-headland-43248.herokuapp.com/records')
				.then(({ data }) => {
					this.records = data
					this.isLoading = false
				})
				.catch(err => {
					this.isLoading = false
					console.error(err)
				})
		}
	},
	components: {
		Record
	}
}
</script>