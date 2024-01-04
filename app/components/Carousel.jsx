import Image from "next/image";

const image = [
  { image: "https://picsum.photos/id/1/1280/500" },
  { image: "https://picsum.photos/id/27/1280/500" },
  { image: "https://picsum.photos/id/58/1280/500" },
  { image: "https://picsum.photos/id/85/1280/500" },
];

export default function Carousel() {
  return (
    <div className="">
      <ul className="slider">
        {image.map((image, i) => {
          return (
            <li key={i} className="list">
              <Image
                src={image.image}
                width={1280}
                height={500}
                alt="Slider image"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
