import React from "react";

class Contact extends React.Component {
  render() {
    return (
    
        <section class="contact-us">
    <div class="contact-container">
        <h2>Contact Us</h2>
        <p>We love to hear from our food enthusiasts! Whether you have a question, feedback, or just want to share your culinary experiences, feel free to reach out.</p>
        
        <div class="contact-details">
            <div class="detail-item">
                <img src="https://imgs.search.brave.com/-IcfvsgAvfsnnqBmHd_f5wILoq2K3mkU5fwy-dUsg1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9nb29nbGUt/aWNvbi0yNTZ4MjU2/LTY3cWdvdTZiLnBu/Zw" alt="Email Icon" class="icon"></img>
                <h3>Email Us</h3>
                <p>For inquiries, recipes, or collaborations, drop us an email at:</p>
                <a href="mailto:info@foodwebsite.com">info@foodwebsite.com</a>
            </div>

            <div class="detail-item">
                <img src="https://imgs.search.brave.com/dbL7QEH-TUQtrSjrWxeOCkNBhZ_o982ro0Pbx7DTDbs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzExLzIyLzI2LzMz/LzM2MF9GXzExMjIy/NjMzNDJfSXp5WFlR/ZG1XVGl1OWd6WUV0/WXRnWkNoZmNtQ3dE/Z3kuanBn" alt="Phone Icon" class="icon"></img>
                <h3>Call Us</h3>
                <p>Have a quick question? Give us a call:</p>
                <p>+1 234 567 890</p>
            </div>

            <div class="detail-item">
                <img src="https://imgs.search.brave.com/oS0f9ne_u_iCIAPyepvKsSEaxmndQeJJpepoEKRGSsc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzY3Lzg5LzMw/LzM2MF9GXzk2Nzg5/MzAzNV9OSWhsbGQ2/aUpMdnk3VU55b09x/RnA1NXZEcDRSY0J1/TC5qcGc" alt="Location Icon" class="icon"></img>
                <h3>Visit Us</h3>
                <p>If you're in the area, stop by for a chat!</p>
                <p>123 Culinary Lane, Food City, FC 12345</p>
            </div>
        </div>

        <form class="contact-form">
            <h3>Send Us a Message</h3>
            <input type="text" placeholder="Your Name" required></input>
            <input type="email" placeholder="Your Email" required></input>
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
</section>

      
    );
  }
}
export default Contact;
