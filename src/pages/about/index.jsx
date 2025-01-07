import React from 'react'
import Head from 'next/head'
import styles from './About.module.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import MobileNav from '@/components/mobile-nav'

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us | VBSB Digital Solutions</title>
        <meta 
          name="description" 
          content="A leading professional services firm providing digital solutions across industries and sectors."
        />
      </Head>
      <Header />

      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <h1>Welcome to VBSB Digital Solutions</h1>
        </div>
      </div>

      <div className={styles.navigationBar}>
        <div className={styles.container}>
          <nav className={styles.subNav}>
            <a href="#our-presence">Our Presence</a>
            <a href="#who-we-are">Who We Are</a>
            <a href="#global-network">Global Network</a>
            <a href="#awards">Awards & Recognition</a>
          </nav>
        </div>
      </div>

      <div className={styles.container}>
        <section id="who-we-are" className={styles.section}>
          <h2>How we work matters as much as what we do</h2>
          <h3>We are VBSB Digital Solutions</h3>
          <p>
            A member of the global digital solutions network, VBSB Digital Solutions is a leading professional services firm 
            in the technology sector. We work with businesses and organizations across industries, 
            providing innovative digital solutions, consulting services, and technology transformation expertise.
          </p>
        </section>

        <section id="our-presence" className={styles.section}>
          <h2>Our Presence</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>15+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className={styles.statCard}>
              <h3>1000+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className={styles.statCard}>
              <h3>50+</h3>
              <p>Global Partners</p>
            </div>
            <div className={styles.statCard}>
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </section>

        <section id="global-network" className={styles.section}>
          <h2>Our Global Network</h2>
          <p>
            With a presence across major technology hubs and a network of global partners, 
            we deliver world-class digital solutions while maintaining local expertise and understanding.
          </p>
        </section>

        <section id="awards" className={styles.section}>
          <h2>Awards & Recognition</h2>
          <div className={styles.awardsGrid}>
            <div className={styles.awardCard}>
              <h3>Innovation Excellence</h3>
              <p>Technology Innovation Awards 2023</p>
            </div>
            <div className={styles.awardCard}>
              <h3>Digital Transformation</h3>
              <p>Best Digital Solutions Provider 2023</p>
            </div>
            <div className={styles.awardCard}>
              <h3>Client Satisfaction</h3>
              <p>Customer Excellence Award 2023</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <MobileNav />
    </>
  )
}

export default AboutPage