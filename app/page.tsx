import { supabase } from '@/lib/supabase'
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import  Projects  from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default async function Home() {
  const { data: projects } = await supabase.from('projects').select('*')
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
