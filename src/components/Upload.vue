<template>
  <v-layout>
    <v-flex sm8 offset-sm2>
      <h3 class="headline pb-4">Upload a Killer Riff!</h3>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
          label="Song Title"
          v-model="title"
          :rules="titleRules"
          placeholder="Add song title"
          required
        ></v-text-field>
        <v-text-field
          label="Artist"
          v-model="artist"
          :rules="artistRules"
          placeholder="Add artist"
          required
        ></v-text-field>
        <v-text-field 
          label="Description"
          v-model="description"
          :rules="descriptionRules"
          placeholder="Add description"
          multi-line
        ></v-text-field>
        <v-text-field
          label="Image url"
          v-model="imageurl"
          :rules="imageurlRules"
          placeholder="Add url of image"
        ></v-text-field>
        <v-text-field
          label="Tab url"
          v-model="taburl"
          :rules="taburlRules"
          placeholder="Add url of tab"
        ></v-text-field>
        <v-btn
          @click="submit"
          :disabled="!valid"
        >
          submit
        </v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
	data: () => ({
		valid: true,
		title: '',
		titleRules: [
			v => !!v || 'Title is required',
			v => (v && v.length <= 140) || 'Title must be less than 140 characters'
		],
		artist: '',
		artistRules: [
			v => !!v || 'Artist is required',
			v => (v && v.length <= 140) || 'Artist must be less than 140 characters'
		],
		description: '',
		descriptionRules: [
			v => !!v || 'Description is required',
			v => (v && v.length <= 300) || 'Title must be less than 300 characters'
		],
		taburl: '',
		taburlRules: [v => !!v || 'taburl is required'],
		imageurl: '',
		imageurlRules: [v => !!v || 'imageurl is required']
	}),

	methods: {
		submit() {
			console.log(this.title, this.artist)
			if (this.$refs.form.validate()) {
				// Native form submission is not yet supported
				axios
					.post(
						'https://secret-headland-43248.herokuapp.com/records',
						{
							title: this.title,
							artist: this.artist,
							description: this.description,
							taburl: this.taburl,
							imageurl: this.imageurl
						},
						{ headers: { 'content-type': 'application/json' } }
					)
					.then(res => {
						if (res.status === 200) {
							console.log('good!')
						}
					})
					.catch(err => {
						console.log('bad!')
						console.error(err)
					})
			}
		},
		clear() {
			this.$refs.form.reset()
		}
	}
}
</script>
