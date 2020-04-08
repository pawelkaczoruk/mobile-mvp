<template>
  <div class="contact-form">
      
    <h2>Get in touch with us!</h2>
    
    <form @submit="sendMail()">
      <label for="email">Email:</label>
      <input 
        v-model="email"
        id="email" 
        type="email">
      <p v-if="!isEmailValid">Please use correct Email format</p>


      <label for="message">Message:</label>
      <textarea 
        v-model="message" 
        id="message">
      </textarea>
      <p v-if="!isMessageValid">Your message is too short</p>
      
      <button 
        @touchstart="sendMail()"
        @click="sendMail()">Send
      </button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      email: '',
      message: '',
      isEmailValid: true,
      isMessageValid: true
    }
  },
  methods: {
    validateEmail(email) {
      // RFC 2822 email standard
      const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return reg.test(email);
    },

    sendMail() {
      event.preventDefault();

      this.isEmailValid = this.validateEmail(this.email)
      this.isMessageValid = this.message.length > 20;


      if(this.isEmailValid && this.isMessageValid) {
        this.email = '';
        this.message = '';

        console.log('send');
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.contact-form {
  padding: 1.5rem;
}

h2 {
  font-size: 1.35rem;
}

form {
  min-height: 70%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.1rem;
  }

  button, input, textarea {
    border: none;
    border-radius: .4rem;
    font-size: 1rem;
    color: black;
  }

  input, textarea {
    margin-top: .8rem;
    padding: .8rem .5rem;
  }

  label[for="message"], button {
    margin-top: 2rem;
  }

  input {
    min-height: 3rem;
  }

  textarea {
    min-height: 8rem;
  }

  button {
    height: 3rem;
    font-weight: bold;
    background: var(--light-blue);
    outline: none;
  }

  p {
    margin-top: .5rem;
    font-size: .8rem;
    color: rgb(255, 97, 97);
  }
}

</style>