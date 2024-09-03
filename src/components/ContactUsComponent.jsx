function ContactUs() {
    return (
      <div className="contactUs">
        <div className="allSectionTitle">
          <h1>Contact</h1>
          <p>I’m currently available for freelance work</p>
        </div>
  
        <form className="formGroup">
          <h1>Send Me A Message</h1>
  
          <label>Your name * <input type="text" name='yourName' placeholder='Enter your name'/></label>
          <label>Your email * <input type="text" name='yourEmail' placeholder='Enter your email'/></label>
          <label>Your message * <input type="text" name='yourMessage' placeholder='Enter your needs'/></label>
  
          <button>Send Message <img src="./assets/images/contactUs/sendMessage.png" alt="" /></button>
        </form>
      </div>
    )
}

export default ContactUs