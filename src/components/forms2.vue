<template>
	<div>
		
		<h1>prueba 1</h1>
		<input type="checkbox" v-model="checkbox" :true-value="a" :false-value="b">
		<hr>
			
		<!-- radio	 -->

		<input type="radio" v-model="radio" :value="a">

		<!-- select -->

		<select v-model="select">
			<option :value="a">Juan</option>
			<option :value="a">pedro</option>
		</select>

		<pre>{{ $data }}</pre>		

	</div>
	
</template>


<script>
	export default {
		data() {
			return {
				checkbox: null,
				a: {estado: 'checked'},
				b: {estado: 'unchecked'},
				radio: null,
				select: null

			}
		}
	}
</script>

<style>
	

</style>