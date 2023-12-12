import "./Tile.css"

interface Props {
  image?: string;
  highlight: boolean;
}

export default function Tile({ image, highlight }: Props) {
  const className: string = [
    "tile",
    highlight && "tile-highlight",
    image && "chess-piece-tile",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      {image && (
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="chess-piece"
        ></div>
      )}
    </div>
  );
}
