import Image from "next/image"; // use <Image src={importedImage} alt="description" /> for images.
import { Head } from "next/head"

export default function Home() {
  return (
    <main className="m-3">
      <h1>Hello world</h1>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/demoForm">Form</a></li>
      </ul>
      
      
    </main>
  );
}
