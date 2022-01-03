import {
    KBarResults,
    useMatches,
    NO_GROUP,
  } from "kbar";
  // app.tsx
import {
    KBarProvider,
    KBarPortal,
    KBarPositioner,
    KBarAnimator,
    KBarSearch,
  } from "kbar";

function MyApp() {
  return 
  <KBarProvider>
      
      </KBarProvider>;
}
  
  const actions = [
    {
      id: "blog",
      name: "Blog",
      shortcut: ["b"],
      keywords: "writing words",
      perform: () => (window.location.pathname = "blog"),
    },
    {
      id: "contact",
      name: "Contact",
      shortcut: ["c"],
      keywords: "email",
      perform: () => (window.location.pathname = "contact"),
    },
  ]

  
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
                background: active ? "#eee" : "transparent",
              }}
            >
              {item.name}
              <KBarProvider actions={actions}>
               <KBarPortal>, // Renders the content outside the root node
                 <KBarPositioner>, // Centers the content
                   <KBarAnimator>, // Handles the show/hide and height animations
                     <KBarSearch />, // Search input
                   </KBarAnimator>,
                 </KBarPositioner>,
               </KBarPortal>,
               <MyApp />,
             </KBarProvider>
             <RenderResults />;
             <KBarProvider actions={actions}>

    </KBarProvider>
            </div>
          )
        }
      />
    );
  }