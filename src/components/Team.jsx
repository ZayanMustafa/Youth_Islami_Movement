import BasirImage from "../assets/images/Basir.jpeg";
import HasnainImage from "../assets/images/Hasnain.jpeg";
import MoizImage from "../assets/images/Moiz.jpeg";
import ZayyanImage from "../assets/images/Zayyan.jpg";
import FarisImage from "../assets/images/Faris.jpeg";
import ZaminImage from "../assets/images/Zamin.jpeg";
import ShaimanImage from "../assets/images/Shaiman.jpeg";
import IbadImage from "../assets/images/Ibad.jpg";
import Female from "../assets/images/FemaleImage.jpeg";
import TayebImage from "../assets/images/Tayeb.jpg";
import AbdullahImage from "../assets/images/Abdullah.jpg";


export default function Team() {
  const teamMembers = [
    {
      name: "Syed Basir Shah",
      role: "Founder & Speaker",
      image: BasirImage,
    },
    {
      name: "Zayyan Mustafa",
      role: "Vice President & Trainer",
      image: ZayyanImage,
    },
    {
      name: "Syed Moiz",
      role: "Operation Manager",
      image: MoizImage,
    },
    {
      name: "Abdullah",
      role: "Content Researcher",
      image: AbdullahImage,
    },
    {
      name: "Ibad Ansari",
      role: "Graphics Designer",
      image: IbadImage,
    },
    {
      name: "Faris Raza Khan",
      role: "Speaker",
      image: FarisImage,
    },
    {
      name: "Zamin Khan",
      role: "Speaker",
      image: ZaminImage, 
    },
    {
      name: "Shiman",
      role: "SEO & Video Tagging",
      image: ShaimanImage,
    },
    {
      name: "Syed Husnain",
      role: "Editor",
      image: HasnainImage, 
    },
    {
      name: "Yumna Muneer",
      role: "Editor",
      image: Female,
    },
    {
      name: "Umme Saleem",
      role: "Quiz Sender Coordinator",
      image: Female,
    },
    {
      name: "Tayeb Lodhi",
      role: "Co-ordination Manager",
      image: TayebImage, 
    },
  ];

  return (
    <section className="w-full w-full-screen text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Meet the dedicated individuals working together to make a positive
            impact through Youth Islami Movement (YIM).
          </p>
        </div>

        <div className="flex flex-wrap -m-2">
          {teamMembers.map((member, index) => (
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt={member.name}
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={member.image}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    {member.name}
                  </h2>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
