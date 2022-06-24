<template>
  <div class="form container border p-3">    
    <form @submit.prevent="save">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" id="title" placeholder="Enter title" v-model="course.title">
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <input type="text" class="form-control" id="description" placeholder="Enter description" v-model="course.description">
        </div>      
        <button type="submit" class="btn btn-success w-100">Save</button>
    </form>
  </div>
</template>

<script>
export default {
    name:'CreateView',

    /* data */

    data(){
      return {
        course:{
          title:'',
          description:'',
          category_id:2
        },  
      }
    },

    /* methods */

    methods:{
      save(){
        this.axios.post('https://cursos-prueba.tk/api/courses/',this.course)
        .then(()=> {
          /* clean */

          this.course = {
            title:'',
            description:'',
            category_id:2
          }
        })
        .catch(err => console.log(err));
      }
    }
}
</script>

<style scoped>
.form{
  text-align: start; 
  width: 500px;
}
</style>