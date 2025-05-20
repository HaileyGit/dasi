import type { Route } from "./+types/home";
import HomePage from "~/common/pages/home-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DASI - 당신의 일상을 더 스마트하게" },
    { name: "description", content: "DASI와 함께 당신의 일상을 더 스마트하게 관리하세요." },
  ];
}

export default function Home() {
  return <HomePage />;
}
