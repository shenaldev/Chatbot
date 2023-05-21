function Card(props) {
  const glassmorphismClass =
    "bg-indigo-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100/40";

  return (
    <div
      className={`card relative bg-white max-w-full min-w-[90vw] lg:max-w-sm lg:min-w-[24em] min-h-[90vh] max-h-[26rem] px-4 lg:px-8 py-6 lg:py-8 rounded-md`}
    >
      {props.children}
    </div>
  );
}

export default Card;
