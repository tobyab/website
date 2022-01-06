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
              height: 300,
              //width: 700,
              padding: 1,
              maxWidth: 700,
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
      perform: () => window.open("/blog"),
    },
    {
      id: "about",
      name: "about",
      shortcut: ["a"],
      keywords: "about command who",
      perform: () => window.open("/about"),
    },
    {
      id: "test",
      name: "test",
      shortcut: ["t"],
      keywords: "test tes te",
      perform: () => window.open("/test"),
    },
  ];

  return (
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner>
            <KBarAnimator>
              <KBarSearch />
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