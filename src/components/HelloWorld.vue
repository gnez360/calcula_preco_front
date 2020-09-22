<template>
  <div class="hello">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
   <form @submit="formSubmit">   
     <label for="valor">Valor do Produto</label><br>
     <input type="tel" v-model.lazy="price" v-money="money" class="valor" name="valor" @keyup="inputChanged"/><br>
     <label for="peso">Peso do Produto</label><br>
     <input type="tel" id="peso" name="peso" v-model="peso" placeholder="gramas" ><br>
     <label for="tipo">Categoria</label><br>
     <select id="tipo" name="tipo" v-model="tipo"><br>      
        <option value="1">Celulares Recondicionados</option>
        <option value="2">Celulares Novos</option>
        <option value="3">Relógios</option>
        <option value="4">Perfumes</option>
        <option value="5">TV Box</option>
        <option value="6">Notebook</option>
        <option value="7">Caixas JBL</option>
        <option value="8">Informática</option>
        <option value="9">Cosméticos</option>
      </select><br/>
      <input type="submit" value="Calcular">
    </form>
    <br>
    <div>
      <table class="tabela">
        <tr>
          <td class='col_l'>Valor Dolar Hoje:</td>
          <td class='col_r'>R$ {{output.valor_dolar_hoje}}</td>          
        </tr>
        <tr>
          <td class='col_l'>Valor IOF:</td>
          <td class='col_r'>R$ {{output.valor_iof}}</td>          
        </tr>        
         <tr>
          <td class='col_l'>Valor da Taxa: </td>
          <td class='col_r'>R$ {{output.valor_taxa}}</td>          
        </tr>
         <tr>
          <td class='col_l'>Valor do Produto:</td>
          <td class='col_r'>R$ {{output.valor_produto_real}}</td>          
        </tr>
         <tr>
          <td class='col_l'>Valor Final:</td>
          <td class='col_r'>R$ {{output.valor_final}}</td>          
        </tr>
      </table> 
   
    </div>
   
  </div>
</template>

<script>
import {VMoney} from 'v-money'
//import ValorFinal from '@/components/ValorFinal.vue'
 
export default {
  name: 'ValorFinal',
  props: ['valor_final'] , 

  data () {

      return {
        price: 0.00,
        money: {
          decimal: ',',
          thousands: '.',
          prefix: '$ ',         
          precision: 2,
          masked: true /* doesn't work with directive */
        },
        valor:'',
        peso:'',
        tipo:'',      
        output:''
      }
    },
     methods: {
            formSubmit(e) {       
                e.preventDefault(); 
                let currentObj = this;            
                let valor= this.price.replace('$','');   
                valor= valor.replace(',','.');                            
                this.axios.get('http://calculaprecofinal.herokuapp.com/dolar?valor='+valor+'&peso='+ this.peso+'&tipo='+this.tipo)
                .then(function (response) {                  
                    currentObj.output = response.data.data;   
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
             
          
            },
            inputChanged(){
              let currentObj = this; 
              
               function formatReal( int )
              { 
                
                      var tmp = int;                                  
                   
                      return tmp;
              }
              currentObj.price = formatReal(currentObj.price);              
            }         
        },
    directives: {money: VMoney}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Style inputs with type="text", select elements and textareas */
input[type=text], input[type=tel], select, textarea {
  text-align: center;
  width: 90%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}
.valor{
    text-align: center;
  width: 90%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}
.tabela{   
    margin-left:auto; 
    margin-right:auto;
   
  
}
.col_l{
  text-align: right;
 
}
.col_r{
  text-align: left;
 
}
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

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

</style>
