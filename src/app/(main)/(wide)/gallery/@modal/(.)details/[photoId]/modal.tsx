"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function PhotoModal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    setOpen(true);
  }, []);
  const [open, setOpen] = useState(true);
  const router = useRouter();

  return (
    <Dialog
      onOpenChange={async () => {
        setOpen(false);
        router.back();
      }}
      open={open}
    >
      <DialogContent className="max-w-[90vw] overflow-hidden p-0">
        {children}
      </DialogContent>
    </Dialog>
  );
}
