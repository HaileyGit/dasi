import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "react-router";
import "./app.css";
import Navigation from "./common/components/navigation";
import Footer from "./common/components/layouts/footer";
import { Settings } from "luxon";
import CosmicBackgroundLayout from "./common/components/layouts/CosmicBackgroundLayout";

export default function App() {
  Settings.defaultLocale = "ko";
  Settings.defaultZone = "Asia/Seoul";

  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#0f0f1f] text-white">
        <Navigation isLoggedIn={false} />
        <main className="pt-28 px-4 sm:px-8 lg:px-16">
          <CosmicBackgroundLayout>
            <Outlet />
          </CosmicBackgroundLayout>
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  let message = "문제가 발생했습니다";
  let details = "예기치 못한 오류가 발생했습니다.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "페이지를 찾을 수 없습니다" : "에러 발생";
    details =
      error.status === 404
        ? "요청한 페이지가 존재하지 않습니다."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-28 px-4 container mx-auto">
      <h1 className="text-2xl font-bold">{message}</h1>
      <p className="mt-2">{details}</p>
      {stack && (
        <pre className="mt-4 w-full p-4 bg-black/30 rounded overflow-x-auto text-sm text-white">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
