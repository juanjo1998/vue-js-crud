<template>
  <div class="container d-flex justify-content-center">   
    <ShowComponent :course="course"/>  
  </div>
</template>

<script>
import ShowComponent from '@/components/courses/ShowComponent';

/* components */

export default {
    name:'ShowView',
    components:{
      ShowComponent
    },

    /* data */

    data(){
      return {
        course:{}
      }
    },

    /* methods */

    methods:{
      getCourse(){
        this.axios.get('https://cursos-prueba.tk/api/courses/'+this.$route.params.id)
        .then(response => {
          this.course = response.data
          console.log(this.course);
        })
        .catch(err => console.log(err));
      }
    },

    /* created */

    created(){
      this.getCourse()
    }
}
</script>

<style>

</style>