export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className=" grid place-content-center bg-gray-700  min-h-150">
          Me
          <h1>Hallo, I'm Adrian Bakalarz Fullstack Web Developer</h1>
          <h3>Transforming Ideas into Beautifully Responsive Websites</h3>
          <div>
            <button>Contact me</button>
            <button>Download CV</button>
            <div>
              <a href="https://github.com/onedr0p/headlamp/blob/main/frontend/.storybook/HeadlampTheme.js">
                ikons for github, linkedin, whatsup(phonenumber){" "}
              </a>
            </div>
          </div>
        </div>
        <div className="grid place-content-center bg-gray-300 min-h-150">
          <div className="mt-12 rounded-[50%] overflow-hidden w-[350px] h-100">
            <img
              src="./src/image/AB.jpg"
              alt="here photo"
              className="rounded-sm"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
