import { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import AntMan from '../../src/assets/Ant-man1.jpg';
import BlackPanther from '../../src/assets/panther1.jpg';
import CaptainAmerica from '../../src/assets/captain2.jpg';
import ClintBarton from '../../src/assets/clint1.jpg';
import DrStrange from '../../src/assets/dr-strange1.jpg';
import Hulk from '../../src/assets/hulk.jpg';
import IronMan from '../../src/assets/iron-man1.jpg';
import Loki from '../../src/assets/Loki.jpg';
import SpiderMan from '../../src/assets/Spider-man1.jpg';
import Thanos from '../../src/assets/thanos.jpg';
import Thor from '../../src/assets/thor1.jpg';


const Caracters = () => {
    const [index, setIndex] = useState(0);
    let Avengers = [
        {
            img: AntMan,
            name: "Ant Man",
            capability: "To become smaller as an ant",
            superPower: ["Shrinking", "Controlling ants", "Changing object size"],
            creature: "Human",
            costume: "Red",
            speciality: "Pym Particles",
            planet: "Earth"
        },
        {
            img: BlackPanther,
            name: "Black Panther",
            capability: "Superhuman strength, speed, agility",
            superPower: ["Enhanced senses", "Vibranium suit", "Master tactician"],
            creature: "Human",
            costume: "Black",
            speciality: "Vibranium technology",
            planet: "Earth"
        },
        {
            img: CaptainAmerica,
            name: "Captain America",
            capability: "Superhuman strength and agility",
            superPower: ["Super soldier serum", "Shield mastery", "Leadership"],
            creature: "Human",
            costume: "Blue, Red, and White",
            speciality: "Vibranium shield",
            planet: "Earth"
        },
        {
            img: ClintBarton,
            name: "Clint Barton (Hawkeye)",
            capability: "Master archer and marksman",
            superPower: ["Expert tactician", "Peak human condition", "Archery"],
            creature: "Human",
            costume: "Black and Purple",
            speciality: "Bow and arrow",
            planet: "Earth"
        },
        {
            img: DrStrange,
            name: "Doctor Strange",
            capability: "Master of mystic arts",
            superPower: ["Teleportation", "Time manipulation", "Dimensional travel"],
            creature: "Human",
            costume: "Blue and Red",
            speciality: "Mystic arts",
            planet: "Earth"
        },
        {
            img: Hulk,
            name: "Hulk",
            capability: "Incredible superhuman strength",
            superPower: ["Immense strength", "Durability", "Regeneration"],
            creature: "Human (Mutated)",
            costume: "Green",
            speciality: "Gamma radiation",
            planet: "Earth"
        },
        {
            img: IronMan,
            name: "Iron Man",
            capability: "Genius inventor and billionaire",
            superPower: ["Powered armor suit", "Flight", "Energy blasts"],
            creature: "Human",
            costume: "Red and Gold",
            speciality: "Powered suit",
            planet: "Earth"
        },
        {
            img: Loki,
            name: "Loki",
            capability: "Master of deception and magic",
            superPower: ["Illusion casting", "Shapeshifting", "Magic"],
            creature: "Asgardian",
            costume: "Green and Gold",
            speciality: "Deception and magic",
            planet: "Asgard"
        },
        {
            img: SpiderMan,
            name: "Spider-Man",
            capability: "Wall-crawling and web-shooting",
            superPower: ["Superhuman agility", "Spider sense", "Web-shooting"],
            creature: "Human (Mutated)",
            costume: "Red and Blue",
            speciality: "Web-slinging",
            planet: "Earth"
        },
        {
            img: Thanos,
            name: "Thanos",
            capability: "Superhuman strength and intellect",
            superPower: ["Immense strength", "Infinity Gauntlet powers"],
            creature: "Titan",
            costume: "Gold and Blue",
            speciality: "Infinity Gauntlet",
            planet: "Titan"
        },
        {
            img: Thor,
            name: "Thor",
            capability: "God of Thunder",
            superPower: ["Control over lightning", "Superhuman strength", "Mjolnir"],
            creature: "Asgardian",
            costume: "Red and Black",
            speciality: "Mjolnir (hammer)",
            planet: "Asgard"
        }
    ];
    console.log(Avengers[0].name);
    const handleNextImage = () => {
        // Increment index and reset to 0 when reaching the end of the array
        setIndex((prevIndex) => (prevIndex + 1) % Avengers.length);
    };

    const handlePrevImage = () => {
        setIndex((prevIndex) => (prevIndex - 1 + Avengers.length) % Avengers.length);
    };


    return (
        <div className='text-xl text-white md:w-[90%] md:h-[80%] lg:w-[60%] lg:h-[95%] flex items-center justify-between text-center m-auto flex-wrap p-3 gap-2'>
            <button onClick={handleNextImage} className='btn bg-zinc-700 rounded-full text-white p-3 transition-all hover:scale-105'>
                <FaArrowLeft />
            </button>
            <div className='flex items-center justify-center flex-col gap-5 w-[80%] h-[90%] m-auto bg-neutral-900 p-6 rounded-lg shadow-xl'>
                <img src={Avengers[index].img} alt="Avenger" className="w-[200px] h-[200px] rounded-full shadow-lg border-1" />
                <div className='w-full h-[60%] gap-5 flex items-start justify-normal p-5 bg-neutral-800 rounded-lg shadow-lg'>
                    <div className="w-1/4 h-full flex flex-col gap-3 text-left justify-center">
                        <h3 className='font-semibold'>Name:</h3>
                        <h3 className='font-semibold'>Capability:</h3>
                        <h3 className='font-semibold'>SuperPower:</h3>
                        <h3 className='font-semibold'>Creature:</h3>
                        <h3 className='font-semibold'>Costume:</h3>
                        <h3 className='font-semibold'>Speciality:</h3>
                        <h3 className='font-semibold'>Planet:</h3>
                    </div>
                    <div className="w-fit h-full flex flex-col gap-3 text-left justify-center">
                        <h3 className='text-white font-light'>{Avengers[index].name}</h3>
                        <h3 className='text-white font-light'>{Avengers[index].capability}</h3>
                        <h3 className='text-white font-light'>
                            {Avengers[index].superPower.map((power, i) => (
                                <span key={i}>{power}</span>
                            ))}
                        </h3>
                        <h3 className='text-white font-light'>{Avengers[index].creature}</h3>
                        <h3 className='text-white font-light'>{Avengers[index].costume}</h3>
                        <h3 className='text-white font-light'>{Avengers[index].speciality}</h3>
                        <h3 className='text-white font-light'>{Avengers[index].planet}</h3>
                    </div>
                </div>
            </div>

            <button onClick={handlePrevImage} className='btn bg-zinc-700 rounded-full text-white p-3 transition-all hover:scale-105'>
                <FaArrowRight />
            </button>
        </div>
    )
}

export default Caracters