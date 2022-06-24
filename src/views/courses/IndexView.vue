<template>
  <div class="container">
    <IndexComponent :courses="courses" @delete-course="deleteCourse"/>
  </div>
</template>

<script>

/* components */
import IndexComponent from '@/components/courses/IndexComponent.vue';

export default {
    name: "CoursesView",
    data() {
        return {
            title: "All Courses",
            /* courses */
            courses: null
        };
    },
    methods: {

        /* get course */

        getCourses() {
            this.axios.get("https://cursos-prueba.tk/api/courses")
            .then(response => {
                this.courses = response.data
                console.log(this.courses);
            })
            .catch(err => console.log(err));
        },

        /* delete course */
        
        deleteCourse(id){
            this.axios.delete("https://cursos-prueba.tk/api/courses/"+id)
            this.courses = this.courses.filter(course => course.id != id)
        }
    },
    created(){
        this.getCourses()
    },

    components: { IndexComponent }
}
</script>

<style>

</style>