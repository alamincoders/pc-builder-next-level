import Image from "next/image";
import Link from "next/link";

const PcBuilderCard = ({ title, image, description, id }) => {
  return (
    <Link href={`/product/${description}/${id}`}>
      <div className="card w-96 h-40 bg-base-100 shadow-xl image-full">
        <figure>
          <Image width={300} height={200} src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PcBuilderCard;
