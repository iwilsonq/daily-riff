<template>
  <v-card width="350px">
    <v-card-media :src="record.imageurl" height="200px" class="card-media">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 >
            <span class="headline">{{record.title}}</span><br/>
            <span>{{record.artist}}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>
    <v-card-title primary-title>
      <div>
        <div>{{record.description}}</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="orange" :href="record.taburl">Tab</v-btn>
    </v-card-actions>
  </v-card>  
</template>

<script>
export default {
	props: {
		record: {
			title: String,
			artist: String,
			description: String,
			taburl: String,
			imageurl: String
		}
	}
}
</script>

<style>
.card-media {
	text-align: left;
	color: #fff;
}
</style>
