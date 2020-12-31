import React from "styled-components";
import { ContactDivContainer, ContactIframe } from "./style";

const ContactPage = () => (
    <ContactDivContainer>
        <ContactIframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSem5lNNgs6YY3tBWLDaQg9UMquSo4HeV4oxq6spq2RA-kwKqg/viewform?embedded=true" 
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