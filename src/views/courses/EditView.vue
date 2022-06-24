<template>
  <div class="form container border p-3">    
    <form @submit.prevent="updateCourse">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" id="title" placeholder="Enter title" v-model="course.title">
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <input type="text" class="form-control" id="description" placeholder="Enter description" v-model="course.description">
        </div>      
        <button type="submit" class="btn btn-warning w-100">Update</button>
    </form>
  </div>
</template>

<script>
export default {
    name:'EditView',
    
    /* data */

    data(){
        return {
            course:{
                title:'',
                description:'',
                category_id:2
            }            
        }
    },

    /* methods */

    methods:{

        /* get course */
        getCourse(){
            this.axios.get('https://cursos-prueba.tk/api/courses/'+this.$route.params.id)
            .then(response => this.course = response.data)
        },

        /* update course */

        updateCourse(){
            this.axios.put('https://cursos-prueba.tk/api/courses/'+this.$route.params.id,this.course)
            .then(() => this.$router.push({name:'courses'}))
        }
    },

    /* life cycles */

    created(){
        this.getCourse()
    }
}
</script>

<style>
.form{
  text-align: start; 
  width: 500px;
}
</style>