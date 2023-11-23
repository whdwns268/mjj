import React, { useEffect , useState } from "react";
import moduleStyle from "./Contact.module.css"
import emailjs from 'emailjs-com';

function Contact() {

    const [email, setEmail] = useState(""); // 이메일 값을 상태로 관리
    const [isValidEmail, setIsValidEmail] = useState(true); // 유효성 상태를 상태로 관리
    const [mailindex, setmailindex] = useState("");
    useEffect(() => {

        setTimeout(() => {
            const contact = document.getElementById("contact");
            contact.style.opacity = 1;
            contact.style.left = "0px";

            
        }, 500);

        setTimeout(() => {
            const watching = document.getElementById("watching");
            watching.style.opacity = 1;
            watching.style.left = "150px";
        }, 700);
    }, [])

    

    function validateEmail() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = regex.test(email);
        setIsValidEmail(isValid); // 유효성 여부를 상태에 반영
        const emailck = document.getElementById("emailck");
        if(isValidEmail==true){
            
            if(mailindex==""){
                alert("메일내용을 입력해주세요");
            }else{
                emailjs.init('XOEG4uy9EXRIu-w87');
                emailjs.sendForm('service_ojsc3na', 'template_am1czr9', '#contact-form')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    emailck.style.opacity = 1;
                    emailck.style.top = "-22px";
                    setTimeout(() => {
                    emailck.style.opacity = 0;
                    emailck.style.top = "10px";
                }, (error) => {
                    console.error('FAILED...', error);
                    alert("문제가 발생하였습니다. 다시 시도해주세요");
                });

                
                }, 1000);
            }
            
        }else{
            emailck.style.opacity = 1;
            emailck.style.top = "-22px";
            setTimeout(() => {
                emailck.style.opacity = 0;
                emailck.style.top = "10px";
                }, 1000);
        }
        
        
    }

    return (
       
        <div className={moduleStyle.contact}>
            <form id="contact-form">
            <div className={moduleStyle.contact_divbox}>
                <div id="contact">CONTACT !</div>
                <span>
                    <ul className={moduleStyle.contact_mailul}>
                        <li>
                            <textarea name="emailindex" placeholder="Message" onChange={(e) => setmailindex(e.target.value)}></textarea>
                            {isValidEmail
                            ? <span id="emailck"className={`${moduleStyle.emailyes} ${moduleStyle.emailck}`}>정상적으로 발송되었습니다.</span> 
                            : <span id="emailck"className={`${moduleStyle.emailno} ${moduleStyle.emailck}`}>이메일 주소가 정확한지 확인해주세요</span>}
                        </li>
                        <li>
                            <div>
                                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email Address" />
                                <div onClick={validateEmail}/>
                            </div>
                        </li>
                    </ul>
                </span>

                <span>
                    <ul className={moduleStyle.contact_myinfoul}>
                        <li><div /><img /><a>010.4425.6635</a></li>
                        <li><div /><img /><a>munjongjun@gmail.com</a></li>
                        <li><div /><img /><a>https://github.com/whdwns268</a></li>
                        <li><div /><img /><a>https://bruss0823.tistory.com</a></li>
                    </ul>
                </span>
                <div id="watching">Thank You for watching</div>
            </div>
            </form>
        </div>
    )
}

export default Contact;