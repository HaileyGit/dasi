import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("common/pages/home-page.tsx"),

  route("/login", "common/pages/login-page.tsx"),
  route("/signup", "common/pages/signup-page.tsx"),

  route("/about", "features/about/pages/about-page.tsx"),
  route("/examples", "features/examples/pages/examples-page.tsx"),

  route("/explore", "features/memory/pages/explore-page.tsx"),
  route("/explore/:date", "features/memory/pages/explore-page.tsx"),

  route("/edit/:date", "features/memory/pages/edit-memory-page.tsx"),

  route("/memories", "features/memory/pages/memory-list-page.tsx"),
  route("/memories/:id", "features/memory/pages/memory-detail-page.tsx"),

  route("/share/:id", "features/memory/pages/share-memory-page.tsx"),

  route("*", "common/pages/not-found-page.tsx"),
] satisfies RouteConfig;
