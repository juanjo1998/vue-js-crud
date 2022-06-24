<template>
  <div>
     <div class="card" style="width: 18rem;">    
        <div class="card-body">
          <h5 class="card-title">{{course.title}}</h5>
          <p class="card-text">{{course.description}}</p>
          <a href="#" class="btn btn-primary">View</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'ShowComponent',
    props:['course']
}
</script>

<style>

</style>