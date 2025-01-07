import { useState, useEffect } from 'react';
import Image from "next/image";
import Header from "@/components/header";
import Main from "@/components/Main";
import Footer from "@/components/footer";
import Link from 'next/link';
import CareerSection from '@/components/career-section'
import ClientStoriesSection from '@/components/client-stories-section'
import NewsSection from '@/components/news-section'



export default function Home() {
  return (
    <main>
      <Header/>
      <Main/>
      <NewsSection />
      <CareerSection />
      <ClientStoriesSection />
      <Footer/>
    </main>
  );
}
