import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  // 홈
  index("common/pages/home-page.tsx"),

  // 회상 관련
  ...prefix("recall", [
    index("features/recall/pages/recall-page.tsx"), // 날짜 선택
    route("/:date", "features/recall/pages/recall-detail-page.tsx"), // 날짜 회상 결과
  ]),
  route("/examples", "features/recall/pages/examples-page.tsx"),
  route("/share/:emotionDayId", "features/recall/pages/share-page.tsx"),

  // 유저 기록
  ...prefix("my", [
    route("/records", "features/users/pages/my-records-page.tsx"),
    route("/insights", "features/users/pages/insights-page.tsx"),
  ]),

  // 인증
  ...prefix("auth", [
    route("/login", "features/auth/pages/login-page.tsx"),
    route("/join", "features/auth/pages/join-page.tsx"),
    route("/logout", "features/auth/pages/logout-page.tsx"),
  ]),

  // 서비스 소개
  route("/about", "features/common/pages/about-page.tsx"),

  // 메모리 관련
  ...prefix("memory", [
    route("/explore/:date?", "features/memory/pages/explore-page.tsx"),
    route("/edit/:date", "features/memory/pages/edit-memory-page.tsx"),
    route("/list", "features/memory/pages/memory-list-page.tsx"),
    route("/:id", "features/memory/pages/memory-detail-page.tsx"),
  ]),

  // 404
  route("*", "common/pages/not-found-page.tsx"),
] satisfies RouteConfig;
