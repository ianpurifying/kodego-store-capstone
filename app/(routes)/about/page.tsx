"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

import Container from '@/components/ui/container';

export const revalidate = 0;

const AboutPage = () => {

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">About</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              <p className="text-neutral-500">Welcome to EdgeXtreme, your ultimate destination for weapon enthusiasts and collectors! At EdgeXtreme, we take pride in curating an exceptional collection of weapons that embodies the perfect blend of craftsmanship, power, and precision. Whether you are a seasoned collector or a passionate novice, our store offers an unparalleled selection that will undoubtedly fuel your passion for arms and armaments.<br/>

            Our Legacy:
            EdgeXtreme was born out of a profound love for weaponry and a deep appreciation for the artistry that goes into their creation. Established by a group of dedicated weapon aficionados, our store has quickly become a beacon for those seeking premium firearms, bladed weapons, and tactical gear. Our team of experts has scoured the globe to bring you an exquisite assortment that represents both historical significance and cutting-edge technology.<br/>

            The Collection:
            Step into EdgeXtreme, and you will be greeted with a breathtaking array of weapons that span various eras and cultures. From ancient swords that whisper tales of battles long past to state-of-the-art firearms that redefine modern combat, our store houses an impressive range that caters to every collector&apos;s dream.<br/>

            Firearms: We offer an extensive selection of handguns, rifles, shotguns, and more. Each firearm has been meticulously inspected and sourced from reputable manufacturers, ensuring that you are getting the best of the best.<br/>

            Bladed Weapons: Discover the elegance and lethal beauty of our bladed weapons collection. From samurai katana to medieval broadswords, each blade showcases masterful craftsmanship and the rich history behind its design.<br/>

            Tactical Gear: In addition to our weapons, we provide a wide range of tactical gear and accessories to complement your collection. Holsters, scopes, sights, and other essentials are available to enhance your shooting experience.<br/>

            Our Commitment to Safety:
            At EdgeXtreme, we prioritize safety and responsible ownership above all else. Our knowledgeable staff is dedicated to guiding every customer through the process of selecting the right weapon and ensuring they understand the importance of proper handling and maintenance. We strictly adhere to all local and federal regulations, making sure that our customers have a seamless and legal buying experience.<br/>

            Community and Events:
            We believe in fostering a vibrant and supportive community of weapon enthusiasts. EdgeXtreme hosts regular events, seminars, and workshops where like-minded individuals can come together, share their knowledge, and immerse themselves in the world of weaponry.<br/>

            Visit EdgeXtreme today, where passion and quality converge, and embark on a journey through the captivating realm of weaponry. Whether you seek to expand your collection, find the perfect piece for self-defense, or simply admire the artistry behind these masterpieces, EdgeXtreme is your premier destination. Embrace the edge of extreme weaponry!<br/></p>
            <div className="flex items-center rounded-full bg-green py-8 gap-x-4" >
                <Link href="https://web.facebook.com/ian.purificacion.798" className="ml-4 flex lg:ml-0 gap-x-2">
                    <Facebook />
                </Link>
                <Link href="https://twitter.com/shittymarimo002" className="ml-4 flex lg:ml-0 gap-x-2">
                    <Twitter />
                </Link>
                <Link href="https://www.linkedin.com/in/ian-purificacion-752685237/" className="ml-4 flex lg:ml-0 gap-x-2">
                    <Linkedin />
                </Link>
                <Link href="https://mail.google.com/mail/u/0/#inbox" className="ml-4 flex lg:ml-0 gap-x-2">
                    <Mail />
                </Link>
            </div>
            </div>
            <div className="lg:col-span-5">
                <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                    <Image src="/ghost1.jpg" alt="Soldier" width={500} height={1} style={{ borderRadius: '20px' }} />
                </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
};

export default AboutPage;