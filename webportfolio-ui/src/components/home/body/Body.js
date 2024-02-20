import React from 'react';
import styles from './Body.module.css'; 

const Body = () => {
  return (
      <div className={styles.contentContainer}>
            <h1>Welcome to <strong>Tangoseed</strong></h1>
            <p>Where Artificial Intelligence meets innovation, transforming Digital Marketing, Finance, and Healthcare into realms of unprecedented growth and efficiency.</p>

            <h2>Our Domains of Excellence</h2>
            <ul>
                <li>
                    <h3><strong>Digital Marketing</strong>: Crafting Future-Ready Strategies</h3>
                    <p>Revolutionize your marketing efforts with AI-driven solutions that offer:</p>
                    <ul>
                        <li>Enhanced customer insights</li>
                        <li>Targeted content delivery</li>
                        <li>Optimized advertising campaigns</li>
                    </ul>
                </li>
                <li>
                    <h3><strong>Finance</strong>: Empowering Financial Decisions</h3>
                    <p>Transform the finance sector with AI that enables:</p>
                    <ul>
                        <li>Risk assessment and management</li>
                        <li>Algorithmic trading</li>
                        <li>Fraud detection and prevention</li>
                    </ul>
                </li>
                <li>
                    <h3><strong>Healthcare</strong>: Innovating Patient Care</h3>
                    <p>Our AI solutions in Healthcare promote:</p>
                    <ul>
                        <li>Diagnostic accuracy</li>
                        <li>Treatment personalization</li>
                        <li>Operational efficiency</li>
                    </ul>
                </li>
            </ul>

            <p>The future is intelligent, innovative, and inspired by you.</p>
            
      </div>


  );
}

export default Body;