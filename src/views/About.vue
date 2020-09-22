
<template>
    <div class="component">
        <h1>Calculo de Valor</h1>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ValorFinal :valor_final="valor"></ValorFinal>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import ValorFinal from '@/components/ValorFinal.vue'

export default {
  name: 'About',
  components: {
    ValorFinal
  },
  data() {
   return {
     valor: this.valor_final
   }
 }
}
</script>
