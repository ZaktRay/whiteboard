'use client'
import { Tldraw } from 'tldraw'
import { useSyncDemo } from '@tldraw/sync'
import 'tldraw/tldraw.css'
import { useSearchParams} from "next/navigation";

export default function RealTime() {
    const searchParams = useSearchParams();
    const store = useSyncDemo({ roomId: searchParams.get("roomId") });


  return (
    <div className='fixed inset-0'>
      <Tldraw store={store} />
    </div>
  )
}

