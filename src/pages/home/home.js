import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Hero from '../../components/hero/hero'
import Infos from '../../components/infos/infos'
import Events from '../../components/events/events'
import Faq from '../../components/faq/faq'
import Form from '../../components/form/form'
import Footer from '../../components/footer/footer'
export default function home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Infos />
        <Events />
        <Faq />
        <Form />
        <Footer/>
    </div>
  )
}
