import React from 'react';

const consClassName = ({
  classNameSeparatorTop: "text-orange-300",
  classNameSeparatorBotton: "text-orange-300",
  classNameBg: "bg-gradient-to-b from-indigo-100 to-[#DDE5B6]..." //bg-gradient-to-r from-[#DDE5B6] via-[#DDE5B6] to-[#DDE5B6]"bg-gradient-to-r from-white via-blue-50 to-white"
});

const Hero: React.FC = () => {
  return (
    <>
      <section className={`${consClassName.classNameBg} w-full py-12 min-h-30/100`}>
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 pt-20 mt-20">
            <div className="w-full md:w-1/2 text-center">
              <h4 className="text-landing-title">Ganadería Fam Picado</h4>
              <h6 className="text-landing-subtitle uppercase">
                De la tierra al plato
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Hero;