import { RightArrow } from "../../assets/Icons/RightArrow"


function About() {

  return (
    <div className="mt-20">
      <header className="px-8 mb-8 md:h-[60vh]">
        <h1 className="text-3xl font-normal text-white/90 mb-8 md:hidden lg:block lg:text-5xl max-w-[50ch]">
          We combine weather data, technology, and human insight to improve lives and businesses.
        </h1>
        <img src="src/assets/images/logo.png" 
          alt="logo" 
          className="w-full h-auto object-contain md:h-full"/>
      </header>
      
      

      <main>
        <section className="bg-white mt-4 pt-4 pb-20 lg:pt-40">
          <hr className="bg-orange-600 w-[80%] h-[.2rem] mx-auto mb-8"/>
          <figure className="mt-2 text-black px-8">
            <h2 className="text-3xl mb-4 lg:text-[2rem]">
              “Over our history, we have many examples of where we made a big difference, prevented injuries and the spread of disease, and saved lives outright.”
            </h2>
            <figcaption className="text-[.69rem] lg:text-base">
              Dr. Samuel Joseph, Founder & Executive Chairman
            </figcaption>
          </figure>
        </section>

        <section className="px-8 py-20">
          <div className="flex flex-col gap-12">
            <h3 className="text-orange-600">Weather Matters</h3>
            <p className="text-3xl md:text-4xl">
              We forecast for every longitude and latitude point on Earth with Superior Accuracy™.
            </p>
            <a href="#" className="text-orange-600 flex gap-2 items-center">Learn More <RightArrow size={18}/>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}


export default About