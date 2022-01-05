import {
    KBarProvider,
    KBarPortal,
    KBarPositioner,
    KBarAnimator,
    KBarSearch,
    KBarResults,
    useMatches,
    NO_GROUP,
  } from "kbar";


function CommandK() {
     const actions = [{
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
        // space for more actions
      ];
      
    return (
  <KBarProvider actions={actions}>
          <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner> 
          <KBarAnimator> 
            <KBarSearch /> 
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      <CommandK />
    </KBarProvider>;
    </KBarProvider>
    )
}

export default CommandK