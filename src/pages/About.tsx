
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const About = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerElement = headerRef.current;
    const teamElement = teamRef.current;

    if (headerElement && teamElement) {
      gsap.fromTo(
        headerElement,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.5 }
      );

      gsap.fromTo(
        teamElement.querySelectorAll('.team-member'),
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.15, 
          ease: 'power2.out',
          delay: 0.7
        }
      );
    }
  }, []);

  const teamMembers = [
    {
      name: 'Sakthivel',
      role: 'Project Lead & Backend Developer',
      bio: 'Sakthivel leads the team with expertise in algorithm development and backend architecture. His strong background in data structures made him the perfect choice to design the palindrome detection algorithm that powers our tool.',
      skills: ['Algorithm Design', 'Backend Development', 'Project Management']
    },
    {
      name: 'Sarvesh',
      role: 'Frontend Developer',
      bio: 'Sarvesh is responsible for the elegant user interface and smooth transitions on our website. With a keen eye for design and strong skills in modern web technologies, he ensures our palindrome checker is both beautiful and functional.',
      skills: ['UI/UX Design', 'Frontend Development', 'Animation']
    },
    {
      name: 'Vignesh',
      role: 'Full Stack Developer',
      bio: 'Vignesh bridges the gap between frontend and backend systems, ensuring seamless integration across the application. His research on the history of palindromes also provided valuable content for our History page.',
      skills: ['Full Stack Development', 'Integration', 'Research']
    },
    {
      name: 'Prajan',
      role: 'QA & Content Specialist',
      bio: 'Prajan ensures quality across the platform through rigorous testing and bug reporting. Additionally, his background in linguistics helped shape our content strategy and provided cultural context to our palindrome examples.',
      skills: ['Quality Assurance', 'Content Creation', 'Linguistic Research']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div ref={headerRef} className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Meet <span className="text-gradient">Our Team</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get to know the talented individuals behind the Palindrome Checker project, each bringing unique skills and perspectives.
        </p>
      </div>

      <div ref={teamRef} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member card hover:-translate-y-1">
            <div className="flex flex-col h-full">
              <div>
                <h2 className="text-2xl font-bold text-palindrome-blue">{member.name}</h2>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-700 mb-6">{member.bio}</p>
              </div>
              <div className="mt-auto">
                <h3 className="font-semibold text-gray-800 mb-2">Expertise:</h3>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="inline-block bg-palindrome-lightBlue text-palindrome-blue px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <div className="card">
          <p className="text-gray-700 mb-4">
            Our team came together with a shared passion for linguistics and web development. We created this palindrome checker tool not only as a practical utility but also as an educational resource to highlight the fascinating history and cultural significance of palindromes.
          </p>
          <p className="text-gray-700">
            We believe in creating elegant, accessible tools that blend functionality with aesthetic appeal. Our goal is to continue refining this application while exploring new ways to celebrate the beauty of language through technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

