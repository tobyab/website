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
import $ from 'jquery'

const searchStyle = {
  padding: "12px 16px",
  fontSize: "16px",
  width: "100%",
  outline: "none",
  border: "none",
  background: "var(--background)",
  color: "var(--foreground)",
};

const animatorStyle = {
  maxWidth: "600px",
  width: "100%",
  background: "var(--background)",
  color: "var(--foreground)",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "var(--shadow)",
};

const groupNameStyle = {
  padding: "8px 16px",
  fontSize: "10px",
  opacity: 0.5,
};

function RenderResults() {
  const { results } = useMatches();
  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div>{item}</div>
        ) : (
          <div
            style={{
              background: active ? "#eee" : "#fff" ,
              padding: "0.5rem 1rem",
              //borderLeft: `3px solid ${active ? "transparent" : "transparent"}`,
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              //padding: "12px 16px",
              
               borderLeft: `2px solid ${
               active ? "var(--foreground)" : "transparent"
             }`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              fontSize: 14,
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
    {
      id: "blog",
      name: "Blog",
      shortcut: ["b"],
      keywords: "writing words blog",
      section: "Navigation",
      perform: () => window.open("/blog"),
    },
    {
      id: "about",
      name: "About",
      shortcut: ["a"],
      keywords: "about command who",
      section: "Navigation",
      perform: () => window.open("/about"),
    },
    {
      id: "test",
      name: "Test",
      keywords: "test tes te",
      section: "Navigation",
      perform: () => window.open("/test"),
    },
    {
    id: "contactAction",
    name: "Contact",
    shortcut: ["c"],
    keywords: "email hello",
    section: "Social",
    perform: () => window.open("mailto:toby@tobyb.xyz", "_blank"),
  },
  {
    id: "twitterAction",
    name: "Twitter",
    shortcut: ["t"],
    keywords: "social contact dm",
    section: "Social",
    perform: () => window.open("https://twitter.com/DevelopedByToby", "_blank"),
  },
  {
    id: "githubAction",
    name: "Github",
    shortcut: ["g", "h"],
    keywords: "sourcecode",
    section: "Social",
    perform: () => window.open("https://github.com/itstobez", "_blank"),
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

export default MyApp

// MASSIVE thank you to Ella for helping me with kbar,
// I strongly recommend you check out her github here: https://github.com/eilla1!