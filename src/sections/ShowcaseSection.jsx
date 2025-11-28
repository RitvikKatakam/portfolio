import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div >
      <h2 className="flex flex-row justify-start pt-8 text-5xl  ml-20 font-bold pl-5">Projects</h2>
    <div id="projects" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <a href="https://github.com/RitvikKatakam/emp_details_tracking" target="_blank"> 
            <div className="w-full">
              <img src="https://imgs.search.brave.com/iNjK0DV9k1vS8EgH7V6GyqCyI5JN9R_rvyarHL0SSjk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmhycGFydG5lci5p/by93cC1jb250ZW50/L3VwbG9hZHMvRW1w/bG95ZWUtRGF0YS5w/bmc" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Employee_Tracking_System
              </h2>
              <p className="text-white-50 md:text-xl">
                A web application to manage and track employee details effectively.
              </p>
            </div>
            </a>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project mb-2" ref={libraryRef}>
              <a href="https://github.com/RitvikKatakam/Ecommerce-Website" target="_blank">
              <div className="image-wrapper  bg-black">
                
                <img
                  src="https://imgs.search.brave.com/iNOuIj2hsMxysaPCZGuSITH1495Pr9WYcAU-ri5dlCc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy5h/cC1zb3V0aC0xLmFt/YXpvbmF3cy5jb20v/cHJvZC1lYXNlYnV6/ei1zdGF0aWMvc3Rh/dGljL2Jhc2UvYXNz/ZXRzX2F1Z18yMDIx/L2ltZy9lYXNlYnV6/ei9lYXNlYnV6ei1l/eHBsYWluZXIvZWNv/bW1lcmNlLWJ1c2lu/ZXNzZXMvZWNvbW1l/cmNlLWluZHVzdHJ5/LnN2Zw"
                  alt="Library Management Platform"
                />
          
              </div>
              <h2> Ecommerce Application in Django </h2>
                            <p className="text-white-50 pt-2 md:text-xl">
                An ecommerce platform with user-friendly interface and seamless shopping experience.
              </p>
              </a>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <a href="https://github.com/RitvikKatakam/BMS" target="_blank">
              <div className="image-wrapper bg-black">
                <img src="https://imgs.search.brave.com/0xhmZrD9vpL02UsXpUYi3UFtTnALn0tQgAPi2rmSE7g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/YmFuay1maW5hbmNl/LWluZm9ncmFwaGlj/LXRlbXBsYXRlXzIz/LTIxNDk3MzIxNzku/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MCZxPTgw" alt="YC Directory App" />
              </div>
              <h2>BMS: Bank Mangement System</h2>
                            <p className="text-white-50 pt-2 md:text-xl">
                A bank management system to handle customer accounts and transactions.
              </p>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AppShowcase;
