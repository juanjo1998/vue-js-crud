<template>
  <div>
     <!-- create course -->
    <div>
      <router-link :to="{name:'courseCreate'}">
        <button class="btn btn-success float-end mb-3">Create</button>
      </router-link>
    </div>

    <table class="table table-striped border p-3 shadow">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="course in courses" :key="course.id">
              <th scope="row">{{course.id}}</th>
              <td>{{course.title}}</td>
              <td>{{course.description}}</td>
              <td>{{course.category_id}}</td>
              <td>
                <router-link :to="{name:'course',params:{id:course.id}}">
                  <button class="btn btn-primary" style="margin-right:5px;">Show</button>
                </router-link>      
                <router-link :to="{name:'courseEdit',params:{id:course.id}}">
                    <button class="btn btn-warning" style="margin-right:5px;">Edit</button>
                </router-link>              
                <button class="btn btn-danger" @click="$emit('deleteCourse',course.id)">Delete</button>
              </td>
            </tr>        
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name:'TableComponent',

    props:['courses']
}
</script>

<style>

</style>