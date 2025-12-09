import React from "react";

export default function PadmaButton({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="w-12 h-12 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shadow-xl fixed bottom-6 right-6"
    >
      💬
    </button>
  );
}
