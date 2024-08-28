import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import {
  bmw,
  customer1,
  customer2,
  harley,
  harleyd,
  honda,
  kawasaki,
  mitsubishi,
  s3k,
  suzuki,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#sell-my-bike", label: "Sell My Bike" },
  { href: "#about-us", label: "About Us" },
  { href: "#contact-us", label: "Contact Us" },
];

export const brandsLogos = [
  { scr: bmw, alt: "bmw", width: 60 },
  { scr: harley, alt: "harley", width: 100 },
  { scr: honda, alt: "honda", width: 80 },
  { scr: harleyd, alt: "harley davidson", width: 80 },
  { scr: kawasaki, alt: "kawasaki", width: 80 },
  { scr: s3k, alt: "s3k", width: 80 },
  { scr: mitsubishi, alt: "mitsubishi", width: 100 },
  { scr: suzuki, alt: "suzuki", width: 100 },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext: "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
