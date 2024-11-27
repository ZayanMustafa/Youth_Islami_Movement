import React from "react";
import { Link } from "react-router-dom";

export default function ReadMoreAboutUs() {
  return (
    <div className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="container mx-auto">
        <section className="text-gray-300">
            <Link to="/">
          <h2 className="text-3xl font-bold text-center text-indigo-400">
            Youth Islami Movement (YIM)
          </h2>
            </Link>
          
          <p className="mt-4 text-lg leading-relaxed">
            Youth Islami Movement (YIM) is a dynamic platform dedicated to{" "}
            <strong className="text-white">inspiring a generation through Islam</strong>. We empower young
            individuals by providing knowledge, promoting community service, and
            encouraging personal growth, all guided by Islamic principles. Our
            mission is to inspire youth to actively participate in positive change,
            fostering unity, service, and a deeper connection with their faith. We
            focus on addressing societal challenges such as{" "}
            <span className="text-red-400">liberalism</span>,{" "}
            <span className="text-blue-400">feminism</span>,{" "}
            <span className="text-green-400">atheism</span>, and{" "}
            <span className="text-yellow-400">materialism</span>, offering a
            holistic approach to personal development and social responsibility.
            <br />
            <br />
            As a non-political movement, YIM strives to create a space where the
            youth can thrive, guided by Islamic teachings, while remaining deeply
            committed to moral integrity and community upliftment.
          </p>

          {/* Addressing Societal Challenges */}
          <h3 className="text-2xl font-semibold mt-6 text-indigo-400">
            Addressing Societal Challenges
          </h3>
          <p className="mt-4 text-lg leading-relaxed">
            In today’s world, where every person with an opinion can spread
            misleading interpretations of the Quran and Hadith, YIM aims to correct
            misconceptions and foster unity. Many young people are being misled by
            individuals who, in the name of ending sectarianism, form their own
            factions and create doubts about long-established practices. These
            misinformed voices claim that "the scholars (ulama) are responsible for
            society's problems."
          </p>
          <br />
          <p className="mt-4 text-lg leading-relaxed">
            In response to this, it was essential to create a platform where young
            individuals could come forward to show the right path, and guide their
            peers towards the authentic teachings of Islam. To that end,{" "}
            <strong className="text-white">Sayed Basir Shah</strong> and his friends established the{" "}
            <strong className="text-white">Youth Islami Movement</strong> to guide the youth towards
            positive change.
          </p>

          {/* Authentic Guidance */}
          <h3 className="text-2xl font-semibold mt-6 text-indigo-400">
            Authentic Guidance from Scholars
          </h3>
          <p className="mt-4 text-lg leading-relaxed">
            One of the key features of YIM is its support from scholars, ensuring
            that all teachings shared are authentic and reliable. This connection
            to traditional Islamic knowledge gives the movement a sense of
            credibility and trustworthiness, especially when it comes to matters of
            belief and practice.
          </p>

          {/* Join Us Online */}
          <h3 className="text-2xl font-semibold mt-6 text-indigo-400">
            Join Us Online
          </h3>
          <p className="mt-4 text-lg leading-relaxed">
            YIM is active on all major social media platforms, working tirelessly
            to reach and guide the youth towards a better understanding of Islam. You
            can connect with us through the following links:
          </p>

          {/* Social Media Links */}
          <ul className="mt-4 list-disc pl-6">
            <li>
              <a
                href="https://whatsapp.com/channel/0029VaPaN7w2Jl85kiQbLV3i"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                WhatsApp Channel
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/youth_islami_movement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61556775699993"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/@youthislamimovement?si=0TxpNmpg7GCMxM90"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                YouTube Channel
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
