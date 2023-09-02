import {Hero, Footer, CustomerReviews, PopularProducts, Services, SpecialOffer, SuperQuality, Subscribe} from './sections'
import Nav from './components/Nav'

export default function App() {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews/>
      </section>
      <section className="padding">
        <Subscribe/>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}