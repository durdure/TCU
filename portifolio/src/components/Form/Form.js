import React, {useState} from "react";

import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormLabel,
	FormInputRow,
	FormMessage,
	FormButton,
	FormTitle,
} from './FormStyles';

import { Container } from "../../globalStyle";
import validateForm from './validateForm';


const Form = () => {  
    
    const [name, setName] = useState('');
    const [errors, setErrors] = useState(null);
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(null);


    const messageVariants = {
        hidden: { opacity: 0, y: -30 },
        animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
    }




    return (
    <FormSection>
        <FormRow>
            <FormColumn small >
                <FormTitle>
                    Sign Up
                </FormTitle>
                <FormWrapper>
                    <FormInputRow>
                        <FormInput>

                        </FormInput>
                    </FormInputRow>
                </FormWrapper>
            </FormColumn>
        </FormRow>
    </FormSection>
  )};