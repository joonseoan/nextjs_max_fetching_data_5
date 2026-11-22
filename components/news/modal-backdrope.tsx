'use client'

import { useRouter } from "next/navigation";

function ModalBackdrope() {
  const router = useRouter();

  return <div className="modal-backdrop" onClick={router.back} />;
}

export default ModalBackdrope;