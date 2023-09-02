import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section className="flex-wrap justify-center flex gap-9 max-container">
      {services.map((service) => (
        <ServiceCard 
          key={service.label}
          {...service}
        />
      ))}
    </section>
  )
}

export default Services