type propTile = {
  title: string;
  coloredWorld?: string;
};

function Title({ title, coloredWorld }: propTile) {
  return (
    <h2 className="font-palanquin leading-8 font-bold text-3xl transition-all cursor-pointer italic text-white relative hover:scale-105 block w-fit z-20 before:rounded-[40px] before:left-[50%] before:translate-x-[-50%] before:absolute before:-z-10 before:bg-forest-green-dark before:w-[110%] before:h-[100%]">
      {title} <span className="text-lime-500">{coloredWorld}</span>
    </h2>
  );
}

export default Title;
