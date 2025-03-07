"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function History() {
  return (
    <>
      <div className="pt-48 ">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-black text-4xl college-block text-center"
        >
          History
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black h-[3px] w-32 mx-auto mt-2"
        ></motion.div>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-10"
      >
        <div className=" w-11/12 mx-auto">
          <Image
            src="/Img/Good_Vibes_New_Shop.png"
            width={500}
            height={300}
            loading="lazy"
            alt="Good Vibes New Shop"
            className="block mx-auto rounded-xl"
          />
        </div>
        <div className="text-center w-11/12 mx-auto mt-8">
          {" "}
          {/* Added margin for spacing */}
          <h1 className="text-black text-3xl college-block">Our Beginnings</h1>
          <p className="lg:w-1/2 mx-auto mt-4 text-lg">
            Michael Foxx began his journey with Halweg Smooth Move Concrete
            Pumping in the winter of 1995. By 1998, he had taken on a management
            role, helping shape the company's future. In 2013, Michael and
            Stephanie Foxx officially purchased the business, rebranding it as
            Smooth Move Concrete Pumping by removing "Halweg" from the name. A
            decade later, in 2023, the company relocated from Eugene, OR, to
            Creswell, OR—a move that immediately felt like home.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid lg:grid-cols-2 grid-cols-1 pt-20 w-11/12  lg:w-10/12 mx-auto"
      >
        <div className="col-span-1 order-1 pb-5 mx-5 lg:pb-0">
          <h1 className="text-black text-3xl college-block text-center">
            Small Family Business
          </h1>
          <p className=" text-center mx-auto mt-4 text-lg">
            In 2024, Smooth Move Concrete Pumping reached a new milestone as a
            true small family business—our first job with two generations of the
            Foxx family working side by side. Ryan, Riley, and Michael marked a
            proud moment in our company’s history, a testament to the dedication
            and hard work that has built this business. Watching the next
            generation step in and carry on our commitment to quality and
            reliability is incredibly rewarding. As we continue to grow, we
            remain focused on family values, trust, and delivering the best
            service to our customers.
          </p>
        </div>
        <div className="col-span-1 order-2">
          <Image
            src="/Img/Foxx_Boys.jpg"
            width={500}
            height={300}
            loading="lazy"
            alt="Good Vibes New Shop"
            className="block mx-auto h-96 object-cover rounded-xl"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid lg:grid-cols-2 grid-cols-1 pt-14 w-11/12 lg:w-10/12 pb-20 mx-auto"
      >
        <div className="col-span-1 order-2 lg:order-1 pt-5 lg:pt-0">
          <Image
            src="/Img/Brooke_and_Ryan.jpg"
            width={500}
            height={300}
            loading="lazy"
            alt="Good Vibes New Shop"
            className="block mx-auto h-96 object-cover rounded-xl"
          />
        </div>
        <div className="col-span-1 order-1 mx-5 my-auto">
          <p className="lg:w-11/12 text-center mx-auto mt-4 text-lg">
            Meanwhile, Brooke has stepped in to run the office, bringing a
            wealth of experience, trust, and a deep sense of commitment to the
            team. With her at the helm, the office has become a place where
            efficiency and care go hand in hand. Brooke and Ryan have been
            friends since grade school, which adds a layer of trust and
            familiarity that’s hard to beat. This strong foundation reinforces
            our belief in surrounding ourselves with people we trust, not just
            professionally but personally as well. At Smooth Move Concrete
            Pumping, family and integrity are at the core of everything we do,
            and we are proud to have built a team that shares these values.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-10"
      >
        <div className=" w-11/12 mx-auto">
          <Image
            src="/Img/Mike_Paul_Steve.png"
            width={500}
            height={300}
            loading="lazy"
            alt="Good Vibes New Shop"
            className="block mx-auto rounded-xl"
          />
        </div>
        <div className="text-center w-11/12 mx-auto mt-8">
          {" "}
          {/* Added margin for spacing */}
          <h1 className="text-black text-3xl college-block">Team Excellence</h1>
          <p className="lg:w-1/2 mx-auto mt-4 text-lg">
            At Smooth Move Concrete Pumping, safety is always our top priority.
            We understand that the success of every job depends on the
            reliability of our equipment, which is why we ensure our pumps are
            kept clean and in peak condition. This proactive approach allows us
            to be ready for even the longest days and the most demanding
            projects. Our team is highly focused on safety, maintenance, and
            efficiency, ensuring that we deliver superior customer service every
            time. We take pride in offering our clients peace of mind, knowing
            that we prioritize both their well-being and the success of their
            projects.
          </p>
        </div>
      </motion.div>
    </>
  );
}
