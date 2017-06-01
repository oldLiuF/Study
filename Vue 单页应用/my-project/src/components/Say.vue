<template>
  <div class="say">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'say',
  data () {
    return {
      msg: 'xxxx'
    }
  },
  beforeRouteEnter (to, form, next) {
    next(vm => {
      console.log(to.query.msg + vm.msg)
    })
  }
}
</script>

<style scope>
.say {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: red;
}
</style>
