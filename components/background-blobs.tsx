/*
  Using some cray-cray arbitrary values over here...
  If you're not rocking with it, you can write
  normal CSS in `/styles/tailwind.css`.
*/

export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0">
      <div className="sticky h-full w-full">
        {/* Blob 1 */}
        <div className="fixed inset-x-0 grid h-1/2 -translate-x-[15%] place-items-center">
          <div className="aspect-[10/8] w-[1200px] animate-float bg-[radial-gradient(50%_50%_at_50%_50%,#e3a9c1_0%,rgba(227,169,193,0.66)_24.48%,rgba(239,238,243,0)_100%)] opacity-80 mix-blend-color-burn [animation-delay:4s]"></div>
        </div>
        {/* Blob 2 */}
        <div className="fixed inset-x-0 top-[10%] grid h-1/2  place-items-center">
          <div className="animate-float2 aspect-[10/8] w-[1200px] bg-[radial-gradient(50%_50%_at_50%_50%,#cfbcdc_0%,rgba(207,188,220,0.66)_24.48%,rgba(239,238,243,0)_100%)] opacity-80 mix-blend-color-burn [animation-delay:2s]"></div>
        </div>
        {/* Blob 3 */}
        <div className="fixed inset-x-0 grid h-1/2 translate-x-[15%] place-items-center">
          <div className="aspect-[10/8] w-[1200px] animate-float bg-[radial-gradient(50%_50%_at_50%_50%,#f4ddcd_0%,rgba(244,221,205,0.66)_24.48%,rgba(239,238,243,0)_100%)] opacity-80 mix-blend-color-burn"></div>
        </div>
      </div>
    </div>
  );
}