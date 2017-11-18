<template>
	<div>
		<h1>modificadores</h1>
		<form @submit.prevent="enviar">
			<!--lazy, espera al evento submit -->
			<input type="text" v-model.lazy="formulario">

			<!-- number, pasa a elemento tipo number -->
			<input type="number" v-model.number="formnum">

			<!-- trin, quitar espacios -->
			<input type="text" v-model.trim="trin">

	
			<input type="submit" value="enviar">
		</form>
		<hr>

		<pre> {{ $data }}</pre>
	</div>
</template>


<script>
	export default {
		data(){
			return {
				formulario: null,
				formnum: null,
				trin: null
			}
		},
		methods: {
			enviar(){
				console.info(typeof this.formnum)
				console.info(typeof this.trin)

			}
		}
	}
</script>


<style>
	

</style>