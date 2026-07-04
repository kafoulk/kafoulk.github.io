type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Kiersten Foulk | Portfolio",
    fullName: "Kiersten Foulk",
    email: "kiersten.l.foulk@gmail.com",
  },
  hero: {
    name: "Kiersten Foulk",
    p: ["I develop & manage 3D visuals, simulations, user-interfaces, and web applications."],
  },
  contact: {
    p: "Let's get in touch",
    h2: "Contact",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview",
      content: `I'm a versatile web and simulation developer, UX/UI designer, and marketing strategist with deep technical experience in JavaScript, PHP, and game engines like Unity. I specialize in building immersive digital experiences, ranging from high-performing web applications to interactive 3D simulations, while designing intuitive, user-friendly interfaces in Figma. By combining clean architecture with data-driven SEO and paid advertising strategies, I create scalable, real-world solutions that not only captivate users but also drive measurable brand growth. Let's work together to bring your vision to life!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials",
    },
    works: {
      p: "My work",
      h2: "Projects",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
