"use client"

import React from 'react'
import styles from "../styles/FAQ.module.scss";

export default function FAQ({ id, question, answer, handelClick }) {
    const handelevent = (e) => {
        handelClick(id);
    };

    return (
        <div className={styles.faqContainer} key={id}>
            <details className={styles.details} onClick={handelevent} data-id={id}>
                <summary className={styles.summary}>
                    <span className={styles.question}>{ question }</span>
                    <span className={styles.icon}>
                        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1 .799l4 4 4-4"
                            stroke="var(--primary2)"
                            strokeWidth="2"
                            fill="none"
                            fillRule="evenodd"
                        />
                        </svg>
                    </span>
                </summary>
                <p className={styles.answer}>{ answer }</p>
            </details>
        </div>
    )
}
