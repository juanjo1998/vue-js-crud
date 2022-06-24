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
        <div class="mb-3">
          <label for="category_id" class="form-label">Category</label>      
          <select class="form-select" name="category_id" id="category_id" v-model="course.category_id">
            <option value="" selected disabled>Select category</option>
            <option :value="category.id" v-for="category in categories" :key="category.id">
              {{category.name}}
            </option>
          </select>
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
          categories:[],
            course:[]   
        }
    },

    /* methods */

    methods:{

        /* get categories */

        getCategories(){
          this.axios.get('https://cursos-prueba.tk/api/categories')
          .then((response) => this.categories = response.data)
        },

        /* get course */
        getCourse(){
            this.axios.get('https://cursos-prueba.tk/api/courses/'+this.$route.params.id+'/?included=category')
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
        this.getCategories()
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