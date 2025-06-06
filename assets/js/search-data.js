// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Below you can find a list of books I have (co-)​authored or (co-)​edited. There is also a list of peer-reviewed articles I have (co-)​authored.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-working-papers",
          title: "working papers",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/workingpapers/";
          },
        },{id: "nav-data",
          title: "data",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/data/";
          },
        },{id: "nav-media",
          title: "media",
          description: "I regularly comment on my research in a wide variety of media outlets. Below you can find a selection.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/media/";
          },
        },{id: "nav-govlab",
          title: "GovLab",
          description: "Humboldt Governance Lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/govlab/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "current team members and alumni",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-coalition-agreements",
          title: 'COALITION AGREEMENTS',
          description: "Explaining Payoff Allocation in Coalition Governments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coalitionagreements/";
            },},{id: "projects-coalition-policy",
          title: 'COALITION​POLICY',
          description: "Policy-Making in Coalition Governments: The Enactment of Coalition Agreements",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coalitionpolicy/";
            },},{id: "projects-far-right",
          title: 'FAR RIGHT',
          description: "Analyzing and Countering the Emergence of Far-Right Beliefs in the Wake of Migration",
          section: "Projects",handler: () => {
              window.location.href = "/projects/counterright/";
            },},{id: "projects-covideu",
          title: 'COVIDEU',
          description: "The Impact of COVID-19 on Public Support for the European Union",
          section: "Projects",handler: () => {
              window.location.href = "/projects/covideu/";
            },},{id: "projects-dynamics",
          title: 'DYNAMICS',
          description: "Research Training Group “The Dynamics of Demography, Democratic Processes and Public Policy”",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dynamics/";
            },},{id: "projects-framing-of-public-policy-debates",
          title: 'Framing of Public Policy Debates',
          description: "Affiliated with the INTEREURO Project Funded by the European Science Foundation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/framingdebates/";
            },},{id: "projects-interest-representation-in-germany",
          title: 'Interest Representation in Germany',
          description: "A Longitudinal Study of Interest Groups Registered at the Bundestag",
          section: "Projects",handler: () => {
              window.location.href = "/projects/interestrepresentation/";
            },},{id: "projects-lobbying",
          title: 'LOBBYING',
          description: "Interest Groups and the Ministerial Bureaucracy in Germany: Studying Lobbying Success at the Administrative Stage",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lobbying/";
            },},{id: "projects-party-competition",
          title: 'Party Competition',
          description: "Lorem ipsum dolor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/partycompetition/";
            },},{id: "projects-scripts",
          title: 'SCRIPTS',
          description: "Excellence Cluster “The Contestations of the Liberal Script”",
          section: "Projects",handler: () => {
              window.location.href = "/projects/scripts/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%65%69%6B%65.%6B%6C%75%65%76%65%72@%68%75-%62%65%72%6C%69%6E.%64%65", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/heikekluever.bsky.social", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/heike-kl%C3%BCver-469029269", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4838-0754# your ORCID ID", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=5Ekplf8AAAAJ", "_blank");
        },
      },];
