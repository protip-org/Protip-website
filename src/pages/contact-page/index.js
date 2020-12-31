import React from "styled-components";
import { ContactDivContainer, ContactIframe } from "./style";

const ContactPage = () => (
    <ContactDivContainer>
        <ContactIframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfdCvjwu4bTH3vYnx6qNyxuE8NFey1_GqSVOEIwg4vevrmJ8A/viewform?embedded=true" 
            width="600" 
            height="600" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0">
            Loading…
        </ContactIframe>
    </ContactDivContainer>
);

export default ContactPage;