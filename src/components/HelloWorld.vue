<template>
  <div class="hello">
    <hr>
    <form @submit.prevent="enviar">
      
      <label for="nombre">Nombre</label>
      <input required type="text" id="nombre" v-model="formulario.nombre">
      <hr>
      <label for="apellidos">Apellidos</label>
      <input required type="text" id="apellidos" v-model="formulario.apellidos">
      <hr>
      <label for="consulta">Consulta</label>
      <textarea name="" id="consulta" cols="" rows="5" v-model="formulario.consulta"></textarea >
      <hr>
      <input type="radio" id="si" value="Si" v-model="formulario.cliente">
      <label for="si">Soy cliente</label>
      
      <input type="radio" id="no" value="No" v-model="formulario.cliente">
      <label for="no">No soy cliente</label>
      <br>

      <hr>

      <label for="conocio"> Donde nos conocio?</label>
      <select name="" id="conocio" v-model="formulario.conocio">
        <option v-for="opcion in conocio" :value="opcion" >
          {{ opcion }}
        </option>
      </select>

      <hr>
      <input type="checkbox" id="acepto" v-model="formulario.acepto">
      <label for="acepto">Acepto las condiciones</label>
      <hr>
      <input v-if="formulario.acepto"  type="submit" value="Enviar">



    </form>
    <hr>
    <pre> {{ $data }}</pre>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      formulario: {
        nombre: null,
        apellidos: null,
        consulta: null,
        conocio: 'internet',
        acepto: null,
        cliente: null,
      },
      conocio : [
        'amigo o familiar',
        'internet',
        'publicidad de tv',
      ]
    }
  },
  methods: {
    enviar() {
      for (let key in this.formulario) {
        console.info(`${key} : ${this.formulario[key]}`)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
