import React from "react";
import "./about.css";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="relative">
        <div className="stuck-grid">
          <div className="grid-item">Branding</div>
          <div className="grid-item">Graphic Design</div>
          <div className="grid-item">Web Development</div>
          <div className="grid-item">Web Design</div>
          <div className="grid-item">Digital Marketing</div>
          <div className="grid-item">3D Design</div>
          <div className="grid-item">App Development</div>
          <div className="grid-item">Branding</div>
          <div className="grid-item">Graphic Design</div>
          <div className="grid-item">Web Development</div>

          <div className="grid-item special">
            <b>About EBA</b>
          </div>

          <div className="grid-item">Web Design</div>
          <div className="grid-item">Digital Marketing</div>
          <div className="grid-item">3D Design</div>
          <div className="grid-item">App Development</div>
          <div className="grid-item">Branding</div>
          <div className="grid-item">Graphic Design</div>
          <div className="grid-item">Web Development</div>
          <div className="grid-item">Web Design</div>
          <div className="grid-item">Digital Marketing</div>
          <div className="grid-item">3D Design</div>
          <div className="grid-item">App Development</div>
          <div className="grid-item">Branding</div>
          <div className="grid-item">Graphic Design</div>
          <div className="grid-item">Web Development</div>
          <div className="grid-item">Web Design</div>
          <div className="grid-item">Digital Marketing</div>
          <div className="grid-item">3D Design</div>
          <div className="grid-item">App Development</div>
          <div className="grid-item">Branding</div>
          <div className="grid-item">Graphic Design</div>
          <div className="grid-item">Web Development</div>
          <div className="grid-item">Web Design</div>
          <div className="grid-item">3D Design</div>
          <div className="grid-item">Digital Marketing</div>
          <div className="grid-item">Web Development</div>
          <div className="grid-item">Branding</div>
          <div className="grid-item">Graphic Design</div>
          <div className="grid-item">Web Development</div>
          <div className="grid-item">Web Design</div>
          <div className="grid-item">Digital Marketing</div>
          <div className="grid-item">3D Design</div>
          <div className="grid-item">App Development</div>
        </div>
        {/* Gradient Fade at Bottom */
        /*  fades into dark background*/}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0e0b23]" />
      </div>
      <div className="flex flex-col items-center gap-4 md:gap-8">
        <div className="flex flex-col md:flex-row gap-5 items-center justify-around px-8">
          <div className="flex flex-col gap-2">
            <p>Our Story</p>
            <h2 className="text-2xl md:text-5xl font-bold max-w-2xl text-pink-300">
              Designing Innovation with Precision and Purpose
            </h2>
          </div>
          <div className="">
            <p className="max-w-xl">
              Epansion Branding Agency is a full-service branding agency
              dedicated to creating powerful and memorable brand experiences. We
              specialize in branding & identity, web design and development,
              graphic design, digital marketing, 3D design, and mobile app
              design & development. By blending creativity with technology and
              strategy, we help businesses stand out, connect with their
              audience, and grow in today’s digital world.
            </p>
          </div>
        </div>
        <div className="relative w-full h-[100px] md:h-[300px] flex justify-center">
          <Image
            src="/homeWidget.jpg"
            alt="image"
            width={1080}
            height={600}
            className="object-cover rounded-4xl w-[90%] h-[200px] md:w-3/4 md:h-[600px] mx-10 md:mx-auto"
          />
        </div>
        <div className="flex flex-col items-center bg-pink-50/80 text-purple-950 pt-20 md:pt-70 w-full">
          <div className="flex flex-col md:flex-row justify-around p-10 mb-10 w-full">
            <div className="flex items-center gap-4 font-bold">
              <p className="text-5xl md:text-7xl">3</p>
              <p>Years of experience</p>
            </div>
            <div className="flex items-center gap-4 font-bold">
              <p className="text-5xl md:text-7xl">6</p>
              <p>Services We Excel In</p>
            </div>
            <div className="flex items-center gap-4 font-bold">
              <p className="text-5xl md:text-7xl">3</p>
              <p>Different Countries</p>
            </div>
          </div>
          <hr className="w-3/4 mx-auto border-1" />
          <div className="flex items-center justify-around w-full py-10">
            <div className="flex flex-col gap-5">
              <h2 className="text-5xl font-bold">Our Philosophy</h2>
              <p className="text-lg max-w-2xl">
                At EBA, we believe powerful brands are built on purpose,
                creativity, and strategy. We design with precision and
                intention, blending innovation with technology to craft
                experiences that inspire trust, connect with audiences, and
                drive growth.
              </p>
            </div>
            {/*in the website the image smaller in height I want the height to be longer*/}
            <Image
              src="/p.jpg"
              alt="img"
              width="320"
              height="300"
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="flex items-center justify-around w-full">
          <div className="flex flex-col">
            <h2 className="font-bold text-5xl">Meet Our Founder</h2>
            <Image src="/founder.jpg" alt="Ahmad" width="200" height="100" />
          </div>
          <div>
            <p className="max-w-xl">
              Behind EBA is a vision driven by creativity, innovation, and
              purpose. Our founder, Ahmad Sudik, established EBA with the belief
              that branding is more than design—it’s about building meaningful
              connections and unforgettable experiences. With a passion for
              blending artistry and strategy, Ahmad Sudik set out to create an
              agency where ideas transform into powerful brand stories. Today,
              that vision continues to guide everything we do, inspiring our
              team to push boundaries, embrace innovation, and deliver work that
              makes a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
