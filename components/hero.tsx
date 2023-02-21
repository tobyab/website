import Image from "next/image"
import hero from "../public/hero.png"
import { age } from "../utils/time"

export default function Hero() {
    return (
        <div className="lg:flex md:mt-16 mb-64">
            <div className="flex-col space-y-2 lg:pt-16 pt-24 relative">
                <Image
                    src={hero}
                    className="rounded-lg"
                    alt="Toby standing in front Apple Park"
                    priority
                />
                <div className="lg:text-white lg:bottom-16 lg:left-16 lg:absolute w-full pt-8">
                    <p className="text-xl">Hey there, I&apos;m</p>
                    <h1 className="text-6xl font-bold my-2">Toby Brown!</h1>
                    <p className="text-xl">A {age} year old full stack web developer.</p>
                </div>
            </div>
        </div>
    )
}
