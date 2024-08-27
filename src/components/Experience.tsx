import { WordRotateExperience } from "./WordRotateExperience";

const Experience = () => {
  return (
    <div className="relative grid h-screen w-full place-content-center bg-neutral-900 px-4 md:px-10">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-200">
          404!
        </h1>

        <div className="w-full flex flex-wrap justify-center items-center gap-2 mt-4 md:mt-6">
          <p className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-200">
            Uh-oh! We found a
          </p>
          <WordRotateExperience />
        </div>

        <p className="mt-4 text-gray-500 text-lg md:text-xl">
          We can&apos;t find any{" "}
          <span className="font-semibold text-2xl md:text-3xl">Experience</span>.
        </p>
      </div>
    </div>
  );
};

export default Experience;
