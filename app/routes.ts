import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  // 홈
  index("features/home/pages/home-page.tsx"),

  // 회상 관련
  ...prefix("recall", [
    index("features/recall/pages/recall-page.tsx"), // 날짜 선택
    route("/:date", "features/recall/pages/recall-detail-page.tsx"), // 날짜 회상 결과
    route("/:date/summary", "features/recall/pages/recall-summary-page.tsx"), // 회상 요약 결과
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
  route("/about", "features/about/pages/about-page.tsx"),

  // 메모리 관련
  ...prefix("memory", [
    route("/list", "features/memory/pages/memory-list-page.tsx"),
    route("/:id", "features/memory/pages/memory-detail-page.tsx"),
    route("/edit/:date", "features/memory/pages/edit-memory-page.tsx"),
    route("/:id/share", "features/memory/pages/share-memory-page.tsx"),
  ]),

  // 404
  route("*", "features/common/pages/not-found-page.tsx"),
] satisfies RouteConfig;
