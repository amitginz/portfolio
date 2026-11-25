import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now — Amit Ginzberg",
  description: "What Amit Ginzberg is currently working on.",
};

import NowContent from "@/components/NowContent";

export default function NowPage() {
  return <NowContent />;
}
