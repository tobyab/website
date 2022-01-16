import '../styles/globals.css'
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
} from "kbar";
import { useRouter } from "next/router";

const searchStyle = {
  padding: "12px 16px",
  fontSize: "16px",
  width: "100%",
  outline: "none",
  border: "none",
  background: "rgba(255, 255, 255, 0.98)",
  color: "var(--foreground)",
  borderBottom: "0.5px solid #f0f0f0",
};

const animatorStyle = {
  maxWidth: "600px",
  width: "100%",
  background: "var(--background)",
  color: "var(--foreground)",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.2) ",
};

const groupNameStyle = {
  padding: "8px 16px",
  fontSize: "10px",
  opacity: 1,
  color: "#8f8f8f",
  background: "rgba(255, 255, 255, 0.98)",
};


function RenderResults() {
  const { results } = useMatches();
  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          <div
            style={{
              background: active ? "#eee" : "rgba(255, 255, 255, 0.98)" ,
              padding: "0.7rem 1.5rem",
              boxShadow: "var(--shadow)",
              //borderLeft: `3px solid ${active ? "transparent" : "transparent"}`,
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              //padding: "12px 16px",
              height: "100",
               borderLeft: `0px solid ${
               active ? "var(--foreground)" : "transparent"
             }`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              fontSize: 16,
            }}
          >
            {item.name}
          </div>
        )
      }
    />
  );
}

function MyApp({ Component, pageProps }) {
  const actions = [
    // Navigation
    {
      id: "blog",
      name: "Blog",
      shortcut: ["b"],
      keywords: "writing words blog b hello",
      section: "Navigation",
      perform: () => window.open("/blog", "_self"),
    },
    {
      id: "about",
      name: "About",
      shortcut: ["a"],
      keywords: "about command who a toby me ",
      section: "Navigation",
      perform: () => window.open("/about", "_self"),
    },
    {
      id: "projects",
      name: "Projects",
      shortcut: ["p"],
      keywords: "projects p open source work",
      section: "Navigation",
      perform: () => window.open("/projects", "_self"),
    },
    {
      id: "home",
      name: "Home",
      shortcut: ["r", "h"],
      keywords: "home return h index",
      section: "Navigation",
      perform: () => window.open("/", "_self"),
    },
    // Social
    {
    id: "email",
    name: "Email",
    shortcut: ["e"],
    keywords: "email hello message send e talk communicate speak",
    section: "Social",
    perform: () => window.open("mailto:toby@tobyb.xyz", "_blank"),
  },
  {
    id: "twitterAction",
    name: "Twitter",
    shortcut: ["t"],
    keywords: "social contact dm t s",
    section: "Social",
    perform: () => window.open("https://twitter.com/DevelopedByToby", "_blank"),
  },
  {
    id: "githubAction",
    name: "Github",
    shortcut: ["g", "h"],
    keywords: "source code g",
    section: "Social",
    perform: () => window.open("https://github.com/itstobez", "_blank"),
  },
  {
    id: "polyworkAction",
    name: "Polywork",
    shortcut: ["p", "w"],
    keywords: "p poly work polywork",
    section: "Social",
    perform: () => window.open("https://www.polywork.com/itstobez", "_blank"),
  },
  // Utilities
  {
    id: "status",
    name: "Status",
    shortcut: ["s"],
    keywords: "status s",
    section: "Utilities",
    perform: () => window.open("https://tobybxyz.statuspage.io/", "_blank"),
  },
  {
    id: "sourcecode",
    name: "Source Code",
    shortcut: ["s", "c"],
    keywords: "source code s",
    section: "Utilities",
    perform: () => window.open("https://github.com/ItsTobez/tobyb.xyz-v2/", "_blank"),
  },
  {
    id: "commits",
    name: "Latest Commits",
    shortcut: ["l", "c"],
    keywords: "code l c commit late",
    section: "Utilities",
    perform: () => window.open("https://github.com/ItsTobez/tobyb.xyz-v2/commits/main", "_blank"),
  },
  {
    id: "cv",
    name: "CV",
    shortcut: ["c", "v"],
    keywords: "c v cv about detail more info",
    section: "Utilities",
    perform: () => window.open("https://tobyb.notion.site/tobyb/All-about-me-7a2fa4d2c85f4bdeb8bf8556d7aac77a", "_blank"),
  },
  ];

  return (
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner>
            <KBarAnimator style={animatorStyle}>
              <KBarSearch style={searchStyle}/>
              <RenderResults />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        <Component {...pageProps} />
      </KBarProvider>
    );
  }

  function spin() {
    var elem = document.getElementById("body");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 360) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.transform = "rotate(" + pos + "deg)";
      }
    }
}


export default MyApp

function HomeIcon() {
  return (
    <svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m19.681 10.406-7.09-6.179a.924.924 0 0 0-1.214.002l-7.06 6.179c-.642.561-.244 1.618.608 1.618.51 0 .924.414.924.924v5.395c0 .51.414.923.923.923h3.236V14.54c0-.289.234-.522.522-.522h2.94c.288 0 .522.233.522.522v4.728h3.073c.51 0 .924-.413.924-.923V12.95c0-.51.413-.924.923-.924h.163c.853 0 1.25-1.059.606-1.62Z"
        fill="var(--foreground)"
      />
    </svg>
  );
}

function cmdIcon() {
  return (
  <svg onClick={useKBar} width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m19.681 10.406-7.09-6.179a.924.924 0 0 0-1.214.002l-7.06 6.179c-.642.561-.244 1.618.608 1.618.51 0 .924.414.924.924v5.395c0 .51.414.923.923.923h3.236V14.54c0-.289.234-.522.522-.522h2.94c.288 0 .522.233.522.522v4.728h3.073c.51 0 .924-.413.924-.923V12.95c0-.51.413-.924.923-.924h.163c.853 0 1.25-1.059.606-1.62Z"
        fill="#000"
      />
    </svg>
  );
}

// MASSIVE thank you to Ella for helping me with kbar,
// I strongly recommend you check out her github here: https://github.com/eilla1 :)
