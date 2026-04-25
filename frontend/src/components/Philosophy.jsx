import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80" 
                alt="Chef preparing a dish" 
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-8 border-sage opacity-50 m-6 rounded-lg pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-sage font-medium tracking-widest uppercase mb-2 text-sm">Our Culinary Philosophy</h4>
            <h2 className="text-4xl md:text-5xl text-charcoal mb-6 leading-tight">Tradition meets modern elegance.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At The Lattice Bistro, we believe that dining is more than just a meal; it is an experience that engages all the senses. Our culinary team carefully selects the finest local ingredients to craft dishes that honor traditional techniques while embracing modern flavors.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every plate that leaves our kitchen is a testament to our passion for gastronomy. We invite you to join us in a warm, elegantly designed space where every detail is curated for your pleasure.
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Signature_of_Gordon_Ramsay.svg/512px-Signature_of_Gordon_Ramsay.svg.png?20200508000000" alt="Chef Signature" loading="lazy" className="h-16 mx-auto lg:mx-0 opacity-70" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
