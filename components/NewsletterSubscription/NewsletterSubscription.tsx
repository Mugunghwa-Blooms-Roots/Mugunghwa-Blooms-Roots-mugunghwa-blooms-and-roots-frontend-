'use client';

import { useState } from 'react';
import styles from './NewsletterSubscription.module.css';
import Image from 'next/image';

export default function NewsletterSubscription() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log('Новий підписник маркетплейсу "Mugunghwa Roots & Blooms":', email);

        setEmail('test_email@gmail.com');

    alert('Щиро дякуємо Вам за підписку на наш онлайн-магазтн "Mugunghwa Roots & Blooms"! Раді вітати Вас в нашому дружньому ком`юніті!');
    }

    return (
        <>
            <div className={styles.newsletterSubscriptionSection}>
                <div className={styles.newsletterSubscriptionContainer}>
                    <div className={styles.newsletterSubscriptionContent}>
                        <h2 className={styles.newsletterSubscriptionTitle}>
                            Будьте в курсі свіжих акцій та новин Mugunghwa Roots & Blooms!
                        </h2>
                        <p className={styles.newsletterSubscriptionDescription}>
                            Першими дізнавайтеся про новини, акції, знижки та спеціальні пропозиції на аграрну продукцію для Вас!
                        </p>
                    </div>
                    <form
                        className={styles.newsletterSubscriptionForm}
                        onSubmit={handleSubmit}
                    >
                        <input 
                            type="email"
                            className={styles.newsletterSubscriptionFormInput}
                            placeholder="Будь ласка, введіть Вашу електронну адресу..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-label="Вашу електронна адреса"                          
                        />
                        <button
                            type="submit"
                            className={styles.newsletterSubscriptionFormButton}
                            style={{ position: 'relative' }}
                        >
                            <Image src="https://i.ibb.co/gZVRmBwz/Gemini-Generated-Image-4llqku4llqku4llq-removebg-preview.png" width={25} height={25} style={{ position: 'absolute', top: '14px', left: '18px' }} alt="Subscription Icon" />
                            &nbsp;&nbsp;&nbsp; Підписатися на новини
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
} 