import Image from "next/image";
import Link from "next/link";
import { Card } from "react-bootstrap";
import Bio from "@/components/Bio";
import Header from "@/components/Home";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
    <div>
      <section id="home">
        <Header></Header>
      </section>

      <section id="portfolio">
        <Projects></Projects>
      </section>

      <section id="biography">
        <Bio></Bio>
      </section>
    </div>
    </>
  )
}
