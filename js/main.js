const { createApp } = Vue
createApp({
  data(){
      return {
          randomMail: []    
      }
  },
  created(){
  },
  methods:{
      generate() {
          this.randomMail = [];
          this.count = 0
          for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
              .then((email) => {
                this.randomMail.push(email.data.response);
                if (this.randomMail.length === 10) {
                  this.count=10;
                }
              })
          }
      }
  }     
  }).mount('#app')


  

  
