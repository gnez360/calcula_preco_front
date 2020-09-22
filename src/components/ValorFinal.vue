<template>
  <div class="about">
    <p><b>Valor Final: </b>{{valor_final}}</p>
    <a href="/#/"><input type="submit" value="Voltar"></a>
  </div>
</template>
<script>
export default {
  name: 'ValorFinal',
  props: ['valor_final'],
  mounted () {
   console.log(this.valor_final);
}   
}
</script>
<style scoped>


/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #45a049;
}

</style>

