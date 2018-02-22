<script>
import { mapActions } from 'vuex'
export default {
  data () {
    this.loginOut()
  },
  computed: {
    ...mapActions({
      UserLogout: 'UserLogout'
    })
  },
  methods: {
    loginOut () {
      this.$store.dispatch('UserLogout', this.user)
    }
  }
}
</script>
