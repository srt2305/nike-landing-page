import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="flex flex-col relative xl:w-2/5 w-full items-start max-xl:padding-x pt-28">
        <p className="text-coral-red font-montserrat text-xl">Our Summer collections</p>
        <h1 className="text-black mt-10 text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-slate-gray mt-6 font-montserrat text-lg leading-8 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quailty comfort, and innovation for your active life.
        </p>
        <Button 
          label="Shop now" 
          iconURL={arrowRight}
        />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-bold text-4xl font-palanquin">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">{stat.label}</p>
            </div>
          ))}
        </div>  
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img 
          src={bigShoeImg} 
          alt='shoe collection'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard 
                imgURL={shoe}
                changeBigShoeImg=
                {(shoe) => setBigShoeImg(shoe)}
                bigShoeImg= {bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero