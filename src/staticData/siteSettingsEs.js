import logo from "@/public/assets/img/site-logo.svg";
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { SlGraduation } from "react-icons/sl";
import {
  FaRegFileAlt,
  FaRegEnvelope,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { LiaBlogSolid } from "react-icons/lia";
import { BiCommentDetail } from "react-icons/bi";
import { FaRegUser, FaYoutube } from "react-icons/fa6";
import { MdFormatListBulleted } from "react-icons/md";

const baseUrl =
  typeof window !== "undefined"
    ? window.location.origin
    : "https://rusmadrigal.com";

export const siteSettings = {
  logo: {
    image: logo?.src,
    alt: "Rus Madrigal",
    url: "/es-cr",
    text: "Rus Madrigal",
  },
  headersMenu: [
    {
      id: 1,
      title: "Inicio",
      selector: `${baseUrl}/es-cr/#inicio`,
      url: `${baseUrl}/es-cr`,
      Icon: <IoHomeOutline />,
      notVisibleRoutes: [],
    },
    {
      id: 2,
      title: "Acerca",
      selector: `${baseUrl}/es-cr/#acerca`,
      url: `${baseUrl}/es-cr`,
      Icon: <FaRegUser />,
      notVisibleRoutes: [],
    },
    {
      id: 3,
      title: "Servicios",
      selector: `${baseUrl}/es-cr/#servicios`, // Actualizado
      url: `${baseUrl}/es-cr`,
      Icon: <IoBriefcaseOutline />,
      notVisibleRoutes: [],
    },
    {
      id: 4,
      title: "https://rusmadrigal.com/es-cr/Skills",
      selector: `${baseUrl}/es-cr/#skill`, // Actualizado
      url: `${baseUrl}/es-cr`,
      Icon: <SlGraduation />,
      notVisibleRoutes: [],
    },
    {
      id: 5,
      title: "CV",
      selector: `${baseUrl}/es-cr/#resume`, // Actualizado
      url: `${baseUrl}/es-cr`,
      Icon: <FaRegFileAlt />,
      notVisibleRoutes: [],
    },
    {
      id: 8,
      title: "Opiniones",
      selector: `${baseUrl}/es-cr/#opiniones`, // Actualizado
      url: `${baseUrl}/es-cr`,
      Icon: <BiCommentDetail />,
      notVisibleRoutes: [],
    },
    {
      id: 9,
      title: "Contacto",
      selector: `${baseUrl}/es-cr/#contacto`, // Actualizado
      url: `${baseUrl}/es-cr`,
      Icon: <FaRegEnvelope />,
      notVisibleRoutes: [],
    },
  ],
  socialMedias: [
    {
      id: 1,
      name: "YouTube",
      tooltip: "YouTube",
      Icon: <FaYoutube />,
      url: "https://www.youtube.com/@rusmadrigal",
    },
    {
      id: 2,
      name: "Linkedin",
      tooltip: "Share with Linkedin",
      Icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/rusmadrigal/",
    },
  ],
  preloader: {
    image: logo?.src,
  },
};
