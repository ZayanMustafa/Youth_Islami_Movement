export default function Team() {
    const teamMembers = [
      {
        name: "Syed Basir Shah",
        role: "Founder & Speaker",
        image: "https://dummyimage.com/94x94"
      },
      {
        name: "Zayyan Mustafa",
        role: "Vice President & Trainer",
        image: "https://dummyimage.com/84x84"
      },
      {
        name: "Syed Moiz",
        role: "Operation Manager",
        image: "https://dummyimage.com/100x90"
      },
      {
        name: "Abdullah",
        role: "Content Researcher",
        image: "https://dummyimage.com/88x88"
      },
      {
        name: "Ibad Ansari",
        role: "Graphics Designer",
        image: "https://dummyimage.com/88x88"
      },
      {
        name: "Faris Raza Khan",
        role: "Speaker",
        image: "https://dummyimage.com/90x90"
      },
      {
        name: "Zamin Khan",
        role: "Speaker",
        image: "https://dummyimage.com/90x90"
      },
      {
        name: "Shiman",
        role: "SEO & Video Tagging",
        image: "https://dummyimage.com/98x98"
      },
      {
        name: "Syed Husnain",
        role: "Editor",
        image: "https://dummyimage.com/100x90"
      },
      {
        name: "Yumna Muneer",
        role: "Editor",
        image: "https://dummyimage.com/108x98"
      },
      {
        name: "Umme Saleem",
        role: "Quiz Sender Coordinator",
        image: "https://dummyimage.com/100x90"
      },
      {
        name: "Tayeb Lodhi",
        role: "Co-ordination Manager",
        image: "https://dummyimage.com/100x90"
      }
    ];
  
    return (
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Our Team
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Meet the dedicated individuals working together to make a positive impact through Youth Islami Movement (YIM).
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
                    <h2 className="text-white title-font font-medium">{member.name}</h2>
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
  