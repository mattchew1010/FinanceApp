import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts
} from "/build/_shared/chunk-ADMBULOS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-PQNAUZ4M.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/accountComponent.js
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\accountComponent.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\accountComponent.js"
  );
  import.meta.hot.lastModified = "1696446409423.8398";
}
var MissingProfileSVG = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "#ffff", class: "w-9 h-9", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" }, void 0, false, {
  fileName: "app/accountComponent.js",
  lineNumber: 24,
  columnNumber: 3
}, this) }, void 0, false, {
  fileName: "app/accountComponent.js",
  lineNumber: 23,
  columnNumber: 27
}, this);
var MissingProfileSVGFilled = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "#ffff", class: "w-9 h-9", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { "fill-rule": "evenodd", d: "M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z", "clip-rule": "evenodd" }, void 0, false, {
  fileName: "app/accountComponent.js",
  lineNumber: 27,
  columnNumber: 3
}, this) }, void 0, false, {
  fileName: "app/accountComponent.js",
  lineNumber: 26,
  columnNumber: 33
}, this);
var AccountMenu = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-neutral-800 outline outline-1 outline-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", role: "menu", "aria-orientation": "vertical", "aria-labelledby": "user-menu-button", tabindex: "-1", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", class: "block px-4 py-2 text-sm text-white hover:bg-neutral-700", role: "menuitem", tabIndex: "-1", id: "user-menu-item-0", children: "Your Profile" }, void 0, false, {
    fileName: "app/accountComponent.js",
    lineNumber: 30,
    columnNumber: 4
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", class: "block px-4 py-2 text-sm text-white hover:bg-neutral-700", role: "menuitem", tabIndex: "-1", id: "user-menu-item-1", children: "Settings" }, void 0, false, {
    fileName: "app/accountComponent.js",
    lineNumber: 31,
    columnNumber: 4
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", class: "block px-4 py-2 text-sm text-red-600 hover:bg-neutral-700", role: "menuitem", tabIndex: "-1", id: "user-menu-item-2", children: "Sign out" }, void 0, false, {
    fileName: "app/accountComponent.js",
    lineNumber: 32,
    columnNumber: 4
  }, this)
] }, void 0, true, {
  fileName: "app/accountComponent.js",
  lineNumber: 29,
  columnNumber: 21
}, this);
function Acount(accountId) {
  _s();
  const [AvatarUrl, setAvatarUrl] = (0, import_react.useState)();
  const [AccountButtonActive, setAccountButtonActive] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "relative ml-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setAccountButtonActive(!AccountButtonActive), type: "button", class: "relative flex rounded-full text-sm focus:outline-none", id: "user-menu-button", "aria-expanded": "false", "aria-haspopup": "true", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { class: "absolute -inset-1.5" }, void 0, false, {
        fileName: "app/accountComponent.js",
        lineNumber: 41,
        columnNumber: 16
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { class: "sr-only", children: "Account" }, void 0, false, {
        fileName: "app/accountComponent.js",
        lineNumber: 42,
        columnNumber: 16
      }, this),
      AvatarUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { class: "h-8 w-8 rounded-full", src: AvatarUrl, alt: "" }, void 0, false, {
        fileName: "app/accountComponent.js",
        lineNumber: 43,
        columnNumber: 29
      }, this) : (
        //if there is an avatar url, display it
        AccountButtonActive ? [MissingProfileSVGFilled] : [MissingProfileSVG]
      )
    ] }, void 0, true, {
      fileName: "app/accountComponent.js",
      lineNumber: 40,
      columnNumber: 16
    }, this) }, void 0, false, {
      fileName: "app/accountComponent.js",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    AccountButtonActive ? AccountMenu : null
  ] }, void 0, true, {
    fileName: "app/accountComponent.js",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s(Acount, "ZUYgDI1B7m3DjmmLSSop+mWf5yY=");
_c = Acount;
var _c;
$RefreshReg$(_c, "Acount");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/navbar.js
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\navbar.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\navbar.js"
  );
  import.meta.hot.lastModified = "1696444682401.674";
}
function Navbar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { class: "bg-neutral-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { class: "mx-0 px-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { class: "relative flex h-16 items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { class: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { class: "flex flex-shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { class: "h-8 w-auto", src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500", alt: "Your Company" }, void 0, false, {
        fileName: "app/navbar.js",
        lineNumber: 28,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/navbar.js",
        lineNumber: 27,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { class: "hidden sm:ml-6 sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { class: "flex space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", class: "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium", "aria-current": "page", children: "Dashboard" }, void 0, false, {
          fileName: "app/navbar.js",
          lineNumber: 32,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", class: "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium", children: "Team" }, void 0, false, {
          fileName: "app/navbar.js",
          lineNumber: 33,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", class: "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium", children: "Projects" }, void 0, false, {
          fileName: "app/navbar.js",
          lineNumber: 34,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", class: "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium", children: "Calendar" }, void 0, false, {
          fileName: "app/navbar.js",
          lineNumber: 35,
          columnNumber: 16
        }, this)
      ] }, void 0, true, {
        fileName: "app/navbar.js",
        lineNumber: 31,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/navbar.js",
        lineNumber: 30,
        columnNumber: 10
      }, this)
    ] }, void 0, true, {
      fileName: "app/navbar.js",
      lineNumber: 26,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { class: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Acount, {}, void 0, false, {
      fileName: "app/navbar.js",
      lineNumber: 40,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/navbar.js",
      lineNumber: 39,
      columnNumber: 10
    }, this)
  ] }, void 0, true, {
    fileName: "app/navbar.js",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/navbar.js",
    lineNumber: 24,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/navbar.js",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c2 = Navbar;
var _c2;
$RefreshReg$(_c2, "Navbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-5M7BLQPS.css";

// app/root.js
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.js"
  );
}
function links() {
  return [{
    rel: "stylesheet",
    href: tailwind_default
  }];
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "icon", href: "data:image/x-icon;base64,AA" }, void 0, false, {
        fileName: "app/root.js",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.js",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.js",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.js",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "bg-neutral-900", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navbar, {}, void 0, false, {
        fileName: "app/root.js",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.js",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.js",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.js",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.js",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.js",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c3 = App;
var _c3;
$RefreshReg$(_c3, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-DMDQYEM6.js.map
